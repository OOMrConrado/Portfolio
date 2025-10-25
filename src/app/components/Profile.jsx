import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
    return (
        <>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex gap-[5px] items-center">
                        <h1 className="text-2xl font-semibold">{about.name}</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="currentColor"
                        >
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                        </svg>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1">
                        <p className="text-lg text-base-content/60">{about.role} // </p>
                        <p className="underline cursor-pointer text-base-content/90">
                            Available
                        </p>
                    </div>
                    <div className="flex items-center mt-3 gap-5 sm:gap-3">
                        <a href={socials.linkedin}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-linkedin cursor-pointer transition-all duration-300 ease-in-out hover:stroke-[#0A66C2] hover:scale-110"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        <a href={socials.github}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github cursor-pointer transition-all duration-300 ease-in-out hover:stroke-[#333333] hover:scale-110"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        <a href={socials.instagram}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-instagram cursor-pointer transition-all duration-300 ease-in-out hover:stroke-[#C13584] hover:scale-110"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>

                        <a href={socials.email}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail cursor-pointer transition-all duration-300 ease-in-out hover:stroke-[#EA4335] hover:scale-110"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>
                </div>
                <img
                    src="https://i.pinimg.com/736x/1f/ae/8a/1fae8adcc74dd616ed0db25836224c5c.jpg"
                    className="w-[100px] h-[100px] rounded-[50%] object-cover object-center flex-shrink-0"
                    style={{ marginTop: '0px', marginRight: '20px' }}
                    alt={`${about.name}'s profile`}
                />
            </div>
        </>
    );
}
