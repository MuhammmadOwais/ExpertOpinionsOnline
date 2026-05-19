import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, ShoppingCart, Code, 
  Smartphone, Cpu, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import Leadership from '../components/Leadership';

const departments = [
  {
    title: "Marketing & Growth",
    icon: <TrendingUp className="text-purple-600" size={24} />,
    head: { name: "Ahsan Ali", role: "Head of Digital Marketing" },
    members: ["Ahsan Ali", "Usman Sheikh", "Zaeem Niaz", "Maham Hussain", "Mishaim Hussain"],
    services: ["SEO Optimization", "Local SEO", "Digital Marketing", "Content Writing"],
    color: "purple"
  },
  {
    title: "E-Commerce Department",
    icon: <ShoppingCart className="text-purple-600" size={24} />,
    head: { name: "Maqsood Ahmed", role: "Head of E-Commerce" },
    members: ["Faizan", "Hamza", "Ali", "Ali Ahmad", "Sana Hussain"],
    services: ["Amazon Optimization", "Shopify Development", "E-Commerce Strategy"],
    color: "blue"
  },
  {
    title: "Development Department",
    icon: <Code className="text-purple-600" size={24} />,
    head: { name: "Muhammad Owais", role: "Head of Digital Services" },
    members: ["Zaid Amjad", "Faizan Shahid", "Rayyan Taha", "Waleed Sarfaraz", "Fatimah Sheikh", "Hassan Abbasi", "Muhammad Anees", "Muhammad Rashid", "Aleeza Dilawar"],
    services: ["Full Stack Development", "WordPress Development", "UI/UX Design"],
    color: "green"
  },
  {
    title: "Mobile & Emerging Tech",
    icon: <Smartphone className="text-purple-600" size={24} />,
    head: null,
    members: ["Muhammad Fahad (Mobile Dev)", "Abdul Hanan (AI Engineer)"],
    services: ["Mobile App Development", "Generative AI"],
    color: "orange"
  },
  {
    title: "DevOps & Automation",
    icon: <Cpu className="text-purple-600" size={24} />,
    head: null,
    members: ["Owais Chaudhary (DevOps Engineer)"],
    services: ["DevOps", "n8n Automation"],
    color: "red"
  },
  {
    title: "Cyber Security",
    icon: <ShieldCheck className="text-purple-600" size={24} />,
    head: null,
    members: ["Hamdan Aleem (Security Engineer)"],
    services: ["Security Audits", "System Protection"],
    color: "indigo"
  }
];

// CRITICAL PERFORMANCE FIX: Moved stats arrays outside to block dynamic re-allocations
const statsData = [
  { number: "6+", label: "Depts" },
  { number: "25+", label: "Experts" },
  { number: "15+", label: "Years" },
  { number: "500+", label: "Projects" }
];

const OurTeam = () => {
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

  // OPTIMIZED HERO IMAGES SYSTEM: Mobile sets to 600px width limit, desktop to 1440px
  const bgImage = isMobile
    ? "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_600,c_scale/v1779163059/Gemini_Generated_Image_asb3zyasb3zyasb3_gyzzjt_1_1_dast2t.webp"
    : "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_75,w_1440,c_scale/v1779163059/Gemini_Generated_Image_asb3zyasb3zyasb3_gyzzjt_1_1_dast2t.webp";

  return (
    <div className="bg-white min-h-screen font-poppins">
      
      {/* Hero Section - Performance Tuned */}
      <div className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        <img 
          src={bgImage} 
          alt="Team Background" 
          width={isMobile ? "600" : "1440"}
          height={isMobile ? "350" : "700"}
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/70 pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            The Minds Behind <br /> 
            <span className="text-purple-400">The Innovation</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium px-4 leading-relaxed">
            Meet the architects, dreamers, and problem-solvers of Expert Opinions.
          </p>
        </div>
      </div>

      {/* Leadership Section - Standard Native Wrapper */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <Leadership />
      </section>

      {/* Departments Grid - Pure CSS Grid and containment parameters applied */}
      <section className="py-16 bg-white contain-intrinsic-size">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Minimalist Header */}
          <div className="border-b-2 border-gray-900 pb-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-8">
              <div>
                <p className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">
                  03 / Departments
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                  Core Specialized <br /> Teams
                </h2>
              </div>
              <div className="md:text-right">
                <p className="text-gray-500 text-base md:text-lg max-w-md md:ml-auto leading-relaxed">
                  Our organizational structure is built on deep technical expertise and 
                  seamless cross-departmental integration.
                </p>
              </div>
            </div>
          </div>

          {/* Table-Style Grid (Framer Motion animations dropped) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {departments.map((dept, index) => (
              <div key={`dept-card-${index}`} className="flex flex-col transform-gpu">
                {/* Index Number */}
                <span className="text-[10px] font-black text-gray-900 mb-4 block">
                  [{String(index + 1).padStart(2, '0')}]
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  {dept.title}
                </h3>

                {/* Department Head */}
                {dept.head && (
                  <div className="mb-8 group">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Lead Authority</p>
                    <div className="border-l-2 border-gray-200 pl-4 transition-colors duration-300">
                      <p className="text-base md:text-lg font-bold text-gray-900">{dept.head.name}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{dept.head.role}</p>
                    </div>
                  </div>
                )}

                {/* Personnel List */}
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Core Personnel</p>
                  <div className="flex flex-col gap-1">
                    {dept.members.map((m, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 text-xs md:text-sm font-medium text-gray-700">
                        <span>{m}</span>
                        <span className="text-[9px] text-gray-300">Active</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mt-auto">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Functional Areas</p>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] font-bold text-gray-900">
                    {dept.services.map((s, i) => (
                      <span key={i} className="uppercase bg-gray-100 px-2 py-1 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Hardware Optimized */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-4 gap-2 md:gap-6">
            {statsData.map((stat, i) => (
              <div
                key={`stat-tile-${i}`}
                className={`relative py-4 px-2 text-center rounded-lg overflow-hidden ${
                  i % 2 === 0 ? "bg-gray-800" : "bg-gray-800/60"
                }`}
              >
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-10 h-10 rounded-full bg-purple-900/20 pointer-events-none" />

                <div className="text-xl sm:text-4xl font-black text-white mb-1 leading-none">
                  {stat.number}
                </div>

                <div className="text-[9px] sm:text-xs font-bold text-purple-400 uppercase tracking-tighter sm:tracking-widest whitespace-nowrap">
                  <span className="hidden sm:inline">
                    {stat.label === "Depts" ? "Specialized Departments" : 
                     stat.label === "Experts" ? "Expert Team Members" : 
                     stat.label === "Years" ? "Years Combined Experience" : 
                     "Projects Completed"}
                  </span>
                  <span className="sm:hidden">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA - Static Clean Slate */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 md:p-16 text-center">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Ready to build the <span className="text-purple-600">future</span>?
              </h2>
              
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We’re seeking driven individuals to join our mission in shaping the next generation of AI and E-commerce.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:Support@expertopinions.net" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-black transition-colors shadow-sm group text-sm md:text-base"
                >
                  <span>Apply for a Position</span>
                  <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 transition-all" />
                </a>
                
                <p className="text-xs md:text-sm text-gray-400 mt-2 sm:mt-0">
                  Or reach out at: <span className="text-gray-900 font-medium break-all">Support@expertopinions.net</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurTeam;