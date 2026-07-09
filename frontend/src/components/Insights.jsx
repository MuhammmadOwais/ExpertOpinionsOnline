import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Cloudinary URL Optimization specifically structured for modern formats
const getOptimizedBlogUrl = (url, width, quality = 70) => {
  return url.replace('/upload/', `/upload/f_auto,q_${quality},w_${width},c_scale/`);
};

const blogs = [
  {
    title: "Why Next.js 15 and NestJS Are the New Gold Standard for 2026 Enterprise Applications",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783631697/Why_Next.js_15_and_NestJS_Are_the_New_Gold_Standard_for_2026_Enterprise_Applications._cbndkn.jpg",
    slug: "why-nextjs-15-and-nestjs-are-the-new-gold-standard-for-2026-enterprise-applications",
    category: "Web Development"
  },
  {
    title: "Beyond Simple Chatbots: How Fleet Based Agentic AI Ecosystems Are Rewriting Enterprise Supply Chain Automation",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783631917/2_pj8pc8.jpg",
    slug: "beyond-simple-chatbots-fleet-based-agentic-ai-supply-chain-automation",
    category: "Agentic AI"
  },
  {
    title: "Template Limitations Are Costing You Conversions: The Technical Case for Decoupled Headless Retail Engines",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632123/Template_Limitations_Are_Costing_You_Conversions_The_Technical_Case_for_Decoupled_Headless_Retail_Engines._ca7i3a.jpg",
    slug: "template-limitations-are-costing-you-conversions-headless-retail-engines",
    category: "Web Development"
  },
  {
    title: "Generative Engine Optimization (GEO): How to Structure Your Corporate Knowledge Graph to Secure Citations in ChatGPT and Gemini",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632344/Generative_Engine_Optimization_GEO_How_to_Structure_Your_Corporate_Knowledge_Graph_to_Secure_Citations_in_ChatGPT_Gemini._l7bfok.jpg",
    slug: "generative-engine-optimization-geo-how-to-structure-your-corporate-knowledge-graph-secure-citations",
    category: "GEO & AEO"
  },
  {
    title: "Why Compliance Checklists Fail: The Critical Need for Aggressive Manual Penetration Testing in Cloud Native Stacks",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632344/Generative_Engine_Optimization_GEO_How_to_Structure_Your_Corporate_Knowledge_Graph_to_Secure_Citations_in_ChatGPT_Gemini._l7bfok.jpg",
    slug: "why-compliance-checklists-fail-manual-penetration-testing-cloud-native",
    category: "VAPT & Penetration Testing"
  },
  {
    title: "The Castle and Moat Defense Is Dead: Architectural Blueprints for Implementing a Strict Zero Trust Framework",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632859/The_Castle-and-Moat_Defense_is_Dead_Architectural_Blueprints_for_Implementing_a_Strict_Zero-Trust_Framework._pppsf9.jpg",
    slug: "the-castle-and-moat-defense-is-dead-architectural-blueprints-implementing-zero-trust",
    category: "Zero-Trust & Cryptographic Engineering"
  },
  {
    title: "Eliminating Configuration Drift: Scaling Global Infrastructure Predictably via Declarative IaC Pipelines (Terraform and OpenTofu)",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783632957/Eliminating_Configuration_Drift_Scaling_Global_Infrastructure_Predictably_via_Declarative_IaC_Pipelines_Terraform_OpenTofu._jiclsy.jpg",
    slug: "eliminating-configuration-drift-scaling-global-infrastructure-predictably-declarative-iac",
    category: "Cloud & DevOps"
  },
  {
    title: "From Rearview Dashboards to Proactive Foresight: Engineering Closed Loop MLOps Pipelines for Revenue Retention",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783633160/From_Rearview_Dashboards_to_Proactive_Foresight_Engineering_Closed-Loop_MLOps_Pipelines_for_Revenue_Retention._fdtlbu.jpg",
    slug: "rearview-dashboards-proactive-foresight-closed-loop-mlops-pipelines-revenue-retention",
    category: "Growth Hacking"
  },
  {
    title: "The New Mobile Architecture Battleground: Engineering Resilient Offline First Enterprise Applications",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783633312/Complex_local_state_synchronization_SQLiteRealm_payload_minimization_for_bandwidth_aur_strict_mobile_biometrics_FaceIDFingerprint._eakaen.jpg",
    slug: "new-mobile-architecture-battleground-offline-first-enterprise-apps",
    category: "Mobile Apps"
  },
  {
    title: "Bridging the Chasm Between Figma Tokens and React UI: Scaling Development Velocity by 40% with Enterprise Design Systems",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625569/Serverless_Modernization_Microservices_f7eqgj.jpg",
    slug: "figma-tokens-to-react-ui-enterprise-design-systems-velocity",
    category: "UI/UX Design"
  }
];

const BlogCard = ({ blog }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link 
      to={`/blog/${blog.slug}`} 
      className="block group transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Mobile View: Horizontal layout, image on left, text on right */}
      <div className="flex sm:hidden items-center gap-3 p-2 bg-gray-800/40 border border-purple-950/20 rounded-xl hover:border-purple-500/30 transition-all">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-800/30">
          {!isLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
          <img
            src={getOptimizedBlogUrl(blog.img, 150, 65)}
            alt={blog.title}
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-60'}`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest block mb-1">
            {blog.category}
          </span>
          <h3 className="text-white font-bold text-xs leading-snug line-clamp-2 font-poppins">
            {blog.title}
          </h3>
        </div>
      </div>

      {/* Desktop/Tablet View: Premium card with image on top and text below */}
      <div className="hidden sm:flex flex-col h-full rounded-2xl overflow-hidden bg-gray-800/30 border border-purple-950/45 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative w-full h-44 overflow-hidden bg-gray-850">
          {!isLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
          <img
            src={getOptimizedBlogUrl(blog.img, 450, 70)}
            alt={blog.title}
            width="400"
            height="180"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-60'}`}
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-purple-600/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded-md">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col justify-between">
          <h3 className="text-white font-bold text-sm md:text-base leading-snug line-clamp-2 font-poppins mb-3">
            {blog.title}
          </h3>
          <span className="text-purple-400 group-hover:text-purple-300 text-xs font-semibold flex items-center gap-1 mt-auto">
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  );
};

const Insights = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-900 font-poppins overflow-hidden">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.6);
        }
      `}</style>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/10 blur-[100px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

          {/* Text Section */}
          <div className="lg:w-2/5 text-center lg:text-left lg:sticky lg:top-24">
            <p className="text-purple-500 font-semibold tracking-widest text-xs uppercase mb-4">
              Our Latest News
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
              Insightful stories of <br className="hidden lg:block" />
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
            <div className="lg:max-h-[680px] lg:overflow-y-auto pr-3 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-4">
                {blogs.map((blog, idx) => (
                  <BlogCard key={idx} blog={blog} />
                ))}
              </div>
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