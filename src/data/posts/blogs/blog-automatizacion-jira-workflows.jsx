export default function AutomatizacionJiraWorkflows() {
    return (
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
    );
}
