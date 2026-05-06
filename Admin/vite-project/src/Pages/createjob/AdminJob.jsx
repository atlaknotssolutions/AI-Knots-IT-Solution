import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, deleteJob } from "./jobSlice";

const AdminJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await dispatch(deleteJob(id)).unwrap();
      alert("Job Deleted Successfully");
    } catch (error) {
      alert(error || "Failed to delete");
    }
  };

  if (loading)
    return <div className="text-center py-10 text-xl">Loading Jobs...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">All Job Postings</h1>
          <Link
            to="/admin/jobs/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition"
          >
            + Create New Job
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left">Job Title</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">End Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50">
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {job.title}
                  </td>
                  <td className="px-6 py-5 text-gray-600">
                    {job.category?.name || job.category?.title || "N/A"}
                  </td>
                  <td className="px-6 py-5 text-gray-600">
                    {new Date(job.endDate).toLocaleDateString("en-IN")}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-3">
                      <Link
                        to={`/admin/jobs/edit/${job._id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {jobs.length === 0 && (
            <p className="text-center py-10 text-gray-500">No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
