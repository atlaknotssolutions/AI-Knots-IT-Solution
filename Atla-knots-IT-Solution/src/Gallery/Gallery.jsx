// import React, { useState, useEffect } from "react";

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/gallery");

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();

//         if (!result.success || !Array.isArray(result.data)) {
//           throw new Error("Invalid API response format");
//         }

//         // Extract all image URLs from the nested "images" arrays
//         const allImageUrls = result.data
//           .flatMap((item) => item.images || []) // get images array or empty
//           .filter((url) => typeof url === "string" && url.trim() !== ""); // keep only valid strings

//         setImages(allImageUrls);
//       } catch (err) {
//         console.error("Gallery fetch error:", err);
//         setError(err.message || "Failed to load gallery images");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   // Fallback images (your original ones)

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-2xl">Loading gallery...</p>
//       </div>
//     );
//   }

//   const displayImages = images.length > 0 ? images : fallbackImages;

//   return (
//     <div className="min-h-screen bg-black text-white px-4 py-12 md:px-8">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 text-center mb-10 md:mb-16 tracking-tight">
//         My Photo Gallery
//       </h1>

//       {error && (
//         <p className="text-center text-red-400 mb-8">
//           {error} — showing fallback images instead
//         </p>
//       )}

//       <div className="max-w-20xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {displayImages.map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-300"
//             >
//               <img
//                 src={
//                   src.startsWith("http")
//                     ? `${src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
//                     : `http://localhost:8000${src}?auto=format&fit=crop&w=800&q=80`
//                 }
//                 alt={`Gallery image ${index + 1}`}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src = fallbackImages[index % fallbackImages.length];
//                   e.target.alt = "Fallback image";
//                 }}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                 <p className="text-white text-sm p-4 font-medium">
//                   Image {index + 1}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Gallery = () => {
  const { isDark } = useTheme(); // ← Theme Hook Added

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback images (your original ones)
  const fallbackImages = [
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558655146-9f40138f37f5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/gallery");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error("Invalid API response format");
        }

        // Extract all image URLs from the nested "images" arrays
        const allImageUrls = result.data
          .flatMap((item) => item.images || [])
          .filter((url) => typeof url === "string" && url.trim() !== "");

        setImages(allImageUrls);
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError(err.message || "Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const displayImages = images.length > 0 ? images : fallbackImages;

  // ====================== THEME CLASSES ======================
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-600";

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className={`text-2xl ${bodyClass}`}>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-4 py-12 md:px-8 transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-16 tracking-tight ${accentClass}`}
        >
          My Photo Gallery
        </h1>

        {error && (
          <p className="text-center text-red-500 mb-8">
            {error} — showing fallback images instead
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl
                ${isDark ? "shadow-black/50 hover:shadow-red-900/30" : "shadow-gray-300 hover:shadow-red-200"}`}
            >
              <img
                src={
                  src.startsWith("http")
                    ? `${src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                    : `http://localhost:8000${src}?auto=format&fit=crop&w=800&q=80`
                }
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = fallbackImages[index % fallbackImages.length];
                  e.target.alt = "Fallback image";
                }}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end
                ${isDark ? "" : "from-black/60"}`}
              >
                <p className="text-white text-sm p-4 font-medium">
                  Image {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
