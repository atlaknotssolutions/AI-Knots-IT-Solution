// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   ShieldCheck, Cloud, Server, Database, ArrowUpRight, 
//   Scale, Lock, Cpu, Globe, HardDrive, Zap, Code, 
//   Container, BarChart3, ArrowRight, CheckCircle2 
// } from "lucide-react";

// // Placeholder images from high-quality sources (replace with your branded ones)
// const images = {
//   hero: "https://squaredup.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fz7wg6mcy%2Fproduction-2025%2F9c2a4a40652ca902db2014a6691f5cd810b9a050-1080x588.png%3Fq%3D100%26fit%3Dmax%26auto%3Dformat&w=3840&q=75", // Modern cloud dashboard
//   security: "https://thumbs.dreamstime.com/b/high-quality-futuristic-cyber-security-concept-featuring-glowing-digital-padlock-integrated-advanced-circuit-technology-433569234.jpg",
//   migration: "https://www.nsight-inc.com/wp-content/uploads/2023/11/iStock-1239864853-min.jpg",
//   hybrid: "https://www.hava.io/hubfs/Hybrid_Cloud_Diagram_AWS_Azure.png",
//   k8s: "https://miro.medium.com/1*N2TmMYRqfCcHrYErZJ9JNA.png",
// };

// const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// const cloudTypes = [
//   { icon: Server, title: "Private Cloud", desc: "Fully dedicated environment with complete control, maximum security, and tailored scalability for sensitive workloads.", cta: "Get Started" },
//   { icon: Cloud, title: "Enterprise Cloud", desc: "Cost-optimized, high-performance cloud for growing businesses — reliable, flexible, and ready to scale.", cta: "Get Started" },
//   { icon: ShieldCheck, title: "BFSI Cloud Solutions", desc: "Banking-grade security, compliance, encryption, and disaster recovery built for financial institutions.", cta: "Get Started" },
//   { icon: Globe, title: "Government Cloud", desc: "Compliant, secure infrastructure designed for government digital transformation and public sector needs.", cta: "Get Started" },
//   { icon: Cpu, title: "SAP HANA Cloud Solutions", desc: "High-performance real-time analytics, data processing, and decision-making in the cloud.", cta: "Get Started" },
// ];

// const capabilities = [
//   { icon: ShieldCheck, title: "Advanced Security & Compliance", desc: "Enterprise-grade protection and regulatory adherence." },
//   { icon: HardDrive, title: "Flexible Storage Solutions", desc: "Block, file, object — whatever your needs." },
//   { icon: Cpu, title: "Virtual Machines & Compute", desc: "On-demand high-performance computing." },
//   { icon: Zap, title: "Serverless Computing", desc: "Pay only for actual usage." },
//   { icon: Globe, title: "CDN & Media Services", desc: "Ultra-fast global content delivery." },
//   { icon: Database, title: "Database Management", desc: "Optimized storage and querying." },
//   { icon: BarChart3, title: "Data Lake & Analytics", desc: "Turn raw data into actionable insights." },
//   { icon: Code, title: "DevOps Support", desc: "Automated workflows and faster deployments." },
//   { icon: Container, title: "Kubernetes Services", desc: "Container orchestration and auto-scaling." },
//   { icon: Lock, title: "Business Continuity & DR", desc: "Zero-downtime recovery plans." },
// ];

// export default function CloudSolutions() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img src={images.hero} alt="Modern cloud dashboard" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
//             Empowering Indian Businesses with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Smart Cloud Solutions</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-red-400 mb-8">
//             Scale Securely, Save Costs, Grow Limitlessly
//           </motion.p>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//             At <span className="text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we deliver fast, secure, and scalable cloud infrastructure tailored for Indian startups, enterprises, and regulated sectors.
//           </motion.p>

//           <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
//             {["Advanced data protection", "Pay-as-you-go savings", "Seamless scaling", "Full compliance support"].map((item) => (
//               <li key={item} className="flex items-center gap-2">
//                 <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free Assessment <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Free Consultation
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Why Cloud */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6">
//               Why Your Business Needs <span className="text-red-500">Reliable Cloud</span> Today
//             </motion.h2>
//             <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto">
//               Move beyond outdated hardware — embrace secure, scalable, cost-efficient cloud that grows with you.
//             </motion.p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Lock, title: "Advanced Security", desc: "Protect data with encryption, firewalls, and compliance." },
//               { icon: Server, title: "No More Expensive Hardware", desc: "Eliminate on-prem maintenance costs." },
//               { icon: Scale, title: "Instant Scalability", desc: "Scale resources up/down in minutes." },
//               { icon: Globe, title: "Global Compliance", desc: "Meet Indian & international data regulations." },
//               { icon: BarChart3, title: "Pay-as-You-Use", desc: "Optimize spending with usage-based pricing." },
//             ].map((benefit, idx) => (
//               <motion.div key={idx} variants={fadeInUp} className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group">
//                 <benefit.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4 text-center">{benefit.title}</h3>
//                 <p className="text-gray-300 text-center">{benefit.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.migration}
//             alt="Cloud migration visualization"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Cloud Types */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             Cloud Solutions <span className="text-red-500">Tailored for You</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {cloudTypes.map((type, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//               >
//                 <type.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black mb-4">{type.title}</h3>
//                 <p className="text-lg text-gray-300 mb-8">{type.desc}</p>
//                 <button className="px-8 py-4 bg-red-600/80 rounded-full font-bold hover:bg-red-700 transition-all">
//                   {type.cta} →
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-12">
//             Enterprise-Grade <span className="text-red-500">Cloud Capabilities</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {capabilities.map((cap, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center"
//               >
//                 <cap.icon className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
//                 <p className="text-gray-300">{cap.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-16 grid md:grid-cols-2 gap-12 items-center">
//             <motion.img variants={fadeInUp} src={images.k8s} alt="Kubernetes dashboard" className="rounded-2xl shadow-2xl border border-red-900/30 w-full" loading="lazy" />
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-3xl font-black mb-6">Kubernetes-Powered Scaling</h3>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 Orchestrate containers effortlessly, auto-scale workloads, and deploy faster with our managed Kubernetes services — perfect for modern, cloud-native applications.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
//             Ready to Transform Your Business with <span className="text-red-500">Smart Cloud</span>?
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12">
//             Secure migration, optimized costs, unbreakable security — let's build your future-ready cloud infrastructure today.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//           >
//             Start Your Cloud Journey →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Cloud, Server, Database, ArrowUpRight, 
  Scale, Lock, Cpu, Globe, HardDrive, Zap, Code, 
  Container, BarChart3, ArrowRight, CheckCircle2,
  Sun, Moon 
} from "lucide-react";


// Placeholder images
const images = {
  hero: "https://squaredup.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fz7wg6mcy%2Fproduction-2025%2F9c2a4a40652ca902db2014a6691f5cd810b9a050-1080x588.png%3Fq%3D100%26fit%3Dmax%26auto%3Dformat&w=3840&q=75",
  migration: "https://www.nsight-inc.com/wp-content/uploads/2023/11/iStock-1239864853-min.jpg",
  k8s: "https://miro.medium.com/1*N2TmMYRqfCcHrYErZJ9JNA.png",
};

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const cloudTypes = [
  { icon: Server, title: "Private Cloud", desc: "Fully dedicated environment with complete control, maximum security, and tailored scalability for sensitive workloads.", cta: "Get Started" },
  { icon: Cloud, title: "Enterprise Cloud", desc: "Cost-optimized, high-performance cloud for growing businesses — reliable, flexible, and ready to scale.", cta: "Get Started" },
  { icon: ShieldCheck, title: "BFSI Cloud Solutions", desc: "Banking-grade security, compliance, encryption, and disaster recovery built for financial institutions.", cta: "Get Started" },
  { icon: Globe, title: "Government Cloud", desc: "Compliant, secure infrastructure designed for government digital transformation and public sector needs.", cta: "Get Started" },
  { icon: Cpu, title: "SAP HANA Cloud Solutions", desc: "High-performance real-time analytics, data processing, and decision-making in the cloud.", cta: "Get Started" },
];

const capabilities = [
  { icon: ShieldCheck, title: "Advanced Security & Compliance", desc: "Enterprise-grade protection and regulatory adherence." },
  { icon: HardDrive, title: "Flexible Storage Solutions", desc: "Block, file, object — whatever your needs." },
  { icon: Cpu, title: "Virtual Machines & Compute", desc: "On-demand high-performance computing." },
  { icon: Zap, title: "Serverless Computing", desc: "Pay only for actual usage." },
  { icon: Globe, title: "CDN & Media Services", desc: "Ultra-fast global content delivery." },
  { icon: Database, title: "Database Management", desc: "Optimized storage and querying." },
  { icon: BarChart3, title: "Data Lake & Analytics", desc: "Turn raw data into actionable insights." },
  { icon: Code, title: "DevOps Support", desc: "Automated workflows and faster deployments." },
  { icon: Container, title: "Kubernetes Services", desc: "Container orchestration and auto-scaling." },
  { icon: Lock, title: "Business Continuity & DR", desc: "Zero-downtime recovery plans." },
];

export default function CloudSolutions() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-black dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Theme Toggle */}
     

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Modern cloud dashboard" 
            className="w-full h-full object-cover opacity-20 dark:opacity-30 brightness-75 dark:brightness-50" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent dark:from-black dark:via-black/80" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Empowering Indian Businesses with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Smart Cloud Solutions</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-8">
            Scale Securely, Save Costs, Grow Limitlessly
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-red-600 dark:text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we deliver fast, secure, and scalable cloud infrastructure tailored for Indian startups, enterprises, and regulated sectors.
          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            {["Advanced data protection", "Pay-as-you-go savings", "Seamless scaling", "Full compliance support"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-500" /> {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-800 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free Assessment <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600 text-red-600 dark:border-red-500 dark:text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-50 dark:hover:bg-red-950/50 transition-all">
              Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Cloud */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6">
              Why Your Business Needs <span className="text-red-600 dark:text-red-500">Reliable Cloud</span> Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Move beyond outdated hardware — embrace secure, scalable, cost-efficient cloud that grows with you.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: "Advanced Security", desc: "Protect data with encryption, firewalls, and compliance." },
              { icon: Server, title: "No More Expensive Hardware", desc: "Eliminate on-prem maintenance costs." },
              { icon: Scale, title: "Instant Scalability", desc: "Scale resources up/down in minutes." },
              { icon: Globe, title: "Global Compliance", desc: "Meet Indian & international data regulations." },
              { icon: BarChart3, title: "Pay-as-You-Use", desc: "Optimize spending with usage-based pricing." },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-red-900/40 rounded-2xl p-10 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group"
              >
                <benefit.icon className="w-16 h-16 text-red-600 dark:text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.migration}
            alt="Cloud migration visualization"
            className="rounded-2xl shadow-2xl border border-gray-200 dark:border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Cloud Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Cloud Solutions <span className="text-red-600 dark:text-red-500">Tailored for You</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-red-900/40 rounded-2xl p-10 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group text-center"
              >
                <type.icon className="w-16 h-16 text-red-600 dark:text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4">{type.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{type.desc}</p>
                <button className="px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all">
                  {type.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-12">
            Enterprise-Grade <span className="text-red-600 dark:text-red-500">Cloud Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-red-900/40 rounded-2xl p-8 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group flex flex-col items-center text-center"
              >
                <cap.icon className="w-12 h-12 text-red-600 dark:text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <motion.img variants={fadeInUp} src={images.k8s} alt="Kubernetes dashboard" className="rounded-2xl shadow-2xl border border-gray-200 dark:border-red-900/30 w-full" loading="lazy" />
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-black mb-6">Kubernetes-Powered Scaling</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Orchestrate containers effortlessly, auto-scale workloads, and deploy faster with our managed Kubernetes services — perfect for modern, cloud-native applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black/70">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
            Ready to Transform Your Business with <span className="text-red-600 dark:text-red-500">Smart Cloud</span>?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Secure migration, optimized costs, unbreakable security — let's build your future-ready cloud infrastructure today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-800 transition-all"
          >
            Start Your Cloud Journey →
          </motion.button>
        </div>
      </section>
    </div>
  );
}