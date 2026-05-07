const mongoose = require("mongoose");
const JobApplication = require("../../module/Jobmodule/applicationmodule"); // Your Application Model
const ApplyJob = require("../../module/Jobmodule/jobmodule"); // Your Job Model
const cloudinary = require("../../utils/cloudinary");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// ====================== UPLOAD TO CLOUDINARY ======================
const uploadResumeToCloudinary = async (buffer, originalname, mimetype) => {
  try {
    const b64 = buffer.toString("base64");
    const fileData = `data:${mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(fileData, {
      
      resource_type: "raw",
      folder: "job_resumes",
      public_id: `resume_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      overwrite: false,
      timeout: 60000, // 60s timeout
    });

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Resume upload to Cloudinary failed");
  }
};

// ====================== APPLY TO JOB ======================
const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { name, email, phone } = req.body;
    let resumeFile = req.file || req.files?.resume;

    if (!resumeFile && req.files) {
      const files = Object.values(req.files).flat();
      resumeFile = files.length ? files[0] : undefined;
    }

    if (!isValidObjectId(jobId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid job ID" });
    }

    if (!name || !email || !phone || !resumeFile) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and resume are required",
      });
    }

    // Check if job exists
    const jobExists = await ApplyJob.findById(jobId);
    if (!jobExists) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // Check if already applied
    const alreadyApplied = await JobApplication.findOne({
      job: jobId,
      email: email.toLowerCase().trim(),
    });
    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    const fileBuffer = resumeFile.buffer || resumeFile.data;
    const originalName = resumeFile.originalname || resumeFile.name;
    const mimeType = resumeFile.mimetype || resumeFile.type;

    if (!fileBuffer) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid resume upload format" });
    }

    // Upload to Cloudinary
    const resumeUrl = await uploadResumeToCloudinary(
      fileBuffer,
      originalName,
      mimeType,
    );

    // Save Application
    const newApplication = new JobApplication({
      job: jobId,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      resumeUrl,
    });

    const savedApp = await newApplication.save();

    const populatedApp = await JobApplication.findById(savedApp._id).populate(
      "job",
      "title category endDate",
    );

    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      data: populatedApp,
    });
  } catch (error) {
    console.error("Apply Job Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// module.exports = { applyToJob };
// module.exports = { applyToJob };
// module.exports = { applyToJob };
// ====================== GET ALL APPLICATIONS (Admin Dashboard) ======================
const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find()
      .populate("job", "title endDate")
      .sort({ appliedAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ====================== GET APPLICATIONS BY JOB ======================
const getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    if (!isValidObjectId(jobId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid job ID" });
    }

    const applications = await JobApplication.find({ job: jobId })
      .populate("job", "title endDate")
      .sort({ appliedAt: -1 });

    res.status(200).json({
      success: true,
      jobTitle: applications[0]?.job?.title || "Job Applications",
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ====================== UPDATE STATUS ======================
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    ).populate("job", "title");

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    }

    res.status(200).json({
      success: true,
      message: "Status Updated Successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  applyToJob,
  getAllApplications,
  getApplicationsByJob,
  updateApplicationStatus,
};
