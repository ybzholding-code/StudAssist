import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "@/src/components/ui/icons";
import { blogs } from "@/src/data/blogs";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Blogs() {
  usePageMeta({
    title: "Blog — Conseils Orientation & Accompagnement Scolaire",
    description: "Découvrez les articles de blog STUDASSIST : conseils en orientation scolaire, méthodes de travail, préparation aux concours et aux études à l'international.",
    canonical: "/blogs",
  });
  return (
    <div className="pt-10 pb-20 bg-[#f8fbfc] min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-brand-darkblue mb-6 leading-tight">
            Nos <span className="text-sa-green uppercase">Derniers Articles</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez nos conseils, analyses et astuces pour réussir votre parcours scolaire, 
            votre orientation et vos examens.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link 
              key={post.id} 
              to={`/blogs/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden bg-white flex">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-sm mb-4 font-medium">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="font-black text-brand-darkblue text-xl mb-4 leading-snug group-hover:text-brand-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sa-green font-bold text-sm tracking-wide uppercase mt-auto">
                  Lire l'article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
