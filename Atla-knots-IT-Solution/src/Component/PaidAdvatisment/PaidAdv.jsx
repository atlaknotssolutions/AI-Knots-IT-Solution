// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ArrowRight, Target, BarChart3, TrendingUp, Megaphone, Repeat, Youtube,
//   ChevronDown, Sparkles, Users, DollarSign, LineChart, Globe, CheckCircle2
// } from 'lucide-react';

// // Professional paid ads focused images (high-performance marketing vibe)
// const carouselImages = [
//   'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90', // Analytics dashboard
//   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90', // Ad performance graph
//   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90', // Team strategy
//   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90', // Growth metrics
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 70 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.18 } }
// };

// function PaidAdvertising() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [openFaq, setOpenFaq] = useState(null);

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
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const faqs = [
//     { q: "Why is AI Knots the best paid advertising agency in Bhopal?", a: "Because we focus on ROI, not just clicks. Our campaigns are data-driven and designed to generate real business results." },
//     { q: "What platforms do you run ads on?", a: "We run ads on Google, Facebook, Instagram, YouTube, and other performance platforms." },
//     { q: "How do you ensure better ad performance?", a: "Through continuous optimization, A/B testing, audience targeting, and real-time data analysis." },
//     { q: "Can you help small businesses generate leads?", a: "Yes, we specialize in lead generation campaigns for startups and small businesses with budget-friendly strategies." },
//     { q: "How soon can I see results?", a: "You can start seeing initial results within a few days, while optimized performance improves over time." },
//     { q: "Do you provide reporting?", a: "Yes, we provide transparent reports with clear insights on performance, leads, and ROI." },
//     { q: "Can you reduce my ad cost?", a: "Yes, with proper targeting and optimization, we aim to reduce cost per lead and increase conversions." },
//     { q: "Do you create ad creatives also?", a: "Absolutely! We design high-converting creatives and ad copies that grab attention." },
//     { q: "Do you handle remarketing campaigns?", a: "Yes, we run advanced remarketing campaigns to convert interested users into customers." },
//     { q: "How can I get started with AI Knots?", a: "Simply contact us, and we’ll create a custom ad strategy for your business." },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white font-sans selection:bg-red-900/30 overflow-x-hidden">
//       {/* Hero Carousel - same style */}
//       <section className="relative h-screen overflow-hidden">
//         {carouselImages.map((img, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.8, ease: 'easeInOut' }}
//           >
//             <motion.img
//               src={img}
//               alt="Paid Advertising Performance"
//               className="w-full h-full object-cover opacity-30 brightness-75"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black flex items-center justify-center">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={staggerContainer}
//                 className="text-center px-6 max-w-6xl z-10"
//               >
//                 <motion.h1
//                   variants={fadeInUp}
//                   className="text-6xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tight bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
//                 >
//                   AI Knots
//                 </motion.h1>
//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 text-red-400"
//                 >
//                   Paid Advertising Agency<br className="sm:hidden" /> in Bhopal
//                 </motion.p>
//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-tight mb-10"
//                 >
//                   Driving High-Performance Ads Across India • Real Growth • Measurable ROI
//                 </motion.p>

//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
//                 >
//                   At AI Knots, a creative paid advertising agency in Bhopal, we go beyond clicks and impressions — we focus on real business growth.
//                 </motion.p>

//                 <motion.div
//                   variants={fadeInUp}
//                   className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
//                 >
//                   <button className="group px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3">
//                     Free Campaign Audit <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//                   </button>
//                   <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-2xl font-bold hover:bg-red-950/50 transition-all">
//                     Get Started →
//                   </button>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}

//         {/* Carousel dots */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
//           {carouselImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentSlide(i)}
//               className={`w-3.5 h-3.5 rounded-full transition-all duration-700 ${
//                 i === currentSlide ? 'bg-red-600 scale-150 shadow-lg shadow-red-600/50' : 'bg-gray-600 hover:bg-red-400'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-40">

//         {/* What We Do + Better Targeting / Data / Results */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             We Don’t Just Run Ads, We Drive Results
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
//             We create smart, result-driven ad campaigns that connect your brand with the right audience at the right time. From Google Ads to Meta Ads and performance marketing, our strategies are designed to generate leads, sales, and measurable ROI across India.
//           </motion.p>

//           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//             {[
//               { icon: Target, title: "Better Targeting", desc: "We don’t waste your budget on random audiences. With advanced targeting, audience segmentation, and retargeting strategies, we make sure your ads reach people who are actually interested in your business." },
//               { icon: BarChart3, title: "Better Data & Insights", desc: "AI Knots uses real-time data, analytics, and performance tracking tools to optimize campaigns continuously. We study user behavior, clicks, and conversions to improve your ad performance every single day." },
//               { icon: TrendingUp, title: "Better Results", desc: "From brand awareness to lead generation and sales, we focus on outcomes that matter. Our goal is simple - more conversions, lower cost, higher ROI." },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-3xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <item.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black text-red-400 mb-5 text-center">{item.title}</h3>
//                 <p className="text-gray-300 text-lg text-center leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Paid Advertising Solutions */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
//             Our Paid Advertising <span className="text-red-500">Solutions</span>
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Megaphone, title: "Google Ads (Search + Display)", desc: "Get found when your customers are searching. We create high-converting search and display campaigns that bring quality traffic to your website." },
//               { icon: Target, title: "Meta Ads (Facebook & Instagram)", desc: "We design scroll-stopping creatives and run targeted campaigns that turn views into leads and sales." },
//               { icon: Youtube, title: "YouTube Advertising", desc: "Reach your audience through engaging video ads that build trust and brand recall." },
//               { icon: LineChart, title: "Performance Marketing", desc: "We focus on ROI-driven campaigns where every rupee is tracked and optimized for better results." },
//               { icon: Repeat, title: "Remarketing Campaigns", desc: "Turn visitors into customers with smart retargeting strategies that bring them back to your business." },
//             ].map((service, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-3xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto block group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black text-red-400 mb-5 text-center">{service.title}</h3>
//                 <p className="text-gray-300 text-lg text-center leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Why Choose Us */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             Why AI Knots is Your Best Choice
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
//             AI Knots is not just another digital agency, we are your growth partner. We combine creative strategy, data-driven marketing, and performance ads to help your business grow faster. Whether you’re a local business in Bhopal or targeting customers across India, we make sure your ads deliver real impact.
//           </motion.p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {["ROI-Focused Campaigns", "Creative + Data-Driven", "Transparent Reporting", "Budget Optimization", "India-Wide Reach", "Proven Lead & Sales Growth"].map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 flex items-center justify-center"
//               >
//                 <CheckCircle2 className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
//                 <p className="text-2xl font-bold text-red-300">{point}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Success Stories Placeholder */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Success Stories
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
//             From Clicks to Customers — Real Growth, Real Results
//           </motion.p>
//           <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-4xl mx-auto">
//             We don’t just run ads—we build success stories. Our campaigns have helped businesses increase leads, boost sales, and grow their online presence.
//           </motion.p>
//           {/* You can add case study cards here later if you have specific data */}
//         </motion.section>

//         {/* CTA */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center py-32 bg-gradient-to-b from-black/50 to-transparent rounded-3xl border border-red-900/30"
//         >
//           <motion.h2 variants={fadeInUp} className="text-6xl sm:text-8xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//             Let’s Talk
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-3xl text-gray-200 mb-12 max-w-4xl mx-auto">
//             Ready to scale your business with powerful ads? Let’s create campaigns that actually convert.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="group px-16 py-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-3xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-5 mx-auto"
//           >
//             Get Your Free Audit <Sparkles className="w-9 h-9 group-hover:rotate-12 transition-transform" />
//           </motion.button>
//         </motion.section>

//         {/* FAQ */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Frequently Asked Questions
//           </motion.h2>

//           <div className="space-y-5">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="border border-red-900/40 rounded-xl overflow-hidden bg-gray-900/30"
//               >
//                 <button
//                   onClick={() => toggleFAQ(idx)}
//                   className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/40 transition-colors"
//                 >
//                   <span className="text-2xl font-bold">{faq.q}</span>
//                   <ChevronDown className={`w-7 h-7 text-red-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
//                 </button>
//                 <AnimatePresence>
//                   {openFaq === idx && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-8 pb-6 text-gray-300 text-lg leading-relaxed"
//                     >
//                       {faq.a}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </main>
//  <button
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

// export default PaidAdvertising;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Target,
  BarChart3,
  TrendingUp,
  Megaphone,
  Repeat,
  Youtube,
  ChevronDown,
  Sparkles,
  Users,
  DollarSign,
  LineChart,
  Globe,
  CheckCircle2,
} from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

function PaidAdvertising() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is AI Knots the best paid advertising agency in Bhopal?",
      a: "Because we focus on ROI, not just clicks. Our campaigns are data-driven and designed to generate real business results.",
    },
    {
      q: "What platforms do you run ads on?",
      a: "We run ads on Google, Facebook, Instagram, YouTube, and other performance platforms.",
    },
    {
      q: "How do you ensure better ad performance?",
      a: "Through continuous optimization, A/B testing, audience targeting, and real-time data analysis.",
    },
    {
      q: "Can you help small businesses generate leads?",
      a: "Yes, we specialize in lead generation campaigns for startups and small businesses with budget-friendly strategies.",
    },
    {
      q: "How soon can I see results?",
      a: "You can start seeing initial results within a few days, while optimized performance improves over time.",
    },
    {
      q: "Do you provide reporting?",
      a: "Yes, we provide transparent reports with clear insights on performance, leads, and ROI.",
    },
    {
      q: "Can you reduce my ad cost?",
      a: "Yes, with proper targeting and optimization, we aim to reduce cost per lead and increase conversions.",
    },
    {
      q: "Do you create ad creatives also?",
      a: "Absolutely! We design high-converting creatives and ad copies that grab attention.",
    },
    {
      q: "Do you handle remarketing campaigns?",
      a: "Yes, we run advanced remarketing campaigns to convert interested users into customers.",
    },
    {
      q: "How can I get started with AI Knots?",
      a: "Simply contact us, and we’ll create a custom ad strategy for your business.",
    },
  ];

  // Dynamic Theme Classes (Same as your other pages)
  const accentClass = "text-red-500";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/80 backdrop-blur-xl border border-gray-700/80 hover:border-red-500/70 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
    : "bg-white border border-gray-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-100/80 transition-all duration-500";

  const premiumButton = `px-12 py-7 rounded-2xl text-xl font-bold transition-all flex items-center gap-3 group shadow-xl
    ${
      isDark
        ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-red-900/60"
        : "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-red-600/50 hover:shadow-red-500/50"
    }`;

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* ====================== HERO CAROUSEL ====================== */}
      <section className="relative h-screen overflow-hidden">
        {carouselImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <motion.img
              src={img}
              alt="Paid Advertising Performance"
              className="w-full h-full object-cover brightness-50"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-black/80 via-black/95 to-black" : "from-black/70 via-black/85 to-black"} flex items-center justify-center`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center px-6 max-w-6xl z-10"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent"
                >
                  AI Knots
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 text-red-400"
                >
                  Paid Advertising Agency
                  <br className="sm:hidden" /> in Bhopal
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className={`text-xl sm:text-3xl max-w-4xl mx-auto leading-tight mb-10 ${isDark ? "text-gray-200" : "text-white/90"}`}
                >
                  Driving High-Performance Ads Across India • Real Growth •
                  Measurable ROI
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className={`text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${isDark ? "text-gray-300" : "text-white/90"}`}
                >
                  At AI Knots, a creative paid advertising agency in Bhopal, we
                  go beyond clicks and impressions — we focus on real business
                  growth.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <button className={premiumButton}>
                    Free Campaign Audit
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button
                    className={`px-12 py-7 border-2 border-red-500/70 rounded-2xl text-2xl font-bold transition-all
                      ${isDark ? "text-red-400 hover:bg-red-950/60 hover:border-red-500" : "text-red-600 hover:bg-red-50"}`}
                  >
                    Get Started →
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Carousel dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-700 ${
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

      <main
        className={`max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-40 ${isDark ? "" : "bg-white"}`}
      >
        {/* What We Do Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl sm:text-7xl font-black mb-10 ${headingClass}`}
          >
            We Don’t Just Run Ads, We Drive Results
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-2xl max-w-5xl mx-auto leading-relaxed mb-16 ${bodyClass}`}
          >
            We create smart, result-driven ad campaigns that connect your brand
            with the right audience at the right time. From Google Ads to Meta
            Ads and performance marketing, our strategies are designed to
            generate leads, sales, and measurable ROI across India.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Target,
                title: "Better Targeting",
                desc: "We don’t waste your budget on random audiences. With advanced targeting, audience segmentation, and retargeting strategies, we make sure your ads reach people who are actually interested in your business.",
              },
              {
                icon: BarChart3,
                title: "Better Data & Insights",
                desc: "AI Knots uses real-time data, analytics, and performance tracking tools to optimize campaigns continuously. We study user behavior, clicks, and conversions to improve your ad performance every single day.",
              },
              {
                icon: TrendingUp,
                title: "Better Results",
                desc: "From brand awareness to lead generation and sales, we focus on outcomes that matter. Our goal is simple - more conversions, lower cost, higher ROI.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-3xl p-10 transition-all group ${cardClass}`}
              >
                <item.icon
                  className={`w-16 h-16 mb-8 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3
                  className={`text-3xl font-black mb-5 text-center ${isDark ? "text-red-400" : "text-red-600"}`}
                >
                  {item.title}
                </h3>
                <p className={`text-lg leading-relaxed ${bodyClass}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Paid Advertising Solutions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl sm:text-7xl font-black text-center mb-16 ${headingClass}`}
          >
            Our Paid Advertising <span className={accentClass}>Solutions</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Google Ads (Search + Display)",
                desc: "Get found when your customers are searching. We create high-converting search and display campaigns that bring quality traffic to your website.",
              },
              {
                icon: Target,
                title: "Meta Ads (Facebook & Instagram)",
                desc: "We design scroll-stopping creatives and run targeted campaigns that turn views into leads and sales.",
              },
              {
                icon: Youtube,
                title: "YouTube Advertising",
                desc: "Reach your audience through engaging video ads that build trust and brand recall.",
              },
              {
                icon: LineChart,
                title: "Performance Marketing",
                desc: "We focus on ROI-driven campaigns where every rupee is tracked and optimized for better results.",
              },
              {
                icon: Repeat,
                title: "Remarketing Campaigns",
                desc: "Turn visitors into customers with smart retargeting strategies that bring them back to your business.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-3xl p-10 transition-all group ${cardClass}`}
              >
                <service.icon
                  className={`w-14 h-14 mb-6 mx-auto block transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3
                  className={`text-3xl font-black mb-5 text-center ${isDark ? "text-red-400" : "text-red-600"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-lg text-center leading-relaxed ${bodyClass}`}
                >
                  {service.desc}
                </p>
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
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl sm:text-7xl font-black mb-10 ${headingClass}`}
          >
            Why AI Knots is Your Best Choice
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-2xl max-w-5xl mx-auto leading-relaxed mb-12 ${bodyClass}`}
          >
            AI Knots is not just another digital agency, we are your growth
            partner. We combine creative strategy, data-driven marketing, and
            performance ads to help your business grow faster. Whether you’re a
            local business in Bhopal or targeting customers across India, we
            make sure your ads deliver real impact.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "ROI-Focused Campaigns",
              "Creative + Data-Driven",
              "Transparent Reporting",
              "Budget Optimization",
              "India-Wide Reach",
              "Proven Lead & Sales Growth",
            ].map((point, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`rounded-3xl p-8 flex items-center justify-center ${cardClass}`}
              >
                <CheckCircle2
                  className={`w-10 h-10 mr-4 flex-shrink-0 ${accentClass}`}
                />
                <p
                  className={`text-2xl font-bold ${isDark ? "text-red-300" : "text-red-700"}`}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl sm:text-7xl font-black mb-10 ${headingClass}`}
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-2xl max-w-4xl mx-auto leading-relaxed mb-8 ${bodyClass}`}
          >
            From Clicks to Customers — Real Growth, Real Results
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className={`text-xl max-w-4xl mx-auto ${bodyClass}`}
          >
            We don’t just run ads—we build success stories. Our campaigns have
            helped businesses increase leads, boost sales, and grow their online
            presence.
          </motion.p>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={`text-center py-32 rounded-3xl border ${isDark ? "bg-gradient-to-b from-black/50 to-transparent border-red-900/30" : "bg-red-50 border-red-200"}`}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-6xl sm:text-8xl font-black mb-10 ${isDark ? "bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent" : "text-red-600"}`}
          >
            Let’s Talk
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-3xl mb-12 max-w-4xl mx-auto ${bodyClass}`}
          >
            Ready to scale your business with powerful ads? Let’s create
            campaigns that actually convert.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`group px-16 py-8 rounded-full text-3xl font-bold shadow-2xl transition-all flex items-center gap-5 mx-auto ${premiumButton}`}
          >
            Get Your Free Audit{" "}
            <Sparkles className="w-9 h-9 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-5xl sm:text-7xl font-black text-center mb-16 ${headingClass}`}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`border rounded-2xl overflow-hidden ${isDark ? "border-gray-800 bg-gray-900/60" : "border-gray-200 bg-white"} ${cardClass}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full px-8 py-7 text-left flex justify-between items-center transition-all ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
                >
                  <span className={`text-2xl font-bold ${headingClass}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-7 h-7 ${accentClass} transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={`px-8 pb-8 text-lg leading-relaxed ${bodyClass}`}
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

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-5 rounded-2xl bg-red-600 hover:bg-red-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default PaidAdvertising;
