import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content glass-card">
                <button className="modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="modal-header">
                    <div className="modal-icon">{project.icon}</div>
                    <div>
                        <h2 className="modal-title">{project.title}</h2>
                        <p className="modal-subtitle">{project.subtitle}</p>
                    </div>
                </div>

                <div className="modal-body">
                    <section className="modal-section">
                        <h3>📝 Overview</h3>
                        <p>{project.description}</p>
                    </section>

                    {project.architecture && (
                        <section className="modal-section">
                            <h3>🏗️ Architecture</h3>
                            <div className="architecture-flow">
                                {project.architecture}
                            </div>
                        </section>
                    )}

                    <section className="modal-section">
                        <h3>✨ Key Features</h3>
                        <ul className="features-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="modal-section">
                        <h3>🛠️ Tech Stack</h3>
                        <div className="tech-stack-grid">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className="badge tech-badge">{tech}</span>
                            ))}
                        </div>
                    </section>

                    {project.highlights && (
                        <section className="modal-section">
                            <h3>🎯 Highlights</h3>
                            <ul className="highlights-list">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="modal-section">
                        <h3>🔗 Links</h3>
                        <div className="modal-links">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                            {project.links.live && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                    View Live Demo
                                </a>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
