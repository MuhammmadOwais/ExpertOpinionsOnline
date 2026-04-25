import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. What We Collect (And Why)",
      content: "We're not the kind of company that believes in collecting information for the sake of collecting information. We only collect what we need to make your experience with Expert Opinions an even better one. This includes some basic information such as your name and email address when you contact us, as well as some technical information such as your IP address to keep our site safe and speedy."
    },
    {
      title: "2. How We Use Your Information",
      content: "We keep your information on our system for one reason: to help you. This includes answering your questions about Search Engine Optimization, as well as helping you build your MERN stack project. We don't spam, and we won't spam your inbox either."
    },
    {
      title: "3. The 'No-Sharing' Promise",
      content: "We do not sell, trade, or rent your personal identification information to third parties. Period. We might use third parties to help us run our business, but we'll never give them more information than they need to do their job."
    },
    {
      title: "4. Cookies & Tracking",
      content: "We make use of 'cookies' to improve your browsing experience. Cookies are small files stored on your hard drive. You can set your browser to reject cookies, but we thought we should give you a heads-up: some areas of the site might not function quite so smoothly."
    },
    {
      title: "5. Security Measures",
      content: "We respect your concern for data security. We have taken proper security measures to ensure that your information does not fall into the wrong hands. While we strive to use commercially acceptable means in securing your information, we can assure you that no method of transmission over the internet is completely secure."
    }
  ];

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774949816/pexels-codioful-6985259_ezmqrg.jpg" 
          alt="Privacy Policy Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Privacy <span className="text-purple-500">Policy</span>
          </motion.h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Transparent, honest, and built on trust. Here is how we handle your information at Expert Opinions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-12 italic border-l-4 border-purple-500 pl-4 bg-purple-50 py-4">
            Last Updated: March 2026. We believe in keeping things simple. This policy outlines our commitment to your digital safety and data integrity.
          </p>

          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          <div className="mt-16 p-8 bg-gray-900 rounded-[2rem] text-white">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-400 mb-6">
              If you’re unsure about anything in this policy, don’t hesitate to reach out. We’re here to help.
            </p>
            <a 
              href="mailto:Support@expertopinions.net" 
              className="text-purple-400 font-bold hover:text-purple-300 underline"
            >
              Support@expertopinions.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;