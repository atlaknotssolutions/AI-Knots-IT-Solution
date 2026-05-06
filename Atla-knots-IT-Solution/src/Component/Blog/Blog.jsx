// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";
// import { useTheme } from "../../context/ThemeContext";

// import {
//   fetchCategories,
//   fetchBlogPosts,
//   setActiveCategory,
// } from "../Redux/Blog/blogSlice.js";

// const POSTS_PER_PAGE = 5;

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

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCategories());
//       dispatch(fetchBlogPosts());
//     }
//   }, [status, dispatch]);

//   // Reset to page 1 when category changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeCategory]);

//   const filteredPosts =
//     activeCategory === "All"
//       ? blogPosts
//       : blogPosts.filter((post) => post.category?.name === activeCategory);

//   // Pagination logic
//   const totalPosts = filteredPosts.length;
//   const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const endIndex = startIndex + POSTS_PER_PAGE;
//   const currentPosts = filteredPosts.slice(startIndex, endIndex);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Helper to generate page numbers (with ellipsis)
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

//   if (status === "loading") {
//     return (
//       <div
//         className={`min-h-screen ${isDark ? "bg-black" : "bg-white"} flex items-center justify-center ${isDark ? "text-white" : "text-gray-900"}`}
//       >
//         <div className="text-2xl animate-pulse">Loading content...</div>
//       </div>
//     );
//   }

//   if (status === "failed") {
//     return (
//       <div
//         className={`min-h-screen ${isDark ? "bg-black" : "bg-white"} flex items-center justify-center ${isDark ? "text-red-400" : "text-red-600"}`}
//       >
//         <div className="text-xl text-center">
//           {error || "Something went wrong"}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`min-h-screen ${isDark ? "bg-black" : "bg-white"} ${isDark ? "text-white" : "text-gray-900"} font-sans`}
//     >
//       <header
//         className={`border-b ${isDark ? "border-gray-800" : "border-gray-200"} sticky top-0 z-10 ${isDark ? "bg-black/80" : "bg-white/80"} backdrop-blur-md`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => dispatch(setActiveCategory(cat))}
//                 className={`
//                   px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
//                   ${
//                     activeCategory === cat
//                       ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
//                       : `${isDark ? "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800" : "bg-gray-100/80 border-gray-300 text-gray-700 hover:bg-gray-200"} hover:border-red-600/50 hover:text-red-600`
//                   }
//                 `}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {filteredPosts.length === 0 ? (
//           <div
//             className={`text-center py-24 ${isDark ? "text-gray-400" : "text-gray-600"} text-2xl`}
//           >
//             No posts found in{" "}
//             <span className="text-red-400">"{activeCategory}"</span>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
//               {currentPosts.map((post, index) => {
//                 const sanitizedDescription = DOMPurify.sanitize(
//                   post.description ||
//                     post.excerpt ||
//                     "<p>No description available...</p>",
//                 );

//                 return (
//                   <Link
//                     to={`/blog/${post._id}`}
//                     key={post._id}
//                     className={`group ${isDark ? "bg-gray-900/70 border-gray-800" : "bg-white border-gray-200"} rounded-2xl overflow-hidden 
//                       hover:border-red-600/60 transition-all duration-500 
//                       hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] 
//                       animate-fade-in block flex flex-col h-full`}
//                     style={{ animationDelay: `${index * 80}ms` }}
//                   >
//                     <div className="h-52 relative overflow-hidden">
//                       {post.images?.[0] ? (
//                         <img
//                           src={post.images[0]}
//                           alt={post.title || post.name || "Blog post"}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div
//                           className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"} flex items-center justify-center ${isDark ? "text-gray-600" : "text-gray-400"}`}
//                         >
//                           No Image
//                         </div>
//                       )}
//                     </div>

//                     <div className="p-6 flex flex-col flex-grow">
//                       <span
//                         className={`inline-block px-3 py-1 mb-3 text-xs ${isDark ? "bg-gray-800/80 text-gray-300" : "bg-gray-200/80 text-gray-700"} rounded-full w-fit`}
//                       >
//                         {post.category?.name || "Uncategorized"}
//                       </span>

//                       <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-2">
//                         {post.title || post.name || "Untitled"}
//                       </h2>

//                       <p
//                         className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-3`}
//                       >
//                         By{" "}
//                         <span
//                           className={`${isDark ? "text-gray-200" : "text-gray-800"}`}
//                         >
//                           {post.author || "Anonymous"}
//                         </span>
//                       </p>

//                       <div
//                         className={`${isDark ? "text-gray-400" : "text-gray-600"} line-clamp-3 mb-6 prose prose-invert prose-sm flex-grow`}
//                         dangerouslySetInnerHTML={{
//                           __html: sanitizedDescription,
//                         }}
//                       />

//                       <div className="mt-auto pt-4">
//                         <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-medium rounded-lg hover:bg-red-800/50 hover:border-red-600 hover:text-red-200 transition-all duration-300 group-hover:translate-x-1">
//                           Read More
//                           <svg
//                             className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* ──────────────── Pagination Controls ──────────────── */}
//             {totalPages > 1 && (
//               <div className="flex flex-col items-center gap-4 mt-8">
//                 <nav className="flex items-center gap-2">
//                   <button
//                     onClick={() => goToPage(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
//                       ${
//                         currentPage === 1
//                           ? `${isDark ? "bg-gray-800/50 text-gray-500" : "bg-gray-200/50 text-gray-400"} cursor-not-allowed`
//                           : `${isDark ? "bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"} border hover:border-red-600/50`
//                       }`}
//                   >
//                     ← Previous
//                   </button>

//                   {getPageNumbers().map((page, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => typeof page === "number" && goToPage(page)}
//                       disabled={page === "..."}
//                       className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200
//                         ${
//                           page === "..."
//                             ? `${isDark ? "text-gray-500" : "text-gray-400"} cursor-default`
//                             : page === currentPage
//                               ? "bg-red-900/60 border border-red-600 text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.25)]"
//                               : `${isDark ? "bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"} hover:border-red-600/50`
//                         }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => goToPage(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
//                       ${
//                         currentPage === totalPages
//                           ? `${isDark ? "bg-gray-800/50 text-gray-500" : "bg-gray-200/50 text-gray-400"} cursor-not-allowed`
//                           : `${isDark ? "bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"} border hover:border-red-600/50`
//                       }`}
//                   >
//                     Next →
//                   </button>
//                 </nav>

//                 <div
//                   className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
//                 >
//                   Page {currentPage} of {totalPages} • {totalPosts} posts
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Blog;


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useTheme } from "../../context/ThemeContext";

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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchBlogPosts());
    }
  }, [status, dispatch]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category?.name === activeCategory);

  // Pagination logic
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helper to generate page numbers (with ellipsis)
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

  if (status === "loading") {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
        <div className="text-2xl animate-pulse">Loading content...</div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-700
        ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-red-600"}`}>
        <div className="text-xl text-center">
          {error || "Something went wrong"}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}>

      {/* Header with Category Filters */}
      <header className={`border-b sticky top-0 z-10 backdrop-blur-md transition-colors
        ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setActiveCategory(cat))}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                  ${
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
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {currentPosts.map((post, index) => {
                const sanitizedDescription = DOMPurify.sanitize(
                  post.description || post.excerpt || "<p>No description available...</p>"
                );

                return (
                  <Link
                    to={`/blog/${post._id}`}
                    key={post._id}
                    className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                      ${isDark 
                        ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" 
                        : "bg-white border-gray-200 hover:border-red-600/60"}`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* Image */}
                    <div className="h-52 relative overflow-hidden">
                      {post.images?.[0] ? (
                        <img
                          src={post.images[0]}
                          alt={post.title || "Blog post"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`absolute inset-0 flex items-center justify-center
                          ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                          <span className={isDark ? "text-gray-600" : "text-gray-400"}>No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit
                        ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                        {post.category?.name || "Uncategorized"}
                      </span>

                      <h2 className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors
                        ${isDark ? "text-white" : "text-gray-900"}`}>
                        {post.title || post.name || "Untitled"}
                      </h2>

                      <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        By <span className={isDark ? "text-gray-200" : "text-gray-800"}>{post.author || "Anonymous"}</span>
                      </p>

                      <div
                        className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                      />

                      <div className="mt-auto pt-4">
                        <span className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 group-hover:translate-x-1
                          ${isDark 
                            ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50 hover:border-red-600" 
                            : "bg-red-100 border border-red-200 text-red-600 hover:bg-red-200"}`}>
                          Read More
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${currentPage === 1 
                        ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"}`}
                  >
                    ← Previous
                  </button>

                  {getPageNumbers().map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === "number" && goToPage(page)}
                      disabled={page === "..."}
                      className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200
                        ${page === "..." 
                          ? isDark ? "text-gray-500" : "text-gray-400"
                          : page === currentPage
                            ? "bg-red-600 text-white shadow-lg"
                            : isDark 
                              ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                              : "bg-gray-100 hover:bg-gray-200 border border-gray-300"}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${currentPage === totalPages 
                        ? isDark ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : isDark ? "bg-gray-800 hover:bg-gray-700 border-gray-700" : "bg-gray-100 hover:bg-gray-200 border-gray-300"}`}
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
    </div>
  );
};

export default Blog;