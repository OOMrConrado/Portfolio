// Blog Post Content - Refactored
// Each blog post is imported from its individual file

import QATestingProyectosAgiles from './blogs/blog-qa-testing-proyectos-agiles';
import AutomatizacionJiraWorkflows from './blogs/blog-automatizacion-jira-workflows';
import ScrumDesarrolloSoftwareCalidad from './blogs/blog-scrum-desarrollo-software-calidad';
import PyCraftMinecraftServerManager from './blogs/blog-pycraft-minecraft-server-manager';
import OpusAuditWhatsappAudioAnalyzer from './blogs/blog-opusaudit-whatsapp-audio-analyzer';
import EdgeVoiceTextToSpeechApi from './blogs/blog-edgevoice-text-to-speech-api';
import ArchSetupSystemMonitor from './blogs/blog-archsetup-system-monitor';

/**
 * Returns the content component for a given blog post slug
 * @param {string} slug - The blog post identifier
 * @returns {JSX.Element} - The blog post content component
 */
export function getPostContent(slug) {
    const posts = {
        "qa-testing-proyectos-agiles": <QATestingProyectosAgiles />,
        "automatizacion-jira-workflows": <AutomatizacionJiraWorkflows />,
        "scrum-desarrollo-software-calidad": <ScrumDesarrolloSoftwareCalidad />,
        "pycraft-minecraft-server-manager": <PyCraftMinecraftServerManager />,
        "opusaudit-whatsapp-audio-analyzer": <OpusAuditWhatsappAudioAnalyzer />,
        "edgevoice-text-to-speech-api": <EdgeVoiceTextToSpeechApi />,
        "archsetup-system-monitor": <ArchSetupSystemMonitor />,
    };

    return posts[slug] || <p>Contenido no disponible.</p>;
}
