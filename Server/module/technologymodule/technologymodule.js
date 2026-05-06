
const mongoose = require("mongoose");
const techSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "techCategory",
      required: true,
    },
    images: [{ type: String, required: true }],
    views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "PopUser" }],
    
        comments: [
          {
            user: { type: String, default: "Anonymous" },
            email: { type: String },
            comment: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
          },
        ],
  },
  
  { timestamps: true },
);

module.exports = mongoose.model("Technology", techSchema);
