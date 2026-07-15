import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, CheckCircle, ExternalLink, DollarSign, Clock, Tag } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    title: "Amazon FBA Ranking/PPC ACOS Expert/Consultant Needed ASAP",
    category: "amazon",
    feedback: "It has been a very good experience Maqsood is really an expert. I will continue to work with Maqsood in the future, I recommend this freelancer to everyone !",
    rating: 5.0,
    metrics: {
      type: "Fixed Price",
      earnings: "$70.00",
      duration: "Feb 14, 2019 - Feb 19, 2019"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145221/Amazon_FBA_RankingPPC_ACOS_ExpertConsultant_Needed_ASAP_gmxykd.jpg"
  },
  {
    id: 2,
    title: "Amazon Listing and Optimisation",
    category: "amazon",
    feedback: "Maqsood listen to instructions and gave result of what I wanted. Happy with service. Will use him for more amazon work.",
    rating: 5.0,
    metrics: {
      type: "Fixed Price",
      earnings: "$200.00",
      duration: "May 10, 2020 - Aug 14, 2020"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145220/Amazon_Listing_and_Optimisation_fvvrw2.jpg"
  },
  {
    id: 3,
    title: "Set up an eBay/Amazon arbitrage business",
    category: "ecom",
    feedback: "Responsive and very helpful, thank you!",
    rating: 5.0,
    metrics: {
      type: "Hourly",
      hours: "61 hrs",
      rate: "$22.23/hr",
      earnings: "$1,356.03",
      duration: "May 1, 2018 - May 11, 2018"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145221/Setup_an_eBayAmazon_arbitrage_business_l3vvzs.jpg"
  },
  {
    id: 4,
    title: "Amazon FBA Wholesale Product Researcher Needed",
    category: "amazon",
    feedback: "Exceptional brand catalog analysis, supplier negotiation protocols, and high-profit product sourcing.",
    rating: 5.0,
    metrics: {
      type: "Hourly",
      hours: "735 hrs",
      rate: "$6.60/hr",
      earnings: "$4,534.80",
      duration: "Long-term Contract"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145221/Amazon_FBA_Wholesale_Product_Researcher_Needed_roifim.jpg"
  },
  {
    id: 5,
    title: "Need eBay Tricks to Boost our Listings to the TOP",
    category: "ebay",
    feedback: "Advanced SEO keyword mapping and ranking strategy resulting in a drastic boost in page views and active conversions.",
    rating: 5.0,
    metrics: {
      type: "Hourly",
      hours: "216 hrs",
      rate: "$8.00/hr",
      earnings: "$1,726.67",
      duration: "Jul 31, 2018 - Sep 18, 2018"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145221/Need_eBay_Tricks_to_Boost_our_Listings_to_the_TOP_jtgz6d.jpg"
  },
  {
    id: 6,
    title: "Consultant for FBA/Amazon seller account",
    category: "amazon",
    feedback: "Comprehensive Amazon store management and setup. Directed overall account health recovery and inventory optimization.",
    rating: 5.0,
    metrics: {
      type: "Hourly",
      hours: "25 hrs",
      rate: "$7.81/hr",
      earnings: "$191.35",
      duration: "Jan 20, 2020 - Mar 24, 2020"
    },
    imageUrl: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784145221/Consultant_for_FBAAmazon_seller_account_jvooft.jpg"
  }
];

const ClientReviews = () => {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredReviews = filter === 'all'
    ? reviewsData
    : reviewsData.filter(r => r.category === filter);

  return (
    <section className="py-20 bg-slate-50 font-poppins relative border-b border-slate-100 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 block">
            verified track record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
            Client Success & <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Verified Proof</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Real feedback, contract data, and platform results from our active profiles. We back our claims with complete operational transparency.
          </p>
        </div>

        {/* Filters and Meta-Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'amazon', label: 'Amazon FBA' },
              { id: 'ebay', label: 'eBay Storefronts' },
              { id: 'ecom', label: 'Multi-Channel Arbitrage' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${filter === tab.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-purple-300 hover:text-purple-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Core Trust Metrics */}
          <div className="flex gap-6 items-center shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-800 leading-none">5.0</span>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Rating</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-600 shrink-0" />
              <div>
                <p className="text-xs font-black text-slate-800 leading-none">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Job Success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Layout of Reviews */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review) => (
              <motion.div
                layout
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group h-full relative"
              >
                {/* Verified Tag */}
                <div className="absolute top-3 right-3 bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 animate-pulse"></span>
                  Verified
                </div>

                <div>
                  {/* Rating & Platform */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                    </div>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                      {review.category === 'amazon' ? 'Amazon FBA' : review.category === 'ebay' ? 'eBay' : 'Cross-Arbitrage'}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                    {review.title}
                  </h3>

                  {/* Feedback Quote */}
                  <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                    "{review.feedback}"
                  </p>
                </div>

                <div>
                  {/* Detailed Metrics Table */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-5">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {review.metrics.hours && (
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-purple-600" />
                          <span>{review.metrics.hours} ({review.metrics.rate})</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-slate-800 font-bold col-span-2">
                        <DollarSign className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{review.metrics.earnings} total earned</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 col-span-2 text-[10px] border-t border-slate-200/50 pt-1 mt-1 font-medium">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span>{review.metrics.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link to verify screenshot */}
                  <button
                    onClick={() => setActiveImage(review.imageUrl)}
                    className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all border border-purple-200/40 hover:border-purple-200 cursor-pointer"
                  >
                    <span>Verify Contract Proof</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-slate-200 flex flex-col relative"
            >
              {/* Top Header with title and close button */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Upwork Contract Evidence
                </span>
                <button
                  onClick={() => setActiveImage(null)}
                  className="p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-res Image Wrapper */}
              <div className="p-4 bg-slate-900 flex justify-center items-center overflow-auto max-h-[75vh]">
                <img
                  src={activeImage}
                  alt="Verified Review Screenshot"
                  className="rounded-lg object-contain max-h-[70vh] shadow-lg select-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientReviews;
