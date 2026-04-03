import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  { title: "Amazon SEO Mastery: 7 Secrets...", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833797/Amazon_SEO_Mastery_7_Secrets_to_Rank_Your_Products_on_Page_1_in_2026_zmtodi.jpg", slug: "amazon-seo-mastery-7-secrets-to-rank-your-products", type: "Blogs" },
  { title: "Generative AI Revolution", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774834091/How_Generative_AI_is_Revolutionizing_Content_Production_and_SEO_Strategy_wqmdrh.jpg", slug: "how-generative-ai-is-revolutionizing-content-production", type: "Blogs" },
  { title: "Local SEO Guide 2026", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833794/Local_SEO_Guide_How_to_Dominate_Your_City_s_Search_Results_This_Year_yhbcbv.jpg", slug: "local-seo-guide-dominate-your-city-search-results", type: "Blogs" },
  { title: "Mern Stack vs WordPress", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833805/Mern_Stack_vs_wordpress_m3loki.jpg", slug: "mern-stack-vs-wordpress-which-one-is-right", type: "Blogs" },
  { title: "UI/UX Checklist for Sales", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833800/The_Ultimate_UIUX_Checklist_Why_Your_Website_Design_is_Killing_Your_Sales_foewdh.jpg", slug: "the-ultimate-ui-ux-checklist-sales-optimization", type: "Blogs" }
];

const BlogCard = React.memo(({ blog, height, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${height} rounded-2xl overflow-hidden bg-gray-900 border border-purple-900/30 will-change-transform`}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)'
      }}
    >
      <Link to={`/blog/${blog.slug}`} className="block h-full">
        <div className="relative w-full h-full overflow-hidden bg-gray-800">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
          )}
          <img 
            src={blog.img} 
            alt={blog.title} 
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/15 to-transparent" />
        
        <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
          <span className="bg-purple-600 text-white text-[10px] sm:text-xs font-bold uppercase py-1 px-2 sm:px-3 rounded-full w-fit mb-2 sm:mb-3">
            {blog.type}
          </span>
          <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
});

const Insights = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yLeftRaw = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const yRightRaw = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  
  const yLeft = isMobile ? { get: () => 0 } : yLeftRaw;
  const yRight = isMobile ? { get: () => 0 } : yRightRaw;
  
  return (
    <section 
      ref={containerRef} 
      className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden font-poppins"
    >
      {/* Glow effects */}
      <div className="absolute -bottom-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/40 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none will-change-transform" />
      <div className="absolute top-20 left-20 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-purple-700/10 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none will-change-transform" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10">
          
          {/* Left Side */}
          <div className="lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
            <p className="text-purple-400 font-bold tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4">
              Featured Insights
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 sm:mb-6 lg:mb-8">
              Stories of our transformations across{' '}
              <span className="text-purple-500">Services and Industries</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-7 sm:mb-8 lg:mb-10">
              From Concept to Completion.
            </p>
            
            <Link to="/blog" className="lg:self-start">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg transition-all duration-300"
              >
                Explore More
              </motion.button>
            </Link>
          </div>
          
          {/* Right Side - FIXED: Mobile par bhi 5 posts dikhengi */}
          <div className="lg:w-3/5">
            {/* Mobile: Single column with all 5 posts in order */}
            {/* Desktop: 2 columns with staggered layout */}
            
            {/* Mobile View (hidden on desktop) */}
            <div className="block md:hidden space-y-4">
              {blogs.map((blog, idx) => (
                <BlogCard key={blog.slug} blog={blog} height="h-[200px]" index={idx} />
              ))}
            </div>
            
            {/* Desktop View (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <motion.div style={{ y: yLeft }} className="space-y-6">
                <BlogCard blog={blogs[0]} height="h-[220px]" index={0} />
                <BlogCard blog={blogs[1]} height="h-[180px]" index={1} />
              </motion.div>
              
              {/* Column 2 */}
              <motion.div style={{ y: yRight }} className="space-y-6 mt-20">
                <BlogCard blog={blogs[2]} height="h-[180px]" index={2} />
                <BlogCard blog={blogs[3]} height="h-[180px]" index={3} />
                <BlogCard blog={blogs[4]} height="h-[210px]" index={4} />
              </motion.div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Insights;