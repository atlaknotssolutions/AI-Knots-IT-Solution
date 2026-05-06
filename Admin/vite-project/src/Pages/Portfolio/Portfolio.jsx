import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchTech,
  fetchCategories,
  createTech,
  updateTech,
  deleteTech,
  setFormValue,
  setFormImages,
  beginEdit,
  resetForm,
} from "./portfolioslice.js";

const Portfolio = () => {
  const dispatch = useDispatch();

  const {
    items: techs,
    categories,
    form,
    editId,
    loading,
    tableLoading,
    deleteLoading,
    error,
  } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchTech());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleImageChange = (e) => {
    dispatch(setFormImages(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("link", form.link);
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }

    const action = editId
      ? updateTech({ id: editId, formData })
      : createTech(formData);

    dispatch(action).then((result) => {
      if (!result.error) {
        toast.success(
          editId ? "Updated successfully!" : "Created successfully!",
        );
        dispatch(resetForm());
        dispatch(fetchTech());
      }
    });
  };

  const handleEdit = (row) => {
    dispatch(beginEdit(row));
    toast.info(`Editing: ${row.title}`);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this item?")) return;
    dispatch(deleteTech(id)).then((result) => {
      if (!result.error) toast.success("Deleted");
    });
  };

  const columns = useMemo(
    () => [
      { name: "Title", selector: (row) => row.title, sortable: true },
      { name: "Category", selector: (row) => row.category?.name || "—" },
      {
        name: "Link",
        cell: (row) =>
          row.link ? (
            <a
              href={row.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline truncate max-w-[200px] block"
            >
              {row.link}
            </a>
          ) : (
            "—"
          ),
      },
      {
        name: "Images",
        cell: (row) => (
          <div className="flex gap-2 flex-wrap">
            {row.images?.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-12 h-12 object-cover rounded"
              />
            ))}
          </div>
        ),
      },
      {
        name: "Actions",
        cell: (row) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(row)}
              disabled={loading || deleteLoading[row._id]}
              className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded disabled:opacity-50"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row._id)}
              disabled={loading || deleteLoading[row._id]}
              className={`px-3 py-1 rounded text-white flex items-center gap-2 ${
                deleteLoading[row._id]
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {deleteLoading[row._id] ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        ),
      },
    ],
    [loading, deleteLoading],
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-10 space-y-6"
      >
        <h2 className="text-2xl font-bold">
          {editId ? "Update Tech News" : "Add Tech News"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            dispatch(setFormValue({ field: "title", value: e.target.value }))
          }
          className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading}
        />

        <select
          value={form.category}
          onChange={(e) =>
            dispatch(setFormValue({ field: "category", value: e.target.value }))
          }
          className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="url"
          placeholder="https://..."
          value={form.link}
          onChange={(e) =>
            dispatch(setFormValue({ field: "link", value: e.target.value }))
          }
          className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            dispatch(
              setFormValue({ field: "description", value: e.target.value }),
            )
          }
          className="w-full border p-3 rounded min-h-[120px] focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading}
        />

        <div>
          <label className="block mb-2 font-medium">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            disabled={loading}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 py-3 rounded text-white font-medium ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                {editId ? "Updating..." : "Creating..."}
              </span>
            ) : editId ? (
              "Update"
            ) : (
              "Create"
            )}
          </button>

          {editId && (
            <button
              type="button"
              onClick={() => dispatch(resetForm())}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {tableLoading ? (
          <div className="p-10 text-center min-h-[300px] flex flex-col items-center justify-center gap-4">
            <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full" />
            <p>Loading tech news...</p>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={techs}
            pagination
            highlightOnHover
            pointerOnHover
            responsive
            noDataComponent="No tech news found"
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
