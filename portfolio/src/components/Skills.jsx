import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'Java', icon: '☕' },
                { name: 'Kotlin', icon: '🎯' },
                { name: 'Python', icon: '🐍' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'SQL', icon: '🗄️' },
                { name: 'C', icon: '⚙️' },
                { name: 'Embedded C', icon: '🔧' },
                { name: 'MATLAB', icon: '📊' }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: '🛠️',
            skills: [
                { name: 'Jetpack Compose', icon: '📱' },
                { name: 'React.js', icon: '⚛️' },
                { name: 'Express.js', icon: '🚀' },
                { name: 'Room DB', icon: '💾' },
                { name: 'Streamlit', icon: '📈' },
                { name: 'Socket.io', icon: '🔌' }
            ]
        },
        {
            title: 'Developer Tools',
            icon: '🔨',
            skills: [
                { name: 'Git', icon: '📦' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Firebase Console', icon: '🔥' },
                { name: 'Android Studio', icon: '🤖' },
                { name: 'VS Code', icon: '💙' },
                { name: 'TinkerCAD', icon: '🎨' },
                { name: 'Arduino IDE', icon: '🔌' },
                { name: 'Hugging Face', icon: '🤗' }
            ]
        },
        {
            title: 'Cloud & Databases',
            icon: '☁️',
            skills: [
                { name: 'Firebase Realtime DB', icon: '🔥' },
                { name: 'Firebase Storage', icon: '📦' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Google Cloud APIs', icon: '🌐' },
                { name: 'AWS EC2', icon: '☁️' },
                { name: 'Render', icon: '🚀' }
            ]
        },
        {
            title: 'Soft Skills',
            icon: '🌟',
            skills: [
                { name: 'Problem-Solving', icon: '🧩' },
                { name: 'Team Collaboration', icon: '🤝' },
                { name: 'Leadership', icon: '👑' },
                { name: 'Communication', icon: '💬' }
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <h2 className="mb-md">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <div className="category-header mb-md">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="badge skill-badge">
                                        <span className="skill-icon">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
