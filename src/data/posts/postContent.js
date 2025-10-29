// Blog post content repository
// Each post is a JSX component with full article content

import { about } from "../data";

export function getPostContent(slug) {
    const posts = {
        "qa-testing-proyectos-agiles": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    La integración efectiva de Quality Assurance en metodologías ágiles es fundamental para entregar software de calidad sin comprometer la velocidad de desarrollo. Aquí te comparto las mejores prácticas basadas en mi experiencia.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    1. QA desde el Sprint Planning
                </h2>
                <p>
                    La calidad no debe ser una reflexión tardía. Desde el Sprint Planning, es crucial que el equipo de QA participe activamente en:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Definición de criterios de aceptación claros y medibles</li>
                    <li>Identificación de casos de prueba críticos</li>
                    <li>Estimación realista del esfuerzo de testing</li>
                    <li>Detección temprana de riesgos técnicos</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    2. Testing Continuo en el Sprint
                </h2>
                <p>
                    En lugar de dejar el testing para el final del sprint, implementa un enfoque de testing continuo:
                </p>
                <div className="bg-base-200 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                    <p className="font-semibold text-base-content mb-2">💡 Práctica recomendada:</p>
                    <p className="text-base-content/80">
                        Realiza testing exploratorio diario de las funcionalidades completadas. Esto permite detectar bugs temprano cuando son más baratos de corregir.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    3. Automatización Estratégica
                </h2>
                <p>
                    No todo debe automatizarse. Enfócate en automatizar:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Pruebas de regresión:</strong> Casos críticos que se ejecutan frecuentemente</li>
                    <li><strong>Pruebas de humo:</strong> Verificación rápida de funcionalidad básica</li>
                    <li><strong>Pruebas de API:</strong> Validación de contratos entre servicios</li>
                    <li><strong>Pruebas unitarias:</strong> Desarrolladas por el equipo de desarrollo</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    4. Definition of Done (DoD) con QA
                </h2>
                <p>
                    Una historia no está "Done" hasta que:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Todos los criterios de aceptación son cumplidos</li>
                    <li>Las pruebas automatizadas pasan exitosamente</li>
                    <li>El testing exploratorio no encuentra bugs críticos</li>
                    <li>La documentación está actualizada (si aplica)</li>
                    <li>El código ha sido revisado (Code Review)</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    5. Comunicación y Colaboración
                </h2>
                <p>
                    En mi experiencia en <a href={about.coderluxUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-500 transition-colors"><strong>CoderLux</strong></a>, implementamos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Daily standups donde QA reporta bloqueos y hallazgos</li>
                    <li>Sesiones de Three Amigos (Dev, QA, PO) para refinar historias</li>
                    <li>Retrospectivas donde se discuten mejoras en procesos de calidad</li>
                    <li>Dashboards compartidos con métricas de calidad en tiempo real</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        Resultado en números
                    </h3>
                    <p className="text-base-content/80">
                        Aplicando estas prácticas en <a href={about.coderluxUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-500 transition-colors">CoderLux</a>, logramos reducir el tiempo de entrega de MVPs de <strong>2 meses a 4 semanas</strong>, manteniendo alta calidad y logrando <strong>3 contratos recurrentes</strong> gracias a la confianza de los clientes en nuestras entregas.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Conclusión
                </h2>
                <p>
                    QA en entornos ágiles no se trata de "probar al final", sino de integrar la calidad en cada etapa del desarrollo. Comienza poco a poco, mide resultados, y ajusta según las necesidades de tu equipo.
                </p>
            </>
        ),

        "automatizacion-jira-workflows": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    Jira es una herramienta poderosa, pero su verdadero potencial se desbloquea cuando automatizas workflows repetitivos. Te muestro casos de uso prácticos que implementé en proyectos reales.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    ¿Por qué automatizar en Jira?
                </h2>
                <p>
                    La automatización permite que tu equipo se enfoque en trabajo de valor, eliminando tareas repetitivas como:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mover tickets manualmente entre estados</li>
                    <li>Asignar issues a personas específicas según criterios</li>
                    <li>Enviar notificaciones personalizadas</li>
                    <li>Actualizar campos automáticamente</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Caso de Uso 1: Auto-asignación de Bugs
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="font-semibold mb-2">Problema:</p>
                    <p className="text-base-content/80 mb-4">
                        Los bugs reportados quedaban sin asignar, generando confusión sobre quién debía resolverlos.
                    </p>
                    <p className="font-semibold mb-2">Solución con Automatización:</p>
                    <div className="bg-base-300 p-4 rounded font-mono text-sm">
                        Trigger: Issue Created<br/>
                        Condition: Issue Type = Bug AND Component = Frontend<br/>
                        Action: Assign issue to @FrontendLead
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Caso de Uso 2: Notificaciones Inteligentes
                </h2>
                <p>
                    Evita el ruido de notificaciones genéricas. Crea notificaciones contextuales:
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <div className="bg-base-300 p-4 rounded font-mono text-sm">
                        Trigger: Issue Transitioned to "In Review"<br/>
                        Condition: Reviewer field is not empty<br/>
                        Action: Send Slack message to {"{"}Reviewer{"}"} with link to PR
                    </div>
                    <p className="text-base-content/80 mt-4">
                        Resultado: Los code reviews se completan <strong>50% más rápido</strong> porque los reviewers son notificados inmediatamente con contexto relevante.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Caso de Uso 3: Control de SLA
                </h2>
                <p>
                    Para clientes con acuerdos de nivel de servicio, configura escalaciones automáticas:
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <div className="bg-base-300 p-4 rounded font-mono text-sm">
                        Trigger: Scheduled (Every hour)<br/>
                        Condition: Issue Type = Support AND Status = Open AND Created &gt; 4h ago<br/>
                        Action: <br/>
                        - Add label "SLA_BREACH"<br/>
                        - Escalate to Support Manager<br/>
                        - Send email notification
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Caso de Uso 4: Sincronización con GitHub
                </h2>
                <p>
                    Mantén sincronizado el estado del código con Jira:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cuando se crea un PR → Transicionar issue a "In Review"</li>
                    <li>Cuando se mergea un PR → Transicionar issue a "Done"</li>
                    <li>Si el PR es rechazado → Volver issue a "In Progress"</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        💡 Tip Pro
                    </h3>
                    <p className="text-base-content/80">
                        Usa variables de Jira como {"{"}issue.summary{"}"}, {"{"}issue.assignee{"}"}, etc. para crear automatizaciones dinámicas y reutilizables.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Mejores Prácticas
                </h2>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                    <li><strong>Empieza simple:</strong> No intentes automatizar todo a la vez</li>
                    <li><strong>Documenta las automatizaciones:</strong> Crea una wiki explicando cada regla</li>
                    <li><strong>Monitorea y ajusta:</strong> Revisa logs de ejecución regularmente</li>
                    <li><strong>Prueba en entorno de staging:</strong> Antes de aplicar en producción</li>
                    <li><strong>Involucra al equipo:</strong> Obtén feedback sobre qué automatizar</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Conclusión
                </h2>
                <p>
                    La automatización en Jira no se trata de reemplazar el juicio humano, sino de liberar tiempo para decisiones que realmente importan. Comienza identificando una tarea repetitiva que tu equipo haga diariamente, y automatízala.
                </p>
            </>
        ),

        "scrum-desarrollo-software-calidad": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    Scrum es uno de los frameworks ágiles más populares, pero su éxito depende de cómo integramos la calidad desde el inicio. En este artículo comparto cómo implementar QA desde el Sprint 0.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    ¿Qué es el Sprint 0?
                </h2>
                <p>
                    El Sprint 0 es una fase inicial donde el equipo establece las bases técnicas y organizacionales del proyecto. Es el momento perfecto para definir estrategias de calidad.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Actividades de QA en Sprint 0
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Definir la Estrategia de Testing
                </h3>
                <p>Documenta claramente:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Tipos de testing que se realizarán (unitario, integración, E2E, exploratorio)</li>
                    <li>Herramientas de testing a utilizar (Jest, Pytest, Selenium, etc.)</li>
                    <li>Responsabilidades del equipo de QA vs Developers</li>
                    <li>Criterios de cobertura de código mínima (ej: 80%)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Configurar Entornos de Testing
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80">
                        Asegúrate de tener al menos 3 entornos:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                        <li><strong>Development:</strong> Para desarrollo activo</li>
                        <li><strong>Staging:</strong> Réplica de producción para QA</li>
                        <li><strong>Production:</strong> Ambiente live</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Establecer Definition of Done (DoD)
                </h3>
                <p>
                    Cada user story debe cumplir estos criterios antes de considerarse "Done":
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 space-y-2">
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Código revisado y aprobado en PR</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Tests unitarios pasan al 100%</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Tests de integración ejecutados exitosamente</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Testing exploratorio completado sin bugs críticos</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Documentación actualizada</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span>Deployed a staging y validado</span>
                    </div>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    4. Configurar CI/CD con Testing Automatizado
                </h3>
                <p>
                    Implementa pipelines que ejecuten tests automáticamente:
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="font-mono text-sm text-base-content/80">
                        Pipeline típico:<br/>
                        <span className="ml-4">1. Commit → 2. Build → 3. Unit Tests → 4. Integration Tests → 5. Deploy to Staging → 6. E2E Tests → 7. Deploy to Production</span>
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Roles y Ceremonias Scrum con foco en Calidad
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Sprint Planning
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>QA participa en refinamiento de historias</li>
                    <li>Se definen casos de prueba críticos junto con criterios de aceptación</li>
                    <li>Se estiman esfuerzos de testing realísticamente</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Daily Scrum
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>QA reporta bugs encontrados y su severidad</li>
                    <li>Identifica bloqueos en testing (ej: feature no deployada)</li>
                    <li>Coordina con developers para reproducir bugs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Sprint Review
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Demostrar funcionalidades con evidencia de testing</li>
                    <li>Presentar métricas de calidad (bugs encontrados, cobertura, etc.)</li>
                    <li>Obtener feedback del Product Owner sobre calidad esperada</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Sprint Retrospective
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Discutir qué procesos de QA funcionaron bien</li>
                    <li>Identificar oportunidades de mejora en testing</li>
                    <li>Proponer nuevas automatizaciones o herramientas</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        Experiencia en CoderLux
                    </h3>
                    <p className="text-base-content/80">
                        En <a href={about.coderluxUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-500 transition-colors">CoderLux</a> aplicamos estos principios desde el Sprint 0 de cada proyecto. Resultado: logramos <strong>alta retención de clientes</strong> con 3 contratos recurrentes, y reducimos tiempo de entrega manteniendo calidad mediante testing automatizado y metodologías ágiles.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Métricas de Calidad en Scrum
                </h2>
                <p>
                    Mide lo que importa:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Defect Density:</strong> Bugs encontrados por feature</li>
                    <li><strong>Test Coverage:</strong> Porcentaje de código cubierto por tests</li>
                    <li><strong>Defect Leakage:</strong> Bugs encontrados en producción vs staging</li>
                    <li><strong>Time to Fix:</strong> Tiempo promedio para resolver bugs</li>
                    <li><strong>Automation Rate:</strong> Porcentaje de tests automatizados</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Conclusión
                </h2>
                <p>
                    Integrar calidad desde el Sprint 0 no es opcional, es una necesidad. Los equipos que priorizan QA desde el inicio entregan software más confiable, tienen menos deuda técnica, y mantienen clientes más satisfechos.
                </p>
                <p className="mt-4">
                    ¿Tu equipo ya integra QA desde el Sprint 0? Comparte tu experiencia en los comentarios.
                </p>
            </>
        ),

        "pycraft-minecraft-server-manager": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    PyCraft es una aplicación de escritorio que nació de una necesidad personal: simplificar la gestión de servidores de Minecraft. Con una interfaz gráfica intuitiva construida con CustomTkinter, permite a cualquier persona crear y administrar servidores sin necesidad de comandos complejos.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Capturas de Pantalla
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                        <img
                            src="/blog/PyCraft/Main-Interface.png"
                            alt="Interfaz principal de PyCraft"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-center mt-2 text-base-content/70">Interfaz principal de PyCraft</p>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                        <img
                            src="/blog/PyCraft/Console-Interface.png"
                            alt="Gestor de servidores"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-center mt-2 text-base-content/70">Gestor de servidores</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    ¿Por qué PyCraft?
                </h2>
                <p>
                    Configurar un servidor de Minecraft puede ser intimidante para usuarios sin experiencia técnica. PyCraft elimina esta barrera ofreciendo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Descarga automatizada</strong> de archivos de servidor desde fuentes oficiales</li>
                    <li><strong>Configuración guiada</strong> de parámetros como RAM, puerto y gamemode</li>
                    <li><strong>Gestión de mods</strong> con soporte para Forge y Fabric</li>
                    <li><strong>Integración con Modrinth</strong> para buscar y descargar modpacks populares</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Características Principales
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Descarga Automática de Versiones
                </h3>
                <p>
                    PyCraft se conecta a las APIs oficiales de Mojang y proveedores de mod loaders para obtener las versiones disponibles. Los usuarios pueden:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Elegir versiones vanilla (oficial sin mods)</li>
                    <li>Seleccionar versiones con Forge para mods avanzados</li>
                    <li>Instalar Fabric para mods ligeros y optimizados</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Configurador Visual
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80">
                        La interfaz permite ajustar parámetros clave sin editar archivos manualmente:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                        <li><strong>RAM asignada:</strong> Control con slider para asignar memoria</li>
                        <li><strong>Puerto del servidor:</strong> Configuración para jugar en LAN o remoto</li>
                        <li><strong>Gamemode:</strong> Supervivencia, Creativo, Aventura</li>
                        <li><strong>Dificultad:</strong> Pacífico hasta Difícil</li>
                        <li><strong>Max players:</strong> Límite de jugadores simultáneos</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Búsqueda de Modpacks en Modrinth
                </h3>
                <p>
                    Modrinth es uno de los repositorios de mods más populares. PyCraft integra su API para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Buscar modpacks por nombre o categoría</li>
                    <li>Ver información detallada (descripción, versión compatible, autor)</li>
                    <li>Descargar e instalar modpacks con un clic</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Stack Tecnológico
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-3">
                        <li><strong>Python:</strong> Lenguaje base para lógica de negocio</li>
                        <li><strong>CustomTkinter:</strong> Framework moderno para interfaces gráficas en Python</li>
                        <li><strong>Threading:</strong> Gestión de descargas y procesos en paralelo</li>
                        <li><strong>Requests:</strong> Comunicación con APIs de Mojang y Modrinth</li>
                        <li><strong>Subprocess:</strong> Ejecución de servidores como procesos independientes</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Instalación y Uso
                </h2>
                <p>
                    PyCraft está diseñado para ser plug-and-play:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    1. Descargar el ejecutable desde GitHub Releases<br/>
                    2. Ejecutar PyCraft.exe (no requiere Python instalado)<br/>
                    3. Seleccionar "Crear Nuevo Servidor"<br/>
                    4. Elegir versión y configuraciones<br/>
                    5. Presionar "Iniciar Servidor"
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Casos de Uso
                </h2>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Para Jugadores Casuales
                </h3>
                <p>
                    Ideal para jugar con amigos sin complicaciones técnicas. Solo seleccionas la versión, compartes tu IP y listo.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Para Creadores de Contenido
                </h3>
                <p>
                    Streamers y YouTubers pueden probar diferentes modpacks rápidamente sin perder tiempo en configuración manual.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Para Administradores de Comunidades
                </h3>
                <p>
                    Gestionar múltiples servidores (prueba, eventos, survival) desde una sola herramienta.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        💡 Desafío Técnico Resuelto
                    </h3>
                    <p className="text-base-content/80">
                        Uno de los retos fue <strong>gestionar descargas grandes sin congelar la interfaz</strong>. La solución fue implementar threading para ejecutar descargas en segundo plano mientras la UI permanece responsiva, mostrando progreso en tiempo real.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Características Implementadas
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Soporte para servidores vanilla</li>
                    <li>Integración con Forge y Fabric</li>
                    <li>Búsqueda de modpacks en Modrinth</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Futuras Mejoras
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Integración con Forge API para gestión avanzada de mods</li>
                    <li>Mejora de la interfaz gráfica utilizando frameworks modernos</li>
                    <li>Soporte multiidioma (actualmente solo disponible en español)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Contribuir al Proyecto
                </h2>
                <p>
                    PyCraft es open source y recibe contribuciones. Puedes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reportar bugs en GitHub Issues</li>
                    <li>Sugerir nuevas características</li>
                    <li>Contribuir con código mediante Pull Requests</li>
                    <li>Mejorar la documentación</li>
                </ul>

                <div className="mt-8 p-6 rounded-xl bg-base-200 border border-base-content/10">
                    <h3 className="text-xl font-bold mb-4 text-base-content">
                        Enlaces del Proyecto
                    </h3>
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://github.com/OOMrConrado/PyCraft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Repositorio en GitHub
                        </a>
                        <a
                            href="https://github.com/OOMrConrado/PyCraft/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Descargar Última Versión
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-base-content/80">
                    ¿Tienes dudas o sugerencias? Abre un issue en GitHub o contáctame directamente. ¡Feliz gaming!
                </p>
            </>
        ),

        "opusaudit-whatsapp-audio-analyzer": (
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
                    El Problema: Audios de WhatsApp como Vector de Ataque
                </h2>
                <p>
                    En consultoría de seguridad, descubrí que muchas personas comparten información sensible por audios de WhatsApp sin darse cuenta:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contraseñas dictadas a familiares</li>
                    <li>Datos de tarjetas de crédito compartidos verbalmente</li>
                    <li>Información bancaria mencionada en conversaciones casuales</li>
                    <li>Códigos de autenticación leídos en voz alta</li>
                </ul>
                <p className="mt-4">
                    OpusAudit automatiza el proceso de auditoría de estos audios para identificar riesgos antes de que sean explotados.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    ¿Cómo Funciona?
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Extracción de Audios con ADB
                </h3>
                <p>
                    Utilizando Android Debug Bridge (ADB), OpusAudit se conecta al dispositivo y extrae los archivos .opus almacenados en:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
                    /storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Voice Notes/
                </div>
                <p>
                    Los audios se copian de forma segura al equipo local para análisis offline, preservando la privacidad.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Transcripción con Whisper AI
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80">
                        OpusAudit utiliza <strong>Whisper de OpenAI</strong>, un modelo de reconocimiento de voz de última generación:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                        <li>Precisión del 95%+ en español e inglés</li>
                        <li>Funciona offline (modelo base incluido)</li>
                        <li>Procesa formatos .opus nativamente</li>
                        <li>Detecta automáticamente el idioma</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Detección de Secretos
                </h3>
                <p>
                    Una vez transcritos, los textos se analizan contra una lista de palabras clave configurables:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4">
                    <p className="font-semibold mb-2">Palabras clave por defecto (Español):</p>
                    <p className="text-sm">tarjeta de crédito, contraseña, clave, usuario, banco, DNI, código, CVV, PIN</p>
                    <p className="font-semibold mt-3 mb-2">Palabras clave por defecto (English):</p>
                    <p className="text-sm">credit card, password, key, user, bank, SSN, code, CVV, PIN</p>
                </div>
                <p>
                    Los usuarios pueden agregar palabras clave personalizadas según su contexto (nombres de empresas, proyectos confidenciales, etc.).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Interfaz Bilingüe con PyQt5
                </h2>
                <p>
                    OpusAudit cuenta con una interfaz gráfica completa construida con PyQt5:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Selector de idioma:</strong> Español / English en tiempo real</li>
                    <li><strong>Guía de configuración:</strong> Instrucciones para activar Depuración USB</li>
                    <li><strong>Detección automática de dispositivo:</strong> Indicador visual cuando ADB conecta</li>
                    <li><strong>Opciones de análisis:</strong> Todos los audios o últimos N audios</li>
                    <li><strong>Filtros personalizados:</strong> Agregar palabras clave separadas por coma</li>
                    <li><strong>Log en tiempo real:</strong> Progreso paso a paso del análisis</li>
                    <li><strong>Resultados destacados:</strong> Audios con secretos detectados</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Stack Tecnológico
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-3">
                        <li><strong>Python:</strong> Lenguaje principal</li>
                        <li><strong>PyQt5:</strong> Framework para interfaz gráfica</li>
                        <li><strong>Whisper (OpenAI):</strong> Modelo de transcripción de audio</li>
                        <li><strong>ADB (Android Debug Bridge):</strong> Comunicación con dispositivo Android</li>
                        <li><strong>Threading:</strong> Procesamiento asíncrono para mantener UI responsiva</li>
                        <li><strong>OS/Subprocess:</strong> Ejecución de comandos ADB</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Casos de Uso
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Auditoría Personal de Seguridad
                </h3>
                <p>
                    Usuarios pueden analizar sus propios audios para identificar información que podrían haber compartido inadvertidamente.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Consultoría de Ciberseguridad
                </h3>
                <p>
                    Profesionales de seguridad pueden usar OpusAudit como parte de evaluaciones de riesgo en empresas, identificando malas prácticas de empleados.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Investigación Forense
                </h3>
                <p>
                    En contextos legales, permite analizar conversaciones en busca de evidencia de fraude o filtración de datos.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold mb-3 text-base-content flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Consideraciones Éticas y Legales
                    </h3>
                    <p className="text-base-content/80">
                        <strong>OpusAudit debe usarse ÚNICAMENTE en dispositivos propios o con consentimiento explícito.</strong> Analizar audios de terceros sin autorización es ilegal en la mayoría de jurisdicciones. Esta herramienta está diseñada para mejorar la seguridad personal y profesional, no para violar la privacidad.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Resultados del Análisis
                </h2>
                <p>
                    OpusAudit genera dos archivos de salida:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 space-y-2">
                    <div>
                        <strong>audioleak.txt:</strong> Transcripción completa de todos los audios
                    </div>
                    <div>
                        <strong>secretleak.txt:</strong> Solo las líneas que contienen palabras clave detectadas
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Instalación y Requisitos
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <h4 className="font-bold mb-3">Requisitos:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Python 3.8+</li>
                        <li>Android con Depuración USB activada</li>
                        <li>Cable USB para conexión</li>
                        <li>~2GB de espacio para modelo Whisper</li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-3">Pasos de instalación:</h4>
                    <div className="bg-base-300 p-4 rounded-lg font-mono text-sm">
                        1. git clone https://github.com/OOMrConrado/OpusAudit<br/>
                        2. pip install -r requirements.txt<br/>
                        3. python opusaudit.py
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        💡 Desafío Técnico Resuelto
                    </h3>
                    <p className="text-base-content/80">
                        El mayor desafío fue <strong>mantener la interfaz responsiva durante el procesamiento con Whisper</strong>, que puede tardar varios minutos en dispositivos sin GPU. La solución fue usar <strong>threading</strong> para ejecutar Whisper en segundo plano mientras la UI muestra progreso en tiempo real a través de QTimer y signals.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Roadmap y Mejoras Futuras
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>✅ Transcripción con Whisper AI</li>
                    <li>✅ Interfaz bilingüe (Español/English)</li>
                    <li>✅ Detección de palabras clave configurables</li>
                    <li>🔄 Soporte para análisis de audios de Telegram</li>
                    <li>📋 Exportar reportes en PDF con nivel de riesgo</li>
                    <li>🌐 Detección de entidades con NLP (NER) para identificar nombres, fechas, lugares</li>
                    <li>🔐 Cifrado de archivos de salida con contraseña</li>
                </ul>

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

                <p className="mt-8 text-base-content/80">
                    ¿Encontraste un bug o tienes una sugerencia? Abre un issue en GitHub. Recuerda usar esta herramienta de forma ética y legal.
                </p>
            </>
        ),

        "edgevoice-text-to-speech-api": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    EdgeVoice es una API REST de texto a voz que desarrollé como alternativa auto-hospedable a servicios comerciales de TTS. Compatible con el formato de OpenAI, utiliza Microsoft Edge TTS para generar audio de calidad profesional sin costos por uso.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    ¿Por Qué EdgeVoice?
                </h2>
                <p>
                    Los servicios de Text-to-Speech como OpenAI TTS o ElevenLabs son potentes, pero costosos a escala. EdgeVoice ofrece:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Costo cero:</strong> Sin límites de caracteres ni suscripciones</li>
                    <li><strong>Privacidad:</strong> Todo el procesamiento es local, sin enviar datos a terceros</li>
                    <li><strong>Compatibilidad OpenAI:</strong> Integración directa con aplicaciones existentes</li>
                    <li><strong>Múltiples voces:</strong> Acceso a las voces neurales de Microsoft Edge</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Características Principales
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Compatibilidad con OpenAI TTS API
                </h3>
                <p>
                    EdgeVoice implementa los mismos endpoints que OpenAI, permitiendo reemplazarlo sin cambiar código:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
                    POST /v1/audio/speech<br/>
                    Authorization: Bearer YOUR_KEY<br/>
                    {"{"}model: "tts-1", voice: "alloy", input: "Hello world"{"}"}
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Soporte Multi-Formato
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80 mb-3">
                        EdgeVoice genera audio en múltiples formatos optimizados:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>MP3:</strong> Uso general, compatible universalmente</li>
                        <li><strong>Opus:</strong> Máxima calidad con menor tamaño (ideal para streaming)</li>
                        <li><strong>AAC:</strong> Optimizado para dispositivos Apple</li>
                        <li><strong>FLAC:</strong> Sin pérdida, para aplicaciones de audio profesional</li>
                        <li><strong>WAV:</strong> Sin comprimir, máxima calidad</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Streaming con Server-Sent Events (SSE)
                </h3>
                <p>
                    EdgeVoice soporta streaming en tiempo real, enviando chunks de audio mientras se genera:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    response_format: "opus"<br/>
                    stream: true<br/>
                    → Audio enviado en fragmentos incrementales
                </div>
                <p className="mt-3">
                    Esto permite iniciar reproducción antes de que se genere todo el audio, reduciendo latencia percibida.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    4. Control de Velocidad de Reproducción
                </h3>
                <p>
                    Ajusta la velocidad de habla entre 0.25x (muy lento) y 4.0x (muy rápido):
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-2">
                        <li><strong>1.0x:</strong> Velocidad normal (conversacional)</li>
                        <li><strong>1.2x:</strong> Ideal para audiolibros y podcasts</li>
                        <li><strong>0.8x:</strong> Útil para aprendizaje de idiomas</li>
                        <li><strong>1.5x+:</strong> Consumo rápido de contenido</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Stack Tecnológico
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-3">
                        <li><strong>Python:</strong> Backend de la API</li>
                        <li><strong>Flask:</strong> Framework web minimalista</li>
                        <li><strong>Edge-TTS:</strong> Biblioteca para acceder a Microsoft Edge TTS</li>
                        <li><strong>FFmpeg:</strong> Conversión y procesamiento de audio</li>
                        <li><strong>Asyncio:</strong> Gestión asíncrona para streaming eficiente</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Casos de Uso
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    1. Asistentes de Voz Personalizados
                </h3>
                <p>
                    Integra EdgeVoice en chatbots o asistentes virtuales para añadir voz sin costos recurrentes.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Generación de Audiolibros
                </h3>
                <p>
                    Convierte grandes volúmenes de texto en audio para plataformas educativas o de entretenimiento.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Accesibilidad Web
                </h3>
                <p>
                    Implementa lectores de pantalla personalizados o sistemas de navegación por voz para usuarios con discapacidades visuales.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    4. Prototipado de Apps con IA
                </h3>
                <p>
                    Desarrolladores pueden probar funcionalidades de voz antes de invertir en servicios comerciales.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Instalación y Configuración
                </h2>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    # Clonar repositorio<br/>
                    git clone https://github.com/OOMrConrado/EdgeVoice<br/>
                    cd EdgeVoice<br/><br/>

                    # Instalar dependencias<br/>
                    pip install -r requirements.txt<br/><br/>

                    # Iniciar servidor<br/>
                    python app.py<br/><br/>

                    # API disponible en http://localhost:5000
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Ejemplo de Uso con cURL
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80 mb-3">Generar audio simple:</p>
                    <div className="bg-base-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        curl http://localhost:5000/v1/audio/speech \<br/>
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                        &nbsp;&nbsp;-d '{"{"}"model": "tts-1", "voice": "alloy", "input": "Hola mundo"{"}"}' \<br/>
                        &nbsp;&nbsp;--output audio.mp3
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Integración con Librerías Populares
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    OpenAI Python SDK
                </h3>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    from openai import OpenAI<br/>
                    client = OpenAI(base_url="http://localhost:5000/v1")<br/><br/>

                    response = client.audio.speech.create(<br/>
                    &nbsp;&nbsp;model="tts-1",<br/>
                    &nbsp;&nbsp;voice="alloy",<br/>
                    &nbsp;&nbsp;input="Hello from EdgeVoice!"<br/>
                    )<br/>
                    response.stream_to_file("output.mp3")
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    JavaScript/TypeScript
                </h3>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    const response = await fetch('http://localhost:5000/v1/audio/speech', {"{"}<br/>
                    &nbsp;&nbsp;method: 'POST',<br/>
                    &nbsp;&nbsp;headers: {"{"} 'Content-Type': 'application/json' {"}"},<br/>
                    &nbsp;&nbsp;body: JSON.stringify({"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;model: 'tts-1',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;voice: 'alloy',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;input: 'Text to speech'<br/>
                    &nbsp;&nbsp;{"}"})<br/>
                    {"}"});<br/>
                    const audioBlob = await response.blob();
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        💡 Desafío Técnico Resuelto
                    </h3>
                    <p className="text-base-content/80">
                        El mayor reto fue <strong>implementar streaming eficiente sin bloquear el servidor</strong>. La solución fue usar <strong>asyncio con generators</strong> para enviar chunks de audio a medida que Edge TTS los genera, manteniendo baja latencia incluso con textos largos.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Voces Disponibles
                </h2>
                <p>
                    EdgeVoice soporta todas las voces neurales de Microsoft Edge. Algunas populares:
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-2">
                        <li><strong>Español (ES):</strong> es-ES-AlvaroNeural, es-ES-ElviraNeural</li>
                        <li><strong>Español (MX):</strong> es-MX-DaliaNeural, es-MX-JorgeNeural</li>
                        <li><strong>English (US):</strong> en-US-JennyNeural, en-US-GuyNeural</li>
                        <li><strong>English (UK):</strong> en-GB-SoniaNeural, en-GB-RyanNeural</li>
                    </ul>
                    <p className="mt-4 text-sm text-base-content/60">
                        Consulta la documentación completa para ver todas las voces y sus características.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Limitaciones y Consideraciones
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>EdgeVoice depende del servicio Edge TTS de Microsoft, que puede cambiar sin aviso</li>
                    <li>Para uso comercial intensivo, considera servicios oficiales con SLA garantizado</li>
                    <li>La calidad de voz es excelente pero puede no igualar servicios premium como ElevenLabs</li>
                    <li>Requiere conexión a internet para acceder al servicio TTS de Edge</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Roadmap Futuro
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>✅ API compatible con OpenAI TTS</li>
                    <li>✅ Streaming con Server-Sent Events</li>
                    <li>✅ Soporte multi-formato (MP3, Opus, AAC, FLAC)</li>
                    <li>🔄 Cache de audios generados para reducir latencia</li>
                    <li>📋 Dashboard web para gestión y monitoreo</li>
                    <li>🌐 Soporte para más idiomas y voces custom</li>
                    <li>🔐 Autenticación con API keys rotativos</li>
                </ul>

                <div className="mt-8 p-6 rounded-xl bg-base-200 border border-base-content/10">
                    <h3 className="text-xl font-bold mb-4 text-base-content">
                        Enlaces del Proyecto
                    </h3>
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://github.com/OOMrConrado/EdgeVoice"
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

                <p className="mt-8 text-base-content/80">
                    EdgeVoice es perfecto para proyectos personales, prototipos y pequeñas aplicaciones. Para producción a gran escala, evalúa tus necesidades de SLA y considera servicios comerciales.
                </p>
            </>
        ),

        "archsetup-system-monitor": (
            <>
                <p className="text-xl text-base-content/90 font-medium leading-relaxed">
                    ArchSetup System Monitor es una herramienta CLI escrita en C que desarrollé para Arch Linux. Proporciona información detallada del sistema con una interfaz colorida en terminal, nacida de la necesidad de tener un monitor más personalizado y ligero que las alternativas existentes.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Capturas de Pantalla
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                        <img
                            src="/blog/ArchSetup/Interface.webp"
                            alt="Monitor de sistema en acción"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-center mt-2 text-base-content/70">Monitor de sistema en acción</p>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg border border-base-content/10">
                        <img
                            src="/blog/ArchSetup/Help-Interface.webp"
                            alt="Vista detallada de procesos"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-center mt-2 text-base-content/70">Vista detallada de procesos</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    El Problema
                </h2>
                <p>
                    Los monitores de sistema tradicionales como htop o neofetch son excelentes, pero:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Algunos muestran información genérica sin personalización</li>
                    <li>Otros consumen recursos innecesarios para tareas simples</li>
                    <li>No todos permiten modo watch con intervalo personalizable</li>
                    <li>La mayoría no ofrece opciones modulares para mostrar solo lo necesario</li>
                </ul>
                <p className="mt-4">
                    ArchSetup System Monitor resuelve esto siendo minimalista, rápido y altamente configurable.
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

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    2. Memoria RAM y SWAP
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80 mb-3">
                        Muestra información detallada con barras de progreso visuales:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Total, usado, disponible y libre</li>
                        <li>Porcentaje de uso con colores dinámicos</li>
                        <li>Información de SWAP si está activada</li>
                        <li>Barras de progreso ASCII para visualización rápida</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    3. Uptime del Sistema
                </h3>
                <p>
                    Muestra el tiempo que lleva encendido el sistema en formato legible (días, horas, minutos).
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    4. Estadísticas de Disco
                </h3>
                <p>
                    Información del filesystem raíz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Espacio total, usado y disponible</li>
                    <li>Porcentaje de uso</li>
                    <li>Lectura mediante statvfs()</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    5. Top Procesos
                </h3>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <p className="text-base-content/80">
                        Muestra los 5 procesos que más consumen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                        <li><strong>CPU:</strong> Procesos con mayor uso de procesador</li>
                        <li><strong>Memoria:</strong> Procesos con mayor consumo de RAM</li>
                        <li>Incluye PID, nombre y porcentaje de uso</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Interfaz Colorida con Códigos ANSI
                </h2>
                <p>
                    ArchSetup utiliza códigos de color ANSI para una visualización clara:
                </p>
                <div className="bg-base-300 p-4 rounded-lg my-4">
                    <ul className="space-y-2">
                        <li><span className="text-green-500">● Verde:</span> Uso normal (&lt; 60%)</li>
                        <li><span className="text-yellow-500">● Amarillo:</span> Uso moderado (60-80%)</li>
                        <li><span className="text-red-500">● Rojo:</span> Uso alto (&gt; 80%)</li>
                        <li><span className="text-blue-500">● Azul:</span> Información de CPU</li>
                        <li><span className="text-purple-500">● Magenta:</span> Información de memoria</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Modos de Uso
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Modo Normal
                </h3>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    # Mostrar toda la información<br/>
                    ArchSetup<br/><br/>

                    # Solo CPU<br/>
                    ArchSetup --cpu<br/><br/>

                    # Solo memoria<br/>
                    ArchSetup --memory<br/><br/>

                    # Combinaciones<br/>
                    ArchSetup --cpu --memory --processes
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-base-content">
                    Modo Watch (Actualización Continua)
                </h3>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    # Actualizar cada 2 segundos<br/>
                    ArchSetup --watch<br/><br/>

                    # Watch solo con CPU y memoria<br/>
                    ArchSetup --watch --cpu --memory
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Lectura de Fuentes del Sistema
                </h2>
                <p>
                    ArchSetup lee información directamente desde el filesystem de Linux:
                </p>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-2">
                        <li><strong>/proc/cpuinfo:</strong> Modelo e información del CPU</li>
                        <li><strong>/proc/stat:</strong> Estadísticas de uso de CPU</li>
                        <li><strong>/proc/meminfo:</strong> Información de memoria RAM/SWAP</li>
                        <li><strong>/proc/uptime:</strong> Tiempo de ejecución del sistema</li>
                        <li><strong>/sys/class/thermal/:</strong> Temperatura del CPU</li>
                        <li><strong>/proc/[pid]/:</strong> Información de procesos individuales</li>
                        <li><strong>statvfs():</strong> Estadísticas del filesystem</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Stack Tecnológico
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-3">
                        <li><strong>Lenguaje:</strong> C (C99 standard)</li>
                        <li><strong>Compilador:</strong> GCC</li>
                        <li><strong>Build System:</strong> Makefile personalizado</li>
                        <li><strong>Dependencias:</strong> Solo bibliotecas estándar de C</li>
                        <li><strong>Sistema Objetivo:</strong> Linux (optimizado para Arch)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Instalación
                </h2>
                <div className="bg-base-300 p-4 rounded-lg my-4 font-mono text-sm">
                    # Clonar repositorio<br/>
                    git clone https://github.com/OOMrConrado/ArchSetup<br/>
                    cd ArchSetup<br/><br/>

                    # Compilar<br/>
                    make<br/><br/>

                    # Instalación local (sin sudo)<br/>
                    ./install_local.sh<br/>
                    source ~/.bashrc<br/><br/>

                    # Uso<br/>
                    ArchSetup
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Estructura del Proyecto
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <ul className="space-y-2 font-mono text-sm">
                        <li>main.c - Programa principal y parseo de argumentos</li>
                        <li>sysmon.h - Definiciones y estructuras de datos</li>
                        <li>sysmon.c - Funciones de visualización</li>
                        <li>cpu_info.c - Lectura de información de CPU</li>
                        <li>memory_info.c - Lectura de memoria desde /proc/meminfo</li>
                        <li>system_info.c - Uptime, disco y procesos</li>
                        <li>Makefile - Compilación y tareas</li>
                        <li>install_local.sh - Script de instalación local</li>
                    </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold mb-3 text-base-content">
                        💡 Desafío Técnico Resuelto
                    </h3>
                    <p className="text-base-content/80">
                        El mayor reto fue <strong>calcular el uso de CPU por núcleo de forma eficiente</strong>. La solución fue leer /proc/stat dos veces con un intervalo, calcular la diferencia de jiffies y aplicar la fórmula: <code>uso = 100 * (1 - idle_delta / total_delta)</code>. Esto permite obtener porcentajes precisos sin consumir recursos del sistema.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Personalización
                </h2>
                <p>
                    El código está diseñado para ser fácilmente personalizable:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Colores:</strong> Modificar defines en sysmon.h</li>
                    <li><strong>Intervalos:</strong> Cambiar tiempo de actualización en main.c</li>
                    <li><strong>Formato:</strong> Ajustar funciones de display en sysmon.c</li>
                    <li><strong>Métricas adicionales:</strong> Agregar nuevas fuentes de datos</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Comparación con Alternativas
                </h2>
                <div className="bg-base-200 p-6 rounded-lg my-4">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-base-content/20">
                                <th className="text-left py-2">Herramienta</th>
                                <th className="text-left py-2">Pros</th>
                                <th className="text-left py-2">Contras</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="py-2 font-semibold">ArchSetup</td>
                                <td className="py-2">Ligero, modular, personalizable</td>
                                <td className="py-2">Solo para Linux</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-semibold">htop</td>
                                <td className="py-2">Interactivo, maduro</td>
                                <td className="py-2">Más pesado, menos personalizable</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-semibold">neofetch</td>
                                <td className="py-2">Bonito, informativo</td>
                                <td className="py-2">No interactivo, sin watch mode</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                    Roadmap Futuro
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>✅ Monitor completo de sistema (CPU, RAM, disco, procesos)</li>
                    <li>✅ Modo watch con actualización continua</li>
                    <li>✅ Opciones modulares para mostrar información específica</li>
                    <li>🔄 Soporte para múltiples discos</li>
                    <li>📋 Exportar métricas a archivo log</li>
                    <li>🌐 Información de red (interfaces, tráfico)</li>
                    <li>🔧 Soporte para otras distribuciones Linux</li>
                </ul>

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

                <p className="mt-8 text-base-content/80">
                    ArchSetup System Monitor es perfecto para usuarios de Linux que buscan una herramienta ligera, rápida y personalizable para monitorear su sistema. ¡Contribuciones bienvenidas!
                </p>
            </>
        ),
    };

    return posts[slug] || <p>Contenido no disponible.</p>;
}
