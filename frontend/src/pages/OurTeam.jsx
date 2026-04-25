import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, ShoppingCart, Code, 
  Smartphone, Cpu, ShieldCheck, Mail,
  ArrowUpRight, Star, Briefcase, Award
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
    members: ["Zaid Amjad", "Faizan Shahid", "Rayyan Talha", "Waleed Sarfaraz", "Fatimah Sheikh", "Hassan Abbasi", "Muhammad Anees", "Muhammad Rashid", "Aleeza Dilawar"],
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

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Optimized for all devices */}
      <div className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774960487/Gemini_Generated_Image_asb3zyasb3zyasb3_gyzzjt.png" 
          alt="Team Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              The Minds Behind <br /> 
              <span className="text-purple-400">The Innovation</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium px-4"
          >
            Meet the architects, dreamers, and problem-solvers of Expert Opinions.
          </motion.p>
        </div>
      </div>

{/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Leadership />
          </motion.div>
      </section>

      {/* Departments Grid */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Minimalist Header */}
    <div className="border-b-2 border-gray-900 pb-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-8">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
            03 / Departments
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter">
            Core Specialized <br /> Teams
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-gray-500 text-lg max-w-md md:ml-auto leading-relaxed">
            Our organizational structure is built on deep technical expertise and 
            seamless cross-departmental integration.
          </p>
        </div>
      </div>
    </div>

    {/* Table-Style Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12">
      {departments.map((dept, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col"
        >
          {/* Index Number */}
          <span className="text-[10px] font-black text-gray-900 mb-6 block">
            [{String(index + 1).padStart(2, '0')}]
          </span>

          {/* Title */}
          <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
            {dept.title}
          </h3>

          {/* Department Head - Professional Identity Card style */}
          {dept.head && (
            <div className="mb-10 group">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Lead Authority</p>
              <div className="border-l-2 border-gray-100 group-hover:border-gray-900 transition-colors pl-4">
                <p className="text-lg font-bold text-gray-900">{dept.head.name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{dept.head.role}</p>
              </div>
            </div>
          )}

          {/* Personnel List */}
          <div className="mb-10">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Core Personnel</p>
            <div className="flex flex-col gap-2">
              {dept.members.map((m, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 text-sm font-medium text-gray-700">
                  <span>{m}</span>
                  <span className="text-[10px] text-gray-300">Active</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-auto">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Functional Areas</p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-bold text-gray-900">
              {dept.services.map((s, i) => (
                <span key={i} className="uppercase bg-gray-100 px-2 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Stats Section - Option 3 Structure, Original Colors, No Icons, Forced 4-Col Grid */}
<section className="py-16 bg-gray-900 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6">
    {/* Hamesha 4 columns, gap mobile par kam rakha hai taaki text ko jagah mile */}
    <div className="grid grid-cols-4 gap-1 md:gap-6">
      {[
        { number: "6+", label: "Depts" }, // Mobile ke liye labels thode short karein toh best hai
        { number: "25+", label: "Experts" },
        { number: "15+", label: "Years" },
        { number: "500+", label: "Projects" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`
            relative py-4 px-1 sm:p-6 text-center rounded-lg overflow-hidden
            ${i % 2 === 0 ? "bg-gray-800" : "bg-gray-800/60"}
          `}
        >
          {/* Subtle Accent - Mobile par thoda chota rakha hai */}
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-10 h-10 rounded-full bg-purple-900/30" />

          {/* Number - Mobile par size chota kiya gaya hai (text-xl) */}
          <div className="text-xl sm:text-4xl font-black text-white mb-1 leading-none">
            {stat.number}
          </div>

          {/* Label - Mobile par size 'tiny' (text-[10px]) aur wrap hone se roka gaya hai */}
          <div className="text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-tighter sm:tracking-widest whitespace-nowrap">
            {/* Desktop par pura label dikhega, mobile par sirf pehla word ya condensed version */}
            <span className="hidden sm:inline">{stat.label === "Depts" ? "Specialized Departments" : 
                                              stat.label === "Experts" ? "Expert Team Members" : 
                                              stat.label === "Years" ? "Years Combined Experience" : 
                                              "Projects Completed"}</span>
            <span className="sm:hidden">{stat.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Join the Team CTA - Sleek & Professional */}
<section className="py-10 bg-white">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto px-6"
  >
    <div className="relative overflow-hidden bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 md:p-16 text-center">
      
      {/* Background Subtle Accent - Ek professional light glow corner mein */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Ready to build the <span className="text-purple-600">future</span>?
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          We’re seeking driven individuals to join our mission in shaping the next generation of AI and E-commerce.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:info@expertopinions.online" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition-all shadow-sm hover:shadow-md group text-base"
          >
            <span>Apply for a Position</span>
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
          
          {/* Ek secondary button professional look ke liye */}
          <p className="text-sm text-gray-400 mt-4 sm:mt-0">
            Or reach out at: <span className="text-gray-900 font-medium">info@expertopinions.online</span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default OurTeam;