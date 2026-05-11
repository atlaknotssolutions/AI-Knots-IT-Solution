// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { createJob } from "./jobSlice";

// // const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
// // const CATEGORY_URL = `${API_BASE_URL}/category/jobapply`;

// // const CreateJob = () => {
// //   const [form, setForm] = useState({
// //     title: "",
// //     category: "",
// //     description: "",
// //     endDate: "",
// //   });
// //   const [categories, setCategories] = useState([]);
// //   const [resumeFile, setResumeFile] = useState(null);
// //   const dispatch = useDispatch();
// //   const { loading } = useSelector((state) => state.job);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     axios.get(CATEGORY_URL).then((res) => setCategories(res.data.data || []));
// //   }, []);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleResumeChange = (e) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setResumeFile(e.target.files[0]);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("title", form.title);
// //     formData.append("category", form.category);
// //     formData.append("description", form.description);
// //     formData.append("endDate", form.endDate);

// //     try {
// //       await dispatch(createJob(formData)).unwrap();
// //       alert("✅ Job Created Successfully!");
// //       navigate("/admin/jobs");
// //     } catch (error) {
// //       alert(error || "Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-10">
// //       <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
// //         <h2 className="text-3xl font-bold mb-8 text-gray-800">
// //           Create New Job
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label className="block text-sm font-medium mb-2">Job Title</label>
// //             <input
// //               type="text"
// //               name="title"
// //               value={form.title}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
// //               placeholder="e.g. Senior MERN Developer"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium mb-2">Category</label>
// //             <select
// //               name="category"
// //               value={form.category}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
// //             >
// //               <option value="">Select Category</option>
// //               {categories.map((cat) => (
// //                 <option key={cat._id} value={cat._id}>
// //                   {cat.name || cat.title}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium mb-2">
// //               Description
// //             </label>
// //             <textarea
// //               name="description"
// //               value={form.description}
// //               onChange={handleChange}
// //               required
// //               rows="6"
// //               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
// //               placeholder="Job description..."
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium mb-2">End Date</label>
// //             <input
// //               type="date"
// //               name="endDate"
// //               value={form.endDate}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
// //           >
// //             {loading ? "Creating..." : "Create Job"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateJob;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { createJob } from "./jobSlice";   // apna slice

// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// const CreateJob = () => {
//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     description: "",
//     endDate: "",
//   });
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Fetch Categories
//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/category/jobapply`)
//       .then((res) => setCategories(res.data.data || []))
//       .catch((err) => console.error("Category fetch error:", err));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await dispatch(createJob(form)).unwrap();   // ← Normal object bhej rahe hain
//       alert("✅ Job Created Successfully!");
//       navigate("/admin/jobs");
//     } catch (error) {
//       alert(error?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">Create New Job</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium mb-2">Job Title</label>
//             <input
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
//               placeholder="e.g. Senior MERN Developer"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Category</label>
//             <select
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name || cat.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Description</label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               required
//               rows="6"
//               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
//               placeholder="Job description..."
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">End Date</label>
//             <input
//               type="date"
//               name="endDate"
//               value={form.endDate}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
//           >
//             {loading ? "Creating Job..." : "Create Job"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateJob;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "./jobSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const CreateJob = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    endDate: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch Categories
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/category/jobapply`)
      .then((res) => setCategories(res.data.data || []))
      .catch((err) => console.error("Category fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(createJob(form)).unwrap();

      toast.success("🎉 Job Created Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/admin/jobs");
      }, 1500);
    } catch (error) {
      toast.error(error?.message || "Something went wrong while creating job", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Create New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Job Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              placeholder="e.g. Senior MERN Developer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name || cat.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              placeholder="Job description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            {loading ? "Creating Job..." : "Create Job"}
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CreateJob;
