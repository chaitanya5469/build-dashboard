import React, { useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <h2 className="mb-md">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">A showcase of my technical work and innovations</p>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-icon mb-md">{project.icon}</div>
                            <h3 className="project-title mb-sm">{project.title}</h3>
                            <p className="project-subtitle mb-sm">{project.subtitle}</p>
                            <p className="project-description mb-md">{project.description}</p>
                            <div className="project-tags mb-md">
                                {project.tags.slice(0, 4).map((tag, idx) => (
                                    <span key={idx} className="badge">{tag}</span>
                                ))}
                                {project.tags.length > 4 && (
                                    <span className="badge">+{project.tags.length - 4} more</span>
                                )}
                            </div>
                            <div className="project-links">
                                {project.links.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                <button onClick={() => setSelectedProject(project)} className="project-link view-details-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Projects;
