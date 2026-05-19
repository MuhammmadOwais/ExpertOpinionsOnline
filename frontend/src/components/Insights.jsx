import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Cloudinary URL Optimization specifically structured for modern formats
const getOptimizedBlogUrl = (url, width, quality = 70) => {
  // FIXED: Variable interpolation interpolation perfectly fixed now
  return url.replace('/upload/', `/upload/f_auto,q_${quality},w_${width},c_scale/`);
};

const blogs = [
  { title: "Amazon SEO Mastery: 7 Secrets...", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155977/Amazon_SEO_Mastery_7_Secrets_to_Rank_Your_Products_on_Page_1_in_2026_zmtodi_lpyvq1.webp", slug: "amazon-seo-mastery-7-secrets-to-rank-your-products", type: "Blogs" },
  { title: "Generative AI Revolution", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155980/How_Generative_AI_is_Revolutionizing_Content_Production_and_SEO_Strategy_wqmdrh_k9gnkb.webp", slug: "how-generative-ai-is-revolutionizing-content-production", type: "Blogs" },
  { title: "Local SEO Guide 2026", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155970/Local_SEO_Guide_How_to_Dominate_Your_City_s_Search_Results_This_Year_yhbcbv_sd45sx.webp", slug: "local-seo-guide-dominate-your-city-search-results", type: "Blogs" },
  { title: "Mern Stack vs WordPress", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155976/Mern_Stack_vs_wordpress_m3loki_irzmh0.webp", slug: "mern-stack-vs-wordpress-which-one-is-right", type: "Blogs" },
  { title: "UI/UX Checklist for Sales", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779155976/The_Ultimate_UIUX_Checklist_Why_Your_Website_Design_is_Killing_Your_Sales_foewdh_pudhby.webp", slug: "the-ultimate-ui-ux-checklist-sales-optimization", type: "Blogs" }
];

const BlogCard = ({ blog, height, mobileHeight }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${mobileHeight} ${height} rounded-2xl overflow-hidden bg-gray-900 border border-purple-900/20 group transition-all duration-300 hover:border-purple-500/50 contain-intrinsic-size transform-gpu`}>
      <Link to={`/blog/${blog.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden bg-gray-800/50">
          {!isLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
          
          {/* HTML Responsive Image Selection */}
          <picture>
            <source 
              media="(min-width: 640px)" 
              srcSet={getOptimizedBlogUrl(blog.img, 600, 75)} 
            />
            <img 
              src={getOptimizedBlogUrl(blog.img, 380, 65)} 
              alt={blog.title} 
              
              // Sizing matrix to block CLS warnings completely
              width="380"
              height="250"
              
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-60'}`}
            />
          </picture>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-[1]" />

        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end z-[2]">
          <span className="bg-purple-600 text-white text-[10px] font-bold uppercase py-1 px-2 rounded-md w-fit mb-2">
            {blog.type}
          </span>
          <h3 className="text-white font-bold text-sm md:text-base leading-snug line-clamp-2 font-poppins">
            {blog.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

const Insights = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-black font-poppins overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/10 blur-[100px] pointer-events-none transform-gpu" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          {/* Text Section */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <p className="text-purple-500 font-semibold tracking-widest text-xs uppercase mb-4">
              Our Latest News
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
              Insightful stories of <br className="hidden lg:block"/>
              <span className="text-purple-600"> Expert Opinions</span>
            </h2>
            
            <Link to="/blog" className="hidden lg:inline-block">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
                Explore More
              </button>
            </Link>
          </div>
          
          {/* Cards Section */}
          <div className="lg:w-3/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-4 md:gap-6">
                <BlogCard blog={blogs[0]} height="sm:h-[300px]" mobileHeight="h-[180px]" />
                <BlogCard blog={blogs[1]} height="sm:h-[250px]" mobileHeight="h-[160px]" />
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col gap-4 md:gap-6">
                <BlogCard blog={blogs[2]} height="sm:h-[250px]" mobileHeight="h-[160px]" />
                <BlogCard blog={blogs[3]} height="sm:h-[300px]" mobileHeight="h-[180px]" />
              </div>
            </div>
            
            {/* 5th Blog */}
            <div className="mt-4 md:mt-6">
               <BlogCard blog={blogs[4]} height="sm:h-[200px]" mobileHeight="h-[150px]" />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="flex lg:hidden justify-center mt-6 w-full">
            <Link to="/blog" className="w-full max-w-xs">
              <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-4 rounded-full font-bold transition-all shadow-md">
                Explore More
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Insights;