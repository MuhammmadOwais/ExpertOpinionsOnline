import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
const blogPosts = [
  // ... (baaki posts wahi hain jo aapne diye thay)
  {
    title: "Amazon SEO Mastery: 7 Secrets to Rank Your Products on Page 1 in 2026",
    description: "Ranking on Amazon isn't just about stuffing keywords anymore...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833797/Amazon_SEO_Mastery_7_Secrets_to_Rank_Your_Products_on_Page_1_in_2026_zmtodi.jpg",
    slug: "amazon-seo-mastery-7-secrets-to-rank-your-products",
    category: "Amazon FBA",
    date: "March 15, 2026"
  },
  {
    title: "How Generative AI is Revolutionizing Content Production and SEO Strategy",
    description: "AI is everywhere, but most people are using it wrong...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774834091/How_Generative_AI_is_Revolutionizing_Content_Production_and_SEO_Strategy_wqmdrh.jpg",
    slug: "how-generative-ai-is-revolutionizing-content-production",
    category: "Generative AI",
    date: "March 12, 2026"
  },
  {
    title: "Local SEO Guide: How to Dominate Your City’s Search Results This Year",
    description: "If your local business isn't showing up in the 'Map Pack'...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833794/Local_SEO_Guide_How_to_Dominate_Your_City_s_Search_Results_This_Year_yhbcbv.jpg",
    slug: "local-seo-guide-dominate-your-city-search-results",
    category: "Local SEO",
    date: "March 10, 2026"
  },
  {
    title: "Mern Stack vs WordPress: Which One is Right for Your Business?",
    description: "Choosing between a custom MERN application and a WordPress site...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833805/Mern_Stack_vs_wordpress_m3loki.jpg",
    slug: "mern-stack-vs-wordpress-which-one-is-right",
    category: "Web Development",
    date: "March 05, 2026"
  },
  {
    title: "The Ultimate UI/UX Checklist: Why Your Website Design is Killing Your Sales",
    description: "A pretty website that doesn't convert is just an expensive digital business card...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833800/The_Ultimate_UIUX_Checklist_Why_Your_Website_Design_is_Killing_Your_Sales_foewdh.jpg",
    slug: "the-ultimate-ui-ux-checklist-sales-optimization",
    category: "UI/UX Design",
    date: "March 01, 2026"
  }
];

// Speed Optimization: Cloudinary image transformation
// f_auto (auto format), q_auto (best quality/size ratio), w_1600 (limit width)
const HERO_IMAGE_URL = "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_auto,w_1600/v1774993357/pexels-mikhail-nilov-7731358_ixoeq5.jpg";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-poppins min-h-screen">
      
      {/* Dynamic Hero Section with Background Image */}
      <section 
        className="relative pt-48 pb-32 px-6 flex items-center bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HERO_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll' // Set to 'fixed' for parallax effect, but 'scroll' is faster for mobile
        }}
      >
        {/* Decorative Element for extra polish */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-600/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-purple-500/30">
            Our Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Insights & <span className="text-purple-500">Articles</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
            Thoughts, tutorials, and deep-dives into the world of tech and digital marketing from our expert team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              {/* Image with Zoom Effect */}
              <Link to={`/blog/${post.slug}`} className="block mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-transform duration-300 group-hover:shadow-lg">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  loading="lazy" 
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Meta Info */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">{post.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                  <Clock size={14} /> <span>{post.date}</span>
                </div>
              </div>

              {/* Title */}
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>

              {/* Minimal Link */}
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center text-gray-900 font-bold text-sm border-b-2 border-purple-600 self-start pb-1 hover:text-purple-600 hover:border-purple-400 transition-all"
              >
                Read Full Story
              </Link>
            </article>
          ))}
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default BlogPage;