// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { ArrowRight, Smartphone, Code, Globe, CheckCircle } from "lucide-react";
// // // import { useState, useEffect } from "react";
// // // // High-quality images for visual appeal (Unsplash free stock)
// // // const images = {
// // //   hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern mobile app workspace
// // //   android: "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Android app screens
// // //   ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // iOS device mockup
// // //   hybrid: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Cross-platform app development
// // //   process: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Development roadmap illustration
// // //   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Team working on apps
// // // };

// // // const services = [
// // //   {
// // //     title: "Android Application Development",
// // //     desc: "We utilize the full potential of the Android platform, using technologies like Java and Kotlin to develop smooth, reliable, and feature-rich applications. Our team follows the best practices in UI/UX design and uses advanced development tools to ensure your application meets high standards of performance and usability. From concept to final deployment, we focus on delivering Android applications that engage users and improve business productivity.",
// // //   },
// // //   {
// // //     title: "iOS Application Development",
// // //     desc: "Our iOS application development services use technologies such as Swift and Objective-C to build innovative and user-friendly applications for iPhones, iPads, and Apple devices. Using industry-leading tools like Xcode, we develop applications that are visually appealing, highly functional, and compatible with the latest iOS versions. Whether your goal is to target customers or improve business operations, we develop iOS applications that meet your expectations.",
// // //   },
// // //   {
// // //     title: "Hybrid Application Development",
// // //     desc: "Our hybrid app development services combine modern web technologies with native app capabilities to create cross-platform applications that run smoothly on both Android and iOS devices. Using frameworks like React Native and Ionic, we ensure that hybrid apps maintain the look and feel of native applications while offering faster development and cost-effective solutions. With our expertise in hybrid development, businesses can reach a larger audience without compromising performance or user experience.",
// // //   },
// // // ];

// // // const benefits = [
// // //   "Enhance customer engagement",
// // //   "Expand your market reach",
// // //   "Streamline business processes",
// // //   "Increase sales and revenue",
// // // ];

// // // const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida"];

// // // const industries = [
// // //   "Finance", "Manufacturing", "Legal & Law", "Technology & IT",
// // //   "Transportation & Automotive", "eCommerce & Retail",
// // //   "Non-Profit Organizations", "Tourism & Hospitality",
// // //   "Medical & Healthcare", "Event Management", "Real Estate", "Many More",
// // // ];

// // // const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// // // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// // // export default function MobileAppDevelopment() {

// // //   const [showScrollTop, setShowScrollTop] = useState(false);

// // //     useEffect(() => {
// // //       const handleScroll = () => {
// // //         setShowScrollTop(window.scrollY > 400);
// // //       };

// // //       window.addEventListener('scroll', handleScroll);
// // //       return () => window.removeEventListener('scroll', handleScroll);
// // //     }, []);

// // //     const scrollToTop = () => {
// // //       window.scrollTo({
// // //         top: 0,
// // //         behavior: 'smooth',
// // //       });
// // //     };
// // //   return (
// // //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// // //       {/* Hero Section with Photo */}
// // //       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
// // //         <div className="absolute inset-0">
// // //           <img
// // //             src={images.hero}
// // //             alt="Mobile app development team working in Bhopal"
// // //             className="w-full h-full object-cover opacity-30 brightness-50"
// // //           />
// // //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
// // //         </div>

// // //         <motion.div
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={staggerContainer}
// // //           className="relative z-10 max-w-7xl mx-auto text-center"
// // //         >
// // //           <motion.h1
// // //             variants={fadeInUp}
// // //             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
// // //           >
// // //             Mobile Application Development
// // //           </motion.h1>

// // //           <motion.p
// // //             variants={fadeInUp}
// // //             className="text-3xl md:text-4xl font-bold text-red-400 mb-6"
// // //           >
// // //             App Development Services in Bhopal
// // //           </motion.p>

// // //           <motion.p
// // //             variants={fadeInUp}
// // //             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
// // //           >
// // //             Our mobile application services include enriching customer experience, increasing market reach, and simplifying business processes to create the perfect balance for businesses across different industries.
// // //             <br /><br />
// // //             At Atlas Knots IT Solution, we are known for delivering reliable and innovative Mobile App Development Services in Bhopal. If you are a business professional looking to grow, innovate, and transform your ideas into digital products, we are the technology partner you can trust.
// // //           </motion.p>

// // //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// // //             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
// // //               Contact Us <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
// // //             </button>
// // //             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
// // //               View Our Work →
// // //             </button>
// // //           </motion.div>
// // //         </motion.div>
// // //       </section>

// // //       {/* Services Section with Photos */}
// // //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-4xl md:text-6xl font-black text-center mb-16"
// // //           >
// // //             Mobile App Development <span className="text-red-500">Offering</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
// // //           >
// // //             Our Atlas Knots IT Solution team offers a wide range of mobile app development services to meet the diverse requirements of businesses.
// // //           </motion.p>

// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {services.map((service, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: idx * 0.15 }}
// // //                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group relative overflow-hidden"
// // //               >
// // //                 <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
// // //                   <img
// // //                     src={idx === 0 ? images.android : idx === 1 ? images.ios : images.hybrid}
// // //                     alt={`${service.title} preview`}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>

// // //                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 text-center relative z-10">{service.title}</h3>
// // //                 <p className="text-gray-300 text-lg leading-relaxed text-center relative z-10">{service.desc}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="mt-16 text-center"
// // //           >
// // //             <h3 className="text-3xl font-bold mb-8">With Our App Development Services, You Can:</h3>
// // //             <div className="flex flex-wrap justify-center gap-6">
// // //               {benefits.map((benefit, i) => (
// // //                 <motion.div
// // //                   key={i}
// // //                   variants={fadeInUp}
// // //                   className="bg-gray-900/60 border border-red-900/40 rounded-xl px-8 py-5 text-lg font-medium hover:border-red-600/60 transition-all"
// // //                 >
// // //                   {benefit}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Development Process with Photo */}
// // //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="text-center mb-16"
// // //           >
// // //             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6">
// // //               Roadmap to our App Development <span className="text-red-500">Process</span>
// // //             </motion.h2>
// // //             <motion.img
// // //               variants={fadeInUp}
// // //               src={images.process}
// // //               alt="App development process roadmap illustration"
// // //               className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
// // //             />
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
// // //             {[
// // //               { step: "Discovery and Planning", points: ["Interacting with clients to understand their requirements and business objectives", "Conducting market research and competitor analysis", "Defining the target audience and key features of the application", "Planning project timelines and milestones"] },
// // //               { step: "Design", points: ["Creating wireframes and designing UX and UI interfaces", "Developing the app’s visual identity including colours, typography, and graphics", "Building interactive prototypes to demonstrate the application workflow"] },
// // //               { step: "Development", points: ["Implementing functionalities based on finalised designs", "Performing front-end and back-end development", "Continuous testing and improvements to ensure proper functionality"] },
// // //               { step: "Testing and Quality Assurance", points: ["Conducting detailed testing to identify bugs and technical issues", "Ensuring device compatibility across multiple platforms", "Monitoring security, performance, and overall user experience"] },
// // //               { step: "Maintenance and Updates", points: ["Monitoring application performance after launch", "Fixing bugs and addressing user feedback", "Updating applications to support new operating system versions", "Performing regular security updates and improvements"] },
// // //             ].map((phase, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={{ opacity: 0, scale: 0.9 }}
// // //                 whileInView={{ opacity: 1, scale: 1 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: idx * 0.15 }}
// // //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all min-h-[320px]"
// // //               >
// // //                 <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
// // //                 <h3 className="text-2xl font-bold mb-6 text-center">{phase.step}</h3>
// // //                 <ul className="space-y-3 text-gray-300 text-sm">
// // //                   {phase.points.map((point, i) => (
// // //                     <li key={i} className="flex items-start gap-3">
// // //                       <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
// // //                       {point}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Industries + Cities with Photos */}
// // //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-4xl md:text-5xl font-black text-center mb-12"
// // //           >
// // //             Tailored Solutions for Different <span className="text-red-500">Industries</span>
// // //           </motion.h2>

// // //           <div className="flex flex-wrap justify-center gap-4 mb-20">
// // //             {industries.map((ind, i) => (
// // //               <motion.span
// // //                 key={i}
// // //                 initial={{ opacity: 0, scale: 0.9 }}
// // //                 whileInView={{ opacity: 1, scale: 1 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: i * 0.03 }}
// // //                 className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all text-sm md:text-base"
// // //               >
// // //                 {ind}
// // //               </motion.span>
// // //             ))}
// // //           </div>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-4xl md:text-5xl font-black text-center mb-12"
// // //           >
// // //             Serving Across Major <span className="text-red-500">Cities</span>
// // //           </motion.h2>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="flex flex-wrap justify-center gap-6"
// // //           >
// // //             {cities.map((city, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 initial={{ opacity: 0, scale: 0.9 }}
// // //                 whileInView={{ opacity: 1, scale: 1 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: i * 0.05 }}
// // //                 className="px-10 py-5 bg-gray-900/70 border border-red-900/40 rounded-xl text-xl font-bold hover:border-red-600/60 transition-all shadow-lg"
// // //               >
// // //                 {city}
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Final CTA with Photo */}
// // //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-950/50 to-transparent">
// // //         <div className="max-w-5xl mx-auto text-center">
// // //           <motion.img
// // //             initial={{ opacity: 0, scale: 0.95 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             viewport={{ once: true }}
// // //             src={images.team}
// // //             alt="Mobile app development team at Atlas Knots IT Solution"
// // //             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
// // //           />

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 50 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-4xl md:text-6xl font-black mb-10"
// // //           >
// // //             What Are You Waiting For?
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 50 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
// // //           >
// // //             Our experienced developers at Atlas Knots IT Solution create user-friendly and high-performance mobile applications that help businesses grow and succeed in the digital world.
// // //             <br /><br />
// // //             Let us help you build the right mobile application for your business success.
// // //           </motion.p>

// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.98 }}
// // //             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
// // //           >
// // //             Contact Us →
// // //           </motion.button>
// // //         </div>
// // //       </section>

// // //        <button
// // //         onClick={scrollToTop}
// // //         className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
// // //           showScrollTop
// // //             ? "opacity-100 translate-y-0"
// // //             : "opacity-0 translate-y-16 pointer-events-none"
// // //         }`}
// // //         aria-label="Scroll back to top"
// // //       >
// // //         <svg
// // //           className="w-6 h-6"
// // //           fill="none"
// // //           stroke="currentColor"
// // //           viewBox="0 0 24 24"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <path
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //             strokeWidth={2}
// // //             d="M5 10l7-7m0 0l7 7m-7-7v18"
// // //           />
// // //         </svg>
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ArrowRight, CheckCircle, ArrowUp } from 'lucide-react';

// // const images = {
// //   hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   android: "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   hybrid: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   process: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// // };

// // const services = [
// //   {
// //     title: "Android Application Development",
// //     desc: "We build high-performance Android apps using Kotlin and Java. Our focus is on smooth UI/UX, scalability, and delivering exceptional user experiences that drive business growth.",
// //   },
// //   {
// //     title: "iOS Application Development",
// //     desc: "Premium iOS apps built with Swift and SwiftUI. We create fast, secure, and visually stunning applications optimized for the entire Apple ecosystem.",
// //   },
// //   {
// //     title: "Hybrid & Cross-Platform Development",
// //     desc: "Develop once and deploy everywhere using React Native and Flutter. We deliver near-native performance with faster development and lower costs.",
// //   },
// // ];

// // const benefits = [
// //   "Enhance customer engagement",
// //   "Expand your market reach",
// //   "Streamline business processes",
// //   "Increase sales and revenue",
// // ];

// // const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida"];

// // const industries = [
// //   "Finance", "Manufacturing", "Legal & Law", "Technology & IT",
// //   "Transportation & Automotive", "eCommerce & Retail",
// //   "Non-Profit Organizations", "Tourism & Hospitality",
// //   "Medical & Healthcare", "Event Management", "Real Estate", "Many More",
// // ];

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// // };

// // const staggerContainer = {
// //   hidden: { opacity: 1 },
// //   visible: { transition: { staggerChildren: 0.15 } }
// // };

// // export default function MobileAppDevelopment() {
// //   const [showScrollTop, setShowScrollTop] = useState(false);
// //   const [isDark, setIsDark] = useState(() =>
// //     document.documentElement.classList.contains("dark")
// //   );

// //   // Dark mode observer (same as your Service page)
// //   useEffect(() => {
// //     const observer = new MutationObserver(() => {
// //       setIsDark(document.documentElement.classList.contains("dark"));
// //     });
// //     observer.observe(document.documentElement, {
// //       attributes: true,
// //       attributeFilter: ["class"]
// //     });
// //     return () => observer.disconnect();
// //   }, []);

// //   // Scroll to top
// //   useEffect(() => {
// //     const handleScroll = () => setShowScrollTop(window.scrollY > 400);
// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   return (
// //     <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
// //       ${isDark
// //         ? "bg-black text-white"
// //         : "bg-gray-50 text-gray-900"
// //       }`}>

// //       {/* Background Gradient */}
// //       <div className={`absolute inset-0 z-0 ${isDark
// //         ? "bg-gradient-to-b from-black via-gray-950 to-black"
// //         : "bg-gradient-to-b from-gray-50 via-white to-red-50/30"
// //       }`} />

// //       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24">

// //         {/* Hero Section */}
// //         <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20">
// //           <div className="absolute inset-0">
// //             <img
// //               src={images.hero}
// //               alt="Mobile app development team in Bhopal"
// //               className="w-full h-full object-cover opacity-30 brightness-75"
// //             />
// //             <div className={`absolute inset-0 ${isDark
// //               ? "bg-gradient-to-t from-black via-black/90 to-transparent"
// //               : "bg-gradient-to-t from-white via-white/90 to-transparent"
// //             }`} />
// //           </div>

// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={staggerContainer}
// //             className="relative z-10 text-center max-w-5xl mx-auto"
// //           >
// //             <motion.h1
// //               variants={fadeInUp}
// //               className="text-5xl md:text-7xl font-black tracking-tight mb-6"
// //             >
// //               Mobile Application <span className="text-red-500">Development</span>
// //             </motion.h1>

// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-red-400" : "text-red-600"}`}
// //             >
// //               App Development Services in Bhopal
// //             </motion.p>

// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
// //             >
// //               We deliver reliable and innovative mobile app solutions that enhance customer experience,
// //               expand market reach, and simplify business processes.
// //               Atlas Knots IT Solution is your trusted technology partner in Bhopal.
// //             </motion.p>

// //             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 group transition-all hover:scale-105">
// //                 Contact Us
// //                 <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
// //               </button>
// //               <button className={`px-12 py-6 border-2 rounded-full text-xl font-bold transition-all
// //                 ${isDark
// //                   ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
// //                   : "border-red-600 text-red-600 hover:bg-red-50"
// //                 }`}>
// //                 View Our Work →
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         </section>

// //         {/* Services Section */}
// //         <section className={`py-24 px-4 sm:px-6 lg:px-8 rounded-3xl my-12
// //           ${isDark ? "bg-black/60" : "bg-white shadow-xl"}`}>
// //           <div className="max-w-7xl mx-auto">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className="text-4xl md:text-6xl font-black text-center mb-6"
// //             >
// //               Our Mobile App <span className="text-red-500">Development Services</span>
// //             </motion.h2>

// //             <motion.p
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className={`text-xl text-center mb-16 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
// //             >
// //               We offer a complete range of mobile app development services tailored to your business needs.
// //             </motion.p>

// //             <div className="grid md:grid-cols-3 gap-8">
// //               {services.map((service, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   className={`group relative overflow-hidden rounded-3xl p-10 border transition-all hover:-translate-y-2
// //                     ${isDark
// //                       ? "bg-gray-950 border-red-900/50 hover:border-red-600"
// //                       : "bg-white border-gray-200 hover:border-red-400 shadow-lg"
// //                     }`}
// //                 >
// //                   <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
// //                     <img
// //                       src={idx === 0 ? images.android : idx === 1 ? images.ios : images.hybrid}
// //                       alt={service.title}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>

// //                   <div className="relative z-10">
// //                     <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}>
// //                       {service.title}
// //                     </h3>
// //                     <p className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
// //                       {service.desc}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Benefits */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className="mt-20 text-center"
// //             >
// //               <h3 className={`text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}>
// //                 With Our App Development Services, You Can:
// //               </h3>
// //               <div className="flex flex-wrap justify-center gap-6">
// //                 {benefits.map((benefit, i) => (
// //                   <motion.div
// //                     key={i}
// //                     className={`px-8 py-5 rounded-2xl text-lg font-medium border transition-all
// //                       ${isDark
// //                         ? "bg-gray-900 border-red-900/50 hover:border-red-600"
// //                         : "bg-white border-red-200 hover:border-red-400"
// //                       }`}
// //                   >
// //                     {benefit}
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Development Process */}
// //         <section className="py-24 px-4">
// //           <div className="max-w-7xl mx-auto">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className={`text-4xl md:text-5xl font-black text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
// //             >
// //               Our App Development <span className="text-red-500">Process</span>
// //             </motion.h2>

// //             <motion.img
// //               src={images.process}
// //               alt="App development roadmap"
// //               className="rounded-3xl mx-auto mb-16 shadow-2xl border border-red-900/30 max-w-5xl w-full"
// //             />

// //             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
// //               {[
// //                 { step: "Discovery and Planning", points: ["Understanding client requirements", "Market & competitor research", "Feature planning & timeline"] },
// //                 { step: "UI/UX Design", points: ["Wireframes & prototypes", "Visual identity design", "User experience optimization"] },
// //                 { step: "Development", points: ["Frontend & backend coding", "API integration", "Feature implementation"] },
// //                 { step: "Testing & QA", points: ["Bug testing", "Cross-device compatibility", "Performance optimization"] },
// //                 { step: "Launch & Maintenance", points: ["App store deployment", "Regular updates", "Technical support"] },
// //               ].map((phase, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   className={`border rounded-3xl p-8 transition-all hover:border-red-600 min-h-[300px]
// //                     ${isDark
// //                       ? "bg-gray-950 border-red-900/50"
// //                       : "bg-white border-gray-200 shadow-md"
// //                     }`}
// //                 >
// //                   <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
// //                   <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>{phase.step}</h3>
// //                   <ul className={`space-y-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
// //                     {phase.points.map((point, i) => (
// //                       <li key={i} className="flex items-start gap-3">
// //                         <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
// //                         {point}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Industries & Cities */}
// //         <section className={`py-24 px-4 rounded-3xl my-12
// //           ${isDark ? "bg-gray-950" : "bg-white shadow-2xl"}`}>
// //           <div className="max-w-7xl mx-auto">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
// //             >
// //               Tailored Solutions for <span className="text-red-500">Different Industries</span>
// //             </motion.h2>

// //             <div className="flex flex-wrap justify-center gap-4 mb-20">
// //               {industries.map((ind, i) => (
// //                 <motion.span
// //                   key={i}
// //                   className={`px-6 py-3 rounded-full text-sm md:text-base border transition-all
// //                     ${isDark
// //                       ? "bg-gray-900 border-red-900/50 hover:border-red-600 text-gray-200"
// //                       : "bg-gray-100 border-gray-300 hover:border-red-400"
// //                     }`}
// //                 >
// //                   {ind}
// //                 </motion.span>
// //               ))}
// //             </div>

// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
// //             >
// //               Serving Across Major <span className="text-red-500">Cities</span>
// //             </motion.h2>

// //             <div className="flex flex-wrap justify-center gap-6">
// //               {cities.map((city, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className={`px-10 py-5 rounded-2xl font-bold text-xl border transition-all hover:border-red-600
// //                     ${isDark
// //                       ? "bg-gray-900 border-red-900/50"
// //                       : "bg-white border-gray-200 shadow-sm"
// //                     }`}
// //                 >
// //                   {city}
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Final CTA */}
// //         <section className={`py-24 px-4 rounded-3xl my-12
// //           ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white border border-gray-100 shadow-2xl"}`}>
// //           <div className="max-w-5xl mx-auto text-center">
// //             <motion.img
// //               src={images.team}
// //               alt="Atlas Knots IT Solution team"
// //               className="rounded-3xl mx-auto mb-12 shadow-2xl border border-red-900/30 max-w-4xl w-full"
// //             />

// //             <motion.h2
// //               className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
// //             >
// //               What Are You Waiting For?
// //             </motion.h2>

// //             <motion.p
// //               className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
// //             >
// //               Let our expert team in Bhopal build a powerful mobile application that takes your business to the next level.
// //             </motion.p>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-red-700/80 transition-all"
// //             >
// //               Contact Us →
// //             </motion.button>
// //           </div>
// //         </section>
// //       </div>

// //       {/* Scroll to Top Button */}
// //       <AnimatePresence>
// //         {showScrollTop && (
// //           <motion.button
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.8 }}
// //             onClick={scrollToTop}
// //             className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110
// //               ${isDark
// //                 ? "bg-red-600 hover:bg-red-700 text-white"
// //                 : "bg-red-600 hover:bg-red-700 text-white shadow-lg"
// //               }`}
// //             aria-label="Scroll to top"
// //           >
// //             <ArrowUp size={26} />
// //           </motion.button>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, CheckCircle, ArrowUp } from 'lucide-react';

// const images = {
//   hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   android: "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   hybrid: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   process: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     title: "Android Application Development",
//     desc: "We harness the full power of the Android ecosystem using Kotlin and Java to create fast, secure, and feature-rich applications. Our expert team focuses on modern Material Design, offline capabilities, push notifications, and seamless integration with Google services. From startups to enterprises, we deliver Android apps that provide outstanding performance and exceptional user satisfaction.",
//   },
//   {
//     title: "iOS Application Development",
//     desc: "We develop premium native iOS applications using Swift and SwiftUI for iPhone, iPad, and Apple Watch. Our apps are optimized for the latest iOS versions, ensuring beautiful interfaces, smooth animations, high security standards, and flawless performance across all Apple devices. We help businesses create memorable experiences that users love.",
//   },
//   {
//     title: "Hybrid & Cross-Platform Development",
//     desc: "Using powerful frameworks like React Native and Flutter, we build high-performance hybrid apps that work seamlessly on both Android and iOS from a single codebase. This approach significantly reduces development time and cost while maintaining near-native look, feel, and performance. Perfect for businesses looking to reach a wider audience quickly.",
//   },
// ];

// const benefits = [
//   "Enhance customer engagement with personalized experiences",
//   "Expand your market reach across Android and iOS platforms",
//   "Streamline internal business processes and operations",
//   "Increase sales and revenue through in-app purchases and conversions",
//   "Build stronger brand loyalty and customer retention",
//   "Gain valuable insights with in-app analytics and user behavior tracking",
// ];

// const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida", "Mumbai", "Hyderabad", "Bangalore"];

// const industries = [
//   "Finance & Banking", "Manufacturing", "Legal & Law Firms", "Technology & IT",
//   "Transportation & Automotive", "eCommerce & Retail", "Healthcare & Medical",
//   "Education & EdTech", "Real Estate", "Tourism & Hospitality", "Event Management",
//   "Non-Profit Organizations", "Agriculture", "Many More..."
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: { opacity: 1 },
//   visible: { transition: { staggerChildren: 0.15 } }
// };

// export default function MobileAppDevelopment() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark")
//   );

//   // Dark mode observer
//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"]
//     });
//     return () => observer.disconnect();
//   }, []);

//   // Scroll handler
//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 400);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
//       ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

//       {/* Background Gradient */}
//       <div className={`absolute inset-0 z-0 ${isDark
//         ? "bg-gradient-to-b from-black via-gray-950 to-black"
//         : "bg-gradient-to-b from-gray-50 via-white to-red-50/30"
//       }`} />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24">

//         {/* Hero Section - Improved Image Visibility */}
//         <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
//           <div className="absolute inset-0">
//             <img
//               src={images.hero}
//               alt="Professional mobile app development team working in Bhopal"
//               className="w-full h-full object-cover"
//               loading="eager"
//             />
//             <div className={`absolute inset-0 ${isDark
//               ? "bg-gradient-to-t from-black via-black/85 to-black/60"
//               : "bg-gradient-to-t from-white via-white/90 to-white/70"
//             }`} />
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 text-center max-w-5xl mx-auto"
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
//             >
//               Mobile Application <span className="text-red-500">Development</span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-red-400" : "text-red-600"}`}
//             >
//               Premium App Development Services in Bhopal
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               At Atlas Knots IT Solution, we transform innovative ideas into powerful, user-friendly mobile applications.
//               Our expert team specializes in Android, iOS, and cross-platform development, delivering high-performance apps
//               that drive business growth, enhance customer engagement, and create lasting value.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 group transition-all hover:scale-105">
//                 Get Free Consultation
//                 <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button className={`px-12 py-6 border-2 rounded-full text-xl font-bold transition-all
//                 ${isDark ? "border-red-600/70 text-red-400 hover:bg-red-950/50" : "border-red-600 text-red-600 hover:bg-red-50"}`}>
//                 View Our Portfolio →
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Services Section */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 rounded-3xl my-12
//           ${isDark ? "bg-black/70 border border-red-900/30" : "bg-white shadow-2xl"}`}>
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-6xl font-black text-center mb-6"
//             >
//               Our Mobile App <span className="text-red-500">Development Services</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-xl text-center mb-16 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               With years of experience and a passion for innovation, Atlas Knots IT Solution offers comprehensive mobile app development solutions tailored to your unique business requirements.
//             </motion.p>

//             <div className="grid md:grid-cols-3 gap-8">
//               {services.map((service, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`group relative overflow-hidden rounded-3xl p-10 border transition-all hover:-translate-y-2
//                     ${isDark
//                       ? "bg-gray-950 border-red-900/50 hover:border-red-600"
//                       : "bg-white border-gray-200 hover:border-red-400 shadow-lg"
//                     }`}
//                 >
//                   <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
//                     <img
//                       src={idx === 0 ? images.android : idx === 1 ? images.ios : images.hybrid}
//                       alt={`${service.title} - Atlas Knots IT Solution`}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="relative z-10">
//                     <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                       {service.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Benefits Section - Expanded */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-20 text-center"
//             >
//               <h3 className={`text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}>
//                 Benefits of Our Mobile App Development Services
//               </h3>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {benefits.map((benefit, i) => (
//                   <motion.div
//                     key={i}
//                     className={`px-8 py-5 rounded-2xl text-lg font-medium border transition-all hover:scale-105
//                       ${isDark
//                         ? "bg-gray-900 border-red-900/50 hover:border-red-600"
//                         : "bg-white border-red-200 hover:border-red-400 shadow-sm"
//                       }`}
//                   >
//                     {benefit}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Development Process - More Detailed */}
//         <section className="py-24 px-4">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Our Proven App Development <span className="text-red-500">Process</span>
//             </motion.h2>

//             <motion.img
//               src={images.process}
//               alt="Detailed mobile app development process roadmap illustration"
//               className="rounded-3xl mx-auto mb-16 shadow-2xl border border-red-900/30 max-w-5xl w-full object-cover"
//               loading="lazy"
//             />

//             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//               {[
//                 {
//                   step: "Discovery & Planning",
//                   points: [
//                     "Understanding your business goals and vision",
//                     "In-depth market research and competitor analysis",
//                     "Defining target audience and key features",
//                     "Creating project roadmap and timelines"
//                   ]
//                 },
//                 {
//                   step: "UI/UX Design",
//                   points: [
//                     "Wireframing and user journey mapping",
//                     "Creating stunning visual designs and prototypes",
//                     "Ensuring intuitive and delightful user experience",
//                     "Iterative feedback and refinement"
//                   ]
//                 },
//                 {
//                   step: "Development",
//                   points: [
//                     "Building robust frontend and backend architecture",
//                     "Implementing core features and third-party integrations",
//                     "Writing clean, scalable, and secure code",
//                     "Regular progress updates and testing"
//                   ]
//                 },
//                 {
//                   step: "Testing & Quality Assurance",
//                   points: [
//                     "Comprehensive manual and automated testing",
//                     "Performance, security, and compatibility checks",
//                     "Bug fixing and optimization across devices",
//                     "User acceptance testing (UAT)"
//                   ]
//                 },
//                 {
//                   step: "Launch & Maintenance",
//                   points: [
//                     "Deployment to Google Play Store and Apple App Store",
//                     "Post-launch monitoring and support",
//                     "Regular updates and feature enhancements",
//                     "Ongoing technical maintenance and scaling"
//                   ]
//                 },
//               ].map((phase, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`border rounded-3xl p-8 transition-all hover:border-red-600 min-h-[320px]
//                     ${isDark
//                       ? "bg-gray-950 border-red-900/50"
//                       : "bg-white border-gray-200 shadow-md"
//                     }`}
//                 >
//                   <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
//                   <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>{phase.step}</h3>
//                   <ul className={`space-y-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                     {phase.points.map((point, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Industries & Cities */}
//         <section className={`py-24 px-4 rounded-3xl my-12
//           ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white shadow-2xl"}`}>
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Tailored Solutions for <span className="text-red-500">Diverse Industries</span>
//             </motion.h2>

//             <div className="flex flex-wrap justify-center gap-4 mb-20">
//               {industries.map((ind, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.02 }}
//                   className={`px-6 py-3 rounded-full text-sm md:text-base border transition-all hover:scale-105
//                     ${isDark
//                       ? "bg-gray-900 border-red-900/50 hover:border-red-600 text-gray-200"
//                       : "bg-gray-100 border-gray-300 hover:border-red-400"
//                     }`}
//                 >
//                   {ind}
//                 </motion.span>
//               ))}
//             </div>

//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Serving Businesses Across Major <span className="text-red-500">Cities in India</span>
//             </motion.h2>

//             <div className="flex flex-wrap justify-center gap-6">
//               {cities.map((city, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.04 }}
//                   className={`px-10 py-5 rounded-2xl font-bold text-xl border transition-all hover:border-red-600 hover:scale-105
//                     ${isDark
//                       ? "bg-gray-900 border-red-900/50"
//                       : "bg-white border-gray-200 shadow-sm"
//                     }`}
//                 >
//                   {city}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section className={`py-24 px-4 rounded-3xl my-12
//           ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white border border-gray-100 shadow-2xl"}`}>
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.img
//               src={images.team}
//               alt="Experienced mobile app development team at Atlas Knots IT Solution in Bhopal"
//               className="rounded-3xl mx-auto mb-12 shadow-2xl border border-red-900/30 max-w-4xl w-full object-cover"
//               loading="lazy"
//             />

//             <motion.h2
//               className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Ready to Bring Your App Idea to Life?
//             </motion.h2>

//             <motion.p
//               className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               Whether you need a native Android/iOS app or a powerful cross-platform solution, our expert team in Bhopal is ready to deliver a mobile application that exceeds your expectations and drives real business results.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-red-700/80 transition-all"
//             >
//               Start Your Project Today →
//             </motion.button>
//           </div>
//         </section>
//       </div>

//       {/* Scroll to Top */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             onClick={scrollToTop}
//             className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110
//               ${isDark ? "bg-red-600 hover:bg-red-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={26} />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, CheckCircle, ArrowUp } from "lucide-react";
// import { mobile } from "../../assets/Images/mobile.jpeg";

// const images = {
//   hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   android:
//     "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   hybrid:
//     "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   process:
//     {mobile},
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     title: "Android Application Development",
//     desc: "We harness the full power of the Android ecosystem using Kotlin and Java to create fast, secure, and feature-rich applications. Our expert team focuses on modern Material Design, offline capabilities, push notifications, and seamless integration with Google services.",
//   },
//   {
//     title: "iOS Application Development",
//     desc: "We develop premium native iOS applications using Swift and SwiftUI for iPhone, iPad, and Apple Watch. Our apps are optimized for the latest iOS versions with beautiful interfaces and flawless performance.",
//   },
//   {
//     title: "Hybrid & Cross-Platform Development",
//     desc: "Using React Native and Flutter, we build high-performance hybrid apps that work seamlessly on both Android and iOS from a single codebase — saving time and cost while maintaining near-native experience.",
//   },
// ];

// const benefits = [
//   "Enhance customer engagement with personalized experiences",
//   "Expand your market reach across Android and iOS platforms",
//   "Streamline internal business processes and operations",
//   "Increase sales and revenue through in-app purchases",
//   "Build stronger brand loyalty and customer retention",
//   "Gain valuable insights with in-app analytics",
// ];

// const cities = [
//   "Bhopal",
//   "Indore",
//   "Delhi",
//   "Pune",
//   "Jaipur",
//   "Gurgaon",
//   "Noida",
//   "Mumbai",
//   "Hyderabad",
//   "Bangalore",
// ];

// const industries = [
//   "Finance & Banking",
//   "Manufacturing",
//   "Legal & Law Firms",
//   "Technology & IT",
//   "Transportation & Automotive",
//   "eCommerce & Retail",
//   "Healthcare & Medical",
//   "Education & EdTech",
//   "Real Estate",
//   "Tourism & Hospitality",
//   "Event Management",
//   "Non-Profit Organizations",
//   "Agriculture",
//   "Many More...",
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 1 },
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// export default function MobileAppDevelopment() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark"),
//   );

//   // Dark mode observer
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

//   // Scroll handler
//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 400);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div
//       className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
//       ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
//     >
//       {/* Background Gradient */}
//       <div
//         className={`absolute inset-0 z-0 ${
//           isDark
//             ? "bg-gradient-to-b from-black via-gray-950 to-black"
//             : "bg-gradient-to-b from-gray-50 via-white to-red-50/30"
//         }`}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-8 pb-16 md:pt-12">
//         {" "}
//         {/* ← Reduced top padding */}
//         {/* Hero Section - Reduced Height & Padding */}
//         <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center px-4 py-12 overflow-hidden">
//           {" "}
//           {/* ← Reduced py-20 to py-12 */}
//           <div className="absolute inset-0">
//             <img
//               src={images.hero}
//               alt="Professional mobile app development team working in Bhopal"
//               className="w-full h-full object-cover"
//               loading="eager"
//             />
//             <div
//               className={`absolute inset-0 ${
//                 isDark
//                   ? "bg-gradient-to-t from-black via-black/85 to-black/60"
//                   : "bg-gradient-to-t from-white via-white/90 to-white/70"
//               }`}
//             />
//           </div>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 text-center max-w-5xl mx-auto"
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
//             >
//               Mobile Application{" "}
//               <span className="text-red-500">Development</span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-red-400" : "text-red-600"}`}
//             >
//               Premium App Development Services in Bhopal
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               At Atlas Knots IT Solution, we transform innovative ideas into
//               powerful, user-friendly mobile applications. Our expert team in
//               Bhopal delivers high-performance Android, iOS, and cross-platform
//               apps that drive real business growth.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center"
//             >
//               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 group transition-all hover:scale-105">
//                 Get Free Consultation
//                 <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 className={`px-12 py-6 border-2 rounded-full text-xl font-bold transition-all
//                 ${isDark ? "border-red-600/70 text-red-400 hover:bg-red-950/50" : "border-red-600 text-red-600 hover:bg-red-50"}`}
//               >
//                 View Our Portfolio →
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>
//         {/* Services Section - Reduced top margin */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 rounded-3xl mt-8 mb-12   {/* ← Reduced py-24 to py-20 and mt-12 to mt-8 */}
//           ${isDark ? "bg-black/70 border border-red-900/30" : "bg-white shadow-2xl"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-6xl font-black text-center mb-6"
//             >
//               Our Mobile App{" "}
//               <span className="text-red-500">Development Services</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-xl text-center mb-16 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               With years of experience and a passion for innovation, Atlas Knots
//               IT Solution offers comprehensive mobile app development solutions
//               tailored to your unique business requirements.
//             </motion.p>

//             <div className="grid md:grid-cols-3 gap-8">
//               {services.map((service, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`group relative overflow-hidden rounded-3xl p-10 border transition-all hover:-translate-y-2
//                     ${isDark ? "bg-gray-950 border-red-900/50 hover:border-red-600" : "bg-white border-gray-200 hover:border-red-400 shadow-lg"}`}
//                 >
//                   <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
//                     <img
//                       src={
//                         idx === 0
//                           ? images.android
//                           : idx === 1
//                             ? images.ios
//                             : images.hybrid
//                       }
//                       alt={`${service.title} - Atlas Knots IT Solution`}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="relative z-10">
//                     <h3
//                       className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}
//                     >
//                       {service.title}
//                     </h3>
//                     <p
//                       className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
//                     >
//                       {service.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Benefits */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-16 text-center"
//             >
//               <h3
//                 className={`text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
//               >
//                 Benefits of Our Mobile App Development Services
//               </h3>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {benefits.map((benefit, i) => (
//                   <motion.div
//                     key={i}
//                     className={`px-8 py-5 rounded-2xl text-lg font-medium border transition-all hover:scale-105
//                       ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600" : "bg-white border-red-200 hover:border-red-400 shadow-sm"}`}
//                   >
//                     {benefit}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>
//         {/* Rest of the sections remain similar but with reduced padding */}
//         {/* Development Process */}
//         <section className="py-20 px-4">
//           {" "}
//           {/* ← Reduced from py-24 */}
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Our Proven App Development{" "}
//               <span className="text-red-500">Process</span>
//             </motion.h2>

//             <motion.img
//               src={images.process}
//               alt="Detailed mobile app development process roadmap illustration"
//               className="rounded-3xl mx-auto mb-16 shadow-2xl border border-red-900/30 max-w-5xl w-full object-cover"
//               loading="lazy"
//             />

//             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//               {[
//                 {
//                   step: "Discovery & Planning",
//                   points: [
//                     "Understanding your business goals",
//                     "Market research & competitor analysis",
//                     "Feature prioritization",
//                     "Project roadmap",
//                   ],
//                 },
//                 {
//                   step: "UI/UX Design",
//                   points: [
//                     "Wireframing & prototypes",
//                     "Visual design",
//                     "User experience optimization",
//                     "Feedback & iteration",
//                   ],
//                 },
//                 {
//                   step: "Development",
//                   points: [
//                     "Frontend & backend development",
//                     "API integration",
//                     "Clean & scalable code",
//                     "Regular testing",
//                   ],
//                 },
//                 {
//                   step: "Testing & QA",
//                   points: [
//                     "Manual & automated testing",
//                     "Performance & security checks",
//                     "Bug fixing",
//                     "Cross-device compatibility",
//                   ],
//                 },
//                 {
//                   step: "Launch & Maintenance",
//                   points: [
//                     "App Store deployment",
//                     "Post-launch monitoring",
//                     "Regular updates",
//                     "Ongoing support",
//                   ],
//                 },
//               ].map((phase, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`border rounded-3xl p-8 transition-all hover:border-red-600 min-h-[300px]
//                     ${isDark ? "bg-gray-950 border-red-900/50" : "bg-white border-gray-200 shadow-md"}`}
//                 >
//                   <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
//                   <h3
//                     className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
//                   >
//                     {phase.step}
//                   </h3>
//                   <ul
//                     className={`space-y-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
//                   >
//                     {phase.points.map((point, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Industries & Cities + Final CTA - Same reduced padding pattern */}
//         <section
//           className={`py-20 px-4 rounded-3xl mt-8 mb-12   {/* ← Reduced padding */}
//           ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white shadow-2xl"}`}
//         >
//           {/* ... Industries and Cities content same as before ... */}
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Tailored Solutions for{" "}
//               <span className="text-red-500">Diverse Industries</span>
//             </motion.h2>

//             <div className="flex flex-wrap justify-center gap-4 mb-20">
//               {industries.map((ind, i) => (
//                 <motion.span
//                   key={i}
//                   className={`px-6 py-3 rounded-full text-sm md:text-base border transition-all hover:scale-105
//                     ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600 text-gray-200" : "bg-gray-100 border-gray-300 hover:border-red-400"}`}
//                 >
//                   {ind}
//                 </motion.span>
//               ))}
//             </div>

//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Serving Businesses Across Major{" "}
//               <span className="text-red-500">Cities in India</span>
//             </motion.h2>

//             <div className="flex flex-wrap justify-center gap-6">
//               {cities.map((city, i) => (
//                 <motion.div
//                   key={i}
//                   className={`px-10 py-5 rounded-2xl font-bold text-xl border transition-all hover:border-red-600 hover:scale-105
//                     ${isDark ? "bg-gray-900 border-red-900/50" : "bg-white border-gray-200 shadow-sm"}`}
//                 >
//                   {city}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Final CTA */}
//         <section
//           className={`py-20 px-4 rounded-3xl mt-8   {/* ← Reduced padding */}
//           ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white border border-gray-100 shadow-2xl"}`}
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.img
//               src={images.team}
//               alt="Experienced mobile app development team at Atlas Knots IT Solution in Bhopal"
//               className="rounded-3xl mx-auto mb-12 shadow-2xl border border-red-900/30 max-w-4xl w-full object-cover"
//               loading="lazy"
//             />

//             <motion.h2
//               className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Ready to Bring Your App Idea to Life?
//             </motion.h2>

//             <motion.p
//               className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
//             >
//               Whether you need a native Android/iOS app or a powerful
//               cross-platform solution, our expert team in Bhopal is ready to
//               deliver a mobile application that exceeds your expectations.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-red-700/80 transition-all"
//             >
//               Start Your Project Today →
//             </motion.button>
//           </div>
//         </section>
//       </div>

//       {/* Scroll to Top Button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             onClick={scrollToTop}
//             className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110
//               ${isDark ? "bg-red-600 hover:bg-red-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={26} />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowUp } from "lucide-react";

// Import your local image
import mobileProcess from "../../assets/Images/mobile.jpeg";
import mobileProcess2 from "../../assets/Images/mobilebackground.jpeg";


const images = {
  hero: mobileProcess2,
  android: "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  hybrid: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  process: mobileProcess,        // ← Fixed: Using local imported image
  team: mobileProcess,
};

const services = [
  {
    title: "Android Application Development",
    desc: "We harness the full power of the Android ecosystem using Kotlin and Java to create fast, secure, and feature-rich applications. Our expert team focuses on modern Material Design, offline capabilities, push notifications, and seamless integration with Google services.",
  },
  {
    title: "iOS Application Development",
    desc: "We develop premium native iOS applications using Swift and SwiftUI for iPhone, iPad, and Apple Watch. Our apps are optimized for the latest iOS versions with beautiful interfaces and flawless performance.",
  },
  {
    title: "Hybrid & Cross-Platform Development",
    desc: "Using React Native and Flutter, we build high-performance hybrid apps that work seamlessly on both Android and iOS from a single codebase — saving time and cost while maintaining near-native experience.",
  },
];

const benefits = [
  "Enhance customer engagement with personalized experiences",
  "Expand your market reach across Android and iOS platforms",
  "Streamline internal business processes and operations",
  "Increase sales and revenue through in-app purchases",
  "Build stronger brand loyalty and customer retention",
  "Gain valuable insights with in-app analytics",
];

const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida", "Mumbai", "Hyderabad", "Bangalore"];

const industries = [
  "Finance & Banking", "Manufacturing", "Legal & Law Firms", "Technology & IT",
  "Transportation & Automotive", "eCommerce & Retail", "Healthcare & Medical",
  "Education & EdTech", "Real Estate", "Tourism & Hospitality", "Event Management",
  "Non-Profit Organizations", "Agriculture", "Many More..."
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function MobileAppDevelopment() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Dark mode observer
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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* Background Gradient */}
      <div className={`absolute inset-0 z-0 ${isDark
        ? "bg-gradient-to-b from-black via-gray-950 to-black"
        : "bg-gradient-to-b from-gray-50 via-white to-red-50/30"
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">

        {/* Hero Section */}
        <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center px-4 py-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Professional mobile app development team working in Bhopal"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className={`absolute inset-0 ${isDark
              ? "bg-gradient-to-t from-black via-black/85 to-black/60"
              : "bg-gradient-to-t from-white via-white/90 to-white/70"
            }`} />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center max-w-5xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
            >
              Mobile Application <span className="text-red-500">Development</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-red-400" : "text-red-600"}`}
            >
              Premium App Development Services in Bhopal
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              At Atlas Knots IT Solution, we transform innovative ideas into powerful, 
              user-friendly mobile applications. Our expert team in Bhopal delivers 
              high-performance Android, iOS, and cross-platform apps that drive real business growth.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 group transition-all hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className={`px-12 py-6 border-2 rounded-full text-xl font-bold transition-all
                ${isDark ? "border-red-600/70 text-red-400 hover:bg-red-950/50" : "border-red-600 text-red-600 hover:bg-red-50"}`}>
                View Our Portfolio →
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 rounded-3xl mt-8 mb-12
          ${isDark ? "bg-black/70 border border-red-900/30" : "bg-white shadow-2xl"}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-center mb-6"
            >
              Our Mobile App <span className="text-red-500">Development Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl text-center mb-16 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              With years of experience and a passion for innovation, Atlas Knots IT Solution 
              offers comprehensive mobile app development solutions tailored to your unique business requirements.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl p-10 border transition-all hover:-translate-y-2
                    ${isDark ? "bg-gray-950 border-red-900/50 hover:border-red-600" : "bg-white border-gray-200 hover:border-red-400 shadow-lg"}`}
                >
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                    <img
                      src={idx === 0 ? images.android : idx === 1 ? images.ios : images.hybrid}
                      alt={`${service.title} - Atlas Knots IT Solution`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className={`text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}>
                Benefits of Our Mobile App Development Services
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    className={`px-8 py-5 rounded-2xl text-lg font-medium border transition-all hover:scale-105
                      ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600" : "bg-white border-red-200 hover:border-red-400 shadow-sm"}`}
                  >
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Our Proven App Development <span className="text-red-500">Process</span>
            </motion.h2>

            <motion.img
              src={images.process}
              alt="Detailed mobile app development process roadmap illustration"
              className="rounded-3xl mx-auto mb-16 shadow-2xl border border-red-900/30 max-w-5xl w-full object-cover"
              loading="lazy"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "Discovery & Planning", points: ["Understanding your business goals", "Market research & competitor analysis", "Feature prioritization", "Project roadmap"] },
                { step: "UI/UX Design", points: ["Wireframing & prototypes", "Visual design", "User experience optimization", "Feedback & iteration"] },
                { step: "Development", points: ["Frontend & backend development", "API integration", "Clean & scalable code", "Regular testing"] },
                { step: "Testing & QA", points: ["Manual & automated testing", "Performance & security checks", "Bug fixing", "Cross-device compatibility"] },
                { step: "Launch & Maintenance", points: ["App Store deployment", "Post-launch monitoring", "Regular updates", "Ongoing support"] },
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-3xl p-8 transition-all hover:border-red-600 min-h-[300px]
                    ${isDark ? "bg-gray-950 border-red-900/50" : "bg-white border-gray-200 shadow-md"}`}
                >
                  <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
                  <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>{phase.step}</h3>
                  <ul className={`space-y-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {phase.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Cities */}
        <section className={`py-20 px-4 rounded-3xl mt-8 mb-12
          ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white shadow-2xl"}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Tailored Solutions for <span className="text-red-500">Diverse Industries</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {industries.map((ind, i) => (
                <motion.span
                  key={i}
                  className={`px-6 py-3 rounded-full text-sm md:text-base border transition-all hover:scale-105
                    ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600 text-gray-200" : "bg-gray-100 border-gray-300 hover:border-red-400"}`}
                >
                  {ind}
                </motion.span>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Serving Businesses Across Major <span className="text-red-500">Cities in India</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
              {cities.map((city, i) => (
                <motion.div
                  key={i}
                  className={`px-10 py-5 rounded-2xl font-bold text-xl border transition-all hover:border-red-600 hover:scale-105
                    ${isDark ? "bg-gray-900 border-red-900/50" : "bg-white border-gray-200 shadow-sm"}`}
                >
                  {city}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`py-20 px-4 rounded-3xl mt-8
          ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white border border-gray-100 shadow-2xl"}`}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.img
              src={images.team}
              alt="Experienced mobile app development team at Atlas Knots IT Solution in Bhopal"
              className="rounded-3xl mx-auto mb-12 shadow-2xl border border-red-900/30 max-w-4xl w-full object-cover"
              loading="lazy"
            />

            <motion.h2 className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-gray-900"}`}>
              Ready to Bring Your App Idea to Life?
            </motion.h2>

            <motion.p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Whether you need a native Android/iOS app or a powerful cross-platform solution, 
              our expert team in Bhopal is ready to deliver a mobile application that exceeds your expectations.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-red-700/80 transition-all"
            >
              Start Your Project Today →
            </motion.button>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110
              ${isDark ? "bg-red-600 hover:bg-red-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={26} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}