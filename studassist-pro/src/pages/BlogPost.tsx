import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "@/src/components/ui/icons";
import { getBlogPostBySlug } from "@/src/data/blogs";
import { usePageMeta } from "../hooks/usePageMeta";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getBlogPostBySlug(slug || "");

  usePageMeta({
    title: post ? post.title : "Article introuvable",
    description: post ? post.excerpt : "Cet article n'existe pas ou a été déplacé.",
    canonical: post ? `/blogs/${post.slug}` : "/blogs",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f8fbfc]">
        <h1 className="text-3xl font-black text-brand-darkblue mb-4">Article introuvable</h1>
        <p className="text-gray-500 mb-8">Désolé, l'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link 
          to="/blogs" 
          className="bg-sa-green text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
        >
          Retour aux articles
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-20 bg-white">
      {/* Post Header */}
      <div className="container mx-auto px-6 pt-12 pb-8 max-w-4xl">
        <button 
          onClick={() => navigate(-1)}
          className="w-fit mb-8 text-gray-500 hover:text-sa-green flex items-center text-sm font-semibold transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Retour aux articles
        </button>
        <div className="flex items-center space-x-4 mb-6">
          <span className="bg-sa-green/10 text-sa-green px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
          <span className="flex items-center text-gray-500 text-sm font-medium">
            <Calendar size={14} className="mr-2" />
            {post.date}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-darkblue leading-tight mb-8">
          {post.title}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-6 max-w-5xl mb-12">
        <div className="w-full rounded-2xl overflow-hidden shadow-card">
          <img 
            src={post.image} 
            alt={`Image d'illustration pour l'article : ${post.title}`} 
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 mt-12 max-w-3xl">
        <div 
          className="prose prose-lg md:prose-xl prose-headings:font-black prose-headings:text-brand-darkblue prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-sa-green hover:prose-a:text-brand-teal max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer of the article */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500 mb-4 sm:mb-0">
            <Tag size={16} />
            <span className="text-sm font-medium">Classé dans : <span className="font-bold text-brand-darkblue">{post.category}</span></span>
          </div>
          
          <Link 
            to="/blogs" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-50 text-brand-darkblue font-bold text-sm hover:bg-gray-100 transition-colors"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </article>
  );
}
