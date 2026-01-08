# 🎯 Android CI Build Monitoring Dashboard

<div align="center">

![Dashboard Banner](https://via.placeholder.com/1200x300/1a1a2e/16213e?text=Android+CI+Dashboard)

### **Fully Containerized Web Dashboard for Android CI/CD Observability**

**🌐 Live at:** [chaitanyadev.in](https://chaitanyadev.in)

</div>

---

## 📖 Overview

This repository contains a **production-grade, fully containerized web dashboard** that visualizes Android CI build history, real-time status tracking, and **AI-generated failure analysis powered by Google Gemini**.

The dashboard consumes data from the **Android CI Pipeline API** and runs entirely within Docker containers deployed on **AWS EC2** infrastructure.

👉 **CI Pipeline Repository:** https://github.com/chaitanya5469/AndroidBuild

---

## 🏗️ System Architecture

```
📱 Android CI Pipeline
        ↓
🔌 Build Metadata + AI Insights API
        ↓
🐳 Containerized Backend (Docker)
        ↓
🎨 Web Dashboard UI
        ↓
☁️ AWS EC2 Deployment
        ↓
🌐 chaitanyadev.in
```

> This repository represents the **observability and monitoring layer** of the complete Android CI/CD ecosystem.

---

## ✨ Key Features

🎯 **Real-Time Monitoring**
- Live Android build status tracking
- Build success/failure visualization
- Commit information and metadata display

📊 **Comprehensive Analytics**
- Build duration tracking
- Historical build timeline
- Timestamp and version tracking

🤖 **AI-Powered Insights**
- Gemini AI-generated failure explanations
- Root cause analysis
- Automated fix suggestions

🔄 **User Experience**
- Manual refresh support
- Clean, responsive UI
- Fast load times

🐳 **Production Infrastructure**
- Fully containerized with Docker
- Deployed on AWS EC2
- Zero-downtime deployment capability

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| 🐳 **Containerization** | **Docker** | Application isolation & portability |
| ☁️ **Cloud Hosting** | **AWS EC2** | Production deployment infrastructure |
| 🔧 Backend | Node.js | API server & data aggregation |
| 🎨 Frontend | HTML, CSS, JavaScript | User interface |
| 📊 Data Source | GitHub Actions + Gemini AI | Build data & AI insights |
| 🌐 Domain | **chaitanyadev.in** | Custom domain deployment |

### 🐳 **Why Docker + AWS EC2?**

This project emphasizes **infrastructure-as-code** and **containerization best practices**:

✅ **Docker Advantages:**
- Consistent environments across development and production
- Easy scaling and orchestration
- Simplified dependency management
- Portable deployment artifacts

✅ **AWS EC2 Benefits:**
- Full control over infrastructure
- Cost-effective for small to medium workloads
- Easy integration with Docker
- Production-grade reliability

---

## 📁 Repository Structure

```
.
├── 🎨 frontend/
│   ├── index.html          # Dashboard UI
│   ├── styles.css          # Responsive styling
│   └── app.js              # Client-side logic
│
├── 🔧 backend/
│   ├── server.js           # Express API server
│
├── 🐳 Dockerfile           # Container definition
├── 🐳 docker-compose.yml   # Multi-container orchestration
├── ⚙️ .dockerignore        # Docker build optimization
├── 📜 nginx.conf           # Reverse proxy configuration
└── 📖 README.md
```

---

## 🖼️ Screenshots

### 📊 Dashboard Overview
![Dashboard Main View](https://github.com/chaitanya5469/build-dashboard/dash.png)

### 🤖 AI Failure Analysis
![AI Insights](https://github.com/chaitanya5469/build-dashboard/error.png)


---

## 🚀 Running Locally with Docker

### Prerequisites
- Docker installed
- Docker Compose installed

### Quick Start

```bash
# Clone the repository
git clone https://github.com/chaitanya5469/build-dashboard.git
cd build-dashboard

# Build and run with Docker Compose
docker-compose up --build
```

The dashboard will be available at:
```
http://localhost:3000
```

### 🐳 Docker Commands

```bash
# Build the Docker image
docker build -t android-ci-dashboard .

# Run the container
docker run -p 3000:3000 android-ci-dashboard

# View running containers
docker ps

# Stop the container
docker stop <container-id>

# View logs
docker logs <container-id>
```

---

## ☁️ AWS EC2 Deployment

### 🎯 Production Deployment Architecture

This dashboard is deployed on **AWS EC2** using Docker containers, demonstrating production-ready DevOps practices.

### Deployment Steps

```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@chaitanyadev.in

# Pull the latest code
git pull origin main

# Rebuild and restart containers
docker-compose down
docker-compose up -d --build

# Verify deployment
docker ps
curl http://localhost:3000/health
```

### 🐳 Container Management on EC2

```bash
# View container logs
docker-compose logs -f

# Restart services
docker-compose restart

# Update without downtime
docker-compose up -d --no-deps --build backend

# Monitor resources
docker stats
```

### 🔒 Security & Configuration

- Environment variables managed through `.env` file
- Reverse proxy configured with Nginx
- SSL/TLS termination for HTTPS
- Firewall rules configured for ports 80/443

---

## 📊 Data Source & Integration

The dashboard fetches real-time data from:

- 🔨 **Build Metadata** from CI pipeline API
- 🤖 **AI Failure Explanations** generated by Gemini
- ⏱️ **Latest build status** and timestamps
- 📈 **Historical analytics** and trends

### API Endpoints

```javascript
GET /api/builds          // Fetch all builds
GET /api/builds/:id      // Get specific build
GET /api/analytics       // Build statistics
GET /api/health          // Health check
```

---

## 🔗 Related Repository

**🔨 Android CI Pipeline:**  
https://github.com/chaitanya5469/AndroidBuild

---

## 💼 Interview & Portfolio Value

This project demonstrates:

✅ **End-to-End CI/CD Observability** - Complete monitoring solution  
✅ **Docker Containerization** - Production-ready container orchestration  
✅ **AWS Cloud Deployment** - Real-world EC2 infrastructure management  
✅ **AI Integration** - Modern LLM-powered DevOps workflows  
✅ **Full-Stack Development** - Backend API + Frontend dashboard  
✅ **DevOps Best Practices** - Infrastructure as code, automated deployments  
✅ **Production Domain** - Custom domain (chaitanyadev.in) with SSL  

### 🎯 Key Talking Points

- **Containerization Expertise:** Multi-stage Docker builds, docker-compose orchestration
- **Cloud Infrastructure:** AWS EC2 management, security groups, networking
- **Scalable Architecture:** Microservices-ready design, API-first approach
- **AI/ML Integration:** Practical LLM usage in DevOps workflows
- **Real Production System:** Live deployment at chaitanyadev.in

---

## 📄 License

Educational and demonstration use.

---

<div align="center">

### 🌐 **Live Demo**
## [chaitanyadev.in](https://chaitanyadev.in)

**⭐ Star this repo if you find it helpful!**

---

Made with ❤️ and ☕ | Deployed with 🐳 Docker on ☁️ AWS EC2



</div>