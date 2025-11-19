export const en = {
    nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        blogs: "Blogs",
        home: "Home",
    },
    profile: {
        role: "Software Developer",
        available: "Available",
    },
    about: {
        title: "About",
        description: "Software Developer with training in Quality and Testing, specializing in Python and JavaScript. Currently studying Software Development and Quality Degree, with 1 year of experience building fullstack web applications, REST APIs, automation systems, and desktop applications. I work across the full stack: from backend architecture with Flask and databases (MySQL, MongoDB, Firebase) to modern interfaces with Next.js and TypeScript. Co-founder of CoderLux, a Tech Startup focused on creating scalable solutions with emphasis on code quality.",
        contactQuestion: "Have any questions or want to collaborate? Contact me via",
        or: "or",
        email: "email",
        alwaysOpen: ". I'm always open to new opportunities.",
    },
    projects: {
        title: "Projects",
        seeAll: "See All",
        allProjects: "All Projects",
        backToHome: "Back to Home",
    },
    experience: {
        title: "Experience",
        present: "Present",
        techStack: "Tech Stack",
        cofounder: "Co-Founder",
    },
    education: {
        title: "Education",
        status: "Status",
        studying: "Studying",
        highlights: "Highlights",
    },
    certifications: {
        title: "Certifications",
        seeAll: "See All",
        allCertifications: "All Certifications",
        viewCertificate: "View Certificate",
        verify: "Verify",
        backToHome: "Back to Home",
        completeList: "Complete list of my professional certifications and courses",
    },
    blogs: {
        title: "Blog",
        readMore: "Read more",
        readTime: "min read",
        backToBlog: "Back to blog",
        allArticles: "View all articles",
        likedArticle: "Did you like this article?",
        discoverMore: "Discover more articles about software development and best practices.",
        featured: "Featured",
        tags: "Tags",
    },
    footer: {
        rights: "All rights reserved",
        builtWith: "Built with",
    },
    languages: {
        spanish: "Español",
        english: "English",
    },
    data: {
        projects: {
            pinProjects: [
                {
                    title: "PyCraft | Simple and Intuitive Minecraft Server Creator and Manager",
                    description: "Tool that simplifies the creation of Minecraft servers, allowing you to download, configure and launch vanilla or modded servers automatically. With support for Forge, Fabric and integrated Modrinth modpacks search. (Desktop Application - code available on GitHub)",
                    tags: ["Python", "CustomTkinter", "Threading", "Requests", "GUI"],
                    link: "/blogs/pycraft-minecraft-server-manager",
                    githubLink: "https://github.com/OOMrConrado/PyCraft",
                    websiteUrl: null,
                    image: "/blog/PyCraft/preview.png",
                },
                {
                    title: "OpusAudit | WhatsApp Audio Analysis Tool",
                    description: "Desktop application that analyzes WhatsApp audios on Android devices, extracting them via ADB and processing them with AI to identify sensitive information such as passwords or banking data. Bilingual graphical interface with real-time analysis using Whisper AI to prevent cybersecurity risks. (Desktop Application - code on GitHub)",
                    tags: ["Python", "PyQt5", "Cybersecurity", "Whisper AI"],
                    link: "/blogs/opusaudit-whatsapp-audio-analyzer",
                    githubLink: "https://github.com/OOMrConrado/OpusAudit",
                    websiteUrl: null,
                    image: "/blog/OpusAudit/preview.png",
                },
                {
                    title: "EdgeVoice | OpenAI-Compatible Text-to-Speech API",
                    description: "Text-to-speech REST API compatible with OpenAI format that uses Microsoft Edge TTS service. Supports multiple audio formats (MP3, Opus, AAC, FLAC), playback speed control and streaming via Server-Sent Events. (Self-hostable API - instructions on GitHub)",
                    tags: ["Python", "Text-to-Speech", "Streaming", "OpenAI", "API"],
                    link: "/blogs/edgevoice-text-to-speech-api",
                    githubLink: "https://github.com/OOMrConrado/EdgeVoice",
                    websiteUrl: null,
                    image: "/blog/EdgeVoice/preview.png",
                },
                {
                    title: "ArchSetup System Monitor | Custom System Monitor for Arch Linux",
                    description: "Written in C for Arch Linux with colorful terminal interface. Displays CPU information (model, cores, usage and temperature), RAM/SWAP memory, uptime, disk and top processes. Includes watch mode with continuous updates and modular options to customize displayed information. (CLI Tool - code on GitHub)",
                    tags: ["C", "Linux", "Systems", "CLI"],
                    link: "/blogs/archsetup-system-monitor",
                    githubLink: "https://github.com/OOMrConrado/ArchSetup",
                    websiteUrl: null,
                    image: "/blog/ArchSetup/preview.png",
                },
            ],
        },
        experience: [
            {
                title: "Fullstack Developer - Web Development & Automation",
                company: "CoderLux",
                role: "Co-Founder",
                achievements: [
                    "Development of complete web applications including analytics dashboards for 300+ users and custom CMS systems, achieving high retention with 3 recurring contracts",
                    "Implementation of 3 chatbots with WhatsApp Business API that reduced insurance client's operational costs by 70% by automating 80% of frequent queries (from 24h wait to instant response)",
                    "Collaboration in team of 3 developers applying agile methodologies and version control with Git to ensure timely deliveries and high-quality code",
                    "45% increase in web traffic for calisthenics athlete evaluation and ranking platform through UX/UI redesign and SEO optimization",
                    "Implementation of continuous deployment flow with Vercel using branching strategy (dev/feature) and controlled merges to production",
                    "Reduction of MVP delivery time from 2 months to 4 weeks through reusable components, task management with to-do lists per developer and weekly presentations for iterative feedback"
                ],
                techStack: ["Next.js", "TypeScript", "Python", "Flask", "Firebase", "MySQL", "Git", "JavaScript", "Tailwind CSS", "React", "Node.js"],
                date: "2024 - Present",
            },
        ],
        education: [
            {
                degree: "Software Development and Quality Degree",
                institution: "Universidad del Norte Santo Tomás de Aquino",
                location: "Argentina",
                date: "2024 - 2026",
                status: "Studying",
                description: "University technical training focused on software development and quality control. Includes intermediate level English certification (B1) and training in agile methodologies, automated testing, and software project management.",
                highlights: [
                    "Analysis, Design and Implementation of web applications (Front End, Back End)",
                    "QA strategies and risk reduction in software projects",
                    "Agile development methodologies and software project management",
                    "Relational databases and software architecture design",
                    "Quality Control and Automated Testing",
                    "B1 level certified technical English",
                ]
            },
        ],
        certifications: [
            {
                title: "Google UX Design Professional Certificate",
                issuer: "Google (Coursera)",
                date: "January 2025",
                credentialId: "D21AK808AH5R",
                link: "https://coursera.org/verify/professional-cert/D21AK808AH5R",
                description: "Professional certification in UX/UI design, Figma prototyping, user research and testing",
                icon: "palette",
                image: "/Certs/cert-google-ux.pdf"
            },
            {
                title: "Foundational C# with Microsoft",
                issuer: "freeCodeCamp + Microsoft",
                date: "December 2024",
                link: "https://freecodecamp.org/certification/Conrado_117/foundational-c-sharp-with-microsoft",
                description: "Developer certification in C# fundamentals endorsed by Microsoft",
                icon: "code",
                image: "/Certs/cert-csharp-microsoft.pdf"
            },
            {
                title: "Web Development",
                issuer: "Aprendé Programando - Buenos Aires Government",
                date: "July 2023",
                description: "Web development course from the Ministry of Education's federal program",
                icon: "globe",
                image: "/Certs/cert-desarrollo-web.pdf"
            },
            {
                title: "UNSTA Emprende 2025 Conference",
                issuer: "Universidad del Norte Santo Tomás de Aquino",
                date: "October 2025",
                description: "Certificate of attendance in entrepreneurship and community engagement conference",
                icon: "university",
                image: "/Certs/cert-unsta-emprende.webp"
            },
            {
                title: "Effective Project and Team Management",
                issuer: "Santander Open Academy",
                date: "October 2025",
                description: "Certification in project management and team leadership",
                icon: "university",
                image: "/Certs/cert-santander-Gestión Efectiva de proyectos y equipos.pdf"
            },
            {
                title: "Critical Thinking and Problem Solving",
                issuer: "Santander Open Academy",
                date: "October 2025",
                description: "Certification in critical thinking skills and problem-solving techniques",
                icon: "university",
                image: "/Certs/cert-santander-Pensamiento critico y resolución de problemas.pdf"
            },
            {
                title: "Strategic Thinking and Strategic Mindset",
                issuer: "Santander Open Academy",
                date: "October 2025",
                description: "Certification in strategic thinking development and long-term planning",
                icon: "university",
                image: "/Certs/cert-santander-Pensamiento estratégico y mentalidad estratégica.pdf"
            },
        ],
        languages: [
            { name: "Spanish", level: "Native" },
            { name: "English", level: "B2 - Upper Intermediate" },
        ],
    },
};
