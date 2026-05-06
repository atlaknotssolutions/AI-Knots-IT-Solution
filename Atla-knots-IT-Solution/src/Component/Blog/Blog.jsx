



// // import React, { useEffect, useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import DOMPurify from "dompurify";
// // import { useTheme } from "../../context/ThemeContext";

// // import { Eye, Heart, MessageCircle } from "lucide-react";

// // import {
// //   fetchCategories,
// //   fetchBlogPosts,
// //   setActiveCategory,
// // } from "../Redux/Blog/blogSlice.js";

// // const POSTS_PER_PAGE = 6;

// // const Blog = () => {
// //   const dispatch = useDispatch();
// //   const { isDark } = useTheme();

// //   const {
// //     categories,
// //     posts: blogPosts,
// //     activeCategory,
// //     status,
// //     error,
// //   } = useSelector((state) => state.blog);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [showVerifyModal, setShowVerifyModal] = useState(false);
// //   const [pendingAction, setPendingAction] = useState(null);
// //   const [pendingPostId, setPendingPostId] = useState(null);

// //   // Local state for real-time like & comment count update
// //   const [updatedPosts, setUpdatedPosts] = useState({});

// //   // User Verification State
// //   const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
// //   const [step, setStep] = useState("form");
// //   const [otp, setOtp] = useState("");
// //   const [generatedOtp, setGeneratedOtp] = useState("");
// //   const [isVerified, setIsVerified] = useState(false);

// //   // Check if user is already verified
// //   useEffect(() => {
// //     if (localStorage.getItem("verifiedUser")) {
// //       setIsVerified(true);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (status === "idle") {
// //       dispatch(fetchCategories());
// //       dispatch(fetchBlogPosts());
// //     }
// //   }, [status, dispatch]);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [activeCategory]);

// //   // Merge updated likes & comments
// //   const mergedPosts = blogPosts.map((post) => ({
// //     ...post,
// //     likes: updatedPosts[post._id]?.likes ?? post.likes ?? 0,
// //     comments: updatedPosts[post._id]?.comments ?? post.comments ?? [],
// //   }));

// //   const filteredPosts =
// //     activeCategory === "All"
// //       ? mergedPosts
// //       : mergedPosts.filter((post) => post.category?.name === activeCategory);

// //   const totalPosts = filteredPosts.length;
// //   const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
// //   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
// //   const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

// //   const goToPage = (page) => {
// //     if (page >= 1 && page <= totalPages) {
// //       setCurrentPage(page);
// //       window.scrollTo({ top: 0, behavior: "smooth" });
// //     }
// //   };

// //   const getPageNumbers = () => {
// //     const pages = [];
// //     const maxPagesToShow = 5;

// //     if (totalPages <= maxPagesToShow) {
// //       for (let i = 1; i <= totalPages; i++) pages.push(i);
// //       return pages;
// //     }

// //     pages.push(1);
// //     let start = Math.max(2, currentPage - 1);
// //     let end = Math.min(totalPages - 1, currentPage + 1);

// //     if (start > 2) pages.push("...");
// //     for (let i = start; i <= end; i++) pages.push(i);
// //     if (end < totalPages - 1) pages.push("...");
// //     if (totalPages > 1) pages.push(totalPages);

// //     return pages;
// //   };

// //   // Handle Click on Like, Comment, Read More
// //   const handleAction = (action, postId) => {
// //     if (isVerified) {
// //       performAction(action, postId);
// //     } else {
// //       setPendingAction(action);
// //       setPendingPostId(postId);
// //       setShowVerifyModal(true);
// //       setStep("form");
// //       setUserInfo({ name: "", email: "", phone: "" });
// //     }
// //   };

// //   const performAction = (action, postId) => {
// //     if (action === "read") {
// //       window.location.href = `/blog/${postId}`;
// //       return;
// //     }

// //     setUpdatedPosts((prev) => {
// //       const current = prev[postId] || { likes: 0, comments: [] };

// //       if (action === "like") {
// //         return {
// //           ...prev,
// //           [postId]: { ...current, likes: (current.likes || 0) + 1 },
// //         };
// //       } else if (action === "comment") {
// //         return {
// //           ...prev,
// //           [postId]: {
// //             ...current,
// //             comments: [...(current.comments || []), { id: Date.now() }],
// //           },
// //         };
// //       }
// //       return prev;
// //     });
// //   };

// //   // Send OTP
// //   const sendOtp = () => {
// //     if (!userInfo.name || !userInfo.email || !userInfo.phone) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
// //     setGeneratedOtp(randomOtp);
// //     setStep("otp");

// //     console.log("📧 OTP Sent to", userInfo.email, "→", randomOtp);
// //     alert(`Demo OTP: ${randomOtp} (Check Console)`);
// //   };

// //   // Verify OTP
// //   const verifyOtp = () => {
// //     if (otp === generatedOtp) {
// //       localStorage.setItem("verifiedUser", JSON.stringify({ ...userInfo, verifiedAt: new Date().toISOString() }));
// //       setIsVerified(true);
// //       setShowVerifyModal(false);

// //       if (pendingAction && pendingPostId) {
// //         setTimeout(() => performAction(pendingAction, pendingPostId), 400);
// //       }
// //     } else {
// //       alert("❌ Wrong OTP. Please try again.");
// //     }
// //   };

// //   if (status === "loading") {
// //     return (
// //       <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
// //         <div className="text-2xl animate-pulse">Loading blogs...</div>
// //       </div>
// //     );
// //   }

// //   if (status === "failed") {
// //     return (
// //       <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-red-600"}`}>
// //         <div className="text-xl">Error: {error}</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}>

// //       {/* Header with Category Filters */}
// //       <header className={`border-b sticky top-0 z-10 backdrop-blur-md ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => dispatch(setActiveCategory(cat))}
// //                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
// //                   activeCategory === cat
// //                     ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
// //                     : isDark
// //                     ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50"
// //                     : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-red-600"
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </header>

// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         {filteredPosts.length === 0 ? (
// //           <div className={`text-center py-24 text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// //             No posts found in <span className="text-red-500">"{activeCategory}"</span>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Blog Posts Grid */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
// //               {currentPosts.map((post) => (
// //                 <div
// //                   key={post._id}
// //                   className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
// //                     ${isDark ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-600/60"}`}
// //                 >
// //                   {/* Image */}
// //                   <div className="h-52 relative overflow-hidden">
// //                     {post.images?.[0] ? (
// //                       <img
// //                         src={post.images[0]}
// //                         alt={post.title}
// //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                       />
// //                     ) : (
// //                       <div className={`absolute inset-0 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
// //                         <span className={isDark ? "text-gray-600" : "text-gray-400"}>No Image</span>
// //                       </div>
// //                     )}
// //                   </div>

// //                   {/* Content */}
// //                   <div className="p-6 flex flex-col flex-grow">
// //                     <span className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
// //                       {post.category?.name || "Uncategorized"}
// //                     </span>

// //                     <h2 className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
// //                       {post.title || post.name || "Untitled"}
// //                     </h2>

// //                     <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// //                       By <span className={isDark ? "text-gray-200" : "text-gray-800"}>{post.author || "Anonymous"}</span>
// //                     </p>

// //                     <div
// //                       className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
// //                       dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description || post.excerpt || "") }}
// //                     />

// //                     {/* Stats & Read More */}
// //                     <div className="mt-auto pt-4 flex justify-between items-center">
// //                       <div className={`flex items-center gap-5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
// //                         <div className="flex items-center gap-1">
// //                           <Eye className="w-5 h-5" /> {post.views || 0}
// //                         </div>
// //                         <div
// //                           className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors"
// //                           onClick={() => handleAction("like", post._id)}
// //                         >
// //                           <Heart className="w-5 h-5" /> {post.likes || 0}
// //                         </div>
// //                         <div
// //                           className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors"
// //                           onClick={() => handleAction("comment", post._id)}
// //                         >
// //                           <MessageCircle className="w-5 h-5" /> {post.comments?.length || 0}
// //                         </div>
// //                       </div>

// //                       <button
// //                         onClick={() => handleAction("read", post._id)}
// //                         className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:translate-x-1
// //                           ${isDark
// //                             ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50 hover:border-red-600"
// //                             : "bg-red-100 border border-red-200 text-red-600 hover:bg-red-200"}`}
// //                       >
// //                         Read More
// //                         <span>→</span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             {totalPages > 1 && (
// //               <div className="flex flex-col items-center gap-4 mt-8">
// //                 <nav className="flex items-center gap-2">
// //                   <button
// //                     onClick={() => goToPage(currentPage - 1)}
// //                     disabled={currentPage === 1}
// //                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
// //                       currentPage === 1
// //                         ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                         : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"
// //                     }`}
// //                   >
// //                     ← Previous
// //                   </button>

// //                   {getPageNumbers().map((page, idx) => (
// //                     <button
// //                       key={idx}
// //                       onClick={() => typeof page === "number" && goToPage(page)}
// //                       disabled={page === "..."}
// //                       className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
// //                         page === "..."
// //                           ? isDark ? "text-gray-500" : "text-gray-400"
// //                           : page === currentPage
// //                           ? "bg-red-600 text-white shadow-lg"
// //                           : isDark
// //                           ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
// //                           : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
// //                       }`}
// //                     >
// //                       {page}
// //                     </button>
// //                   ))}

// //                   <button
// //                     onClick={() => goToPage(currentPage + 1)}
// //                     disabled={currentPage === totalPages}
// //                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
// //                       currentPage === totalPages
// //                         ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                         : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"
// //                     }`}
// //                   >
// //                     Next →
// //                   </button>
// //                 </nav>

// //                 <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
// //                   Page {currentPage} of {totalPages} • {totalPosts} posts
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </main>

// //       {/* Verification Modal */}
// //       {showVerifyModal && (
// //         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
// //           <div className={`max-w-md w-full rounded-2xl p-8 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}>
// //             <h2 className="text-2xl font-bold mb-6 text-center">
// //               {step === "form" ? "Verify Yourself" : "Enter OTP"}
// //             </h2>

// //             {step === "form" ? (
// //               <>
// //                 <input
// //                   type="text"
// //                   placeholder="Full Name"
// //                   value={userInfo.name}
// //                   onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
// //                   className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
// //                 />
// //                 <input
// //                   type="email"
// //                   placeholder="Email Address"
// //                   value={userInfo.email}
// //                   onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
// //                   className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
// //                 />
// //                 <input
// //                   type="tel"
// //                   placeholder="Phone Number"
// //                   value={userInfo.phone}
// //                   onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
// //                   className={`w-full p-3 rounded-lg mb-6 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
// //                 />

// //                 <button
// //                   onClick={sendOtp}
// //                   className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-medium"
// //                 >
// //                   Send OTP
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 <p className="text-center mb-6 text-sm opacity-75">
// //                   OTP sent to <strong>{userInfo.email}</strong>
// //                 </p>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter 6-digit OTP"
// //                   value={otp}
// //                   onChange={(e) => setOtp(e.target.value)}
// //                   maxLength={6}
// //                   className={`w-full p-4 text-center text-2xl tracking-widest rounded-lg border mb-6 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
// //                 />
// //                 <button
// //                   onClick={verifyOtp}
// //                   className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-medium"
// //                 >
// //                   Verify OTP
// //                 </button>
// //               </>
// //             )}

// //             <button
// //               onClick={() => setShowVerifyModal(false)}
// //               className="mt-6 text-sm text-gray-500 underline block mx-auto"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Blog;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import DOMPurify from "dompurify";
// import { useTheme } from "../../context/ThemeContext";

// import { Eye, Heart, MessageCircle, X } from "lucide-react";

// import {
//   fetchCategories,
//   fetchBlogPosts,
//   setActiveCategory,
// } from "../Redux/Blog/blogSlice.js";

// const POSTS_PER_PAGE = 6;

// const Blog = () => {
//   const dispatch = useDispatch();
//   const { isDark } = useTheme();

//   const {
//     categories,
//     posts: blogPosts,
//     activeCategory,
//     status,
//     error,
//   } = useSelector((state) => state.blog);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [showVerifyModal, setShowVerifyModal] = useState(false);
//   const [showCommentModal, setShowCommentModal] = useState(false);
//   const [pendingAction, setPendingAction] = useState(null);
//   const [pendingPostId, setPendingPostId] = useState(null);
//   const [commentText, setCommentText] = useState("");

//   // Local state for real-time like & comment update
//   const [updatedPosts, setUpdatedPosts] = useState({});

//   // User Verification State
//   const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
//   const [step, setStep] = useState("form");
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [isVerified, setIsVerified] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("verifiedUser")) setIsVerified(true);
//   }, []);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCategories());
//       dispatch(fetchBlogPosts());
//     }
//   }, [status, dispatch]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeCategory]);

//   // Merge updated data
//   const mergedPosts = blogPosts.map((post) => ({
//     ...post,
//     likes: updatedPosts[post._id]?.likes ?? post.likes ?? 0,
//     comments: updatedPosts[post._id]?.comments ?? post.comments ?? [],
//   }));

//   const filteredPosts =
//     activeCategory === "All"
//       ? mergedPosts
//       : mergedPosts.filter((post) => post.category?.name === activeCategory);

//   const totalPosts = filteredPosts.length;
//   const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const getPageNumbers = () => {
//     const pages = [];
//     const maxPagesToShow = 5;
//     if (totalPages <= maxPagesToShow) {
//       for (let i = 1; i <= totalPages; i++) pages.push(i);
//       return pages;
//     }
//     pages.push(1);
//     let start = Math.max(2, currentPage - 1);
//     let end = Math.min(totalPages - 1, currentPage + 1);
//     if (start > 2) pages.push("...");
//     for (let i = start; i <= end; i++) pages.push(i);
//     if (end < totalPages - 1) pages.push("...");
//     if (totalPages > 1) pages.push(totalPages);
//     return pages;
//   };

//   const handleAction = (action, postId) => {
//     if (isVerified) {
//       if (action === "comment") {
//         setPendingPostId(postId);
//         setCommentText("");
//         setShowCommentModal(true);
//       } else {
//         performAction(action, postId);
//       }
//     } else {
//       setPendingAction(action);
//       setPendingPostId(postId);
//       setShowVerifyModal(true);
//       setStep("form");
//       setUserInfo({ name: "", email: "", phone: "" });
//     }
//   };

//   const performAction = (action, postId) => {
//     if (action === "read") {
//       window.location.href = `/blog/${postId}`;
//       return;
//     }

//     setUpdatedPosts((prev) => {
//       const current = prev[postId] || { likes: 0, comments: [] };

//       if (action === "like") {
//         return { ...prev, [postId]: { ...current, likes: (current.likes || 0) + 1 } };
//       }
//       return prev;
//     });
//   };

//   const submitComment = () => {
//     if (!commentText.trim()) return alert("Please write a comment");

//     setUpdatedPosts((prev) => {
//       const current = prev[pendingPostId] || { likes: 0, comments: [] };
//       return {
//         ...prev,
//         [pendingPostId]: {
//           ...current,
//           comments: [
//             ...current.comments,
//             {
//               id: Date.now(),
//               text: commentText.trim(),
//               author: userInfo.name || "Anonymous",
//               time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//             },
//           ],
//         },
//       };
//     });

//     setShowCommentModal(false);
//     setCommentText("");
//     alert("✅ Comment posted successfully!");
//   };

//   // Send OTP
//   const sendOtp = () => {
//     if (!userInfo.name || !userInfo.email || !userInfo.phone) {
//       alert("Please fill all fields");
//       return;
//     }
//     const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(randomOtp);
//     setStep("otp");
//     console.log("OTP Sent:", randomOtp);
//     alert(`Demo OTP: ${randomOtp} (Check Console)`);
//   };

//   // Verify OTP
//   const verifyOtp = () => {
//     if (otp === generatedOtp) {
//       localStorage.setItem("verifiedUser", JSON.stringify({ ...userInfo, verifiedAt: new Date().toISOString() }));
//       setIsVerified(true);
//       setShowVerifyModal(false);

//       if (pendingAction && pendingPostId) {
//         setTimeout(() => {
//           if (pendingAction === "comment") {
//             setShowCommentModal(true);
//           } else {
//             performAction(pendingAction, pendingPostId);
//           }
//         }, 400);
//       }
//     } else {
//       alert("❌ Wrong OTP. Please try again.");
//     }
//   };

//   if (status === "loading") return <div className="min-h-screen flex items-center justify-center text-2xl animate-pulse">Loading blogs...</div>;
//   if (status === "failed") return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

//   return (
//     <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}>

//       {/* Header */}
//       <header className={`border-b sticky top-0 z-10 backdrop-blur-md ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => dispatch(setActiveCategory(cat))}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
//                   activeCategory === cat
//                     ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
//                     : isDark
//                     ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50"
//                     : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-red-600"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {filteredPosts.length === 0 ? (
//           <div className={`text-center py-24 text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//             No posts found in <span className="text-red-500">"{activeCategory}"</span>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
//               {currentPosts.map((post) => (
//                 <div
//                   key={post._id}
//                   className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
//                     ${isDark ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-600/60"}`}
//                 >
//                   {/* Image */}
//                   <div className="h-52 relative overflow-hidden">
//                     {post.images?.[0] ? (
//                       <img src={post.images[0]} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                     ) : (
//                       <div className={`absolute inset-0 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
//                         <span className={isDark ? "text-gray-600" : "text-gray-400"}>No Image</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <span className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
//                       {post.category?.name || "Uncategorized"}
//                     </span>

//                     <h2 className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
//                       {post.title || post.name || "Untitled"}
//                     </h2>

//                     <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//                       By <span className={isDark ? "text-gray-200" : "text-gray-800"}>{post.author || "Anonymous"}</span>
//                     </p>

//                     <div className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
//                       dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description || post.excerpt || "") }}
//                     />

//                     {/* Stats */}
//                     <div className="mt-auto pt-4 flex justify-between items-center">
//                       <div className={`flex items-center gap-5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
//                         <div className="flex items-center gap-1">
//                           <Eye className="w-5 h-5" /> {post.views || 0}
//                         </div>
//                         <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors" onClick={() => handleAction("like", post._id)}>
//                           <Heart className="w-5 h-5" /> {post.likes || 0}
//                         </div>
//                         <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors" onClick={() => handleAction("comment", post._id)}>
//                           <MessageCircle className="w-5 h-5" /> {post.comments?.length || 0}
//                         </div>
//                       </div>

//                       <button onClick={() => handleAction("read", post._id)}
//                         className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all hover:translate-x-1
//                           ${isDark ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50" : "bg-red-100 border border-red-200 text-red-600 hover:bg-red-200"}`}>
//                         Read More →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex flex-col items-center gap-4 mt-8">
//                 <nav className="flex items-center gap-2">
//                   <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${currentPage === 1 ? (isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed") : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"}`}>← Previous</button>

//                   {getPageNumbers().map((page, idx) => (
//                     <button key={idx} onClick={() => typeof page === "number" && goToPage(page)} disabled={page === "..."} className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${page === "..." ? (isDark ? "text-gray-500" : "text-gray-400") : page === currentPage ? "bg-red-600 text-white shadow-lg" : isDark ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" : "bg-gray-100 hover:bg-gray-200 border border-gray-300"}`}>{page}</button>
//                   ))}

//                   <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${currentPage === totalPages ? (isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed") : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"}`}>Next →</button>
//                 </nav>
//                 <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>Page {currentPage} of {totalPages} • {totalPosts} posts</div>
//               </div>
//             )}
//           </>
//         )}
//       </main>

//       {/* ==================== COMMENT INPUT MODAL ==================== */}
//       {showCommentModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className={`max-w-lg w-full rounded-2xl p-6 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}>
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-2xl font-bold">Write a Comment</h2>
//               <button onClick={() => setShowCommentModal(false)}><X className="w-6 h-6" /></button>
//             </div>

//             <textarea
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//               placeholder="What are your thoughts?"
//               rows={5}
//               className={`w-full p-4 rounded-xl border resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-red-500 ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
//             />

//             <div className="flex gap-3 mt-5">
//               <button
//                 onClick={() => setShowCommentModal(false)}
//                 className={`flex-1 py-3 rounded-xl font-medium border ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={submitComment}
//                 disabled={!commentText.trim()}
//                 className={`flex-1 py-3 rounded-xl font-medium text-white ${commentText.trim() ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"}`}
//               >
//                 Post Comment
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Verification Modal (Same as before) */}
//       {showVerifyModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className={`max-w-md w-full rounded-2xl p-8 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}>
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               {step === "form" ? "Verify Yourself" : "Enter OTP"}
//             </h2>

//             {step === "form" ? (
//               <>
//                 <input type="text" placeholder="Full Name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`} />
//                 <input type="email" placeholder="Email Address" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`} />
//                 <input type="tel" placeholder="Phone Number" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} className={`w-full p-3 rounded-lg mb-6 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`} />
//                 <button onClick={sendOtp} className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-medium">Send OTP</button>
//               </>
//             ) : (
//               <>
//                 <p className="text-center mb-6 text-sm opacity-75">OTP sent to <strong>{userInfo.email}</strong></p>
//                 <input type="text" placeholder="Enter 6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} className={`w-full p-4 text-center text-2xl tracking-widest rounded-lg border mb-6 ${isDark ? "bg-gray-800" : "bg-gray-50"}`} />
//                 <button onClick={verifyOtp} className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-medium">Verify OTP</button>
//               </>
//             )}

//             <button onClick={() => setShowVerifyModal(false)} className="mt-6 text-sm text-gray-500 underline block mx-auto">Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../../context/ThemeContext";

import { Eye, Heart, MessageCircle, X } from "lucide-react";

import {
  fetchCategories,
  fetchBlogPosts,
  setActiveCategory,
} from "../Redux/Blog/blogSlice.js";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const {
    categories,
    posts: blogPosts,
    activeCategory,
    status,
    error,
  } = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(1);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [pendingPostId, setPendingPostId] = useState(null);
  const [commentText, setCommentText] = useState("");

  // Track which posts user has already liked
  const [userLikes, setUserLikes] = useState(new Set());
  const [updatedPosts, setUpdatedPosts] = useState({});

  // User Verification State
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("verifiedUser");
    if (savedUser) setIsVerified(true);

    const savedLikes = localStorage.getItem("userLikes");
    if (savedLikes) setUserLikes(new Set(JSON.parse(savedLikes)));
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchBlogPosts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Merge original posts with updated likes & comments
  const mergedPosts = blogPosts.map((post) => ({
    ...post,
    likes: updatedPosts[post._id]?.likes ?? post.likes ?? 0,
    comments: updatedPosts[post._id]?.comments ?? post.comments ?? [],
  }));

  const filteredPosts =
    activeCategory === "All"
      ? mergedPosts
      : mergedPosts.filter((post) => post.category?.name === activeCategory);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const handleAction = (action, postId) => {
    if (!isVerified) {
      setPendingPostId(postId);
      setShowVerifyModal(true);
      setStep("form");
      setUserInfo({ name: "", email: "", phone: "" });
      return;
    }

    if (action === "like") {
      if (userLikes.has(postId)) return; // Already liked
      performLike(postId);
    } else if (action === "comment") {
      setPendingPostId(postId);
      setCommentText("");
      setShowCommentModal(true);
    } else if (action === "read") {
      window.location.href = `/blog/${postId}`;
    }
  };

  const performLike = (postId) => {
    setUpdatedPosts((prev) => ({
      ...prev,
      [postId]: {
        ...(prev[postId] || {}),
        likes: (prev[postId]?.likes ?? blogPosts.find(p => p._id === postId)?.likes ?? 0) + 1,
      },
    }));

    const newLikes = new Set(userLikes);
    newLikes.add(postId);
    setUserLikes(newLikes);
    localStorage.setItem("userLikes", JSON.stringify([...newLikes]));
  };

  const submitComment = () => {
    if (!commentText.trim()) return alert("Please write a comment");

    setUpdatedPosts((prev) => {
      const current = prev[pendingPostId] || { likes: 0, comments: [] };
      return {
        ...prev,
        [pendingPostId]: {
          ...current,
          comments: [
            ...current.comments,
            {
              id: Date.now(),
              text: commentText.trim(),
              author: userInfo.name || "Anonymous",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ],
        },
      };
    });

    setShowCommentModal(false);
    setCommentText("");
    alert("✅ Comment posted successfully!");
  };

  const sendOtp = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      alert("Please fill all fields");
      return;
    }
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setStep("otp");
    console.log("OTP Sent:", randomOtp);
    alert(`Demo OTP: ${randomOtp} (Check Console)`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      localStorage.setItem("verifiedUser", JSON.stringify({ ...userInfo, verifiedAt: new Date().toISOString() }));
      setIsVerified(true);
      setShowVerifyModal(false);

      if (pendingPostId) {
        setTimeout(() => {
          handleAction("like", pendingPostId); // Re-trigger like if it was like action
        }, 400);
      }
    } else {
      alert("❌ Wrong OTP. Please try again.");
    }
  };

  if (status === "loading") {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
        <div className="text-2xl animate-pulse">Loading blogs...</div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-red-600"}`}>
        <div className="text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}>

      {/* Header with Category Filters */}
      <header className={`border-b sticky top-0 z-10 backdrop-blur-md ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setActiveCategory(cat))}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                    : isDark
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50"
                    : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-red-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length === 0 ? (
          <div className={`text-center py-24 text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            No posts found in <span className="text-red-500">"{activeCategory}"</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {currentPosts.map((post) => {
                const hasLiked = userLikes.has(post._id);
                return (
                  <div
                    key={post._id}
                    className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                      ${isDark ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-600/60"}`}
                  >
                    {/* Image */}
                    <div className="h-52 relative overflow-hidden">
                      {post.images?.[0] ? (
                        <img
                          src={post.images[0]}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`absolute inset-0 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                          <span className={isDark ? "text-gray-600" : "text-gray-400"}>No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                        {post.category?.name || "Uncategorized"}
                      </span>

                      <h2 className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
                        {post.title || post.name || "Untitled"}
                      </h2>

                      <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        By <span className={isDark ? "text-gray-200" : "text-gray-800"}>{post.author || "Anonymous"}</span>
                      </p>

                      <div
                        className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description || post.excerpt || "") }}
                      />

                      {/* Stats & Actions */}
                      <div className="mt-auto pt-4 flex justify-between items-center">
                        <div className={`flex items-center gap-5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          <div className="flex items-center gap-1">
                            <Eye className="w-5 h-5" /> {post.views || 0}
                          </div>
                          <div
                            className={`flex items-center gap-1 cursor-pointer transition-colors ${hasLiked ? "text-red-500" : "hover:text-red-500"}`}
                            onClick={() => handleAction("like", post._id)}
                          >
                            <Heart className={`w-5 h-5 ${hasLiked ? "fill-current" : ""}`} />
                            {post.likes || 0}
                          </div>
                          <div
                            className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors"
                            onClick={() => handleAction("comment", post._id)}
                          >
                            <MessageCircle className="w-5 h-5" /> {post.comments?.length || 0}
                          </div>
                        </div>

                        <button
                          onClick={() => handleAction("read", post._id)}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:translate-x-1
                            ${isDark
                              ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50 hover:border-red-600"
                              : "bg-red-100 border border-red-200 text-red-600 hover:bg-red-200"}`}
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                      currentPage === 1
                        ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                    }`}
                  >
                    ← Previous
                  </button>

                  {getPageNumbers().map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === "number" && goToPage(page)}
                      disabled={page === "..."}
                      className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                        page === "..."
                          ? isDark ? "text-gray-500" : "text-gray-400"
                          : page === currentPage
                          ? "bg-red-600 text-white shadow-lg"
                          : isDark
                          ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                          : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                      currentPage === totalPages
                        ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                    }`}
                  >
                    Next →
                  </button>
                </nav>

                <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Page {currentPage} of {totalPages} • {totalPosts} posts
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Comment Modal */}
      {showCommentModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-2xl p-6 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Write a Comment</h2>
              <button onClick={() => setShowCommentModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="What are your thoughts?"
              rows={5}
              className={`w-full p-4 rounded-xl border resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-red-500 ${
                isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-gray-50 border-gray-300"
              }`}
            />

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowCommentModal(false)}
                className={`flex-1 py-3 rounded-xl font-medium border ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
              >
                Cancel
              </button>
              <button
                onClick={submitComment}
                disabled={!commentText.trim()}
                className={`flex-1 py-3 rounded-xl font-medium text-white ${
                  commentText.trim() ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-8 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {step === "form" ? "Verify Yourself" : "Enter OTP"}
            </h2>

            {step === "form" ? (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  className={`w-full p-3 rounded-lg mb-6 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                />
                <button
                  onClick={sendOtp}
                  className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-medium"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <p className="text-center mb-6 text-sm opacity-75">
                  OTP sent to <strong>{userInfo.email}</strong>
                </p>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className={`w-full p-4 text-center text-2xl tracking-widest rounded-lg border mb-6 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
                />
                <button
                  onClick={verifyOtp}
                  className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-medium"
                >
                  Verify OTP
                </button>
              </>
            )}

            <button
              onClick={() => setShowVerifyModal(false)}
              className="mt-6 text-sm text-gray-500 underline block mx-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;