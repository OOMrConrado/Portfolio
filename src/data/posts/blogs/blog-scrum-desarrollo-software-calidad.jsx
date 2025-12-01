import { about } from "../../data";

export default function ScrumDesarrolloSoftwareCalidad() {
    return (
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

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-3 text-base-content">
                    Experiencia en CoderLux
                </h3>
                <p className="text-base-content/80">
                    En <a href={about.coderluxUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-500 transition-colors">CoderLux</a> aplicamos estos principios desde el Sprint 0 de cada proyecto. Resultado: logramos <strong>alta retención de clientes</strong> con 3 contratos recurrentes, y reducimos tiempo de entrega manteniendo calidad mediante testing automatizado y metodologías ágiles.
                </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-base-content">
                Conclusión
            </h2>
            <p>
                Integrar calidad desde el Sprint 0 no es opcional, es una necesidad. Los equipos que priorizan QA desde el inicio entregan software más confiable, tienen menos deuda técnica, y mantienen clientes más satisfechos.
            </p>
        </>
    );
}
