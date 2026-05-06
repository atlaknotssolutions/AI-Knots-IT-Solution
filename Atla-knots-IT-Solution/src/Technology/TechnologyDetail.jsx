// import React, { useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import DOMPurify from "dompurify";
// import { useTheme } from "../context/ThemeContext";

// import {
//   incrementPostView,
//   togglePostLike,
//   sendCommentOtp,
//   postCommentWithOtp,
// } from "./technologyslice/technologySlice";

// const TechnologyDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isDark } = useTheme();

//   const { newsItems } = useSelector((state) => state.technology);
//   const post = newsItems.find((item) => item._id === id || item.id === id);

//   // Auto increment view when page loads
//   useEffect(() => {
//     if (id) {
//       dispatch(incrementPostView(id));
//     }
//   }, [id, dispatch]);

//   if (!post) {
//     return (
//       <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
//           <Link to="/technology" className="text-red-600 hover:underline">← Back to Technology</Link>
//         </div>
//       </div>
//     );
//   }

//   const sanitizedContent = DOMPurify.sanitize(post.description || "");

//   return (
//     <div className={`min-h-screen mt-10 transition-colors duration-700 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>
//       {/* Hero Image */}
//       <div className="relative h-96 md:h-[500px] overflow-hidden">
//         {post.image ? (
//           <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-75" />
//         ) : (
//           <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"}`} />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
//         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{post.title}</h1>
//           <div className={`flex items-center gap-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//             <span>{post.date}</span>
//             <span>•</span>
//             <span>By {post.author}</span>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
//         <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
//           <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`} />
//         </div>

//         {/* Back Button */}
//         <div className="mt-16 text-center">
//           <Link to="/technology" className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all ${isDark ? "bg-red-900/50 hover:bg-red-800/70 border border-red-600 text-red-300" : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-600"}`}>
//             ← Back to Technology
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TechnologyDetail;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../context/ThemeContext";

import {
  incrementPostView,
  togglePostLike,
  sendCommentOtp,
  postCommentWithOtp,
} from "./technologyslice/technologySlice";

const TechnologyDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const { newsItems, commentStatus } = useSelector((state) => state.technology);
  const post = newsItems.find((item) => item._id === id || item.id === id);

  // Local State for Comment Form
  const [commentText, setCommentText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto increment view
  useEffect(() => {
    if (id) {
      dispatch(incrementPostView(id));
    }
  }, [id, dispatch]);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/technology" className="text-red-600 hover:underline">← Back to Technology</Link>
        </div>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.description || "");

  // Handle Like
  const handleLike = () => {
    dispatch(togglePostLike(id));
  };

  // Send OTP
  const handleSendOtp = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }
    setIsSubmitting(true);
    await dispatch(sendCommentOtp({ postId: id, name, email, phone }));
    setShowOtpInput(true);
    setIsSubmitting(false);
  };

  // Post Comment
  const handlePostComment = async () => {
    if (!otp || !commentText) return;
    setIsSubmitting(true);

    const result = await dispatch(
      postCommentWithOtp({ postId: id, email, otp, comment: commentText })
    );

    if (!result.error) {
      setCommentText("");
      setOtp("");
      setShowOtpInput(false);
      alert("Comment posted successfully!");
    }
    setIsSubmitting(false);
  };

  return (
    <div className={`min-h-screen mt-10 transition-colors duration-700 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-75" />
        ) : (
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className={`flex items-center gap-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          />
        </div>

    

        {/* ==================== COMMENTS SECTION ==================== */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Comments ({post.comments?.length || 0})</h2>

          
          {/* Display Comments */}
          <div className="space-y-8">
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <div key={index} className={`p-6 rounded-2xl ${isDark ? "bg-zinc-900" : "bg-gray-100"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {(comment.user?.name || "U")[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold">{comment.user?.name || "Anonymous"}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {comment.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/technology"
            className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all ${isDark ? "bg-red-900/50 hover:bg-red-800/70 border border-red-600 text-red-300" : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-600"}`}
          >
            ← Back to Technology
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TechnologyDetail;