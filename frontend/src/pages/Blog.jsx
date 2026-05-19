import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Dynamic pipeline queries for optimization updates
const getOptimizedBlogUrl = (url, width, quality = 70) => {
  return url.replace('/upload/', `/upload/f_auto,q_${quality},w_${width},c_scale/`);
};

const blogPosts = [
  {
    title: "Amazon SEO Mastery: 7 Secrets to Rank Your Products on Page 1 in 2026",
    description: "Ranking on Amazon isn't just about stuffing keywords anymore...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155977/Amazon_SEO_Mastery_7_Secrets_to_Rank_Your_Products_on_Page_1_in_2026_zmtodi_lpyvq1.webp",
    slug: "amazon-seo-mastery-7-secrets-to-rank-your-products",
    category: "Amazon FBA",
    date: "March 15, 2026"
  },
  {
    title: "How Generative AI is Revolutionizing Content Production and SEO Strategy",
    description: "AI is everywhere, but most people are using it wrong...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155980/How_Generative_AI_is_Revolutionizing_Content_Production_and_SEO_Strategy_wqmdrh_k9gnkb.webp",
    slug: "how-generative-ai-is-revolutionizing-content-production",
    category: "Generative AI",
    date: "March 12, 2026"
  },
  {
    title: "Local SEO Guide: How to Dominate Your City’s Search Results This Year",
    description: "If your local business isn't showing up in the 'Map Pack'...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155970/Local_SEO_Guide_How_to_Dominate_Your_City_s_Search_Results_This_Year_yhbcbv_sd45sx.webp",
    slug: "local-seo-guide-dominate-your-city-search-results",
    category: "Local SEO",
    date: "March 10, 2026"
  },
  {
    title: "Mern Stack vs WordPress: Which One is Right for Your Business?",
    description: "Choosing between a custom MERN application and a WordPress site...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155976/Mern_Stack_vs_wordpress_m3loki_irzmh0.webp",
    slug: "mern-stack-vs-wordpress-which-one-is-right",
    category: "Web Development",
    date: "March 05, 2026"
  },
  {
    title: "The Ultimate UI/UX Checklist: Why Your Website Design is Killing Your Sales",
    description: "A pretty website that doesn't convert is just an expensive digital business card...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155976/The_Ultimate_UIUX_Checklist_Why_Your_Website_Design_is_Killing_Your_Sales_foewdh_pudhby.webp",
    slug: "the-ultimate-ui-ux-checklist-sales-optimization",
    category: "UI/UX Design",
    date: "March 01, 2026"
  }
];

const BlogPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive Hero image sizing constraints
  const finalHeroImg = isMobile
    ? "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_600,c_scale/v1774993357/pexels-mikhail-nilov-7731358_ixoeq5.jpg"
    : "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_75,w_1440,c_scale/v1774993357/pexels-mikhail-nilov-7731358_ixoeq5.jpg";

  return (
    <div className="bg-white font-poppins min-h-screen text-gray-900 overflow-x-hidden">
      
      {/* 1. Dynamic Hero Section */}
      <section 
        className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 flex items-center bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${finalHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-600/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm border border-purple-500/30">
            Our Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
            Insights & <span className="text-purple-500">Articles</span>
          </h1>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl leading-relaxed font-light">
            Thoughts, tutorials, and deep-dives into the world of tech and digital marketing from our expert team.
          </p>
        </div>
      </section>

      {/* 2. Main Grid Content */}
      {/* PERFORMANCE TUNE: Grid layout widths adjust specifically to make cards look smaller and sharper on mobile */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 contain-intrinsic-size">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 md:gap-y-16 md:gap-x-10">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col transform-gpu">
              
              {/* Image Box */}
              <Link to={`/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100">
                <picture>
                  <source 
                    media="(min-width: 640px)" 
                    srcSet={getOptimizedBlogUrl(post.img, 450, 75)} 
                  />
                  <img 
                    src={getOptimizedBlogUrl(post.img, 320, 65)} 
                    alt={post.title} 
                    
                    // Fixed hardcoded parameters stop Cumulative Layout Shifts completely
                    width="450"
                    height="280"
                    
                    loading="lazy" 
                    decoding="async"
                    className="w-full aspect-[16/10] object-cover pointer-events-none"
                  />
                </picture>
              </Link>

              {/* Meta Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <div className="flex items-center gap-1 text-gray-400 text-[11px] font-medium">
                  <Clock size={12} /> <span>{post.date}</span>
                </div>
              </div>

              {/* Title - Clean cut bounds */}
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-purple-600 transition-colors duration-200">
                  {post.title}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>

              {/* Read Link */}
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center text-gray-900 font-bold text-xs border-b-2 border-purple-600 self-start pb-0.5 hover:text-purple-600 transition-colors"
              >
                Read Full Story
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12 contain-intrinsic-size">
        <ContactForm />
      </div>

    </div>
  );
};

export default BlogPage;