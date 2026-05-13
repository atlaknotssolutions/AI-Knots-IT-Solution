// import { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // CKEditor
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// // Redux Actions & APIs
// import {
//   fetchAdminTechs,
//   fetchCategories,
//   deleteTech,
//   updateTech,
// } from "../techslice/techslice.js";

// import {
//   getAdminProductCommentsApi,
//   deleteAdminProductCommentApi,
// } from "../TechnoApi.js";

// export default function ProductAdmin() {
//   const dispatch = useDispatch();

//   const { adminTechs, loading, categories } = useSelector(
//     (state) => state.tech,
//   );

//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState([]);

//   // Modal States
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   // Comments Modal
//   const [commentModalOpen, setCommentModalOpen] = useState(false);
//   const [activeProductComments, setActiveProductComments] = useState([]);
//   const [activeProductName, setActiveProductName] = useState("");
//   const [activeProductId, setActiveProductId] = useState(null);
//   const [commentLoading, setCommentLoading] = useState(false);

//   // Fetch Products + Categories
//   useEffect(() => {
//     dispatch(fetchAdminTechs());
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   // Open Edit Modal
//   const openEditModal = (product) => {
//     setEditData({
//       ...product,
//       title: product.title || product.name || "",
//       description: product.description || "",
//       category: product.category?._id || product.category || "",
//     });
//     setPreviewImages(
//       product.thumbnail
//         ? [product.thumbnail]
//         : Array.isArray(product.images)
//           ? product.images
//           : [],
//     );
//     setSelectedFiles([]);
//     setIsModalOpen(true);
//   };

//   const handleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setPreviewImages(previews);
//   };

//   // Update Product
//   const handleUpdate = async () => {
//     if (!editData?.title?.trim() || !editData?.description?.trim()) {
//       toast.error("Title and Description are required");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("title", editData.title.trim());
//       formData.append("name", editData.title.trim());
//       formData.append("description", editData.description.trim());
//       formData.append("category", editData.category);

//       selectedFiles.forEach((file) => formData.append("images", file));

//       await dispatch(updateTech({ id: editData._id, formData })).unwrap();
//       setIsModalOpen(false);
//     } catch (err) {
//       toast.error(
//         err?.message || err?.response?.data?.message || "Update failed",
//       );
//     }
//   };

//   // Open Comments Modal
//   const openCommentsModal = async (product) => {
//     setActiveProductId(product._id);
//     setActiveProductName(product.name || product.title);
//     setCommentModalOpen(true);
//     setCommentLoading(true);

//     try {
//       const res = await getAdminProductCommentsApi(product._id);
//       setActiveProductComments(res.data?.data?.comments || []);
//     } catch (err) {
//       toast.error("Failed to load comments");
//       setCommentModalOpen(false);
//     } finally {
//       setCommentLoading(false);
//     }
//   };

//   const handleDeleteComment = async (commentId) => {
//     if (!window.confirm("Delete this comment?")) return;

//     try {
//       setCommentLoading(true);
//       await deleteAdminProductCommentApi(activeProductId, commentId);

//       setActiveProductComments((prev) =>
//         prev.filter((c) => c._id !== commentId),
//       );
//       toast.success("Comment deleted");
//     } catch (err) {
//       toast.error("Failed to delete comment");
//     } finally {
//       setCommentLoading(false);
//     }
//   };

//   const columns = useMemo(
//     () => [
//       {
//         header: "No.",
//         id: "serial",
//         cell: ({ row, table }) =>
//           table.getState().pagination.pageIndex *
//             table.getState().pagination.pageSize +
//           row.index +
//           1,
//       },
//       {
//         accessorKey: "thumbnail",
//         header: "Image",
//         cell: ({ row }) =>
//           row.original.thumbnail ? (
//             <img
//               src={row.original.thumbnail}
//               alt="thumb"
//               className="w-14 h-14 object-cover rounded-lg"
//             />
//           ) : (
//             <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-xs">
//               No Img
//             </div>
//           ),
//       },
//       { accessorKey: "title", header: "Product Name" },

//       {
//         accessorKey: "description",
//         header: "Description",
//         cell: ({ getValue }) => {
//           const text =
//             getValue()
//               ?.replace(/<[^>]+>/g, "")
//               .slice(0, 80) || "";
//           return <div className="max-w-xs line-clamp-2">{text}...</div>;
//         },
//       },
//       { accessorKey: "category.name", header: "Category" },
//       {
//         id: "actions",
//         header: "Actions",
//         cell: ({ row }) => (
//           <div className="flex gap-2">
//             <button
//               onClick={() => openEditModal(row.original)}
//               className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => openCommentsModal(row.original)}
//               className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700"
//             >
//               Comments
//             </button>
//             <button
//               onClick={() => {
//                 if (window.confirm("Delete this product?")) {
//                   dispatch(deleteTech(row.original._id));
//                 }
//               }}
//               className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     [dispatch],
//   );

//   const table = useReactTable({
//     data: adminTechs,
//     columns,
//     state: { globalFilter, sorting },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setGlobalFilter,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white rounded-2xl shadow-xl max-w-7xl mx-auto">
//         <div className="p-6 border-b flex justify-between items-center bg-gray-50">
//           <h1 className="text-2xl font-bold">Technology Product Management</h1>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-100">
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <th
//                       key={header.id}
//                       className="py-3 px-4 text-left font-medium"
//                     >
//                       {flexRender(
//                         header.column.columnDef.header,
//                         header.getContext(),
//                       )}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody>
//               {table.getRowModel().rows.map((row) => (
//                 <tr key={row.id} className="border-b hover:bg-gray-50">
//                   {row.getVisibleCells().map((cell) => (
//                     <td key={cell.id} className="py-3 px-4">
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext(),
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {isModalOpen && editData && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
//             <h2 className="text-xl font-bold mb-4">Edit Product</h2>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 value={editData.title || editData.name || ""}
//                 onChange={(e) =>
//                   setEditData({ ...editData, title: e.target.value })
//                 }
//                 className="w-full border rounded-lg px-3 py-2"
//                 placeholder="Product Title"
//               />

//               <CKEditor
//                 editor={ClassicEditor}
//                 data={editData.description || ""}
//                 onChange={(_, editor) =>
//                   setEditData({ ...editData, description: editor.getData() })
//                 }
//               />

//               <select
//                 value={editData.category}
//                 onChange={(e) =>
//                   setEditData({ ...editData, category: e.target.value })
//                 }
//                 className="w-full border rounded-lg px-3 py-2"
//               >
//                 <option value="">Select Category</option>
//                 {categories?.map((category) => (
//                   <option key={category._id} value={category._id}>
//                     {category.name || category.title || "Category"}
//                   </option>
//                 ))}
//               </select>

//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleFilesChange}
//               />

//               {previewImages.length > 0 && (
//                 <div className="flex gap-2 flex-wrap">
//                   {previewImages.map((src, i) => (
//                     <img
//                       key={i}
//                       src={src}
//                       alt="preview"
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-5 py-2 border rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-5 py-2 bg-blue-600 text-white rounded-lg"
//               >
//                 Update Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Comments Modal */}
//       {commentModalOpen && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-xl font-bold">
//                 Comments - {activeProductName}
//               </h2>
//               <button onClick={() => setCommentModalOpen(false)}>Close</button>
//             </div>

//             {activeProductComments.length === 0 ? (
//               <p>No comments yet.</p>
//             ) : (
//               activeProductComments.map((comment) => (
//                 <div
//                   key={comment._id}
//                   className="border rounded-xl p-4 mb-3 bg-gray-50"
//                 >
//                   <div className="flex justify-between">
//                     <div>
//                       <p className="font-semibold">
//                         {comment.user?.email?.split("@")[0] || "Anonymous"}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         {new Date(comment.createdAt).toLocaleString()}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => handleDeleteComment(comment._id)}
//                       className="text-red-600 hover:text-red-700"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <p className="mt-2 text-gray-700">{comment.comment}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Redux
import {
  fetchAdminTechs,
  fetchCategories,
  deleteTech,
  updateTech,
} from "../techslice/techslice.js";

import {
  getAdminProductCommentsApi,
  deleteAdminProductCommentApi,
} from "../TechnoApi.js";

export default function ProductAdmin() {
  const dispatch = useDispatch();
  const { adminTechs, loading, categories } = useSelector((state) => state.tech);

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  // Edit Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // Comments Modal
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activeProductComments, setActiveProductComments] = useState([]);
  const [activeProductName, setActiveProductName] = useState("");
  const [activeProductId, setActiveProductId] = useState(null);
  const [commentLoading, setCommentLoading] = useState(false);

  // Live Preview Modal
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewProduct, setPreviewProduct] = useState(null);

  // Fetch Data
  useEffect(() => {
    dispatch(fetchAdminTechs());
    dispatch(fetchCategories());
  }, [dispatch]);

  // ==================== EDIT MODAL ====================
  const openEditModal = (product) => {
    setEditData({
      ...product,
      title: product.title || product.name || "",
      description: product.description || "",
      category: product.category?._id || product.category || "",
    });

    setPreviewImages(
      product.thumbnail
        ? [{ url: product.thumbnail, isNew: false }]
        : Array.isArray(product.images)
        ? product.images.map((img) => ({ url: img, isNew: false }))
        : []
    );
    setSelectedFiles([]);
    setIsModalOpen(true);
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newPreviews = files.map((file) => ({
      url: URL.createObjectURL(file),
      isNew: true,
    }));

    setSelectedFiles((prev) => [...prev, ...files]);
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const removePreview = (index) => {
    const img = previewImages[index];
    if (img?.isNew) {
      setSelectedFiles((prev) =>
        prev.filter((_, i) => i !== index - (previewImages.length - selectedFiles.length))
      );
    }
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdate = async () => {
    if (!editData?.title?.trim() || !editData?.description?.trim()) {
      toast.error("Title and Description are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", editData.title.trim());
      formData.append("name", editData.title.trim());
      formData.append("description", editData.description.trim());
      formData.append("category", editData.category);

      selectedFiles.forEach((file) => formData.append("images", file));

      await dispatch(updateTech({ id: editData._id, formData })).unwrap();
      toast.success("Product updated successfully");
      setIsModalOpen(false);
      setSelectedFiles([]);
      setPreviewImages([]);
    } catch (err) {
      toast.error(err?.message || "Update failed");
    }
  };

  // ==================== LIVE PREVIEW ====================
  const openLivePreview = (product) => {
    setPreviewProduct(product);
    setPreviewModalOpen(true);
  };

  // ==================== COMMENTS ====================
  const openCommentsModal = async (product) => {
    setActiveProductId(product._id);
    setActiveProductName(product.title || product.name || "Product");
    setCommentModalOpen(true);
    setCommentLoading(true);

    try {
      const res = await getAdminProductCommentsApi(product._id);
      setActiveProductComments(res.data?.data?.comments || []);
    } catch (err) {
      toast.error("Failed to load comments");
      setCommentModalOpen(false);
    } finally {
      setCommentLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("Delete this comment?")) return;
    try {
      setCommentLoading(true);
      await deleteAdminProductCommentApi(activeProductId, commentId);
      setActiveProductComments((prev) => prev.filter((c) => c._id !== commentId));
      toast.success("Comment deleted successfully");
    } catch (err) {
      toast.error("Failed to delete comment");
    } finally {
      setCommentLoading(false);
    }
  };

  // Columns
  const columns = useMemo(
    () => [
      { header: "No.", id: "serial", cell: ({ row, table }) => table.getState().pagination.pageIndex * table.getState().pagination.pageSize + row.index + 1 },
      {
        accessorKey: "thumbnail",
        header: "Image",
        cell: ({ row }) => {
          const thumb = row.original.thumbnail || row.original.images?.[0];
          return thumb ? (
            <img src={thumb} alt="thumb" className="w-14 h-14 object-cover rounded-lg" />
          ) : (
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-xs">No Img</div>
          );
        },
      },
      { accessorKey: "title", header: "Product Name" },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ getValue }) => {
          const text = getValue()?.replace(/<[^>]+>/g, "").slice(0, 80) || "";
          return <div className="max-w-xs line-clamp-2 text-sm">{text}...</div>;
        },
      },
      { accessorKey: "category.name", header: "Category" },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => openLivePreview(row.original)}
              className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
            >
              👁️ Preview
            </button>
            <button
              onClick={() => openEditModal(row.original)}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => openCommentsModal(row.original)}
              className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700"
            >
              Comments
            </button>
            <button
              onClick={() => {
                if (window.confirm("Delete this product?")) {
                  dispatch(deleteTech(row.original._id));
                }
              }}
              className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [dispatch]
  );

  const table = useReactTable({
    data: adminTechs || [],
    columns,
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-7xl mx-auto">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h1 className="text-2xl font-bold">Technology Product Management</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="py-3 px-4 text-left font-medium">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-3 px-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================== EDIT MODAL (Improved) ==================== */}
      {isModalOpen && editData && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={editData.title || ""}
                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={editData.description || ""}
                    onChange={(_, editor) => setEditData({ ...editData, description: editor.getData() })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={editData.category}
                    onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5"
                  >
                    <option value="">Select Category</option>
                    {categories?.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Images</label>
                  <input type="file" multiple accept="image/*" onChange={handleFilesChange} className="w-full" />

                  {previewImages.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {previewImages.map((img, i) => (
                        <div key={i} className="relative">
                          <img src={img.url} alt="preview" className="w-24 h-24 object-cover rounded-lg border" />
                          <button
                            onClick={() => removePreview(i)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ✕
                          </button>
                          {img.isNew && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-2 rounded">New</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 border rounded-lg hover:bg-gray-100">
                  Cancel
                </button>
                <button onClick={handleUpdate} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== LIVE PREVIEW MODAL ==================== */}
      {previewModalOpen && previewProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
            <div className="p-5 border-b flex justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold">Live Preview</h2>
              <button onClick={() => setPreviewModalOpen(false)} className="text-4xl text-gray-400 hover:text-black">×</button>
            </div>
            <div className="p-6 overflow-y-auto">
              {(previewProduct.thumbnail || previewProduct.images?.[0]) && (
                <img
                  src={previewProduct.thumbnail || previewProduct.images[0]}
                  alt={previewProduct.title}
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
              )}
              <h1 className="text-4xl font-bold mb-3">{previewProduct.title || previewProduct.name}</h1>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: previewProduct.description || "" }} />
            </div>
          </div>
        </div>
      )}

      {/* ==================== COMMENTS MODAL ==================== */}
      {commentModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Comments - {activeProductName}</h2>
                <button onClick={() => setCommentModalOpen(false)} className="text-3xl text-gray-400 hover:text-black">×</button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {activeProductComments.length === 0 ? (
                <p className="text-center py-12 text-gray-500">No comments yet.</p>
              ) : (
                activeProductComments.map((comment) => (
                  <div key={comment._id} className="border rounded-xl p-4 bg-gray-50">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{comment.user?.name || comment.user?.email || "Anonymous"}</p>
                        <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                      </div>
                      <button onClick={() => handleDeleteComment(comment._id)} className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                    </div>
                    <p className="mt-3 text-gray-700 whitespace-pre-wrap">{comment.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}