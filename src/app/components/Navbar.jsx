"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../hooks/useTranslation";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const { changeLanguage, language, isLoaded } = useLanguage();
    const { t } = useTranslation();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(prefersDark);
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light"
            );
        }
    }, []);

    const handleThemeChange = (checked) => {
        const newTheme = checked ? "dark" : "light";
        setIsDark(checked);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Don't render until language is loaded to avoid hydration mismatch
    if (!isLoaded) {
        return null;
    }

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10">
                {/* Unified Navbar for all screens */}
                <div className="flex w-[90%] md:w-[80%] border bg-gray-10/50 backdrop-blur-sm rounded-3xl py-2 px-4">
                    <div className="flex items-center justify-between w-full">
                        {/* Hamburger Menu - Left */}
                        <button
                            className="flex items-center"
                            onClick={() => setHideOnMobile(!hideOnMobile)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        {/* Title / Home Link - Center */}
                        {pathname === "/" ? (
                            <span className="font-medium text-base">Menu</span>
                        ) : (
                            <Link
                                href="/"
                                className="font-medium text-base hover:underline transition-colors"
                            >
                                {t.nav.home}
                            </Link>
                        )}

                        {/* Theme Toggle - Right */}
                        <button className="flex">
                            <label className="toggle text-base-content toggle-sm">
                                <input
                                    type="checkbox"
                                    checked={isDark}
                                    onChange={(e) => handleThemeChange(e.target.checked)}
                                    className="theme-controller"
                                />

                                <svg
                                    aria-label="sun"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 20v2"></path>
                                        <path d="m4.93 4.93 1.41 1.41"></path>
                                        <path d="m17.66 17.66 1.41 1.41"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="m6.34 17.66-1.41 1.41"></path>
                                        <path d="m19.07 4.93-1.41 1.41"></path>
                                    </g>
                                </svg>

                                <svg
                                    aria-label="moon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </g>
                                </svg>
                            </label>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Dropdown for all screens */}
            <div
                className={`w-[90%] md:w-[80%] flex-col bg-base-200 backdrop-blur-sm fixed top-16 left-[5%] md:left-[10%] rounded-2xl border mx-auto text-base p-4 gap-3 z-10 ${
                    hideOnMobile ? "hidden" : "flex"
                }`}
            >
                <Link
                    href="/#about"
                    className="hover:underline block py-2"
                    onClick={() => setHideOnMobile(true)}
                >
                    {t.nav.about}
                </Link>
                <Link
                    href="/#projects"
                    className="hover:underline block py-2"
                    onClick={() => setHideOnMobile(true)}
                >
                    {t.nav.projects}
                </Link>
                <Link
                    href="/#experience"
                    className="hover:underline block py-2"
                    onClick={() => setHideOnMobile(true)}
                >
                    {t.nav.experience}
                </Link>
                <Link
                    href="/#education"
                    className="hover:underline block py-2"
                    onClick={() => setHideOnMobile(true)}
                >
                    {t.nav.education}
                </Link>
                <Link
                    href="/blogs"
                    className="hover:underline block py-2"
                    onClick={() => setHideOnMobile(true)}
                >
                    {t.nav.blogs}
                </Link>

                {/* Language Selector in Hamburger */}
                <div className="border-t border-base-content/20 pt-3 mt-2">
                    <div className="relative">
                        <button
                            onClick={() => setShowLangDropdown(!showLangDropdown)}
                            className="flex items-center justify-between w-full py-2 hover:bg-base-300 rounded-lg px-3 transition-colors"
                            aria-label="Select language"
                        >
                            <div className="flex items-center gap-2">
                                <Globe size={18} strokeWidth={2} />
                                <span className="text-sm font-medium">{t.languages[language === "es" ? "spanish" : "english"]}</span>
                            </div>
                            <span className="text-xs font-medium text-base-content/60">{language.toUpperCase()}</span>
                        </button>

                        {showLangDropdown && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setShowLangDropdown(false)}
                                />
                                <div className="relative mt-2 w-full bg-base-100 border border-base-content/20 rounded-lg shadow-lg z-20 py-1">
                                    <button
                                        onClick={() => {
                                            changeLanguage("es");
                                            setShowLangDropdown(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-base-200 transition-colors ${
                                            language === "es" ? "bg-base-200 font-semibold" : ""
                                        }`}
                                    >
                                        {t.languages.spanish}
                                    </button>
                                    <button
                                        onClick={() => {
                                            changeLanguage("en");
                                            setShowLangDropdown(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-base-200 transition-colors ${
                                            language === "en" ? "bg-base-200 font-semibold" : ""
                                        }`}
                                    >
                                        {t.languages.english}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
