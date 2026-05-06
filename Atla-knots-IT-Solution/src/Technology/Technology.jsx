

// import React, { useEffect, useState, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Code2, Search, Wrench, Database, Cloud, Smartphone, Shield, Zap,
//   Building2, ShoppingCart, Building, Landmark, ArrowRight, CheckCircle2,
//   Sparkles, Rocket, ChevronRight, Newspaper, Calendar, Clock, TrendingUp,
//   Eye, Share2, Bookmark, MessageCircle, ChevronLeft, Filter, Star, Cpu, Globe,
// } from "lucide-react";
// import {
//   fetchCategories,
//   fetchProducts,
//   setSelectedCategory,
// } from "./technologyslice/technologySlice";

// const Technology = () => {
//   const dispatch = useDispatch();

//   const { categories, selectedCategory, newsItems, loading, error } =
//     useSelector((state) => state.technology);

//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     const categoryId = selectedCategory?._id || null;
//     dispatch(fetchProducts(categoryId));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ MAIN FILTER FIX — Frontend pe reliable filter
//   // Backend filter fail ho toh bhi kaam karega
//   const filteredNewsItems = useMemo(() => {
//     if (!newsItems || newsItems.length === 0) return [];

//     // "All" ya koi category nahi — sab dikhao
//     if (!selectedCategory?._id || selectedCategory?.name === "All") {
//       return newsItems;
//     }

//     return newsItems.filter((item) => {
//       // naam se match (case-insensitive + trim)
//       const itemCat = (item.category || item.categoryName || "").trim().toLowerCase();
//       const selCat = (selectedCategory.name || "").trim().toLowerCase();
//       // _id se match — multiple field names cover kiye
//       const idMatch =
//         item.categoryId === selectedCategory._id ||
//         item.category_id === selectedCategory._id ||
//         item.categoryId?._id === selectedCategory._id;

//       return itemCat === selCat || idMatch;
//     });
//   }, [newsItems, selectedCategory]);

//   const getIconForCategory = (category) => {
//     const cat = (category || "").toLowerCase();
//     if (cat.includes("ai") || cat.includes("artificial intelligence")) return <Cpu className="w-5 h-5" />;
//     if (cat.includes("hardware")) return <Zap className="w-5 h-5" />;
//     if (cat.includes("company") || cat.includes("update")) return <Building2 className="w-5 h-5" />;
//     if (cat.includes("industry") || cat.includes("news")) return <Newspaper className="w-5 h-5" />;
//     if (cat.includes("software") || cat.includes("developer")) return <Code2 className="w-5 h-5" />;
//     return <Globe className="w-5 h-5" />;
//   };

//   return (
//     <div className="bg-black min-h-screen overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-black via-red-950 to-black text-white py-32 md:py-40 overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-64 h-64 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
//             style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`, animationDelay: "0s" }}>
//             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop" alt="Technology" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//           <div className="absolute top-40 right-20 w-72 h-72 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float-delayed"
//             style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.03}deg)`, animationDelay: "1s" }}>
//             <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop" alt="Coding" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//           <div className="absolute bottom-32 left-1/3 w-80 h-80 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
//             style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.04}deg)`, animationDelay: "2s" }}>
//             <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop" alt="Analytics" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-800/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//         </div>

//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//           <div className="absolute top-40 right-40 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
//           <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
//           <div className="absolute top-60 right-1/3 w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
//         </div>

//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//         </div>

//         <div className="absolute inset-0 opacity-5" style={{
//           backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}></div>

//         <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
//           <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full backdrop-blur-sm animate-fade-in">
//             <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
//             <span className="text-red-400 font-semibold text-sm tracking-wider">TECHNOLOGY EXCELLENCE</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight animate-slide-up bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
//             Cutting-Edge Technology Solutions
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
//             We craft high-performance, scalable, and secure digital products that drive real business growth with precision and innovation.
//           </p>
//           <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
//             <button className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-10 py-5 rounded-lg shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//               <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </button>
//             <button className="group relative border-2 border-red-500 text-white font-bold px-10 py-5 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105">
//               <span className="flex items-center gap-2">Contact Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 right-10 w-48 h-48 rounded-xl overflow-hidden animate-float-slow">
//             <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop" alt="Tech" className="w-full h-full object-cover" />
//           </div>
//           <div className="absolute bottom-20 left-10 w-56 h-56 rounded-xl overflow-hidden animate-float-slow" style={{ animationDelay: "1s" }}>
//             <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=300&fit=crop" alt="Development" className="w-full h-full object-cover" />
//           </div>
//         </div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Core Services</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//               From ideation to 24/7 support — we deliver end-to-end excellence.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
//             {[
//               { title: "Application & Website Development", icon: Code2, items: [{ text: "Corporate websites", icon: Building2 }, { text: "Enterprise web applications", icon: Cloud }, { text: "Portals & dashboards", icon: Database }, { text: "Mobile applications", icon: Smartphone }, { text: "Microservices & cloud-based systems", icon: Zap }] },
//               { title: "Testing & Quality Assurance", icon: Search, items: [{ text: "Manual testing", icon: CheckCircle2 }, { text: "Automation testing", icon: Zap }, { text: "Performance testing", icon: Rocket }, { text: "Security testing", icon: Shield }] },
//               { title: "Digital Marketing & E-commerce Solutions", icon: ShoppingCart, items: [{ text: "SEO & SEM services", icon: Search }, { text: "Social media marketing", icon: MessageCircle }, { text: "E-commerce platform development", icon: Building }, { text: "Content marketing & strategy", icon: Star }, { text: "Conversion rate optimization", icon: ArrowRight }] },
//               { title: "Production Support & Maintenance", icon: Wrench, items: [{ text: "24×7 application support", icon: Clock }, { text: "Bug fixing & enhancements", icon: Wrench }, { text: "SLA-based support", icon: CheckCircle2 }, { text: "Monitoring & incident management", icon: Shield }] },
//               { title: "BPO & IT Staffing Solutions", icon: Wrench, items: [{ text: "IT staffing & recruitment", icon: Building }, { text: "BPO services", icon: Landmark }, { text: "Remote team augmentation", icon: Building2 }, { text: "Project-based staffing", icon: ArrowRight }] },
//             ].map((service, idx) => {
//               const ServiceIcon = service.icon;
//               return (
//                 <div key={service.title} className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up overflow-hidden" style={{ animationDelay: `${idx * 150}ms` }}>
//                   <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                   <div className="relative z-10">
//                     <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-600/30">
//                       <ServiceIcon className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">{service.title}</h3>
//                     <ul className="space-y-4">
//                       {service.items.map((item, itemIdx) => {
//                         const ItemIcon = item.icon || CheckCircle2;
//                         return (
//                           <li key={item.text} className="flex items-start gap-3 text-gray-300 transform transition-all duration-300 hover:translate-x-2"
//                             style={{ opacity: 0, animation: "slideInLeft 0.5s ease forwards", animationDelay: `${idx * 150 + itemIdx * 100}ms` }}>
//                             <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
//                             <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Tech News Section */}
//       <section className="py-24 bg-black relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="absolute inset-0 opacity-5">
//           <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop" alt="News Background" className="w-full h-full object-cover" />
//         </div>

//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full backdrop-blur-sm animate-fade-in">
//               <Newspaper className="w-4 h-4 text-red-400 animate-pulse" />
//               <span className="text-red-400 font-semibold text-sm tracking-wider">LATEST UPDATES</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Tech News & Insights</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//               Stay updated with the latest technology trends and industry insights
//             </p>
//           </div>

//           {/* ✅ Category Buttons — "All" active check sahi kiya */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
//             <button
//               onClick={() => dispatch(setSelectedCategory({ _id: null, name: "All" }))}
//               className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 !selectedCategory?._id || selectedCategory?.name === "All"
//                   ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
//                   : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
//               }`}
//               style={{ animation: "pop-in 0.5s ease forwards", animationDelay: "0ms" }}
//             >
//               <span className="relative z-10 flex items-center gap-2"><Globe className="w-4 h-4" />All</span>
//               {(!selectedCategory?._id || selectedCategory?.name === "All") && (
//                 <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
//               )}
//             </button>

//             {(categories || []).map((category, idx) => (
//               <button
//                 key={category._id}
//                 onClick={() => dispatch(setSelectedCategory(category))}
//                 className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
//                   selectedCategory?._id === category._id
//                     ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
//                     : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
//                 }`}
//                 style={{ animation: "pop-in 0.5s ease forwards", animationDelay: `${(idx + 1) * 80}ms` }}
//               >
//                 <span className="relative z-10 flex items-center gap-2">{getIconForCategory(category.name)}{category.name}</span>
//                 {selectedCategory?._id === category._id && (
//                   <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {loading && (
//             <div className="text-center py-20">
//               <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-gray-400 mt-4">Loading products...</p>
//             </div>
//           )}

//           {error && !loading && (
//             <div className="text-center py-20">
//               <p className="text-red-500 text-lg">{error}</p>
//             </div>
//           )}

//           {/* ✅ filteredNewsItems — sahi filter lagega ab */}
//           {!loading && !error && filteredNewsItems.length === 0 && (
//             <div className="text-center py-20">
//               <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
//               <p className="text-gray-400 text-lg">
//                 {!selectedCategory?._id || selectedCategory?.name === "All"
//                   ? "No products available at the moment"
//                   : `No products found in "${selectedCategory?.name}" category`}
//               </p>
//             </div>
//           )}

//           {!loading && !error && filteredNewsItems.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredNewsItems.map((news, idx) => (
//                 <article
//                   key={news.id || news._id}
//                   className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 animate-slide-up"
//                   style={{ animationDelay: `${idx * 150}ms` }}
//                 >
//                   {news.trending && (
//                     <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full shadow-lg animate-pulse">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                       <span className="text-white text-xs font-bold">Trending</span>
//                     </div>
//                   )}
//                   <div className="relative h-56 overflow-hidden bg-gray-800">
//                     {news.image ? (
//                       <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Newspaper className="w-16 h-16 text-gray-600" />
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//                     <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-red-500/30">
//                       <span className="text-red-400 text-xs font-semibold">{news.category}</span>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
//                       <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{news.date}</span></div>
//                       <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{news.readTime}</span></div>
//                       <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{news.views}</span></div>
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">{news.title}</h3>
//                     <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{news.description}</p>
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-800">
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">
//                             {(news.author || "U").split(" ").map((n) => n[0]).join("")}
//                           </span>
//                         </div>
//                         <span className="text-gray-500 text-sm">{news.author}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <a href={news.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Eye className="w-4 h-4" />
//                         </a>
//                         <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Bookmark className="w-4 h-4" />
//                         </button>
//                         <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Share2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="bg-black py-24 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop" alt="Technology Background" className="w-full h-full object-cover" />
//         </div>
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Technologies We Excel In</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Modern, reliable, and battle-tested tech stack</p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
//             {[
//               { name: "Java + Spring Boot", icon: Code2 }, { name: "React / Angular", icon: Code2 },
//               { name: "Node.js", icon: Zap }, { name: "MySQL / PostgreSQL", icon: Database },
//               { name: "AWS", icon: Cloud }, { name: "Azure", icon: Cloud }, { name: "GCP", icon: Cloud },
//             ].map((tech, idx) => {
//               const TechIcon = tech.icon;
//               return (
//                 <div key={tech.name} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 text-center font-semibold text-gray-300 border border-gray-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 hover:scale-110 transition-all duration-300 animate-pop-in cursor-pointer" style={{ animationDelay: `${idx * 80}ms` }}>
//                   <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
//                   <div className="absolute inset-0 rounded-xl overflow-hidden">
//                     <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 animate-border-glow"></div>
//                   </div>
//                   <div className="relative z-10 flex flex-col items-center gap-3">
//                     <TechIcon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
//                     <div className="group-hover:text-white transition-colors text-sm transform group-hover:-translate-y-1 transition-transform duration-300">{tech.name}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Domain Solutions Section */}
//       <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 left-10 w-64 h-64 rounded-2xl overflow-hidden animate-float">
//             <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop" alt="Business" className="w-full h-full object-cover" />
//           </div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 rounded-2xl overflow-hidden animate-float-delayed">
//             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" alt="Team" className="w-full h-full object-cover" />
//           </div>
//         </div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Industry-Specific Solutions</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto animate-scale-x"></div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {[
//               { title: "Banking & Financial Services", icon: Landmark, gradient: "from-red-600 via-red-700 to-black", items: [{ text: "Core banking support", icon: Building2 }, { text: "Loan management systems", icon: Database }, { text: "Payment integrations", icon: Zap }, { text: "KYC / AML solutions", icon: Shield }, { text: "Secure APIs & reporting", icon: Code2 }] },
//               { title: "Retail & E-Commerce", icon: ShoppingCart, gradient: "from-black via-red-800 to-red-900", items: [{ text: "E-commerce platforms", icon: ShoppingCart }, { text: "Order & inventory management", icon: Database }, { text: "Payment gateways", icon: Zap }, { text: "CRM & loyalty systems", icon: Building2 }] },
//               { title: "Enterprise Solutions", icon: Building, gradient: "from-red-700 via-black to-gray-900", items: [{ text: "HRMS", icon: Building2 }, { text: "ERP modules", icon: Database }, { text: "Workflow automation", icon: Zap }, { text: "Reporting & analytics", icon: Code2 }] },
//               { title: "Government & PSU Projects", icon: Landmark, gradient: "from-gray-900 via-red-900 to-black", items: [{ text: "Citizen portals", icon: Building2 }, { text: "Data management systems", icon: Database }, { text: "Secure web applications", icon: Shield }, { text: "Long-term support contracts", icon: CheckCircle2 }] },
//             ].map((domain, idx) => {
//               const DomainIcon = domain.icon;
//               return (
//                 <div key={domain.title} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 animate-slide-up" style={{ animationDelay: `${idx * 200}ms` }}>
//                   <div className={`relative h-48 bg-gradient-to-br ${domain.gradient} flex flex-col items-center justify-center text-white p-8 overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow border border-white/20">
//                       <DomainIcon className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-center tracking-wide relative z-10">{domain.title}</h3>
//                   </div>
//                   <div className="p-8 bg-gradient-to-b from-black to-gray-900">
//                     <ul className="space-y-4">
//                       {domain.items.map((item, itemIdx) => {
//                         const ItemIcon = item.icon;
//                         return (
//                           <li key={item.text} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-all duration-300 hover:translate-x-2"
//                             style={{ opacity: 0, animation: "slideInLeft 0.5s ease forwards", animationDelay: `${idx * 200 + itemIdx * 100}ms` }}>
//                             <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 animate-pulse-slow" />
//                             <span>{item.text}</span>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
//         @keyframes float-delayed { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-5deg); } }
//         @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
//         @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
//         @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes slide-up { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes pop-in { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
//         @keyframes scale-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
//         @keyframes border-glow { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
//         @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
//         @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//         .animate-fade-in { animation: fade-in 1s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
//         .animate-slide-up { animation: slide-up 0.8s ease-out; }
//         .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
//         .animate-scale-x { animation: scale-x 0.8s ease-out; }
//         .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
//         .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
//         .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
//       `}</style>
//     </div>
//   );
// };

// export default Technology;



// import React, { useEffect, useState, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Code2, Search, Wrench, Database, Cloud, Smartphone, Shield, Zap,
//   Building2, ShoppingCart, Building, Landmark, ArrowRight, CheckCircle2,
//   Sparkles, Rocket, ChevronRight, Newspaper, Calendar, Clock, TrendingUp,
//   Eye, Share2, Bookmark, MessageCircle, ChevronLeft, Filter, Star, Cpu, Globe,
// } from "lucide-react";
// import {
//   fetchCategories,
//   fetchProducts,
//   setSelectedCategory,
// } from "./technologyslice/technologySlice";

// const Technology = () => {
//   const dispatch = useDispatch();

//   const { categories, selectedCategory, newsItems, loading, error } =
//     useSelector((state) => state.technology);

//   const [scrollY, setScrollY] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     const categoryId = selectedCategory?._id || null;
//     dispatch(fetchProducts(categoryId));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       setShowScrollTop(window.scrollY > 500); // appear after scrolling 500px
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

//   // MAIN FILTER FIX — Frontend pe reliable filter
//   const filteredNewsItems = useMemo(() => {
//     if (!newsItems || newsItems.length === 0) return [];

//     if (!selectedCategory?._id || selectedCategory?.name === "All") {
//       return newsItems;
//     }

//     return newsItems.filter((item) => {
//       const itemCat = (item.category || item.categoryName || "").trim().toLowerCase();
//       const selCat = (selectedCategory.name || "").trim().toLowerCase();
//       const idMatch =
//         item.categoryId === selectedCategory._id ||
//         item.category_id === selectedCategory._id ||
//         item.categoryId?._id === selectedCategory._id;

//       return itemCat === selCat || idMatch;
//     });
//   }, [newsItems, selectedCategory]);

//   const getIconForCategory = (category) => {
//     const cat = (category || "").toLowerCase();
//     if (cat.includes("ai") || cat.includes("artificial intelligence")) return <Cpu className="w-5 h-5" />;
//     if (cat.includes("hardware")) return <Zap className="w-5 h-5" />;
//     if (cat.includes("company") || cat.includes("update")) return <Building2 className="w-5 h-5" />;
//     if (cat.includes("industry") || cat.includes("news")) return <Newspaper className="w-5 h-5" />;
//     if (cat.includes("software") || cat.includes("developer")) return <Code2 className="w-5 h-5" />;
//     return <Globe className="w-5 h-5" />;
//   };

//   return (
//     <div className="bg-black min-h-screen overflow-x-hidden relative">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-black via-red-950 to-black text-white py-32 md:py-40 overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-64 h-64 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
//             style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`, animationDelay: "0s" }}>
//             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop" alt="Technology" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//           <div className="absolute top-40 right-20 w-72 h-72 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float-delayed"
//             style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.03}deg)`, animationDelay: "1s" }}>
//             <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop" alt="Coding" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//           <div className="absolute bottom-32 left-1/3 w-80 h-80 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
//             style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.04}deg)`, animationDelay: "2s" }}>
//             <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop" alt="Analytics" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-br from-red-800/40 to-black/60 mix-blend-multiply"></div>
//           </div>
//         </div>

//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//           <div className="absolute top-40 right-40 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
//           <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
//           <div className="absolute top-60 right-1/3 w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
//         </div>

//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//         </div>

//         <div className="absolute inset-0 opacity-5" style={{
//           backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}></div>

//         <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
//           <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full backdrop-blur-sm animate-fade-in">
//             <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
//             <span className="text-red-400 font-semibold text-sm tracking-wider">TECHNOLOGY EXCELLENCE</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight animate-slide-up bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
//             Cutting-Edge Technology Solutions
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
//             We craft high-performance, scalable, and secure digital products that drive real business growth with precision and innovation.
//           </p>
//           <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
//             <button className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-10 py-5 rounded-lg shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
//               <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </button>
//             <button className="group relative border-2 border-red-500 text-white font-bold px-10 py-5 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105">
//               <span className="flex items-center gap-2">Contact Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 right-10 w-48 h-48 rounded-xl overflow-hidden animate-float-slow">
//             <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop" alt="Tech" className="w-full h-full object-cover" />
//           </div>
//           <div className="absolute bottom-20 left-10 w-56 h-56 rounded-xl overflow-hidden animate-float-slow" style={{ animationDelay: "1s" }}>
//             <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=300&fit=crop" alt="Development" className="w-full h-full object-cover" />
//           </div>
//         </div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Core Services</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//               From ideation to 24/7 support — we deliver end-to-end excellence.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
//             {[
//               { title: "Application & Website Development", icon: Code2, items: [{ text: "Corporate websites", icon: Building2 }, { text: "Enterprise web applications", icon: Cloud }, { text: "Portals & dashboards", icon: Database }, { text: "Mobile applications", icon: Smartphone }, { text: "Microservices & cloud-based systems", icon: Zap }] },
//               { title: "Testing & Quality Assurance", icon: Search, items: [{ text: "Manual testing", icon: CheckCircle2 }, { text: "Automation testing", icon: Zap }, { text: "Performance testing", icon: Rocket }, { text: "Security testing", icon: Shield }] },
//               { title: "Digital Marketing & E-commerce Solutions", icon: ShoppingCart, items: [{ text: "SEO & SEM services", icon: Search }, { text: "Social media marketing", icon: MessageCircle }, { text: "E-commerce platform development", icon: Building }, { text: "Content marketing & strategy", icon: Star }, { text: "Conversion rate optimization", icon: ArrowRight }] },
//               { title: "Production Support & Maintenance", icon: Wrench, items: [{ text: "24×7 application support", icon: Clock }, { text: "Bug fixing & enhancements", icon: Wrench }, { text: "SLA-based support", icon: CheckCircle2 }, { text: "Monitoring & incident management", icon: Shield }] },
//               { title: "BPO & IT Staffing Solutions", icon: Wrench, items: [{ text: "IT staffing & recruitment", icon: Building }, { text: "BPO services", icon: Landmark }, { text: "Remote team augmentation", icon: Building2 }, { text: "Project-based staffing", icon: ArrowRight }] },
//             ].map((service, idx) => {
//               const ServiceIcon = service.icon;
//               return (
//                 <div key={service.title} className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up overflow-hidden" style={{ animationDelay: `${idx * 150}ms` }}>
//                   <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                   <div className="relative z-10">
//                     <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-600/30">
//                       <ServiceIcon className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">{service.title}</h3>
//                     <ul className="space-y-4">
//                       {service.items.map((item, itemIdx) => {
//                         const ItemIcon = item.icon || CheckCircle2;
//                         return (
//                           <li key={item.text} className="flex items-start gap-3 text-gray-300 transform transition-all duration-300 hover:translate-x-2"
//                             style={{ opacity: 0, animation: "slideInLeft 0.5s ease forwards", animationDelay: `${idx * 150 + itemIdx * 100}ms` }}>
//                             <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
//                             <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Tech News Section */}
//       <section className="py-24 bg-black relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="absolute inset-0 opacity-5">
//           <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop" alt="News Background" className="w-full h-full object-cover" />
//         </div>

//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full backdrop-blur-sm animate-fade-in">
//               <Newspaper className="w-4 h-4 text-red-400 animate-pulse" />
//               <span className="text-red-400 font-semibold text-sm tracking-wider">LATEST UPDATES</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Tech News & Insights</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//               Stay updated with the latest technology trends and industry insights
//             </p>
//           </div>

//           {/* Category Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
//             <button
//               onClick={() => dispatch(setSelectedCategory({ _id: null, name: "All" }))}
//               className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 !selectedCategory?._id || selectedCategory?.name === "All"
//                   ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
//                   : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
//               }`}
//               style={{ animation: "pop-in 0.5s ease forwards", animationDelay: "0ms" }}
//             >
//               <span className="relative z-10 flex items-center gap-2"><Globe className="w-4 h-4" />All</span>
//               {(!selectedCategory?._id || selectedCategory?.name === "All") && (
//                 <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
//               )}
//             </button>

//             {(categories || []).map((category, idx) => (
//               <button
//                 key={category._id}
//                 onClick={() => dispatch(setSelectedCategory(category))}
//                 className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
//                   selectedCategory?._id === category._id
//                     ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
//                     : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
//                 }`}
//                 style={{ animation: "pop-in 0.5s ease forwards", animationDelay: `${(idx + 1) * 80}ms` }}
//               >
//                 <span className="relative z-10 flex items-center gap-2">{getIconForCategory(category.name)}{category.name}</span>
//                 {selectedCategory?._id === category._id && (
//                   <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {loading && (
//             <div className="text-center py-20">
//               <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-gray-400 mt-4">Loading products...</p>
//             </div>
//           )}

//           {error && !loading && (
//             <div className="text-center py-20">
//               <p className="text-red-500 text-lg">{error}</p>
//             </div>
//           )}

//           {!loading && !error && filteredNewsItems.length === 0 && (
//             <div className="text-center py-20">
//               <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
//               <p className="text-gray-400 text-lg">
//                 {!selectedCategory?._id || selectedCategory?.name === "All"
//                   ? "No products available at the moment"
//                   : `No products found in "${selectedCategory?.name}" category`}
//               </p>
//             </div>
//           )}

//           {!loading && !error && filteredNewsItems.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredNewsItems.map((news, idx) => (
//                 <article
//                   key={news.id || news._id}
//                   className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 animate-slide-up"
//                   style={{ animationDelay: `${idx * 150}ms` }}
//                 >
//                   {news.trending && (
//                     <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full shadow-lg animate-pulse">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                       <span className="text-white text-xs font-bold">Trending</span>
//                     </div>
//                   )}
//                   <div className="relative h-56 overflow-hidden bg-gray-800">
//                     {news.image ? (
//                       <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Newspaper className="w-16 h-16 text-gray-600" />
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//                     <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-red-500/30">
//                       <span className="text-red-400 text-xs font-semibold">{news.category}</span>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
//                       <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{news.date}</span></div>
//                       <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{news.readTime}</span></div>
//                       <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{news.views}</span></div>
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">{news.title}</h3>
//                     <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{news.description}</p>
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-800">
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">
//                             {(news.author || "U").split(" ").map((n) => n[0]).join("")}
//                           </span>
//                         </div>
//                         <span className="text-gray-500 text-sm">{news.author}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <a href={news.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Eye className="w-4 h-4" />
//                         </a>
//                         <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Bookmark className="w-4 h-4" />
//                         </button>
//                         <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
//                           <Share2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="bg-black py-24 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop" alt="Technology Background" className="w-full h-full object-cover" />
//         </div>
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Technologies We Excel In</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 animate-scale-x"></div>
//             <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Modern, reliable, and battle-tested tech stack</p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
//             {[
//               { name: "Java + Spring Boot", icon: Code2 }, { name: "React / Angular", icon: Code2 },
//               { name: "Node.js", icon: Zap }, { name: "MySQL / PostgreSQL", icon: Database },
//               { name: "AWS", icon: Cloud }, { name: "Azure", icon: Cloud }, { name: "GCP", icon: Cloud },
//             ].map((tech, idx) => {
//               const TechIcon = tech.icon;
//               return (
//                 <div key={tech.name} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 text-center font-semibold text-gray-300 border border-gray-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 hover:scale-110 transition-all duration-300 animate-pop-in cursor-pointer" style={{ animationDelay: `${idx * 80}ms` }}>
//                   <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
//                   <div className="absolute inset-0 rounded-xl overflow-hidden">
//                     <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 animate-border-glow"></div>
//                   </div>
//                   <div className="relative z-10 flex flex-col items-center gap-3">
//                     <TechIcon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
//                     <div className="group-hover:text-white transition-colors text-sm transform group-hover:-translate-y-1 transition-transform duration-300">{tech.name}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Domain Solutions Section */}
//       <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 left-10 w-64 h-64 rounded-2xl overflow-hidden animate-float">
//             <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop" alt="Business" className="w-full h-full object-cover" />
//           </div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 rounded-2xl overflow-hidden animate-float-delayed">
//             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" alt="Team" className="w-full h-full object-cover" />
//           </div>
//         </div>
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Industry-Specific Solutions</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto animate-scale-x"></div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {[
//               { title: "Banking & Financial Services", icon: Landmark, gradient: "from-red-600 via-red-700 to-black", items: [{ text: "Core banking support", icon: Building2 }, { text: "Loan management systems", icon: Database }, { text: "Payment integrations", icon: Zap }, { text: "KYC / AML solutions", icon: Shield }, { text: "Secure APIs & reporting", icon: Code2 }] },
//               { title: "Retail & E-Commerce", icon: ShoppingCart, gradient: "from-black via-red-800 to-red-900", items: [{ text: "E-commerce platforms", icon: ShoppingCart }, { text: "Order & inventory management", icon: Database }, { text: "Payment gateways", icon: Zap }, { text: "CRM & loyalty systems", icon: Building2 }] },
//               { title: "Enterprise Solutions", icon: Building, gradient: "from-red-700 via-black to-gray-900", items: [{ text: "HRMS", icon: Building2 }, { text: "ERP modules", icon: Database }, { text: "Workflow automation", icon: Zap }, { text: "Reporting & analytics", icon: Code2 }] },
//               { title: "Government & PSU Projects", icon: Landmark, gradient: "from-gray-900 via-red-900 to-black", items: [{ text: "Citizen portals", icon: Building2 }, { text: "Data management systems", icon: Database }, { text: "Secure web applications", icon: Shield }, { text: "Long-term support contracts", icon: CheckCircle2 }] },
//             ].map((domain, idx) => {
//               const DomainIcon = domain.icon;
//               return (
//                 <div key={domain.title} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 animate-slide-up" style={{ animationDelay: `${idx * 200}ms` }}>
//                   <div className={`relative h-48 bg-gradient-to-br ${domain.gradient} flex flex-col items-center justify-center text-white p-8 overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow border border-white/20">
//                       <DomainIcon className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-center tracking-wide relative z-10">{domain.title}</h3>
//                   </div>
//                   <div className="p-8 bg-gradient-to-b from-black to-gray-900">
//                     <ul className="space-y-4">
//                       {domain.items.map((item, itemIdx) => {
//                         const ItemIcon = item.icon;
//                         return (
//                           <li key={item.text} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-all duration-300 hover:translate-x-2"
//                             style={{ opacity: 0, animation: "slideInLeft 0.5s ease forwards", animationDelay: `${idx * 200 + itemIdx * 100}ms` }}>
//                             <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 animate-pulse-slow" />
//                             <span>{item.text}</span>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
//         @keyframes float-delayed { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-5deg); } }
//         @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
//         @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
//         @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes slide-up { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes pop-in { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
//         @keyframes scale-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
//         @keyframes border-glow { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
//         @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
//         @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//         .animate-fade-in { animation: fade-in 1s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
//         .animate-slide-up { animation: slide-up 0.8s ease-out; }
//         .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
//         .animate-scale-x { animation: scale-x 0.8s ease-out; }
//         .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
//         .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
//         .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
//       `}</style>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-900/40 transition-all duration-400 hover:from-red-700 hover:to-red-800 hover:scale-110 active:scale-95 ${
//           showScrollTop
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-20 pointer-events-none"
//         }`}
//         aria-label="Scroll back to top"
//       >
//         <ArrowRight className="w-6 h-6 rotate-[-90deg]" />
//       </button>
//     </div>
//   );
// };

// export default Technology;

import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import {
  Code2, Search, Wrench, Database, Cloud, Smartphone, Shield, Zap,
  Building2, ShoppingCart, Building, Landmark, ArrowRight, CheckCircle2,
  Sparkles, Rocket, ChevronRight, Newspaper, Calendar, Clock, TrendingUp,
  Eye, Share2, Bookmark, MessageCircle, ChevronLeft, Filter, Star, Cpu, Globe,
} from "lucide-react";
import {
  fetchCategories,
  fetchProducts,
  setSelectedCategory,
} from "./technologyslice/technologySlice";

const Technology = () => {
  const { isDark } = useTheme();
  const dispatch = useDispatch();

  const { categories, selectedCategory, newsItems, loading, error } =
    useSelector((state) => state.technology);

  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const categoryId = selectedCategory?._id || null;
    dispatch(fetchProducts(categoryId));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
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

  const filteredNewsItems = useMemo(() => {
    if (!newsItems || newsItems.length === 0) return [];

    if (!selectedCategory?._id || selectedCategory?.name === "All") {
      return newsItems;
    }

    return newsItems.filter((item) => {
      const itemCat = (item.category || item.categoryName || "").trim().toLowerCase();
      const selCat = (selectedCategory.name || "").trim().toLowerCase();
      const idMatch =
        item.categoryId === selectedCategory._id ||
        item.category_id === selectedCategory._id ||
        item.categoryId?._id === selectedCategory._id;

      return itemCat === selCat || idMatch;
    });
  }, [newsItems, selectedCategory]);

  const getIconForCategory = (category) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("ai") || cat.includes("artificial intelligence")) return <Cpu className="w-5 h-5" />;
    if (cat.includes("hardware")) return <Zap className="w-5 h-5" />;
    if (cat.includes("company") || cat.includes("update")) return <Building2 className="w-5 h-5" />;
    if (cat.includes("industry") || cat.includes("news")) return <Newspaper className="w-5 h-5" />;
    if (cat.includes("software") || cat.includes("developer")) return <Code2 className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-red-600/50"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl";

  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-600";

  return (
    <div className={`min-h-screen overflow-x-hidden relative transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br py-32 md:py-40 overflow-hidden
        ${isDark ? "from-black via-red-950 to-black" : "from-red-50 via-white to-white"} text-white`}>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`, animationDelay: "0s" }}>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop" alt="Technology" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-red-600/40 to-black/60" : "bg-gradient-to-br from-red-400/30 to-white/60"} mix-blend-multiply`}></div>
          </div>
          <div className="absolute top-40 right-20 w-72 h-72 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float-delayed"
            style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.03}deg)`, animationDelay: "1s" }}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop" alt="Coding" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-red-700/40 to-black/60" : "bg-gradient-to-br from-red-400/30 to-white/60"} mix-blend-multiply`}></div>
          </div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-700 animate-float"
            style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.04}deg)`, animationDelay: "2s" }}>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop" alt="Analytics" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-red-800/40 to-black/60" : "bg-gradient-to-br from-red-400/30 to-white/60"} mix-blend-multiply`}></div>
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-60 right-1/3 w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full backdrop-blur-sm animate-fade-in
            ${isDark ? "bg-red-600/20 border border-red-500/30" : "bg-red-100 border border-red-200"}`}>
            <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold text-sm tracking-wider">TECHNOLOGY EXCELLENCE</span>
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight animate-slide-up
            ${isDark ? "bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent" : "text-gray-900"}`}>
            Cutting-Edge Technology Solutions
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed animate-slide-up ${bodyClass}`} style={{ animationDelay: "0.2s" }}>
            We craft high-performance, scalable, and secure digital products that drive real business growth with precision and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <button className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-10 py-5 rounded-lg shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </button>
            <button className={`group relative border-2 font-bold px-10 py-5 rounded-lg hover:scale-105 transition-all duration-300
              ${isDark ? "border-red-500 text-white hover:bg-red-600" : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"}`}>
              <span className="flex items-center gap-2">Contact Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </section>

      

      {/* Tech News Section */}
      <section className={`py-24 relative overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full backdrop-blur-sm animate-fade-in
              ${isDark ? "bg-red-600/20 border border-red-500/30" : "bg-red-100 border border-red-200"}`}>
              <Newspaper className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-red-400 font-semibold text-sm tracking-wider">LATEST UPDATES</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingClass}`}>Tech News & Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto ${bodyClass}`}>Stay updated with the latest technology trends and industry insights</p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => dispatch(setSelectedCategory({ _id: null, name: "All" }))}
              className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                !selectedCategory?._id || selectedCategory?.name === "All"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
                  : isDark 
                    ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-red-600"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2"><Globe className="w-4 h-4" />All</span>
            </button>

            {(categories || []).map((category, idx) => (
              <button
                key={category._id}
                onClick={() => dispatch(setSelectedCategory(category))}
                className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory?._id === category._id
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
                    : isDark 
                      ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/50"
                      : "bg-white text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-red-600"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">{getIconForCategory(category.name)}{category.name}</span>
              </button>
            ))}
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              <p className={`mt-4 ${bodyClass}`}>Loading products...</p>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && filteredNewsItems.length === 0 && (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className={`text-lg ${bodyClass}`}>
                {!selectedCategory?._id || selectedCategory?.name === "All"
                  ? "No products available at the moment"
                  : `No products found in "${selectedCategory?.name}" category`}
              </p>
            </div>
          )}

          {!loading && !error && filteredNewsItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNewsItems.map((news, idx) => (
                <article
                  key={news.id || news._id}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardClass}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {news.trending && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full shadow-lg animate-pulse">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-bold">Trending</span>
                    </div>
                  )}
                  <div className="relative h-56 overflow-hidden bg-gray-800">
                    {news.image ? (
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Newspaper className="w-16 h-16 text-gray-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-red-500/30">
                      <span className="text-red-400 text-xs font-semibold">{news.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className={`flex items-center gap-4 mb-4 text-sm ${bodyClass}`}>
                      <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{news.date}</span></div>
                      <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{news.readTime}</span></div>
                      <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{news.views}</span></div>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${headingClass} group-hover:text-red-400 transition-colors`}>{news.title}</h3>
                    <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${bodyClass}`}>{news.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {(news.author || "U").split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <span className={`text-sm ${bodyClass}`}>{news.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={news.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all">
                          <Eye className="w-4 h-4" />
                        </a>
                        <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`bg-black py-24 relative overflow-hidden ${isDark ? "" : "bg-white"}`}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingClass}`}>Technologies We Excel In</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
            <p className={`text-lg ${bodyClass}`}>Modern, reliable, and battle-tested tech stack</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Java + Spring Boot", icon: Code2 },
              { name: "React / Angular", icon: Code2 },
              { name: "Node.js", icon: Zap },
              { name: "MySQL / PostgreSQL", icon: Database },
              { name: "AWS", icon: Cloud },
              { name: "Azure", icon: Cloud },
              { name: "GCP", icon: Cloud },
            ].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={tech.name} className={`group relative  rounded-xl p-6 text-center font-semibold border transition-all duration-300 hover:scale-110 cursor-pointer ${cardClass}`}>
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <TechIcon className={`w-8 h-8 ${accentClass} group-hover:text-red-400 transition-colors`} />
                    <div className={`group-hover:text-black  transition-colors text-sm ${bodyClass}`}>{tech.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   

      {/* Animations */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-5deg); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Technology;