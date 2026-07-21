import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import LogoSlider from '../components/LogoSlider';
import { updateSEO } from '../utils/seo';

const contactDetails = [
  {
    icon: <Mail className="text-purple-600" size={20} />,
    title: "Email Us",
    value: "Support@expertopinions.net",
    value2: "admin@expertopinions.net",
    link: "mailto:Support@expertopinions.net",
    link2: "mailto:admin@expertopinions.net"
  },
  {
    icon: <Phone className="text-purple-600" size={20} />,
    title: "Call Us",
    value: "+1 307 227 3735", 
    link: "tel:+13072273735"
  },
  {
    icon: <MapPin className="text-purple-600" size={20} />,
    title: "Global HQ",
    value: "1908 Thomes Ave STE 12337, Cheyenne, WY 82001, USA",
    link: "https://www.google.com/maps/search/?api=1&query=1908+Thomes+Ave+STE+12337,+Cheyenne,+WY+82001,+USA"
  },
  {
    icon: <Clock className="text-purple-600" size={20} />,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM (MST)",
    link: "#"
  }
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(
      "Contact Us",
      "Get in touch with the solution architects at Expert Opinions. Let's initiate a discussion about your web application development, SEO ranking, or e-commerce scaling needs."
    );
  }, []);

  return (
    <div className="bg-white font-poppins text-gray-900 overflow-x-hidden">
      
      {/* 1. Header Section */}
      <div className="pt-32 pb-20 bg-gray-50 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
          Let’s Start a <span className="text-purple-600">Conversation</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          From Wyoming to the world, our experts are ready to scale your business with SEO, AI, and Full-Stack solutions.
        </p>
      </div>

      {/* 2. Google Map Section - Optimized Layout Boundaries */}
      {/* FIXED: Aspect mapping handles size footprint without rendering delays */}
      <div className="w-full h-[300px] md:h-[450px] bg-gray-200 relative overflow-hidden transform-gpu">
        <iframe
          title="Expert Opinions - Wyoming Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.464673627042!2d-104.8190!3d41.1347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3ab43859666d%3A0x6b49e6f30453e198!2s1908%20Thomes%20Ave%2C%20Cheyenne%2C%20WY%2082001%2C%20USA!5e0!3m2!1sen!2s!4v1711234567890!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

      {/* 3. Contact Info Cards - Full Wide Flow */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-16 relative z-10 contain-intrinsic-size">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactDetails.map((detail, index) => (
            <div
              key={`contact-tile-${index}`}
              className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center transition-colors duration-200 hover:border-purple-500/50 group"
            >
              <div className="p-3.5 bg-purple-50 text-purple-600 rounded-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200 shrink-0">
                {detail.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{detail.title}</h3>
              {detail.link2 ? (
                <div className="flex flex-col gap-1 w-full select-all">
                  <a href={detail.link} className="text-xs md:text-sm text-gray-500 hover:text-purple-600 break-words font-medium leading-relaxed">{detail.value}</a>
                  <a href={detail.link2} className="text-xs md:text-sm text-gray-500 hover:text-purple-600 break-words font-medium leading-relaxed">{detail.value2}</a>
                </div>
              ) : (
                <a 
                  href={detail.link} 
                  target={detail.title === "Global HQ" ? "_blank" : "_self"} 
                  rel={detail.title === "Global HQ" ? "noopener noreferrer" : undefined} 
                  onClick={(e) => detail.link === '#' && e.preventDefault()} 
                  className="text-xs md:text-sm text-gray-500 hover:text-purple-600 break-words w-full font-medium leading-relaxed"
                >
                  {detail.value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Contact Form Section */}
      <div className="py-16 md:py-24 max-w-5xl mx-auto px-6 contain-intrinsic-size">
        <ContactForm />
      </div>

      {/* 5. Logo Slider Component */}
      <div className="pb-12 contain-intrinsic-size">
        <LogoSlider />
      </div>

    </div>
  );
};

export default Contact;