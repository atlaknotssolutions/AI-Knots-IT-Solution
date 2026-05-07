const techModel = require("../../module/technologymodule/technologymodule.js");
const categoryModel = require("../../module/technologymodule/categorymodule.js");
const imagekit = require("../../utils/imagekit.js");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const PopUser = require("../../module/popmodule.js");

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
    console.log(newTech, "newTechnewTechnewTech");
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
      { new: true },
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

    const updated = await techModel
      .findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
      .populate("category", "name");

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, views: updated.views });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, userEmail } = req.body;

    if (!comment) {
      return res
        .status(400)
        .json({ success: false, message: "Comment is required" });
    }

    let user = null;
    if (userEmail) {
      user = await PopUser.findOne({ email: userEmail.toLowerCase().trim() });
    }

    const post = await techModel
      .findByIdAndUpdate(
        id,
        {
          $push: {
            comments: {
              user: user ? user._id : null,
              comment,
            },
          },
        },
        { new: true },
      )
      .populate("category", "name");

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
    const { email, userId } = req.body;

    let user = null;
    if (userId) {
      user = await PopUser.findById(userId);
    } else if (email) {
      user = await PopUser.findOne({ email: email.toLowerCase().trim() });
    }

    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User email or userId is required for liking",
        });
    }

    const post = await techModel.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    const hasLiked = post.likedBy.some(
      (uid) => uid.toString() === user._id.toString(),
    );

    if (hasLiked) {
      post.likedBy = post.likedBy.filter(
        (uid) => uid.toString() !== user._id.toString(),
      );
      post.likes = Math.max(0, post.likes - 1);
      user.likedPosts = user.likedPosts.filter(
        (pid) => pid.toString() !== post._id.toString(),
      );
    } else {
      post.likedBy.push(user._id);
      post.likes += 1;
      if (
        !user.likedPosts.some((pid) => pid.toString() === post._id.toString())
      ) {
        user.likedPosts.push(post._id);
      }
    }

    await Promise.all([post.save(), user.save()]);

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
    const { email, name, phone } = req.body;

    if (!email || !name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    const user = await PopUser.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      {
        user: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        otp,
        expires: Date.now() + 10 * 60 * 1000,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    await transporter.sendMail({
      from: `"Your Blog" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Your OTP for Comment Verification",
      html: `
        <h2>Hello ${user.user},</h2>
        <p>Your OTP for commenting is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
        <p>Thank you for engaging with our blog!</p>
      `,
    });

    console.log(`✅ OTP sent to ${user.email} → ${otp}`);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("❌ Send OTP Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please check server logs.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const verifyOtpAndComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, otp, comment } = req.body;

    if (!email || !otp || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await PopUser.findOne({ email: email.toLowerCase().trim() });
    if (!user || !user.otp || !user.expires || user.expires < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP expired or invalid" });
    }
    if (user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const post = await techModel
      .findByIdAndUpdate(
        id,
        {
          $push: {
            comments: {
              user: user._id,
              comment: comment.trim(),
            },
          },
        },
        { new: true },
      )
      .populate("category", "name");

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    user.comments.push({ postId: post._id, comment: comment.trim() });
    user.otp = null;
    user.expires = null;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Comment posted successfully",
      comments: post.comments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getAdminProducts = async (req, res) => {
  try {
    const { limit = 15, page = 1, search = "", category = "" } = req.query;

    // Validate and sanitize query parameters
    const limitNum = parseInt(limit, 10);
    const pageNum = parseInt(page, 10);

    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid limit parameter. Must be a number between 1 and 100.",
      });
    }

    if (isNaN(pageNum) || pageNum < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid page parameter. Must be a number greater than 0.",
      });
    }

    let query = {};

    // Search Filter
    if (search && typeof search === "string" && search.trim()) {
      const searchTerm = search.trim();
      query.$or = [
        { name: { $regex: searchTerm, $options: "i" } },
        { title: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ];
    }

    // Category Filter
    if (category && typeof category === "string" && category.trim()) {
      const categoryId = category.trim();
      // Validate ObjectId format
      if (!/^[0-9a-fA-F]{24}$/.test(categoryId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid category ID format.",
        });
      }
      query.category = categoryId;
    }

    const products = await techModel.find(query)
      .populate("category", "name slug")
      .select(
        "name title category author description images views likes content createdAt updatedAt comments",
      )
      .sort({ createdAt: -1 })
      .limit(limitNum)
      .skip((pageNum - 1) * limitNum)
      .lean();

    const total = await techModel.countDocuments(query);

    const data = products.map((p) => ({
      _id: p._id, // Include _id for admin operations
      name: p.name,
      title: p.title,
      category: p.category,
      author: p.author,
      description: p.description,
      thumbnail: p.images && p.images.length > 0 ? p.images[0] : null,
      imagesCount: p.images ? p.images.length : 0,
      views: p.views || 0,
      likes: p.likes || 0,
      totalComments: p.comments ? p.comments.length : 0,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      status: p.content && p.content.trim().length > 50 ? "Published" : "Draft",
      readingTime: p.content
        ? Math.ceil(p.content.split(/\s+/).length / 200) + " min"
        : "N/A",
    }));

    return res.status(200).json({
      success: true,
      data: data,
      pagination: {
        total,
        currentPage: pageNum,
        totalPages: Math.ceil(total / limitNum),
        limit: limitNum,
      },
      message: "Admin products data fetched successfully",
    });
  } catch (error) {
    console.error("Error in getAdminProducts:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching products",
      error: error.message,
    });
  }
};

const getSingleContent = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    const product = await techModel.findById(id)
      .populate({
        path: "category",
        select: "name description slug", // added slug if needed
      })
      .populate({
        path: "comments.user",
        select: "name email avatar", // better fields
      })
      .lean(); // Convert to plain JS object (faster)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Optional: Increase view count
    // await Product.findByIdAndUpdate(id, { $inc: { views: 1 } });

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("GET SINGLE PRODUCT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching product",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
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
  getAdminProducts
};
