import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <h2 className="mb-md">About <span className="text-gradient">Me</span></h2>
                    <p className="section-subtitle">Get to know more about my journey and aspirations</p>
                </div>
                <div className="about-content">
                    <div className="about-card glass-card">
                        <div className="about-icon mb-md">🎓</div>
                        <h3 className="mb-sm">Education</h3>
                        <p className="mb-sm"><strong>National Institute of Technology, Kurukshetra</strong></p>
                        <p className="text-muted">B.Tech in Industrial Internet of Things (2023-2027)</p>
                        <p className="about-highlight text-gradient">CGPA: 9.04/10</p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon mb-md">💡</div>
                        <h3 className="mb-sm">Profile Summary</h3>
                        <p>
                            B.Tech student in Industrial IoT at NIT Kurukshetra with hands-on experience in Android,
                            Full-Stack, IoT, GenAI, LLMs, Docker and K8s. Proficient in Java, Kotlin, C, Python.
                            Eager to contribute to impactful, real-world projects through internships.
                        </p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon mb-md">🏆</div>
                        <h3 className="mb-sm">Key Achievements</h3>
                        <ul className="achievements-list">
                            <li>🥇 <strong>Top Performer</strong> - Smart India Hackathon (October 2024)</li>
                            <li>🎖️ <strong>AIR 78</strong> - NDA 151 (Among 4 lakh candidates)</li>
                            <li>💻 <strong>500+ Problems Solved</strong> - LeetCode</li>
                            <li>🏅 <strong>1st Rank</strong> - Mock Civils Exam, NIT Kurukshetra</li>
                            <li>⚔️ <strong>Cadet</strong> - National Cadet Corps (2016-2023)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
