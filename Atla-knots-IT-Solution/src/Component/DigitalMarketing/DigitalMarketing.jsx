// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Users,
//   Megaphone,
//   Search,
//   Mail,
//   TrendingUp,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// // Random high-quality images (you can replace later with your own)
// const images = {
//   hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   strategy:
//     "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   analytics:
//     "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   growth:
//     "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     icon: Users,
//     title: "Social Media Management",
//     desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction.",
//   },
//   {
//     icon: Megaphone,
//     title: "Content Marketing",
//     desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth.",
//   },
//   {
//     icon: Search,
//     title: "Search Engine Optimization",
//     desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online.",
//   },
//   {
//     icon: Mail,
//     title: "Email Marketing",
//     desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Social Media Advertisements",
//     desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms.",
//   },
//   {
//     icon: BarChart3,
//     title: "Google Ads Management",
//     desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment.",
//   },
// ];

// const industries = [
//   "Advertising and Media",
//   "Construction and Builders",
//   "Education and Training",
//   "Finance and Insurance",
//   "Healthcare and Medical Services",
//   "E-Commerce",
//   "Entertainment",
//   "Real Estate",
//   "Hospitality",
//   "Engineering Services",
//   "Health and Wellness",
//   "Technology",
//   "Automobile Services",
//   "Property Management",
//   "Business Consulting",
//   "Home Renovation",
//   "Beauty and Wellness",
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };
// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// export default function DigitalMarketing() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Modern digital marketing strategy workspace"
//             className="w-full h-full object-cover opacity-30 brightness-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
//           >
//             Driving Growth with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Proven Digital Marketing Strategies
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-2xl md:text-3xl font-bold text-red-400 mb-6"
//           >
//             Powering Growth with a Top Digital Marketing Agency
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
//           >
//             Partner with{" "}
//             <span className="text-red-400 font-semibold">
//               Atlas Knots IT Solution
//             </span>
//             , one of India’s trusted digital marketing companies, and grow your
//             business with smart online marketing strategies.
//             <br />
//             <br />
//             Our team helps businesses increase their online presence, reach the
//             right audience, and generate quality leads through well-planned
//             digital marketing campaigns.
//             <br />
//             <br />
//             Partner with a leading digital marketing company in India to grow
//             your brand online.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Request a Quote{" "}
//               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Free Consultation
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Transform Your Vision Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-6"
//             >
//               Transform Your Vision into{" "}
//               <span className="text-red-500">Digital Success</span>
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-2xl md:text-3xl text-red-400 font-bold mb-8"
//             >
//               With India’s Trusted Digital Marketing Services
//             </motion.p>
//             <motion.p
//               variants={fadeInUp}
//               className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
//             >
//               At Atlas Knots IT Solution, we help businesses turn their ideas
//               into real digital success through practical and effective
//               marketing strategies.
//             </motion.p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <h3 className="text-4xl font-black mb-6 text-red-500 group-hover:text-red-400 transition-colors">
//                   {title}
//                 </h3>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   {title === "Be Unique" &&
//                     "Get digital marketing strategies designed specifically for your business goals and target audience."}
//                   {title === "Be Scalable" &&
//                     "Grow your business with flexible marketing solutions that can expand as your company grows."}
//                   {title === "Be Future Ready" &&
//                     "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center mb-16"
//           >
//             At Atlas Knots IT Solution, we create customized digital marketing
//             strategies that help businesses strengthen their brand presence,
//             manage campaigns smoothly, and build long-term engagement with
//             customers.
//             <br />
//             <br />
//             As a trusted digital marketing company in India, we understand that
//             every business has different goals. That is why our team creates
//             tailored marketing solutions that help generate leads, increase
//             website traffic, and improve customer connections.
//             <br />
//             <br />
//             Our strategies focus on helping businesses grow through practical,
//             measurable, and result-focused marketing campaigns.
//             <br />
//             <br />
//             With years of experience in digital marketing services, our team
//             ensures smooth campaign management, data-driven decisions, and
//             continuous improvements.
//             <br />
//             <br />
//             From strategy planning to campaign optimization, our services are
//             designed to support long-term business growth and build a strong
//             digital presence.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <button className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
//               Connect with a Leading Digital Marketing Agency in India →
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Complete Solutions + Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-12"
//           >
//             Complete Digital Marketing{" "}
//             <span className="text-red-500">Solutions</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
//           >
//             At Atlas Knots IT Solution, we provide reliable and effective
//             digital marketing solutions that help businesses build a strong
//             brand presence and achieve real results.
//             <br />
//             <br />
//             Our services are designed to match your business goals and help you
//             reach the right audience at the right time.
//           </motion.p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <service.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-300 text-center leading-relaxed text-lg">
//                   {service.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Innovation Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-12"
//           >
//             Innovation That Drives{" "}
//             <span className="text-red-500">Business Growth</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
//           >
//             At Atlas Knots IT Solution, we believe digital marketing should
//             focus on real results and long-term success.
//             <br />
//             <br />
//             Our team works with businesses of all sizes to create marketing
//             strategies that improve brand visibility, increase engagement, and
//             support sustainable growth.
//             <br />
//             <br />
//             Whether you are a startup or an established company, we help you use
//             digital marketing effectively to reach your audience and grow your
//             brand online.
//           </motion.p>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.growth}
//             alt="Business growth through digital marketing"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover"
//           />
//         </div>
//       </section>

//       {/* Process + Our Work + Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Our <span className="text-red-500">Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-5 gap-6 text-center mb-20">
//             {[
//               "01 Discovery & Strategy",
//               "02 Research & Planning",
//               "03 Creative Implementation",
//               "04 Optimization & SEO",
//               "05 Analytics & Reporting",
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/50 rounded-xl p-8 hover:border-red-600 transition-all min-h-[200px] flex flex-col justify-center shadow-lg"
//               >
//                 <div className="text-4xl font-black text-red-500 mb-4">
//                   {step.split(" ")[0]}
//                 </div>
//                 <p className="font-bold text-lg">
//                   {step.split(" ").slice(1).join(" ")}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-20"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-black mb-8"
//             >
//               Our <span className="text-red-500">Work</span>
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
//             >
//               Our portfolio reflects our experience in building strong digital
//               platforms and marketing strategies for businesses.
//               <br />
//               <br />
//               We help companies improve their online presence, attract
//               customers, and grow their brand through well-designed websites and
//               digital marketing campaigns.
//             </motion.p>
//           </motion.div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-10"
//             >
//               Let’s Elevate Your Brand with{" "}
//               <span className="text-red-500">Digital Marketing</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//             >
//               At Atlas Knots IT Solution, we believe every business has the
//               potential to grow online with the right strategy.
//               <br />
//               <br />
//               If you want to improve your brand visibility, generate more leads,
//               and expand your business, our team is ready to help.
//               <br />
//               <br />
//               Contact us today and start your digital growth journey with Atlas
//               Knots IT Solution.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//             >
//               Get Started Today →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Users,
//   Megaphone,
//   Search,
//   Mail,
//   TrendingUp,
//   Sun,
//   Moon,
// } from "lucide-react";

// // Random high-quality images (you can replace later with your own)
// const images = {
//   hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   strategy:
//     "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   analytics:
//     "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   growth:
//     "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     icon: Users,
//     title: "Social Media Management",
//     desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction.",
//   },
//   {
//     icon: Megaphone,
//     title: "Content Marketing",
//     desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth.",
//   },
//   {
//     icon: Search,
//     title: "Search Engine Optimization",
//     desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online.",
//   },
//   {
//     icon: Mail,
//     title: "Email Marketing",
//     desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Social Media Advertisements",
//     desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms.",
//   },
//   {
//     icon: BarChart3,
//     title: "Google Ads Management",
//     desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment.",
//   },
// ];

// const industries = [
//   "Advertising and Media",
//   "Construction and Builders",
//   "Education and Training",
//   "Finance and Insurance",
//   "Healthcare and Medical Services",
//   "E-Commerce",
//   "Entertainment",
//   "Real Estate",
//   "Hospitality",
//   "Engineering Services",
//   "Health and Wellness",
//   "Technology",
//   "Automobile Services",
//   "Property Management",
//   "Business Consulting",
//   "Home Renovation",
//   "Beauty and Wellness",
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };
// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// export default function DigitalMarketing() {
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark")
//   );

//   // Listen for external theme changes
//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className={`relative min-h-screen overflow-hidden transition-colors duration-500
//       ${isDark
//         ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
//         : "bg-white text-gray-900"
//       }`}>

//       {/* Theme Toggle Button */}

//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Modern digital marketing strategy workspace"
//             className="w-full h-full object-cover opacity-30 brightness-50"
//           />
//           <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-black via-black/80 to-transparent" : "from-white via-white/90 to-transparent"}`} />
//         </div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
//           >
//             Driving Growth with{" "}
//             <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? "from-red-500 to-red-600" : "from-blue-600 to-indigo-600"}`}>
//               Proven Digital Marketing Strategies
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? "text-red-400" : "text-blue-600"}`}
//           >
//             Powering Growth with a Top Digital Marketing Agency
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//           >
//             Partner with{" "}
//             <span className={isDark ? "text-red-400 font-semibold" : "text-blue-600 font-semibold"}>
//               Atlas Knots IT Solution
//             </span>
//             , one of India’s trusted digital marketing companies, and grow your
//             business with smart online marketing strategies.
//             <br />
//             <br />
//             Our team helps businesses increase their online presence, reach the
//             right audience, and generate quality leads through well-planned
//             digital marketing campaigns.
//             <br />
//             <br />
//             Partner with a leading digital marketing company in India to grow
//             your brand online.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <button className={`px-12 py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl transition-all flex items-center gap-3 group
//               ${isDark
//                 ? "bg-gradient-to-r from-red-600 to-red-800 shadow-red-900/60 hover:shadow-red-700/80"
//                 : "bg-gradient-to-r from-blue-600 to-indigo-700 shadow-blue-900/60 hover:shadow-blue-700/80 text-white"
//               }`}>
//               Request a Quote{" "}
//               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all
//               ${isDark
//                 ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
//                 : "border-blue-600 text-blue-600 hover:bg-blue-50"
//               }`}>
//               Free Consultation
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Transform Your Vision Section */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-50"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-6"
//             >
//               Transform Your Vision into{" "}
//               <span className={isDark ? "text-red-500" : "text-blue-600"}>Digital Success</span>
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-red-400" : "text-blue-600"}`}
//             >
//               With India’s Trusted Digital Marketing Services
//             </motion.p>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               At Atlas Knots IT Solution, we help businesses turn their ideas
//               into real digital success through practical and effective
//               marketing strategies.
//             </motion.p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className={`border rounded-2xl p-10 text-center hover:shadow-2xl transition-all group
//                   ${isDark
//                     ? "bg-gradient-to-br from-gray-900 to-black border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
//                     : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl"
//                   }`}
//               >
//                 <h3 className={`text-4xl font-black mb-6 transition-colors ${isDark ? "text-red-500 group-hover:text-red-400" : "text-blue-600 group-hover:text-blue-700"}`}>
//                   {title}
//                 </h3>
//                 <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                   {title === "Be Unique" &&
//                     "Get digital marketing strategies designed specifically for your business goals and target audience."}
//                   {title === "Be Scalable" &&
//                     "Grow your business with flexible marketing solutions that can expand as your company grows."}
//                   {title === "Be Future Ready" &&
//                     "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

// <motion.p
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-center mb-16 ${isDark ? "text-gray-300" : "text-gray-700"}`}
// >
//   At Atlas Knots IT Solution, we create customized digital marketing
//   strategies that help businesses strengthen their brand presence,
//   manage campaigns smoothly, and build long-term engagement with
//   customers.
//   <br />
//   <br />
//   As a trusted digital marketing company in India, we understand that
//   every business has different goals. That is why our team creates
//   tailored marketing solutions that help generate leads, increase
//   website traffic, and improve customer connections.
//   <br />
//   <br />
//   Our strategies focus on helping businesses grow through practical,
//   measurable, and result-focused marketing campaigns.
//   <br />
//   <br />
//   With years of experience in digital marketing services, our team
//   ensures smooth campaign management, data-driven decisions, and
//   continuous improvements.
//   <br />
//   <br />
//   From strategy planning to campaign optimization, our services are
//   designed to support long-term business growth and build a strong
//   digital presence.
// </motion.p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <button className={`px-14 py-7 rounded-full text-2xl font-bold shadow-2xl transition-all
//               ${isDark
//                 ? "bg-gradient-to-r from-red-600 to-red-800 shadow-red-900/60 hover:shadow-red-700/80"
//                 : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-blue-900/60 hover:shadow-blue-700/80"
//               }`}>
//               Connect with a Leading Digital Marketing Agency in India →
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Complete Solutions + Services */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-gray-50"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-12"
//           >
//             Complete Digital Marketing{" "}
//             <span className={isDark ? "text-red-500" : "text-blue-600"}>Solutions</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-xl text-center mb-16 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//           >
//             At Atlas Knots IT Solution, we provide reliable and effective
//             digital marketing solutions that help businesses build a strong
//             brand presence and achieve real results.
//             <br />
//             <br />
//             Our services are designed to match your business goals and help you
//             reach the right audience at the right time.
//           </motion.p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`border rounded-2xl p-10 hover:shadow-2xl transition-all group
//                   ${isDark
//                     ? "bg-gray-900/70 backdrop-blur-sm border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
//                     : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl"
//                   }`}
//               >
//                 <service.icon className={`w-16 h-16 mb-8 mx-auto transition-transform group-hover:scale-110 ${isDark ? "text-red-500" : "text-blue-600"}`} />
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//                   {service.title}
//                 </h3>
//                 <p className={`text-center leading-relaxed text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                   {service.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Innovation Section */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-white"}`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-12"
//           >
//             Innovation That Drives{" "}
//             <span className={isDark ? "text-red-500" : "text-blue-600"}>Business Growth</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-xl md:text-2xl mb-16 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//           >
//             At Atlas Knots IT Solution, we believe digital marketing should
//             focus on real results and long-term success.
//             <br />
//             <br />
//             Our team works with businesses of all sizes to create marketing
//             strategies that improve brand visibility, increase engagement, and
//             support sustainable growth.
//             <br />
//             <br />
//             Whether you are a startup or an established company, we help you use
//             digital marketing effectively to reach your audience and grow your
//             brand online.
//           </motion.p>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.growth}
//             alt="Business growth through digital marketing"
//             className={`rounded-2xl shadow-2xl mx-auto max-w-4xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
//           />
//         </div>
//       </section>

//       {/* Process + Our Work + Final CTA */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-gray-50"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Our <span className={isDark ? "text-red-500" : "text-blue-600"}>Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-5 gap-6 text-center mb-20">
//             {[
//               "01 Discovery & Strategy",
//               "02 Research & Planning",
//               "03 Creative Implementation",
//               "04 Optimization & SEO",
//               "05 Analytics & Reporting",
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className={`border rounded-xl p-8 hover:border-red-600 transition-all min-h-[200px] flex flex-col justify-center shadow-lg
//                   ${isDark
//                     ? "bg-gradient-to-br from-gray-900 to-black border-red-900/50"
//                     : "bg-white border-gray-200"
//                   }`}
//               >
//                 <div className={`text-4xl font-black mb-4 ${isDark ? "text-red-500" : "text-blue-600"}`}>
//                   {step.split(" ")[0]}
//                 </div>
//                 <p className="font-bold text-lg">
//                   {step.split(" ").slice(1).join(" ")}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-20"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-black mb-8"
//             >
//               Our <span className={isDark ? "text-red-500" : "text-blue-600"}>Work</span>
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               Our portfolio reflects our experience in building strong digital
//               platforms and marketing strategies for businesses.
//               <br />
//               <br />
//               We help companies improve their online presence, attract
//               customers, and grow their brand through well-designed websites and
//               digital marketing campaigns.
//             </motion.p>
//           </motion.div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-10"
//             >
//               Let’s Elevate Your Brand with{" "}
//               <span className={isDark ? "text-red-500" : "text-blue-600"}>Digital Marketing</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               At Atlas Knots IT Solution, we believe every business has the
//               potential to grow online with the right strategy.
//               <br />
//               <br />
//               If you want to improve your brand visibility, generate more leads,
//               and expand your business, our team is ready to help.
//               <br />
//               <br />
//               Contact us today and start your digital growth journey with Atlas
//               Knots IT Solution.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className={`px-14 py-7 rounded-full text-2xl md:text-3xl font-black shadow-2xl transition-all
//                 ${isDark
//                   ? "bg-gradient-to-r from-red-600 to-red-800 shadow-red-900/60 hover:shadow-red-700/80"
//                   : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-blue-900/60 hover:shadow-blue-700/80"
//                 }`}
//             >
//               Get Started Today →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Users,
  Megaphone,
  Search,
  Mail,
  TrendingUp,
} from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  growth:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
};

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Advertisements",
    desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Management",
    desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment.",
  },
];

const industries = [
  "Advertising and Media",
  "Construction and Builders",
  "Education and Training",
  "Finance and Insurance",
  "Healthcare and Medical Services",
  "E-Commerce",
  "Entertainment",
  "Real Estate",
  "Hospitality",
  "Engineering Services",
  "Health and Wellness",
  "Technology",
  "Automobile Services",
  "Property Management",
  "Business Consulting",
  "Home Renovation",
  "Beauty and Wellness",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function DigitalMarketing() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

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

  const accentClass = "text-red-500";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-500/60 hover:shadow-red-900/30"
    : "bg-white border border-gray-200 hover:border-red-300 hover:shadow-2xl";

  const buttonClass = `px-12 py-6 rounded-full text-xl font-bold transition-all flex items-center gap-3 group shadow-xl
    ${
      isDark
        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-900/60"
        : "bg-red-600 hover:bg-red-700 text-white shadow-red-600/50"
    }`;

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Digital marketing strategy"
            className="w-full h-full object-cover brightness-50"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${isDark ? "from-black/90 via-black/80 to-black/90" : "from-black/70 via-black/60 to-transparent"}`}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white"
          >
            Driving Growth with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-white">
              Proven Digital Marketing Strategies
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className={`text-2xl md:text-3xl font-bold mb-8 ${accentClass}`}
          >
            Powering Growth with a Top Digital Marketing Agency
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-12 ${isDark ? "text-gray-300" : "text-white/90"}`}
          >
            Partner with{" "}
            <span className="font-semibold text-red-400">
              AI Knots IT Solutions
            </span>
            , one of India’s trusted digital marketing companies. We help
            businesses increase their online presence, reach the right audience,
            and generate quality leads through smart, result-driven digital
            marketing campaigns.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className={buttonClass}>
              Request a Quote
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              className={`px-12 py-6 border-2 border-red-500/70 rounded-full text-xl font-bold transition-all
                ${
                  isDark
                    ? "text-red-400 hover:bg-red-950/60 hover:border-red-500"
                    : "text-red-600 hover:bg-red-50 border-red-600"
                }`}
            >
              Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================== TRANSFORM YOUR VISION ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-4xl md:text-6xl font-black mb-6 ${headingClass}`}
            >
              Transform Your Vision into{" "}
              <span className={accentClass}>Digital Success</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-2xl font-bold mb-8 ${accentClass}`}
            >
              With India’s Trusted Digital Marketing Services
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-3xl p-10 text-center transition-all group ${cardClass}`}
              >
                <h3 className={`text-4xl font-black mb-6 ${accentClass}`}>
                  {title}
                </h3>
                <p className={`text-lg leading-relaxed ${bodyClass}`}>
                  {title === "Be Unique" &&
                    "Get digital marketing strategies designed specifically for your business goals and target audience."}
                  {title === "Be Scalable" &&
                    "Grow your business with flexible marketing solutions that can expand as your company grows."}
                  {title === "Be Future Ready" &&
                    "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-center ${bodyClass}`}
          >
            At AI Knots IT Solutions, we create customized digital marketing strategies 
            that help businesses strengthen their brand presence, manage campaigns smoothly, 
            and build long-term engagement with customers.
          </motion.p> */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-center mb-16 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            At Atlas Knots IT Solution, we create customized digital marketing
            strategies that help businesses strengthen their brand presence,
            manage campaigns smoothly, and build long-term engagement with
            customers.
            <br />
            <br />
            As a trusted digital marketing company in India, we understand that
            every business has different goals. That is why our team creates
            tailored marketing solutions that help generate leads, increase
            website traffic, and improve customer connections.
            <br />
            <br />
            Our strategies focus on helping businesses grow through practical,
            measurable, and result-focused marketing campaigns.
            <br />
            <br />
            With years of experience in digital marketing services, our team
            ensures smooth campaign management, data-driven decisions, and
            continuous improvements.
            <br />
            <br />
            From strategy planning to campaign optimization, our services are
            designed to support long-term business growth and build a strong
            digital presence.
          </motion.p>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-6 ${headingClass}`}
          >
            Complete Digital Marketing{" "}
            <span className={accentClass}>Solutions</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-xl text-center mb-20 max-w-4xl mx-auto ${bodyClass}`}
          >
            Reliable and result-driven digital marketing services tailored to
            your business goals.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-3xl p-10 transition-all group ${cardClass}`}
              >
                <service.icon
                  className={`w-16 h-16 mb-8 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3
                  className={`text-2xl font-bold mb-6 text-center ${headingClass}`}
                >
                  {service.title}
                </h3>
                <p className={`text-center leading-relaxed ${bodyClass}`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INDUSTRIES WE SERVE ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-12 ${headingClass}`}
          >
            Industries We <span className={accentClass}>Serve</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className={`px-6 py-5 rounded-2xl text-center font-medium transition-all ${cardClass}`}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INNOVATION + GROWTH SECTION ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black mb-12 ${headingClass}`}
          >
            Innovation That Drives{" "}
            <span className={accentClass}>Business Growth</span>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.growth}
            alt="Business growth through digital marketing"
            className={`rounded-3xl shadow-2xl mx-auto max-w-5xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
          />
        </div>
      </section>

      {/* ====================== PROCESS + FINAL CTA ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
          >
            Our <span className={accentClass}>Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6 mb-24">
            {[
              "01 Discovery & Strategy",
              "02 Research & Planning",
              "03 Creative Implementation",
              "04 Optimization & SEO",
              "05 Analytics & Reporting",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 text-center min-h-[180px] flex flex-col justify-center border transition-all ${cardClass}`}
              >
                <div className={`text-5xl font-black mb-4 ${accentClass}`}>
                  {step.split(" ")[0]}
                </div>
                <p className="font-semibold text-lg">
                  {step.split(" ").slice(1).join(" ")}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
            >
              Let’s Elevate Your Brand with{" "}
              <span className={accentClass}>Digital Marketing</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${bodyClass}`}
            >
              At AI Knots IT Solutions, we believe every business has the
              potential to grow online with the right strategy. Contact us today
              and start your digital growth journey.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-16 py-7 rounded-full text-2xl font-bold transition-all ${
                isDark
                  ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-900/60"
                  : "bg-red-600 hover:bg-red-700 text-white shadow-red-600/50"
              }`}
            >
              Get Started Today →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
