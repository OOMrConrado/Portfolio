export const about = {
    name: "Conrado Gómez",
    role: "Software Developer",
    about: "Desarrollador de Software con formación en Calidad y Testing, especializado en Python y JavaScript. Actualmente cursando Tecnicatura en Desarrollo y Calidad de Software, con 1 año de experiencia construyendo aplicaciones web fullstack, APIs REST, sistemas de automatización y aplicaciones de escritorio. Trabajo en todo el stack: desde arquitectura backend con Flask y bases de datos (MySQL, MongoDB, Firebase) hasta interfaces modernas con Next.js y TypeScript. Co-fundador de CoderLux un Tech Startup enfocado en crear soluciones escalables con énfasis en calidad de código.",
    email: "conradogomez556@gmail.com",
    coderluxUrl: "https://coderlux.com/",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Fullstack Developer from Argentina with training in Software Quality and Testing. Specializing in Python, Flask, React, and Next.js. Co-founder of CoderLux building web applications, chatbots, and automation solutions with focus on code quality.",
    keywords: "Conrado Gómez, fullstack developer, QA developer, software quality, testing, Python developer, React developer, Next.js, Flask, Argentina developer, CoderLux, web developer portfolio, junior developer, Jest, Pytest",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
    { name: "Python", devicon: "devicon-python-original" },
    { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
    { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
    { name: "C", devicon: "devicon-c-plain colored" },
    { name: "C#", devicon: "devicon-csharp-original" },
    { name: "HTML", devicon: "devicon-html5-plain colored" },
    { name: "CSS", devicon: "devicon-css3-plain colored" },
    { name: "React", devicon: "devicon-react-original colored" },
    { name: "Next.js", devicon: "devicon-nextjs-plain" },
    { name: "Flask", devicon: "devicon-flask-original" },
    { name: "Vite", devicon: "devicon-vitejs-original" },
    { name: "Tailwind CSS", devicon: "devicon-tailwindcss-original colored" },
    { name: "MySQL", devicon: "devicon-mysql-plain colored" },
    { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
    { name: "Firebase", devicon: "devicon-firebase-plain colored" },
    { name: "Supabase", devicon: "devicon-supabase-plain colored" },
    { name: "Docker", devicon: "devicon-docker-plain colored" },
    { name: "Git", devicon: "devicon-git-plain colored" },
    { name: "npm", devicon: "devicon-npm-original-wordmark colored" },
    { name: "Postman", devicon: "devicon-postman-plain colored" },
    { name: "Vercel", devicon: "devicon-vercel-plain" },
    { name: "Netlify", devicon: "devicon-netlify-plain colored" },
    { name: "Jira", devicon: "devicon-jira-plain colored" },
    { name: "Linux", devicon: "devicon-linux-original" },
];

export const socials = {
    linkedin: "https://www.linkedin.com/in/conrado-gomez",
    github: "https://github.com/OOMrConrado",
    instagram: "https://www.instagram.com/conrado__gomez",
    email: "mailto:conradogomez556@gmail.com",
};

export const languages = [
    { name: "Español", level: "Nativo" },
    { name: "English", level: "B2 - Intermedio Alto" },
];

export const projects = {
    pinProjects: [
        {
            title: "PyCraft | Creador y Gestor de servidores Minecraft, simple e intuitivo.",
            description:
                "Herramienta que simplifica la creación de servidores de Minecraft, permitiéndote descargar, configurar y lanzar servidores vanilla o modificados automáticamente. Con soporte para Forge, Fabric y búsqueda integrada de modpacks de Modrinth. (Aplicación Escritorio - código disponible en GitHub)",
            tags: ["Python", "CustomTkinter", "Threading", "Requests", "GUI"],
            link: "/blogs/pycraft-minecraft-server-manager",
            githubLink: "https://github.com/OOMrConrado/PyCraft",
            websiteUrl: null,
            image: "/blog/PyCraft/preview.png",
        },
        {
            title: "OpusAudit | Herramienta de análisis de audios de WhatsApp",
            description:
                "Aplicación de escritorio que analiza audios de WhatsApp en dispositivos Android, extrayéndolos mediante ADB y procesándolos con IA para identificar información sensible como contraseñas o datos bancarios. Interfaz gráfica bilingüe con análisis en tiempo real usando Whisper AI para prevenir riesgos de ciberseguridad. (Aplicación Desktop - código en GitHub)",
            tags: ["Python", "PyQt5", "Ciberseguridad", "Whisper AI"],
            link: "/blogs/opusaudit-whatsapp-audio-analyzer",
            githubLink: "https://github.com/OOMrConrado/OpusAudit",
            image: "/blog/OpusAudit/preview.png",
        },
        {
            title: "EdgeVoice | API de texto a voz compatible con OpenAI",
            description:
                "API REST de texto a voz compatible con el formato de OpenAI que utiliza el servicio TTS de Microsoft Edge. Soporta múltiples formatos de audio (MP3, Opus, AAC, FLAC), control de velocidad de reproducción y streaming mediante Server-Sent Events. (API auto-hospedable - instrucciones en GitHub)",
            tags: ["Python", "Text-to-Speech", "Streaming", "OpenAI", "API"],
            link: "/blogs/edgevoice-text-to-speech-api",
            githubLink: "https://github.com/OOMrConrado/EdgeVoice",
            image: "/blog/EdgeVoice/preview.png",
        },
        {
            title: "ArchSetup System Monitor | Monitor de sistema personalizado para Arch Linux",
            description:
                "Escrito en C para Arch Linux con interfaz colorida en terminal. Muestra información de CPU (modelo, núcleos, uso y temperatura), memoria RAM/SWAP, uptime, disco y procesos principales. Incluye modo watch con actualizaciones continuas y opciones modulares para personalizar la información mostrada. (Herramienta CLI - código en GitHub)",
            tags: ["C", "Linux", "Sistemas", "CLI"],
            link: "/blogs/archsetup-system-monitor",
            githubLink: "https://github.com/OOMrConrado/ArchSetup",
            image: "/blog/ArchSetup/preview.png",
        },
    ],
    otherProjects: [],
};

export const experience = [
    {
        title: "Fullstack Developer - Desarrollo Web & Automatización",
        company: "CoderLux",
        role: "Co-Fundador",
        achievements: [
            "Desarrollo de aplicaciones web completas incluyendo dashboards de analytics para 300+ usuarios y sistemas CMS personalizados, logrando alta retención con 3 contratos recurrentes",
            "Implementación de 3 chatbots con WhatsApp Business API que redujeron costos operativos de cliente de seguros en 70% automatizando el 80% de consultas frecuentes (de 24h de espera a respuesta instantánea)",
            "Colaboración en equipo de 3 desarrolladores aplicando metodologías ágiles y control de versiones con Git para garantizar entregas puntuales y código de alta calidad",
            "Incremento de tráfico web en 45% para plataforma de evaluación y ranking de atletas de calistenia mediante rediseño UX/UI y optimización SEO",
            "Implementación de flujo de deployment continuo con Vercel utilizando estrategia de branching (dev/feature) y merges controlados a producción",
            "Reducción de tiempo de entrega de MVPs de 2 meses a 4 semanas mediante componentes reutilizables, gestión de tareas con to-do lists por desarrollador y presentaciones semanales para feedback iterativo"
        ],
        techStack: ["Next.js", "TypeScript", "Python", "Flask", "Firebase", "MySQL", "Git", "JavaScript", "Tailwind CSS", "React", "Node.js"],
        date: "2024 - Present",
    },
];

export const education = [
    {
        degree: "Tecnicatura en Desarrollo y Calidad de Software",
        institution: "Universidad del Norte Santo Tomás de Aquino",
        location: "Argentina",
        date: "2024 - 2026",
        status: "Cursando",
        description: "Formación técnica universitaria enfocada en el desarrollo de software y control de calidad. Incluye certificación de nivel intermedio de inglés (B1) y formación en metodologías ágiles, testing automatizado, y gestión de proyectos de software.",
        highlights: [
            "Análisis, Diseño e Implementación de aplicaciones web (Front End, Back End)",
            "Estrategias de QA y reducción de riesgos en proyectos de software",
            "Metodologías de desarrollo ágil y gestión de proyectos de software",
            "Bases de datos relacionales y diseño de arquitectura de software",
            "Control de Calidad y Testing Automatizado",
            "Inglés técnico nivel B1 certificado",
        ]
    },
];

export const certifications = [
    // Hard Skills (Technical)
    {
        title: "Google UX Design Professional Certificate",
        issuer: "Google (Coursera)",
        date: "Enero 2025",
        credentialId: "D21AK808AH5R",
        link: "https://coursera.org/verify/professional-cert/D21AK808AH5R",
        description: "Certificación profesional en diseño UX/UI, prototipado en Figma, investigación de usuarios y testing",
        icon: "palette",
        image: "/Certs/cert-google-ux.pdf"
    },
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp + Microsoft",
        date: "Diciembre 2024",
        link: "https://freecodecamp.org/certification/Conrado_117/foundational-c-sharp-with-microsoft",
        description: "Certificación de desarrollador en fundamentos de C# avalada por Microsoft",
        icon: "code",
        image: "/Certs/cert-csharp-microsoft.pdf"
    },
    {
        title: "Desarrollo Web",
        issuer: "Aprendé Programando - Gobierno de Buenos Aires",
        date: "Julio 2023",
        description: "Curso de desarrollo web del programa federal del Ministerio de Educación",
        icon: "globe",
        image: "/Certs/cert-desarrollo-web.pdf"
    },
    // Soft Skills
    {
        title: "Jornada UNSTA Emprende 2025",
        issuer: "Universidad del Norte Santo Tomás de Aquino",
        date: "Octubre 2025",
        description: "Certificado de asistencia en jornadas de emprendimiento y vinculación con el medio",
        icon: "university",
        image: "/Certs/cert-unsta-emprende.webp"
    },
    {
        title: "Gestión Efectiva de Proyectos y Equipos",
        issuer: "Santander Open Academy",
        date: "Octubre 2025",
        description: "Certificación en gestión de proyectos y liderazgo de equipos de trabajo",
        icon: "university",
        image: "/Certs/cert-santander-Gestión Efectiva de proyectos y equipos.pdf"
    },
    {
        title: "Pensamiento Crítico y Resolución de Problemas",
        issuer: "Santander Open Academy",
        date: "Octubre 2025",
        description: "Certificación en habilidades de pensamiento crítico y técnicas de resolución de problemas",
        icon: "university",
        image: "/Certs/cert-santander-Pensamiento critico y resolución de problemas.pdf"
    },
    {
        title: "Pensamiento Estratégico y Mentalidad Estratégica",
        issuer: "Santander Open Academy",
        date: "Octubre 2025",
        description: "Certificación en desarrollo de pensamiento estratégico y planificación a largo plazo",
        icon: "university",
        image: "/Certs/cert-santander-Pensamiento estratégico y mentalidad estratégica.pdf"
    },

];

export const blogs = [
    {
        slug: "pycraft-minecraft-server-manager",
        title: "PyCraft: Creador y Gestor de Servidores Minecraft",
        excerpt: "Aplicación de escritorio que simplifica la creación de servidores de Minecraft con soporte para Forge, Fabric y búsqueda integrada de modpacks de Modrinth.",
        date: "2025-11-10",
        readTime: "5 min",
        author: "Conrado Gómez",
        category: "Proyectos",
        tags: ["Python", "CustomTkinter", "Gaming", "Desktop App"],
        featured: true,
    },
    {
        slug: "opusaudit-whatsapp-audio-analyzer",
        title: "OpusAudit: Herramienta de Análisis de Audios de WhatsApp",
        excerpt: "Aplicación de escritorio que analiza audios de WhatsApp usando IA para identificar información sensible y prevenir riesgos de ciberseguridad.",
        date: "2025-09-02",
        readTime: "6 min",
        author: "Conrado Gómez",
        category: "Proyectos",
        tags: ["Python", "PyQt5", "Ciberseguridad", "Whisper AI"],
        featured: true,
    },
    {
        slug: "edgevoice-text-to-speech-api",
        title: "EdgeVoice: API de Texto a Voz Compatible con OpenAI",
        excerpt: "API REST de texto a voz que utiliza Microsoft Edge TTS con soporte para múltiples formatos de audio y streaming en tiempo real.",
        date: "2024-10-20",
        readTime: "5 min",
        author: "Conrado Gómez",
        category: "Proyectos",
        tags: ["Python", "API", "Text-to-Speech", "OpenAI"],
        featured: true,
    },
    {
        slug: "archsetup-system-monitor",
        title: "ArchSetup System Monitor: Monitor de Sistema para Arch Linux",
        excerpt: "Monitor de sistema escrito en C para Arch Linux con interfaz colorida en terminal que muestra información detallada del sistema en tiempo real.",
        date: "2025-09-20",
        readTime: "5 min",
        author: "Conrado Gómez",
        category: "Proyectos",
        tags: ["C", "Linux", "Sistemas", "CLI"],
        featured: false,
    },
];
