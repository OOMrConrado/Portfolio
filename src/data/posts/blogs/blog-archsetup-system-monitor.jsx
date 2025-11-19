export default function ArchSetupSystemMonitor() {
    return (
        <>
            <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                ArchSetup System Monitor es una herramienta CLI escrita en C que desarrollé para Arch Linux. Proporciona información detallada del sistema con una interfaz colorida en terminal.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                Características Principales
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                1. Información de CPU Detallada
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Modelo del procesador:</strong> Leído desde /proc/cpuinfo</li>
                <li><strong>Número de núcleos:</strong> Físicos y lógicos</li>
                <li><strong>Uso por núcleo:</strong> Porcentaje individual de cada core</li>
                <li><strong>Temperatura:</strong> Lectura desde /sys/class/thermal/</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                Stack Tecnológico
            </h2>
            <div className="bg-base-200 p-6 rounded-lg my-4">
                <ul className="space-y-3">
                    <li><strong>Lenguaje:</strong> C (C99 standard)</li>
                    <li><strong>Compilador:</strong> GCC</li>
                    <li><strong>Build System:</strong> Makefile personalizado</li>
                    <li><strong>Dependencias:</strong> Solo bibliotecas estándar de C</li>
                </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-3 text-base-content">
                    Desafío Técnico Resuelto
                </h3>
                <p className="text-base-content/80">
                    El mayor reto fue <strong>calcular el uso de CPU por núcleo de forma eficiente</strong>. La solución fue leer /proc/stat dos veces con un intervalo, calcular la diferencia de jiffies y aplicar la fórmula: uso = 100 * (1 - idle_delta / total_delta).
                </p>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-base-200 border border-base-content/10">
                <h3 className="text-xl font-bold mb-4 text-base-content">
                    Enlaces del Proyecto
                </h3>
                <div className="flex flex-col gap-3">
                    <a
                        href="https://github.com/OOMrConrado/ArchSetup"
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
