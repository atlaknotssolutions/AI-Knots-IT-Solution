// import { useEffect, useMemo, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import DOMPurify from "dompurify";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // CKEditor imports
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import {
//   getProductsApi,
//   deleteHomeApi,
//   updateHomeApi,
//   getAdminProductCommentsApi,
//   deleteAdminProductCommentApi,
// } from "./product.api";

// export default function ProductTable() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState([]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);
//   const [commentModalOpen, setCommentModalOpen] = useState(false);
//   const [activeProductComments, setActiveProductComments] = useState([]);
//   const [activeProductName, setActiveProductName] = useState("");
//   const [activeProductId, setActiveProductId] = useState(null);
//   const [commentLoading, setCommentLoading] = useState(false);

//   // Fetch products + categories
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const [productsRes, categoriesRes] = await Promise.all([
//         getProductsApi(),
//         fetch("http://localhost:8000/api/blogcategory").then((r) => r.json()),
//       ]);

//       setProducts(productsRes.data?.data || productsRes.data || []);

//       if (categoriesRes.success) {
//         setCategories(categoriesRes.data || []);
//       } else {
//         toast.error("Failed to load categories");
//       }
//     } catch (err) {
//       toast.error("Failed to load data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const openEditModal = (product) => {
//     // IMPORTANT: Force category to be string ID (prevents [object Object])
//     const categoryId = product.category?._id
//       ? product.category._id.toString()
//       : typeof product.category === "string"
//         ? product.category
//         : "";

//     setEditData({
//       ...product,
//       category: categoryId, // ← always string or empty
//     });

//     setPreviewImages(product.images || []);
//     setSelectedFiles([]);
//     setIsModalOpen(true);
//   };

//   const handleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     setSelectedFiles(files);
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setPreviewImages(previews);
//   };

//   const handleUpdate = async () => {
//     if (
//       !editData.name?.trim() ||
//       !editData.description?.trim() ||
//       !editData.author?.trim()
//     ) {
//       toast.error("Name, Author and Description are required");
//       return;
//     }

//     // Safety check: category should be valid ObjectId string
//     if (!editData.category || editData.category.length !== 24) {
//       toast.error("Please select a valid category");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("name", editData.name.trim());
//       formData.append("description", editData.description.trim());
//       formData.append("author", editData.author.trim());
//       formData.append("category", editData.category); // now it's string ID

//       selectedFiles.forEach((file) => {
//         formData.append("images", file);
//       });

//       await updateHomeApi(editData._id, formData);

//       toast.success("Product updated successfully");
//       setIsModalOpen(false);
//       setSelectedFiles([]);
//       setPreviewImages([]);
//       await fetchData();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Update failed");
//       console.error("Update error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openCommentsModal = async (product) => {
//     setActiveProductId(product._id);
//     setActiveProductName(product.name || product.title || "Product");
//     setCommentModalOpen(true);
//     setCommentLoading(true);

//     try {
//       const res = await getAdminProductCommentsApi(product._id);
//       setActiveProductComments(res.data.data?.comments || []);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to load comments");
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
//       toast.success("Comment deleted successfully");
//       setActiveProductComments((prev) =>
//         prev.filter((c) => c._id !== commentId),
//       );
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Comment delete failed");
//     } finally {
//       setCommentLoading(false);
//     }
//   };

//   const columns = useMemo(
//     () => [
//       {
//         header: "No.",
//         id: "serial",
//         enableSorting: false,
//         cell: ({ row, table }) => {
//           const pageIndex = table.getState().pagination.pageIndex;
//           const pageSize = table.getState().pagination.pageSize;
//           return pageIndex * pageSize + row.index + 1;
//         },
//       },
//       {
//         accessorKey: "thumbnail",
//         header: "Image",
//         enableSorting: false,
//         cell: ({ row }) => {
//           const img = row.original.thumbnail?.[0];
//           return img ? (
//             <img
//               src={img}
//               alt="product"
//               className="w-14 h-14 object-cover rounded-lg border shadow-sm"
//             />
//           ) : (
//             <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 border">
//               No Img
//             </div>
//           );
//         },
//       },
//       {
//         accessorKey: "name",
//         header: "Product Name",
//       },
//       {
//         accessorKey: "author",
//         header: "Author",
//         cell: ({ getValue }) => getValue() || "—",
//       },
//       {
//         accessorKey: "description",
//         header: "Description",
//         cell: ({ getValue }) => {
//           const rawDesc = getValue() || "";
//           const plainText = rawDesc
//             .replace(/<[^>]+>/g, "")
//             .replace(/\s+/g, " ")
//             .trim();

//           return (
//             <div
//               className="max-w-xs line-clamp-3 text-sm text-gray-700 cursor-help leading-relaxed"
//               title={plainText || "—"}
//             >
//               {plainText || "—"}
//             </div>
//           );
//         },
//       },
//       {
//         accessorKey: "category.name",
//         header: "Category",
//         cell: ({ row }) => row.original.category?.name || "—",
//       },
//       {
//         id: "actions",
//         header: "Actions",
//         enableSorting: false,
//         cell: ({ row }) => (
//           <div className="flex gap-2 justify-center">
//             <button
//               onClick={() => openEditModal(row.original)}
//               className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => openCommentsModal(row.original)}
//               className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition"
//             >
//               Comments
//             </button>
//             <button
//               onClick={async () => {
//                 if (!window.confirm("Delete this product?")) return;
//                 try {
//                   setLoading(true);
//                   await deleteHomeApi(row.original._id);
//                   toast.success("Deleted successfully");
//                   await fetchData();
//                 } catch (err) {
//                   toast.error("Delete failed");
//                 } finally {
//                   setLoading(false);
//                 }
//               }}
//               className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     [],
//   );

//   const table = useReactTable({
//     data: products,
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
//     <div className="min-h-screen bg-gray-100 p-6 relative">
//       <div className="bg-white rounded-2xl shadow-xl border overflow-hidden max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center p-6 border-b bg-gray-50">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Product Management
//             {loading && (
//               <span className="ml-3 text-blue-600 text-lg animate-pulse">
//                 loading...
//               </span>
//             )}
//           </h1>
//         </div>

//         {/* Table */}
//         <div className="relative overflow-x-auto min-h-[400px]">
//           {loading ? (
//             <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
//               <div className="flex flex-col items-center gap-3">
//                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                 <p className="text-gray-600 font-medium">Loading products...</p>
//               </div>
//             </div>
//           ) : products.length === 0 ? (
//             <div className="py-16 text-center text-gray-500">
//               No products found.
//             </div>
//           ) : (
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
//                 {table.getHeaderGroups().map((headerGroup) => (
//                   <tr key={headerGroup.id}>
//                     {headerGroup.headers.map((header) => (
//                       <th
//                         key={header.id}
//                         className="py-3 px-4 text-left font-medium"
//                       >
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext(),
//                         )}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody>
//                 {table.getRowModel().rows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="border-b hover:bg-blue-50/50 transition"
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <td key={cell.id} className="py-3 px-4">
//                         {flexRender(
//                           cell.column.columnDef.cell,
//                           cell.getContext(),
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {isModalOpen && editData && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
//             {loading && (
//               <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-2xl z-10">
//                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             )}

//             <h2 className="text-xl font-bold mb-5 text-gray-800">
//               Edit Product
//             </h2>

//             {/* Name */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={editData.name || ""}
//                 onChange={(e) =>
//                   setEditData((prev) => ({ ...prev, name: e.target.value }))
//                 }
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 disabled={loading}
//               />
//             </div>

//             {/* Author */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 value={editData.author || ""}
//                 onChange={(e) =>
//                   setEditData((prev) => ({ ...prev, author: e.target.value }))
//                 }
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 disabled={loading}
//               />
//             </div>

//             {/* CKEditor Description */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={editData.description || ""}
//                   disabled={loading}
//                   config={{
//                     toolbar: [
//                       "heading",
//                       "|",
//                       "bold",
//                       "italic",
//                       "link",
//                       "bulletedList",
//                       "numberedList",
//                       "|",
//                       "outdent",
//                       "indent",
//                       "|",
//                       "undo",
//                       "redo",
//                     ],
//                     placeholder: "Write a detailed description...",
//                   }}
//                   onChange={(event, editor) => {
//                     const data = editor.getData();
//                     setEditData((prev) => ({ ...prev, description: data }));
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Category */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Category
//               </label>
//               <select
//                 value={editData.category || ""} // now it's string
//                 onChange={(e) =>
//                   setEditData((prev) => ({ ...prev, category: e.target.value }))
//                 }
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                 disabled={loading || categories.length === 0}
//               >
//                 <option value="">-- Select Category --</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Images */}
//             <div className="mb-5">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Replace Images (optional – current images will be replaced)
//               </label>
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleFilesChange}
//                 className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                 disabled={loading}
//               />
//               {previewImages.length > 0 && (
//                 <div className="mt-3 flex flex-wrap gap-3">
//                   {previewImages.map((src, i) => (
//                     <img
//                       key={i}
//                       src={src}
//                       alt={`preview-${i}`}
//                       className="w-20 h-20 object-cover rounded border shadow-sm"
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => {
//                   setIsModalOpen(false);
//                   setSelectedFiles([]);
//                   setPreviewImages([]);
//                 }}
//                 className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
//                 disabled={loading}
//               >
//                 {loading ? "Updating..." : "Update Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {commentModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
//             {commentLoading && (
//               <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-2xl z-10">
//                 <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             )}

//             <div className="flex items-start justify-between gap-4 mb-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800">
//                   Comments for {activeProductName}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Total: {activeProductComments.length}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setCommentModalOpen(false)}
//                 className="text-gray-500 hover:text-gray-800"
//               >
//                 Close
//               </button>
//             </div>

//             {activeProductComments.length === 0 ? (
//               <div className="py-16 text-center text-gray-600">
//                 No comments found.
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {activeProductComments.map((comment) => (
//                   <div
//                     key={comment._id}
//                     className="rounded-2xl border border-gray-200 p-4 bg-gray-50"
//                   >
//                     <div className="flex items-start justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-semibold text-gray-800">
//                           {comment.user?.name ||
//                             comment.user?.email ||
//                             "Anonymous"}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {new Date(comment.createdAt).toLocaleString()}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => handleDeleteComment(comment._id)}
//                         className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                     <p className="mt-3 text-sm text-gray-700 whitespace-pre-wrap">
//                       {comment.comment}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
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

// CKEditor imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  getProductsApi,
  deleteHomeApi,
  updateHomeApi,
  getAdminProductCommentsApi,
  deleteAdminProductCommentApi,
} from "./product.api";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activeProductComments, setActiveProductComments] = useState([]);
  const [activeProductName, setActiveProductName] = useState("");
  const [activeProductId, setActiveProductId] = useState(null);
  const [commentLoading, setCommentLoading] = useState(false);

  // Fetch products + categories
  const fetchData = async () => {
    try {
      setLoading(true);

      const [productsRes, categoriesRes] = await Promise.all([
        getProductsApi(),
        fetch("http://localhost:8000/api/blogcategory").then((r) => r.json()),
      ]);

      setProducts(productsRes.data?.data || []);

      if (categoriesRes.success) {
        setCategories(categoriesRes.data || []);
      } else {
        toast.error("Failed to load categories");
      }
    } catch (err) {
      toast.error("Failed to load data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openEditModal = (product) => {
    const categoryId = product.category?._id?.toString() || "";

    setEditData({
      ...product,
      category: categoryId,
    });

    setPreviewImages(product.thumbnail ? [product.thumbnail] : []);
    setSelectedFiles([]);
    setIsModalOpen(true);
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setSelectedFiles(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleUpdate = async () => {
    if (
      !editData.name?.trim() ||
      !editData.description?.trim() ||
      !editData.author?.trim()
    ) {
      toast.error("Name, Author and Description are required");
      return;
    }

    if (!editData.category || editData.category.length !== 24) {
      toast.error("Please select a valid category");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", editData.name.trim());
      formData.append("description", editData.description.trim());
      formData.append("author", editData.author.trim());
      formData.append("category", editData.category);

      selectedFiles.forEach((file) => {
        formData.append("images", file);
      });

      await updateHomeApi(editData._id, formData);

      toast.success("Product updated successfully");
      setIsModalOpen(false);
      setSelectedFiles([]);
      setPreviewImages([]);
      await fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  const openCommentsModal = async (product) => {
    setActiveProductId(product._id);
    setActiveProductName(product.name || "Product");
    setCommentModalOpen(true);
    setCommentLoading(true);

    try {
      const res = await getAdminProductCommentsApi(product._id);
      setActiveProductComments(res.data?.data?.comments || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load comments");
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
      toast.success("Comment deleted successfully");
      setActiveProductComments((prev) =>
        prev.filter((c) => c._id !== commentId)
      );
    } catch (err) {
      toast.error(err.response?.data?.message || "Comment delete failed");
    } finally {
      setCommentLoading(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        header: "No.",
        id: "serial",
        enableSorting: false,
        cell: ({ row, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;
          return pageIndex * pageSize + row.index + 1;
        },
      },
      {
        accessorKey: "thumbnail",
        header: "Image",
        enableSorting: false,
        cell: ({ row }) => {
          const thumb = row.original.thumbnail;
          return thumb ? (
            <img
              src={thumb}
              alt="product"
              className="w-14 h-14 object-cover rounded-lg border shadow-sm"
            />
          ) : (
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 border">
              No Img
            </div>
          );
        },
      },
      {
        accessorKey: "name",
        header: "Product Name",
      },
      {
        accessorKey: "author",
        header: "Author",
        cell: ({ getValue }) => getValue() || "—",
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ getValue }) => {
          const rawDesc = getValue() || "";
          const plainText = rawDesc
            .replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .trim();

          return (
            <div
              className="max-w-xs line-clamp-3 text-sm text-gray-700 cursor-help leading-relaxed"
              title={plainText || "—"}
            >
              {plainText || "—"}
            </div>
          );
        },
      },
      {
        accessorKey: "category.name",
        header: "Category",
        cell: ({ row }) => row.original.category?.name || "—",
      },
      {
        id: "actions",
        header: "Actions",
        enableSorting: false,
        cell: ({ row }) => (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => openEditModal(row.original)}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
            >
              Edit
            </button>
            <button
              onClick={() => openCommentsModal(row.original)}
              className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition"
            >
              Comments
            </button>
            <button
              onClick={async () => {
                if (!window.confirm("Delete this product?")) return;
                try {
                  setLoading(true);
                  await deleteHomeApi(row.original._id);
                  toast.success("Deleted successfully");
                  await fetchData();
                } catch (err) {
                  toast.error("Delete failed");
                } finally {
                  setLoading(false);
                }
              }}
              className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: products,
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
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="bg-white rounded-2xl shadow-xl border overflow-hidden max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Management
            {loading && (
              <span className="ml-3 text-blue-600 text-lg animate-pulse">
                loading...
              </span>
            )}
          </h1>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto min-h-[400px]">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading products...</p>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              No products found.
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3 px-4 text-left font-medium"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b hover:bg-blue-50/50 transition"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-3 px-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-2xl z-10">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <h2 className="text-xl font-bold mb-5 text-gray-800">Edit Product</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={editData.name || ""}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
            </div>

            {/* Author */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                value={editData.author || ""}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, author: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <CKEditor
                  editor={ClassicEditor}
                  data={editData.description || ""}
                  disabled={loading}
                  config={{
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "|",
                      "outdent",
                      "indent",
                      "|",
                      "undo",
                      "redo",
                    ],
                    placeholder: "Write a detailed description...",
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditData((prev) => ({ ...prev, description: data }));
                  }}
                />
              </div>
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={editData.category || ""}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                disabled={loading || categories.length === 0}
              >
                <option value="">-- Select Category --</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Images */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Replace Images (optional)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFilesChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                disabled={loading}
              />
              {previewImages.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {previewImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`preview-${i}`}
                      className="w-20 h-20 object-cover rounded border shadow-sm"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedFiles([]);
                  setPreviewImages([]);
                }}
                className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Product"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comments Modal */}
      {commentModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {commentLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-2xl z-10">
                <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Comments for {activeProductName}
                </h2>
                <p className="text-sm text-gray-500">
                  Total: {activeProductComments.length}
                </p>
              </div>
              <button
                onClick={() => setCommentModalOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                Close
              </button>
            </div>

            {activeProductComments.length === 0 ? (
              <div className="py-16 text-center text-gray-600">
                No comments found.
              </div>
            ) : (
              <div className="space-y-4">
                {activeProductComments.map((comment) => (
                  <div
                    key={comment._id}
                    className="rounded-2xl border border-gray-200 p-4 bg-gray-50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {comment.user?.name || comment.user?.email || "Anonymous"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-700 whitespace-pre-wrap">
                      {comment.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}