"use client";
import { about, socials } from "../../data/data";
import { useTranslation } from "../../hooks/useTranslation";

/**
 * Render the About section with translated text, a contextual "CoderLux" link when present, and contact links.
 *
 * The component uses translation keys from `t.about` for the title, description, contact prompt, email label, connector text,
 * and closing sentence. If the description contains the substring "CoderLux", that substring is replaced with an anchor
 * pointing to `about.coderluxUrl` (opens in a new tab with `noopener noreferrer`). The contact line includes a `mailto:`
 * link using `about.email` and an external LinkedIn link using `socials.linkedin` (also opens in a new tab with
 * `noopener noreferrer`).
 *
 * @returns {JSX.Element} The rendered About section containing translated paragraphs and external/contact links.
 */
export default function About() {
    const { t } = useTranslation();

    // Function to convert text with CoderLux into a link element
    const renderAboutText = () => {
        const text = t.about.description;
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
                    {t.about.title}
                </h2>
                <div className="flex gap-6 flex-col">
                    <p className="text-base text-base-content/80">
                        {renderAboutText()}
                    </p>
                    <p className="text-base text-base-content/80">
                        {t.about.contactQuestion}{" "}
                        <a
                            href={`mailto:${about.email}`}
                            className="font-bold underline hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            {t.about.email}
                        </a>
                        {" "}{t.about.or}{" "}
                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            LinkedIn
                        </a>
                        {t.about.alwaysOpen}
                    </p>
                </div>
            </div>
        </>
    );
}