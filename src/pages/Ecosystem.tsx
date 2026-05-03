// filepath: src/pages/Ecosystem.tsx
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Clock, Calendar, Quotes, X } from "@phosphor-icons/react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { blogPosts, getBlogPostBySlug, getNextBlogPost, getPreviousBlogPost, BlogPost } from "@/data/blog-posts";

const Ecosystem = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const postSlug = searchParams.get("post");
  
  useEffect(() => {
    if (postSlug) {
      const post = getBlogPostBySlug(postSlug);
      if (post) {
        setSelectedPost(post);
        document.body.style.overflow = "hidden";
      }
    } else {
      setSelectedPost(null);
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [postSlug]);
  
  const handleNavigatePost = (slug: string) => {
    setSearchParams({ post: slug });
  };
  
  const handleClosePost = () => {
    setSearchParams({});
  };
  
  const nextPost = selectedPost ? getNextBlogPost(selectedPost.id) : null;
  const prevPost = selectedPost ? getPreviousBlogPost(selectedPost.id) : null;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="IV. The Knowledge Ecosystem"
        title={<>Insights & <span className="italic text-gradient-gold">Perspectives.</span></>}
        subtitle="Deep dives into psychology, research, career reinvention, and family healing. Each article is designed to challenge your thinking and expand your worldview."
        watermark="ECOSYSTEM"
      />

      {/* BLOG POSTS GRID */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-gold/5 blob-2 blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-brand-leafdeep/20 blob-3 blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4">
                Latest <span className="text-gradient-gold">Insights</span>
              </h2>
              <p className="font-sans text-brand-cream/60 text-lg max-w-2xl mx-auto">
                Explore our collection of thought leadership articles, research findings, and practical guides.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <StaggerItem key={post.id}>
                <article 
                  className="group cursor-pointer"
                  onClick={() => handleNavigatePost(post.slug)}
                >
                  {/* Card with organic shape */}
                  <div 
                    className={`
                      relative overflow-hidden bg-brand-navy-2 rounded-[40px_16px_40px_16px] 
                      transition-all duration-700 hover:rounded-[24px_24px_24px_24px]
                      border border-brand-cream/5 hover:border-brand-gold/30
                      ${index % 3 === 0 ? 'rounded-[40px_16px_40px_16px]' : index % 3 === 1 ? 'rounded-[16px_40px_16px_40px]' : 'rounded-[32px_32px_16px_16px]'}
                    `}
                  >
                    {/* Image section */}
                    <div className="relative h-[240px] overflow-hidden">
                      <img 
                        src={post.heroImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-2 via-transparent to-transparent" />
                      
                      {/* Layered images */}
                      {post.images.slice(0, 2).map((img, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className={`
                            absolute transition-all duration-700 ease-out hidden md:block
                            ${imgIndex === 0 
                              ? 'bottom-3 right-3 w-24 h-18 opacity-70 group-hover:bottom-6 group-hover:right-6' 
                              : 'bottom-8 right-8 w-20 h-14 opacity-50 group-hover:bottom-12 group-hover:right-12'
                            }
                          `}
                          style={{ 
                            zIndex: imgIndex + 1,
                            borderRadius: imgIndex === 0 ? '16px 6px 16px 6px' : '10px 20px 10px 20px'
                          }}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      
                      {/* Category */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1.5 bg-brand-gold/90 backdrop-blur-sm rounded-full text-brand-dark text-[10px] font-sans font-bold tracking-wider uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-brand-cream/50 text-xs font-sans mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} weight="duotone" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} weight="duotone" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl text-brand-cream mb-2 group-hover:text-brand-goldlight transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="font-sans text-brand-cream/50 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-brand-gold text-xs font-medium">
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1 text-brand-gold text-sm font-semibold group-hover:gap-2 transition-all">
                          Read <ArrowRight size={14} weight="bold" />
                        </span>
                      </div>
                    </div>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 blur-[60px]" />
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          
          {/* CTA */}
          <Reveal delay={0.3}>
            <div className="text-center mt-16">
              <p className="font-sans text-brand-cream/60 mb-6">
                Want to stay updated with our latest insights?
              </p>
              <Link to="/contact" className="btn-pea btn-pea-gold inline-flex">
                Subscribe to Updates
                <ArrowRight weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FULL BLOG POST MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-brand-navy/98 backdrop-blur-md"
            onClick={handleClosePost}
          />
          
          {/* Close button */}
          <button
            onClick={handleClosePost}
            className="fixed top-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 border border-brand-gold/30 transition-all duration-300 group"
          >
            <X 
              size={24} 
              weight="bold" 
              className="text-brand-cream group-hover:rotate-90 transition-transform duration-300" 
            />
          </button>
          
          {/* Post Content */}
          <div className="relative min-h-screen py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                {/* Hero */}
                <div className="relative mb-12">
                  <div className="relative h-[45vh] md:h-[55vh] rounded-[40px_16px_40px_16px] overflow-hidden mb-8">
                    <img 
                      src={selectedPost.heroImage} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                    
                    {/* Floating layered images */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      {selectedPost.images.slice(0, 3).map((img, idx) => (
                        <div 
                          key={idx}
                          className="hidden md:block w-36 h-24 rounded-[18px_6px_18px_6px] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:-translate-y-2"
                          style={{ 
                            zIndex: idx,
                            transform: `translateX(${idx * 16}px) rotate(${idx * 1.5 - 1.5}deg)`
                          }}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Category & Meta */}
                    <div className="absolute top-6 left-6 flex flex-col gap-3">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/95 backdrop-blur-sm rounded-full text-brand-dark text-xs font-sans font-bold tracking-wider uppercase">
                        {selectedPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-brand-cream/70 text-sm font-sans">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} weight="duotone" />
                          {selectedPost.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} weight="duotone" />
                          {selectedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-cream mb-5 leading-tight">
                      {selectedPost.title}
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-brand-goldlight font-light max-w-2xl mx-auto">
                      {selectedPost.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.15}>
                {/* Author */}
                <div className="flex items-center justify-center gap-4 mb-12 p-5 bg-brand-cream/5 rounded-full border border-brand-gold/15 max-w-sm mx-auto">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <span className="font-serif text-brand-gold font-bold text-sm">
                      {selectedPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-brand-cream font-semibold text-sm">{selectedPost.author}</p>
                    <p className="font-sans text-brand-cream/50 text-xs">{selectedPost.authorRole}</p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.25}>
                {/* Quote */}
                <div className="relative mb-14 p-8 md:p-10 bg-brand-gold/8 rounded-[36px_14px_36px_14px] border border-brand-gold/15">
                  <Quotes 
                    size={40} 
                    weight="duotone" 
                    className="text-brand-gold/25 absolute top-5 left-5 md:top-6 md:left-6" 
                  />
                  <blockquote className="font-serif text-xl md:text-2xl text-brand-cream italic leading-relaxed text-center max-w-3xl mx-auto pt-6">
                    {selectedPost.excerpt}
                  </blockquote>
                </div>
              </Reveal>
              
              <Reveal delay={0.35}>
                {/* Content */}
                <div className="space-y-6 mb-14">
                  {selectedPost.content.map((paragraph, idx) => (
                    <div 
                      key={idx}
                      className="p-5 md:p-7 bg-brand-cream/2.5 rounded-[20px_36px_20px_36px] border border-brand-cream/3 hover:border-brand-gold/15 transition-all duration-500"
                    >
                      <p className="font-sans text-base md:text-lg text-brand-cream/75 font-light leading-loose">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              
              <Reveal delay={0.45}>
                {/* Navigation */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pb-8">
                  {/* Exit */}
                  <button
                    onClick={handleClosePost}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-cream/5 hover:bg-brand-cream/10 border border-brand-cream/15 hover:border-brand-cream/30 rounded-full transition-all duration-500"
                  >
                    <X 
                      size={18} 
                      weight="bold" 
                      className="text-brand-cream group-hover:rotate-90 transition-transform duration-300" 
                    />
                    <span className="font-sans text-brand-cream font-medium text-sm tracking-wide">
                      Exit
                    </span>
                  </button>
                  
                  {/* Previous */}
                  {prevPost && (
                    <button
                      onClick={() => handleNavigatePost(prevPost.slug)}
                      className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-navy/60 hover:bg-brand-gold/15 border border-brand-gold/15 hover:border-brand-gold/40 rounded-full transition-all duration-500"
                    >
                      <ArrowLeft 
                        size={18} 
                        weight="bold" 
                        className="text-brand-gold group-hover:-translate-x-1 transition-transform duration-300" 
                      />
                      <div className="text-left">
                        <span className="font-sans text-brand-cream/45 text-[10px] tracking-wide block">Previous</span>
                        <span className="font-sans text-brand-cream font-medium text-sm">{prevPost.title}</span>
                      </div>
                    </button>
                  )}
                  
                  {/* Next */}
                  {nextPost && (
                    <button
                      onClick={() => handleNavigatePost(nextPost.slug)}
                      className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-gold/92 hover:bg-brand-gold rounded-full transition-all duration-500"
                    >
                      <div className="text-right">
                        <span className="font-sans text-brand-dark/55 text-[10px] tracking-wide block">Next</span>
                        <span className="font-sans text-brand-dark font-medium text-sm">{nextPost.title}</span>
                      </div>
                      <ArrowRight 
                        size={18} 
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
      )}
    </SiteLayout>
  );
};

export default Ecosystem;