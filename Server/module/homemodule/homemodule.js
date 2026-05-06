


// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "BlogCategory",
//       required: true,
//     },
//     author: { type: String, default: "Anonymous" },
//     description: { type: String, required: true },
//     images: [{ type: String, required: true }],

//     // 🔥 New Fields
//     views: { type: Number, default: 0 },
//     likes: { type: Number, default: 0 },
//     likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // For unique likes (recommended)

//     comments: [
//       {
//         user: { type: String, default: "Anonymous" }, // You can change to ObjectId later
//         comment: { type: String, required: true },
//         createdAt: { type: Date, default: Date.now },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);

// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String }, // Better to have both for blog
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },
    author: { type: String, default: "Anonymous" },
    description: { type: String, required: true },
    content: { type: String }, // Full rich content (HTML)
    images: [{ type: String, required: true }],

    // Engagement Fields
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    comments: [
      {
        user: { type: String, default: "Anonymous" },
        email: { type: String },
        comment: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);