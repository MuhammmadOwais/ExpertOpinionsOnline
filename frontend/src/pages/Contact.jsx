import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import LogoSlider from '../components/LogoSlider';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactDetails = [
    {
      icon: <Mail className="text-purple-600" />,
      title: "Email Us",
      value: "info@expertopinions.online",
      link: "mailto:info@expertopinions.online"
    },
    {
      icon: <Phone className="text-purple-600" />,
      title: "Call Us",
      value: "+1 307 227 3735", 
      link: "tel:+13072273735"
    },
    {
      icon: <MapPin className="text-purple-600" />,
      title: "Global HQ",
      value: "1908 Thomes Ave STE 12337, Cheyenne, WY 82001, USA",
      link: "https://www.google.com/maps/search/?api=1&query=1908+Thomes+Ave+STE+12337,+Cheyenne,+WY+82001,+USA"
    },
    {
      icon: <Clock className="text-purple-600" />,
      title: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM (MST)",
      link: "#"
    }
  ];

  return (
    <div className="bg-white font-poppins">
      {/* 1. Header Section */}
      <div className="pt-32 pb-16 bg-gray-50 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 mb-4"
        >
          Let’s Start a <span className="text-purple-600">Conversation</span>
        </motion.h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          From Wyoming to the world, our experts are ready to scale your business with SEO, AI, and Full-Stack solutions.
        </p>
      </div>

      {/* 2. Google Map Section */}
      <div className="w-full h-[450px] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Expert Opinions - Wyoming Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.464673627042!2d-104.8190!3d41.1347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3ab43859666d%3A0x6b49e6f30453e198!2s1908%20Thomes%20Ave%2C%20Cheyenne%2C%20WY%2082001%2C%20USA!5e0!3m2!1sen!2s!4v1711234567890!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 3. Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <motion.a
              key={index}
              href={detail.link}
              target={detail.title === "Global HQ" ? "_blank" : "_self"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center hover:border-purple-600 transition-all group"
            >
              <div className="p-4 bg-purple-50 rounded-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {detail.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{detail.title}</h3>
              <p className="text-sm text-gray-500 break-words w-full">{detail.value}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 4. Contact Form Section */}
      <div className="py-24">
        <ContactForm />
      </div>

      {/* 5. Final CTA */}
          <LogoSlider />

    </div>
  );
};

export default Contact;