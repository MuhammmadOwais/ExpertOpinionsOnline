import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { updateSEO } from '../utils/seo';

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
  },
  {
    title: "Why Next.js 15 and NestJS Are the New Gold Standard for 2026 Enterprise Applications",
    description: "The combo of Next.js 15 on the frontend and NestJS on the backend is officially the new gold standard...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783631697/Why_Next.js_15_and_NestJS_Are_the_New_Gold_Standard_for_2026_Enterprise_Applications._cbndkn.jpg",
    slug: "why-nextjs-15-and-nestjs-are-the-new-gold-standard-for-2026-enterprise-applications",
    category: "Web Development",
    date: "July 09, 2026"
  },
  {
    title: "Beyond Simple Chatbots: How Fleet Based Agentic AI Ecosystems Are Rewriting Enterprise Supply Chain Automation",
    description: "Specialized networks of goal-oriented AI agents are transforming supply chains into self-correcting systems...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783631917/2_pj8pc8.jpg",
    slug: "beyond-simple-chatbots-fleet-based-agentic-ai-supply-chain-automation",
    category: "Agentic AI",
    date: "July 09, 2026"
  },
  {
    title: "Template Limitations Are Costing You Conversions: The Technical Case for Decoupled Headless Retail Engines",
    description: "Monolithic templates throttle performance and limit user experience. Discover the technical case for api-driven commerce...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632123/Template_Limitations_Are_Costing_You_Conversions_The_Technical_Case_for_Decoupled_Headless_Retail_Engines._ca7i3a.jpg",
    slug: "template-limitations-are-costing-you-conversions-headless-retail-engines",
    category: "Web Development",
    date: "July 09, 2026"
  },
  {
    title: "Generative Engine Optimization (GEO): How to Structure Your Corporate Knowledge Graph to Secure Citations in ChatGPT and Gemini",
    description: "Discover how to structure your corporate knowledge graph programmatically to secure citations in ChatGPT, Gemini, and AI search engines...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632344/Generative_Engine_Optimization_GEO_How_to_Structure_Your_Corporate_Knowledge_Graph_to_Secure_Citations_in_ChatGPT_Gemini._l7bfok.jpg",
    slug: "generative-engine-optimization-geo-how-to-structure-your-corporate-knowledge-graph-secure-citations",
    category: "GEO & AEO",
    date: "July 09, 2026"
  },
  {
    title: "Why Compliance Checklists Fail: The Critical Need for Aggressive Manual Penetration Testing in Cloud Native Stacks",
    description: "Relying purely on compliance scanners and checklists leaves your cloud infrastructure highly vulnerable. Discover why deep, manual offensive testing is non-negotiable...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632344/Generative_Engine_Optimization_GEO_How_to_Structure_Your_Corporate_Knowledge_Graph_to_Secure_Citations_in_ChatGPT_Gemini._l7bfok.jpg",
    slug: "why-compliance-checklists-fail-manual-penetration-testing-cloud-native",
    category: "VAPT & Penetration Testing",
    date: "July 09, 2026"
  },
  {
    title: "The Castle and Moat Defense Is Dead: Architectural Blueprints for Implementing a Strict Zero Trust Framework",
    description: "Relying on a perimeter-based security model is obsolete. Learn the technical blueprint for implementing a strict Zero Trust Architecture...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632859/The_Castle-and-Moat_Defense_is_Dead_Architectural_Blueprints_for_Implementing_a_Strict_Zero-Trust_Framework._pppsf9.jpg",
    slug: "the-castle-and-moat-defense-is-dead-architectural-blueprints-implementing-zero-trust",
    category: "Zero-Trust & Cryptographic Engineering",
    date: "July 09, 2026"
  },
  {
    title: "Eliminating Configuration Drift: Scaling Global Infrastructure Predictably via Declarative IaC Pipelines (Terraform and OpenTofu)",
    description: "Configuration drift is the silent killer of operational stability. Learn how to eliminate drift and scale globally with absolute predictability...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632957/Eliminating_Configuration_Drift_Scaling_Global_Infrastructure_Predictably_via_Declarative_IaC_Pipelines_Terraform_OpenTofu._jiclsy.jpg",
    slug: "eliminating-configuration-drift-scaling-global-infrastructure-predictably-declarative-iac",
    category: "Cloud & DevOps",
    date: "July 09, 2026"
  },
  {
    title: "From Rearview Dashboards to Proactive Foresight: Engineering Closed Loop MLOps Pipelines for Revenue Retention",
    description: "Historical data tells you how much money you lost last month. Learn how closed-loop MLOps pipelines dynamically predict and prevent user churn...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783633160/From_Rearview_Dashboards_to_Proactive_Foresight_Engineering_Closed-Loop_MLOps_Pipelines_for_Revenue_Retention._fdtlbu.jpg",
    slug: "rearview-dashboards-proactive-foresight-closed-loop-mlops-pipelines-revenue-retention",
    category: "Growth Hacking",
    date: "July 09, 2026"
  },
  {
    title: "The New Mobile Architecture Battleground: Engineering Resilient Offline First Enterprise Applications",
    description: "Offline-first mobile applications demand unshakeable database integrity and zero main-thread UI stutters. Learn the nativeSwift and Kotlin stack architectures...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783633312/Complex_local_state_synchronization_SQLiteRealm_payload_minimization_for_bandwidth_aur_strict_mobile_biometrics_FaceIDFingerprint._eakaen.jpg",
    slug: "new-mobile-architecture-battleground-offline-first-enterprise-apps",
    category: "Mobile Apps",
    date: "July 09, 2026"
  },
  {
    title: "Bridging the Chasm Between Figma Tokens and React UI: Scaling Development Velocity by 40% with Enterprise Design Systems",
    description: "Tired of copy-pasting hex codes? Learn how Style Dictionary can automate your Figma design token pipelines into production-ready React styles...",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625569/Serverless_Modernization_Microservices_f7eqgj.jpg",
    slug: "figma-tokens-to-react-ui-enterprise-design-systems-velocity",
    category: "UI/UX Design",
    date: "July 09, 2026"
  }
];

const BlogPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(
      "Insights & Articles",
      "Read deep-dives, guides, and strategic insights on Amazon SEO, Generative Engine Optimization (GEO), Web Development (MERN, React, Next.js), and Cybersecurity."
    );

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-16 gap-x-8 md:gap-x-10">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="flex flex-row sm:flex-col gap-4 sm:gap-0 items-start sm:items-stretch pb-6 sm:pb-0 border-b sm:border-b-0 border-gray-100 sm:border-transparent transform-gpu"
            >

              {/* Image Box */}
              <Link 
                to={`/blog/${post.slug}`} 
                className="block overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 shrink-0 w-[110px] h-[78px] sm:w-full sm:h-auto sm:mb-4"
              >
                <picture>
                  <source
                    media="(min-width: 640px)"
                    srcSet={getOptimizedBlogUrl(post.img, 450, 75)}
                  />
                  <img
                    src={getOptimizedBlogUrl(post.img, 180, 65)}
                    alt={post.title}
                    width="450"
                    height="280"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full sm:aspect-[16/10] object-cover pointer-events-none"
                  />
                </picture>
              </Link>

              {/* Content Wrap */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Meta Info */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-[9px] sm:text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-[11px] font-medium">
                    <Clock size={10} className="sm:w-3 sm:h-3" /> <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xs sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-snug hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="hidden sm:block text-gray-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Read Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="hidden sm:inline-flex items-center text-gray-900 font-bold text-xs border-b-2 border-purple-600 self-start pb-0.5 hover:text-purple-600 transition-colors"
                >
                  Read Full Story
                </Link>
              </div>
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