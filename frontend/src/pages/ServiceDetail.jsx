import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Insights from '../components/Insights';

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // --- SERVICES DATA REPOSITORY ---
  const servicesData = {
    "amazon-management": {
      title: "Amazon Optimization and Management",
      content: (
        <div className="text-gray-700 leading-relaxed overflow-x-hidden">
          
          {/* --- Full Width Hero Section --- */}
          <section className="relative w-full h-[75vh] md:h-[90vh] flex items-center justify-start overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Amazon_Optimization_and_Management_wicum8.jpg')`,
                backgroundAttachment: 'fixed' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
              <div className="max-w-3xl space-y-6">
                <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.2em] uppercase bg-purple-600 text-white rounded-sm shadow-xl">
                  Amazon Specialization
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl">
                  Dominate <br /> 
                  <span className="text-purple-400">The Marketplace</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-200 drop-shadow-md border-l-4 border-purple-500 pl-6 max-w-2xl">
                  Strategic oversight and optimization to turn your Amazon presence into a high-growth asset.
                </p>
                <div className="pt-8">
                   <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-gray-900 px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-wider">
                     Launch Project <ChevronRight size={22} />
                   </Link>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator Overlay */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent mx-auto animate-pulse"></div>
            </div>
          </section>

          {/* --- Main Content Container --- */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
            
            {/* Introduction */}
            <section className="max-w-4xl mx-auto text-center">
              <h2 className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4">The Strategy</h2>
              <p className="text-3xl md:text-4xl leading-tight font-black text-gray-900 mb-8">
                Success on Amazon isn't accidental—it's engineered.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Expert Opinions, we don't just manage listings; we build long-term brand equity. We balance technical SEO with buyer psychology to ensure your "Add to Cart" button stays busy.
              </p>
            </section>

            {/* Core Concept Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-16 border-y border-gray-100">
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-gray-900 leading-tight">
                  Why Optimization <br />Is Your Best Investment
                </h3>
                <div className="space-y-4">
                  <p className="text-lg">Connecting products with high-intent customers requires a delicate mix of algorithm-friendly data and human-centric copywriting.</p>
                  <p className="text-lg font-bold text-purple-600">We bridge that gap.</p>
                </div>
              </div>
              <div className="bg-gray-50 p-12 rounded-3xl border-l-8 border-purple-600 shadow-sm relative">
                <p className="italic font-bold text-2xl text-gray-800 leading-relaxed">
                  "We see your brand through the eyes of the Amazon algorithm and your future customers simultaneously."
                </p>
              </div>
            </section>

            {/* Operations Section */}
            <section>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-gray-900 mb-2">Operational Excellence</h2>
                  <p className="text-gray-500 text-lg">Our day-to-day focus keeps your brand ahead.</p>
                </div>
                <div className="h-1 w-32 bg-purple-600 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <ShieldCheck size={44} />, title: "Account Safety", desc: "Constant monitoring to safeguard against policy changes and compliance issues." },
                  { icon: <BarChart3 size={44} />, title: "Ad Efficiency", desc: "Data-driven PPC management focused on ACOS reduction and ROAS maximization." },
                  { icon: <Globe size={44} />, title: "Inventory Health", desc: "Advanced forecasting to prevent stockouts and protect your organic ranking." }
                ].map((item, i) => (
                  <div key={i} className="group p-10 bg-white border border-gray-200 hover:border-purple-200 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)]">
                    <div className="text-purple-600 mb-8 bg-purple-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">{item.icon}</div>
                    <h4 className="font-black text-2xl text-gray-900 mb-4">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Value Section */}
            <section className="bg-gray-900 text-white p-12 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] -mr-40 -mt-40"></div>
              <h2 className="text-4xl md:text-5xl font-black mb-20 relative z-10">Professional Oversight, <br />Personal Results</h2>
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div className="group">
                  <div className="text-6xl font-black text-purple-600/30 mb-4 group-hover:text-purple-500 transition-colors">01</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Organic Dominance</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Build trust with the Amazon algorithm so your brand ranks naturally without over-reliance on paid ads.</p>
                </div>
                <div className="group">
                  <div className="text-6xl font-black text-purple-600/30 mb-4 group-hover:text-purple-500 transition-colors">02</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Scale With Confidence</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Focus on leading your company while we handle the complexity of shipping, compliance, and global scaling.</p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-20 bg-purple-50 rounded-[3rem]">
              <h3 className="text-4xl font-black text-gray-900 mb-6">Ready to Scale?</h3>
              <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 font-medium">
                Expert Opinions treats your account like it's our own. No shortcuts, just results.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-purple-600 text-white px-16 py-6 rounded-full font-black text-xl hover:bg-purple-700 hover:shadow-2xl shadow-purple-200 transition-all active:scale-95">
                Let's Talk Business
              </Link>
            </section>

          </div>
        </div>
      )
    },
"devops": {
  title: "DevOps Solutions: Facilitating Business Agility through Intelligent Automation",
  subtitle: "Bridging the gap between development and operations for seamless delivery.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833489/Devops_ylm5az.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden">
      
      {/* --- Full Width Hero Section (DevOps Style) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden bg-slate-900">
        {/* Background Image with subtle Zoom effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833489/Devops_ylm5az.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Cybernetic Overlay: Darker gradient for a technical feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
               <span className="w-12 h-[2px] bg-purple-500"></span>
               <span className="text-xs font-black tracking-[0.3em] uppercase text-purple-400">Engineering Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl">
              Accelerate Your <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic">Delivery Pipeline</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300 drop-shadow-md max-w-2xl leading-relaxed">
              Bridging the gap between development and operations for seamless, automated delivery.
            </p>
            <div className="pt-8 flex flex-wrap gap-4">
               <Link to="/contact" className="inline-block bg-purple-600 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                 Start Automating Now
               </Link>
               <div className="flex items-center gap-2 text-gray-400 px-6 py-4 border border-gray-700 rounded-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono uppercase tracking-widest">System Status: Active</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introduction Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-2xl leading-relaxed font-bold text-gray-900 mb-8 border-l-4 border-purple-600 pl-6">
              In the contemporary digital environment, it is the pace of progress and robustness of systems that define success or failure in a marketplace.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              At Expert Opinions Online, we offer the missing link between software development and system stability to ensure that your business can produce high-quality code with complete assurance.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-center justify-center">
             {/* Icon Placeholder or Graphic element */}
             <div className="text-center">
                <div className="text-6xl font-black text-slate-200">24/7</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Automated Monitoring</div>
             </div>
          </div>
        </section>

        {/* 2. Philosophy Section */}
        <section className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px]"></div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Understanding the Philosophy <br/> behind DevOps Solutions</h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                DevOps Solutions are about a lot more than just a group of highly specialized tools. It is about a revolutionary shift in corporate philosophy that merges Software Development and Information Technology Operations to form a seamless workflow.
              </p>
              <p>
                By tearing down the traditional barriers between these departments, we have created a streamlined environment where applications are developed, validated, and rolled out through continuous automated cycles.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Strategic Importance Checklist */}
        <section>
          <div className="mb-16">
             <h2 className="text-4xl font-black text-gray-900 mb-4">The Strategic Importance</h2>
             <p className="text-purple-600 font-bold uppercase tracking-widest text-sm italic">Engineered for Your Enterprise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="h-1 w-full bg-slate-100 mb-6 group-hover:bg-purple-600 transition-all duration-500"></div>
              <h4 className="font-black text-xl text-gray-900 mb-4">Elimination of Manual Constraints</h4>
              <p className="text-gray-600 leading-relaxed">We replace the error-prone manual interventions with sophisticated sequences for increased precision.</p>
            </div>
            <div className="group">
              <div className="h-1 w-full bg-slate-100 mb-6 group-hover:bg-purple-600 transition-all duration-500"></div>
              <h4 className="font-black text-xl text-gray-900 mb-4">Integrated Security Protocols</h4>
              <p className="text-gray-600 leading-relaxed">We incorporate security measures at the initial stages (DevSecOps) instead of at the end of the project.</p>
            </div>
            <div className="group">
              <div className="h-1 w-full bg-slate-100 mb-6 group-hover:bg-purple-600 transition-all duration-500"></div>
              <h4 className="font-black text-xl text-gray-900 mb-4">Environmental Uniformity</h4>
              <p className="text-gray-600 leading-relaxed">We ensure that the environments are perfectly synchronized at all times using Infrastructure as Code (IaC).</p>
            </div>
          </div>
        </section>

        {/* 4. Strategic Benefits Table */}
{/* 4. Strategic Benefits Table */}
<section className="py-12">
  <div className="text-center mb-12">
    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-[0.2em]">Substantial Business Advantages</h3>
  </div>
  
  {/* Table Container - Added overflow-x-auto and custom scrollbar styling */}
  <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl scrollbar-hide">
    <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
      <thead className="bg-slate-900 text-white">
        <tr>
          {/* Responsive padding: p-4 on mobile, p-8 on desktop */}
          <th className="p-4 md:p-8 font-black uppercase text-[10px] md:text-xs tracking-widest border-r border-slate-800">Strategic Benefit</th>
          <th className="p-4 md:p-8 font-black uppercase text-[10px] md:text-xs tracking-widest">Tangible Impact</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 bg-white">
        {[
          ["Accelerated Release Cycles", "Launch new features and critical updates on a daily basis rather than waiting for monthly cycles."],
          ["Superior System Reliability", "Comprehensive automated testing identifies potential defects before they ever reach your end users."],
          ["Elastic Scalability", "Cloud native strategies empower your platform to support millions of users without friction."],
          ["Resource Optimization", "Intelligent automation and cloud management lower operational costs and prevent service outages."],
          ["Enhanced Team Synergy", "Aligning different departments under shared objectives leads to better products."]
        ].map(([benefit, impact]) => (
          <tr key={benefit} className="hover:bg-purple-50/50 transition-colors group">
            <td className="p-4 md:p-8 font-black text-purple-700 text-sm md:text-base w-1/3 border-r border-gray-50">{benefit}</td>
            <td className="p-4 md:p-8 text-gray-600 font-medium text-sm md:text-base">{impact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Mobile Tip */}
  <p className="text-center text-gray-400 text-xs mt-4 md:hidden">← Swipe left/right to view full table →</p>
</section>

        {/* 5. Technical Proficiency Grid */}
        <section className="bg-slate-950 text-white p-12 md:p-20 rounded-[3rem] border border-white/5 relative">
          <div className="absolute top-10 right-10 opacity-20 hidden lg:block text-8xl font-black select-none">TECH</div>
          <h2 className="text-3xl font-black mb-12 relative z-10">Technical Proficiency & Tooling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
            {[
              { label: "CI/CD Pipelines", content: "Custom workflow solutions utilizing Jenkins and GitHub Actions." },
              { label: "Containerization", content: "Leveraging Docker and Kubernetes for scalable application management." },
              { label: "Infrastructure Provisioning", content: "Leveraging Terraform and Ansible for repeatable environments." },
              { label: "Cloud Governance", content: "Expert-level configuration for AWS, Azure, and Google Cloud Platform." },
              { label: "Monitoring & Analytics", content: "Leveraging Prometheus and Grafana for in-depth insights." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-10 h-10 border border-purple-500/50 rounded-lg flex items-center justify-center text-purple-500 font-mono text-sm group-hover:bg-purple-500 group-hover:text-white transition-all">
                  0{index + 1}
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">{item.label}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Partner CTA */}
        <section className="text-center py-20 bg-gradient-to-b from-white to-purple-50 rounded-[4rem] border border-purple-100 p-12 shadow-inner">
          <h3 className="text-4xl font-black text-gray-900 mb-6">Scale with Expert Opinions Online</h3>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 leading-relaxed font-medium">
            Are you letting outdated operational models hold you back? Let our experts create a sophisticated, automated deployment pipeline.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-gray-900 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-600 transition-all duration-300 shadow-2xl">
            Launch Your Architecture <ChevronRight size={24} />
          </Link>
        </section>
      </div>
    </div>
  )
},
  "mobile-app-dev": {
    title: "Mobile Application Development: Creating High Performance Digital Experiences",
    subtitle: "Reaching the palm of your customers' hands with cutting-edge mobile solutions.",
    heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/Mobile_Application_Development_rkueq7.jpg",
    content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden">
      
      {/* --- Full Width Hero Section (Mobile Optimized Look) --- */}
      <section className="relative w-full h-[75vh] md:h-[90vh] flex items-center justify-start overflow-hidden bg-white">
        {/* Background Image: High Quality & Full Width */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/Mobile_Application_Development_rkueq7.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Mobile-Centric Gradient Overlay: Left to Right for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
               <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
               <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-white">App Store & Play Store Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
              Future-Proof <br /> 
              <span className="text-purple-400">Mobile Apps</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl drop-shadow-lg border-l-2 border-purple-500 pl-6">
              Reaching the palm of your customers' hands with cutting-edge mobile solutions.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
               <Link to="/contact" className="inline-flex items-center justify-center bg-purple-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-purple-700 transition-all shadow-2xl active:scale-95">
                 Launch Your Project
               </Link>
               <div className="px-6 py-4 rounded-xl border border-white/30 backdrop-blur-sm flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white"></div>
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-tighter italic">Trusted by 50+ Brands</span>
               </div>
            </div>
          </div>
        </div>

        {/* Visual Decoration for Mobile Feel */}
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block opacity-20">
           <div className="w-64 h-[500px] border-[12px] border-white/40 rounded-[3rem] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 rounded-b-xl"></div>
           </div>
        </div>
      </section>

      {/* --- Main Content Container --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
        
        {/* 1. Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">The Digital Shift</h2>
            <p className="text-3xl md:text-4xl leading-tight font-black text-gray-900 mb-8">
              Why your business needs more than just a website.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed font-semibold text-gray-800">
              In the modern world where technology is the guiding principle of how we live and work, a business needs more than a mere web presence to survive in the competitive landscape.
            </p>
            <p className="text-lg text-gray-600">
              At Expert Opinions Online, we offer specialized mobile application development services that allow you to reach out directly to your customers. We create high-performance digital experiences that reach the palm of the hands of the end users.
            </p>
          </div>
        </section>

        {/* 2. Technical Expertise Grid (Cards Style) */}
        <section>
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-2">Defining Mobile Solutions</h2>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Native Tech", tag: "iOS & Android", desc: "Maximum performance on iOS or Android systems for businesses that require zero compromise on speed." },
              { title: "Cross-Platform", tag: "React Native / Flutter", desc: "Frameworks like React Native or Flutter allow for a single codebase that works perfectly on both systems." },
              { title: "Progressive Web", tag: "Browser Based", desc: "PWAs that give users a fast and reliable experience right in their mobile browser without an app store." }
            ].map((card, i) => (
              <div key={i} className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest rounded-md mb-6">{card.tag}</span>
                <h4 className="text-2xl font-black text-gray-900 mb-4">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Necessity Section (Dark Mode Break) */}
        <section className="bg-gray-900 text-white p-12 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -mr-40 -mt-40"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl font-black mb-8">The Necessity of a <br /> Mobile Presence</h2>
            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl">
              As we move through 2026, mobile applications have comprised a vast majority of all time spent on digital media. If your business is not accessible on the home screen, you are missing a vital opportunity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { num: "01", text: "Direct communication via push notifications and tailored offers." },
                { num: "02", text: "24/7 accessibility to your services from anywhere in the world." },
                { num: "03", text: "Data-driven insights into customer behavior and preferences." },
                { num: "04", text: "A symbol of a progressive and tech-forward business brand." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="text-4xl font-black text-purple-600 group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Service Advantages Table (Premium Feel) */}
{/* 4. Service Advantages Table (Responsive: Desktop Table / Mobile Cards) */}
<section className="py-12">
  <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">The Professional Edge</h3>
  
  <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl bg-white">
    
    {/* --- Desktop Table View (Hidden on Mobile) --- */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="p-8 font-black uppercase text-xs tracking-widest text-gray-400">Service Advantage</th>
            <th className="p-8 font-black uppercase text-xs tracking-widest text-gray-400">Impact on Your Business</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {[
            ["Improved User Engagement", "Intuitive interfaces that keep users coming back and increase overall retention."],
            ["Tailored Scalability", "Architecture that handles increasing loads as your business grows."],
            ["Intelligent Features", "Integration of chatbots and recommendation engines to keep you ahead."],
            ["Advanced Security", "End to end encryption and secure authentication to protect user data."],
            ["System Integration", "Connecting your app with existing management software and payment gateways."]
          ].map(([advantage, impact]) => (
            <tr key={advantage} className="hover:bg-purple-50/30 transition-colors">
              <td className="p-8 font-black text-purple-700 w-1/3">{advantage}</td>
              <td className="p-8 text-gray-600 font-medium leading-relaxed">{impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* --- Mobile Card View (Shown only on Mobile) --- */}
    <div className="md:hidden divide-y divide-gray-100">
      {[
        ["Improved User Engagement", "Intuitive interfaces that keep users coming back and increase overall retention."],
        ["Tailored Scalability", "Architecture that handles increasing loads as your business grows."],
        ["Intelligent Features", "Integration of chatbots and recommendation engines to keep you ahead."],
        ["Advanced Security", "End to end encryption and secure authentication to protect user data."],
        ["System Integration", "Connecting your app with existing management software and payment gateways."]
      ].map(([advantage, impact]) => (
        <div key={advantage} className="p-6 space-y-2">
          <div className="text-purple-700 font-black text-sm uppercase tracking-wider">
            {advantage}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Process Section (Vertical Stepper) */}
        <section className="bg-slate-50 p-12 md:p-24 rounded-[4rem]">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center italic">How We Build Your Vision</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { step: "1", title: "Strategy & Ideation", desc: "Refining your vision and selecting the appropriate technology stack." },
              { step: "2", title: "Design & Prototyping", desc: "Creating aesthetically pleasing and user-friendly mobile interfaces." },
              { step: "3", title: "Agile Development", desc: "Continuous coding cycles with full client involvement at every step." },
              { step: "4", title: "QA & Deployment", desc: "Rigorous testing and final launch on the App Store and Play Store." }
            ].map((proc, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center font-black text-2xl text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 z-10 relative">
                    {proc.step}
                  </div>
                  {i !== 3 && <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-200"></div>}
                </div>
                <div className="pt-2">
                  <h4 className="font-black text-gray-900 text-2xl mb-2">{proc.title}</h4>
                  <p className="text-gray-600 text-lg">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 relative">
          <div className="absolute inset-0 bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Ready to dominate the home screen?</h3>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-purple-700 hover:shadow-[0_20px_50px_rgba(147,51,234,0.4)] transition-all active:scale-95">
              Launch Your Mobile App <ChevronRight size={24} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
},
"local-seo": {
  title: "Local Search Engine Optimization: Claim Your Digital Territory and Grow Your Business",
  subtitle: "Expert Opinions Online bridges the gap between your physical storefront and the digital world.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Local_SEO_Services_qvg8qn.png",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Local_SEO_Services_qvg8qn.png')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Professional Blue-Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1 text-xs font-black tracking-[0.3em] uppercase bg-blue-600 text-white rounded-sm shadow-xl">
              Market Dominance
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl">
              Put Your Business <br /> 
              <span className="text-blue-400 font-italic italic">On The Map</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 drop-shadow-md border-l-4 border-blue-500 pl-6 max-w-2xl">
              Expert Opinions Online bridges the gap between your physical storefront and the digital world.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-blue-700 transition-all shadow-2xl">
                 Claim Your Territory <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph Focused) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-20">
        
        {/* 1. Intro Section - Clean Paragraph Style */}
        <section className="space-y-8">
          <p className="text-2xl md:text-3xl leading-tight font-black text-gray-900">
            In a world where nearly half of every Google search is for local information, not appearing in the map pack means you are giving customers to the competitor across the street.
          </p>
          
          <div className="border-t-2 border-blue-100 pt-8">
            <h3 className="text-xl font-black text-blue-600 uppercase tracking-widest mb-4">What is Local Search Engine Optimization?</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Local SEO is a specialized form of search engine optimization that helps increase your business by appearing more prominently for searches within a specific geographic region. Unlike traditional SEO, this is not concerned with ranking across the country—it is about dominating your neighborhood.
            </p>
          </div>
        </section>

        {/* 2. Importance Section - Integrated Paragraphs */}
        <section className="space-y-12 py-12 border-y border-gray-50">
          <h2 className="text-3xl font-black text-gray-900 text-center italic">The Reason Your Business Needs Local Visibility</h2>
          
          <div className="space-y-10">
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-black text-blue-100">01</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile Dominance</h4>
                <p className="text-lg text-gray-600">A majority of consumers who conduct a local search on mobile visit or call a business within 24 hours.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <span className="text-4xl font-black text-blue-100">02</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">High Intent Buyers</h4>
                <p className="text-lg text-gray-600">Local searchers are not browsing; they are searching for an immediate solution to a specific problem.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <span className="text-4xl font-black text-blue-100">03</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Trust Factor</h4>
                <p className="text-lg text-gray-600">The top 3 on Google Map receive the most clicks because consumers trust the engine's recommendation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Advantages - Sophisticated List */}
        <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] shadow-3xl">
          <h3 className="text-2xl font-black mb-12 text-center uppercase tracking-[0.3em] text-blue-400">The Core Advantages of Our Strategy</h3>
          <div className="space-y-8">
            {[
              ["Increased Physical Traffic", "Higher visibility on Maps translates to increased physical visits to your office or store."],
              ["Cost Effective Lead Gen", "Target people who are physically in your service area instead of wasting ads on general users."],
              ["Outperform Larger Rivals", "Rank above larger national companies in local search results through specialized optimization."],
              ["Building Local Credibility", "Control your reviews and listings to become the most respected business in your community."],
              ["Increase Conversion Rates", "Display hours, phone numbers, and directions immediately to customers at the point of intent."]
            ].map(([advantage, impact], index) => (
              <div key={index} className="group border-l-2 border-white/10 hover:border-blue-500 pl-8 transition-all">
                <h4 className="text-xl font-bold text-blue-300 mb-2 group-hover:text-white transition-colors">{advantage}</h4>
                <p className="text-gray-400 leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Specialized Approach - Text Heavy & Professional */}
        <section className="space-y-10">
          <h2 className="text-3xl font-black text-gray-900">Our Specialized Service Approach</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              { t: "Google Business Profile Optimization", d: "Verifying your listing and adding professional, context-rich images to your profile." },
              { t: "Geographic Keyword Research", d: "Determining the specific keywords your neighbors use to find your exact service." },
              { t: "Consistent Business Information", d: "Ensuring Name, Location, and Phone (NAP) are identical across every directory online." },
              { t: "Reputation Management", d: "Encouraging five-star reviews and handling feedback with professional white-glove service." },
              { t: "Hyper Local Content Creation", d: "Creating website content and blog posts specific to your city and community landmarks." }
            ].map((item, i) => (
              <div key={i} className="pb-8 border-b border-gray-100 last:border-0 group">
                <h4 className="text-lg font-black text-gray-900 mb-2 flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                  {item.t}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-5">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Final CTA - Simple & Strong */}
        <section className="text-center py-20 bg-blue-50 rounded-[4rem] px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">Are you ready to put your business on the map?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">Don't let your competitors steal your local market share. Let Expert Opinions Online drive local traffic to your business today!</p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-gray-900 text-white px-16 py-6 rounded-full font-black text-xl hover:bg-blue-600 transition-all shadow-2xl active:scale-95">
            Get Local Dominance <ChevronRight size={24} />
          </Link>
        </section>
      </div>
    </div>
  )
},
"n8n-automation": {
  title: "Strategic Workflow Automation: Empowering Infrastructure through n8n",
  subtitle: "Expert Opinions Online engineers complex ecosystems where your software runs as a single entity.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/n8n_yknrgj.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Automation Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        {/* Background Image: Deep Focus */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/n8n_yknrgj.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Dark Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3">
               <div className="w-10 h-[1px] bg-purple-500"></div>
               <span className="text-xs font-black tracking-[0.4em] uppercase text-purple-400">Advanced Workflow Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl">
              Connect Your <br /> 
              <span className="text-purple-500 italic">Digital Ecosystem</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl drop-shadow-lg border-l-4 border-purple-600 pl-6">
              Expert Opinions Online engineers complex ecosystems where your software runs as a single entity.
            </p>
            
            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-[0_20px_50px_rgba(147,51,234,0.3)]">
                 Engineer Your First Workflow <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Flow Focused) --- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 space-y-32">
        
        {/* 1. Introduction Section - Clean Text */}
        <section className="max-w-4xl space-y-8">
          <p className="text-2xl md:text-3xl leading-relaxed font-black text-gray-900">
            Today's business infrastructure demands a seamless flow of information between digital platforms.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Expert Opinions Online, we offer a wide array of services based on n8n, the best workflow engine in terms of flexibility and logical depth. We do not merely offer integration services; instead, we empower your business infrastructure to run as a single entity.
          </p>
        </section>

        {/* 2. Understanding n8n - Dark Sophisticated Section */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] -mr-20 -mt-20"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-10 border-l-8 border-purple-600 pl-8">Understanding the Power of n8n</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              The n8n platform is an extendable automation tool based on a <strong className="text-white">node-based architecture</strong>. This platform acts as the core of your digital infrastructure, allowing our team to develop multiple-step processes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-purple-400">Complex Logic Mapping</h4>
                <p className="text-gray-400 leading-relaxed">Leverage advanced branching and conditional logic that traditional automation tools cannot handle.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-purple-400">AI-Based Processes</h4>
                <p className="text-gray-400 leading-relaxed">Sync your CRM with AI language models to automate content production and client interactions in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Strategic Advantage - Integrated Horizontal Layout */}
        <section>
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Strategic Implementation Advantages</h2>
            <div className="h-1.5 w-24 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: "01", t: "No Data Silos", d: "Seamless data transfer between native integrations and any custom API." },
              { n: "02", t: "Complex Logic", d: "Automation with complex paths, error management, and custom scripts." },
              { n: "03", t: "Data Privacy", d: "Self-hosted foundation ensures proprietary info never stays on 3rd party servers." },
              { n: "04", t: "Cost Control", d: "Avoid per-task financial pitfalls. Automate thousands of tasks without exponential costs." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <span className="text-5xl font-black text-slate-100 block">{item.n}</span>
                <h4 className="font-black text-xl text-gray-900 border-b-2 border-purple-100 pb-2 inline-block">{item.t}</h4>
                <p className="text-gray-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Benefits Table - High-End Corporate Style */}
{/* 4. Benefits Table - High-End Corporate Style (Responsive) */}
<section className="py-12 border-t border-gray-100">
  <h3 className="text-3xl font-black text-gray-900 mb-12 text-center italic">Operational Impact Analysis</h3>
  
  <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl bg-white">
    
    {/* --- Desktop Table View --- */}
    <div className="hidden md:block">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="p-8 font-black uppercase text-xs tracking-widest">Business Benefit</th>
            <th className="p-8 font-black uppercase text-xs tracking-widest">Operational Impact</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["Operational Time Recovery", "Eliminate repetitive manual entry so staff can focus on high-value strategic initiatives."],
            ["Superior Data Accuracy", "Automation maintains consistent performance ensuring total accuracy across your stack."],
            ["Unlimited Scalability", "Automatically manage thousands of leads or support requests as your enterprise expands."],
            ["Intelligent AI Integration", "Connect workflows to advanced language models for content and interaction automation."],
            ["Total Customization", "If a tool has a digital gateway, we can automate it—no out-of-the-box restrictions."]
          ].map(([benefit, impact]) => (
            <tr key={benefit} className="hover:bg-purple-50/50 transition-all group">
              <td className="p-8 font-black text-purple-700 w-1/3 border-r border-gray-50">{benefit}</td>
              <td className="p-8 text-gray-600 font-medium leading-relaxed italic">{impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* --- Mobile Card View (Optimized for n8n Theme) --- */}
    <div className="md:hidden divide-y divide-gray-100">
      {[
        ["Operational Time Recovery", "Eliminate repetitive manual entry so staff can focus on high-value strategic initiatives."],
        ["Superior Data Accuracy", "Automation maintains consistent performance ensuring total accuracy across your stack."],
        ["Unlimited Scalability", "Automatically manage thousands of leads or support requests as your enterprise expands."],
        ["Intelligent AI Integration", "Connect workflows to advanced language models for content and interaction automation."],
        ["Total Customization", "If a tool has a digital gateway, we can automate it—no out-of-the-box restrictions."]
      ].map(([benefit, impact]) => (
        <div key={benefit} className="p-6 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
            <span className="font-black text-purple-700 text-sm uppercase tracking-tight">{benefit}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed pl-3.5 border-l border-purple-100">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Methodology - Clean Step Design */}
        <section className="bg-slate-50 p-12 md:p-24 rounded-[4rem] text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-16 tracking-widest uppercase">The Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { t: "Audit", d: "Extensive audit of existing manual processes and individual challenges." },
              { t: "Design", d: "Visual representation of your new automated world and node deployment." },
              { t: "Optimize", d: "Continual node optimization within your workflow for maximum reliability." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="text-8xl font-black text-white absolute -top-10 left-1/2 -translate-x-1/2 select-none z-0">{step.t[0]}</span>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-purple-600 mb-4">{step.t}</h4>
                  <p className="text-gray-600 font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Call to Action - Strong & Minimal */}
        <section className="text-center py-20 relative">
          <div className="absolute inset-0 bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter">Ready to Take Command of Your Operations?</h3>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-900 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-600 transition-all duration-300 shadow-2xl">
              Engineer Your First Workflow <ChevronRight size={24} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
},
"seo-optimization": {
  title: "Search Engine Optimization: Establish Organic Authority and Outperform Competitors",
  subtitle: "We don't just make tweaks; we engineer your website into a definitive industry presence.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/SEO_Optimization_zat9to.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (SEO Engineering Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/SEO_Optimization_zat9to.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Deep Focus Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-purple-600 text-white rounded-sm">
              Organic Authority
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Search Engine <br /> 
              <span className="text-purple-400">Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl border-l-4 border-purple-500 pl-6">
              We don't just make tweaks; we engineer your website into a definitive industry presence.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-2xl">
                 Start Your Audit <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Editorial Style) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-24">
        
        {/* 1. Intro Section - Bold Editorial Text */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            In the contemporary digital marketplace, if you're not on the first page of the search engine results, you might as well not even exist.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            At Expert Opinions Online, we don't simply make minor tweaks to your online presence. Instead, our experts work to engineer your website into a definitive presence within your particular industry.
          </p>
        </section>

        {/* 2. SEO Pillars - Clean Vertical Flow */}
        <section className="space-y-12">
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tighter">What is Search Engine Optimization?</h2>
            <p className="text-lg text-gray-600 mb-12">Search Engine Optimization is a comprehensive discipline with many important aspects. We focus on four critical pillars:</p>
            
            <div className="space-y-10">
              {[
                { l: "Technical Optimization", d: "Honing underlying technology for lightning-fast speeds and flawless mobile functionality." },
                { l: "On-Page Optimization", d: "Developing high-quality content while adjusting title tags, descriptions, and header tags." },
                { l: "Off-Page Optimization", d: "Establishing reputation through high-authority link building and online public relations." },
                { l: "Local Search Optimization", d: "Ensuring your business tops the search results for specific local customer searches." }
              ].map((pillar, i) => (
                <div key={i} className="group border-l-2 border-transparent hover:border-purple-600 pl-8 transition-all">
                   <h4 className="text-xl font-black text-gray-900 group-hover:text-purple-600 transition-colors mb-2">{pillar.l}</h4>
                   <p className="text-lg text-gray-600 leading-relaxed">{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Necessity Section - Sophisticated Paragraphs */}
        <section className="bg-slate-50 p-12 md:p-20 rounded-[3rem] space-y-12">
          <h2 className="text-3xl font-black text-gray-900">The Necessity of SEO for Your Business</h2>
          
          <div className="space-y-12">
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-purple-700">High Intent Traffic</h4>
              <p className="text-lg leading-relaxed text-gray-700">Unlike social media ads, search engine users have a much higher intent to buy as they are actively seeking a solution. We position you exactly where that intent meets opportunity.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-purple-700">Credibility and Consumer Trust</h4>
              <p className="text-lg leading-relaxed text-gray-700">Being at the top is a testament to being a market leader. People trust organic results more than paid advertisements, seeing top-ranking sites as the industry standard.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-purple-700">Sustainable Growth and Results</h4>
              <p className="text-lg leading-relaxed text-gray-700">SEO has a compounding effect. Your results keep growing over time even after the initial investment, creating a long-term asset for your enterprise.</p>
            </div>
          </div>
        </section>

{/* 4. Benefits Table - Minimalist Editorial Style (Responsive Fix) */}
<section className="py-12">
  <h3 className="text-2xl font-black text-gray-900 mb-12 text-center tracking-widest uppercase">
    Primary Professional Benefits
  </h3>
  
  <div className="border-y border-gray-100">
    
    {/* --- Desktop View: Standard Table --- */}
    <table className="hidden md:table w-full text-left border-collapse">
      <tbody className="divide-y divide-gray-50">
        {[
          ["Increased ROI", "One of the lowest costs for acquiring new customers in the digital marketing industry."],
          ["Superior UX", "Enhanced navigation and speed resulting in lower bounce rates and higher engagement."],
          ["Lead Generation", "Active and accessible 24/7 to capture both local and international opportunities."],
          ["Data Insights", "Comprehensive analytics on how users discover your brand and the actions they take."],
          ["Industry Authority", "Establishing your brand as the primary expert in your field through consistent top rankings."]
        ].map(([advantage, impact]) => (
          <tr key={advantage} className="hover:bg-purple-50/30 transition-all group">
            <td className="py-8 pr-12 font-black text-purple-700 text-xl w-1/3 italic">{advantage}</td>
            <td className="py-8 text-gray-600 font-medium leading-relaxed">{impact}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* --- Mobile View: Editorial List Style --- */}
    <div className="md:hidden divide-y divide-gray-100 bg-white">
      {[
        ["Increased ROI", "One of the lowest costs for acquiring new customers in the digital marketing industry."],
        ["Superior UX", "Enhanced navigation and speed resulting in lower bounce rates and higher engagement."],
        ["Lead Generation", "Active and accessible 24/7 to capture both local and international opportunities."],
        ["Data Insights", "Comprehensive analytics on how users discover your brand and the actions they take."],
        ["Industry Authority", "Establishing your brand as the primary expert in your field through consistent top rankings."]
      ].map(([advantage, impact]) => (
        <div key={advantage} className="py-8 px-2 space-y-3">
          <div className="font-black text-purple-700 text-lg italic flex items-center gap-3">
            <span className="w-6 h-[2px] bg-purple-200"></span>
            {advantage}
          </div>
          <p className="text-gray-600 font-medium leading-relaxed text-sm pl-9">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Systematic Process - Refined Text Flow */}
        <section className="space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-widest">Our Systematic Process</h2>
          <div className="grid grid-cols-1 gap-12">
            {[
              { s: "Audit & Analysis", d: "Thorough examination of your site and the competitive landscape to identify gaps." },
              { s: "Keyword Strategy", d: "Determining high-volume, low-competition keywords your audience searches for." },
              { s: "Content Strategy", d: "Creating value-driven content that meets specific search intent and user needs." },
              { s: "Technical Resolution", d: "Fixing crawling problems, schema, and core web vitals for search engine compliance." },
              { s: "Monitoring & Reporting", d: "Transparent monthly reporting on ranking increases and technical performance metrics." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 items-start pb-10 border-b border-gray-50 last:border-0">
                <span className="text-4xl font-black text-slate-200">0{i+1}</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-gray-900 uppercase">{step.s}</h4>
                  <p className="text-lg text-gray-500 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA - Minimalist & Focused */}
        <section className="text-center py-20 bg-slate-900 rounded-[4rem] px-12 text-white">
          <h2 className="text-4xl font-black mb-6 tracking-tighter">Transform Your Search Presence Today</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">Ready to claim your position at the top of the search results? Let's engineer your growth.</p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-700 transition-all shadow-2xl active:scale-95">
            Start Your SEO Audit <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"shopify-development": {
  title: "Shopify Store Development: Transforming Your Digital Storefront into a Sales Engine",
  subtitle: "We build Shopify stores that don't just look amazing, but possess the finesse to succeed.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/Shopify_Store_development_and_optimization_cxi3lp.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (E-commerce Excellence Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/Shopify_Store_development_and_optimization_cxi3lp.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Professional Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-green-600 text-white rounded-sm">
              E-commerce Engineering
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Shopify <br /> 
              <span className="text-green-400 italic">Sales Engines</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl border-l-4 border-green-500 pl-6">
              We build Shopify stores that don't just look amazing, but possess the finesse to succeed.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-green-700 transition-all shadow-2xl">
                 Build My Store <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Clean Flow Focused) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-24">
        
        {/* 1. Introduction Section - Bold Editorial Style */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            We at Expert Opinions Online understand that an online store is not just about creating a digital catalog. It is about creating an experience for each visitor that culminates in a purchase.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            We specialize in developing and optimizing Shopify stores that not only look amazing but also possess the finesse required to succeed in today’s marketplace. Be it a brand new store or an existing store that needs a makeover, we provide the expertise you need.
          </p>
        </section>

        {/* 2. What We Provide - Refined Text Flow */}
        <section className="space-y-12">
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter italic">Technical Provisions</h2>
            
            <div className="space-y-12">
              <div className="group border-l-2 border-transparent hover:border-green-600 pl-8 transition-all">
                <h4 className="text-xl font-black text-gray-900 mb-2">Custom Store Architecture</h4>
                <p className="text-lg text-gray-600">Choosing the right theme, customizing each design element, and seamless payment gateway integration for a flawless checkout experience.</p>
              </div>
              
              <div className="group border-l-2 border-transparent hover:border-green-600 pl-8 transition-all">
                <h4 className="text-xl font-black text-gray-900 mb-2">Performance & Speed Refinement</h4>
                <p className="text-lg text-gray-600">In-depth audits to ensure lightning-fast loading and full responsiveness on every mobile device, protecting your search engine rankings.</p>
              </div>

              <div className="group border-l-2 border-transparent hover:border-green-600 pl-8 transition-all">
                <h4 className="text-xl font-black text-gray-900 mb-2">Conversion Rate Strategies</h4>
                <p className="text-lg text-gray-600">Minimizing abandoned carts by improving UI/UX and turning casual browsers into dedicated customers through data-driven design.</p>
              </div>

              <div className="group border-l-2 border-transparent hover:border-green-600 pl-8 transition-all">
                <h4 className="text-xl font-black text-gray-900 mb-2">Workflow Automation</h4>
                <p className="text-lg text-gray-600">Integrating 3rd party apps for SEO, email marketing, and inventory management for easy operations and automated growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Shopify - Clean Paragraph-Driven Analysis */}
        <section className="bg-slate-50 p-12 md:p-20 rounded-[3rem] space-y-12">
          <h2 className="text-3xl font-black text-gray-900 text-center tracking-widest uppercase">The Shopify Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h4 className="text-xl font-black text-green-700">Superior Security</h4>
              <p className="text-gray-600">PCI compliant standards ensure your customers' personal info is always well taken care of, building essential trust.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black text-green-700">Unlimited Scalability</h4>
              <p className="text-gray-600">Whether selling 10 or 10,000 products, the platform grows with you without server hassles or technical bottlenecks.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black text-green-700">Marketing Readiness</h4>
              <p className="text-gray-600">Built-in SEO tools and social media connectivity to help you reach a global audience instantly from day one.</p>
            </div>
          </div>
        </section>

{/* 4. Benefits Table - Minimalist Editorial Layout (Responsive Fix) */}
<section className="py-12 border-y border-gray-100">
  <h3 className="text-2xl font-black text-gray-900 mb-12 text-center uppercase tracking-[0.2em]">
    Partnering For Growth
  </h3>

  <div className="overflow-hidden">
    {/* --- Desktop View: Standard Table --- */}
    <table className="hidden md:table w-full text-left border-collapse">
      <tbody className="divide-y divide-gray-50">
        {[
          ["Speed and Efficiency", "Faster pages lead to better SEO rankings and keep visitors engaged longer, reducing bounce rates."],
          ["Unique Brand Identity", "Avoiding generic templates to ensure your store reflects your specific brand values and aesthetics."],
          ["Evidence Based Results", "Every design decision is informed by commerce data for maximum ROI and customer satisfaction."],
          ["Complete Peace of Mind", "We manage complex coding and technical details so you can focus on running your business operations."]
        ].map(([benefit, impact]) => (
          <tr key={benefit} className="hover:bg-green-50/30 transition-all group">
            <td className="py-8 pr-12 font-black text-green-700 text-xl w-1/3">{benefit}</td>
            <td className="py-8 text-gray-600 font-medium leading-relaxed italic">{impact}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* --- Mobile View: Clean Card Stack --- */}
    <div className="md:hidden divide-y divide-gray-100">
      {[
        ["Speed and Efficiency", "Faster pages lead to better SEO rankings and keep visitors engaged longer, reducing bounce rates."],
        ["Unique Brand Identity", "Avoiding generic templates to ensure your store reflects your specific brand values and aesthetics."],
        ["Evidence Based Results", "Every design decision is informed by commerce data for maximum ROI and customer satisfaction."],
        ["Complete Peace of Mind", "We manage complex coding and technical details so you can focus on running your business operations."]
      ].map(([benefit, impact]) => (
        <div key={benefit} className="py-8 px-2 group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h4 className="font-black text-green-700 text-lg uppercase tracking-tight">
              {benefit}
            </h4>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed text-sm italic pl-5 border-l-2 border-green-50">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Final CTA - Sophisticated & Direct */}
        <section className="text-center py-24 bg-slate-900 rounded-[4rem] px-12 text-white relative overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px]"></div>
          
          <h2 className="text-4xl font-black mb-8 tracking-tighter">Ready to scale your e-commerce empire?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Let Expert Opinions Online build a position of competitiveness for your brand in the online world today.</p>
          
          <Link to="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-green-700 transition-all shadow-2xl active:scale-95">
            Build My Shopify Store <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"web-development": {
  title: "Comprehensive Web Development: Achieving Digital Excellence",
  subtitle: "From strategic WordPress management to high-performance MERN stack engineering.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/website_development_by_wordpress_and_mern_stack_gxpczc.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Digital Engineering Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/website_development_by_wordpress_and_mern_stack_gxpczc.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Professional Tech Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-blue-600 text-white rounded-sm shadow-xl">
              Full-Stack Architecture
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Digital <br /> 
              <span className="text-blue-400 italic font-medium">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl border-l-4 border-blue-600 pl-6 drop-shadow-md">
              From strategic WordPress management to high-performance MERN stack engineering.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-blue-700 transition-all shadow-2xl">
                 Discuss Your Tech Stack <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Clean Paragraph Focused) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introductory Statement - Professional Flow */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            To achieve digital excellence, it is not enough to simply have an online presence; you must make a conscious decision about flexibility versus performance.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            At Expert Opinions Online, we provide two different paths for web development services that will take your business to the next level. Our expertise ranges from seamless WordPress development to complex MERN stack engineering.
          </p>
        </section>

        {/* 2. WordPress Section - Editorial List Style */}
        <section className="space-y-10 border-t-2 border-gray-100 pt-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">WordPress Development</h2>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Strategic Content Management</p>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              The WordPress platform is the most used content management system across the world for its incredible flexibility and ease of use. You achieve a high-end digital presence while maintaining full control over your media and articles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 italic font-semibold text-xl text-gray-900 border-l-4 border-blue-500 pl-8 bg-slate-50 py-8">
              "Perfectly suited for corporate websites, news portals, professional portfolios, and regular e-commerce stores."
            </div>

            <div className="space-y-8 pt-4">
               {[
                 { t: "Rapid Market Entry", d: "Get your business up and running from an idea to a live website faster than any other option." },
                 { t: "Search Engine Superiority", d: "Clean code highly favored by Google, ensuring your service pages rank higher organically." },
                 { t: "Seamless Management", d: "Update text, images, and blogs via an intuitive dashboard without needing a developer for small changes." }
               ].map((item, i) => (
                 <div key={i} className="group">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase group-hover:text-blue-600 transition-colors">{item.t}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 3. MERN Stack Section - Dark Editorial Mode */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] space-y-12 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px]"></div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">MERN Stack Engineering</h2>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Custom Web Applications</p>
          </div>

          <div className="space-y-8 relative z-10">
            <p className="text-xl text-gray-300 leading-relaxed">
              A high-performance JavaScript stack (MongoDB, Express, React, Node.js) used to develop custom applications from scratch. Every pixel and functionality is engineered to fit your unique business needs.
            </p>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl italic font-medium text-blue-200">
              "Ideal for interactive dashboards, SaaS applications, complex marketplaces, and real-time processing systems."
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-10 pt-4">
               {[
                 { t: "Unrivaled Performance", d: "Single-page application (SPA) experience where navigation is instant and reloads are a thing of the past." },
                 { t: "Infinite Customization", d: "No limits. We don't follow third-party plugin restrictions; we build exactly what you envision." },
                 { t: "Database Scalability", d: "Capacity to process huge volumes of data with MongoDB as your global business expands." }
               ].map((item, i) => (
                 <div key={i} className="space-y-2 border-b border-white/5 pb-8 last:border-0">
                    <h4 className="font-black text-white text-lg mb-1 uppercase tracking-wider">{item.t}</h4>
                    <p className="text-lg text-gray-400 leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

{/* 4. Strategic Benefits - Clean Table Analysis (Responsive Fix) */}
<section className="py-12 border-y border-gray-100">
  <h3 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">
    The Strategic Value
  </h3>

  <div className="overflow-hidden">
    {/* --- Desktop View: Standard Table --- */}
    <table className="hidden md:table w-full text-left border-collapse">
      <tbody className="divide-y divide-gray-50">
        {[
          ["Rigorous Security", "Advanced features to ensure your proprietary and customer data remains safe at all times."],
          ["Responsive Architecture", "Seamless experience across mobile devices, tablets, and desktops for consistent engagement."],
          ["Silent Salesperson", "A product that works 24/7 to convert leads and represent your brand with digital excellence."]
        ].map(([benefit, impact]) => (
          <tr key={benefit} className="hover:bg-blue-50/30 transition-all group">
            <td className="py-8 pr-12 font-black text-blue-800 text-xl w-1/3">{benefit}</td>
            <td className="py-8 text-gray-600 font-medium leading-relaxed italic">{impact}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* --- Mobile View: Modern Tech Cards --- */}
    <div className="md:hidden divide-y divide-gray-100 bg-white">
      {[
        ["Rigorous Security", "Advanced features to ensure your proprietary and customer data remains safe at all times."],
        ["Responsive Architecture", "Seamless experience across mobile devices, tablets, and desktops for consistent engagement."],
        ["Silent Salesperson", "A product that works 24/7 to convert leads and represent your brand with digital excellence."]
      ].map(([benefit, impact]) => (
        <div key={benefit} className="py-8 px-2 group">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-black text-blue-600 tracking-tighter">TECH_0{benefit[0]}</span>
            <h4 className="font-black text-blue-800 text-lg uppercase tracking-tight">
              {benefit}
            </h4>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed text-sm italic pl-6 border-l-2 border-blue-100">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Final CTA - Clean & Direct */}
        <section className="text-center py-20 bg-slate-50 rounded-[4rem] px-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter uppercase italic">Initiate Your Transformation</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            Whether you need the flexibility of WordPress or the robust power of the MERN stack, we are prepared to exceed your expectations.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-gray-950 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-blue-600 transition-all shadow-2xl active:scale-95">
            Discuss Your Tech Stack <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"generative-ai": {
  title: "Generative AI Services: Transforming Business with Machine Intelligence",
  subtitle: "Bridging the gap between AI potential and the real-world demands of your business.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Genrative_AI_d937jp.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Machine Intelligence Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Genrative_AI_d937jp.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* AI-Blue & Deep Slate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-purple-600 text-white rounded-sm shadow-xl">
              Machine Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Generative <br /> 
              <span className="text-purple-400 italic">Evolution</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl border-l-4 border-purple-600 pl-6 drop-shadow-md">
              Bridging the gap between AI potential and the real-world demands of your business.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-2xl">
                 Get Started with AI <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Editorial Style) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introductory Statement - Professional Text Flow */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            At Expert Opinions Online, our mission is to bridge the gap between the potential of technology and the demands of the business world.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-2 border-gray-100 pl-8">
            Our specialized Generative Artificial Intelligence Services are geared to help you take advantage of the power of artificial intelligence to automate complex processes and create unique experiences that connect with your customers on a deeper level.
          </p>
        </section>

        {/* 2. Definition Section - Clean Analytical Style */}
        <section className="space-y-10">
          <div className="border-t-2 border-gray-100 pt-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">What is Generative Artificial Intelligence?</h2>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-800 font-bold">
                Unlike conventional artificial intelligence models, which are designed to only interact with the existing pool of information, the latest versions are capable of generating new information.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This includes a wide range of content, including written text, complex computer code, high-quality images, and audio. Our team works with the latest technologies to make sure that the artificial intelligence system you incorporate into your business is intelligent as well as highly responsive.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Importance Section - Vertical Paragraph Flow */}
        <section className="bg-slate-50 p-12 md:p-20 rounded-[3rem] space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center tracking-[0.2em] uppercase">The Strategic Necessity</h2>
          
          <div className="space-y-12">
            {[
              { h: "Personalization", t: "Customized User Experience", d: "Provide users with content or product recommendations customized based upon their individual needs, creating high-value engagement." },
              { h: "Momentum", t: "Scalability and Speed", d: "Produce high-quality digital content, articles, or development scripts at a fraction of the traditional time without sacrificing precision." },
              { h: "Innovation", t: "Creative Problem Solving", d: "Utilize machine intelligence to brainstorm new ideas or develop prototypes based upon real-time market trends and data." },
              { h: "Optimization", t: "Operational Efficiency", d: "Automate repetitive tasks that were once taking up the valuable time of your human staff, allowing for strategic focus." }
            ].map((item, i) => (
              <div key={i} className="group border-b border-gray-200 pb-8 last:border-0">
                <span className="text-xs font-black text-purple-600 uppercase tracking-widest block mb-2">{item.h}</span>
                <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{item.t}</h4>
                <p className="text-lg text-gray-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Primary Advantages - Dark Sophisticated Article Style */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] space-y-16 shadow-3xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px]"></div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10 uppercase tracking-tighter">Primary Operational Advantages</h2>
          
          <div className="space-y-12 relative z-10">
            {[
              { h: "Enhanced Operational Productivity", d: "Free your employees from routine tasks so they can focus on strategic aspects that move your business forward." },
              { h: "Constant Customer Engagement", d: "Deploy intelligent agents that answer complex queries 24/7 with a natural and sophisticated tone." },
              { h: "Accelerated Development & Accuracy", d: "Go from concept to creation faster while minimizing human error in technical documentation and financial reporting." },
              { h: "Search Engine Optimization", d: "Create relevant, optimized content that matches user search intent and boosts your rankings organically." }
            ].map((adv, i) => (
              <div key={i} className="space-y-2 border-l-2 border-purple-500/30 pl-8 hover:border-purple-500 transition-colors">
                <h4 className="text-2xl font-bold text-purple-400">{adv.h}</h4>
                <p className="text-lg text-gray-400 leading-relaxed font-medium">{adv.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Core Capabilities - Clean Badge Design */}
        <section className="space-y-12 text-center py-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-widest">Our Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic leading-relaxed">
              "Our team has expertise in building custom assistants trained on your business data, content generation systems, and integrating intelligence into web applications for a smarter experience."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Custom AI Assistants", "Content Generation", "Data Entry Automation", "Intelligent Web Apps"].map((tag, i) => (
              <span key={i} className="px-8 py-3 bg-slate-100 text-slate-900 text-sm font-black uppercase tracking-widest border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Final CTA - Minimalist & Impactful */}
        <section className="text-center py-20 bg-purple-600 rounded-[4rem] px-12 text-white shadow-[0_20px_60px_rgba(147,51,234,0.3)]">
          <h2 className="text-4xl font-black mb-6 tracking-tighter italic">Ready to Lead with Intelligence?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Let's build a new product for your customers or automate your business data entry with Gen-AI.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-purple-900 px-16 py-6 rounded-sm font-black text-xl hover:bg-slate-100 transition-all active:scale-95">
            Get Started with AI <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"digital-marketing": {
  title: "Digital Marketing Strategy: A Thorough Plan for Business Growth",
  subtitle: "We don't just run campaigns; we create growth roadmaps that offer true value for the future.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Digital_Marketing_Strategy_n283jq.png",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Marketing Roadmap Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Digital_Marketing_Strategy_n283jq.png')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Deep Marketing Slate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-purple-600 text-white rounded-sm shadow-xl">
              Growth Architecture
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Strategic <br /> 
              <span className="text-purple-400 italic">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl border-l-4 border-purple-600 pl-6 drop-shadow-md">
              We don't just run campaigns; we create growth roadmaps that offer true value for the future.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-2xl">
                 Get My Roadmap <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Editorial Style) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introductory Statement - Professional Text Flow */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            In the contemporary digital world, it is not enough for a business simply to exist online.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            To achieve true success, a business must have a specific roadmap that connects its brand with the right people at the right time. At Expert Opinions Online, we are not simply a company that runs marketing campaigns; we are a company that creates growth strategies that offer true value for the future.
          </p>
        </section>

        {/* 2. Strategy Definition - Clean Analytical Style */}
        <section className="space-y-10">
          <div className="border-t-2 border-gray-100 pt-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">What is Digital Marketing Strategy?</h2>
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-800">
                A Digital Marketing Strategy is a thorough plan that connects a business’s specific objectives with the appropriate digital marketing strategies needed to achieve them.
              </p>
              <p className="text-2xl text-purple-700 leading-relaxed font-black border-l-4 border-purple-100 pl-8 italic">
                "It is the master plan that connects Search Engine Optimization, Content Marketing, Paid Media, and Email Marketing into one cohesive system."
              </p>
            </div>
          </div>
        </section>

        {/* 3. Strategic Essentials - Vertical Flow */}
        <section className="space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center tracking-[0.2em] uppercase">Why Strategic Planning Is Essential</h2>
          
          <div className="space-y-12">
            {[
              { n: "01", t: "Targeted Precision", d: "Stop wasting budgets. We identify your ideal customer and precisely where they spend their time online, ensuring every dollar reaches high-intent prospects." },
              { n: "02", t: "Brand Consistency", d: "Powerful and consistent messaging across all online mediums, including Google Search and social media, to build long-term brand equity." },
              { n: "03", t: "Data Backed Decisions", d: "We make decisions using real-time data to ensure the best possible ROI, rather than relying on gut feelings or outdated marketing trends." },
              { n: "04", t: "Competitive Advantage", d: "We identify the shortcomings of your competition and position you as the better alternative in your industry through strategic differentiation." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start pb-10 border-b border-gray-100 last:border-0 group">
                <span className="text-5xl font-black text-slate-100 group-hover:text-purple-100 transition-colors">{item.n}</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-gray-900 uppercase">{item.t}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
{/* 4. Benefits Table - Minimalist Editorial Layout (Responsive Fix) */}
<section className="py-12 border-y border-gray-100">
  <h3 className="text-2xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">
    Tangible Business Impact
  </h3>
  
  <div className="overflow-hidden">
    {/* --- Desktop View: Standard Table --- */}
    <table className="hidden md:table w-full text-left border-collapse">
      <tbody className="divide-y divide-gray-50">
        {[
          ["Increased Profitability", "Every amount spent is tracked and optimized to ensure lower costs of acquisition and higher profit margins."],
          ["Scalable Frameworks", "A proven structure that grows alongside your business, allowing you to enter new markets with total confidence."],
          ["Enhanced Conversion Rates", "We optimize the entire user experience to turn casual clicks into confirmed sales, not just drive traffic."],
          ["Industry Authority", "By building a strong digital foundation, we help your brand become a recognized thought leader in your field."]
        ].map(([benefit, impact]) => (
          <tr key={benefit} className="hover:bg-purple-50/30 transition-all group">
            <td className="py-8 pr-12 font-black text-purple-700 text-xl w-1/3">{benefit}</td>
            <td className="py-8 text-gray-600 font-medium leading-relaxed italic">{impact}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* --- Mobile View: Growth-Focused Cards --- */}
    <div className="md:hidden divide-y divide-gray-100 bg-white">
      {[
        ["Increased Profitability", "Every amount spent is tracked and optimized to ensure lower costs of acquisition and higher profit margins."],
        ["Scalable Frameworks", "A proven structure that grows alongside your business, allowing you to enter new markets with total confidence."],
        ["Enhanced Conversion Rates", "We optimize the entire user experience to turn casual clicks into confirmed sales, not just drive traffic."],
        ["Industry Authority", "By building a strong digital foundation, we help your brand become a recognized thought leader in your field."]
      ].map(([benefit, impact]) => (
        <div key={benefit} className="py-8 px-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-purple-500"></div>
            <h4 className="font-black text-purple-700 text-lg uppercase tracking-tight">
              {benefit}
            </h4>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed text-sm italic pl-11 border-l border-purple-50">
            {impact}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. Proven Process - Dark Sophisticated Flow */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] space-y-16 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] -mr-20 -mt-20"></div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10 uppercase tracking-tighter text-center">Our Proven Strategic Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { h: "Discovery Audit", d: "Assessing your digital footprint and the footprint of your competition to find untapped opportunities." },
              { h: "Goal Alignment", d: "Setting measurable goals based on your revenue requirements and long-term business vision." },
              { h: "Channel Selection", d: "Selecting high-impact platforms like Google or LinkedIn specifically for your unique industry needs." },
              { h: "Optimization", d: "Final execution and continuous optimization phase for maximum ROI and sustained growth." }
            ].map((adv, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-xl font-bold text-purple-400 uppercase tracking-widest">{adv.h}</h4>
                <p className="text-lg text-gray-400 leading-relaxed font-medium">{adv.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA - Minimalist & Impactful */}
        <section className="text-center py-20 bg-slate-50 rounded-[4rem] px-12">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">Begin Your Transformation Today</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
            Stop guessing; start growing. Let the dedicated team at Expert Opinions Online create a strategy that works.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-700 transition-all shadow-2xl active:scale-95">
            Get My Roadmap <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"content-writing": {
  title: "Content Writing and SEO Content Production: Powering Digital Growth",
  subtitle: "Words that rank on Google and convert visitors into loyal customers.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Content_Writing_and_SEO_Content_Production_wlqhqh.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Editorial Power Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Content_Writing_and_SEO_Content_Production_wlqhqh.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Professional Ink-Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-purple-600 text-white rounded-sm shadow-xl">
              Authority Copywriting
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Words That <br /> 
              <span className="text-purple-400 italic">Dominate</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl border-l-4 border-purple-600 pl-6 drop-shadow-md">
              Words that rank on Google and convert visitors into loyal customers.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-2xl">
                 Get a Quote for Content <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Editorial Style) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introductory Statement - Professional Text Flow */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            In today’s digital environment, content is no longer just words on a screen.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            It’s your voice, your sales person, and your ticket to getting your business to the front page of Google. At Expert Opinions Online, we’re dedicated to using our creativity to produce content that not only reads well, but gets results.
          </p>
        </section>

        {/* 2. Understanding Section - Clean Analytical Style */}
        <section className="space-y-10">
          <div className="border-t-2 border-gray-100 pt-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Understanding SEO Content Production</h2>
            <div className="space-y-10">
              <p className="text-xl leading-relaxed text-gray-800">
                SEO Content Production is a process that creates content such as blog posts, articles, or website content with the goal of ranking on a search engine like Google while at the same time delivering value to the reader.
              </p>
              
              <div className="space-y-8 pl-8 border-l-2 border-purple-100">
                 <div className="group">
                    <h4 className="text-lg font-black text-purple-600 uppercase tracking-widest mb-1">Keyword Research</h4>
                    <p className="text-lg text-gray-600">Finding out exactly what your audience is searching for to ensure every word serves a strategic purpose.</p>
                 </div>
                 <div className="group">
                    <h4 className="text-lg font-black text-purple-600 uppercase tracking-widest mb-1">Search Intent</h4>
                    <p className="text-lg text-gray-600">Aligning content with what your audience actually wants to find, bridging the gap between query and solution.</p>
                 </div>
                 <div className="group">
                    <h4 className="text-lg font-black text-purple-600 uppercase tracking-widest mb-1">Optimization</h4>
                    <p className="text-lg text-gray-600">Strategic use of headers, descriptions, and internal links to guide both bots and humans seamlessly.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Necessity - Vertical Editorial Flow */}
        <section className="bg-slate-50 p-12 md:p-20 rounded-[3rem] space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center tracking-[0.2em] uppercase">Why Professional Content Matters</h2>
          
          <div className="space-y-12">
            {[
              { n: "01", t: "Visibility", d: "A well-written article is useless if it is not optimized. We ensure you are found by people looking for you, placing your brand at the forefront of digital discovery." },
              { n: "02", t: "Authority", d: "Well-researched content makes you a leader in your industry, earning the immediate trust of potential customers through depth and accuracy." },
              { n: "03", t: "Engagement", d: "We write for people, not just bots. Content that keeps users on your site, building a narrative that increases conversion chances and brand loyalty." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start pb-10 border-b border-gray-200 last:border-0 group">
                <span className="text-5xl font-black text-slate-200 group-hover:text-purple-200 transition-colors">{item.n}</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-gray-900 uppercase underline decoration-purple-500 underline-offset-8 decoration-2">{item.t}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed pt-2">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Service Benefits - Dark Sophisticated Flow */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] space-y-16 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] -mr-20 -mt-20"></div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10 uppercase tracking-tighter">The Benefits of Our Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { h: "Rank Improvement", d: "Crafted specifically to reach the top of the search engine page results through rigorous technical and semantic optimization." },
              { h: "Increased Traffic", d: "Visibility translates to high-intent clicks without the ongoing and rising expense of traditional paid advertisements." },
              { h: "Brand Consistency", d: "We match your unique tone and voice across every platform, ensuring a unified brand experience for every reader." },
              { h: "Conversion Focus", d: "Every blog post or page written will have a clear call to action, turning passive reading into active business growth." }
            ].map((adv, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-xl font-bold text-purple-400 uppercase tracking-widest flex items-center gap-3">
                   <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> {adv.h}
                </h4>
                <p className="text-lg text-gray-400 leading-relaxed font-medium">{adv.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Specialized Areas - Clean Horizontal List */}
        <section className="space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-widest">Specialized Content Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { t: "Blog Posts", d: "In-depth articles that solve problems and build search engine equity through authority and value." },
              { t: "Website Content", d: "Compelling home pages and service pages that reflect your brand identity and drive user action." },
              { t: "Product Descriptions", d: "Persuasive copy designed specifically for e-commerce conversion, highlighting benefits and features." },
              { t: "B2B Content", d: "High-authority whitepapers and e-books designed for industry entrepreneurs and decision-makers." }
            ].map((item, i) => (
              <div key={i} className="group border-l border-gray-100 hover:border-purple-600 pl-8 transition-all">
                <h4 className="text-xl font-black text-gray-900 mb-2">{item.t}</h4>
                <p className="text-lg text-gray-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA - Minimalist & Impactful */}
        <section className="text-center py-20 bg-slate-50 rounded-[4rem] px-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">Get Started Today</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            It is now time to give your brand a voice and dominate the search results. Contact Expert Opinions Online today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-700 transition-all shadow-2xl active:scale-95">
            Get a Quote for Content <ChevronRight size={24} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"bloging": {
  title: "Blogging and Content Strategy: Building Authority Through Words",
  subtitle: "Expert Opinions Online creates a voice for your brand that helps you rise above the digital noise.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/bloging_yrfxxt.jpg",
  content: (
    <div className="text-gray-700 leading-relaxed overflow-x-hidden font-poppins">
      
      {/* --- Full Width Hero Section (Digital Voice Theme) --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6s] scale-105"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/bloging_yrfxxt.jpg')`,
            backgroundAttachment: 'fixed' 
          }}
        >
          {/* Professional Narrative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-5 py-1.5 text-xs font-black tracking-[0.4em] uppercase bg-purple-600 text-white rounded-sm shadow-xl">
              Brand Narrative
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Write Your <br /> 
              <span className="text-purple-400 italic">Success Story</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl border-l-4 border-purple-600 pl-6 drop-shadow-md">
              Expert Opinions Online creates a voice for your brand that helps you rise above the digital noise.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-purple-700 transition-all shadow-2xl">
                 Start Your Story Today <ChevronRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container (Paragraph & Editorial Style) --- */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 space-y-28">
        
        {/* 1. Introductory Statement - Professional Text Flow */}
        <section className="space-y-8">
          <p className="text-2xl md:text-4xl leading-tight font-black text-gray-900 tracking-tight">
            Having a website is just half the job when it comes to creating an online presence.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            In order to be noticed, you have to be able to offer something of value to your online visitors. Expert Opinions Online is a professional blogging service that is dedicated to providing you with a lot more than just putting words on a page. We are a team of individuals who know that a good blog is not just about writing, but about creating a <strong className="text-purple-700 italic">relationship with your audience</strong>.
          </p>
        </section>

        {/* 2. Modern Blogging - Clean Analytical Style */}
        <section className="space-y-10">
          <div className="border-t-2 border-gray-100 pt-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">What Modern Blogging is All About</h2>
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-800">
                Blogging is often associated with writing down your random thoughts, but for a business, <strong className="text-purple-600">blogging is a strategic move</strong>. It is all about creating useful and interesting content that answers all the questions your customers are asking.
              </p>
              <p className="text-2xl text-gray-900 leading-relaxed font-black border-l-4 border-purple-100 pl-8 italic bg-slate-50 py-8">
                "By providing information that is clear and honest, you are able to gain their trust. And that is when a casual visitor turns into a lifelong customer."
              </p>
            </div>
          </div>
        </section>

        {/* 3. Long Term Advantages - Vertical Editorial Flow */}
        <section className="space-y-16">
          <h2 className="text-3xl font-black text-gray-900 text-center tracking-[0.2em] uppercase">Brand Evolution Through Content</h2>
          
          <div className="space-y-12">
            {[
              { n: "01", t: "Organic Traffic Growth", d: "Google loves blogs that are informative and original. Every post acts as another reason for Google to send your website to potential clients—like a money tree that keeps on giving." },
              { n: "02", t: "Establish Your Authority", d: "By proving you know your business inside and out, you show clients you are the best in your field. It also provides high-quality content for social media engagement." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start pb-10 border-b border-gray-100 last:border-0 group">
                <span className="text-5xl font-black text-slate-200 group-hover:text-purple-200 transition-colors">{item.n}</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-gray-900 uppercase">{item.t}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Why Us - Dark Sophisticated Article Style */}
        <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] space-y-16 shadow-3xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] -mr-20 -mt-20"></div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10 uppercase tracking-tighter text-purple-400 italic">Why Expert Opinions Online?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left relative z-10">
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              The key to creating great content is a lot of time and effort that most business owners do not have. We take that burden off your plate so you can focus on running your business.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-medium border-l-2 border-purple-500 pl-8 italic">
              "We are skilled at creating content that reflects your particular voice—strictly professional or friendly and approachable. We do not believe in cutting corners."
            </p>
          </div>
        </section>

        {/* Final CTA - Minimalist & Impactful */}
        <section className="text-center py-24 bg-slate-50 rounded-[4rem] px-12 relative overflow-hidden border border-gray-100">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">The Next Step for Your Website</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
              A blog is a powerful tool for building your business and reaching more people. Expert Opinions Online is here to help you write your story.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-purple-600 text-white px-16 py-6 rounded-sm font-black text-xl hover:bg-purple-700 transition-all shadow-2xl active:scale-95">
              Launch Your Brand Voice <ChevronRight size={24} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
  };

  const currentService = servicesData[slug];

  if (!currentService) {
    return <div className="pt-40 text-center text-xl font-poppins">Service Not Found</div>;
  }

  return (
    <div className="bg-white font-poppins">
      {/* Yahan se purana static hero section (grey box) remove kar diya hai 
          kyunki ab hmara hero section "content" ke andar hi define hai.
      */}
      
      <main className="w-full">
        {currentService.content}
      </main>

      <Insights />
      <ContactForm />
    </div>
  );
};

export default ServiceDetail;