"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);

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

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10">
                {/* Desktop Navbar */}
                <div className="hidden sm:flex w-[80%] border items-center justify-center bg-gray-10/50 backdrop-blur-sm rounded-3xl py-2 px-4">
                    <div className="flex items-center gap-8">
                        <ul className="flex items-center text-base gap-4">
                            <li>
                                <Link href="/#about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/#experience" className="hover:underline">
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="/#education" className="hover:underline">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="hover:underline">
                                    Blogs
                                </Link>
                            </li>
                        </ul>

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

                {/* Mobile Navbar */}
                <div className="flex sm:hidden w-[90%] border bg-gray-10/50 backdrop-blur-sm rounded-3xl py-2 px-4">
                    <div className="flex items-center justify-between w-full">
                        {/* Hamburger Menu - Left */}
                        <button
                            className="flex items-center"
                            onClick={() => setHideOnMobile(!hideOnMobile)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        {/* Blogs/Home Link - Center */}
                        <Link
                            href={pathname.startsWith('/blogs') ? "/" : "/blogs"}
                            className="font-medium text-base"
                        >
                            {pathname.startsWith('/blogs') ? "Home" : "Blogs"}
                        </Link>

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

            {/* Mobile Menu Dropdown */}
            <ul
                className={`w-[90%] sm:hidden flex-col bg-base-200 backdrop-blur-sm fixed top-16 left-[5%] rounded-2xl border mx-auto text-base p-4 gap-3 z-10 ${
                    hideOnMobile ? "hidden" : "flex"
                }`}
            >
                <li>
                    <Link
                        href="/#about"
                        className="hover:underline block py-2"
                        onClick={() => setHideOnMobile(true)}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#projects"
                        className="hover:underline block py-2"
                        onClick={() => setHideOnMobile(true)}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#experience"
                        className="hover:underline block py-2"
                        onClick={() => setHideOnMobile(true)}
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#education"
                        className="hover:underline block py-2"
                        onClick={() => setHideOnMobile(true)}
                    >
                        Education
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="hover:underline block py-2"
                        onClick={() => setHideOnMobile(true)}
                    >
                        Contact
                    </Link>
                </li>
                <li className="border-t border-base-content/20 pt-2">
                    <Link
                        href="/"
                        className="hover:underline block py-2 font-medium"
                        onClick={() => setHideOnMobile(true)}
                    >
                        Home
                    </Link>
                </li>
            </ul>
        </>
    );
}
