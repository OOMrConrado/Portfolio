"use client";
import React, { useState } from "react";
import { blogs } from "../../data/data";
import Link from "next/link";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Get unique categories
    const categories = ["all", ...new Set(blogs.map(blog => blog.category))];

    // Filter blogs by category
    const filteredBlogs = selectedCategory === "all"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    // Format date to Spanish locale
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="md:w-[800px] w-full mt-5 p-4">
            <main className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl md:text-3xl font-bold before:content-['>'] before:mr-2 text-base-content">
                        Blog 
                    </h1>
                    <p className="text-base text-base-content/70">
                        Artículos propios sobre QA, Testing, Metodologías Ágiles, Herramientas de Desarrollo y Proyectos.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? "bg-base-content text-base-100 shadow-md"
                                    : "bg-base-200 text-base-content/70 hover:bg-base-300 hover:text-base-content"
                            }`}
                        >
                            {category === "all" ? "Todos" : category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 mt-4">
                        {filteredBlogs.map((blog, index) => (
                            <Link
                                href={`/blogs/${blog.slug}`}
                                key={index}
                                className="group"
                            >
                                <article className="relative rounded-xl border-2 border-base-content/20 hover:border-base-content/80 bg-gradient-to-br from-base-100 to-base-200/50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                                    {/* Featured Badge */}
                                    {blog.featured && (
                                        <div className="absolute -top-3 left-6">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                Destacado
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-3">
                                        {/* Category and Read Time */}
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="px-3 py-1 rounded-md bg-base-content/10 text-base-content/80 font-medium">
                                                {blog.category}
                                            </span>
                                            <span className="text-base-content/60 flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                {blog.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl md:text-2xl font-bold text-base-content group-hover:text-blue-500 transition-colors">
                                            {blog.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-base text-base-content/70 leading-relaxed">
                                            {blog.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {blog.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 py-1 rounded bg-base-200/50 text-base-content/60 border border-base-content/10"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-base-content/10">
                                            <span className="text-sm text-base-content/60">
                                                {formatDate(blog.date)}
                                            </span>
                                            <span className="text-sm font-medium text-blue-500 group-hover:underline flex items-center gap-1">
                                                Leer más
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-base-content/60 text-lg">
                            No hay artículos en esta categoría
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
