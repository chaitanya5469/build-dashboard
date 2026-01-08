import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <h2 className="mb-md">Experience & <span className="text-gradient">Leadership</span></h2>
                    <p className="section-subtitle">Positions of responsibility and achievements</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item glass-card">
                        <div className="timeline-marker">🎖️</div>
                        <div className="timeline-content">
                            <div className="timeline-date">2016 - 2023</div>
                            <h3 className="timeline-title">Cadet</h3>
                            <p className="timeline-org">National Cadet Corps</p>
                            <p className="timeline-description">
                                Served as a cadet in the National Cadet Corps, developing leadership skills, discipline,
                                and teamwork through rigorous training and community service activities.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item glass-card">
                        <div className="timeline-marker">🎯</div>
                        <div className="timeline-content">
                            <div className="timeline-date">2023 - Present</div>
                            <h3 className="timeline-title">Management Team Member</h3>
                            <p className="timeline-org">HTC, NIT Kurukshetra</p>
                            <p className="timeline-description">
                                Active member of the management team, organizing technical events, workshops, and hackathons
                                to foster innovation and collaboration among students.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item glass-card">
                        <div className="timeline-marker">🏆</div>
                        <div className="timeline-content">
                            <div className="timeline-date">October 2024</div>
                            <h3 className="timeline-title">Top Performer</h3>
                            <p className="timeline-org">Smart India Hackathon</p>
                            <p className="timeline-description">
                                Recognized as a top performer in the Smart India Hackathon, showcasing innovative problem-solving
                                and technical expertise in developing real-world solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
