import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Globe, Users, Send } from 'lucide-react';
import axios from 'axios';
// --- Heavy Validation Schema ---
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

  const serviceOptions = [
    "SEO Optimization", "Amazon Optimization", "Shopify Store Dev", 
    "Digital Marketing", "Content Writing", "Local SEO", 
    "MERN/Full Stack", "Mobile App Dev", "DevOps", 
    "Generative AI", "n8n", "Blogging"
  ];

  return (
    <section className="py-10 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: FORM SIDE */}
        <div className="lg:w-2/3">
          <h2 className="text-5xl font-black text-purple-600 mb-10">Get In Touch</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-2">Full Name*</label>
                <input {...register("fullName")} className={`p-3 bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-lg outline-none focus:border-purple-500`} />
                {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-2">Email*</label>
                <input {...register("email")} className={`p-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg outline-none focus:border-purple-500`} />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-2">Phone Number*</label>
                <input {...register("phone")} placeholder="+92 ..." className={`p-3 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg outline-none focus:border-purple-500`} />
                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
              </div>

              {/* Company Name */}
              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-2">Company Name*</label>
                <input {...register("companyName")} className={`p-3 bg-gray-50 border ${errors.companyName ? 'border-red-500' : 'border-gray-200'} rounded-lg outline-none focus:border-purple-500`} />
                {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
              </div>
            </div>

            {/* Region Select */}
            <div className="flex flex-col">
              <label className="font-bold text-gray-700 mb-2">Region*</label>
              <div className="relative">
                <select 
                  {...register("region")} 
                  className={`w-full p-3 bg-gray-50 border ${errors.region ? 'border-red-500' : 'border-gray-200'} 
                  rounded-lg outline-none focus:border-purple-500 appearance-none cursor-pointer pr-10 transition-all text-gray-600 focus:bg-white`}
                >
                  <option value="">Select Region</option>
                  <option value="Asia">Asia</option>
                  <option value="North America">North America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                </select>
                  
                {/* Custom Arrow Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              {errors.region && <span className="text-red-500 text-xs mt-1">{errors.region.message}</span>}
            </div>

            {/* Services Checkboxes */}
            <div className="flex flex-col">
              <label className="font-bold text-gray-700 mb-4">Services you are looking for*</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" value={service} {...register("services")} className="accent-purple-600 w-4 h-4" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
              {errors.services && <span className="text-red-500 text-xs mt-1">{errors.services.message}</span>}
            </div>

            {/* Project Details */}
            <div className="flex flex-col">
              <label className="font-bold text-gray-700 mb-2">Project Details*</label>
              <textarea {...register("projectDetails")} rows="4" className={`p-3 bg-gray-50 border ${errors.projectDetails ? 'border-red-500' : 'border-gray-200'} rounded-lg outline-none focus:border-purple-500`} />
              {errors.projectDetails && <span className="text-red-500 text-xs mt-1">{errors.projectDetails.message}</span>}
            </div>

            <button disabled={isSubmitting} type="submit" className="flex items-center gap-2 bg-purple-600 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transition-all">
              {isSubmitting ? "Submitting..." : "Submit"} <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT: INFO SIDE */}


      </div>
    </section>
  );
};

export default ContactForm;