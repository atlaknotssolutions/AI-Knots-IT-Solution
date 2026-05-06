

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../../context/ThemeContext";

import {
  fetchBlogPostById,
  clearCurrentPost,
} from "../Redux/Blog/blogSlice.js";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const { currentPost, detailStatus, detailError } = useSelector(
    (state) => state.blog,
  );

  useEffect(() => {
    if (!id) {
      navigate("/blog");
      return;
    }

    dispatch(fetchBlogPostById(id));

    // Cleanup when component unmounts or id changes
    return () => {
      dispatch(clearCurrentPost());
    };
  }, [id, dispatch, navigate]);

  if (detailStatus === "loading") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <div className="text-2xl animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (detailStatus === "failed" || !currentPost) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <h1 className="text-3xl text-red-500 mb-4">Oops!</h1>
        <p
          className={`text-xl mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {detailError || "Post not found"}
        </p>
        <Link
          to="/blog"
          className={`px-6 py-3 rounded-lg font-medium transition-all
            ${
              isDark
                ? "bg-red-900/50 hover:bg-red-800/70 border border-red-600 text-red-300"
                : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-600"
            }`}
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const post = currentPost;

  // Sanitize main rich content
  const sanitizedContent = DOMPurify.sanitize(
    post.content || post.fullDescription || post.description || "",
  );

  // Sanitize description/excerpt as plain text
  const sanitizedDescription = DOMPurify.sanitize(post.description || "", {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div
      className={`min-h-screen mt-10 transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Hero / Cover Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {post.images?.[0] ? (
          <img
            src={post.images[0]}
            alt={post.title || post.name || "Blog post"}
            className="w-full h-full object-cover brightness-75"
          />
        ) : (
          <div
            className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-950" : "bg-gradient-to-br from-gray-100 via-white to-gray-200"}`}
          />
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-all duration-700
          ${isDark ? "" : "from-black/60 via-black/40 to-transparent"}`}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-sm rounded-full border
            ${
              isDark
                ? "bg-red-900/60 border-red-700/50 text-red-200"
                : "bg-red-100 border-red-200 text-red-700"
            }`}
          >
            {post.category?.name || "Uncategorized"}
          </span>

          <h1
            className={`text-3xl md:text-5xl font-bold leading-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {post.title || post.name || "Untitled Post"}
          </h1>

          <div
            className={`flex flex-wrap items-center gap-4 text-lg md:text-xl
            ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            <div>
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recently published"}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">•</span>
              <span
                className={
                  isDark
                    ? "text-gray-200 font-medium"
                    : "text-gray-800 font-medium"
                }
              >
                {post.author ? `By ${post.author}` : "Anonymous"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          {/* Description / Excerpt */}
          {sanitizedDescription &&
            sanitizedDescription !== sanitizedContent && (
              <p
                className={`text-xl md:text-2xl leading-relaxed mb-10 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {sanitizedDescription}
              </p>
            )}

          {/* Main Rich Content */}
          {sanitizedContent ? (
            <div
              className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          ) : (
            <p
              className={`text-center py-12 italic ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              Full article content not available.
            </p>
          )}

          {/* Additional Images */}
          {post.images?.length > 1 && (
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${post.title || "Post"} - image ${idx + 2}`}
                  className={`rounded-xl border shadow-2xl object-cover transition-all
                    ${isDark ? "border-gray-800" : "border-gray-200"}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-16 pt-10 border-t text-center">
          <Link
            to="/blog"
            className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all
              ${
                isDark
                  ? "bg-red-900/50 hover:bg-red-800/70 border border-red-600 text-red-300"
                  : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-600"
              }`}
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
