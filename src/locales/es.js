export const es = {
    nav: {
        about: "Acerca de",
        projects: "Proyectos",
        experience: "Experiencia",
        education: "Educación",
        blogs: "Blogs",
        home: "Inicio",
    },
    profile: {
        role: "Desarrollador de Software",
        available: "Disponible",
    },
    about: {
        title: "Acerca de",
        description: "Desarrollador de Software con formación en Calidad y Testing, especializado en Python y JavaScript. Actualmente cursando Tecnicatura en Desarrollo y Calidad de Software, con 1 año de experiencia construyendo aplicaciones web fullstack, APIs REST, sistemas de automatización y aplicaciones de escritorio. Trabajo en todo el stack: desde arquitectura backend con Flask y bases de datos (MySQL, MongoDB, Firebase) hasta interfaces modernas con Next.js y TypeScript. Co-fundador de CoderLux un Tech Startup enfocado en crear soluciones escalables con énfasis en calidad de código.",
        contactQuestion: "¿Tienes alguna pregunta o quieres colaborar? Contáctame por",
        or: "o",
        email: "email",
        alwaysOpen: ". Siempre estoy abierto a nuevas oportunidades.",
    },
    projects: {
        title: "Proyectos",
        seeAll: "Ver Todo",
        allProjects: "Todos los Proyectos",
        backToHome: "Volver al Inicio",
    },
    experience: {
        title: "Experiencia",
        present: "Presente",
        techStack: "Stack Tecnológico",
        cofounder: "Co-Fundador",
    },
    techStack: {
        title: "Tecnologías que Uso",
    },
    education: {
        title: "Educación",
        status: "Estado",
        studying: "Cursando",
        highlights: "Aspectos Destacados",
    },
    certifications: {
        title: "Certificaciones",
        seeAll: "Ver Todo",
        allCertifications: "Todas las Certificaciones",
        viewCertificate: "Ver Certificado",
        verify: "Verificar",
        backToHome: "Volver al Inicio",
        completeList: "Lista completa de mis certificaciones profesionales y cursos",
    },
    blogs: {
        title: "Blog",
        readMore: "Leer más",
        readTime: "min de lectura",
        backToBlog: "Volver al blog",
        allArticles: "Ver todos los artículos",
        likedArticle: "¿Te gustó este artículo?",
        discoverMore: "Descubre más artículos sobre desarrollo de software y mejores prácticas.",
        featured: "Destacado",
        tags: "Tags",
    },
    footer: {
        rights: "Todos los derechos reservados",
        builtWith: "Construido con",
    },
    languages: {
        spanish: "Español",
        english: "English",
    },
    data: {
        projects: {
            pinProjects: [
                {
                    title: "PyCraft | Creador y Gestor de servidores Minecraft, simple e intuitivo.",
                    description: "Herramienta que simplifica la creación de servidores de Minecraft, permitiéndote descargar, configurar y lanzar servidores vanilla o modificados automáticamente. Con soporte para Forge, Fabric y búsqueda integrada de modpacks de Modrinth. (Aplicación Escritorio - código disponible en GitHub)",
                    tags: ["Python", "CustomTkinter", "Threading", "Requests", "GUI"],
                    link: "/blogs/pycraft-minecraft-server-manager",
                    githubLink: "https://github.com/OOMrConrado/PyCraft",
                    websiteUrl: null,
                    image: "/blog/PyCraft/preview.png",
                },
                {
                    title: "OpusAudit | Herramienta de análisis de audios de WhatsApp",
                    description: "Aplicación de escritorio que analiza audios de WhatsApp en dispositivos Android, extrayéndolos mediante ADB y procesándolos con IA para identificar información sensible como contraseñas o datos bancarios. Interfaz gráfica bilingüe con análisis en tiempo real usando Whisper AI para prevenir riesgos de ciberseguridad. (Aplicación Desktop - código en GitHub)",
                    tags: ["Python", "PyQt5", "Ciberseguridad", "Whisper AI"],
                    link: "/blogs/opusaudit-whatsapp-audio-analyzer",
                    githubLink: "https://github.com/OOMrConrado/OpusAudit",
                    websiteUrl: null,
                    image: "/blog/OpusAudit/preview.png",
                },
                {
                    title: "EdgeVoice | API de texto a voz compatible con OpenAI",
                    description: "API REST de texto a voz compatible con el formato de OpenAI que utiliza el servicio TTS de Microsoft Edge. Soporta múltiples formatos de audio (MP3, Opus, AAC, FLAC), control de velocidad de reproducción y streaming mediante Server-Sent Events. (API auto-hospedable - instrucciones en GitHub)",
                    tags: ["Python", "Text-to-Speech", "Streaming", "OpenAI", "API"],
                    link: "/blogs/edgevoice-text-to-speech-api",
                    githubLink: "https://github.com/OOMrConrado/EdgeVoice",
                    websiteUrl: null,
                    image: "/blog/EdgeVoice/preview.png",
                },
                {
                    title: "ArchSetup System Monitor | Monitor de sistema personalizado para Arch Linux",
                    description: "Escrito en C para Arch Linux con interfaz colorida en terminal. Muestra información de CPU (modelo, núcleos, uso y temperatura), memoria RAM/SWAP, uptime, disco y procesos principales. Incluye modo watch con actualizaciones continuas y opciones modulares para personalizar la información mostrada. (Herramienta CLI - código en GitHub)",
                    tags: ["C", "Linux", "Sistemas", "CLI"],
                    link: "/blogs/archsetup-system-monitor",
                    githubLink: "https://github.com/OOMrConrado/ArchSetup",
                    websiteUrl: null,
                    image: "/blog/ArchSetup/preview.png",
                },
            ],
        },
        experience: [
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
                date: "2024 - Presente",
            },
        ],
        education: [
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
        ],
        certifications: [
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
        ],
        languages: [
            { name: "Español", level: "Nativo" },
            { name: "English", level: "B2 - Intermedio Alto" },
        ],
    },
};
