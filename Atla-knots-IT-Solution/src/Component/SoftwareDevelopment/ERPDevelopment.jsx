// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Database, BarChart3, Settings, Globe, CheckCircle } from "lucide-react";
// // import { useState,useEffect } from "react";
// // // Random high-quality placeholder images (Unsplash/free stock - relevant to ERP/enterprise software)
// // const images = {
// //   hero: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Business growth dashboard
// //   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Collaborative enterprise team
// //   dashboard: "https://images.unsplash.com/photo-1551288049-b01e1b7d0d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // ERP analytics dashboard
// //   process: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Workflow/strategy planning
// //   industry: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern enterprise workspace
// // };

// // const industries = [
// //   "Advertising and Media", "Construction & Builders", "Education", "Finance and Insurance",
// //   "Medical & Healthcare", "E-Commerce", "Entertainment", "Real Estate", "Hospitality",
// //   "Engineering Services", "Health and Wellness", "Technology", "Heating & Cooling",
// //   "Auto Mechanics", "Oil and Gas", "Landscaping", "Property Management",
// //   "Business Consulting", "Home Renovation", "Beauty"
// // ];

// // const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// // export default function ERPDevelopment() {

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
// //       {/* Hero Section */}
// //       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
// //         <div className="absolute inset-0">
// //           <img
// //             src={images.hero}
// //             alt="ERP software dashboard showing business growth"
// //             className="w-full h-full object-cover opacity-25 brightness-50"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
// //         </div>

// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="relative z-10 max-w-7xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
// //           >
// //             Powerful ERP Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Streamline, Scale & Succeed</span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-3xl md:text-4xl font-bold text-red-400 mb-6"
// //           >
// //             Drive Business Efficiency With ERP Solutions
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
// //           >
// //             Partner with the Leading ERP software development company in India
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Request a Quote <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
// //             </button>
// //             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
// //               Free Consultation →
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* Fuel Business Success */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-6xl font-black text-center mb-12"
// //           >
// //             Fuel Business Success with Top ERP Software Development Services in India
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8 mb-16">
// //             {["Be Unique", "Be Scalable", "Be Future-Ready"].map((title, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeInUp}
// //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
// //               >
// //                 <h3 className="text-4xl font-black mb-6 text-red-500 group-hover:text-red-400 transition-colors">
// //                   {title}
// //                 </h3>
// //                 <p className="text-lg text-gray-300 leading-relaxed">
// //                   {title === "Be Unique" && "Get ERP solutions tailored precisely to your business workflows"}
// //                   {title === "Be Scalable" && "Enable growth with flexible and integrated systems"}
// //                   {title === "Be Future-Ready" && "Streamline operations through advanced technologies"}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <motion.p
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center mb-12"
// //           >
// //             With years of experience, AI Knots IT Solutions is a full-service ERP software development company in India, delivering intelligent, scalable, and logical enterprise solutions. As a trusted custom ERP software development company, we focus on creating efficient and powerful ERP software that helps businesses automate processes, enhance decision-making, and drive productivity.
// //             <br /><br />
// //             Whether you are a growing startup or an established enterprise, our expertise in custom ERP software development ensures your system is built around your unique operations. From financials and inventory to HR, CRM, and beyond, we build custom ERP software that unifies your departments and delivers real-time visibility.
// //             <br /><br />
// //             At AI Knots IT Solutions, a top ERP software development company, we deliver secure, custom ERP software solutions tailored to your business goals and growth.
// //           </motion.p>

// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="text-center"
// //           >
// //             <button className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
// //               Connect with India's Best ERP Software Development Company →
// //             </button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Complete Suite of ERP Software Services */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-6xl font-black text-center mb-16"
// //           >
// //             A Complete Suite of <span className="text-red-500">ERP Software Services</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
// //           >
// //             We deliver fast, reliable, and high-impact ERP software development services that help businesses streamline operations and drive growth. As a leading ERP software development company, we specialize in custom ERP software tailored to your unique needs.
// //           </motion.p>

// //           <motion.img
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             src={images.dashboard}
// //             alt="Powerful ERP dashboard showing real-time business insights"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
// //           />

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               { title: "Custom ERP Software Development", desc: "We deliver tailored ERP solutions that streamline operations, built by a trusted ERP software development company in India." },
// //               { title: "Enterprise ERP Software", desc: "As a custom ERP software development company, we build CRM-integrated ERP systems to streamline enterprise processes and keep all teams connected efficiently." },
// //               { title: "ERP Development Consultation", desc: "As a custom ERP software development company, we help strategize, design, test, and deploy robust ERP software tailored to your enterprise needs." },
// //               { title: "Custom Dashboard Design", desc: "Our ERP software development company builds custom ERP software dashboards to ensure comprehensible data, crucial metrics, and smooth access for smarter decisions." },
// //               { title: "ERP Data Migration", desc: "Our ERP software development company ensures secure, fast ERP data migration across systems with expert support from a custom ERP software development company." },
// //               { title: "ERP Application Development", desc: "Our ERP software development company builds feature-rich ERP apps to streamline tasks efficiently, powered by a leading custom ERP software development company." },
// //             ].map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
// //               >
// //                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 text-center">{service.title}</h3>
// //                 <p className="text-gray-300 text-lg leading-relaxed text-center">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* The Process Behind Smarter Systems */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-12"
// //           >
// //             The Process Behind <span className="text-red-500">Smarter Systems</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-xl text-gray-300 text-center mb-12 max-w-5xl mx-auto leading-relaxed"
// //           >
// //             At AI Knots IT Solutions, a leading ERP software development company, we merge proven methodologies with custom frameworks to deliver high-impact ERP solutions. As a custom ERP software development company, our structured approach—from discovery to deployment—ensures seamless, scalable, and secure ERP software development tailored to your unique business needs.
// //           </motion.p>

// //           <motion.img
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             src={images.process}
// //             alt="ERP software development process workflow"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
// //           />

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               { step: "01 Client Meeting", desc: "We collect essential insights to deliver ERP software tailored to your needs as a trusted ERP software development company and custom ERP software development company." },
// //               { step: "02 Designing Phase", desc: "In this ERP software development phase, we design system architecture and documentation as a custom ERP software development company and ERP software development company." },
// //               { step: "03 Development Phase", desc: "Our experts begin ERP software development using advanced coding practices, aligning with your goals as a custom ERP software development company and ERP software development company." },
// //               { step: "04 Quality Assurance", desc: "In this ERP software development phase, our custom ERP software development company ensures defect-free delivery, maintaining high standards as a leading ERP software development company." },
// //               { step: "05 Deployment Phase", desc: "After rigorous testing, our ERP software development company ensures smooth deployment of custom ERP software, delivering excellence as a trusted custom ERP software development company." },
// //               { step: "06 Support & Maintenance", desc: "Our ERP software development company ensures optimal performance of custom ERP software through continuous updates, support, and enhancements as a custom ERP software development company." },
// //             ].map((phase, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.15 }}
// //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all min-h-[280px]"
// //               >
// //                 <div className="text-5xl font-black text-red-500 mb-6">{phase.step.split(" ")[0]}</div>
// //                 <h3 className="text-2xl font-bold mb-4">{phase.step.split(" ").slice(1).join(" ")}</h3>
// //                 <p className="text-gray-300 text-base leading-relaxed">{phase.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industries We Serve */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-12"
// //           >
// //             Industries We Can <span className="text-red-500">Serve</span>
// //           </motion.h2>

// //           <motion.img
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             src={images.industry}
// //             alt="Modern enterprise workspace for ERP solutions"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
// //           />

// //           <div className="flex flex-wrap justify-center gap-4">
// //             {industries.map((ind, i) => (
// //               <motion.span
// //                 key={i}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.03 }}
// //                 className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all text-sm md:text-base"
// //               >
// //                 {ind}
// //               </motion.span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
// //         <div className="max-w-5xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Frequently Asked Questions – ERP Software Development
// //           </motion.h2>

// //           <div className="space-y-8">
// //             {[
// //               {
// //                 q: "What is ERP software and why does my business need it?",
// //                 a: "ERP (Enterprise Resource Planning) software helps businesses manage multiple operations such as finance, HR, inventory, sales, and customer management in one centralized system. AI Knots IT Solutions develops custom ERP solutions that automate processes, reduce manual work, and improve decision-making with real-time data.",
// //               },
// //               {
// //                 q: "What industries can benefit from ERP software developed by AI Knots IT Solutions?",
// //                 a: "ERP software developed by AI Knots IT Solutions can benefit many industries including education, healthcare, manufacturing, real estate, finance, retail, and e-commerce. Our custom ERP systems are designed according to the unique workflow and requirements of each industry.",
// //               },
// //               {
// //                 q: "How much does custom ERP software development cost?",
// //                 a: "The cost of ERP software development depends on features, integrations, and business requirements. A simple ERP system may cost less, while enterprise-level ERP solutions require more development time. AI Knots IT Solutions offers flexible and transparent pricing with no hidden costs.",
// //               },
// //               {
// //                 q: "How long does it take to develop ERP software?",
// //                 a: "ERP development timelines depend on the project complexity and features required. Basic ERP solutions can take a few weeks, while advanced enterprise ERP systems may take several months. AI Knots IT Solutions follows a structured development process to ensure timely delivery and high-quality results.",
// //               },
// //               {
// //                 q: "Does AI Knots IT Solutions provide ERP maintenance and support?",
// //                 a: "Yes. AI Knots IT Solutions provides ongoing ERP support, maintenance, updates, and system optimization after deployment. This ensures your ERP system remains secure, scalable, and aligned with your growing business needs.",
// //               },
// //             ].map((faq, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all"
// //               >
// //                 <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
// //                 <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //        <button
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
// import { ArrowRight, Database, BarChart3, Settings, Globe, CheckCircle } from "lucide-react";
// import backgroundimage from "../../assets/Images/ERPbackground.jpeg";
// import industury from "../../assets/Images/ERPbackground.jpeg";

// const images = {
//   hero: backgroundimage,
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   dashboard: "https://images.unsplash.com/photo-1551288049-b01e1b7d0d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   process: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   industry: industury,
// };

// const industries = [
//   "Advertising and Media", "Construction & Builders", "Education", "Finance and Insurance",
//   "Medical & Healthcare", "E-Commerce", "Entertainment", "Real Estate", "Hospitality",
//   "Engineering Services", "Health and Wellness", "Technology", "Heating & Cooling",
//   "Auto Mechanics", "Oil and Gas", "Landscaping", "Property Management",
//   "Business Consulting", "Home Renovation", "Beauty"
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// export default function ERPDevelopment() {
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark")
//   );

//   const [showScrollTop, setShowScrollTop] = useState(false);

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

//   // Scroll to top functionality
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // Theme-aware classes
//   const cardClass = `rounded-2xl p-10 transition-all duration-300 ${
//     isDark
//       ? "bg-gray-900/70 backdrop-blur-sm border border-red-900/40 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30"
//       : "bg-white border border-gray-200 shadow-lg hover:shadow-xl text-gray-900"
//   }`;

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";

//   return (
//     <div
//       className={`min-h-screen overflow-hidden transition-colors duration-700 ${
//         isDark
//           ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
//           : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900"
//       }`}
//     >
//       {/* ====================== HERO SECTION ====================== */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="ERP software dashboard showing business growth"
//             className="w-full h-full object-cover opacity-25 brightness-50"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-t ${
//               isDark
//                 ? "from-black via-black/80 to-transparent"
//                 : "from-white/90 via-white/80 to-transparent"
//             }`}
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
//             className={`text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight ${headingClass}`}
//           >
//             Powerful ERP Solutions That{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Streamline, Scale & Succeed
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl font-bold text-red-400 mb-6"
//           >
//             Drive Business Efficiency With ERP Solutions
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             Partner with the Leading ERP software development company in India
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Request a Quote <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button
//               className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all ${
//                 isDark
//                   ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
//                   : "border-red-600 text-red-600 hover:bg-red-50"
//               }`}
//             >
//               Free Consultation →
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ====================== FUEL BUSINESS SUCCESS ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-12 ${headingClass}`}
//           >
//             Fuel Business Success with Top ERP Software Development Services in India
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {["Be Unique", "Be Scalable", "Be Future-Ready"].map((title, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className={`border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 hover:shadow-2xl transition-all group ${
//                   isDark
//                     ? "bg-gradient-to-br from-gray-900 to-black"
//                     : "bg-white shadow-md"
//                 }`}
//               >
//                 <h3 className={`text-4xl font-black mb-6 ${accentClass} group-hover:text-red-400 transition-colors`}>
//                   {title}
//                 </h3>
//                 <p className={`text-lg leading-relaxed ${bodyClass}`}>
//                   {title === "Be Unique" && "Get ERP solutions tailored precisely to your business workflows"}
//                   {title === "Be Scalable" && "Enable growth with flexible and integrated systems"}
//                   {title === "Be Future-Ready" && "Streamline operations through advanced technologies"}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className={`text-xl max-w-5xl mx-auto leading-relaxed text-center mb-12 ${bodyClass}`}
//           >
//             With years of experience, AI Knots IT Solutions is a full-service ERP software development company in India, delivering intelligent, scalable, and logical enterprise solutions. As a trusted custom ERP software development company, we focus on creating efficient and powerful ERP software that helps businesses automate processes, enhance decision-making, and drive productivity.
//             <br /><br />
//             Whether you are a growing startup or an established enterprise, our expertise in custom ERP software development ensures your system is built around your unique operations. From financials and inventory to HR, CRM, and beyond, we build custom ERP software that unifies your departments and delivers real-time visibility.
//             <br /><br />
//             At AI Knots IT Solutions, a top ERP software development company, we deliver secure, custom ERP software solutions tailored to your business goals and growth.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <button className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
//               Connect with India's Best ERP Software Development Company →
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* ====================== COMPLETE SUITE OF ERP SERVICES ====================== */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//           >
//             A Complete Suite of <span className={accentClass}>ERP Software Services</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-xl text-center mb-16 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             We deliver fast, reliable, and high-impact ERP software development services that help businesses streamline operations and drive growth. As a leading ERP software development company, we specialize in custom ERP software tailored to your unique needs.
//           </motion.p>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.dashboard}
//             alt="Powerful ERP dashboard showing real-time business insights"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Custom ERP Software Development", desc: "We deliver tailored ERP solutions that streamline operations, built by a trusted ERP software development company in India." },
//               { title: "Enterprise ERP Software", desc: "As a custom ERP software development company, we build CRM-integrated ERP systems to streamline enterprise processes and keep all teams connected efficiently." },
//               { title: "ERP Development Consultation", desc: "As a custom ERP software development company, we help strategize, design, test, and deploy robust ERP software tailored to your enterprise needs." },
//               { title: "Custom Dashboard Design", desc: "Our ERP software development company builds custom ERP software dashboards to ensure comprehensible data, crucial metrics, and smooth access for smarter decisions." },
//               { title: "ERP Data Migration", desc: "Our ERP software development company ensures secure, fast ERP data migration across systems with expert support from a custom ERP software development company." },
//               { title: "ERP Application Development", desc: "Our ERP software development company builds feature-rich ERP apps to streamline tasks efficiently, powered by a leading custom ERP software development company." },
//             ].map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={cardClass}
//               >
//                 <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${accentClass}`}>{service.title}</h3>
//                 <p className={`text-lg leading-relaxed text-center ${bodyClass}`}>{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== THE PROCESS BEHIND SMARTER SYSTEMS ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-12 ${headingClass}`}
//           >
//             The Process Behind <span className={accentClass}>Smarter Systems</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-xl text-center mb-12 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             At AI Knots IT Solutions, a leading ERP software development company, we merge proven methodologies with custom frameworks to deliver high-impact ERP solutions. As a custom ERP software development company, our structured approach—from discovery to deployment—ensures seamless, scalable, and secure ERP software development tailored to your unique business needs.
//           </motion.p>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.process}
//             alt="ERP software development process workflow"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { step: "01 Client Meeting", desc: "We collect essential insights to deliver ERP software tailored to your needs as a trusted ERP software development company and custom ERP software development company." },
//               { step: "02 Designing Phase", desc: "In this ERP software development phase, we design system architecture and documentation as a custom ERP software development company and ERP software development company." },
//               { step: "03 Development Phase", desc: "Our experts begin ERP software development using advanced coding practices, aligning with your goals as a custom ERP software development company and ERP software development company." },
//               { step: "04 Quality Assurance", desc: "In this ERP software development phase, our custom ERP software development company ensures defect-free delivery, maintaining high standards as a leading ERP software development company." },
//               { step: "05 Deployment Phase", desc: "After rigorous testing, our ERP software development company ensures smooth deployment of custom ERP software, delivering excellence as a trusted custom ERP software development company." },
//               { step: "06 Support & Maintenance", desc: "Our ERP software development company ensures optimal performance of custom ERP software through continuous updates, support, and enhancements as a custom ERP software development company." },
//             ].map((phase, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className={`border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all min-h-[280px] ${
//                   isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className={`text-5xl font-black ${accentClass} mb-6`}>{phase.step.split(" ")[0]}</div>
//                 <h3 className={`text-2xl font-bold mb-4 ${headingClass}`}>{phase.step.split(" ").slice(1).join(" ")}</h3>
//                 <p className={`text-base leading-relaxed ${bodyClass}`}>{phase.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== INDUSTRIES WE SERVE ====================== */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-12 ${headingClass}`}
//           >
//             Industries We Can <span className={accentClass}>Serve</span>
//           </motion.h2>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.industry}
//             alt="Modern enterprise workspace for ERP solutions"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="flex flex-wrap justify-center gap-4">
//             {industries.map((ind, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.03 }}
//                 className={`px-6 py-3 border rounded-full text-sm md:text-base transition-all ${
//                   isDark
//                     ? "bg-gray-900/70 border-red-900/40 text-gray-200 hover:bg-red-900/40 hover:border-red-600/50"
//                     : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300"
//                 }`}
//               >
//                 {ind}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== FAQ SECTION ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-gray-100"}`}>
//         <div className="max-w-5xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Frequently Asked Questions – ERP Software Development
//           </motion.h2>

//           <div className="space-y-8">
//             {[
//               {
//                 q: "What is ERP software and why does my business need it?",
//                 a: "ERP (Enterprise Resource Planning) software helps businesses manage multiple operations such as finance, HR, inventory, sales, and customer management in one centralized system. AI Knots IT Solutions develops custom ERP solutions that automate processes, reduce manual work, and improve decision-making with real-time data.",
//               },
//               {
//                 q: "What industries can benefit from ERP software developed by AI Knots IT Solutions?",
//                 a: "ERP software developed by AI Knots IT Solutions can benefit many industries including education, healthcare, manufacturing, real estate, finance, retail, and e-commerce. Our custom ERP systems are designed according to the unique workflow and requirements of each industry.",
//               },
//               {
//                 q: "How much does custom ERP software development cost?",
//                 a: "The cost of ERP software development depends on features, integrations, and business requirements. A simple ERP system may cost less, while enterprise-level ERP solutions require more development time. AI Knots IT Solutions offers flexible and transparent pricing with no hidden costs.",
//               },
//               {
//                 q: "How long does it take to develop ERP software?",
//                 a: "ERP development timelines depend on the project complexity and features required. Basic ERP solutions can take a few weeks, while advanced enterprise ERP systems may take several months. AI Knots IT Solutions follows a structured development process to ensure timely delivery and high-quality results.",
//               },
//               {
//                 q: "Does AI Knots IT Solutions provide ERP maintenance and support?",
//                 a: "Yes. AI Knots IT Solutions provides ongoing ERP support, maintenance, updates, and system optimization after deployment. This ensures your ERP system remains secure, scalable, and aligned with your growing business needs.",
//               },
//             ].map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all ${
//                   isDark ? "bg-gray-900/70" : "bg-white shadow"
//                 }`}
//               >
//                 <h3 className={`text-2xl font-bold mb-4 ${accentClass}`}>{faq.q}</h3>
//                 <p className={`text-lg leading-relaxed ${bodyClass}`}>{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
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

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import backgroundimage from "../../assets/Images/ERPbackground.jpeg";
import industury from "../../assets/Images/ERPbackground.jpeg";

const images = {
  hero: backgroundimage,
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-b01e1b7d0d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  process:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  industry: industury,
};

const industries = [
  "Advertising and Media",
  "Construction & Builders",
  "Education",
  "Finance and Insurance",
  "Medical & Healthcare",
  "E-Commerce",
  "Entertainment",
  "Real Estate",
  "Hospitality",
  "Engineering Services",
  "Health and Wellness",
  "Technology",
  "Heating & Cooling",
  "Auto Mechanics",
  "Oil and Gas",
  "Landscaping",
  "Property Management",
  "Business Consulting",
  "Home Renovation",
  "Beauty",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ERPDevelopment() {
  const { isDark } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-700 
      ${
        isDark
          ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="ERP software dashboard showing business growth"
            className="w-full h-full object-cover opacity-25 dark:opacity-30 brightness-50"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isDark
                ? "from-black via-black/80 to-transparent"
                : "from-white/90 via-white/80 to-transparent"
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
            className={`text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Powerful ERP Solutions That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Streamline, Scale & Succeed
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-6"
          >
            Drive Business Efficiency With ERP Solutions
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            Partner with the Leading ERP software development company in India
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Request a Quote{" "}
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all ${
                isDark
                  ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
            >
              Free Consultation →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================== FUEL BUSINESS SUCCESS ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Fuel Business Success with Top ERP Software Development Services in
            India
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {["Be Unique", "Be Scalable", "Be Future-Ready"].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 hover:shadow-2xl transition-all group ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900 to-black"
                    : "bg-white shadow-md"
                }`}
              >
                <h3
                  className={`text-4xl font-black mb-6 text-red-600 dark:text-red-400 group-hover:text-red-500 transition-colors`}
                >
                  {title}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {title === "Be Unique" &&
                    "Get ERP solutions tailored precisely to your business workflows"}
                  {title === "Be Scalable" &&
                    "Enable growth with flexible and integrated systems"}
                  {title === "Be Future-Ready" &&
                    "Streamline operations through advanced technologies"}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-xl max-w-5xl mx-auto leading-relaxed text-center mb-12 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            With years of experience, AI Knots IT Solutions is a full-service
            ERP software development company in India, delivering intelligent,
            scalable, and logical enterprise solutions. As a trusted custom ERP
            software development company, we focus on creating efficient and
            powerful ERP software that helps businesses automate processes,
            enhance decision-making, and drive productivity.
            <br />
            <br />
            Whether you are a growing startup or an established enterprise, our
            expertise in custom ERP software development ensures your system is
            built around your unique operations. From financials and inventory
            to HR, CRM, and beyond, we build custom ERP software that unifies
            your departments and delivers real-time visibility.
            <br />
            <br />
            At AI Knots IT Solutions, a top ERP software development company, we
            deliver secure, custom ERP software solutions tailored to your
            business goals and growth.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
              Connect with India's Best ERP Software Development Company →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ====================== COMPLETE SUITE OF ERP SERVICES ====================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            A Complete Suite of{" "}
            <span className="text-red-600 dark:text-red-500">
              ERP Software Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl text-center mb-16 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            We deliver fast, reliable, and high-impact ERP software development
            services that help businesses streamline operations and drive
            growth. As a leading ERP software development company, we specialize
            in custom ERP software tailored to your unique needs.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.dashboard}
            alt="Powerful ERP dashboard showing real-time business insights"
            className="rounded-2xl shadow-2xl border border-red-900/30 dark:border-red-900/30 border-gray-200 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom ERP Software Development",
                desc: "We deliver tailored ERP solutions that streamline operations, built by a trusted ERP software development company in India.",
              },
              {
                title: "Enterprise ERP Software",
                desc: "As a custom ERP software development company, we build CRM-integrated ERP systems to streamline enterprise processes and keep all teams connected efficiently.",
              },
              {
                title: "ERP Development Consultation",
                desc: "As a custom ERP software development company, we help strategize, design, test, and deploy robust ERP software tailored to your enterprise needs.",
              },
              {
                title: "Custom Dashboard Design",
                desc: "Our ERP software development company builds custom ERP software dashboards to ensure comprehensible data, crucial metrics, and smooth access for smarter decisions.",
              },
              {
                title: "ERP Data Migration",
                desc: "Our ERP software development company ensures secure, fast ERP data migration across systems with expert support from a custom ERP software development company.",
              },
              {
                title: "ERP Application Development",
                desc: "Our ERP software development company builds feature-rich ERP apps to streamline tasks efficiently, powered by a leading custom ERP software development company.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-10 transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900/70 backdrop-blur-sm border border-red-900/40 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-xl text-gray-900"
                }`}
              >
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-6 text-center text-red-600 dark:text-red-500`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== THE PROCESS BEHIND SMARTER SYSTEMS ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            The Process Behind{" "}
            <span className="text-red-600 dark:text-red-500">
              Smarter Systems
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl text-center mb-12 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            At AI Knots IT Solutions, a leading ERP software development
            company, we merge proven methodologies with custom frameworks to
            deliver high-impact ERP solutions. As a custom ERP software
            development company, our structured approach—from discovery to
            deployment—ensures seamless, scalable, and secure ERP software
            development tailored to your unique business needs.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.process}
            alt="ERP software development process workflow"
            className="rounded-2xl shadow-2xl border border-red-900/30 dark:border-red-900/30 border-gray-200 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01 Client Meeting",
                desc: "We collect essential insights to deliver ERP software tailored to your needs as a trusted ERP software development company and custom ERP software development company.",
              },
              {
                step: "02 Designing Phase",
                desc: "In this ERP software development phase, we design system architecture and documentation as a custom ERP software development company and ERP software development company.",
              },
              {
                step: "03 Development Phase",
                desc: "Our experts begin ERP software development using advanced coding practices, aligning with your goals as a custom ERP software development company and ERP software development company.",
              },
              {
                step: "04 Quality Assurance",
                desc: "In this ERP software development phase, our custom ERP software development company ensures defect-free delivery, maintaining high standards as a leading ERP software development company.",
              },
              {
                step: "05 Deployment Phase",
                desc: "After rigorous testing, our ERP software development company ensures smooth deployment of custom ERP software, delivering excellence as a trusted custom ERP software development company.",
              },
              {
                step: "06 Support & Maintenance",
                desc: "Our ERP software development company ensures optimal performance of custom ERP software through continuous updates, support, and enhancements as a custom ERP software development company.",
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all min-h-[280px] ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900 to-black"
                    : "bg-white shadow-md"
                }`}
              >
                <div
                  className={`text-5xl font-black text-red-600 dark:text-red-500 mb-6`}
                >
                  {phase.step.split(" ")[0]}
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {phase.step.split(" ").slice(1).join(" ")}
                </h3>
                <p
                  className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INDUSTRIES WE SERVE ====================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Industries We Can{" "}
            <span className="text-red-600 dark:text-red-500">Serve</span>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.industry}
            alt="Modern enterprise workspace for ERP solutions"
            className="rounded-2xl shadow-2xl border border-red-900/30 dark:border-red-900/30 border-gray-200 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`px-6 py-3 border rounded-full text-sm md:text-base transition-all ${
                  isDark
                    ? "bg-gray-900/70 border-red-900/40 text-gray-200 hover:bg-red-900/40 hover:border-red-600/50"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300"
                }`}
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FAQ SECTION ====================== */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-gray-100"}`}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Frequently Asked Questions – ERP Software Development
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                q: "What is ERP software and why does my business need it?",
                a: "ERP (Enterprise Resource Planning) software helps businesses manage multiple operations such as finance, HR, inventory, sales, and customer management in one centralized system. AI Knots IT Solutions develops custom ERP solutions that automate processes, reduce manual work, and improve decision-making with real-time data.",
              },
              {
                q: "What industries can benefit from ERP software developed by AI Knots IT Solutions?",
                a: "ERP software developed by AI Knots IT Solutions can benefit many industries including education, healthcare, manufacturing, real estate, finance, retail, and e-commerce. Our custom ERP systems are designed according to the unique workflow and requirements of each industry.",
              },
              {
                q: "How much does custom ERP software development cost?",
                a: "The cost of ERP software development depends on features, integrations, and business requirements. A simple ERP system may cost less, while enterprise-level ERP solutions require more development time. AI Knots IT Solutions offers flexible and transparent pricing with no hidden costs.",
              },
              {
                q: "How long does it take to develop ERP software?",
                a: "ERP development timelines depend on the project complexity and features required. Basic ERP solutions can take a few weeks, while advanced enterprise ERP systems may take several months. AI Knots IT Solutions follows a structured development process to ensure timely delivery and high-quality results.",
              },
              {
                q: "Does AI Knots IT Solutions provide ERP maintenance and support?",
                a: "Yes. AI Knots IT Solutions provides ongoing ERP support, maintenance, updates, and system optimization after deployment. This ensures your ERP system remains secure, scalable, and aligned with your growing business needs.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all ${
                  isDark ? "bg-gray-900/70" : "bg-white shadow"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-4 text-red-600 dark:text-red-500`}
                >
                  {faq.q}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
