import { about } from "../../data";

export default function QATestingProyectosAgiles() {
    return (
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
                <p className="font-semibold text-base-content mb-2">Práctica recomendada:</p>
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
    );
}
