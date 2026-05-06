

const techModel = require("../../module/technologymodule/technologymodule.js");
const categoryModel = require("../../module/technologymodule/categorymodule.js");
const imagekit = require("../../utils/imagekit.js");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

// ================= CREATE TECH =================
const createTech = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and category are required",
      });
    }

    // ✅ Check category exists
    const categoryExists = await categoryModel.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    if (!req.files || !req.files.images) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];

    const uploadedImages = [];

    for (let file of files) {
      const uploadResponse = await imagekit.upload({
        file: file.data.toString("base64"),
        fileName: file.name,
      });

      uploadedImages.push(uploadResponse.url);
    }

    // ✅ Only ObjectId stored in category
    const newTech = new techModel({
      title: title.trim(),
      description: description.trim(),
      category: categoryExists._id,
      images: uploadedImages,
    });
    console.log(newTech,"newTechnewTechnewTech")
    await newTech.save();

    res.status(201).json({
      success: true,
      message: "Tech created successfully",
      data: newTech,
    });

  } catch (error) {
    console.error("Error creating tech:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= UPDATE TECH =================
const updateTech = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, images } = req.body;

    const updateFields = {};

    if (title?.trim()) updateFields.title = title.trim();
    if (description?.trim()) updateFields.description = description.trim();

    // ✅ Only ObjectId update
    if (category) {
      const categoryExists = await categoryModel.findById(category);
      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      updateFields.category = categoryExists._id;
    }

    if (images && Array.isArray(images) && images.length > 0) {
      updateFields.images = images;
    }

    const updatedTech = await techModel.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedTech) {
      return res.status(404).json({
        success: false,
        message: "Tech content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tech content updated successfully",
      data: updatedTech,
    });

  } catch (error) {
    console.error("Error updating tech content:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// ================= GET TECH =================
const getTechData = async (req, res) => {
  try {

    const techData = await techModel
      .find()
      .populate("category", "name")
      .sort({ createdAt: -1 });
// console.log(techData,"techDatatechData")
    res.status(200).json({
      success: true,
      count: techData.length,
      message: "Tech data fetched successfully",
      data: techData,
    });

  } catch (error) {
    console.error("Error fetching tech data:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// ================= DELETE TECH =================
const deleteTech = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTech = await techModel.findByIdAndDelete(id);

    if (!deletedTech) {
      return res.status(404).json({
        success: false,
        message: "Tech content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tech content deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting tech content:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};






const otpStore = new Map();

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // domain SMTP
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ======================
// INCREMENT VIEW
// ======================
const incrementView = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await techModel.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate("category", "name");

    if (!updated) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, views: updated.views });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, user = "Anonymous" } = req.body;

    if (!comment) {
      return res.status(400).json({ success: false, message: "Comment is required" });
    }

    const post = await techModel.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: { user, comment },
        },
      },
      { new: true }
    ).populate("category", "name");

    res.status(201).json({
      success: true,
      message: "Comment added",
      comments: post.comments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// ======================
// LIKE / UNLIKE (Proper with likedBy)
// ======================
const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id; // If you have auth middleware

    const post = await techModel.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    const hasLiked = post.likedBy.includes(userId);

    if (hasLiked) {
      // Unlike
      post.likedBy = post.likedBy.filter((uid) => uid.toString() !== userId);
      post.likes = Math.max(0, post.likes - 1);
    } else {
      // Like
      post.likedBy.push(userId);
      post.likes += 1;
    }

    await post.save();

    res.status(200).json({
      success: true,
      likes: post.likes,
      liked: !hasLiked,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ======================
// SEND OTP FOR COMMENT
// ======================
// ======================
// SEND OTP
// ======================
const sendOtp = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ 
        success: false, 
        message: "Name and Email are required" 
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid email format" 
      });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    otpStore.set(email, {
      otp,
      name,
      expires: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    await transporter.sendMail({
      from: `"Your Blog" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Comment Verification",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your OTP for commenting is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
        <p>Thank you for engaging with our blog!</p>
      `
    });

    console.log(`✅ OTP sent to ${email} → ${otp}`);

    res.status(200).json({ 
      success: true, 
      message: "OTP sent successfully" 
    });

  } catch (error) {
    console.error("❌ Send OTP Error:", error);
    
    // Better error message for debugging
    res.status(500).json({ 
      success: false, 
      message: "Failed to send OTP. Please check server logs.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};

// ======================
// VERIFY OTP & ADD COMMENT
// ======================
const verifyOtpAndComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, otp, comment } = req.body;

    if (!email || !otp || !comment) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const stored = otpStore.get(email);
    if (!stored || stored.expires < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired or invalid" });
    }
    if (stored.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const post = await techModel.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: {
            user: stored.name,
            email: email,
            comment: comment.trim(),
          },
        },
      },
      { new: true }
    ).populate("category", "name");

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Clean up OTP
    otpStore.delete(email);

    res.status(201).json({
      success: true,
      message: "Comment posted successfully",
      comments: post.comments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



const getSingleContent = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId format (optional but good practice)
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    const product = await techModel.findById(id)
      .populate({
        path: "category",
        select: "name description", // bring only needed fields (add more if required)
      })
      .lean(); // faster + plain object (good for API responses)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("GET SINGLE PRODUCT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch product details",
      error: error.message,
    });
  }
};


module.exports = {
  createTech,
  getTechData,
  deleteTech,
  updateTech,
  incrementView,
  toggleLike,
  sendOtp,
  verifyOtpAndComment,
  addComment,
  getSingleContent,
};
