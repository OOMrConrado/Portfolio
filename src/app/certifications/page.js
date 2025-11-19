"use client";
import { certifications } from "../../data/data";
import { useState } from "react";
import { Palette, Code2, Globe, GraduationCap, Link as LinkIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "../../hooks/useTranslation";

// Icon component
function CertIcon({ type }) {
    const iconProps = { size: 24, strokeWidth: 2 };

    const icons = {
        palette: <Palette {...iconProps} />,
        code: <Code2 {...iconProps} />,
        globe: <Globe {...iconProps} />,
        university: <GraduationCap {...iconProps} />,
    };

    return icons[type] || icons.palette;
}

function CertificationCard({ item, onClick }) {
    return (
        <div className="group relative rounded-2xl border-2 border-base-content/20 hover:border-base-content/80 bg-gradient-to-br from-base-100 to-base-200/50 p-5 hover:scale-102 transition-transform duration-200 overflow-hidden flex flex-col h-full">
            {/* Icon in card corner */}
            <div className="absolute top-4 right-4 text-base-content/40 group-hover:text-base-content/60 transition-colors">
                <CertIcon type={item.icon} />
            </div>

            {/* Contenido */}
            <div className="pr-12 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-base-content">
                    {item.title}
                </h3>

                <p className="text-sm text-base-content/70 mt-2 font-medium">
                    {item.issuer}
                </p>

                <p className="text-xs text-base-content/50 mt-1">
                    {item.date}
                </p>

                {item.description && (
                    <p className="text-sm text-base-content/70 mt-3">
                        {item.description}
                    </p>
                )}

                {item.credentialId && (
                    <p className="text-xs text-base-content/50 mt-2 font-mono">
                        ID: {item.credentialId}
                    </p>
                )}

                {/* Link-style minimal buttons - pushed to bottom */}
                <div className="flex gap-4 mt-auto pt-4">
                    {item.image && (
                        <button
                            onClick={() => onClick(item)}
                            className="text-sm text-base-content/80 hover:text-base-content hover:underline transition-all flex items-center gap-1.5"
                        >
                            View Certificate ↗
                        </button>
                    )}

                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-base-content/80 hover:text-base-content hover:underline transition-all flex items-center gap-1.5"
                        >
                            <LinkIcon size={14} strokeWidth={2} />
                            Verify
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

// Modal to display certificate
function CertModal({ cert, onClose }) {
    if (!cert) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full max-h-[90vh] bg-base-100 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-base-content/20">
                    <h3 className="font-bold text-lg text-base-content truncate pr-4">
                        {cert.title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-base-200 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    {cert.image.endsWith('.pdf') ? (
                        <iframe
                            src={cert.image}
                            className="w-full h-[70vh]"
                            title={cert.title}
                        />
                    ) : (
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default function CertificationsPage() {
    const [selectedCert, setSelectedCert] = useState(null);
    const { t } = useTranslation();

    return (
        <main className="mt-5 p-4 max-w-7xl mx-auto">
            {/* Header with back button */}
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors mb-4"
                >
                    <ArrowLeft size={20} />
                    {t.certifications.backToHome}
                </Link>
                <h1 className="text-3xl font-bold before:content-['>'] before:mr-2">{t.certifications.allCertifications}</h1>
                <p className="text-base-content/70 mt-2">
                    {t.certifications.completeList}
                </p>
            </div>

            {/* All certifications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((item, index) => (
                    <CertificationCard
                        key={index}
                        item={item}
                        onClick={setSelectedCert}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedCert && (
                <CertModal
                    cert={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </main>
    );
}
