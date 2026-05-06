

// src/components/Gallery.jsx
import { useState, useEffect } from "react";
import {
  createGalleryItem,
  getAllGalleryItems,
  updateGalleryItem,
  deleteGalleryItem,
} from "./Gallery.api"; // adjust path

const Gallery = () => {
  // ── Create form states ────────────────────────────────────────
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [createLoading, setCreateLoading] = useState(false);
  const [createMessage, setCreateMessage] = useState({ type: "", text: "" });

  // ── List / data states ────────────────────────────────────────
  const [galleryItems, setGalleryItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [error, setError] = useState(null);

  // ── Edit modal states ─────────────────────────────────────────
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState("");
  const [editFiles, setEditFiles] = useState([]); // new files only
  const [editPreviews, setEditPreviews] = useState([]); // new previews
  const [editLoading, setEditLoading] = useState(false);
  const [editMessage, setEditMessage] = useState({ type: "", text: "" });

  // Load all gallery items on mount
  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      setLoadingItems(true);
      setError(null);
      const res = await getAllGalleryItems();
      setGalleryItems(res.data?.data || res.data || []); // adjust depending on your response shape
    } catch (err) {
      console.error("Failed to load gallery:", err);
      setError("Could not load gallery items");
    } finally {
      setLoadingItems(false);
    }
  };

  // ── CREATE helpers ────────────────────────────────────────────
  const handleCreateFiles = (e) => {
    const selected = Array.from(e.target.files);
    if (files.length + selected.length > 10) {
      setCreateMessage({ type: "error", text: "Max 10 images allowed" });
      return;
    }
    const newPreviews = selected.map((f) => URL.createObjectURL(f));
    setFiles((prev) => [...prev, ...selected]);
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeCreatePreview = (index) => {
    URL.revokeObjectURL(previews[index]);
    setFiles((p) => p.filter((_, i) => i !== index));
    setPreviews((p) => p.filter((_, i) => i !== index));
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return setCreateMessage({ type: "error", text: "Name is required" });
    if (files.length === 0) return setCreateMessage({ type: "error", text: "Select at least 1 image" });

    const formData = new FormData();
    formData.append("name", name.trim());
    files.forEach((file) => formData.append("images", file));

    setCreateLoading(true);
    try {
      await createGalleryItem(formData);
      setCreateMessage({ type: "success", text: "Item created!" });
      resetCreateForm();
      fetchGalleryItems(); // refresh list
    } catch (err) {
      setCreateMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to create item",
      });
    } finally {
      setCreateLoading(false);
    }
  };

  const resetCreateForm = () => {
    setName("");
    setFiles([]);
    previews.forEach(URL.revokeObjectURL);
    setPreviews([]);
    setCreateMessage({ type: "", text: "" });
  };

  // ── EDIT helpers ──────────────────────────────────────────────
  const openEditModal = (item) => {
    setEditingItem(item);
    setEditName(item.name || "");
    setEditFiles([]);
    setEditPreviews([]);
    setEditMessage({ type: "", text: "" });
    setEditModalOpen(true);
  };

  const handleEditFiles = (e) => {
    const selected = Array.from(e.target.files);
    const newPreviews = selected.map((f) => URL.createObjectURL(f));
    setEditFiles((prev) => [...prev, ...selected]);
    setEditPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeEditPreview = (index) => {
    URL.revokeObjectURL(editPreviews[index]);
    setEditFiles((p) => p.filter((_, i) => i !== index));
    setEditPreviews((p) => p.filter((_, i) => i !== index));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editName.trim()) return setEditMessage({ type: "error", text: "Name is required" });

    const formData = new FormData();
    formData.append("name", editName.trim());
    editFiles.forEach((file) => formData.append("images", file));

    setEditLoading(true);
    try {
      await updateGalleryItem(editingItem._id, formData);
      setEditMessage({ type: "success", text: "Updated successfully" });
      setTimeout(() => {
        setEditModalOpen(false);
        fetchGalleryItems();
      }, 1200);
    } catch (err) {
      setEditMessage({
        type: "error",
        text: err.response?.data?.message || "Update failed",
      });
    } finally {
      setEditLoading(false);
    }
  };

  // ── DELETE ────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this gallery item?")) return;
    try {
      await deleteGalleryItem(id);
      fetchGalleryItems();
    } catch (err) {
      alert("Delete failed: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  // ── CLEANUP previews on unmount ───────────────────────────────
  useEffect(() => {
    return () => {
      previews.forEach(URL.revokeObjectURL);
      editPreviews.forEach(URL.revokeObjectURL);
    };
  }, [previews, editPreviews]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* CREATE FORM */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Add New Gallery Item</h2>

          <form onSubmit={handleCreateSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Title / Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Holi Celebration 2025"
                disabled={createLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Images (multiple allowed)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleCreateFiles}
                disabled={createLoading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              <p className="text-xs text-gray-500 mt-1">Max 10 images recommended</p>
            </div>

            {previews.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
                {previews.map((url, i) => (
                  <div key={i} className="relative">
                    <img src={url} alt="preview" className="w-full h-24 object-cover rounded" />
                    <button
                      type="button"
                      onClick={() => removeCreatePreview(i)}
                      className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full text-lg leading-none"
                      disabled={createLoading}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {createMessage.text && (
              <div className={`p-3 rounded text-center ${createMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {createMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={createLoading || !name.trim() || files.length === 0}
              className={`w-full py-3 rounded-lg text-white font-semibold ${createLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} disabled:opacity-60`}
            >
              {createLoading ? "Uploading..." : "Create Item"}
            </button>
          </form>
        </div>

        {/* GALLERY LIST */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Gallery Items</h2>

          {loadingItems ? (
            <p className="text-center py-10">Loading gallery...</p>
          ) : error ? (
            <p className="text-red-600 text-center py-10">{error}</p>
          ) : galleryItems.length === 0 ? (
            <p className="text-center py-10 text-gray-500">No items yet</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  {item.images?.length > 0 && (
                    <img
                      src={item.images[0]} // assuming backend returns full image URLs
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {item.images?.length || 0} image{item.images?.length !== 1 ? "s" : ""}
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => openEditModal(item)}
                        className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* EDIT MODAL */}
        {editModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
              <h3 className="text-xl font-bold mb-5">Edit Gallery Item</h3>

              <form onSubmit={handleEditSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Title / Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Add more images (optional)</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleEditFiles}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700"
                  />
                </div>

                {editPreviews.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {editPreviews.map((url, i) => (
                      <div key={i} className="relative">
                        <img src={url} alt="new" className="w-full h-20 object-cover rounded" />
                        <button
                          type="button"
                          onClick={() => removeEditPreview(i)}
                          className="absolute top-0 right-0 bg-red-600 text-white w-5 h-5 rounded-full text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {editMessage.text && (
                  <div className={`p-3 rounded text-center ${editMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {editMessage.text}
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={editLoading}
                    className={`flex-1 py-2.5 rounded-lg text-white ${editLoading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
                  >
                    {editLoading ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="flex-1 py-2.5 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;