const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user: { type: String, default: "Anonymous" },
    email: { type: String },
    phone: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },

  },
  { timestamps: true },
);

// 👇 VERY IMPORTANT
module.exports = mongoose.model("PopUser", userSchema);
