

// src/components/Technology.jsx
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CKEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  fetchTechs,
  fetchCategories,
  createTech,
  updateTech,
  deleteTech,
  setFormField,
  setImages,
  startEdit,
  resetForm,
} from './techslice/techslice.js';

const Technology = () => {
  const dispatch = useDispatch();

  const {
    techs,
    categories,
    form,
    editId,
    loading,
  } = useSelector((state) => state.tech);

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchTechs());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleImageChange = (e) => {
    dispatch(setImages(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading.form) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);   // CKEditor HTML will come here
    formData.append('category', form.category);

    if (form.images?.length) {
      for (let i = 0; i < form.images.length; i++) {
        formData.append('images', form.images[i]);
      }
    }

    if (editId) {
      dispatch(updateTech({ id: editId, formData })).then((result) => {
        if (!result.error) {
          dispatch(fetchTechs());
          dispatch(resetForm());
        }
      });
    } else {
      dispatch(createTech(formData)).then((result) => {
        if (!result.error) {
          dispatch(fetchTechs());
          dispatch(resetForm());
        }
      });
    }
  };

  const handleEdit = (row) => {
    dispatch(startEdit(row));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;
    dispatch(deleteTech(id));
  };

  const columns = useMemo(
    () => [
      { name: 'Title', selector: (row) => row.title, sortable: true },
      { name: 'Category', selector: (row) => row.category?.name || 'No Category' },
      {
        name: 'Images',
        cell: (row) => (
          <div className="flex gap-2 flex-wrap">
            {row.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="tech"
                className="w-12 h-12 object-cover rounded shadow-sm"
              />
            ))}
          </div>
        ),
      },
      {
        name: 'Actions',
        cell: (row) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(row)}
              disabled={loading.form || loading.delete?.[row._id]}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition disabled:opacity-50"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row._id)}
              disabled={loading.form || loading.delete?.[row._id]}
              className={`px-3 py-1 rounded text-white transition flex items-center gap-2 min-w-[90px] justify-center ${
                loading.delete?.[row._id]
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {loading.delete?.[row._id] ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </button>
          </div>
        ),
      },
    ],
    [loading.form, loading.delete]
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-10 space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {editId ? 'Update Tech News' : 'Add New Tech News'}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => dispatch(setFormField({ field: 'title', value: e.target.value }))}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading.form}
        />

        <select
          value={form.category}
          onChange={(e) => dispatch(setFormField({ field: 'category', value: e.target.value }))}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          disabled={loading.form}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* ==================== CKEditor ==================== */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={form.description || ''}
            onChange={(_, editor) => {
              const data = editor.getData();
              dispatch(setFormField({ field: 'description', value: data }));
            }}
            config={{
              toolbar: [
                'heading', '|',
                'bold', 'italic', 'underline', '|',
                'bulletedList', 'numberedList', '|',
                'link', 'imageUpload', 'blockQuote', '|',
                'undo', 'redo'
              ],
              placeholder: 'Write detailed description here...',
              height: '300px',
            }}
            disabled={loading.form}
          />
        </div>
        {/* ================================================== */}

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Upload Images {editId && '(new images will replace old ones)'}
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            disabled={loading.form}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading.form}
            className={`flex-1 md:flex-none px-8 py-3 rounded-lg font-medium text-white transition duration-200 flex items-center justify-center gap-2 ${
              loading.form
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading.form ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                {editId ? 'Updating...' : 'Creating...'}
              </>
            ) : editId ? (
              'Update News'
            ) : (
              'Create News'
            )}
          </button>

          {editId && (
            <button
              type="button"
              onClick={() => dispatch(resetForm())}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* DATA TABLE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {loading.table ? (
          <div className="p-10 flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
              <p className="text-gray-600">Loading tech news...</p>
            </div>
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

export default Technology;