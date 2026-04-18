import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  { title: "Amazon SEO Mastery: 7 Secrets...", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833797/Amazon_SEO_Mastery_7_Secrets_to_Rank_Your_Products_on_Page_1_in_2026_zmtodi.jpg", slug: "amazon-seo-mastery-7-secrets-to-rank-your-products", type: "Blogs" },
  { title: "Generative AI Revolution", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774834091/How_Generative_AI_is_Revolutionizing_Content_Production_and_SEO_Strategy_wqmdrh.jpg", slug: "how-generative-ai-is-revolutionizing-content-production", type: "Blogs" },
  { title: "Local SEO Guide 2026", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833794/Local_SEO_Guide_How_to_Dominate_Your_City_s_Search_Results_This_Year_yhbcbv.jpg", slug: "local-seo-guide-dominate-your-city-search-results", type: "Blogs" },
  { title: "Mern Stack vs WordPress", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833805/Mern_Stack_vs_wordpress_m3loki.jpg", slug: "mern-stack-vs-wordpress-which-one-is-right", type: "Blogs" },
  { title: "UI/UX Checklist for Sales", img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833800/The_Ultimate_UIUX_Checklist_Why_Your_Website_Design_is_Killing_Your_Sales_foewdh.jpg", slug: "the-ultimate-ui-ux-checklist-sales-optimization", type: "Blogs" }
];

const BlogCard = ({ blog, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${height} rounded-2xl overflow-hidden bg-gray-900 border border-purple-900/20 group transition-all duration-300 hover:border-purple-500/50`}>
      <Link to={`/blog/${blog.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden bg-gray-800">
          {!isLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
          <img 
            src={blog.img} 
            alt={blog.title} 
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <span className="bg-purple-600 text-white text-[10px] font-bold uppercase py-1 px-2 rounded-md w-fit mb-3">
            {blog.type}
          </span>
          <h3 className="text-white font-bold text-base leading-snug line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

const Insights = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-black font-poppins">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          {/* Text Section */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <p className="text-purple-500 font-semibold tracking-widest text-xs uppercase mb-4">
              Our Latest News
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
              Insightful stories and <br />
              <span className="text-purple-600">Expert Opinions</span>
            </h2>
            
            <Link to="/blog" className="hidden lg:inline-block">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/20">
                Explore More
              </button>
            </Link>
          </div>
          
          {/* Cards Section - Now Cleanly Aligned */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <BlogCard blog={blogs[0]} height="h-[300px]" />
                <BlogCard blog={blogs[1]} height="h-[250px]" />
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <BlogCard blog={blogs[2]} height="h-[250px]" />
                <BlogCard blog={blogs[3]} height="h-[300px]" />
              </div>
            </div>
            
            {/* 5th Blog (Optional: full width or tucked in) */}
            <div className="mt-6">
               <BlogCard blog={blogs[4]} height="h-[220px]" />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="flex lg:hidden justify-center mt-8">
            <Link to="/blog">
              <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold">
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