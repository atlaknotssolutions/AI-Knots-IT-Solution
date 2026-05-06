const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user: { type: String, default: "Anonymous" },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    expires: {
      type: Date,
    },
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId }],
    comments: [
      {
        postId: { type: mongoose.Schema.Types.ObjectId },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);

// 👇 VERY IMPORTANT
module.exports = mongoose.model("PopUser", userSchema);
