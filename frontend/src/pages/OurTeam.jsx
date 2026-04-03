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
    members: ["Faizan", "Hamza", "Ali", "Ali Ahmad", "Khadijah Saeed"],
    services: ["Amazon Optimization", "Shopify Development", "E-Commerce Strategy"],
    color: "blue"
  },
  {
    title: "Development Department",
    icon: <Code className="text-purple-600" size={24} />,
    head: { name: "Muhammad Owais", role: "Head of Digital Services" },
    members: ["Zaid Amjad", "Faizan Gujjar", "Rayyan Talha", "Waleed Sarfaraz", "Fatimah Sheikh"],
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
            Meet the architects, dreamers, and problem-solvers of Expert Opinions Online.
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Users size={16} className="text-purple-600" />
              <span className="text-xs font-black tracking-wider text-purple-600 uppercase">Our Departments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Specialized Teams
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Each department brings unique expertise to deliver exceptional results
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {departments.map((dept, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-purple-50 rounded-xl">
                      {React.cloneElement(dept.icon, { size: 28 })}
                    </div>
                    <ArrowUpRight size={20} className="text-gray-300 group-hover:text-purple-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">
                    {dept.title}
                  </h3>

                  {/* Department Head */}
                  {dept.head && (
                    <div className="mb-6 p-4 bg-purple-50 rounded-xl">
                      <p className="text-xs font-black text-purple-600 uppercase tracking-wider mb-1">Department Head</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">{dept.head.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{dept.head.role}</p>
                    </div>
                  )}

                  {/* Team Members */}
                  <div className="mb-6">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Core Team</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.members.map((m, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Added for better engagement */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Specialized Departments", icon: <Briefcase /> },
              { number: "25+", label: "Expert Team Members", icon: <Users /> },
              { number: "15+", label: "Years Combined Experience", icon: <Award /> },
              { number: "500+", label: "Projects Completed", icon: <Star /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-400 flex justify-center mb-3">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA - Responsive */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6"
        >
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 sm:p-12 md:p-16 rounded-3xl border-2 border-purple-100">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Want to join this circle?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              We are always looking for hungry, curious, and humble individuals who want to build the future of AI and E-commerce.
            </p>
            <a 
              href="mailto:info@expertopinions.online" 
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-purple-600 transition-all shadow-lg hover:shadow-xl group"
            >
              <Mail size={20} /> 
              <span>Drop Your Resume</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurTeam;