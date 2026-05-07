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

router.post("/create", createTech);
router.get("/", getTechData);
router.put("/update/:id", updateTech);
router.delete("/delete/:id", deleteTech);

router.get("/technology/:id", getSingleContent); 
router.put("/technology/:id/view", incrementView);           // Increment views
router.put("/technology/:id/like", toggleLike);              // Like / Unlike

router.get("/admintechnology",getAdminProducts)
router.get("/technology/:id/admin-comments", getAdminProductComments); // Get admin comment view for a product
router.delete(
  "/technology/:productId/admin-comment/:commentId",
  deleteAdminComment,
); // Admin delete single comment
// Comment with OTP (Recommended & Secure)
router.post("/technology/:id/send-otp", sendOtp);            // Send OTP

router.post("/technology/:id/comment", verifyOtpAndComment);

module.exports = router;
