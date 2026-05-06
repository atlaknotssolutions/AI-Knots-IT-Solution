// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, ChevronDown, Phone, MapPin, Users, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';
// import  {PortfolioAtlaknotsitsolutions}  from "../../assets/PortfolioAtlaknotsitsolutions.pdf"

// // Relevant images for local marketing theme
// const carouselImages = [
//   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90', // Team working on local campaigns
//   'https://www.searchberg.com/img/GMB-optimization/bannerImg.webp',     // GMB / local SEO map view
//   'https://blog.hootsuite.com/wp-content/uploads/2024/04/whatsapp-marketing-6.png', // WhatsApp marketing on phone
//   'https://www.crossml.com/wp-content/uploads/2024/11/heat-map-smarter-retail-store.png-1024x760.jpg', // Footfall / leads graph
// ];

// const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// const faqData = [
//   { q: "What does AI Knots do in local marketing?", a: "We help businesses grow locally through GMB, local SEO, WhatsApp, and SMS marketing." },
//   { q: "Is local marketing useful for small businesses?", a: "Yes, it helps attract nearby customers and increase sales." },
//   { q: "How soon can I see results?", a: "You can start seeing calls and inquiries within a few days." },
//   { q: "Do you manage Google My Business?", a: "Yes, we optimize and manage your GMB profile." },
//   { q: "Can you generate local leads?", a: "Yes, we run targeted campaigns to generate nearby customer leads." },
//   { q: "Is WhatsApp marketing effective?", a: "Yes, it has high open rates and direct customer engagement." },
//   { q: "Do I need a website for local marketing?", a: "Not necessary, but it helps improve results." },
//   { q: "Do you provide reports?", a: "Yes, we provide clear performance reports." },
//   { q: "Can you target specific areas in Bhopal?", a: "Yes, we can target specific locations and areas." },
//   { q: "How can I get started?", a: "Just contact us and we’ll create a local marketing plan." },
// ];

// function LocalMarketing() {

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);

//     const [showScrollTop, setShowScrollTop] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         setShowScrollTop(window.scrollY > 400);
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white font-sans">
//       {/* Hero Carousel */}
//       <section className="relative h-[90vh] overflow-hidden">
//         {carouselImages.map((img, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.5, ease: 'easeInOut' }}
//           >
//             <img src={img} alt="Local marketing hero" className="w-full h-full object-cover brightness-50 opacity-70" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black flex items-center justify-center">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={staggerContainer}
//                 className="text-center px-6 max-w-6xl z-10"
//               >
//                 <motion.h1
//                   variants={fadeInUp}
//                   className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
//                 >
//                   Best Local Marketing Company in Bhopal
//                 </motion.h1>
//                 <motion.p variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-red-400 mb-8">
//                   Top Local Marketing Agency in Bhopal for Real Business Growth
//                 </motion.p>
//                 <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10">
//                   Our Expert Solutions for: Google My Business | Local SEO | WhatsApp Marketing | SMS Marketing | Lead Generation | Brand Awareness
//                 </motion.p>

//                 <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//                   <button className="px-10 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3">
//                     Get Special Offer – Enquire Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//                   </button>

//                   <a href={PortfolioAtlaknotsitsolutions} target="download" rel="noopener noreferrer">
//                     <button className="px-10 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//                       Download Offer Brochure Now
//                     </button>
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
//           {carouselImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentSlide(i)}
//               className={`w-4 h-4 rounded-full transition-all ${i === currentSlide ? 'bg-red-600 scale-150 shadow-red-600/50' : 'bg-gray-600 hover:bg-red-400'}`}
//             />
//           ))}
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
//         {/* About Section */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
//           <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             About AI Knots : Best Local Marketing Agency in Bhopal
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
//             Local Reach, Real Results
//           </motion.p>
//           <motion.p variants={fadeInUp} className="text-xl text-gray-300 mt-8 max-w-5xl mx-auto leading-relaxed">
//             AI Knots is a leading local marketing agency in Bhopal, helping businesses connect with nearby customers and grow faster.
//             We specialize in Google My Business optimization, local SEO, WhatsApp campaigns, SMS marketing, and hyperlocal advertising to bring more calls, visits, and leads to your business.
//             Recognized as one of the best local marketing companies in Bhopal, we create strategies that make your business visible in your area and turn local searches into real customers.
//           </motion.p>

//           <div className="mt-12 grid md:grid-cols-3 gap-8">
//             {["Got more local calls after GMB optimization.", "Best local marketing service in Bhopal for small business.", "Good results with WhatsApp and SMS campaigns."].map((review, i) => (
//               <motion.div key={i} variants={fadeInUp} className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all">
//                 <p className="text-lg text-gray-300 italic">"{review}"</p>
//                 <p className="mt-4 text-red-400 font-bold">Excellent</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Why Choose Us */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//           <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Why We’re the Top Local Marketing Agency in Bhopal
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: MapPin, title: "Smart Local Strategies", desc: "We target customers near your business using location-based marketing and local SEO." },
//               { icon: Users, title: "Real Customer Engagement", desc: "From WhatsApp to SMS, we connect directly with your audience and increase response rates." },
//               { icon: TrendingUp, title: "Results That Matter", desc: "More calls, more store visits, and more leads — that’s our focus." },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all text-center"
//               >
//                 <item.icon className="w-16 h-16 text-red-500 mb-6 mx-auto" />
//                 <h3 className="text-3xl font-bold text-red-400 mb-5">{item.title}</h3>
//                 <p className="text-gray-300 text-lg">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               "Location-Based Targeting : Reach customers in your city, area, or specific locations.",
//               "Expert Local Marketing Team : We understand the Bhopal market and customer behavior.",
//               "Customized Marketing Plans : Every business gets a strategy based on its location and audience.",
//               "Transparent Reporting : Track calls, leads, and campaign performance easily.",
//               "All Local Marketing Solutions in One Place: From GMB to WhatsApp marketing, everything under one roof.",
//               "High-Quality Local Leads : We focus on real customers, not just traffic.",
//               "Quick Support : Fast response and dedicated support for your campaigns.",
//               "Affordable for Small Businesses : Budget-friendly plans for startups and local shops.",
//             ].map((point, i) => (
//               <motion.div key={i} variants={fadeInUp} className="bg-gray-900/50 border border-red-900/30 rounded-xl p-6 hover:border-red-600/50 transition-all">
//                 <CheckCircle className="w-6 h-6 text-red-500 mb-3" />
//                 <p className="text-gray-200">{point}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Stats */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
//           <h2 className="text-5xl font-black mb-12 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             Let Our Numbers Speak
//           </h2>
//           <div className="grid md:grid-cols-5 gap-8">
//             {[
//               { num: "2+", label: "Years of Experience" },
//               { num: "79+", label: "Clients Served" },
//               { num: "30+", label: "Projects Completed" },
//               { num: "85%+", label: "Client Retention Rate" },
//               { num: "10+", label: "Team Members" },
//             ].map((stat, i) => (
//               <motion.div key={i} variants={fadeInUp} className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8">
//                 <p className="text-5xl font-black text-red-500">{stat.num}</p>
//                 <p className="text-xl text-gray-300 mt-4">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* CTA & Form Simulation */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center py-20">
//           <h2 className="text-6xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             Unlock Your Special Offer – Just Fill the Form Today
//           </h2>
//           <div className="max-w-md mx-auto bg-gray-900/70 border border-red-900/40 rounded-2xl p-10">
//             <input type="text" placeholder="Name" className="w-full p-4 mb-4 bg-black/50 border border-red-900/40 rounded-lg text-white placeholder-gray-500 focus:border-red-600 outline-none" />
//             <input type="tel" placeholder="Number" className="w-full p-4 mb-6 bg-black/50 border border-red-900/40 rounded-lg text-white placeholder-gray-500 focus:border-red-600 outline-none" />
//             <button className="w-full px-8 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center justify-center gap-3">
//               Request a Call Back <Phone className="w-6 h-6" />
//             </button>
//           </div>
//         </motion.section>

//         {/* Industries */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//           <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Industries We Serve
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {["Retail Shops", "Home Services", "Clinics and Healthcare", "Real Estate", "Coaching Institutes", "Restaurants and Cafes"].map((ind, i) => (
//               <motion.span
//                 key={i}
//                 variants={fadeInUp}
//                 className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all"
//               >
//                 {ind}
//               </motion.span>
//             ))}
//           </div>
//         </motion.section>

//         {/* FAQ */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
//           <motion.h2 variants={fadeInUp} className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Frequently Asked Questions (FAQs)
//           </motion.h2>
//           <div className="space-y-4">
//             {faqData.map((faq, index) => (
//               <motion.div key={index} variants={fadeInUp} className="bg-gray-900/70 border border-red-900/40 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleFAQ(index)} className="w-full px-8 py-6 text-left flex justify-between items-center group">
//                   <span className="text-xl font-bold text-red-400 group-hover:text-red-300">{faq.q}</span>
//                   <ChevronDown className={`w-8 h-8 text-red-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
//                       <p className="px-8 pb-6 text-gray-300 text-lg border-t border-red-900/30 pt-4">{faq.a}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Final CTA */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center py-20">
//           <h2 className="text-6xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             Ready to Grow Locally?
//           </h2>
//           <button className="px-16 py-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-3xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
//             Claim Your 7 Days Free Trial
//           </button>
//         </motion.section>
//       </main>

//   <button
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
//           showScrollTop
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-16 pointer-events-none"
//         }`}
//         aria-label="Scroll back to top"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default LocalMarketing;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  MapPin,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import PortfolioAtlaknotsitsolutions from "../../assets/PortfolioAtlaknotsitsolutions.pdf";

// Carousel Images
const carouselImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90",
  "https://www.searchberg.com/img/GMB-optimization/bannerImg.webp",
  "https://blog.hootsuite.com/wp-content/uploads/2024/04/whatsapp-marketing-6.png",
  "https://www.crossml.com/wp-content/uploads/2024/11/heat-map-smarter-retail-store.png-1024x760.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const faqData = [
  {
    q: "What does AI Knots do in local marketing?",
    a: "We help businesses grow locally through GMB, local SEO, WhatsApp, and SMS marketing.",
  },
  {
    q: "Is local marketing useful for small businesses?",
    a: "Yes, it helps attract nearby customers and increase sales.",
  },
  {
    q: "How soon can I see results?",
    a: "You can start seeing calls and inquiries within a few days.",
  },
  {
    q: "Do you manage Google My Business?",
    a: "Yes, we optimize and manage your GMB profile.",
  },
  {
    q: "Can you generate local leads?",
    a: "Yes, we run targeted campaigns to generate nearby customer leads.",
  },
  {
    q: "Is WhatsApp marketing effective?",
    a: "Yes, it has high open rates and direct customer engagement.",
  },
  {
    q: "Do I need a website for local marketing?",
    a: "Not necessary, but it helps improve results.",
  },
  {
    q: "Do you provide reports?",
    a: "Yes, we provide clear performance reports.",
  },
  {
    q: "Can you target specific areas in Bhopal?",
    a: "Yes, we can target specific locations and areas.",
  },
  {
    q: "How can I get started?",
    a: "Just contact us and we’ll create a local marketing plan.",
  },
];

export default function LocalMarketing() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme Observer
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Consistent Theme Classes
  const accentClass = "text-red-500";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/80 backdrop-blur-xl border border-gray-700/80 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
    : "bg-white border border-gray-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-100/80 transition-all duration-500";

  const premiumButton = `px-12 py-7 rounded-2xl text-xl font-bold transition-all flex items-center gap-3 group shadow-xl
    ${
      isDark
        ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-red-900/60"
        : "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-red-600/50 hover:shadow-red-500/50"
    }`;

  return (
    <div
      className={`min-h-screen transition-colors duration-700 overflow-hidden
      ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* ====================== HERO CAROUSEL ====================== */}
      <section className="relative h-[90vh] overflow-hidden">
        {carouselImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={img}
              alt="Local marketing in Bhopal"
              className="w-full h-full object-cover brightness-50"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-black/70 via-gray-950/90 to-gray-950" : "from-black/60 via-black/80 to-black"} flex items-center justify-center`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center px-6 max-w-6xl z-10"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent"
                >
                  Best Local Marketing Company in Bhopal
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-red-400 mb-8"
                >
                  Top Local Marketing Agency in Bhopal for Real Business Growth
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className={`text-xl md:text-2xl text-center max-w-5xl mx-auto mb-10 leading-relaxed ${isDark ? "text-gray-300" : "text-white/90"}`}
                >
                  Our Expert Solutions for: Google My Business | Local SEO |
                  WhatsApp Marketing | SMS Marketing | Lead Generation | Brand
                  Awareness
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <button className={premiumButton}>
                    Get Special Offer – Enquire Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <a
                    href={PortfolioAtlaknotsitsolutions}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <button
                      className={`px-10 py-6 border-2 border-red-500/70 rounded-2xl text-xl md:text-2xl font-bold transition-all
                      ${isDark ? "text-red-400 hover:bg-red-950/60 hover:border-red-500" : "text-red-600 hover:bg-red-50"}`}
                    >
                      Download Offer Brochure Now
                    </button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-4 h-4 rounded-full transition-all ${
                i === currentSlide
                  ? "bg-red-600 scale-150 shadow-lg shadow-red-600/50"
                  : isDark
                    ? "bg-gray-600 hover:bg-red-400"
                    : "bg-gray-400 hover:bg-red-500"
              }`}
            />
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl md:text-6xl font-black mb-10 ${headingClass}`}
          >
            About AI Knots : Best Local Marketing Agency in Bhopal
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-2xl max-w-5xl mx-auto leading-relaxed mb-6 ${bodyClass}`}
          >
            Local Reach, Real Results
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className={`text-xl max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
          >
            AI Knots is a leading local marketing agency in Bhopal, helping
            businesses connect with nearby customers and grow faster. We
            specialize in Google My Business optimization, local SEO, WhatsApp
            campaigns, SMS marketing, and hyperlocal advertising to bring more
            calls, visits, and leads to your business. Recognized as one of the
            best local marketing companies in Bhopal, we create strategies that
            make your business visible in your area and turn local searches into
            real customers.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              "Got more local calls after GMB optimization.",
              "Best local marketing service in Bhopal for small business.",
              "Good results with WhatsApp and SMS campaigns.",
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl p-8 transition-all ${cardClass}`}
              >
                <p className={`text-lg italic ${bodyClass}`}>“{review}”</p>
                <p className={`mt-4 font-bold ${accentClass}`}>Excellent</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2
            className={`text-5xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why We’re the Top Local Marketing Agency in Bhopal
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Smart Local Strategies",
                desc: "We target customers near your business using location-based marketing and local SEO.",
              },
              {
                icon: Users,
                title: "Real Customer Engagement",
                desc: "From WhatsApp to SMS, we connect directly with your audience and increase response rates.",
              },
              {
                icon: TrendingUp,
                title: "Results That Matter",
                desc: "More calls, more store visits, and more leads — that’s our focus.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-3xl p-10 text-center transition-all group ${cardClass}`}
              >
                <item.icon
                  className={`w-16 h-16 mx-auto mb-6 transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3
                  className={`text-3xl font-bold mb-5 ${isDark ? "text-red-400" : "text-red-600"}`}
                >
                  {item.title}
                </h3>
                <p className={bodyClass}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Location-Based Targeting : Reach customers in your city, area, or specific locations.",
              "Expert Local Marketing Team : We understand the Bhopal market and customer behavior.",
              "Customized Marketing Plans : Every business gets a strategy based on its location and audience.",
              "Transparent Reporting : Track calls, leads, and campaign performance easily.",
              "All Local Marketing Solutions in One Place: From GMB to WhatsApp marketing, everything under one roof.",
              "High-Quality Local Leads : We focus on real customers, not just traffic.",
              "Quick Support : Fast response and dedicated support for your campaigns.",
              "Affordable for Small Businesses : Budget-friendly plans for startups and local shops.",
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl p-6 transition-all ${cardClass}`}
              >
                <CheckCircle className={`w-6 h-6 mb-3 ${accentClass}`} />
                <p className={bodyClass}>{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <h2 className={`text-5xl font-black mb-12 ${headingClass}`}>
            Let Our Numbers Speak
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { num: "2+", label: "Years of Experience" },
              { num: "79+", label: "Clients Served" },
              { num: "30+", label: "Projects Completed" },
              { num: "85%+", label: "Client Retention Rate" },
              { num: "10+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-3xl p-8 transition-all ${cardClass}`}
              >
                <p className={`text-5xl font-black ${accentClass}`}>
                  {stat.num}
                </p>
                <p className={`text-xl mt-4 ${bodyClass}`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-20"
        >
          <h2 className={`text-6xl font-black mb-10 ${headingClass}`}>
            Unlock Your Special Offer – Just Fill the Form Today
          </h2>
          <div className={`max-w-md mx-auto rounded-3xl p-10 ${cardClass}`}>
            <input
              type="text"
              placeholder="Name"
              className={`w-full p-4 mb-4 rounded-lg outline-none transition-all ${isDark ? "bg-gray-900 border border-gray-700 focus:border-red-500" : "bg-white border border-gray-200 focus:border-red-500"}`}
            />
            <input
              type="tel"
              placeholder="Number"
              className={`w-full p-4 mb-6 rounded-lg outline-none transition-all ${isDark ? "bg-gray-900 border border-gray-700 focus:border-red-500" : "bg-white border border-gray-200 focus:border-red-500"}`}
            />
            <button className={premiumButton + " w-full text-2xl py-7"}>
              Request a Call Back <Phone className="w-6 h-6" />
            </button>
          </div>
        </motion.section>
        {/* Industries */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2
            className={`text-5xl font-black text-center mb-12 ${headingClass}`}
          >
            Industries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Retail Shops",
              "Home Services",
              "Clinics and Healthcare",
              "Real Estate",
              "Coaching Institutes",
              "Restaurants and Cafes",
            ].map((ind, i) => (
              <motion.span
                key={i}
                variants={fadeInUp}
                className={`px-6 py-4 rounded-2xl text-lg font-medium transition-all ${cardClass}`}
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl font-black text-center mb-16 ${headingClass}`}
          >
            Frequently Asked Questions (FAQs)
          </motion.h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`border rounded-2xl overflow-hidden ${isDark ? "border-gray-800 bg-gray-900/60" : "border-gray-200 bg-white"} ${cardClass}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-8 py-6 text-left flex justify-between items-center transition-all ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
                >
                  <span className={`text-xl font-bold ${headingClass}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-8 h-8 ${accentClass} transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={`px-8 pb-6 text-lg ${bodyClass}`}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
