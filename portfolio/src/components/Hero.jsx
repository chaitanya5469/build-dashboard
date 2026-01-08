import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTime = null;
                    const startValue = 0;
                    const endValue = parseFloat(end);

                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentCount = startValue + (endValue - startValue) * easeOutQuart;

                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(endValue);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [end, duration, hasAnimated]);

    const formatNumber = (num) => {
        if (end.toString().includes('.')) {
            return num.toFixed(2);
        }
        return Math.floor(num);
    };

    return (
        <span ref={counterRef}>
            {formatNumber(count)}{suffix}
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-content fade-in-up">
                        <div className="hero-badge mb-md">
                            <span className="badge">👋 Welcome to my portfolio</span>
                        </div>
                        <h1 className="hero-title mb-md">
                            Hi, I'm <span className="text-gradient">Chaitanya Cheemala</span>
                        </h1>
                        <p className="hero-subtitle mb-lg">
                            B.Tech in Industrial IoT at NIT Kurukshetra | DevOps | Full-Stack | Android | GenAI | IoT Enthusiast
                        </p>
                        <p className="hero-description mb-xl">
                            I am a B.Tech student in Industrial IoT at NIT Kurukshetra with hands-on experience in Android,
                            Full-Stack, IoT, GenAI, LLMs, Docker and K8s. Proficient in Java, Kotlin, C, Python.
                            Eager to contribute to impactful, real-world projects through internships.
                        </p>
                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Get In Touch
                            </a>
                        </div>
                        <div className="hero-stats mt-xl">
                            <div className="stat-item">
                                <div className="stat-value text-gradient">
                                    9.04
                                </div>
                                <div className="stat-label">CGPA</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value text-gradient">
                                    <CounterAnimation end={6} duration={2000} suffix="+" />
                                </div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value text-gradient">
                                    500+
                                </div>
                                <div className="stat-label">LeetCode</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value text-gradient">AIR 78</div>
                                <div className="stat-label">NDA Rank</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-container fade-in-up">
                        <div className="hero-image-wrapper">
                            <img src="/hero.jpeg" alt="Chaitanya Cheemala" className="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>
        </section>
    );
};

export default Hero;
