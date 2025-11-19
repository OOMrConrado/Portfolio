"use client";
import { experience } from "../../data/data";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

function ExperienceItem({ item }) {
    const [showAllTech, setShowAllTech] = useState(false);
    const visibleTech = showAllTech ? item.techStack : item.techStack?.slice(0, 6);

    return (
        <li className="relative -ms-1.5 flex items-start gap-4">
            <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

            <div className="-mt-2 flex-1">
                <h3 className="text-lg font-semibold text-base-content">
                    {item.title}
                </h3>

                <p className="text-sm text-base-content/60 mt-0.5">
                    {item.date}
                </p>

                {item.description && (
                    <p className="mt-3 text-sm text-base-content/80">
                        {item.description}
                    </p>
                )}

                {item.achievements && item.achievements.length > 0 && (
                    <ul className="mt-3 space-y-2">
                        {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-base-content/80 flex gap-2">
                                <span className="text-base-content/60 mt-1">•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {item.techStack && item.techStack.length > 0 && (
                    <div className="flex items-center flex-wrap gap-2 mt-4">
                        {visibleTech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-3 py-0.5"
                            >
                                {tech}
                            </span>
                        ))}
                        {item.techStack.length > 6 && (
                            <button
                                onClick={() => setShowAllTech(!showAllTech)}
                                className="text-xs font-medium text-base-content/70 hover:text-base-content underline cursor-pointer"
                            >
                                {showAllTech ? "show less" : `show more (+${item.techStack.length - 6})`}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </li>
    );
}

export default function Experience() {
    const { t } = useTranslation();

    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">{t.experience.title}</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <ExperienceItem key={index} item={item} />
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
