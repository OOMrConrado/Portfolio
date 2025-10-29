"use client";
import { blogs } from "../../../data/data";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { getPostContent } from "../../../data/posts/postContent";
import { useState, useEffect } from "react";

export default function BlogPost() {
    const params = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    // Format date to Spanish locale
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get the blog post content
    const content = getPostContent(blog.slug);

    // Add click handlers to images after mount
    useEffect(() => {
        const images = document.querySelectorAll('.prose img');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                setSelectedImage(e.target.src);
            });
        });

        return () => {
            images.forEach(img => {
                img.removeEventListener('click', () => {});
            });
        };
    }, [content]);

    return (
        <div className="md:w-[800px] w-full mt-5 p-4 pb-16">
            <main className="flex flex-col gap-6">
                {/* Back Button */}
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors w-fit group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="font-medium">Volver al blog</span>
                </Link>

                {/* Article Header */}
                <article className="flex flex-col gap-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-sm font-semibold">
                            {blog.category}
                        </span>
                        <span className="text-base-content/60 text-sm flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {blog.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content leading-tight">
                        {blog.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-base-content/60 text-sm pb-6 border-b border-base-content/10">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{blog.author}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="text-base-content/80 leading-relaxed space-y-6">
                            {content}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-base-content/10">
                        <span className="text-base-content/70 font-medium mr-2">Tags:</span>
                        {blog.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-base-200 text-base-content/70 text-sm font-medium hover:bg-base-300 transition-colors"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </article>

                {/* Related Posts / Back to Blog */}
                <div className="mt-12 p-6 rounded-xl bg-base-200/50 border border-base-content/10">
                    <h3 className="text-xl font-bold mb-4 text-base-content">
                        ¿Te gustó este artículo?
                    </h3>
                    <p className="text-base-content/70 mb-4">
                        Descubre más artículos sobre QA, Testing, Scrum y mejores prácticas de desarrollo.
                    </p>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-base-content text-base-100 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        Ver todos los artículos
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </main>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-3 bg-base-100/90 hover:bg-base-100 rounded-full transition-all z-10 shadow-lg"
                            aria-label="Close image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-base-content"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage}
                            alt="Expanded view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
