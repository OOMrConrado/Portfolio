"use client";
import { education } from "../../data/data";
import { useTranslation } from "../../hooks/useTranslation";

function EducationItem({ item }) {
    return (
        <div className="group relative rounded-2xl border-2 border-base-content/20 hover:border-base-content/80 bg-gradient-to-br from-base-100 to-base-200/50 p-6 hover:scale-102 transition-transform duration-200">
            {/* Status badge */}
            {item.status && (
                <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        {item.status}
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-base-content">
                    {item.degree}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-base-content/70">
                    <span className="flex items-center gap-1.5 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                        {item.institution}
                    </span>
                    <span className="text-base-content/50">•</span>
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {item.date}
                    </span>
                </div>
            </div>

            {/* Description */}
            {item.description && (
                <p className="text-sm text-base-content/80 leading-relaxed mb-4 border-l-2 border-blue-500/30 pl-4">
                    {item.description}
                </p>
            )}

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-base-content/90 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Key Learning Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.highlights.map((highlight, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-base-content/80 bg-base-200/50 rounded-lg px-3 py-2 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="leading-tight">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Education() {
    const { t } = useTranslation();

    return (
        <>
            <div className="mt-10 scroll-mt-14" id="education">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">{t.education.title}</h2>
                <div className="mt-6 space-y-6">
                    {education.map((item, index) => (
                        <EducationItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}
