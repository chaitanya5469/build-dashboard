export const projectsData = [
    {
        id: 'buildpulse',
        title: 'BuildPulse',
        subtitle: 'Android CI/CD Pipeline with AI-Powered Failure Analysis',
        description: 'Fully containerized CI/CD pipeline for Android builds with AI-powered failure analysis using Google Gemini. Features automated builds, unit testing, and intelligent debugging assistance deployed on AWS EC2.',
        icon: '🚀',
        tags: ['Docker', 'AWS EC2', 'GitHub Actions', 'Gemini AI', 'Node.js', 'Android', 'DevOps'],
        links: {
            github: 'https://github.com/chaitanya5469/AndroidBuild',
            live: 'https://androidci.chaitanyadev.in'
        },
        features: [
            'Fully Dockerized Android build environment',
            'Automated CI/CD using GitHub Actions',
            'Unit test execution after build',
            'Build and runtime log capture',
            'AI-based failure explanation and fix suggestions',
            'Structured build data for dashboard consumption',
            'Zero paid CI services used'
        ],
        techStack: ['Docker', 'GitHub Actions', 'Gradle', 'Gemini AI', 'Node.js', 'Express.js', 'AWS EC2', 'Nginx'],
        architecture: 'Developer Push → GitHub Actions → Dockerized Android Build → Gradle Build + Tests → Gemini AI Analysis → Web Dashboard (EC2)',
        highlights: [
            'Demonstrates real-world Android DevOps',
            'Shows LLM integration into CI pipelines',
            'Fully containerized, production-style deployment',
            'Built using free-tier infrastructure only'
        ]
    },
    {
        id: 'greenpulse',
        title: 'GreenPulse',
        subtitle: 'IoT-Based Smart Irrigation System',
        description: 'Smart irrigation Android app with real-time sensor monitoring, AI-powered crop suggestions, and automated watering control using ESP8266 and Firebase.',
        icon: '🌱',
        tags: ['IoT', 'Android', 'Kotlin', 'Firebase', 'Arduino', 'ESP8266', 'Gemini AI'],
        links: {
            github: 'https://github.com/chaitanya5469/GreenPulse'
        },
        features: [
            'Device registration with unique deviceId',
            'Real-time dashboard with temperature, humidity, and soil moisture',
            'Interactive line charts for historical data trends',
            'Visual watering timeline with automatic and manual records',
            'Smart watering triggered by soil moisture threshold',
            'AI-based crop suggestions using Gemini API',
            'Firebase Realtime Database integration',
            'ESP8266 compatibility with 15-second data updates'
        ],
        techStack: ['Kotlin', 'Jetpack Compose', 'Firebase Realtime DB', 'Firebase Storage', 'Gemini AI', 'Arduino', 'ESP8266', 'Compose LineChart'],
        architecture: 'ESP8266 Sensors → Firebase Realtime DB → Android App → Gemini AI → Smart Watering Control',
        highlights: [
            'Glassmorphism-styled UI with device cards',
            'Device online/offline detection with notifications',
            'Expandable card views for historical trends',
            'Threshold-based automatic watering system'
        ]
    },
    {
        id: 'codepilot',
        title: 'CodePilot',
        subtitle: 'AI-Powered Code Review Assistant',
        description: 'Intelligent code review application providing smart autocompletion, real-time error detection, and integrated documentation lookup for enhanced developer productivity.',
        icon: '🤖',
        tags: ['AI/ML', 'Code Analysis', 'Developer Tools', 'Automation'],
        links: {
            github: 'https://github.com/chaitanya5469/CodePilot'
        },
        features: [
            'Smart code autocompletion',
            'Real-time error detection and debugging help',
            'Integrated documentation lookup',
            'Lightweight and fast performance',
            'Secure and privacy-friendly'
        ],
        techStack: ['AI/ML', 'Code Analysis Tools', 'Developer APIs'],
        highlights: [
            'Improves code quality and developer productivity',
            'Real-time assistance during development',
            'Privacy-focused design'
        ]
    },
    {
        id: 'englishbuddy',
        title: 'EnglishBuddy',
        subtitle: 'AI Language Tutor Assistant',
        description: 'AI-powered language learning assistant for improving English communication skills with personalized feedback and interactive lessons.',
        icon: '📚',
        tags: ['AI', 'NLP', 'Python', 'Education', 'Hugging Face'],
        links: {
            github: 'https://github.com/chaitanya5469/EnglishBuddy'
        },
        features: [
            'Personalized English learning experience',
            'AI-powered feedback on communication',
            'Interactive lessons and exercises',
            'Progress tracking and analytics'
        ],
        techStack: ['Python', 'NLP', 'Hugging Face', 'AI/ML'],
        highlights: [
            'Adaptive learning based on user proficiency',
            'Real-time pronunciation and grammar feedback',
            'Gamified learning experience'
        ]
    },
    {
        id: 'ychat',
        title: 'Y-Chat',
        subtitle: 'Real-Time Messaging Platform',
        description: 'Feature-rich chat messaging application built with Java and Kotlin, offering real-time communication with multimedia support, online status, typing indicators, and read receipts.',
        icon: '💬',
        tags: ['Android', 'Java', 'Kotlin', 'Firebase', 'Real-Time'],
        links: {
            github: 'https://github.com/chaitanya5469/Ychat'
        },
        features: [
            'Phone number authentication',
            'Real-time messaging with Firebase',
            'Image and multimedia sharing',
            'User online status tracking',
            'Typing indicators',
            'Read receipts',
            'Beautiful and user-friendly UI',
            'Firebase Cloud Messaging for notifications'
        ],
        techStack: ['Java', 'Kotlin', 'Firebase Authentication', 'Firebase Realtime DB', 'Firebase Storage', 'Firebase Cloud Messaging'],
        architecture: 'Android App → Firebase Authentication → Realtime Database → Cloud Messaging → Push Notifications',
        highlights: [
            'Complete messaging solution with modern features',
            'Secure phone-based authentication',
            'Real-time synchronization across devices'
        ]
    },
    {
        id: 'ipl-six-predictor',
        title: 'IPL Six Predictor',
        subtitle: 'Machine Learning Cricket Analytics',
        description: 'Streamlit-based ML application that predicts six-hitting probability in IPL matches using historical data and logistic regression.',
        icon: '🏏',
        tags: ['Machine Learning', 'Python', 'Streamlit', 'Data Analysis', 'Sports Analytics'],
        links: {
            github: 'https://github.com/chaitanya5469/iplsixprediction'
        },
        features: [
            'Team selection interface for home and opponent teams',
            'Six probability prediction for early overs',
            'Simple and interactive Streamlit UI',
            'Automatic model training on match data',
            'Logistic regression-based predictions'
        ],
        techStack: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'Label Encoder'],
        architecture: 'IPL Dataset → Data Preprocessing → Logistic Regression Model → Streamlit UI → Probability Prediction',
        highlights: [
            'Practical application of machine learning in sports',
            'User-friendly web interface',
            'Real-time prediction based on team matchups'
        ]
    }
];
