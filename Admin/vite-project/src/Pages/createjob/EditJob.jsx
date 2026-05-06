import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const API_URL = `${API_BASE_URL}/jobapply`;
const CATEGORY_URL = `${API_BASE_URL}/category/jobapply`;

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    endDate: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const categoryRes = await axios.get(CATEGORY_URL);
        setCategories(categoryRes.data.data || []);

        const jobRes = await axios.get(`${API_URL}/${id}`);
        const job = jobRes.data.data;
        setForm({
          title: job.title,
          category: job.category?._id || job.category,
          description: job.description,
          endDate: job.endDate.split("T")[0],
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadJob();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${id}`, form);
      alert("✅ Job Updated Successfully!");
      navigate("/admin/jobs");
    } catch (error) {
      alert(error.response?.data?.message || "Error updating job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Edit Job</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Same fields as CreateJob */}
          <div>
            <label className="block text-sm font-medium mb-2">Job Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            {loading ? "Updating..." : "Update Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
