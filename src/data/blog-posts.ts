// filepath: src/data/blog-posts.ts
import { ArrowRight, Quotes, GraduationCap, Compass, Heartbeat, Flask, BookOpen, UsersFour, FlowerLotus } from "@phosphor-icons/react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  heroImage: string;
  images: string[];
  content: string[];
  relatedService?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "beyond-stuckness",
    title: "Beyond Emotional Stuckness",
    subtitle: "The Hidden Architecture of Unfulfilled Potential",
    excerpt: "Why do so many accomplished professionals wake up one day feeling trapped in their own success? The answer lies not in their circumstances, but in the silent agreements they made with themselves years ago.",
    category: "Psychology",
    date: "April 15, 2026",
    readTime: "8 min read",
    author: "Dr. Emmanuel Okwudili",
    authorRole: "Founder & Lead Consultant",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    ],
    content: [
      "The phenomenon of emotional stuckness is more prevalent than ever before. Professionals who have achieved external success find themselves trapped in an internal prison of their own making.",
      "At Triple E, we've identified three silent agreements that keep people stuck: the agreement of safety, the agreement of certainty, and the agreement of approval. These agreements, often formed in childhood, create invisible walls that confine our potential.",
      "Breaking free requires more than motivation—it requires a systematic deconstruction of these agreements and the reconstruction of a new internal architecture that supports growth.",
      "Our approach at Triple E combines psychological insight with practical strategy. We don't just help you feel better; we help you become more."
    ],
    relatedService: "start-afresh"
  },
  {
    id: "2",
    slug: "research-revolution",
    title: "The Research Revolution",
    subtitle: "How AI is Transforming Academic Excellence",
    excerpt: "The landscape of academic research is undergoing a seismic shift. Artificial intelligence is not replacing researchers—it's amplifying their capabilities in ways we never thought possible.",
    category: "Research",
    date: "April 8, 2026",
    readTime: "6 min read",
    author: "Dr. Sarah Nwankwo",
    authorRole: "Head of Research, TISPAS",
    heroImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
    ],
    content: [
      "In the halls of universities across Africa and beyond, a quiet revolution is taking place. Researchers are leveraging artificial intelligence to amplify their capabilities, not replace their creativity.",
      "TISPAS has been at the forefront of this revolution, helping postgraduate researchers integrate AI tools into their workflow without compromising academic integrity.",
      "The key lies in understanding AI as a collaborative partner—a thinking tool that handles the mechanical aspects of research while freeing scholars to focus on insight and innovation.",
      "This is not the end of traditional research. This is its renaissance."
    ],
    relatedService: "tispas"
  },
  {
    id: "3",
    slug: "healing-family-unit",
    title: "Healing the Unit of Society",
    subtitle: "Why Family Restoration is the Foundation of Community Transformation",
    excerpt: "Every broken family sends ripples through generations. But what if we could interrupt those ripples? What if healing was possible, not just probable?",
    category: "Relationships",
    date: "March 28, 2026",
    readTime: "7 min read",
    author: "Mrs. Grace Okonkwo",
    authorRole: "Senior Clinical Counselor",
    heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop"
    ],
    content: [
      "The family is the smallest unit of society, and when it breaks, society breaks with it. This isn't metaphor—it's observable reality that shows up in our classrooms, workplaces, and communities.",
      "At Triple E, we approach family healing not as a luxury but as a necessity. Our clinical interventions are designed to address the root causes of relational rupture, not just the symptoms.",
      "Through our Relationship Matrix program, we've witnessed hundreds of couples transform their marriages from surviving to thriving. We've seen families rediscover connection after years of distance.",
      "The work is challenging, but the reward—a generation of emotionally healthy individuals—is worth every effort."
    ],
    relatedService: "clinical"
  },
  {
    id: "4",
    slug: "mid-career-reinvention",
    title: "Navigating Career Middlescence",
    subtitle: "The Forgotten Chapter That Could Define Your Legacy",
    excerpt: "Your forties and fifties aren't about winding down—they're about wind. Learn how to transform mid-career crisis into the most productive chapter of your professional life.",
    category: "Career",
    date: "March 20, 2026",
    readTime: "9 min read",
    author: "Mr. Charles Eze",
    authorRole: "Career Reinvention Coach",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
    ],
    content: [
      "There's a quiet crisis happening in offices and homes around the world. Professionals in their 40s and 50s are experiencing what we call 'career middlescence'—a period of profound questioning about purpose and legacy.",
      "Unlike the dramatic 'midlife crisis' of popular culture, career middlescence is subtle. It shows up as a persistent feeling of 'is this all there is?' rather than dramatic upheaval.",
      "The Start Afresh Process at Triple E was designed specifically for this phase. We help professionals audit where they are, identify what they've outgrown, and architect a path forward that aligns with who they've become.",
      "This isn't about starting over. It's about starting anew—with all the wisdom, experience, and relationships you've built along the way."
    ],
    relatedService: "start-afresh"
  },
  {
    id: "5",
    slug: "youth-mental-health",
    title: "The Silent Epidemic",
    subtitle: "Addressing Child and Teen Depression in Our Communities",
    excerpt: "Our children are struggling in silence. The epidemic of youth depression is not coming—it's here. And the solution requires more than awareness; it requires action.",
    category: "Mental Health",
    date: "March 12, 2026",
    readTime: "7 min read",
    author: "Dr. Amara Obi",
    authorRole: "Child & Adolescent Specialist",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
    ],
    content: [
      "Walk into any secondary school and you'll find students carrying weights that no child should bear. The pressure to perform, to fit in, to succeed—it's overwhelming an entire generation.",
      "Depression in children and teens often presents differently than in adults. Irritability, withdrawal from activities once loved, declining academic performance—these are the quiet cries for help.",
      "Triple E's approach to youth mental health is culturally-aware and clinically-sound. We work with young people in their language, in their context, and on their terms.",
      "The path forward requires us to break the silence, challenge the stigma, and create spaces where our children can be vulnerable without being judged."
    ],
    relatedService: "clinical"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getNextBlogPost = (currentId: string): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentId);
  if (currentIndex === -1 || currentIndex === blogPosts.length - 1) return undefined;
  return blogPosts[currentIndex + 1];
};

export const getPreviousBlogPost = (currentId: string): BlogPost | undefined => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentId);
  if (currentIndex <= 0) return undefined;
  return blogPosts[currentIndex - 1];
};