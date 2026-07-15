import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

// --- Heavy Validation Schema --- (Unchanged as requested)
const contactSchema = z.object({
  fullName: z.string().min(3, "Name should be atleast of three characters").max(50),
  email: z.string().email("Enter Valid Email Address"),
  phone: z.string().min(10, "Enter Valid Phone Number").max(15),
  companyName: z.string().min(2, "Enter Company name"),
  companyUrl: z.string().url("Enter valid (https://...) URL").optional().or(z.literal('')),
  region: z.string().min(1, "Select Reigon"),
  services: z.array(z.string()).min(1, "Select atleast one service"),
  projectDetails: z.string().min(20, "Enter detalis of project(min 20 characters)"),
  lookingForJob: z.string().min(1, "Select Option")
});

// CRITICAL MEMORY FIX: Moved array completely outside the component to keep the main thread free
const serviceOptions = [
  "SEO Optimization", "Amazon Optimization", "Shopify Store Dev", 
  "Digital Marketing", "Content Writing", "Local SEO", 
  "MERN/Full Stack", "Mobile App Dev", "DevOps", 
  "Generative AI", "n8n", "Blogging"
];

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { services: [] }
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', data);
      if (response.data.success) {
        alert("Congrats! Your message is received team will contact you back.");
      }
    } catch (error) {
      alert("Sorry! Try again.");
      console.error(error);
    }
  };

  return (
    // 'contain-intrinsic-size' optimizes initial browser layout paint runs
    <section className="py-12 bg-white font-poppins contain-intrinsic-size overflow-hidden">
      {/* PREMIUM DESIGN FIX: 3-column grid structure with 'items-stretch' 
        forces both form and info side to maintain perfectly equal heights!
      */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        
        {/* LEFT: FORM SIDE (Spans 2 columns on large displays, full width on mobile) */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-black text-purple-600 mb-6">Get In Touch</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="font-bold text-gray-700 text-sm mb-1">Full Name*</label>
                  <input 
                    id="fullName"
                    {...register("fullName")}
                    autoComplete="name"
                    className={`p-2.5 text-sm bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-none outline-none focus:border-purple-500`} 
                  />
                  {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold text-gray-700 text-sm mb-1">Email*</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email")} 
                    autoComplete="email"
                    className={`p-2.5 text-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-none outline-none focus:border-purple-500`} 
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-bold text-gray-700 text-sm mb-1">Phone Number*</label>
                  <input 
                    id="phone"
                    type="tel"
                    {...register("phone")} 
                    autoComplete="tel"
                    placeholder="+92 ..." 
                    className={`p-2.5 text-sm bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-none outline-none focus:border-purple-500`} 
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label htmlFor="companyName" className="font-bold text-gray-700 text-sm mb-1">Company Name*</label>
                  <input 
                    id="companyName"
                    {...register("companyName")} 
                    autoComplete="organization"
                    className={`p-2.5 text-sm bg-gray-50 border ${errors.companyName ? 'border-red-500' : 'border-gray-200'} rounded-none outline-none focus:border-purple-500`} 
                  />
                  {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
                </div>
              </div>

              {/* Region Select */}
              <div className="flex flex-col">
                <label htmlFor="region" className="font-bold text-gray-700 text-sm mb-1">Region*</label>
                <div className="relative">
                  <select 
                    id="region"
                    {...register("region")} 
                    className={`w-full p-2.5 text-sm bg-gray-50 border ${errors.region ? 'border-red-500' : 'border-gray-200'} 
                    rounded-none outline-none focus:border-purple-500 appearance-none cursor-pointer pr-10 text-gray-600 focus:bg-white`}
                  >
                    <option value="">Select Region</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Middle East">Middle East</option>
                  </select>
                    
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
                {errors.region && <span className="text-red-500 text-xs mt-1">{errors.region.message}</span>}
              </div>

              {/* Services Checkboxes */}
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 text-sm mb-2 block">Services you are looking for*</span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceOptions.map((service, idx) => (
                    <label key={`srv-opt-${idx}`} className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
                      <input type="checkbox" value={service} {...register("services")} className="accent-purple-600 w-4 h-4 rounded-none" />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && <span className="text-red-500 text-xs mt-1">{errors.services.message}</span>}
              </div>

              {/* Project Details */}
              <div className="flex flex-col">
                <label htmlFor="projectDetails" className="font-bold text-gray-700 text-sm mb-1">Project Details*</label>
                <textarea 
                  id="projectDetails"
                  {...register("projectDetails")} 
                  rows="3" 
                  className={`p-2.5 text-sm bg-gray-50 border ${errors.projectDetails ? 'border-red-500' : 'border-gray-200'} rounded-none outline-none focus:border-purple-500`} 
                />
                {errors.projectDetails && <span className="text-red-500 text-xs mt-1">{errors.projectDetails.message}</span>}
              </div>

              <button disabled={isSubmitting} type="submit" className="flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-none font-bold text-sm hover:bg-purple-700 transition-colors transform-gpu">
                {isSubmitting ? "Submitting..." : "Submit"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* CHANGED HERE: Added 'hidden lg:flex' to hide this panel on mobile screens entirely */}
        <div className="hidden lg:flex lg:col-span-1 flex-col h-full lg:pt-14">
          <div className="h-full w-full bg-white p-6 rounded-none border border-gray-200 flex flex-col justify-between space-y-5">
            
            <div className="pb-3 border-b border-gray-100">
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Connect with Us</h3>
              <p className="text-xs text-gray-400 mt-0.5">Direct communication channels.</p>
            </div>
            
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {/* Email 1: Support */}
              <a 
                href="mailto:Support@expertopinions.net" 
                className="block bg-gray-50 border border-gray-100 rounded-none p-4 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-none shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Support Email</span>
                    <span className="text-sm font-bold text-gray-800 mt-0.5 break-all">
                      Support@expertopinions.net
                    </span>
                  </div>
                </div>
              </a>

              {/* Email 2: Admin */}
              <a 
                href="mailto:admin@expertopinions.net" 
                className="block bg-gray-50 border border-gray-100 rounded-none p-4 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-none shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Email</span>
                    <span className="text-sm font-bold text-gray-800 mt-0.5 break-all">
                      admin@expertopinions.net
                    </span>
                  </div>
                </div>
              </a>

              {/* Phone Call Square Block */}
              <a 
                href="tel:+13072273735" 
                className="block bg-gray-50 border border-gray-100 rounded-none p-4 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-none shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us Directly</span>
                    <span className="text-sm font-bold text-gray-800 mt-0.5">
                      +1 307 227 3735
                    </span>
                  </div>
                </div>
              </a>

              {/* Google Maps Square Block */}
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 border border-gray-100 rounded-none p-4 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-none shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Corporate HQ</span>
                    <p className="text-sm font-bold text-gray-700 leading-relaxed mt-0.5">
                      1908 Thomes Ave STE 12337,<br />
                      Cheyenne, WY 82001, USA
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;