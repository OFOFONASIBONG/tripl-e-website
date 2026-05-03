// filepath: src/components/blog/BlogTeaser.tsx
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "@phosphor-icons/react";
import { BlogPost } from "@/data/blog-posts";
import { Reveal } from "@/components/site/Reveal";

interface BlogTeaserProps {
  post: BlogPost;
  index: number;
}

const BlogTeaser = ({ post, index }: BlogTeaserProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Reveal delay={index * 0.15}>
      <article className="group relative">
        {/* Main card container with organic shape */}
        <div 
          className={`
            relative overflow-hidden bg-brand-navy rounded-[40px_16px_40px_16px] 
            transition-all duration-700 hover:rounded-[24px_24px_24px_24px]
            ${isEven ? 'rounded-[40px_16px_40px_16px]' : 'rounded-[16px_40px_16px_40px]'}
          `}
        >
          {/* Layered image stack */}
          <div className="relative h-[320px] overflow-hidden">
            {/* Base layer - hero image */}
            <div className="absolute inset-0">
              <img 
                src={post.heroImage} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
            </div>
            
            {/* Layered images - stacked with depth effect */}
            {post.images.slice(0, 2).map((img, imgIndex) => (
              <div 
                key={imgIndex}
                className={`
                  absolute transition-all duration-700 ease-out
                  ${imgIndex === 0 
                    ? 'bottom-4 right-4 w-32 h-24 opacity-80 group-hover:bottom-8 group-hover:right-8 group-hover:opacity-100' 
                    : 'bottom-12 right-12 w-28 h-20 opacity-60 group-hover:bottom-16 group-hover:right-16 group-hover:opacity-90'
                  }
                `}
                style={{ 
                  zIndex: imgIndex + 1,
                  borderRadius: imgIndex === 0 ? '20px 8px 20px 8px' : '12px 24px 12px 24px',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
                }}
              >
                <img 
                  src={img} 
                  alt={`${post.title} - Image ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/90 backdrop-blur-sm rounded-full text-brand-dark text-xs font-sans font-semibold tracking-wider uppercase">
                {post.category}
              </span>
            </div>
            
            {/* Date & Read time */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 text-brand-cream/70 text-xs font-sans tracking-wide">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} weight="duotone" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} weight="duotone" />
                {post.readTime}
              </span>
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-8 relative">
            {/* Decorative line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
            
            <h3 className="font-serif text-2xl md:text-3xl text-brand-cream mb-3 group-hover:text-brand-goldlight transition-colors duration-500">
              {post.title}
            </h3>
            
            <p className="font-sans text-brand-cream/60 text-sm leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            
            {/* Author & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <span className="font-serif text-brand-gold font-semibold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-brand-cream text-sm font-medium">{post.author}</p>
                  <p className="font-sans text-brand-cream/50 text-xs">{post.authorRole}</p>
                </div>
              </div>
              
              <Link 
                to={`/ecosystem?post=${post.slug}`}
                className="group/btn inline-flex items-center gap-2 px-5 py-3 bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 hover:border-brand-gold/60 rounded-full transition-all duration-500"
              >
                <span className="font-sans text-brand-gold text-sm font-semibold tracking-wide">
                  Read
                </span>
                <ArrowRight 
                  size={16} 
                  weight="bold" 
                  className="text-brand-gold group-hover/btn:translate-x-1 transition-transform duration-300" 
                />
              </Link>
            </div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-leaf/10 blur-[80px]" />
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default BlogTeaser;