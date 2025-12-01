"use client";
import Marquee from "./Marquee";
import { skills } from "@/data/data";
import { useTranslation } from "../../hooks/useTranslation";

export default function TechLists() {
    const { t } = useTranslation();
    // Split skills into 2 rows
    const midPoint = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, midPoint);
    const secondRow = skills.slice(midPoint);

    const SkillBadge = ({ skill }) => {
        // Icons that need img tags instead of icon fonts
        const imgIcons = {
            "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
            "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
        };

        return (
            <div className="flex items-center gap-3 px-4 py-2.5 bg-base-300 rounded-full border border-base-content/10 hover:border-base-content/30 transition-all mx-2">
                {imgIcons[skill.name] ? (
                    <img
                        src={imgIcons[skill.name]}
                        alt={skill.name}
                        className={`${skill.name === "C#" || skill.name === "Python" ? "w-7 h-7" : "w-6 h-6"} flex-shrink-0 object-contain`}
                    />
                ) : (
                    <i className={`${skill.devicon} text-[24px] flex-shrink-0`}></i>
                )}
                <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
            </div>
        );
    };

    return (
        <div className="mt-10">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">{t.techStack.title}</h2>
            <div className="flex flex-col gap-4 mt-4">
                {/* First row */}
                <Marquee duration="30s">
                    <div className="flex gap-2">
                        {firstRow.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))}
                    </div>
                </Marquee>

                {/* Second row */}
                <Marquee duration="35s">
                    <div className="flex gap-2">
                        {secondRow.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
