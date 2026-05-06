// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Brain, Bot,Users, LineChart, MessageSquare, Sparkles,
//   Zap, Database, ArrowRight, CheckCircle2,
//   Hospital, ShoppingCart, Landmark, GraduationCap, Home
// } from "lucide-react";

// // High-quality images (you can replace with your own branded shots later)
// const images = {
//   hero: "https://cdn.dribbble.com/userupload/44332008/file/e8f3602694b9c67cf4dd1d12f13ce1ae.png", // Futuristic AI Dashboard
//   neural: "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg", // Neural network
//   analytics: "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg", // Predictive analytics
//   chatbot: "https://cdn.dribbble.com/userupload/43417415/file/original-3a4c6454500a9fdfa0fc839bc321c12c.jpg?resize=752x&vertical=center", // AI Chat UI
//   recommendation: "https://cdn.prod.website-files.com/64c231f464b91d6bd0303294/674e92f1bbfbcacfd576aefe_AD_4nXcsfCL2ryHHhRfH1QH-qgxeG1YopDS-0AE007vH0AaJeWyWhPcwmG6TmIwqa3etcDsnE2GU642XJYMch1JHRsAbh6XZymeO5Xd_8apUM13l0LUpJ4o41oG554XD6BnWTIAV_ax2tg.png", // Recommendation system
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
//   { icon: Zap, title: "AI-Based Automation", desc: "Automate customer support, data entry, workflows — save time & reduce costs." },
//   { icon: LineChart, title: "Predictive Analytics", desc: "Forecast sales, trends, demand using ML models on historical data." },
//   { icon: MessageSquare, title: "Chatbot Development", desc: "Intelligent AI chatbots for instant responses and 24/7 engagement." },
//   { icon: Database, title: "Data Analysis & Insights", desc: "Process big data to uncover actionable business intelligence." },
//   { icon: Sparkles, title: "Recommendation Systems", desc: "Personalized product/service suggestions to boost sales & retention." },
//   { icon: Brain, title: "Image & Speech Recognition", desc: "Advanced recognition for security, automation, and interactions." },
// ];

// const industries = [
//   { icon: Hospital, title: "Healthcare", desc: "Patient prediction, diagnostics support, personalized care." },
//   { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, recommendations, inventory optimization." },
//   { icon: Landmark, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading." },
//   { icon: GraduationCap, title: "Education", desc: "Adaptive learning, student performance prediction." },
//   { icon: Home, title: "Real Estate", desc: "Property valuation, buyer matching, market trend analysis." },
//   { icon: Users, title: "Startups & Small Businesses", desc: "Affordable AI tools for growth and efficiency." },
// ];

// const faqs = [
//   { q: "What are AI & Machine Learning services?", a: "They help businesses leverage data and automation to streamline operations, enhance decisions, and drive efficiency." },
//   { q: "How can AI help my business?", a: "AI reduces manual effort, improves customer experiences, and boosts decision accuracy with predictive insights." },
//   { q: "Do I need technical knowledge to use AI solutions?", a: "No — we deliver user-friendly, ready-to-use solutions for non-technical teams." },
//   { q: "How long does it take to implement AI solutions?", a: "Varies by scope; basic automation/chatbots in weeks, complex models in months." },
//   { q: "Are AI solutions expensive?", a: "We provide cost-effective, scalable options tailored to your budget and needs." },
// ];

// export default function AIServices() {
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Futuristic AI Dashboard"
//             className="w-full h-full object-cover opacity-30 brightness-50"
//             loading="lazy"
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
//             className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
//           >
//             AI & Machine Learning Services in{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Bhopal
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-2xl md:text-4xl font-bold text-red-400 mb-8"
//           >
//             Turn Data into Decisions — Automate, Predict, Win
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             At <span className="text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we deliver powerful AI/ML solutions that automate processes, uncover insights, and give your business a competitive edge in Bhopal and beyond.
//           </motion.p>

//           <motion.ul
//             variants={fadeInUp}
//             className="flex flex-wrap justify-center gap-6 mb-12 text-lg"
//           >
//             {["Smarter decisions", "Automation savings", "Personalized experiences", "Predictive power"].map((item) => (
//               <li key={item} className="flex items-center gap-2">
//                 <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free AI Consultation
//               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Discuss Your Project
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Our <span className="text-red-500">AI & ML Services</span>
//           </motion.h2>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-8 md:p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center min-h-[260px]"
//               >
//                 <service.icon className="w-14 h-14 md:w-16 md:h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-gray-300 text-base">{service.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.analytics}
//             alt="Predictive Analytics Dashboard"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-8"
//             >
//               Why <span className="text-red-500">Atlas Knots</span> for AI in Bhopal?
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-300 mb-8"
//             >
//               Trusted local partner delivering customized, outcome-focused AI solutions with latest tech and affordable pricing.
//             </motion.p>
//             <motion.ul variants={fadeInUp} className="space-y-4 text-lg">
//               {[
//                 "Custom-built for your specific needs",
//                 "Expert team based right here in Bhopal",
//                 "Using the latest AI tools & frameworks",
//                 "Focus on measurable business ROI",
//                 "Secure, scalable, and future-ready architecture"
//               ].map((point) => (
//                 <li key={point} className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
//                   {point}
//                 </li>
//               ))}
//             </motion.ul>
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.neural}
//             alt="Neural Network Visualization"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Industries We <span className="text-red-500">Empower</span> with AI
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((ind, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//               >
//                 <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
//                 <p className="text-lg text-gray-300">{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Frequently Asked <span className="text-red-500">Questions</span>
//           </motion.h2>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="border border-red-900/40 rounded-xl overflow-hidden bg-gray-900/30"
//               >
//                 <button
//                   type="button"
//                   role="button"
//                   aria-expanded={openFaq === idx}
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
//                 >
//                   <span className="text-lg md:text-xl font-bold pr-4">{faq.q}</span>
//                   <span className={`text-red-500 text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
//                     ▼
//                   </span>
//                 </button>
//                 {openFaq === idx && (
//                   <div className="px-6 pb-6 md:px-8 text-gray-300 text-base leading-relaxed">
//                     {faq.a}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-8"
//           >
//             Ready to <span className="text-red-500">Transform</span> Your Business with AI?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
//           >
//             From intelligent automation to powerful predictive insights — let's build AI that drives real growth for your business in Bhopal.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//           >
//             Start Your AI Journey Today →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Brain, Bot, Users, LineChart, MessageSquare, Sparkles,
//   Zap, Database, ArrowRight, CheckCircle2,
//   Hospital, ShoppingCart, Landmark, GraduationCap, Home,
//   TrendingUp, ShieldAlert, Megaphone, Headphones
// } from "lucide-react";

// import aws  from "../../assets/Images/aws.jpeg";

// // High-quality images (replace with your branded ones when ready)
// const images = {
//   hero: aws, // Futuristic AI Dashboard
//   neural: "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg", // Neural network
//   analytics: "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg", // Predictive analytics
//   chatbot: "https://cdn.dribbble.com/userupload/43417415/file/original-3a4c6454500a9fdfa0fc839bc321c12c.jpg?resize=752x&vertical=center", // AI Chat UI
//   recommendation: "https://cdn.prod.website-files.com/64c231f464b91d6bd0303294/674e92f1bbfbcacfd576aefe_AD_4nXcsfCL2ryHHhRfH1QH-qgxeG1YopDS-0AE007vH0AaJeWyWhPcwmG6TmIwqa3etcDsnE2GU642XJYMch1JHRsAbh6XZymeO5Xd_8apUM13l0LUpJ4o41oG554XD6BnWTIAV_ax2tg.png", // Recommendation system
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
//   { icon: Zap, title: "AI-Based Automation", desc: "We help automate daily business operations such as customer support, data entry, and workflows, saving time and cost." },
//   { icon: LineChart, title: "Predictive Analytics", desc: "Using machine learning models, we analyze past data to predict future outcomes like sales trends, customer actions, and market demand." },
//   { icon: MessageSquare, title: "Chatbot Development", desc: "We build smart AI chatbots that handle customer queries, provide instant responses, and improve user engagement." },
//   { icon: Database, title: "Data Analysis & Insights", desc: "We process large volumes of data to generate meaningful insights that help businesses make informed decisions." },
//   { icon: Sparkles, title: "Recommendation Systems", desc: "We create intelligent systems that suggest products or services based on user behavior, improving sales and customer experience." },
//   { icon: Brain, title: "Image & Speech Recognition", desc: "Our AI solutions can recognize images, voice, and patterns for advanced applications like security, automation, and customer interaction." },
// ];

// const keyFeatures = [
//   "Data-driven decision making",
//   "Scalable and flexible solutions",
//   "Easy integration with existing systems",
//   "Real-time data processing",
//   "Secure and reliable architecture"
// ];

// const industries = [
//   { icon: Hospital, title: "Healthcare", desc: "Patient prediction, diagnostics support, personalized care." },
//   { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, recommendations, inventory optimization." },
//   { icon: Landmark, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading." },
//   { icon: GraduationCap, title: "Education", desc: "Adaptive learning, student performance prediction." },
//   { icon: Home, title: "Real Estate", desc: "Property valuation, buyer matching, market trend analysis." },
//   { icon: Users, title: "Startups & Small Businesses", desc: "Affordable AI tools for growth and efficiency." },
// ];

// const useCases = [
//   { icon: Users, title: "Customer behavior analysis" },
//   { icon: TrendingUp, title: "Sales forecasting" },
//   { icon: ShieldAlert, title: "Fraud detection" },
//   { icon: Zap, title: "Process automation" },
//   { icon: Megaphone, title: "Personalized marketing" },
//   { icon: Headphones, title: "Smart chat support" },
// ];

// const faqs = [
//   { q: "What are AI & Machine Learning services?", a: "These services help businesses use data and automation to improve operations, make better decisions, and increase efficiency." },
//   { q: "How can AI help my business?", a: "AI helps in reducing manual work, improving customer experience, and increasing accuracy in decision-making." },
//   { q: "Do I need technical knowledge to use AI solutions?", a: "No, we provide user-friendly solutions that are easy to use for non-technical users as well." },
//   { q: "How long does it take to implement AI solutions?", a: "It depends on the project, but basic solutions can be implemented within a few weeks." },
//   { q: "Are AI solutions expensive?", a: "We offer cost-effective solutions based on your business needs and budget." },
// ];

// export default function AIServices() {
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

//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Futuristic AI Dashboard"
//             className="w-full h-full object-cover opacity-30 brightness-50"
//             loading="lazy"
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
//             className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
//           >
//             AI & Machine Learning Services in{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Bhopal
//             </span>
//           </motion.h1>
//           <motion.p
//             variants={fadeInUp}
//             className="text-2xl md:text-4xl font-bold text-red-400 mb-8"
//           >
//             Turn Data into Decisions — Automate, Predict, Win
//           </motion.p>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             At <span className="text-red-400 font-semibold">AI Knots IT Solutions</span>, we provide advanced AI & Machine Learning Services that help businesses automate processes, analyze data, and make smarter decisions. In today’s fast-growing digital world, using AI is no longer optional — it’s essential for staying ahead of the competition.
//           </motion.p>
//           <motion.ul
//             variants={fadeInUp}
//             className="flex flex-wrap justify-center gap-6 mb-12 text-lg"
//           >
//             {["Understand customer behavior", "Predict future trends", "Automate repetitive tasks", "Improve decision-making", "Deliver personalized user experiences"].map((item) => (
//               <li key={item} className="flex items-center gap-2">
//                 <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
//               </li>
//             ))}
//           </motion.ul>
//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free AI Consultation
//               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Discuss Your Project
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* What is AI & ML in Business */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-10"
//           >
//             What is <span className="text-red-500">AI & Machine Learning</span> in Business?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
//           >
//             Artificial Intelligence (AI) and Machine Learning (ML) are technologies that allow systems to learn from data and improve over time without manual effort.
//             <br /><br />
//             We help businesses turn their data into powerful insights using AI-driven solutions that improve efficiency, reduce manual work, and increase overall performance.
//           </motion.p>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Our <span className="text-red-500">AI & ML Services</span>
//           </motion.h2>
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-8 md:p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center min-h-[260px]"
//               >
//                 <service.icon className="w-14 h-14 md:w-16 md:h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-gray-300 text-base">{service.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.analytics}
//             alt="Predictive Analytics Dashboard"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-black">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Key Features of Our AI & ML Solutions
//           </motion.h2>
//           <motion.ul
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
//           >
//             {keyFeatures.map((feature, idx) => (
//               <motion.li
//                 key={idx}
//                 variants={fadeInUp}
//                 className="bg-gray-900/60 border border-red-900/30 rounded-xl p-6 text-center text-lg font-medium flex items-center justify-center gap-3"
//               >
//                 <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
//                 {feature}
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-6xl font-black mb-8"
//             >
//               Why Choose <span className="text-red-500">AI Knots IT Solutions</span>?
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-300 mb-8"
//             >
//               AI Knots IT Solutions is a trusted provider of AI & Machine Learning Services in Bhopal, focused on delivering practical and result-oriented solutions. We don’t just build technology, we build solutions that solve real business problems.
//             </motion.p>
//             <motion.ul variants={fadeInUp} className="space-y-4 text-lg">
//               {[
//                 "Customized AI solutions for your business",
//                 "Experienced development team",
//                 "Latest tools and technologies",
//                 "Affordable pricing",
//                 "Focus on real business outcomes"
//               ].map((point) => (
//                 <li key={point} className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
//                   {point}
//                 </li>
//               ))}
//             </motion.ul>
//           </motion.div>
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.neural}
//             alt="Neural Network Visualization"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Industries We Serve
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((ind, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//               >
//                 <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
//                 <p className="text-lg text-gray-300">{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Use Cases */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Use Cases of AI & Machine Learning
//           </motion.h2>
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {useCases.map((useCase, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-xl p-6 flex items-center gap-4 hover:border-red-600/60 transition-all"
//               >
//                 <useCase.icon className="w-10 h-10 text-red-500 flex-shrink-0" />
//                 <span className="text-xl font-bold">{useCase.title}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Frequently Asked <span className="text-red-500">Questions</span>
//           </motion.h2>
//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="border border-red-900/40 rounded-xl overflow-hidden bg-gray-900/30"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
//                 >
//                   <span className="text-lg md:text-xl font-bold pr-4">{faq.q}</span>
//                   <span className={`text-red-500 text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
//                     ▼
//                   </span>
//                 </button>
//                 {openFaq === idx && (
//                   <div className="px-6 pb-6 md:px-8 text-gray-300 text-base leading-relaxed">
//                     {faq.a}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-8"
//           >
//             Get Started with AI Today
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
//           >
//             Transform your business with smart technology. Partner with AI Knots IT Solutions for reliable and result-driven AI & Machine Learning Services in Bhopal. Contact us today to discuss your project and take your business to the next level.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//           >
//             Contact Us Now →
//           </motion.button>
//         </div>
//       </section>

//             <button
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

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Brain, Users, LineChart, MessageSquare, Sparkles,
//   Zap, Database, ArrowRight, CheckCircle2,
//   Hospital, ShoppingCart, Landmark, GraduationCap, Home,
//   TrendingUp, ShieldAlert, Megaphone, Headphones, Sun, Moon
// } from "lucide-react";

// import aws from "../../assets/Images/aws.jpeg";

// const images = {
//   hero: aws,
//   neural: "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg",
//   analytics: "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg",
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
//   { icon: Zap, title: "AI-Based Automation", desc: "We help automate daily business operations such as customer support, data entry, and workflows, saving time and cost." },
//   { icon: LineChart, title: "Predictive Analytics", desc: "Using machine learning models, we analyze past data to predict future outcomes like sales trends, customer actions, and market demand." },
//   { icon: MessageSquare, title: "Chatbot Development", desc: "We build smart AI chatbots that handle customer queries, provide instant responses, and improve user engagement." },
//   { icon: Database, title: "Data Analysis & Insights", desc: "We process large volumes of data to generate meaningful insights that help businesses make informed decisions." },
//   { icon: Sparkles, title: "Recommendation Systems", desc: "We create intelligent systems that suggest products or services based on user behavior, improving sales and customer experience." },
//   { icon: Brain, title: "Image & Speech Recognition", desc: "Our AI solutions can recognize images, voice, and patterns for advanced applications like security, automation, and customer interaction." },
// ];

// const keyFeatures = [
//   "Data-driven decision making",
//   "Scalable and flexible solutions",
//   "Easy integration with existing systems",
//   "Real-time data processing",
//   "Secure and reliable architecture"
// ];

// const industries = [
//   { icon: Hospital, title: "Healthcare", desc: "Patient prediction, diagnostics support, personalized care." },
//   { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, recommendations, inventory optimization." },
//   { icon: Landmark, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading." },
//   { icon: GraduationCap, title: "Education", desc: "Adaptive learning, student performance prediction." },
//   { icon: Home, title: "Real Estate", desc: "Property valuation, buyer matching, market trend analysis." },
//   { icon: Users, title: "Startups & Small Businesses", desc: "Affordable AI tools for growth and efficiency." },
// ];

// const useCases = [
//   { icon: Users, title: "Customer behavior analysis" },
//   { icon: TrendingUp, title: "Sales forecasting" },
//   { icon: ShieldAlert, title: "Fraud detection" },
//   { icon: Zap, title: "Process automation" },
//   { icon: Megaphone, title: "Personalized marketing" },
//   { icon: Headphones, title: "Smart chat support" },
// ];

// const faqs = [
//   { q: "What are AI & Machine Learning services?", a: "These services help businesses use data and automation to improve operations, make better decisions, and increase efficiency." },
//   { q: "How can AI help my business?", a: "AI helps in reducing manual work, improving customer experience, and increasing accuracy in decision-making." },
//   { q: "Do I need technical knowledge to use AI solutions?", a: "No, we provide user-friendly solutions that are easy to use for non-technical users as well." },
//   { q: "How long does it take to implement AI solutions?", a: "It depends on the project, but basic solutions can be implemented within a few weeks." },
//   { q: "Are AI solutions expensive?", a: "We offer cost-effective solutions based on your business needs and budget." },
// ];

// export default function AIServices() {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 400);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   // Theme tokens
//   const t = {
//     bg: isDark
//       ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
//       : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900",
//     sectionBg: isDark ? "bg-black/40" : "bg-gray-100/80",
//     sectionBg2: isDark ? "bg-black/50" : "bg-gray-200/60",
//     sectionBg3: isDark ? "bg-gradient-to-r from-gray-950 to-black" : "bg-gradient-to-r from-gray-100 to-white",
//     sectionBg4: isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gradient-to-b from-white to-gray-100",
//     sectionBg5: isDark ? "bg-black/70" : "bg-gray-100",
//     card: isDark
//       ? "bg-gray-900/70 backdrop-blur-sm border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
//       : "bg-white border border-red-200 hover:border-red-400 hover:shadow-red-100/60 shadow-sm",
//     cardGrad: isDark
//       ? "bg-gradient-to-br from-gray-900 to-black border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
//       : "bg-gradient-to-br from-white to-gray-50 border border-red-200 hover:border-red-400 hover:shadow-red-100",
//     faqCard: isDark ? "border border-red-900/40 bg-gray-900/30" : "border border-red-200 bg-white shadow-sm",
//     faqHover: isDark ? "hover:bg-gray-800/50" : "hover:bg-red-50/60",
//     text: isDark ? "text-gray-300" : "text-gray-600",
//     textMuted: isDark ? "text-gray-400" : "text-gray-500",
//     featureCard: isDark
//       ? "bg-gray-900/60 border border-red-900/30"
//       : "bg-white border border-red-200 shadow-sm",
//     useCase: isDark
//       ? "bg-gray-900/70 border border-red-900/40 hover:border-red-600/60"
//       : "bg-white border border-red-200 hover:border-red-400 shadow-sm",
//     toggleBg: isDark
//       ? "bg-gray-800 border border-gray-700 text-yellow-400 hover:bg-gray-700"
//       : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
//   };

//   return (
//     <div className={`relative ${t.bg} overflow-hidden transition-colors duration-300`}>

//       {/* Theme Toggle Button */}
//       <button
//         onClick={() => setIsDark(!isDark)}
//         className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${t.toggleBg}`}
//         aria-label="Toggle theme"
//       >
//         {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//       </button>

//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Futuristic AI Dashboard"
//             className={`w-full h-full object-cover ${isDark ? "opacity-30 brightness-50" : "opacity-15 brightness-75"}`}
//             loading="lazy"
//           />
//           <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-t from-black via-black/80 to-transparent" : "bg-gradient-to-t from-white via-white/85 to-transparent"}`} />
//         </div>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
//           >
//             AI & Machine Learning Services in{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Bhopal
//             </span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-red-500 mb-8">
//             Turn Data into Decisions — Automate, Predict, Win
//           </motion.p>
//           <motion.p variants={fadeInUp} className={`text-lg md:text-xl ${t.text} mb-12 max-w-4xl mx-auto leading-relaxed`}>
//             At <span className="text-red-500 font-semibold">AI Knots IT Solutions</span>, we provide advanced AI & Machine Learning Services that help businesses automate processes, analyze data, and make smarter decisions. In today's fast-growing digital world, using AI is no longer optional — it's essential for staying ahead of the competition.
//           </motion.p>
//           <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
//             {["Understand customer behavior", "Predict future trends", "Automate repetitive tasks", "Improve decision-making", "Deliver personalized user experiences"].map((item) => (
//               <li key={item} className="flex items-center gap-2">
//                 <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
//               </li>
//             ))}
//           </motion.ul>
//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group text-white">
//               Get Free AI Consultation
//               <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className={`px-12 py-6 border-2 border-red-500 text-red-500 rounded-full text-xl md:text-2xl font-bold transition-all ${isDark ? "hover:bg-red-950/50" : "hover:bg-red-50"}`}>
//               Discuss Your Project
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* What is AI & ML */}
//       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-10"
//           >
//             What is <span className="text-red-500">AI & Machine Learning</span> in Business?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className={`text-xl ${t.text} max-w-5xl mx-auto leading-relaxed`}
//           >
//             Artificial Intelligence (AI) and Machine Learning (ML) are technologies that allow systems to learn from data and improve over time without manual effort.
//             <br /><br />
//             We help businesses turn their data into powerful insights using AI-driven solutions that improve efficiency, reduce manual work, and increase overall performance.
//           </motion.p>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Our <span className="text-red-500">AI & ML Services</span>
//           </motion.h2>
//           <motion.div
//             variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx} variants={fadeInUp}
//                 className={`${t.card} rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-all group flex flex-col items-center text-center min-h-[260px]`}
//               >
//                 <service.icon className="w-14 h-14 md:w-16 md:h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className={`${t.text} text-base`}>{service.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
//             src={images.analytics}
//             alt="Predictive Analytics Dashboard"
//             className={`rounded-2xl shadow-2xl border ${isDark ? "border-red-900/30" : "border-red-200"} mx-auto mt-16 max-w-4xl w-full object-cover`}
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg3} transition-colors duration-300`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Key Features of Our AI & ML Solutions
//           </motion.h2>
//           <motion.ul
//             variants={staggerContainer} initial="hidden" whileInView="visible"
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
//           >
//             {keyFeatures.map((feature, idx) => (
//               <motion.li
//                 key={idx} variants={fadeInUp}
//                 className={`${t.featureCard} rounded-xl p-6 text-center text-lg font-medium flex items-center justify-center gap-3`}
//               >
//                 <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
//                 {feature}
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg2} transition-colors duration-300`}>
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-8">
//               Why Choose <span className="text-red-500">AI Knots IT Solutions</span>?
//             </motion.h2>
//             <motion.p variants={fadeInUp} className={`text-xl ${t.text} mb-8`}>
//               AI Knots IT Solutions is a trusted provider of AI & Machine Learning Services in Bhopal, focused on delivering practical and result-oriented solutions. We don't just build technology, we build solutions that solve real business problems.
//             </motion.p>
//             <motion.ul variants={fadeInUp} className="space-y-4 text-lg">
//               {[
//                 "Customized AI solutions for your business",
//                 "Experienced development team",
//                 "Latest tools and technologies",
//                 "Affordable pricing",
//                 "Focus on real business outcomes"
//               ].map((point) => (
//                 <li key={point} className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
//                   {point}
//                 </li>
//               ))}
//             </motion.ul>
//           </motion.div>
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
//             src={images.neural}
//             alt="Neural Network Visualization"
//             className={`rounded-2xl shadow-2xl border ${isDark ? "border-red-900/30" : "border-red-200"} w-full`}
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Industries We Serve
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((ind, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 className={`${t.cardGrad} rounded-2xl p-10 hover:shadow-2xl transition-all group text-center`}
//               >
//                 <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
//                 <p className={`text-lg ${t.text}`}>{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Use Cases */}
//       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Use Cases of AI & Machine Learning
//           </motion.h2>
//           <motion.div
//             variants={staggerContainer} initial="hidden" whileInView="visible"
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {useCases.map((useCase, idx) => (
//               <motion.div
//                 key={idx} variants={fadeInUp}
//                 className={`${t.useCase} rounded-xl p-6 flex items-center gap-4 transition-all`}
//               >
//                 <useCase.icon className="w-10 h-10 text-red-500 flex-shrink-0" />
//                 <span className="text-xl font-bold">{useCase.title}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg4} transition-colors duration-300`}>
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Frequently Asked <span className="text-red-500">Questions</span>
//           </motion.h2>
//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`${t.faqCard} rounded-xl overflow-hidden`}
//               >
//                 <button
//                   type="button"
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className={`w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center ${t.faqHover} transition-colors`}
//                 >
//                   <span className="text-lg md:text-xl font-bold pr-4">{faq.q}</span>
//                   <span className={`text-red-500 text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
//                 </button>
//                 {openFaq === idx && (
//                   <div className={`px-6 pb-6 md:px-8 ${t.text} text-base leading-relaxed`}>
//                     {faq.a}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg5} transition-colors duration-300`}>
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-8"
//           >
//             Get Started with AI Today
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className={`text-xl md:text-2xl ${t.text} mb-12 max-w-3xl mx-auto`}
//           >
//             Transform your business with smart technology. Partner with AI Knots IT Solutions for reliable and result-driven AI & Machine Learning Services in Bhopal.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
//             className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all text-white"
//           >
//             Contact Us Now →
//           </motion.button>
//         </div>
//       </section>

//       {/* Scroll to Top */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
//           showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
//         }`}
//         aria-label="Scroll back to top"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </button>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  LineChart,
  MessageSquare,
  Sparkles,
  Zap,
  Database,
  ArrowRight,
  CheckCircle2,
  Hospital,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Home,
  TrendingUp,
  ShieldAlert,
  Megaphone,
  Headphones,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import aws from "../../assets/Images/aws.jpeg";

const images = {
  hero: aws,
  neural:
    "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg",
  analytics:
    "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg",
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
    icon: Zap,
    title: "AI-Based Automation",
    desc: "We help automate daily business operations such as customer support, data entry, and workflows, saving time and cost.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Using machine learning models, we analyze past data to predict future outcomes like sales trends, customer actions, and market demand.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    desc: "We build smart AI chatbots that handle customer queries, provide instant responses, and improve user engagement.",
  },
  {
    icon: Database,
    title: "Data Analysis & Insights",
    desc: "We process large volumes of data to generate meaningful insights that help businesses make informed decisions.",
  },
  {
    icon: Sparkles,
    title: "Recommendation Systems",
    desc: "We create intelligent systems that suggest products or services based on user behavior, improving sales and customer experience.",
  },
  {
    icon: Brain,
    title: "Image & Speech Recognition",
    desc: "Our AI solutions can recognize images, voice, and patterns for advanced applications like security, automation, and customer interaction.",
  },
];

const keyFeatures = [
  "Data-driven decision making",
  "Scalable and flexible solutions",
  "Easy integration with existing systems",
  "Real-time data processing",
  "Secure and reliable architecture",
];

const industries = [
  {
    icon: Hospital,
    title: "Healthcare",
    desc: "Patient prediction, diagnostics support, personalized care.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    desc: "Demand forecasting, recommendations, inventory optimization.",
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Fraud detection, risk assessment, algorithmic trading.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Adaptive learning, student performance prediction.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property valuation, buyer matching, market trend analysis.",
  },
  {
    icon: Users,
    title: "Startups & Small Businesses",
    desc: "Affordable AI tools for growth and efficiency.",
  },
];

const useCases = [
  { icon: Users, title: "Customer behavior analysis" },
  { icon: TrendingUp, title: "Sales forecasting" },
  { icon: ShieldAlert, title: "Fraud detection" },
  { icon: Zap, title: "Process automation" },
  { icon: Megaphone, title: "Personalized marketing" },
  { icon: Headphones, title: "Smart chat support" },
];

const faqs = [
  {
    q: "What are AI & Machine Learning services?",
    a: "These services help businesses use data and automation to improve operations, make better decisions, and increase efficiency.",
  },
  {
    q: "How can AI help my business?",
    a: "AI helps in reducing manual work, improving customer experience, and increasing accuracy in decision-making.",
  },
  {
    q: "Do I need technical knowledge to use AI solutions?",
    a: "No, we provide user-friendly solutions that are easy to use for non-technical users as well.",
  },
  {
    q: "How long does it take to implement AI solutions?",
    a: "It depends on the project, but basic solutions can be implemented within a few weeks.",
  },
  {
    q: "Are AI solutions expensive?",
    a: "We offer cost-effective solutions based on your business needs and budget.",
  },
];

export default function AIServices() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const t = {
    bg: isDark
      ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
      : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900",
    sectionBg: isDark ? "bg-black/40" : "bg-gray-100/80",
    sectionBg2: isDark ? "bg-black/50" : "bg-gray-200/60",
    sectionBg3: isDark
      ? "bg-gradient-to-r from-gray-950 to-black"
      : "bg-gradient-to-r from-gray-100 to-white",
    sectionBg4: isDark
      ? "bg-gradient-to-b from-black to-gray-950"
      : "bg-gradient-to-b from-white to-gray-100",
    sectionBg5: isDark ? "bg-black/70" : "bg-gray-100",
    card: isDark
      ? "bg-gray-900/70 backdrop-blur-sm border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
      : "bg-white border border-red-200 hover:border-red-400 hover:shadow-red-100/60 shadow-sm",
    cardGrad: isDark
      ? "bg-gradient-to-br from-gray-900 to-black border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30"
      : "bg-gradient-to-br from-white to-gray-50 border border-red-200 hover:border-red-400 hover:shadow-red-100",
    faqCard: isDark
      ? "border border-red-900/40 bg-gray-900/30"
      : "border border-red-200 bg-white shadow-sm",
    faqHover: isDark ? "hover:bg-gray-800/50" : "hover:bg-red-50/60",
    text: isDark ? "text-gray-300" : "text-gray-600",
    featureCard: isDark
      ? "bg-gray-900/60 border border-red-900/30"
      : "bg-white border border-red-200 shadow-sm",
    useCase: isDark
      ? "bg-gray-900/70 border border-red-900/40 hover:border-red-600/60"
      : "bg-white border border-red-200 hover:border-red-400 shadow-sm",
  };

  return (
    <div
      className={`relative ${t.bg} overflow-hidden transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Futuristic AI Dashboard"
            className={`w-full h-full object-cover ${isDark ? "opacity-30 brightness-50" : "opacity-15 brightness-75"}`}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 ${isDark ? "bg-gradient-to-t from-black via-black/80 to-transparent" : "bg-gradient-to-t from-white via-white/85 to-transparent"}`}
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
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            AI & Machine Learning Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Bhopal
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-bold text-red-500 mb-8"
          >
            Turn Data into Decisions — Automate, Predict, Win
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl ${t.text} mb-12 max-w-4xl mx-auto leading-relaxed`}
          >
            At{" "}
            <span className="text-red-500 font-semibold">
              AI Knots IT Solutions
            </span>
            , we provide advanced AI & Machine Learning Services that help
            businesses automate processes, analyze data, and make smarter
            decisions. In today's fast-growing digital world, using AI is no
            longer optional — it's essential for staying ahead of the
            competition.
          </motion.p>
          <motion.ul
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-12 text-lg"
          >
            {[
              "Understand customer behavior",
              "Predict future trends",
              "Automate repetitive tasks",
              "Improve decision-making",
              "Deliver personalized user experiences",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
              </li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group text-white">
              Get Free AI Consultation
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              className={`px-12 py-6 border-2 border-red-500 text-red-500 rounded-full text-xl md:text-2xl font-bold transition-all ${isDark ? "hover:bg-red-950/50" : "hover:bg-red-50"}`}
            >
              Discuss Your Project
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* What is AI & ML */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-10"
          >
            What is <span className="text-red-500">AI & Machine Learning</span>{" "}
            in Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl ${t.text} max-w-5xl mx-auto leading-relaxed`}
          >
            Artificial Intelligence (AI) and Machine Learning (ML) are
            technologies that allow systems to learn from data and improve over
            time without manual effort.
            <br />
            <br />
            We help businesses turn their data into powerful insights using
            AI-driven solutions that improve efficiency, reduce manual work, and
            increase overall performance.
          </motion.p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Our <span className="text-red-500">AI & ML Services</span>
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`${t.card} rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-all group flex flex-col items-center text-center min-h-[260px]`}
              >
                <service.icon className="w-14 h-14 md:w-16 md:h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className={`${t.text} text-base`}>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.analytics}
            alt="Predictive Analytics Dashboard"
            className={`rounded-2xl shadow-2xl border ${isDark ? "border-red-900/30" : "border-red-200"} mx-auto mt-16 max-w-4xl w-full object-cover`}
            loading="lazy"
          />
        </div>
      </section>

      {/* Key Features */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg3} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Key Features of Our AI & ML Solutions
          </motion.h2>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {keyFeatures.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={fadeInUp}
                className={`${t.featureCard} rounded-xl p-6 text-center text-lg font-medium flex items-center justify-center gap-3`}
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg2} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              Why Choose{" "}
              <span className="text-red-500">AI Knots IT Solutions</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-xl ${t.text} mb-8`}>
              AI Knots IT Solutions is a trusted provider of AI & Machine
              Learning Services in Bhopal, focused on delivering practical and
              result-oriented solutions. We don't just build technology, we
              build solutions that solve real business problems.
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-4 text-lg">
              {[
                "Customized AI solutions for your business",
                "Experienced development team",
                "Latest tools and technologies",
                "Affordable pricing",
                "Focus on real business outcomes",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.neural}
            alt="Neural Network Visualization"
            className={`rounded-2xl shadow-2xl border ${isDark ? "border-red-900/30" : "border-red-200"} w-full`}
            loading="lazy"
          />
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Industries We Serve
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`${t.cardGrad} rounded-2xl p-10 hover:shadow-2xl transition-all group text-center`}
              >
                <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
                <p className={`text-lg ${t.text}`}>{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Use Cases of AI & Machine Learning
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`${t.useCase} rounded-xl p-6 flex items-center gap-4 transition-all`}
              >
                <useCase.icon className="w-10 h-10 text-red-500 flex-shrink-0" />
                <span className="text-xl font-bold">{useCase.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg4} transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${t.faqCard} rounded-xl overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className={`w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center ${t.faqHover} transition-colors`}
                >
                  <span className="text-lg md:text-xl font-bold pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-red-500 text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    className={`px-6 pb-6 md:px-8 ${t.text} text-base leading-relaxed`}
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
        className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg5} transition-colors duration-300`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Get Started with AI Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl md:text-2xl ${t.text} mb-12 max-w-3xl mx-auto`}
          >
            Transform your business with smart technology. Partner with AI Knots
            IT Solutions for reliable and result-driven AI & Machine Learning
            Services in Bhopal.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all text-white"
          >
            Contact Us Now →
          </motion.button>
        </div>
      </section>

      {/* Scroll to Top */}
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
