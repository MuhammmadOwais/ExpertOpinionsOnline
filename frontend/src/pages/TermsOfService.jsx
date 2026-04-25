import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tosSections = [
    {
      title: "1. The Simple Agreement",
      content: "By hanging out on our website or hiring us for a project, you're basically agreeing to these terms. We've tried to make them as simple as possible because we value your time as much as our own. So if you don't agree with these terms, we recommend you don't use our site, although we'd be sad to see you leave."
    },
    {
      title: "2. Our Expertise & Services",
      content: "Expert Opinions is a company with expertise in Search Engine Optimization, Amazon Management, Shopify Development, WordPress Development, Full Stack Solutions, Mobile Apps, DevOps, Generative AI, and n8n Automations. We put our heart and soul into every single line of code and every single strategy we come up with, but please note that digital results can vary depending on the market and technology."
    },
    {
      title: "3. Payments & Fair Play",
      content: "When we start working on your project, we're essentially promising our best to you. So we expect the best in return, which is timely payment as per the milestones we've set. Once the project is done and delivered, the payment is due. We believe in fair work for fair pay, and we'll ensure to be transparent about any additional costs before they occur."
    },
    {
      title: "4. Intellectual Property",
      content: "So here’s the deal. The stuff that we develop for you (like your custom code or content) will become yours once the payment is cleared. But the ‘secret sauce’ – our internal tools, pre-existing templates, and even the design of this website – remains our property. You will own the product, and we will own the craft."
    },
    {
      title: "5. Respecting the Process",
      content: "We are not just a team of machines but also humans. We expect clear communication and reasonable deadlines. We will do our best to ensure that our product is always up and running and bug-free. But sometimes, due to the nature of our work and the internet itself, things may need a little tweak. We will do our best to help you out, but only if the communication is professional and respectful."
    },
    {
      title: "6. Limitation of Liability",
      content: "We are experts in our field but not experts in controlling the internet. We cannot be held responsible for any changes in third-party platforms (like a sudden Google algorithm update or an Amazon policy change) that may affect your business after our work is delivered. We will build the ship for you, but we cannot control the ocean."
    }
  ];

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774949816/pexels-codioful-6985259_ezmqrg.jpg" 
          alt="Terms of Service Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            Terms of <span className="text-purple-500">Service</span>
          </motion.h1>
          <p className="text-gray-300 max-w-xl mx-auto font-light">
            The 'Fine Print' made simple. How we work, what we expect, and our promise to you.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 p-6 bg-purple-50 border-r-4 border-purple-600 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed font-medium">
              Welcome to Expert Opinions. These terms are here to ensure we both have a clear understanding of our professional relationship. Think of this as the foundation of our partnership.
            </p>
          </div>

          <div className="space-y-16">
            {tosSections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-purple-600 font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-12">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final Call to Action Box */}
          <div className="mt-20 p-10 bg-gradient-to-br from-gray-900 to-purple-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4">Agreement in Spirit</h2>
              <p className="text-purple-100 mb-8 opacity-80">
                Beyond these words, we believe in doing good business with good people. If there's ever a conflict, let's talk it out like partners.
              </p>
              <div className="text-sm text-gray-400">
                <p>Questions? Email us at:</p>
                <a href="mailto:info@expertopinions.online" className="text-white font-bold underline hover:text-purple-300 transition-colors">
                  info@expertopinions.online
                </a>
              </div>
            </div>
            {/* Subtle glow inside the box */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;