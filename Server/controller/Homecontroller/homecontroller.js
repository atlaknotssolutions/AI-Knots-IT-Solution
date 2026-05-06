const imagekit = require("../../utils/imagekit.js");
const Product = require("../../module/homemodule/homemodule");
const Category = require("../../module/BlogModule/caetgorymodule.js");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const PopUser = require("../../module/popmodule.js");

const createContent = async (req, res) => {
  try {
    const { name, description, category, author } = req.body;

    if (!name || !description || !category || !author) {
      return res.status(400).json({
        success: false,
        message: "Name, description, and category are required",
      });
    }

    // ✅ Check Category Exist
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // ✅ Handle Image Upload
    if (!req.files || !req.files.images) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const uploadedImages = [];

    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];

    for (let file of files) {
      const uploadResponse = await imagekit.upload({
        file: file.data,
        fileName: `product-${Date.now()}-${file.name}`,
        folder: "/productImages",
        useUniqueFileName: true,
      });

      uploadedImages.push(uploadResponse.url);
    }

    const newProduct = new Product({
      name,
      description,
      category,
      author,
      images: uploadedImages,
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ============================
// GET ALL PRODUCTS
// ============================
const getHomeData = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// ============================
// UPDATE PRODUCT
// ============================
const updateHomeData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, author, category } = req.body;

    const updateFields = {};

    if (name?.trim()) {
      updateFields.name = name.trim();
    }

    if (description?.trim()) {
      updateFields.description = description.trim();
    }

    if (author?.trim()) {
      updateFields.author = author.trim();
    }

    if (category?.trim()) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      updateFields.category = category;
    }

    // Handle image replacement (if new images sent → replace all)
    if (req.files && req.files.images) {
      const files = Array.isArray(req.files.images)
        ? req.files.images
        : [req.files.images];
      const uploadedImages = [];

      for (const file of files) {
        const uploadRes = await imagekit.upload({
          file: file.data,
          fileName: `product-update-${Date.now()}-${file.name}`,
          folder: "/productImages",
          useUniqueFileName: true,
        });
        uploadedImages.push(uploadRes.url);
      }

      updateFields.images = uploadedImages;
    }

    // Prevent empty update
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true },
    ).populate("category", "name");

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ============================
// DELETE PRODUCT
// ============================
const deletedContent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
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

    const product = await Product.findById(id)
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

    const updated = await Product.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true },
    ).populate("category", "name");

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

    const post = await Product.findByIdAndUpdate(
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
    const { email, userId } = req.body;

    let user = null;
    if (userId) {
      user = await PopUser.findById(userId);
    } else if (email) {
      user = await PopUser.findOne({ email: email.toLowerCase().trim() });
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User email or userId is required for liking",
      });
    }

    const post = await Product.findById(id);
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

const UserBlog = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newUser = new PopUser({ name, email, phone });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("User Creation Error:", error);
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

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

    const post = await Product.findByIdAndUpdate(
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
    ).populate("category", "name");

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

module.exports = {
  createContent,
  getHomeData,
  getSingleContent,
  deletedContent,
  updateHomeData,
  incrementView, // ← New
  toggleLike, // ← New
  addComment,
  sendOtp,
  verifyOtpAndComment, // ← New
};
