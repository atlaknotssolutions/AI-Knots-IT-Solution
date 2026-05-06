const router = require("express").Router();
const {
  createContent,
  getHomeData,
  getSingleContent,
  deletedContent,
  updateHomeData,

  // Engagement Routes
  incrementView,
  toggleLike,
  sendOtp,
  verifyOtp,
  addComment,
} = require("../../controller/Homecontroller/homecontroller");

// ==================== MAIN BLOG ROUTES ====================

router.post("/create", createContent); // Create new post
router.get("/product", getHomeData); // Get all posts (used in frontend)
router.get("/product/:id", getSingleContent); // Get single post by ID (used in frontend)
router.put("/product/:id", updateHomeData); // Update post
router.delete("/product/:id", deletedContent); // Delete post

// ==================== ENGAGEMENT ROUTES (Frontend Ready) ====================

router.put("/product/:id/view", incrementView); // Increment views
router.put("/product/:id/like", toggleLike); // Like / Unlike

// Comment with OTP flow
router.post("/product/:id/send-otp", sendOtp); // Send OTP
router.post("/product/:id/verify-otp", verifyOtp); // Verify OTP
router.post("/product/:id/comment", addComment); // Add comment after verification
module.exports = router;
