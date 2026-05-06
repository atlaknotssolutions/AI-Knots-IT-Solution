// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Palette, Image as ImageIcon, Video, CheckCircle } from "lucide-react";
// import { useState, useEffect } from "react";
// // Random high-quality images (replace with your own when ready)
// const images = {
//   hero: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   designer: "https://images.unsplash.com/photo-1558655146-9f40138f37f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   logoProcess: "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   socialGraphics: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   videoEdit: "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     icon: Palette,
//     title: "Logo Designing",
//     desc: "Your logo is the face of your brand. We design unique logos that represent your business values and help people remember your brand easily.",
//   },
//   {
//     icon: ImageIcon,
//     title: "Image Designing",
//     desc: "Our designers create eye-catching images for social media, websites, advertisements, and marketing campaigns.",
//   },
//   {
//     icon: Video,
//     title: "Video Editing",
//     desc: "Videos are one of the most powerful ways to communicate online. We edit and create professional videos that engage your audience and promote your brand.",
//   },
// ];

// const whyImportant = [
//   "Create a memorable brand identity",
//   "Attract customers quickly",
//   "Communicate your message clearly",
//   "Build trust with your audience",
//   "Promote products and services effectively",
// ];

// const whyChoose = [
//   "Creative and Experienced Designers – Our team combines creativity and experience to design visuals that represent your brand perfectly.",
//   "Unique and Custom Designs – Every design we create is unique and tailored to your business identity.",
//   "Focus on Brand Identity – We create designs that help build a strong and recognizable brand image.",
//   "Timely Delivery – We respect your time and ensure that your design projects are delivered within the promised timeline.",
// ];

// const howHelpGrow = [
//   "Get high-quality graphic designs at affordable pricing for your business or product launch.",
//   "Our designers bring creative ideas that help your brand stand out from competitors.",
//   "Our designs help establish a strong and professional brand identity.",
//   "We create visuals that increase brand awareness and attract more customers.",
// ];

// const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// export default function GraphicDesigning() {

//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Creative graphic designer workspace"
//             className="w-full h-full object-cover opacity-25 brightness-60"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
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
//             Creative Graphic Design Services That Build{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Strong Brand Identity
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
//           >
//             At Atlas Knots IT Solution, we believe graphic design is more than just making things look good. It is about showing your business message clearly through visuals.
//             <br /><br />
//             A good design can tell your story, build trust, and help people remember your brand.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Start Your Project <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               View Portfolio →
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Our Graphic Designing <span className="text-red-500">Services</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//               >
//                 <service.icon className="w-16 h-16 md:w-20 md:h-20 text-red-500 mx-auto mb-8 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Important + Image */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className="text-4xl md:text-5xl font-black mb-10">
//               Why Graphic Design Is Important for Your Business
//             </h2>

//             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//               Graphic design plays an important role in how people see and understand your brand.
//               <br /><br />
//               A strong visual design can help your business:
//             </p>

//             <ul className="space-y-5 text-lg">
//               {whyImportant.map((point, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                   <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
//                   <span>{point}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <p className="mt-10 text-lg text-gray-300">
//               At Atlas Knots IT Solution, we focus on creating designs that are creative, clear, and aligned with your business goals.
//             </p>
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={images.designer}
//             alt="Graphic designer creating brand visuals"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//           />
//         </div>
//       </section>

//       {/* Lasting Impression + Social Graphics */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Designs That Leave a Lasting Impression
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//               <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//                 Our graphic designers spend time understanding your business, your audience, and your brand message before creating any design.
//                 <br /><br />
//                 We make sure every design:
//               </p>

//               <ul className="space-y-5 text-lg mb-10">
//                 {["Matches your brand identity", "Communicates your message clearly", "Looks modern and attractive", "Works well on digital platforms and print materials"].map((point, i) => (
//                   <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                     <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
//                     <span>{point}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               <p className="text-xl text-gray-300 leading-relaxed">
//                 From logos and marketing creatives to promotional graphics and videos, we design visuals that help businesses connect with their audience and grow their brand.
//               </p>
//             </motion.div>

//             <motion.img
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               src={images.socialGraphics}
//               alt="Creative social media graphics and branding examples"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Solutions for Every Business + Video Editing */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={images.videoEdit}
//             alt="Professional video editing interface for brand content"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
//           />

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
//             <h2 className="text-4xl md:text-5xl font-black mb-10">
//               Graphic Design Solutions for Every Business
//             </h2>

//             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//               Whether you are a startup, small business, or established company, we provide graphic design solutions that match your needs.
//               <br /><br />
//               Our team works with businesses from different industries and creates designs that help promote:
//             </p>

//             <ul className="space-y-4 text-lg mb-10">
//               {["Brands", "Products", "Services", "Marketing campaigns"].map((item, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                   <span className="text-red-500 text-2xl">→</span>
//                   <span>{item}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <p className="text-xl text-gray-300 leading-relaxed">
//               Our goal is simple — create designs that people notice, remember, and trust.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Why Choose Atlas Knots IT Solution for <span className="text-red-500">Graphic Designing?</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChoose.map((reason, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all"
//               >
//                 <div className="text-5xl font-black text-red-500 mb-6 opacity-80">{`0${idx + 1}`}</div>
//                 <p className="text-lg font-medium leading-relaxed">{reason}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How Designs Help Grow + CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             How Our Designs Help Your Business Grow
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {howHelpGrow.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600 transition-all"
//               >
//                 <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
//                 <p className="text-lg leading-relaxed">{point}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
//               Let’s Create Designs That <span className="text-red-500">Represent Your Brand</span>
//             </motion.h2>

//             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//               At Atlas Knots IT Solution, we believe every business deserves designs that reflect its true identity.
//               <br /><br />
//               If you are looking for creative, reliable, and professional graphic designing services, our team is ready to help.
//               <br /><br />
//               Connect with us today and let’s create designs that help your brand look better, communicate better, and grow faster.
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

//       {/* FAQ Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
//         <div className="max-w-5xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Frequently Asked Questions (FAQ)
//           </motion.h2>

//           <div className="space-y-8">
//             {[
//               {
//                 q: "What graphic design services does Atlas Knots IT Solution provide?",
//                 a: "At Atlas Knots IT Solution, we provide a wide range of graphic design services including logo design, social media creatives, marketing banners, brand identity design, promotional graphics, and video editing. Our goal is to create visuals that represent your brand and attract your audience.",
//               },
//               {
//                 q: "Why is graphic design important for my business?",
//                 a: "Graphic design helps your business create a strong first impression. Good visuals make your brand look professional, help people remember your business, and communicate your message clearly to customers.",
//               },
//               {
//                 q: "Do you create social media graphics for marketing?",
//                 a: "Yes, we design creative social media posts, ad creatives, banners, and promotional graphics that help businesses increase engagement and reach more people online.",
//               },
//               {
//                 q: "Do you provide affordable graphic design services?",
//                 a: "Yes. Atlas Knots IT Solution offers cost-effective graphic design services suitable for startups, small businesses, and growing companies.",
//               },
//               {
//                 q: "How can I start a graphic design project with Atlas Knots IT Solution?",
//                 a: "You can simply contact our team through our website or phone. We will discuss your requirements, understand your brand needs, and start creating designs that fit your business goals.",
//               },
//             ].map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
//               >
//                 <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Palette, Image as ImageIcon, Video, CheckCircle } from "lucide-react";

// const images = {
//   hero: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   designer: "https://images.unsplash.com/photo-1558655146-9f40138f37f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   logoProcess: "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   socialGraphics: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   videoEdit: "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     icon: Palette,
//     title: "Logo Designing",
//     desc: "Your logo is the face of your brand. We design unique logos that represent your business values and help people remember your brand easily.",
//   },
//   {
//     icon: ImageIcon,
//     title: "Image Designing",
//     desc: "Our designers create eye-catching images for social media, websites, advertisements, and marketing campaigns.",
//   },
//   {
//     icon: Video,
//     title: "Video Editing",
//     desc: "Videos are one of the most powerful ways to communicate online. We edit and create professional videos that engage your audience and promote your brand.",
//   },
// ];

// const whyImportant = [
//   "Create a memorable brand identity",
//   "Attract customers quickly",
//   "Communicate your message clearly",
//   "Build trust with your audience",
//   "Promote products and services effectively",
// ];

// const whyChoose = [
//   "Creative and Experienced Designers – Our team combines creativity and experience to design visuals that represent your brand perfectly.",
//   "Unique and Custom Designs – Every design we create is unique and tailored to your business identity.",
//   "Focus on Brand Identity – We create designs that help build a strong and recognizable brand image.",
//   "Timely Delivery – We respect your time and ensure that your design projects are delivered within the promised timeline.",
// ];

// const howHelpGrow = [
//   "Get high-quality graphic designs at affordable pricing for your business or product launch.",
//   "Our designers bring creative ideas that help your brand stand out from competitors.",
//   "Our designs help establish a strong and professional brand identity.",
//   "We create visuals that increase brand awareness and attract more customers.",
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// export default function GraphicDesigning() {
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
//       attributeFilter: ["class"],
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Theme-aware classes
//   const cardClass = `rounded-2xl p-10 transition-all duration-300 ${
//     isDark
//       ? "bg-gray-900/70 backdrop-blur-sm border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
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
//             alt="Creative graphic designer workspace"
//             className="w-full h-full object-cover opacity-25 brightness-60"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-t ${
//               isDark
//                 ? "from-black via-black/85 to-transparent"
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
//             className={`text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
//           >
//             Creative Graphic Design Services That Build{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Strong Brand Identity
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className={`text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
//           >
//             At Atlas Knots IT Solution, we believe graphic design is more than just making things look good. It is about showing your business message clearly through visuals.
//             <br /><br />
//             A good design can tell your story, build trust, and help people remember your brand.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Start Your Project <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all ${
//               isDark
//                 ? "border-red-600/70 text-red-400 hover:bg-red-950/50"
//                 : "border-red-600 text-red-600 hover:bg-red-50"
//             }`}>
//               View Portfolio →
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ====================== SERVICES SECTION ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Our Graphic Designing <span className={accentClass}>Services</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className={cardClass}
//               >
//                 <service.icon className={`w-16 h-16 md:w-20 md:h-20 ${accentClass} mx-auto mb-8 group-hover:scale-110 transition-transform`} />
//                 <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${headingClass}`}>{service.title}</h3>
//                 <p className={`text-lg leading-relaxed ${bodyClass}`}>{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== WHY IMPORTANT ====================== */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}>
//               Why Graphic Design Is Important for Your Business
//             </h2>

//             <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
//               Graphic design plays an important role in how people see and understand your brand.
//               <br /><br />
//               A strong visual design can help your business:
//             </p>

//             <ul className="space-y-5 text-lg">
//               {whyImportant.map((point, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                   <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
//                   <span className={bodyClass}>{point}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <p className={`mt-10 text-lg ${bodyClass}`}>
//               At Atlas Knots IT Solution, we focus on creating designs that are creative, clear, and aligned with your business goals.
//             </p>
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={images.designer}
//             alt="Graphic designer creating brand visuals"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//           />
//         </div>
//       </section>

//       {/* ====================== LASTING IMPRESSION ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-12 ${headingClass}`}
//           >
//             Designs That Leave a Lasting Impression
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//               <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
//                 Our graphic designers spend time understanding your business, your audience, and your brand message before creating any design.
//                 <br /><br />
//                 We make sure every design:
//               </p>

//               <ul className="space-y-5 text-lg mb-10">
//                 {["Matches your brand identity", "Communicates your message clearly", "Looks modern and attractive", "Works well on digital platforms and print materials"].map((point, i) => (
//                   <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                     <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
//                     <span className={bodyClass}>{point}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               <p className={`text-xl leading-relaxed ${bodyClass}`}>
//                 From logos and marketing creatives to promotional graphics and videos, we design visuals that help businesses connect with their audience and grow their brand.
//               </p>
//             </motion.div>

//             <motion.img
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               src={images.socialGraphics}
//               alt="Creative social media graphics and branding examples"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ====================== SOLUTIONS FOR EVERY BUSINESS ====================== */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={images.videoEdit}
//             alt="Professional video editing interface for brand content"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
//           />

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
//             <h2 className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}>
//               Graphic Design Solutions for Every Business
//             </h2>

//             <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
//               Whether you are a startup, small business, or established company, we provide graphic design solutions that match your needs.
//               <br /><br />
//               Our team works with businesses from different industries and creates designs that help promote:
//             </p>

//             <ul className="space-y-4 text-lg mb-10">
//               {["Brands", "Products", "Services", "Marketing campaigns"].map((item, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
//                   <span className="text-red-500 text-2xl">→</span>
//                   <span className={bodyClass}>{item}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <p className={`text-xl leading-relaxed ${bodyClass}`}>
//               Our goal is simple — create designs that people notice, remember, and trust.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ====================== WHY CHOOSE US ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Why Choose Atlas Knots IT Solution for <span className={accentClass}>Graphic Designing?</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChoose.map((reason, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={cardClass}
//               >
//                 <div className={`text-5xl font-black ${accentClass} mb-6 opacity-80`}>{`0${idx + 1}`}</div>
//                 <p className={`text-lg font-medium leading-relaxed ${bodyClass}`}>{reason}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== HOW DESIGNS HELP GROW + CTA ====================== */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//           >
//             How Our Designs Help Your Business Grow
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {howHelpGrow.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600 transition-all ${
//                   isDark
//                     ? "bg-gradient-to-br from-gray-900 to-black"
//                     : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className={`text-5xl font-black ${accentClass} mb-6`}>{`0${idx + 1}`}</div>
//                 <p className={`text-lg leading-relaxed ${bodyClass}`}>{point}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.h2 variants={fadeInUp} className={`text-4xl md:text-6xl font-black mb-10 ${headingClass}`}>
//               Let’s Create Designs That <span className={accentClass}>Represent Your Brand</span>
//             </motion.h2>

//             <motion.p variants={fadeInUp} className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
//               At Atlas Knots IT Solution, we believe every business deserves designs that reflect its true identity.
//               <br /><br />
//               If you are looking for creative, reliable, and professional graphic designing services, our team is ready to help.
//               <br /><br />
//               Connect with us today and let’s create designs that help your brand look better, communicate better, and grow faster.
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

//       {/* ====================== FAQ SECTION ====================== */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-gray-100"}`}>
//         <div className="max-w-5xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//           >
//             Frequently Asked Questions (FAQ)
//           </motion.h2>

//           <div className="space-y-8">
//             {[
//               {
//                 q: "What graphic design services does Atlas Knots IT Solution provide?",
//                 a: "At Atlas Knots IT Solution, we provide a wide range of graphic design services including logo design, social media creatives, marketing banners, brand identity design, promotional graphics, and video editing. Our goal is to create visuals that represent your brand and attract your audience.",
//               },
//               {
//                 q: "Why is graphic design important for my business?",
//                 a: "Graphic design helps your business create a strong first impression. Good visuals make your brand look professional, help people remember your business, and communicate your message clearly to customers.",
//               },
//               {
//                 q: "Do you create social media graphics for marketing?",
//                 a: "Yes, we design creative social media posts, ad creatives, banners, and promotional graphics that help businesses increase engagement and reach more people online.",
//               },
//               {
//                 q: "Do you provide affordable graphic design services?",
//                 a: "Yes. Atlas Knots IT Solution offers cost-effective graphic design services suitable for startups, small businesses, and growing companies.",
//               },
//               {
//                 q: "How can I start a graphic design project with Atlas Knots IT Solution?",
//                 a: "You can simply contact our team through our website or phone. We will discuss your requirements, understand your brand needs, and start creating designs that fit your business goals.",
//               },
//             ].map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`border border-red-900/40 rounded-2xl p-8 ${isDark ? "bg-gray-900/70" : "bg-white shadow"}`}
//               >
//                 <h3 className={`text-2xl font-bold mb-4 ${accentClass}`}>{faq.q}</h3>
//                 <p className={`text-lg leading-relaxed ${bodyClass}`}>{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );

// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Image as ImageIcon,
  Video,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2340&q=80",
  designer:
    "https://images.unsplash.com/photo-1558655146-9f40138f37f5?auto=format&fit=crop&w=2340&q=80",
  logoProcess:
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?auto=format&fit=crop&w=2340&q=80",
  socialGraphics:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2340&q=80",
  videoEdit:
    "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?auto=format&fit=crop&w=2340&q=80",
};

const services = [
  {
    icon: Palette,
    title: "Logo Designing",
    desc: "Your logo is the face of your brand. We design unique, memorable logos that perfectly represent your business values.",
  },
  {
    icon: ImageIcon,
    title: "Image & Creative Designing",
    desc: "Eye-catching social media posts, banners, advertisements, and marketing visuals that grab attention instantly.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional video editing for Reels, YouTube, ads, and brand stories that engage and convert your audience.",
  },
];

const whyImportant = [
  "Create a strong and memorable brand identity",
  "Attract customers at first glance",
  "Communicate your message clearly",
  "Build trust and credibility",
  "Stand out from your competitors",
];

const whyChoose = [
  "Creative and experienced designers who understand brand psychology",
  "100% unique and custom designs tailored to your business",
  "Strong focus on building long-term brand identity",
  "Fast turnaround time with multiple revisions",
];

const howHelpGrow = [
  "Get professional designs at affordable prices",
  "Stand out from competitors with creative visuals",
  "Build a strong and consistent brand identity",
  "Increase brand awareness and attract more customers",
];

const faqs = [
  {
    q: "What graphic design services does AI Knots IT Solutions provide?",
    a: "We provide logo design, social media graphics, marketing banners, brand identity kits, promotional materials, and professional video editing.",
  },
  {
    q: "Why is good graphic design important for my business?",
    a: "Great design creates a strong first impression, builds trust, helps people remember your brand, and makes your marketing more effective.",
  },
  {
    q: "Do you design social media graphics and posts?",
    a: "Yes, we specialize in creating engaging social media creatives, Reels thumbnails, ad banners, and consistent brand visuals across all platforms.",
  },
  {
    q: "How long does it take to complete a design project?",
    a: "Simple logo or social media designs usually take 3–7 days. Complex brand identity projects may take 10–21 days depending on revisions.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes, we provide multiple rounds of revisions until you are completely satisfied with the final design.",
  },
  {
    q: "How can I start a graphic design project with you?",
    a: "Just contact us via call or WhatsApp. We'll discuss your requirements and start working on your project quickly.",
  },
];

export default function GraphicDesigning() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [openFaq, setOpenFaq] = useState(null);

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
    : "bg-white border border-gray-200 hover:shadow-2xl";

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-700 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Creative Graphic Design Services in Bhopal - AI Knots"
            className="w-full h-full object-cover brightness-50"
            loading="eager"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${isDark ? "from-black/90 via-black/80 to-black/90" : "from-black/70 via-black/60 to-transparent"}`}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white"
          >
            Professional Graphic Design Services in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white">
              Bhopal
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-2xl md:text-3xl font-bold mb-8 ${accentClass}`}
          >
            Designs That Speak • Brands That Shine
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12 ${isDark ? "text-gray-300" : "text-white/90"}`}
          >
            At{" "}
            <span className="font-semibold text-red-400">
              AI Knots IT Solutions
            </span>
            , we create stunning logos, social media graphics, and videos that
            help your business look professional and grow faster.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold rounded-full shadow-xl flex items-center gap-3 group transition-all">
              Start Your Design Project
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              className={`px-12 py-6 border-2 border-red-500 rounded-full text-xl font-bold transition-all ${isDark ? "text-red-400 hover:bg-red-950/60" : "text-red-600 hover:bg-red-50"}`}
            >
              View Our Work →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Our Graphic Design <span className={accentClass}>Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${cardClass} rounded-3xl p-10 text-center group`}
              >
                <service.icon
                  className={`w-20 h-20 mx-auto mb-8 transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3 className={`text-2xl font-bold mb-6 ${headingClass}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${bodyClass}`}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GRAPHIC DESIGN IS IMPORTANT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}
            >
              Why Graphic Design Matters for Your Business
            </h2>
            <p className={`text-xl mb-10 ${bodyClass}`}>
              Good design is not just about looking pretty — it's about making
              your business memorable and trustworthy.
            </p>
            <ul className="space-y-6 text-lg">
              {whyImportant.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle
                    className={`w-8 h-8 mt-1 flex-shrink-0 ${accentClass}`}
                  />
                  <span className={bodyClass}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.designer}
            alt="Professional graphic designer working on brand visuals"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why Choose <span className={accentClass}>AI Knots</span> for Graphic
            Design?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${cardClass} rounded-3xl p-8`}
              >
                <div
                  className={`text-6xl font-black ${accentClass} mb-6 opacity-75`}
                >{`0${idx + 1}`}</div>
                <p className={`text-lg leading-relaxed ${bodyClass}`}>
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + HOW WE HELP GROW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
          >
            Let’s Create Designs That Make Your Brand{" "}
            <span className={accentClass}>Stand Out</span>
          </motion.h2>

          <motion.p className={`text-xl max-w-3xl mx-auto mb-12 ${bodyClass}`}>
            From logos to social media creatives and video editing — we deliver
            designs that help your business grow in Bhopal and beyond.
          </motion.p>

          <button className="px-16 py-7 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-full shadow-xl transition-all">
            Get Your Custom Design Quote →
          </button>

          <p className="mt-10 text-lg text-gray-500">
            📞 +91 78696 36070 &nbsp; | &nbsp; support@atlaknots.com
          </p>
        </div>
      </section>

      {/* FAQ SECTION - Interactive Dropdown */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
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
                className={`border rounded-2xl overflow-hidden ${isDark ? "border-gray-800 bg-gray-900/50" : "border-gray-200 bg-white"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-all"
                >
                  <span className={`text-xl font-semibold ${headingClass}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {openFaq === idx && (
                  <div className={`px-8 pb-8 text-lg ${bodyClass}`}>
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
