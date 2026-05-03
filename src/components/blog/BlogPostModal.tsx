// filepath: src/components/blog/BlogPostModal.tsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { X, ArrowRight, ArrowLeft, Clock, Calendar, Quotes } from "@phosphor-icons/react";
import { BlogPost, getBlogPostBySlug, getNextBlogPost, getPreviousBlogPost } from "@/data/blog-posts";
import { Reveal } from "@/components/site/Reveal";

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}

const BlogPostModal = ({ post, onClose, onNavigate }: BlogPostModalProps) => {
  const nextPost = getNextBlogPost(post.id);
  const prevPost = getPreviousBlogPost(post.id);
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy/95 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 border border-brand-gold/30 transition-all duration-300 group"
      >
        <X 
          size={24} 
          weight="bold" 
          className="text-brand-cream group-hover:rotate-90 transition-transform duration-300" 
        />
      </button>
      
      {/* Main content */}
      <div className="relative min-h-screen py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            {/* Hero Section */}
            <div className="relative mb-12">
              {/* Hero Image with layered effect */}
              <div className="relative h-[50vh] md:h-[60vh] rounded-[40px_16px_40px_16px] overflow-hidden mb-8">
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                
                {/* Floating layered images */}
                <div className="absolute bottom-8 right-8 flex gap-4">
                  {post.images.slice(0, 3).map((img, idx) => (
                    <div 
                      key={idx}
                      className="hidden md:block w-40 h-28 rounded-[20px_8px_20px_8px] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:-translate-y-2"
                      style={{ 
                        zIndex: idx,
                        transform: `translateX(${idx * 20}px) rotate(${idx * 2 - 2}deg)`
                      }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                
                {/* Category & Meta */}
                <div className="absolute top-8 left-8 flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gold/95 backdrop-blur-sm rounded-full text-brand-dark text-xs font-sans font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-brand-cream/80 text-sm font-sans">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} weight="duotone" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} weight="duotone" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Title Section */}
              <div className="text-center">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-cream mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="font-sans text-xl md:text-2xl text-brand-goldlight font-light leading-relaxed max-w-3xl mx-auto">
                  {post.subtitle}
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            {/* Author Card */}
            <div className="flex items-center justify-center gap-4 mb-12 p-6 bg-brand-cream/5 rounded-full border border-brand-gold/20 max-w-md mx-auto">
              <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <span className="font-serif text-brand-gold font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <p className="font-sans text-brand-cream font-semibold">{post.author}</p>
                <p className="font-sans text-brand-cream/50 text-sm">{post.authorRole}</p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            {/* Quote Block */}
            <div className="relative mb-16 p-8 md:p-12 bg-brand-gold/10 rounded-[40px_16px_40px_16px] border border-brand-gold/20">
              <Quotes 
                size={48} 
                weight="duotone" 
                className="text-brand-gold/30 absolute top-6 left-6 md:top-8 md:left-8" 
              />
              <blockquote className="font-serif text-2xl md:text-3xl text-brand-cream italic leading-relaxed text-center max-w-3xl mx-auto pt-8">
                {post.excerpt}
              </blockquote>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            {/* Content Sections */}
            <div className="space-y-8 mb-16">
              {post.content.map((paragraph, idx) => (
                <div 
                  key={idx}
                  className="relative p-6 md:p-8 bg-brand-cream/3 rounded-[24px_40px_24px_40px] border border-brand-cream/5 hover:border-brand-gold/20 transition-all duration-500"
                >
                  <p className="font-sans text-lg md:text-xl text-brand-cream/80 font-light leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={0.5}>
            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pb-12">
              {/* Exit Button */}
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-cream/5 hover:bg-brand-cream/10 border border-brand-cream/20 hover:border-brand-cream/40 rounded-full transition-all duration-500"
              >
                <X 
                  size={20} 
                  weight="bold" 
                  className="text-brand-cream group-hover:rotate-90 transition-transform duration-300" 
                />
                <span className="font-sans text-brand-cream font-semibold tracking-wide">
                  Exit to Previous
                </span>
              </button>
              
              {/* Previous Post */}
              {prevPost && (
                <button
                  onClick={() => onNavigate(prevPost.slug)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-navy/50 hover:bg-brand-gold/20 border border-brand-gold/20 hover:border-brand-gold/50 rounded-full transition-all duration-500"
                >
                  <ArrowLeft 
                    size={20} 
                    weight="bold" 
                    className="text-brand-gold group-hover:-translate-x-1 transition-transform duration-300" 
                  />
                  <div className="text-left">
                    <span className="font-sans text-brand-cream/50 text-xs tracking-wide block">Previous</span>
                    <span className="font-sans text-brand-cream font-semibold">{prevPost.title}</span>
                  </div>
                </button>
              )}
              
              {/* Next Post */}
              {nextPost && (
                <button
                  onClick={() => onNavigate(nextPost.slug)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-gold/90 hover:bg-brand-gold rounded-full transition-all duration-500"
                >
                  <div className="text-right">
                    <span className="font-sans text-brand-dark/60 text-xs tracking-wide block">Next</span>
                    <span className="font-sans text-brand-dark font-semibold">{nextPost.title}</span>
                  </div>
                  <ArrowRight 
                    size={20} 
                    weight="bold" 
                    className="text-brand-dark group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BlogPostModal;