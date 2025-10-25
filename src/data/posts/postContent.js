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
    };

    return posts[slug] || <p>Contenido no disponible.</p>;
}
