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
    <section className="py-24 bg-white font-poppins">
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
              <select {...register("region")} className="p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                <option value="">Select Region</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Middle East">Middle East</option>
              </select>
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
        <div className="lg:w-1/3 space-y-16 pt-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><Globe size={24} /></div>
              <h3 className="text-3xl font-black text-gray-900 leading-none">Global Presence</h3>
            </div>
            <p className="text-gray-600 mb-6 font-medium">We're across 5 continents, explore our office nearest to you.</p>
            <button className="bg-purple-600 text-white px-8 py-2.5 rounded-full font-bold text-sm">Learn more</button>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><Users size={24} /></div>
              <h3 className="text-3xl font-black text-gray-900 leading-none">Global Leaders</h3>
            </div>
            <p className="text-gray-600 mb-6 font-medium">Our capability and competencies are backed by diverse Global leadership.</p>
            <button className="bg-purple-600 text-white px-8 py-2.5 rounded-full font-bold text-sm">Learn more</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;