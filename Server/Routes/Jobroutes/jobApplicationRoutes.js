const express = require("express");
const router = express.Router();
const upload = require('../../utils/multer.js');

const {
  applyToJob,
  getAllApplications,
  getApplicationsByJob,
  updateApplicationStatus,
} = require("../../controller/jobcontroller/jobApplicationController");

// User Routes
// router.post("/apply/:jobId", applyToJob); 
router.post('/apply/:jobId', upload.single('resume'), applyToJob);                   // User job apply karega

// Admin Routes
router.get("/", getAllApplications);                         // All applications (Admin Dashboard)
router.get("/job/:jobId", getApplicationsByJob);             // One job ke saare applicants
router.put("/:id/status", updateApplicationStatus);          // Status update (Pending → Reviewed etc.)

module.exports = router;