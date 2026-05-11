// const router = require("express").Router();
// const {
//     createTech,
//     getTechData,
//     getAdminProducts,
//     updateTech,
//     deleteTech,
//     incrementView,
//     toggleLike,
//     sendOtp,
//     verifyOtpAndComment,
//     addComment,
//     getSingleContent,
// } = require("../../controller/technologycontroller/technologycontroller");


// const {
//   getAdminProductComments,
//   deleteAdminComment,
// } = require("../../controller/technologycontroller/admintechnologyCommentController");

// router.post("/create", createTech);
// router.get("/", getTechData);
// router.put("/update/:id", updateTech);
// router.delete("/delete/:id", deleteTech);

// router.get("/technology/:id", getSingleContent); 
// router.put("/technology/:id/view", incrementView);           // Increment views
// router.put("/technology/:id/like", toggleLike);              // Like / Unlike

// router.get("/admintechnology",getAdminProducts)
// router.get("/technology/:id/admin-comments", getAdminProductComments); // Get admin comment view for a product
// router.delete(
//   "/technology/:productId/admin-comment/:commentId",
//   deleteAdminComment,
// ); // Admin delete single comment
// // Comment with OTP (Recommended & Secure)
// router.post("/technology/:id/send-otp", sendOtp);            // Send OTP

// router.post("/technology/:id/comment", verifyOtpAndComment);

// module.exports = router;


const router = require("express").Router();

const {
    createTech,
    getTechData,
    getAdminProducts,
    updateTech,
    deleteTech,
    incrementView,
    toggleLike,
    sendOtp,
    verifyOtpAndComment,
    addComment,
    getSingleContent,
} = require("../../controller/technologycontroller/technologycontroller");

const {
    getAdminProductComments,
    deleteAdminComment,
} = require("../../controller/technologycontroller/admintechnologyCommentController");

// ======================
// PUBLIC ROUTES (Use Slug)
// ======================

router.post("/create", createTech);
router.get("/", getTechData);

// Single Tech - Public (Main Route)
router.get("/technology/:slug", getSingleContent);

// View Increment
router.put("/technology/:slug/view", incrementView);

// Like / Unlike
router.put("/technology/:slug/like", toggleLike);

// Comment Routes
router.post("/technology/:slug/send-otp", sendOtp);
router.post("/technology/:slug/comment", verifyOtpAndComment);

// Optional: Direct comment without OTP (if you still use it)
router.post("/technology/:slug/add-comment", addComment);

// ======================
// ADMIN ROUTES (Use ID)
// ======================

router.get("/admintechnology", getAdminProducts);

// Update & Delete (Admin only - using ID)
router.put("/update/:id", updateTech);
router.delete("/delete/:id", deleteTech);

// Admin Comment Management
router.get("/technology/:id/admin-comments", getAdminProductComments);
router.delete("/technology/:productId/admin-comment/:commentId", deleteAdminComment);

module.exports = router;