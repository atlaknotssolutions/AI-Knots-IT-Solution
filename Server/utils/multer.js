// // const multer = require('multer');

// // const storage = multer.memoryStorage(); // Important: Use memory storage for Cloudinary

// // const fileFilter = (req, file, cb) => {
// //   const allowedTypes = [
// //     "application/pdf",
// //     "application/msword",
// //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
// //   ];

// //   if (allowedTypes.includes(file.mimetype)) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error("Only PDF, DOC, and DOCX files are allowed!"), false);
// //   }
// // };

// // // const storage = multer.memoryStorage(); // Important: memoryStorage for Cloudinary
// // const upload = multer({
// //     storage: storage,
// //     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
// //     fileFilter: (req, file, cb) => {
// //         if (["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
// //             .includes(file.mimetype)) {
// //             cb(null, true);
// //         } else {
// //             cb(new Error("Only PDF, DOC, DOCX allowed"), false);
// //         }
// //     }
// // });

// // module.exports = upload;

// const multer = require("multer");

// const storage = multer.memoryStorage();

// const allowedTypes = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];

// const fileFilter = (req, file, cb) => {
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only PDF, DOC, and DOCX files are allowed!"));
//   }
// };

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB
//   },
//   fileFilter,
// });

// module.exports = upload;

const multer = require('multer');
// import path from "path";
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder create kar lena
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// export default upload;
module.exports = upload;