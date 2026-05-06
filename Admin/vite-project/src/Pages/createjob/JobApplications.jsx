// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";

// // // const JobApplications = () => {
// // //   const [applications, setApplications] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [jobTitle, setJobTitle] = useState("");

// // //   // Status options
// // //   const statusOptions = [
// // //     "Pending",
// // //     "Reviewed",
// // //     "Shortlisted",
// // //     "Rejected",
// // //     "Accepted",
// // //   ];

// // //   // Fetch applications for a specific job
// // //   const fetchApplications = async (jobId) => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);

// // //       const res = await fetch(
// // //         `http://localhost:8000/jobapplication/job/${jobId}`,
// // //       );

// // //       if (!res.ok) throw new Error("Failed to fetch applications");

// // //       const data = await res.json();
// // //       setApplications(data.data || []);
// // //       setJobTitle(data.jobTitle || "Job Applications");
// // //     } catch (err) {
// // //       setError(err.message);
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const fetchAllApplications = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);

// // //       const res = await fetch("http://localhost:8000/jobapplication/");
// // //       if (!res.ok) throw new Error("Failed to fetch applications");

// // //       const data = await res.json();
// // //       setApplications(data.data || []);
// // //       setJobTitle("All Job Applications");
// // //     } catch (err) {
// // //       setError(err.message);
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Update application status
// // //   const updateStatus = async (applicationId, newStatus) => {
// // //     try {
// // //       const res = await fetch(
// // //         `http://localhost:8000/jobapplication/${applicationId}/status`,
// // //         {
// // //           method: "PUT",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify({ status: newStatus }),
// // //         },
// // //       );

// // //       if (res.ok) {
// // //         // Optimistically update UI
// // //         setApplications((prev) =>
// // //           prev.map((app) =>
// // //             app._id === applicationId ? { ...app, status: newStatus } : app,
// // //           ),
// // //         );
// // //       } else {
// // //         alert("Failed to update status");
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Something went wrong");
// // //     }
// // //   };

// // //   const { jobId } = useParams();

// // //   useEffect(() => {
// // //     if (jobId) {
// // //       fetchApplications(jobId);
// // //     } else {
// // //       fetchAllApplications();
// // //     }
// // //   }, [jobId]);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-4xl font-bold mb-8 text-gray-900">
// // //           Applications for <span className="text-red-600">{jobTitle}</span>
// // //         </h1>

// // //         {loading && (
// // //           <p className="text-center py-10 text-xl text-gray-600">
// // //             Loading applications...
// // //           </p>
// // //         )}

// // //         {error && <p className="text-red-500 text-center py-10">{error}</p>}

// // //         {!loading && applications.length === 0 && (
// // //           <p className="text-center py-10 text-xl text-gray-600">
// // //             No applications yet.
// // //           </p>
// // //         )}

// // //         <div className="space-y-4">
// // //           {applications.map((app) => (
// // //             <div
// // //               key={app._id}
// // //               className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 hover:border-red-500 transition-all shadow-sm"
// // //             >
// // //               <div className="flex-1">
// // //                 <h3 className="text-2xl font-semibold text-gray-900">
// // //                   {app.name}
// // //                 </h3>
// // //                 <p className="text-gray-600 mt-1">
// // //                   {app.email} • {app.phone}
// // //                 </p>
// // //                 {app.coverLetter && (
// // //                   <p className="mt-4 text-sm text-gray-700 line-clamp-3">
// // //                     {app.coverLetter}
// // //                   </p>
// // //                 )}
// // //               </div>

// // //               <div className="flex flex-col md:items-end gap-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <span className="text-sm text-gray-500">Status:</span>
// // //                   <select
// // //                     value={app.status || "Pending"}
// // //                     onChange={(e) => updateStatus(app._id, e.target.value)}
// // //                     className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600 cursor-pointer bg-white"
// // //                   >
// // //                     {statusOptions.map((status) => (
// // //                       <option key={status} value={status}>
// // //                         {status}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>

// // //                 <div className="text-xs text-gray-500">
// // //                   Applied: {new Date(app.createdAt).toLocaleDateString("en-IN")}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default JobApplications;


// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const JobApplications = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [jobTitle, setJobTitle] = useState("");

// //   const statusOptions = ["Pending", "Reviewed", "Shortlisted", "Rejected", "Accepted"];

// //   // Fetch applications for specific job
// //   const fetchApplications = async (jobId) => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const res = await fetch(`http://localhost:8000/jobapplication/job/${jobId}`);

// //       if (!res.ok) throw new Error("Failed to fetch applications");

// //       const data = await res.json();
      
// //       setApplications(data.data || []);
// //       setJobTitle(data.jobTitle || "Job Applications");
// //     } catch (err) {
// //       setError(err.message);
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch all applications
// //   const fetchAllApplications = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const res = await fetch("http://localhost:8000/jobapplication/");
// //       if (!res.ok) throw new Error("Failed to fetch applications");

// //       const data = await res.json();
// //       setApplications(data.data || []);
// //       setJobTitle("All Job Applications");
// //     } catch (err) {
// //       setError(err.message);
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Update Status
// //   const updateStatus = async (applicationId, newStatus) => {
// //     try {
// //       const res = await fetch(
// //         `http://localhost:8000/jobapplication/${applicationId}/status`,
// //         {
// //           method: "PUT",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ status: newStatus }),
// //         }
// //       );

// //       if (res.ok) {
// //         setApplications((prev) =>
// //           prev.map((app) =>
// //             app._id === applicationId ? { ...app, status: newStatus } : app
// //           )
// //         );
// //       } else {
// //         alert("Failed to update status");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Something went wrong");
// //     }
// //   };

// //   const { jobId } = useParams();

// //   useEffect(() => {
// //     if (jobId) {
// //       fetchApplications(jobId);
// //     } else {
// //       fetchAllApplications();
// //     }
// //   }, [jobId]);

// //   // Download Resume Function
// //   const handleDownloadResume = (url) => {
// //     window.open(url, "_blank");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8 text-gray-900">
// //           Applications for <span className="text-red-600">{jobTitle}</span>
// //         </h1>

// //         {loading && (
// //           <div className="text-center py-20">
// //             <p className="text-xl text-gray-600">Loading applications...</p>
// //           </div>
// //         )}

// //         {error && (
// //           <div className="text-center py-20 text-red-500 text-xl">
// //             ⚠️ {error}
// //           </div>
// //         )}

// //         {!loading && applications.length === 0 && !error && (
// //           <div className="text-center py-20 text-gray-600 text-xl">
// //             No applications received yet.
// //           </div>
// //         )}

// //         <div className="space-y-6">
// //           {applications.map((app) => (
// //             <div
// //               key={app._id}
// //               className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center gap-6"
// //             >
// //               {/* Candidate Info */}
// //               <div className="flex-1">
// //                 <h3 className="text-2xl font-semibold text-gray-900">
// //                   {app.name}
// //                 </h3>
// //                 <p className="text-gray-600 mt-1">
// //                   {app.email} • {app.phone}
// //                 </p>
// //                 <p className="text-xs text-gray-500 mt-3">
// //                   Applied: {new Date(app.appliedAt || app.createdAt).toLocaleDateString("en-IN", {
// //                     day: "numeric",
// //                     month: "short",
// //                     year: "numeric",
// //                     hour: "2-digit",
// //                     minute: "2-digit",
// //                   })}
// //                 </p>
// //               </div>

// //               {/* Resume & Status */}
// //               <div className="flex flex-col items-start lg:items-end gap-4">
// //                 {/* Resume Button */}
// //                 {app.resumeUrl && (
// //                   <button
// //                     onClick={() => handleDownloadResume(app.resumeUrl)}
// //                     className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl transition-all text-sm font-medium"
// //                   >
// //                     📄 Download Resume
// //                   </button>
// //                 )}

// //                 {/* Status Dropdown */}
// //                 <div className="flex items-center gap-3">
// //                   <span className="text-sm text-gray-500 whitespace-nowrap">Status:</span>
// //                   <select
// //                     value={app.status || "Pending"}
// //                     onChange={(e) => updateStatus(app._id, e.target.value)}
// //                     className="px-5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 bg-white cursor-pointer font-medium"
// //                   >
// //                     {statusOptions.map((status) => (
// //                       <option key={status} value={status}>
// //                         {status}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobApplications;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const JobApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [jobTitle, setJobTitle] = useState("");

//   const statusOptions = ["Pending", "Reviewed", "Shortlisted", "Rejected", "Accepted"];

//   // Fetch Applications
//   const fetchApplications = async (jobId) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch(`http://localhost:8000/jobapplication/job/${jobId}`);
//       if (!res.ok) throw new Error("Failed to fetch applications");

//       const data = await res.json();
//       setApplications(data.data || []);
//       setJobTitle(data.jobTitle || "Job Applications");
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAllApplications = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch("http://localhost:8000/jobapplication/");
//       if (!res.ok) throw new Error("Failed to fetch applications");

//       const data = await res.json();
//       setApplications(data.data || []);
//       setJobTitle("All Job Applications");
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const { jobId } = useParams();

//   useEffect(() => {
//     if (jobId) {
//       fetchApplications(jobId);
//     } else {
//       fetchAllApplications();
//     }
//   }, [jobId]);

//   // ==================== FORCE DOWNLOAD RESUME ====================
//   const handleDownloadResume = async (url, applicantName) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) throw new Error("Download failed");

//       const blob = await response.blob();
//       const link = document.createElement("a");
      
//       // Beautiful filename: Aditya_Jain_Resume_05052026.pdf
//       const fileName = `${applicantName.replace(/\s+/g, "_")}_Resume_${new Date().toISOString().slice(0,10)}.pdf`;

//       link.href = URL.createObjectURL(blob);
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       URL.revokeObjectURL(link.href); // Clean up
//     } catch (err) {
//       console.error(err);
//       alert("Unable to download resume. Please try again or open link manually.");
//       // Fallback
//       window.open(url, "_blank");
//     }
//   };

//   // Update Status
//   const updateStatus = async (applicationId, newStatus) => {
//     try {
//       const res = await fetch(
//         `http://localhost:8000/jobapplication/${applicationId}/status`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ status: newStatus }),
//         }
//       );

//       if (res.ok) {
//         setApplications((prev) =>
//           prev.map((app) =>
//             app._id === applicationId ? { ...app, status: newStatus } : app
//           )
//         );
//       } else {
//         alert("Failed to update status");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8 text-gray-900">
//           Applications for <span className="text-red-600">{jobTitle}</span>
//         </h1>

//         {loading && <p className="text-center py-20 text-xl">Loading applications...</p>}
//         {error && <p className="text-red-500 text-center py-20">{error}</p>}

//         {!loading && applications.length === 0 && (
//           <p className="text-center py-20 text-xl text-gray-600">No applications yet.</p>
//         )}

//         <div className="space-y-6">
//           {applications.map((app) => (
//             <div
//               key={app._id}
//               className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center gap-6"
//             >
//               <div className="flex-1">
//                 <h3 className="text-2xl font-semibold text-gray-900">{app.name}</h3>
//                 <p className="text-gray-600 mt-1">{app.email} • {app.phone}</p>
//                 <p className="text-xs text-gray-500 mt-3">
//                   Applied: {new Date(app.appliedAt || app.createdAt).toLocaleDateString("en-IN", {
//                     day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
//                   })}
//                 </p>
//               </div>

//               <div className="flex flex-col items-start lg:items-end gap-4">
//                 {/* Resume Download Button */}
//                 {app.resumeUrl && (
//                   <button
//                     onClick={() => handleDownloadResume(app.resumeUrl, app.name)}
//                     className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl transition-all font-medium shadow-sm hover:shadow-md"
//                   >
//                     📥 Download Resume
//                   </button>
//                 )}

//                 {/* Status */}
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-gray-500">Status:</span>
//                   <select
//                     value={app.status || "Pending"}
//                     onChange={(e) => updateStatus(app._id, e.target.value)}
//                     className="px-5 py-3 rounded-2xl border border-gray-300 focus:border-red-600 bg-white cursor-pointer"
//                   >
//                     {statusOptions.map((status) => (
//                       <option key={status} value={status}>{status}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobApplications;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobTitle, setJobTitle] = useState("");

  const statusOptions = ["Pending", "Reviewed", "Shortlisted", "Rejected", "Accepted"];

  const fetchApplications = async (jobId) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:8000/jobapplication/job/${jobId}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setApplications(data.data || []);
      setJobTitle(data.jobTitle);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllApplications = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/jobapplication/");
      const data = await res.json();
      setApplications(data.data || []);
      setJobTitle("All Job Applications");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const { jobId } = useParams();

  useEffect(() => {
    if (jobId) fetchApplications(jobId);
    else fetchAllApplications();
  }, [jobId]);

  // ==================== BEST RESUME DOWNLOAD ====================
  const handleDownloadResume = async (url, name) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${name.replace(/\s+/g, "_")}_Resume_${new Date().toISOString().slice(0,10)}.pdf`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error(err);
      alert("Direct download failed. Opening in new tab...");
      window.open(url, "_blank");
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:8000/jobapplication/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setApplications(prev =>
          prev.map(app => app._id === id ? { ...app, status: newStatus } : app)
        );
      }
    } catch (err) {
      alert("Status update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Applications for <span className="text-red-600">{jobTitle}</span>
        </h1>

        {loading && <p className="text-center py-20 text-xl">Loading...</p>}
        {error && <p className="text-red-500 text-center py-20">{error}</p>}

        <div className="space-y-6">
          {applications.map((app) => (
            <div key={app._id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{app.name}</h3>
                <p className="text-gray-600">{app.email} • {app.phone}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Applied: {new Date(app.appliedAt || app.createdAt).toLocaleDateString("en-IN")}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                {app.resumeUrl && (
                  <button
                    onClick={() => handleDownloadResume(app.resumeUrl, app.name)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-medium transition-all"
                  >
                    📥 Download Resume
                  </button>
                )}

                <select
                  value={app.status}
                  onChange={(e) => updateStatus(app._id, e.target.value)}
                  className="px-5 py-3 rounded-2xl border border-gray-300 focus:border-red-600 cursor-pointer"
                >
                  {statusOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplications;