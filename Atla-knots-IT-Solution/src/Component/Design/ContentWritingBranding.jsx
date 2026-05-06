// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Pen,
// //   FileText,
// //   Newspaper,
// //   Link,
// //   BookOpen,
// //   Megaphone,
// //   Code,
// //   Mail,
// //   CheckCircle2,
// //   ArrowRight,
// //   Users,
// //   Globe,
// //   Zap,
// //   ShieldCheck
// // } from "lucide-react";

// // // Selected images for visual appeal (modern content creation, email examples, Bhopal/local touch)
// // const images = {
// //   hero: "https://framerusercontent.com/images/1VvwbJM00c9GavOhO9e1DTdMg.jpg?width=1920&height=1080", // Creative content strategy workspace
// //   contentExamples: "https://designmodo.com/wp-content/uploads/2024/11/email-design-trends-2025.jpg", // Modern email/newsletter designs
// //   bhopalLocal: "https://media.licdn.com/dms/image/v2/D4D22AQEi5Cvxfd_t-g/feedshare-shrink_800/B4DZrABYmtIMAg-/0/1764158180158?e=2147483647&v=beta&t=O1BquIYxDkYWQmO3xUD-S_7bEe4u8Rdb5wU1wpB7-Pk", // Futuristic Bhopal AI/knowledge city vibe
// //   newsletter: "https://piktochart.com/wp-content/uploads/2024/04/company-newsletter-examples-featured-image.png", // Engaging newsletter layouts
// // };

// // const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// // const services = [
// //   { icon: FileText, title: "Website Content Writing", desc: "Clear, engaging, SEO-friendly copy that turns visitors into customers." },
// //   { icon: BookOpen, title: "Blog Writing", desc: "High-value blogs that boost rankings, traffic, and audience trust." },
// //   { icon: Newspaper, title: "Press Release Writing", desc: "Professional releases to amplify your brand message and visibility." },
// //   { icon: Link, title: "Guest Posting", desc: "Strategic placements on authoritative sites for reach and strong backlinks." },
// //   { icon: Pen, title: "Article Writing", desc: "Well-researched, readable articles that establish brand authority." },
// //   { icon: Megaphone, title: "Ad Copy Writing", desc: "Compelling ads for Google, Facebook, Instagram that drive clicks and sales." },
// //   { icon: Code, title: "Technical Writing", desc: "Simplified explanations of complex topics for better understanding." },
// //   { icon: Mail, title: "Email & Newsletter Writing", desc: "Engaging sequences that nurture leads and increase conversions." },
// // ];

// // const whyChoose = [
// //   "100% Human Content – Authentic and emotionally resonant",
// //   "In-House Writers – Consistent quality aligned with your voice",
// //   "Plagiarism-Free Content – Always original and checked",
// //   "SEO-Optimized Content – Keyword-rich for better rankings",
// //   "Content That Engages and Converts – Designed for real results",
// // ];

// // const engagementPoints = [
// //   "Grabs attention with powerful headlines and hooks",
// //   "Builds trust through valuable, authentic storytelling",
// //   "Drives action with clear CTAs and persuasive messaging",
// // ];

// // const industries = [
// //   "Education", "E-commerce", "Healthcare", "Real Estate",
// //   "Technology & IT", "Finance", "Travel & Hospitality",
// //   "Startups & Local Businesses in Bhopal"
// // ];

// // const faqs = [
// //   { q: "What types of content writing services do you offer?", a: "We offer website content, blog writing, SEO content, ad copy, social media content, email marketing content, and more based on your business needs." },
// //   { q: "Is your content SEO-friendly?", a: "Yes, all our content is written with proper keyword research and SEO structure to help your website rank better on search engines." },
// //   { q: "How long does it take to deliver content?", a: "Delivery time depends on the project size, but most content is delivered within 2 to 5 working days." },
// //   { q: "Will the content be original?", a: "Yes, we provide 100% original and plagiarism-free content that is tailored specifically for your brand." },
// //   { q: "Can you write content for my specific industry?", a: "Yes, we create content for various industries like education, healthcare, real estate, eCommerce, and more." },
// // ];

// // export default function ContentWritingBranding() {
// //   const [openFaq, setOpenFaq] = useState(null);

// //   const [showScrollTop, setShowScrollTop] = useState(false);

// //     useEffect(() => {
// //       const handleScroll = () => {
// //         setShowScrollTop(window.scrollY > 400);
// //       };

// //       window.addEventListener('scroll', handleScroll);
// //       return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     const scrollToTop = () => {
// //       window.scrollTo({
// //         top: 0,
// //         behavior: 'smooth',
// //       });
// //     };

// //   return (
// //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// //       {/* Hero */}
// //       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
// //         <div className="absolute inset-0">
// //           <img src={images.hero} alt="Creative Content Writing Workspace" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
// //         </div>

// //         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
// //           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
// //             Content Writing & Branding Services in{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Bhopal</span>
// //           </motion.h1>

// //           <motion.p variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-red-400 mb-8">
// //             Turn Your Ideas Into Words That Sell
// //           </motion.p>

// //           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
// //             Your brand deserves content that connects, engages, and converts.
// //           </motion.p>

// //           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
// //             At AI Knots IT Solutions, we create simple, clear, and impactful content for websites, blogs, ads, emails, and more — tailored for Bhopal businesses and beyond.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Get Free Content Consultation <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
// //             </button>
// //             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
// //               Contact Us
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* Visual: Modern Email/Newsletter Examples */}
// //       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-8">
// //             Engaging Email & Newsletter Designs That Convert
// //           </motion.h3>
// //           <motion.img
// //             src={images.newsletter}
// //             alt="Modern Newsletter Layout Examples"
// //             className="rounded-2xl shadow-2xl shadow-red-900/40 mx-auto w-full max-w-5xl"
// //           />
// //         </div>
// //       </section>

// //       {/* Services */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
// //             Content Marketing <span className="text-red-500">Services</span> We Offer
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((serv, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
// //               >
// //                 <serv.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
// //                 <h3 className="text-2xl font-bold mb-4">{serv.title}</h3>
// //                 <p className="text-gray-300">{serv.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
// //             Why Choose AI Knots as Your{" "}
// //             <span className="text-red-500">Content Partner</span> in Bhopal
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {whyChoose.map((point, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center flex items-center justify-center"
// //               >
// //                 <CheckCircle2 className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
// //                 <p className="text-lg font-semibold">{point}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Content That Engages */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
// //             Content That <span className="text-red-500">Engages and Converts</span>
// //           </motion.h2>

// //           <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
// //             Good content is not just about writing — it’s about results.
// //           </p>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {engagementPoints.map((point, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center"
// //               >
// //                 <Zap className="w-12 h-12 text-red-500 mb-6 mx-auto" />
// //                 <p className="text-lg font-semibold">{point}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Local Bhopal Visual */}
// //       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <motion.img
// //             src={images.bhopalLocal}
// //             alt="Futuristic Bhopal - Growing Hub for Businesses"
// //             className="rounded-2xl shadow-2xl shadow-red-900/40 mx-auto w-full max-w-5xl"
// //           />
// //           <p className="mt-6 text-xl text-gray-400">Empowering Bhopal businesses with powerful, local-first content strategies.</p>
// //         </div>
// //       </section>

// //       {/* Industries */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
// //             Industries We <span className="text-red-500">Serve</span> in Bhopal & Beyond
// //           </motion.h2>

// //           <div className="flex flex-wrap justify-center gap-6">
// //             {industries.map((ind, idx) => (
// //               <motion.span
// //                 key={idx}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.05 }}
// //                 className="bg-red-950/40 border border-red-800/50 rounded-full px-8 py-4 text-lg font-medium flex items-center gap-3"
// //               >
// //                 <Globe className="w-6 h-6 text-red-400" /> {ind}
// //               </motion.span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
// //         <div className="max-w-4xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
// //             Frequently Asked <span className="text-red-500">Questions</span>
// //           </motion.h2>

// //           <div className="space-y-4">
// //             {faqs.map((faq, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="border border-red-900/40 rounded-xl overflow-hidden bg-gray-900/30"
// //               >
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
// //                   className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
// //                 >
// //                   <span className="text-xl font-bold">{faq.q}</span>
// //                   <span className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
// //                 </button>
// //                 {openFaq === idx && (
// //                   <div className="px-8 pb-8 pt-2 text-gray-300 leading-relaxed">{faq.a}</div>
// //                 )}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final CTA */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-950/30 to-black">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
// //             Ready to Get Content That <span className="text-red-500">Sells</span>?
// //           </motion.h2>

// //           <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
// //             Let AI Knots help your Bhopal business stand out with words that connect and convert.
// //           </motion.p>

// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.98 }}
// //             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
// //           >
// //             Contact Us Today <ArrowRight className="w-8 h-8" />
// //           </motion.button>

// //         </div>

// //       </section>

// //         <button
// //         onClick={scrollToTop}
// //         className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
// //           showScrollTop
// //             ? "opacity-100 translate-y-0"
// //             : "opacity-0 translate-y-16 pointer-events-none"
// //         }`}
// //         aria-label="Scroll back to top"
// //       >
// //         <svg
// //           className="w-6 h-6"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth={2}
// //             d="M5 10l7-7m0 0l7 7m-7-7v18"
// //           />
// //         </svg>
// //       </button>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useTheme } from "../../context/ThemeContext";
// import {
//   Pen,
//   FileText,
//   Newspaper,
//   Link,
//   BookOpen,
//   Megaphone,
//   Code,
//   Mail,
//   CheckCircle2,
//   ArrowRight,
//   Globe,
//   Zap
// } from "lucide-react";

// // Selected images for visual appeal
// const images = {
//   hero: "https://framerusercontent.com/images/1VvwbJM00c9GavOhO9e1DTdMg.jpg?width=1920&height=1080",
//   contentExamples: "https://designmodo.com/wp-content/uploads/2024/11/email-design-trends-2025.jpg",
//   bhopalLocal: "https://media.licdn.com/dms/image/v2/D4D22AQEi5Cvxfd_t-g/feedshare-shrink_800/B4DZrABYmtIMAg-/0/1764158180158?e=2147483647&v=beta&t=O1BquIYxDkYWQmO3xUD-S_7bEe4u8Rdb5wU1wpB7-Pk",
//   newsletter: "https://piktochart.com/wp-content/uploads/2024/04/company-newsletter-examples-featured-image.png",
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// };

// const services = [
//   { icon: FileText, title: "Website Content Writing", desc: "Clear, engaging, SEO-friendly copy that turns visitors into customers." },
//   { icon: BookOpen, title: "Blog Writing", desc: "High-value blogs that boost rankings, traffic, and audience trust." },
//   { icon: Newspaper, title: "Press Release Writing", desc: "Professional releases to amplify your brand message and visibility." },
//   { icon: Link, title: "Guest Posting", desc: "Strategic placements on authoritative sites for reach and strong backlinks." },
//   { icon: Pen, title: "Article Writing", desc: "Well-researched, readable articles that establish brand authority." },
//   { icon: Megaphone, title: "Ad Copy Writing", desc: "Compelling ads for Google, Facebook, Instagram that drive clicks and sales." },
//   { icon: Code, title: "Technical Writing", desc: "Simplified explanations of complex topics for better understanding." },
//   { icon: Mail, title: "Email & Newsletter Writing", desc: "Engaging sequences that nurture leads and increase conversions." },
// ];

// const whyChoose = [
//   "100% Human Content – Authentic and emotionally resonant",
//   "In-House Writers – Consistent quality aligned with your voice",
//   "Plagiarism-Free Content – Always original and checked",
//   "SEO-Optimized Content – Keyword-rich for better rankings",
//   "Content That Engages and Converts – Designed for real results",
// ];

// const engagementPoints = [
//   "Grabs attention with powerful headlines and hooks",
//   "Builds trust through valuable, authentic storytelling",
//   "Drives action with clear CTAs and persuasive messaging",
// ];

// const industries = [
//   "Education", "E-commerce", "Healthcare", "Real Estate",
//   "Technology & IT", "Finance", "Travel & Hospitality",
//   "Startups & Local Businesses in Bhopal"
// ];

// const faqs = [
//   { q: "What types of content writing services do you offer?", a: "We offer website content, blog writing, SEO content, ad copy, social media content, email marketing content, and more based on your business needs." },
//   { q: "Is your content SEO-friendly?", a: "Yes, all our content is written with proper keyword research and SEO structure to help your website rank better on search engines." },
//   { q: "How long does it take to deliver content?", a: "Delivery time depends on the project size, but most content is delivered within 2 to 5 working days." },
//   { q: "Will the content be original?", a: "Yes, we provide 100% original and plagiarism-free content that is tailored specifically for your brand." },
//   { q: "Can you write content for my specific industry?", a: "Yes, we create content for various industries like education, healthcare, real estate, eCommerce, and more." },
// ];

// export default function ContentWritingBranding() {
//   const { isDark } = useTheme();   // ← Proper Theme Hook

//   const [openFaq, setOpenFaq] = useState(null);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   // ====================== THEME CLASSES ======================
//   const cardClass = isDark
//     ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-600/60 rounded-2xl p-10 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//     : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl rounded-2xl p-10 transition-all group text-center";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";

//   return (
//     <div className={`min-h-screen transition-colors duration-700 overflow-hidden
//       ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>

//       {/* ====================== HERO SECTION ====================== */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Creative Content Writing Workspace"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//           <div className={`absolute inset-0 transition-all duration-700
//             ${isDark
//               ? "bg-gradient-to-t from-black via-black/80 to-transparent"
//               : "bg-gradient-to-t from-black/70 via-black/60 to-transparent"}`}
//           />
//         </div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
//           >
//             Content Writing & Branding Services in{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Bhopal</span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl font-bold text-red-500 mb-8"
//           >
//             Turn Your Ideas Into Words That Sell
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             Your brand deserves content that connects, engages, and converts.
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             At AI Knots IT Solutions, we create simple, clear, and impactful content for websites, blogs, ads, emails, and more — tailored for Bhopal businesses and beyond.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free Content Consultation <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all
//               ${isDark
//                 ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
//                 : "border-red-600 text-red-600 hover:bg-red-50"}`}>
//               Contact Us
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Visual: Modern Email/Newsletter Examples */}
//       <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}>
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h3
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-3xl font-bold mb-8 ${headingClass}`}
//           >
//             Engaging Email & Newsletter Designs That Convert
//           </motion.h3>
//           <motion.img
//             src={images.newsletter}
//             alt="Modern Newsletter Layout Examples"
//             className="rounded-2xl shadow-2xl mx-auto w-full max-w-5xl"
//           />
//         </div>
//       </section>

//       {/* Services */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Content Marketing <span className={accentClass}>Services</span> We Offer
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((serv, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={cardClass}
//               >
//                 <serv.icon className={`w-16 h-16 mx-auto mb-6 ${accentClass} group-hover:scale-110 transition-transform`} />
//                 <h3 className={`text-2xl font-bold mb-4 ${headingClass}`}>{serv.title}</h3>
//                 <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Why Choose AI Knots as Your{" "}
//             <span className={accentClass}>Content Partner</span> in Bhopal
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChoose.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={cardClass}
//               >
//                 <div className="flex items-center justify-center gap-4">
//                   <CheckCircle2 className={`w-8 h-8 flex-shrink-0 ${accentClass}`} />
//                   <p className={`text-lg font-semibold ${bodyClass}`}>{point}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Content That Engages */}
//       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
//           >
//             Content That <span className={accentClass}>Engages and Converts</span>
//           </motion.h2>

//           <p className={`text-xl mb-10 max-w-4xl mx-auto ${bodyClass}`}>
//             Good content is not just about writing — it’s about results.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {engagementPoints.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={cardClass}
//               >
//                 <Zap className={`w-12 h-12 mx-auto mb-6 ${accentClass}`} />
//                 <p className={`text-lg font-semibold ${bodyClass}`}>{point}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Local Bhopal Visual */}
//       <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}>
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.img
//             src={images.bhopalLocal}
//             alt="Futuristic Bhopal - Growing Hub for Businesses"
//             className="rounded-2xl shadow-2xl mx-auto w-full max-w-5xl"
//           />
//           <p className={`mt-6 text-xl ${bodyClass}`}>
//             Empowering Bhopal businesses with powerful, local-first content strategies.
//           </p>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
//           >
//             Industries We <span className={accentClass}>Serve</span> in Bhopal & Beyond
//           </motion.h2>

//           <div className="flex flex-wrap justify-center gap-6">
//             {industries.map((ind, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.05 }}
//                 className={`border rounded-full px-8 py-4 text-lg font-medium flex items-center gap-3 transition-all
//                   ${isDark
//                     ? "bg-red-950/40 border-red-800/50"
//                     : "bg-white border-red-200 shadow"}`}
//               >
//                 <Globe className={`w-6 h-6 ${accentClass}`} /> {ind}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}>
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Frequently Asked <span className={accentClass}>Questions</span>
//           </motion.h2>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`border rounded-xl overflow-hidden transition-all
//                   ${isDark
//                     ? "border-gray-800 bg-gray-900/30"
//                     : "border-gray-200 bg-white shadow"}`}
//               >
//                 <button
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors
//                     ${isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-100"}`}
//                 >
//                   <span className={`text-xl font-bold ${headingClass}`}>{faq.q}</span>
//                   <span className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
//                 </button>
//                 {openFaq === idx && (
//                   <div className={`px-8 pb-8 pt-2 leading-relaxed ${bodyClass}`}>{faq.a}</div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-br from-red-950/30 to-black" : "bg-red-50"}`}>
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
//           >
//             Ready to Get Content That <span className={accentClass}>Sells</span>?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${bodyClass}`}
//           >
//             Let AI Knots help your Bhopal business stand out with words that connect and convert.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
//           >
//             Contact Us Today <ArrowRight className="w-8 h-8" />
//           </motion.button>
//         </div>
//       </section>

//       {/* Scroll to Top Button */}
//       <button
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

// export default ContentWritingBranding;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  Pen,
  FileText,
  Newspaper,
  Link,
  BookOpen,
  Megaphone,
  Code,
  Mail,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
} from "lucide-react";

// Selected images
const images = {
  hero: "https://framerusercontent.com/images/1VvwbJM00c9GavOhO9e1DTdMg.jpg?width=1920&height=1080",
  contentExamples:
    "https://designmodo.com/wp-content/uploads/2024/11/email-design-trends-2025.jpg",
  bhopalLocal:
    "https://media.licdn.com/dms/image/v2/D4D22AQEi5Cvxfd_t-g/feedshare-shrink_800/B4DZrABYmtIMAg-/0/1764158180158?e=2147483647&v=beta&t=O1BquIYxDkYWQmO3xUD-S_7bEe4u8Rdb5wU1wpB7-Pk",
  newsletter:
    "https://piktochart.com/wp-content/uploads/2024/04/company-newsletter-examples-featured-image.png",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: FileText,
    title: "Website Content Writing",
    desc: "Clear, engaging, SEO-friendly copy that turns visitors into customers.",
  },
  {
    icon: BookOpen,
    title: "Blog Writing",
    desc: "High-value blogs that boost rankings, traffic, and audience trust.",
  },
  {
    icon: Newspaper,
    title: "Press Release Writing",
    desc: "Professional releases to amplify your brand message and visibility.",
  },
  {
    icon: Link,
    title: "Guest Posting",
    desc: "Strategic placements on authoritative sites for reach and strong backlinks.",
  },
  {
    icon: Pen,
    title: "Article Writing",
    desc: "Well-researched, readable articles that establish brand authority.",
  },
  {
    icon: Megaphone,
    title: "Ad Copy Writing",
    desc: "Compelling ads for Google, Facebook, Instagram that drive clicks and sales.",
  },
  {
    icon: Code,
    title: "Technical Writing",
    desc: "Simplified explanations of complex topics for better understanding.",
  },
  {
    icon: Mail,
    title: "Email & Newsletter Writing",
    desc: "Engaging sequences that nurture leads and increase conversions.",
  },
];

const whyChoose = [
  "100% Human Content – Authentic and emotionally resonant",
  "In-House Writers – Consistent quality aligned with your voice",
  "Plagiarism-Free Content – Always original and checked",
  "SEO-Optimized Content – Keyword-rich for better rankings",
  "Content That Engages and Converts – Designed for real results",
];

const engagementPoints = [
  "Grabs attention with powerful headlines and hooks",
  "Builds trust through valuable, authentic storytelling",
  "Drives action with clear CTAs and persuasive messaging",
];

const industries = [
  "Education",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Technology & IT",
  "Finance",
  "Travel & Hospitality",
  "Startups & Local Businesses in Bhopal",
];

const faqs = [
  {
    q: "What types of content writing services do you offer?",
    a: "We offer website content, blog writing, SEO content, ad copy, social media content, email marketing content, and more based on your business needs.",
  },
  {
    q: "Is your content SEO-friendly?",
    a: "Yes, all our content is written with proper keyword research and SEO structure to help your website rank better on search engines.",
  },
  {
    q: "How long does it take to deliver content?",
    a: "Delivery time depends on the project size, but most content is delivered within 2 to 5 working days.",
  },
  {
    q: "Will the content be original?",
    a: "Yes, we provide 100% original and plagiarism-free content that is tailored specifically for your brand.",
  },
  {
    q: "Can you write content for my specific industry?",
    a: "Yes, we create content for various industries like education, healthcare, real estate, eCommerce, and more.",
  },
];

export default function ContentWritingBranding() {
  const { isDark } = useTheme();

  const [openFaq, setOpenFaq] = useState(null);

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-600/60 rounded-2xl p-10 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl rounded-2xl p-10 transition-all group text-center";

  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-500";

  return (
    <div
      className={`min-h-screen transition-colors duration-700 overflow-hidden
      ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Creative Content Writing Workspace"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className={`absolute inset-0 transition-all duration-700
            ${
              isDark
                ? "bg-gradient-to-t from-black via-black/80 to-transparent"
                : "bg-gradient-to-t from-black/70 via-black/60 to-transparent"
            }`}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight ${headingClass}`}
          >
            Content Writing & Branding Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Bhopal
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-red-500 mb-8"
          >
            Turn Your Ideas Into Words That Sell
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
          >
            Your brand deserves content that connects, engages, and converts.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
          >
            At AI Knots IT Solutions, we create simple, clear, and impactful
            content for websites, blogs, ads, emails, and more — tailored for
            Bhopal businesses and beyond.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free Content Consultation{" "}
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all
              ${
                isDark
                  ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual: Modern Email/Newsletter Examples */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 ${headingClass}`}
          >
            Engaging Email & Newsletter Designs That Convert
          </motion.h3>
          <motion.img
            src={images.newsletter}
            alt="Modern Newsletter Layout Examples"
            className="rounded-2xl shadow-2xl mx-auto w-full max-w-5xl"
          />
        </div>
      </section>

      {/* Services */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Content Marketing <span className={accentClass}>Services</span> We
            Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((serv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <serv.icon
                  className={`w-16 h-16 mx-auto mb-6 ${accentClass} group-hover:scale-110 transition-transform`}
                />
                <h3 className={`text-2xl font-bold mb-4 ${headingClass}`}>
                  {serv.title}
                </h3>
                <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why Choose AI Knots as Your{" "}
            <span className={accentClass}>Content Partner</span> in Bhopal
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <div className="flex items-center justify-center gap-4">
                  <CheckCircle2
                    className={`w-8 h-8 flex-shrink-0 ${accentClass}`}
                  />
                  <p className={`text-lg font-semibold ${bodyClass}`}>
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content That Engages */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
          >
            Content That{" "}
            <span className={accentClass}>Engages and Converts</span>
          </motion.h2>

          <p className={`text-xl mb-10 max-w-4xl mx-auto ${bodyClass}`}>
            Good content is not just about writing — it’s about results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <Zap className={`w-12 h-12 mx-auto mb-6 ${accentClass}`} />
                <p className={`text-lg font-semibold ${bodyClass}`}>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Bhopal Visual */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.img
            src={images.bhopalLocal}
            alt="Futuristic Bhopal - Growing Hub for Businesses"
            className="rounded-2xl shadow-2xl mx-auto w-full max-w-5xl"
          />
          <p className={`mt-6 text-xl ${bodyClass}`}>
            Empowering Bhopal businesses with powerful, local-first content
            strategies.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
          >
            Industries We <span className={accentClass}>Serve</span> in Bhopal &
            Beyond
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-full px-8 py-4 text-lg font-medium flex items-center gap-3 transition-all
                  ${
                    isDark
                      ? "bg-red-950/40 border-red-800/50"
                      : "bg-white border-red-200 shadow"
                  }`}
              >
                <Globe className={`w-6 h-6 ${accentClass}`} /> {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Frequently Asked <span className={accentClass}>Questions</span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-xl overflow-hidden transition-all
                  ${
                    isDark
                      ? "border-gray-800 bg-gray-900/30"
                      : "border-gray-200 bg-white shadow"
                  }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors
                    ${isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-100"}`}
                >
                  <span className={`text-xl font-bold ${headingClass}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    className={`px-8 pb-8 pt-2 leading-relaxed ${bodyClass}`}
                  >
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-br from-red-950/30 to-black" : "bg-red-50"}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
          >
            Ready to Get Content That <span className={accentClass}>Sells</span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${bodyClass}`}
          >
            Let AI Knots help your Bhopal business stand out with words that
            connect and convert.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
          >
            Contact Us Today <ArrowRight className="w-8 h-8" />
          </motion.button>
        </div>
      </section>

      {/* Scroll to Top Button */}
    </div>
  );
}
