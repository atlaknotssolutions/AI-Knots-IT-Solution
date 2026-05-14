// const techModel = require("../../module/technologymodule/technologymodule.js");
// const categoryModel = require("../../module/technologymodule/categorymodule.js");
// const imagekit = require("../../utils/imagekit.js");
// const nodemailer = require("nodemailer");
// const otpGenerator = require("otp-generator");
// const PopUser = require("../../module/popmodule.js");
// const slugify = require("slugify");

// const generateUniqueSlug = async (title, excludeId = null) => {
//   let baseSlug = slugify(title || "", {
//     lower: true,
//     strict: true,
//     trim: true
//   });

//   if (!baseSlug) baseSlug = `tech-${Date.now()}`;

//   let slug = baseSlug;
//   let counter = 1;

//   while (true) {
//     const existing = await techModel.findOne({
//       slug,
//       _id: { $ne: excludeId }
//     });

//     if (!existing) break;

//     slug = `${baseSlug}-${counter}`;
//     counter++;
//   }
//   return slug;
// };

// // ================= CREATE TECH =================
// const createTech = async (req, res) => {
//   try {
//     const { title, description, category } = req.body;

//     if (!title || !description || !category) {
//       return res.status(400).json({
//         success: false,
//         message: "Title, description, and category are required",
//       });
//     }

//     const categoryExists = await categoryModel.findById(category);
//     if (!categoryExists) {
//       return res.status(404).json({
//         success: false,
//         message: "Category not found",
//       });
//     }

//     if (!req.files?.images) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
//     const uploadedImages = [];

//     for (let file of files) {
//       const uploadResponse = await imagekit.upload({
//         file: file.data.toString("base64"),
//         fileName: file.name,
//       });
//       uploadedImages.push(uploadResponse.url);
//     }

//     const slug = await generateUniqueSlug(title);

//     const newTech = new techModel({
//       title: title.trim(),
//       slug,                    // ← Added
//       description: description.trim(),
//       category: categoryExists._id,
//       images: uploadedImages,
//     });

//     await newTech.save();

//     res.status(201).json({
//       success: true,
//       message: "Tech created successfully",
//       data: newTech,
//     });
//   } catch (error) {
//     console.error("Error creating tech:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ================= UPDATE TECH =================
// const updateTech = async (req, res) => {
//   try {
//     const { slug } = req.params;           // Changed from id to slug
//     const { title, description, category, images } = req.body;

//     const updateFields = {};

//     if (title?.trim()) {
//       updateFields.title = title.trim();
//       updateFields.slug = await generateUniqueSlug(title, req.params.id); // optional: pass _id if needed
//     }
//     if (description?.trim()) updateFields.description = description.trim();

//     if (category) {
//       const categoryExists = await categoryModel.findById(category);
//       if (!categoryExists) {
//         return res.status(404).json({ success: false, message: "Category not found" });
//       }
//       updateFields.category = categoryExists._id;
//     }

//     if (images && Array.isArray(images) && images.length > 0) {
//       updateFields.images = images;
//     }

//     const updatedTech = await techModel.findOneAndUpdate(
//       { slug },
//       { $set: updateFields },
//       { new: true }
//     );

//     if (!updatedTech) {
//       return res.status(404).json({
//         success: false,
//         message: "Tech content not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Tech content updated successfully",
//       data: updatedTech,
//     });
//   } catch (error) {
//     console.error("Error updating tech content:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // ================= GET TECH =================
// const getTechData = async (req, res) => {
//   try {
//     const techData = await techModel
//       .find()
//       .populate("category", "name slug")
//       .select("title slug description images views likes category createdAt")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: techData.length,
//       message: "Tech data fetched successfully",
//       data: techData,
//     });
//   } catch (error) {
//     console.error("Error fetching tech data:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // ================= DELETE TECH =================
// const deleteTech = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const deletedTech = await techModel.findOneAndDelete({ slug });

//     if (!deletedTech) {
//       return res.status(404).json({
//         success: false,
//         message: "Tech content not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Tech content deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting tech content:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };
// // Nodemailer Setup
// const transporter = nodemailer.createTransport({
//   host: "smtpout.secureserver.net", // domain SMTP
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ======================
// // INCREMENT VIEW
// // ======================
// const incrementView = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const updated = await techModel
//       .findOneAndUpdate(
//         { slug },
//         { $inc: { views: 1 } },
//         { new: true }
//       )
//       .populate("category", "name");

//     if (!updated) {
//       return res.status(404).json({ success: false, message: "Post not found" });
//     }

//     res.status(200).json({ success: true, views: updated.views });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// const addComment = async (req, res) => {
//   try {
//     const { slug } = req.params;        // Changed to slug
//     const { comment, userEmail } = req.body;

//     if (!comment) {
//       return res.status(400).json({ success: false, message: "Comment is required" });
//     }

//     let user = null;
//     if (userEmail) {
//       user = await PopUser.findOne({ email: userEmail.toLowerCase().trim() });
//     }

//     const post = await techModel
//       .findOneAndUpdate(
//         { slug },
//         { $push: { comments: { user: user ? user._id : null, comment } } },
//         { new: true }
//       )
//       .populate("category", "name");

//     if (!post) return res.status(404).json({ success: false, message: "Post not found" });

//     res.status(201).json({
//       success: true,
//       message: "Comment added",
//       comments: post.comments,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
// // ======================
// // LIKE / UNLIKE (Proper with likedBy)
// // ======================
// const toggleLike = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, userId } = req.body;

//     let user = null;
//     if (userId) {
//       user = await PopUser.findById(userId);
//     } else if (email) {
//       user = await PopUser.findOne({ email: email.toLowerCase().trim() });
//     }

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User email or userId is required for liking",
//       });
//     }

//     const post = await techModel.findById(id);
//     if (!post) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Post not found" });
//     }

//     const hasLiked = post.likedBy.some(
//       (uid) => uid.toString() === user._id.toString(),
//     );

//     if (hasLiked) {
//       post.likedBy = post.likedBy.filter(
//         (uid) => uid.toString() !== user._id.toString(),
//       );
//       post.likes = Math.max(0, post.likes - 1);
//       user.likedPosts = user.likedPosts.filter(
//         (pid) => pid.toString() !== post._id.toString(),
//       );
//     } else {
//       post.likedBy.push(user._id);
//       post.likes += 1;
//       if (
//         !user.likedPosts.some((pid) => pid.toString() === post._id.toString())
//       ) {
//         user.likedPosts.push(post._id);
//       }
//     }

//     await Promise.all([post.save(), user.save()]);

//     res.status(200).json({
//       success: true,
//       likes: post.likes,
//       liked: !hasLiked,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
// const sendOtp = async (req, res) => {
//   try {
//     const { email, name, phone } = req.body;

//     if (!email || !name || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, and phone are required",
//       });
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email format",
//       });
//     }

//     const otp = otpGenerator.generate(6, {
//       upperCaseAlphabets: false,
//       specialChars: false,
//       digits: true,
//     });

//     const user = await PopUser.findOneAndUpdate(
//       { email: email.toLowerCase().trim() },
//       {
//         user: name.trim(),
//         email: email.toLowerCase().trim(),
//         phone: phone.trim(),
//         otp,
//         expires: Date.now() + 10 * 60 * 1000,
//       },
//       { upsert: true, new: true, setDefaultsOnInsert: true },
//     );

//     await transporter.sendMail({
//       from: `"Your Blog" <${process.env.EMAIL_USER}>`,
//       to: user.email,
//       subject: "Your OTP for Comment Verification",
//       html: `
//         <h2>Hello ${user.user},</h2>
//         <p>Your OTP for commenting is: <strong>${otp}</strong></p>
//         <p>This OTP will expire in 10 minutes.</p>
//         <p>Thank you for engaging with our blog!</p>
//       `,
//     });

//     console.log(`✅ OTP sent to ${user.email} → ${otp}`);

//     res.status(200).json({
//       success: true,
//       message: "OTP sent successfully",
//       userId: user._id,
//     });
//   } catch (error) {
//     console.error("❌ Send OTP Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to send OTP. Please check server logs.",
//       error: process.env.NODE_ENV === "development" ? error.message : undefined,
//     });
//   }
// };

// const verifyOtpAndComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, otp, comment } = req.body;

//     if (!email || !otp || !comment) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const user = await PopUser.findOne({ email: email.toLowerCase().trim() });
//     if (!user || !user.otp || !user.expires || user.expires < Date.now()) {
//       return res
//         .status(400)
//         .json({ success: false, message: "OTP expired or invalid" });
//     }
//     if (user.otp !== otp) {
//       return res.status(400).json({ success: false, message: "Invalid OTP" });
//     }

//     const post = await techModel
//       .findByIdAndUpdate(
//         id,
//         {
//           $push: {
//             comments: {
//               user: user._id,
//               comment: comment.trim(),
//             },
//           },
//         },
//         { new: true },
//       )
//       .populate("category", "name");

//     if (!post) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Post not found" });
//     }

//     user.comments.push({ postId: post._id, comment: comment.trim() });
//     user.otp = null;
//     user.expires = null;
//     await user.save();

//     res.status(201).json({
//       success: true,
//       message: "Comment posted successfully",
//       comments: post.comments,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

const techModel = require("../../module/technologymodule/technologymodule.js");
const categoryModel = require("../../module/technologymodule/categorymodule.js");
const imagekit = require("../../utils/imagekit.js");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const PopUser = require("../../module/popmodule.js");
const slugify = require("slugify");

const generateUniqueSlug = async (title, excludeId = null) => {
  let baseSlug = slugify(title || "", {
    lower: true,
    strict: true,
    trim: true,
  });

  if (!baseSlug) baseSlug = `tech-${Date.now()}`;

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await techModel.findOne({
      slug,
      _id: { $ne: excludeId },
    });

    if (!existing) break;

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

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

    const categoryExists = await categoryModel.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    if (!req.files?.images) {
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

    const slug = await generateUniqueSlug(title);

    const newTech = new techModel({
      title: title.trim(),
      slug,
      description: description.trim(),
      category: categoryExists._id,
      images: uploadedImages,
      views: 0,
      likes: 0,
      likedBy: [],
      comments: [],
    });

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

// ================= UPDATE TECH (Admin by ID) =================
// ================= UPDATE TECH (Admin by ID) =================
const updateTech = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const updateFields = {};

    if (title?.trim()) {
      updateFields.title = title.trim();
      updateFields.slug = await generateUniqueSlug(title, id);
    }

    if (description?.trim()) {
      updateFields.description = description.trim();
    }

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

    // Handle new images if sent
    if (req.files?.images) {
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
      updateFields.images = uploadedImages;
    }

    const updatedTech = await techModel
      .findByIdAndUpdate(id, { $set: updateFields }, { new: true })
      .populate("category", "name");

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
      message: error.message || "Internal server error",
    });
  }
};

// ================= GET ALL TECH =================
const getTechData = async (req, res) => {
  try {
    const techData = await techModel
      .find()
      .populate("category", "name slug")
      .select(
        "title slug description images views likes category createdAt updatedAt",
      )
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: techData.length,
      message: "Tech data fetched successfully",
      data: techData,
    });
  } catch (error) {
    console.error("Error fetching tech data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// ================= DELETE TECH =================
const deleteTech = async (req, res) => {
  try {
    const { slug } = req.params;
    const deletedTech = await techModel.findOneAndDelete({ slug });

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
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// ================= INCREMENT VIEW =================
const incrementView = async (req, res) => {
  try {
    const { slug } = req.params;

    const updated = await techModel
      .findOneAndUpdate({ slug }, { $inc: { views: 1 } }, { new: true })
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

// ================= TOGGLE LIKE (Fixed - Using Slug) =================
const toggleLike = async (req, res) => {
  try {
    const { slug } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await PopUser.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const post = await techModel.findOne({ slug });
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    const hasLiked = post.likedBy?.some(
      (uid) => uid.toString() === user._id.toString(),
    );

    if (hasLiked) {
      post.likedBy = post.likedBy.filter(
        (uid) => uid.toString() !== user._id.toString(),
      );
      post.likes = Math.max(0, post.likes - 1);
    } else {
      post.likedBy.push(user._id);
      post.likes += 1;
    }

    await post.save();

    res.status(200).json({
      success: true,
      likes: post.likes,
      liked: !hasLiked,
    });
  } catch (error) {
    console.error("Like Toggle Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= ADD COMMENT (Without OTP) =================
const addComment = async (req, res) => {
  try {
    const { slug } = req.params;
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
      .findOneAndUpdate(
        { slug },
        {
          $push: {
            comments: { user: user ? user._id : null, comment: comment.trim() },
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

    res.status(201).json({
      success: true,
      message: "Comment added",
      comments: post.comments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= SEND OTP =================
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
      `,
    });

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Send OTP Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// ================= VERIFY OTP + COMMENT (Fixed - Using Slug) =================
const verifyOtpAndComment = async (req, res) => {
  try {
    const { slug } = req.params; // Changed from id to slug
    const { email, comment } = req.body;

    if (!email || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "Email and comment are required" });
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
      .findOneAndUpdate(
        { slug }, // Changed to slug
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
    // Keep the OTP valid until it expires so the same user can post another comment
    // within the same verification window instead of forcing a new OTP immediately.
    await user.save();

    res.status(201).json({
      success: true,
      message: "Comment posted successfully",
      comments: post.comments,
    });
  } catch (error) {
    console.error("Verify OTP & Comment Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= GET SINGLE CONTENT =================
// const getSingleContent = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     if (!slug) {
//       return res.status(400).json({ success: false, message: "Slug is required" });
//     }

//     const product = await techModel
//       .findOne({ slug })
//       .populate({ path: "category", select: "name slug description" })
//       .populate({ path: "comments.user", select: "name email avatar" })
//       .lean();

//     if (!product) {
//       return res.status(404).json({ success: false, message: "Content not found" });
//     }

//     // Increment view count
//     await techModel.findOneAndUpdate({ slug }, { $inc: { views: 1 } });

//     // Flatten comments for frontend
//     if (product.comments && Array.isArray(product.comments)) {
//       product.comments = product.comments.map((c) => ({
//         ...c,
//         name: c.user?.name || "Anonymous",
//         email: c.user?.email,
//         comment: c.comment || c.content || "",
//       }));
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Content fetched successfully",
//       data: product,
//     });
//   } catch (error) {
//     console.error("Get Single Content Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching content",
//     });
//   }
// };

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

    const products = await techModel
      .find(query)
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

// ================= FETCH SINGLE POST (fetchSinglePost) =================
const getSingleContent = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug is required",
      });
    }

    const product = await techModel
      .findOne({ slug })
      .populate({
        path: "category",
        select: "name slug description",
      })
      .populate({
        path: "comments.user",
        select: "name email avatar",
      })
      .lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    // ✅ DO NOT increment views here - use separate incrementView endpoint
    // Views should only increment through the dedicated incrementView endpoint

    // Convert comments to flatter structure for frontend
    if (product.comments && Array.isArray(product.comments)) {
      product.comments = product.comments.map((comment) => ({
        ...comment,
        name: comment.user?.name || "Anonymous",
        email: comment.user?.email,
        createdAt: comment.createdAt || new Date(),
        comment: comment.comment || comment.content || "",
      }));
    }

    return res.status(200).json({
      success: true,
      message: "Content fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("GET SINGLE CONTENT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching content",
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
  getAdminProducts,
};
