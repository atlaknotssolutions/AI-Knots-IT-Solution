const router = require("express").Router();
const {
    createTech,
    getTechData,
    
    updateTech,
    deleteTech,
    incrementView,
    toggleLike,
    sendOtp,
    verifyOtpAndComment,
    addComment,
    getSingleContent,
} = require("../../controller/technologycontroller/technologycontroller");

router.post("/create", createTech);
router.get("/", getTechData);
router.put("/update/:id", updateTech);
router.delete("/delete/:id", deleteTech);

router.get("/technology/:id", getSingleContent); 
router.put("/technology/:id/view", incrementView);           // Increment views
router.put("/technology/:id/like", toggleLike);              // Like / Unlike

// Comment with OTP (Recommended & Secure)
router.post("/technology/:id/send-otp", sendOtp);            // Send OTP
// router.post("/technology/:id/comment", verifyOtpAndComment); // Verify OTP + Post Comment

// Old simple comment (optional - keep only if needed)
router.post("/technology/:id/send-otp", sendOtp);
router.post("/technology/:id/comment", verifyOtpAndComment);

module.exports = router;
