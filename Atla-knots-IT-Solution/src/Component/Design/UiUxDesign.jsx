// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Layout,
//   PenTool,
//   MousePointer,
//   RefreshCw,
//   Users,
//   Eye,
//   Palette,
//   Figma,
//   Smartphone,
//   CheckCircle2,
//   ArrowRight,
//   Zap,
//   Shield,
//   Clock,
//   DollarSign,
//   Headphones,
//   Briefcase,
//   Truck,
//   Zap as UtilityIcon,
//   ShoppingCart,
//   HeartPulse,
//   GraduationCap,
//   Plane
// } from "lucide-react";

// // Updated 2026-relevant images (immersive, glassmorphic, AI-driven UI vibes)
// const images = {
//   hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000", // Futuristic dashboard / code + design
//   wireframe: "https://images.unsplash.com/photo-1581287053822-fd7bf4f1b16f?auto=format&fit=crop&q=80&w=2000", // Wireframing session
//   uiDesign: "https://images.unsplash.com/photo-1551650975-60cb5d043c9e?auto=format&fit=crop&q=80&w=2000", // Modern app UI
//   prototype: "https://images.unsplash.com/photo-1555066931-bf19c0fd1085?auto=format&fit=crop&q=80&w=2000", // Interactive prototype
//   testing: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000", // User testing / analytics
// };

// const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// const whyChoose = [
//   { icon: Users, title: "Certified UI/UX Designers", desc: "Access to expert, certified professionals with years of experience." },
//   { icon: Zap, title: "Highly Customized Solutions", desc: "Tailored designs that align perfectly with your brand and goals." },
//   { icon: Clock, title: "On-Time Project Delivery", desc: "We stick to timelines without compromising quality." },
//   { icon: CheckCircle2, title: "95% Client Retention Rate", desc: "Long-term partnerships built on trust and results." },
//   { icon: Shield, title: "Transparent Billing Process", desc: "No surprises – clear, upfront pricing." },
//   { icon: DollarSign, title: "No Contract Lock-Ins", desc: "Flexible engagement that puts you in control." },
// ];

// const services = [
//   { icon: Layout, title: "Wireframes & Prototypes", desc: "Structured wireframes and interactive prototypes to visualize your product early and align with business needs." },
//   { icon: PenTool, title: "User Interface Design", desc: "Visually stunning, intuitive interfaces for web and mobile that create strong first impressions and smooth navigation." },
//   { icon: MousePointer, title: "Interaction Design", desc: "Seamless, meaningful user interactions with smart micro-animations and intuitive elements." },
//   { icon: RefreshCw, title: "Redesign Services", desc: "Modernize outdated designs with better usability, structure, and 2026 trends like glassmorphism & immersive elements." },
//   { icon: Eye, title: "User Testing", desc: "Rigorous usability testing to identify issues and ensure high-performing, user-approved products." },
//   { icon: Palette, title: "Visual Design", desc: "Compelling visuals with color theory, typography, and graphics that boost engagement and brand identity." },
// ];

// const tools = ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "InVision"];

// const trustedPoints = [
//   "Dedicated Project Team – Close collaboration for timely, high-quality delivery",
//   "Tailor-Made Solutions – Built around your unique goals and audience",
//   "Technical Expertise – Creative design fused with scalable, secure tech",
//   "Advanced Tools & Techniques – Modern methods for performance and usability",
//   "Budget-Friendly Approach – Premium quality without breaking the bank",
//   "Ongoing Support – Continuous assistance for long-term success",
// ];

// const importance = [
//   { title: "Improves Customer Satisfaction & ROI", desc: "Better UX drives engagement, conversions, and loyalty." },
//   { title: "Easy Navigation & Usability", desc: "Smooth experiences keep users coming back." },
//   { title: "Better Understanding of Target Audience", desc: "Aligns products with real user expectations." },
//   { title: "Strengthens Brand Image", desc: "Professional designs build instant trust." },
//   { title: "Saves Time & Cost", desc: "Efficient designs reduce future fixes and updates." },
// ];

// const industries = [
//   { icon: Truck, title: "Logistics", desc: "Scalable solutions for tracking, cloud systems, and management." },
//   { icon: UtilityIcon, title: "Utility", desc: "Custom monitoring and optimization platforms." },
//   { icon: ShoppingCart, title: "E-commerce", desc: "Seamless, high-converting online shopping experiences." },
//   { icon: HeartPulse, title: "Healthcare", desc: "Secure, compliant solutions meeting industry standards." },
//   { icon: GraduationCap, title: "Education", desc: "Interactive e-learning platforms for modern needs." },
//   { icon: Plane, title: "Aviation", desc: "Advanced, complex IT solutions tailored to aviation." },
// ];

// const faqs = [
//   { q: "Is there any hidden cost?", a: "No, we maintain complete transparency with no hidden charges." },
//   { q: "Where are your UI/UX designers located?", a: "Our team operates across India with global project delivery capabilities." },
//   { q: "How do you ensure data and IP security?", a: "We follow strict confidentiality protocols and security standards." },
//   { q: "How does payment work?", a: "Flexible payment models based on project scope and milestones." },
//   { q: "Can I choose my designer?", a: "Yes, we provide the option to work with preferred resources." },
//   { q: "How do you communicate during the project?", a: "Regular updates via calls, emails, and project management tools." },
// ];

// export default function UiUxDesign() {
//   const [openFaq, setOpenFaq] = useState(null);
// const [showScrollTop, setShowScrollTop] = useState(false);

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

//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img src={images.hero} alt="Futuristic UI/UX Dashboard" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
//             Best UI/UX Design Company{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">AI Knots IT Solutions</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-red-400 mb-8">
//             Design Experiences That Convert Visitors Into Customers
//           </motion.p>

//           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
//             AI Knots IT Solutions delivers high-performing UI/UX designs, websites, and digital solutions tailored to grow your business in 2026 and beyond.
//           </motion.p>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//             We specialize in intuitive, engaging interfaces enhanced by AI personalization, immersive elements, and user psychology to boost usability, engagement, and conversions.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free Design Consultation <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Free UX Audit
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             Why Choose <span className="text-red-500">AI Knots IT Solutions</span>?
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChoose.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center"
//               >
//                 <item.icon className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             Our <span className="text-red-500">UI/UX Design Services</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((serv, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <serv.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4 text-center">{serv.title}</h3>
//                 <p className="text-gray-300 text-center">{serv.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Expertise & Tools */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
//             Our Expertise in <span className="text-red-500">UI/UX Design</span>
//           </motion.h2>

//           <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
//             Strong capabilities in wireframing, prototyping, user research, visual design, and branding – enhanced with 2026 trends like AI collaboration and multimodal interfaces.
//           </motion.p>

//           <div className="flex flex-wrap justify-center gap-6 md:gap-10">
//             {tools.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-800/60 border border-red-900/30 rounded-xl px-8 py-4 text-xl font-semibold"
//               >
//                 {tool}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What Makes Us Trusted */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             What Makes AI Knots a <span className="text-red-500">Trusted UI/UX Partner</span>?
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {trustedPoints.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center flex items-center justify-center"
//               >
//                 <CheckCircle2 className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
//                 <p className="text-lg font-semibold">{point}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why UI/UX is Important */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             Why <span className="text-red-500">UI/UX Design</span> Matters in 2026
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {importance.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
//                 <p className="text-gray-300 text-center">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
//             Industries We <span className="text-red-500">Serve</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((ind, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center"
//               >
//                 <ind.icon className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4">{ind.title}</h3>
//                 <p className="text-gray-300">{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
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
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">{faq.q}</span>
//                   <span className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
//                 </button>
//                 {openFaq === idx && (
//                   <div className="px-8 pb-8 pt-2 text-gray-300 leading-relaxed">{faq.a}</div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-950/30 to-black">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
//             Let’s Build Something <span className="text-red-500">Amazing</span> Together
//           </motion.h2>

//           <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
//             Looking for a UI/UX design company that delivers creativity, performance, and real business results? AI Knots IT Solutions is your partner.
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

//           <button
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
import { useTheme } from "../../context/ThemeContext"; // ← Added
import { motion } from "framer-motion";
import {
  Layout,
  PenTool,
  MousePointer,
  RefreshCw,
  Users,
  Eye,
  Palette,
  Figma,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Headphones,
  Briefcase,
  Truck,
  Zap as UtilityIcon,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Plane,
} from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
  wireframe:
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f1b16f?auto=format&fit=crop&q=80&w=2000",
  uiDesign:
    "https://images.unsplash.com/photo-1551650975-60cb5d043c9e?auto=format&fit=crop&q=80&w=2000",
  prototype:
    "https://images.unsplash.com/photo-1555066931-bf19c0fd1085?auto=format&fit=crop&q=80&w=2000",
  testing:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const whyChoose = [
  {
    icon: Users,
    title: "Certified UI/UX Designers",
    desc: "Access to expert, certified professionals with years of experience.",
  },
  {
    icon: Zap,
    title: "Highly Customized Solutions",
    desc: "Tailored designs that align perfectly with your brand and goals.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    desc: "We stick to timelines without compromising quality.",
  },
  {
    icon: CheckCircle2,
    title: "95% Client Retention Rate",
    desc: "Long-term partnerships built on trust and results.",
  },
  {
    icon: Shield,
    title: "Transparent Billing Process",
    desc: "No surprises – clear, upfront pricing.",
  },
  {
    icon: DollarSign,
    title: "No Contract Lock-Ins",
    desc: "Flexible engagement that puts you in control.",
  },
];

const services = [
  {
    icon: Layout,
    title: "Wireframes & Prototypes",
    desc: "Structured wireframes and interactive prototypes to visualize your product early and align with business needs.",
  },
  {
    icon: PenTool,
    title: "User Interface Design",
    desc: "Visually stunning, intuitive interfaces for web and mobile that create strong first impressions and smooth navigation.",
  },
  {
    icon: MousePointer,
    title: "Interaction Design",
    desc: "Seamless, meaningful user interactions with smart micro-animations and intuitive elements.",
  },
  {
    icon: RefreshCw,
    title: "Redesign Services",
    desc: "Modernize outdated designs with better usability, structure, and 2026 trends like glassmorphism & immersive elements.",
  },
  {
    icon: Eye,
    title: "User Testing",
    desc: "Rigorous usability testing to identify issues and ensure high-performing, user-approved products.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    desc: "Compelling visuals with color theory, typography, and graphics that boost engagement and brand identity.",
  },
];

const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Sketch",
  "InVision",
];

const trustedPoints = [
  "Dedicated Project Team – Close collaboration for timely, high-quality delivery",
  "Tailor-Made Solutions – Built around your unique goals and audience",
  "Technical Expertise – Creative design fused with scalable, secure tech",
  "Advanced Tools & Techniques – Modern methods for performance and usability",
  "Budget-Friendly Approach – Premium quality without breaking the bank",
  "Ongoing Support – Continuous assistance for long-term success",
];

const importance = [
  {
    title: "Improves Customer Satisfaction & ROI",
    desc: "Better UX drives engagement, conversions, and loyalty.",
  },
  {
    title: "Easy Navigation & Usability",
    desc: "Smooth experiences keep users coming back.",
  },
  {
    title: "Better Understanding of Target Audience",
    desc: "Aligns products with real user expectations.",
  },
  {
    title: "Strengthens Brand Image",
    desc: "Professional designs build instant trust.",
  },
  {
    title: "Saves Time & Cost",
    desc: "Efficient designs reduce future fixes and updates.",
  },
];

const industries = [
  {
    icon: Truck,
    title: "Logistics",
    desc: "Scalable solutions for tracking, cloud systems, and management.",
  },
  {
    icon: UtilityIcon,
    title: "Utility",
    desc: "Custom monitoring and optimization platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Seamless, high-converting online shopping experiences.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Secure, compliant solutions meeting industry standards.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Interactive e-learning platforms for modern needs.",
  },
  {
    icon: Plane,
    title: "Aviation",
    desc: "Advanced, complex IT solutions tailored to aviation.",
  },
];

const faqs = [
  {
    q: "Is there any hidden cost?",
    a: "No, we maintain complete transparency with no hidden charges.",
  },
  {
    q: "Where are your UI/UX designers located?",
    a: "Our team operates across India with global project delivery capabilities.",
  },
  {
    q: "How do you ensure data and IP security?",
    a: "We follow strict confidentiality protocols and security standards.",
  },
  {
    q: "How does payment work?",
    a: "Flexible payment models based on project scope and milestones.",
  },
  {
    q: "Can I choose my designer?",
    a: "Yes, we provide the option to work with preferred resources.",
  },
  {
    q: "How do you communicate during the project?",
    a: "Regular updates via calls, emails, and project management tools.",
  },
];

export default function UiUxDesign() {
  const { isDark } = useTheme(); // ← Theme Hook Added

  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-600/60 rounded-2xl p-10 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl rounded-2xl p-10 transition-all group";

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
            alt="Futuristic UI/UX Dashboard"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className={`absolute inset-0 transition-all duration-700
            ${
              isDark
                ? "bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"
                : "bg-gradient-to-t from-black/70 via-black/50 to-transparent"
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
            className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Best UI/UX Design Company{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              AI Knots IT Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-red-500 mb-8"
          >
            Design Experiences That Convert Visitors Into Customers
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed ${bodyClass}`}
          >
            AI Knots IT Solutions delivers high-performing UI/UX designs,
            websites, and digital solutions tailored to grow your business in
            2026 and beyond.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
          >
            We specialize in intuitive, engaging interfaces enhanced by AI
            personalization, immersive elements, and user psychology to boost
            usability, engagement, and conversions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free Design Consultation{" "}
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
              Free UX Audit
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why Choose{" "}
            <span className={accentClass}>AI Knots IT Solutions</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <item.icon
                  className={`w-16 h-16 ${accentClass} mb-6 group-hover:scale-110 transition-transform mx-auto`}
                />
                <h3
                  className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
                >
                  {item.title}
                </h3>
                <p className={`text-center ${bodyClass}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
            Our <span className={accentClass}>UI/UX Design Services</span>
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
                  className={`w-16 h-16 ${accentClass} mb-6 mx-auto group-hover:scale-110 transition-transform`}
                />
                <h3
                  className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
                >
                  {serv.title}
                </h3>
                <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Tools */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
          >
            Our Expertise in <span className={accentClass}>UI/UX Design</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl mb-10 max-w-4xl mx-auto ${bodyClass}`}
          >
            Strong capabilities in wireframing, prototyping, user research,
            visual design, and branding – enhanced with 2026 trends like AI
            collaboration and multimodal interfaces.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`px-8 py-4 text-xl font-semibold rounded-xl border transition-all
                  ${
                    isDark
                      ? "bg-gray-800/60 border-red-900/30 hover:border-red-500/50"
                      : "bg-white border-gray-300 hover:border-red-500"
                  }`}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Trusted */}
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
            What Makes AI Knots a{" "}
            <span className={accentClass}>Trusted UI/UX Partner</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustedPoints.map((point, idx) => (
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
                    className={`w-8 h-8 ${accentClass} flex-shrink-0`}
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

      {/* Why UI/UX is Important */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why <span className={accentClass}>UI/UX Design</span> Matters in
            2026
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importance.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <h3
                  className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
                >
                  {item.title}
                </h3>
                <p className={`text-center ${bodyClass}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
          >
            Industries We <span className={accentClass}>Serve</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cardClass}
              >
                <ind.icon
                  className={`w-16 h-16 ${accentClass} mb-6 group-hover:scale-110 transition-transform mx-auto`}
                />
                <h3 className={`text-2xl font-bold mb-4 ${headingClass}`}>
                  {ind.title}
                </h3>
                <p className={`text-center ${bodyClass}`}>{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-white"}`}
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
                      ? "border-red-900/40 bg-gray-900/30"
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
            Let’s Build Something <span className={accentClass}>Amazing</span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${bodyClass}`}
          >
            Looking for a UI/UX design company that delivers creativity,
            performance, and real business results? AI Knots IT Solutions is
            your partner.
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
