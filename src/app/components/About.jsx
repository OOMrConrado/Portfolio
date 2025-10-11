import { about } from "../../data/data";

export default function About() {
    // Función para convertir el texto con CoderLux en un elemento con link
    const renderAboutText = () => {
        const text = about.about;
        const coderLuxIndex = text.indexOf("CoderLux");

        if (coderLuxIndex === -1) return text;

        return (
            <>
                {text.substring(0, coderLuxIndex)}
                <a
                    href={about.coderluxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400 transition-colors cursor-pointer"
                >
                    CoderLux
                </a>
                {text.substring(coderLuxIndex + 8)}
            </>
        );
    };

    return (
        <>
            <div className="flex flex-col gap-2 mt-10 scroll-mt-14" id="about">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    About
                </h2>
                <div className="flex gap-6 flex-col">
                    <p className="text-base text-base-content/80">
                        {renderAboutText()}
                    </p>
                    <p className="text-base text-base-content/80">
                        Si tienes alguna pregunta o te gustaría colaborar, no dudes en contactarme por{" "}
                        <a
                            href={`mailto:${about.email}`}
                            className="font-bold underline hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            email
                        </a>
                        . Siempre estoy abierto a nuevas oportunidades.
                    </p>
                </div>
            </div>
        </>
    );
}
