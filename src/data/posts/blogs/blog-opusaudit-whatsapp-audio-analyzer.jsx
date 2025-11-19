export default function OpusAuditWhatsappAudioAnalyzer() {
    return (
        <>
            <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                OpusAudit es una herramienta de ciberseguridad que desarrollé para identificar posibles filtraciones de información sensible en audios de WhatsApp. Utilizando IA y ADB, extrae audios de dispositivos Android y los analiza en busca de datos comprometedores.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                Capturas de Pantalla
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                    <img
                        src="/blog/OpusAudit/Interface.webp"
                        alt="Interfaz principal de OpusAudit"
                        className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-center mt-2 text-base-content/70">Interfaz principal de OpusAudit</p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                    <img
                        src="/blog/OpusAudit/Results-Interface.webp"
                        alt="Análisis de audios en progreso"
                        className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-center mt-2 text-base-content/70">Análisis de audios en progreso</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                ¿Cómo Funciona?
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                1. Extracción de Audios con ADB
            </h3>
            <p>
                Utilizando Android Debug Bridge (ADB), OpusAudit se conecta al dispositivo y extrae los archivos .opus almacenados en WhatsApp.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                2. Transcripción con Whisper AI
            </h3>
            <p>
                OpusAudit utiliza <strong>Whisper de OpenAI</strong>, un modelo de reconocimiento de voz de última generación con precisión del 95%+ en español e inglés.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-3 text-base-content flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Consideraciones Éticas y Legales
                </h3>
                <p className="text-base-content/80">
                    <strong>OpusAudit debe usarse ÚNICAMENTE en dispositivos propios o con consentimiento explícito.</strong> Analizar audios de terceros sin autorización es ilegal en la mayoría de jurisdicciones.
                </p>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-base-200 border border-base-content/10">
                <h3 className="text-xl font-bold mb-4 text-base-content">
                    Enlaces del Proyecto
                </h3>
                <div className="flex flex-col gap-3">
                    <a
                        href="https://github.com/OOMrConrado/OpusAudit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Repositorio en GitHub
                    </a>
                </div>
            </div>
        </>
    );
}
