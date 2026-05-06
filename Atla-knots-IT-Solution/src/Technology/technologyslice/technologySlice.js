// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Fetch categories
// export const fetchCategories = createAsyncThunk(
//   "technology/fetchCategories",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data: result } = await axios.get(
//         "http://localhost:8000/api/technology/category",
//         { timeout: 10000 },
//       );
//       const categoryData = result.data || [];
//       return Array.isArray(categoryData) ? categoryData : [];
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.message ||
//           err.message ||
//           "Failed to load categories.",
//       );
//     }
//   },
// );

// // Fetch products
// export const fetchProducts = createAsyncThunk(
//   "technology/fetchProducts",
//   async (categoryId, { rejectWithValue }) => {
//     try {
//       let url = "http://localhost:8000/api/technology/product";
//       if (categoryId) {
//         url += `?categoryId=${categoryId}`;
//       }

//       const { data: result } = await axios.get(url, { timeout: 12000 });

//       let items = result.data || [];
//       if (!Array.isArray(items)) items = [];

//       const formattedData = items.map((item, index) => ({
//         id: item._id || `item-${index + 1}`,
//         title: item.title || "Untitled",
//         description: item.description || "No description available",
//         date:
//           item.updatedAt || item.createdAt
//             ? new Date(item.updatedAt || item.createdAt).toLocaleDateString(
//                 "en-US",
//                 { month: "short", day: "numeric", year: "numeric" },
//               )
//             : new Date().toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//               }),
//         category: item.category?.name || "General",
//         link: item.link || item.url || "#",
//         image: item.images?.length > 0 ? item.images[0] : null,
//         readTime: "5 min read",
//         views: `${Math.floor(Math.random() * 20)}k`,
//         author: "Tech Team",
//         trending: Math.random() > 0.7,
//       }));

//       return formattedData;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.message ||
//           err.message ||
//           "Failed to load products. Please try again later.",
//       );
//     }
//   },
// );

// const technologySlice = createSlice({
//   name: "technology",
//   initialState: {
//     categories: [],
//     selectedCategory: { _id: null, name: "All" },
//     newsItems: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setSelectedCategory(state, action) {
//       state.selectedCategory = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // fetchCategories
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.error = action.payload;
//       });

//     // fetchProducts
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.newsItems = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setSelectedCategory, clearError } = technologySlice.actions;

// export default technologySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ====================== EXISTING THUNKS ======================

// Fetch categories
export const fetchCategories = createAsyncThunk(
  "technology/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/api/technology/category");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      return Array.isArray(data.data) ? data.data : [];
    } catch (err) {
      return rejectWithValue(err.message || "Failed to load categories");
    }
  },
);

// Fetch products
export const fetchProducts = createAsyncThunk(
  "technology/fetchProducts",
  async (categoryId, { rejectWithValue }) => {
    try {
      let url = "http://localhost:8000/api/technology/product";
      if (categoryId) {
        url += `?categoryId=${categoryId}`;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();

      let items = data.data || [];
      if (!Array.isArray(items)) items = [];

      const formattedData = items.map((item, index) => ({
        id: item._id || `item-${index + 1}`,
        _id: item._id, // Keep original ID for engagement
        title: item.title || item.name || "Untitled",
        description: item.description || "No description available",
        date:
          item.updatedAt || item.createdAt
            ? new Date(item.updatedAt || item.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                },
              )
            : "Recently",
        category: item.category?.name || "General",
        categoryId: item.category?._id,
        link: item.link || item.url || "#",
        image: item.images?.length > 0 ? item.images[0] : null,
        images: item.images || [],
        readTime: "5 min read",
        views: item.views || 0,
        likes: item.likes || 0,
        comments: item.comments || [],
        author: item.author || "Tech Team",
        trending: Math.random() > 0.7,
      }));

      return formattedData;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to load products");
    }
  },
);

// ====================== ENGAGEMENT THUNKS ======================

// Increment View
export const incrementPostView = createAsyncThunk(
  "technology/incrementView",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/technology/product/technology/${postId}/view`,
        {
          method: "PUT",
        },
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return { postId, views: data.views };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

// Toggle Like
export const togglePostLike = createAsyncThunk(
  "technology/toggleLike",
  async (payload, { rejectWithValue }) => {
    try {
      const { postId, email } =
        typeof payload === "string" ? { postId: payload } : payload;
      const res = await fetch(
        `http://localhost:8000/api/technology/product/technology/${postId}/like`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return { postId, likes: data.likes, liked: data.liked };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

// Send OTP
export const sendCommentOtp = createAsyncThunk(
  "technology/sendCommentOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const { postId, name, email, phone } = payload;
      const res = await fetch(
        `http://localhost:8000/api/technology/product/technology/${postId}/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        },
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

// Post Comment with OTP
export const postCommentWithOtp = createAsyncThunk(
  "technology/postCommentWithOtp",
  async ({ postId, email, otp, comment }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/technology/product/technology/${postId}/comment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp, comment }),
        },
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return { postId, comments: data.comments };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const technologySlice = createSlice({
  name: "technology",
  initialState: {
    categories: [],
    selectedCategory: { _id: null, name: "All" },
    newsItems: [],
    loading: false,
    error: null,

    // Engagement states
    likeStatus: "idle",
    commentStatus: "idle",
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
      });

    // Fetch Products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.newsItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ====================== ENGAGEMENT REDUCERS ======================
      .addCase(incrementPostView.fulfilled, (state, action) => {
        const { postId, views } = action.payload;
        const item = state.newsItems.find(
          (i) => i._id === postId || i.id === postId,
        );
        if (item) item.views = views;
      })

      .addCase(togglePostLike.fulfilled, (state, action) => {
        const { postId, likes } = action.payload;
        const item = state.newsItems.find(
          (i) => i._id === postId || i.id === postId,
        );
        if (item) item.likes = likes;
      })

      .addCase(postCommentWithOtp.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        const item = state.newsItems.find(
          (i) => i._id === postId || i.id === postId,
        );
        if (item) item.comments = comments;
      });
  },
});

export const { setSelectedCategory, clearError } = technologySlice.actions;
export default technologySlice.reducer;
