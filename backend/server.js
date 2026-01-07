/**
 * Build Dashboard Backend
 * - Fetches GitHub Actions runs
 * - Fetches Gemini AI analysis artifact for failed runs
 */

require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// ---------------- CONFIG ----------------
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = "chaitanya5469";     // <-- change this
const REPO = "LocalBuild";      // <-- change this
const PORT = 3000;

if (!GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN is not set. Check your .env file.");
  process.exit(1);
}

// Common GitHub headers
const ghHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

// ---------------- HELPERS ----------------
const AdmZip = require("adm-zip");

async function getGeminiAnalysis(runId) {
  const artifactsUrl = `https://api.github.com/repos/${OWNER}/${REPO}/actions/runs/${runId}/artifacts`;

  try {
    // 1. Fetch artifacts list
    const artifactsRes = await axios.get(artifactsUrl, {
      headers: ghHeaders,
    });

    const artifacts = artifactsRes.data.artifacts;

    // Prefer test analysis if present, else build analysis
    const preferredArtifacts = [
      {
        artifactName: "gemini-test-analysis",
        fileName: "gemini.txt",
      },
      {
        artifactName: "gemini-build-analysis",
        fileName: "gemini.txt",
      },
    ];

    let selectedArtifact = null;
    let expectedFile = null;

    for (const pref of preferredArtifacts) {
      const found = artifacts.find(a => a.name === pref.artifactName);
      if (found) {
        selectedArtifact = found;
        expectedFile = pref.fileName;
        break;
      }
    }

    if (!selectedArtifact) {
      return "Gemini analysis not available for this run.";
    }

    // 2. Download ZIP
    const zipRes = await axios.get(selectedArtifact.archive_download_url, {
      headers: ghHeaders,
      responseType: "arraybuffer",
    });

    // 3. Unzip
    const zip = new AdmZip(zipRes.data);
    const entries = zip.getEntries();

    const geminiFile = entries.find(e => e.entryName === expectedFile);

    if (!geminiFile) {
      return `Gemini artifact found (${selectedArtifact.name}), but ${expectedFile} is missing.`;
    }

    // 4. Return text content
    return geminiFile.getData().toString("utf-8");

  } catch (err) {
    return "Failed to retrieve Gemini analysis due to an API or unzip error.";
  }
}



// ---------------- ROUTES ----------------


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/builds", async (req, res) => {
  try {
    const runsRes = await axios.get(
      `https://api.github.com/repos/${OWNER}/${REPO}/actions/runs?per_page=10`,
      { headers: ghHeaders }
    );

    const runs = [];

    for (const run of runsRes.data.workflow_runs) {
      let gemini = null;

      if (run.conclusion === "failure") {
        try {
          gemini = await getGeminiAnalysis(run.id);
        } catch (e) {
          gemini = "Gemini analysis not available";
        }
      }
      console.log(gemini);

      runs.push({
        id: run.id,
        status: run.conclusion,
        branch: run.head_branch,
        commit: run.head_commit?.message?.split("\n")[0] || "Commit message not available",

        started_at: run.run_started_at,
        duration:
          (new Date(run.updated_at) - new Date(run.run_started_at)) / 1000,
        url: run.html_url,
        gemini,
      });
    }

    res.json(runs);
  } catch (err) {
    console.error("GitHub API error:");
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    } else {
      console.error(err.message);
    }

    res.status(500).json({ error: "Failed to fetch build data" });
  }
});

// ---------------- START SERVER ----------------

app.listen(PORT, () => {
  console.log(`✅ Build Dashboard API running at http://localhost:${PORT}`);
});
