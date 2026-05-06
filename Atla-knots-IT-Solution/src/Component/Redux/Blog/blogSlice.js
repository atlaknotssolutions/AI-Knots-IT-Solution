// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk to fetch categories
// export const fetchCategories = createAsyncThunk(
//   'blog/fetchCategories',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await fetch('http://localhost:8000/api/blogcategory');
//       if (!res.ok) throw new Error('Failed to fetch categories');
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message || 'Failed');
//       return ["All", ...data.data.map(c => c.name)];
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// // Async thunk to fetch all blog posts
// export const fetchBlogPosts = createAsyncThunk(
//   'blog/fetchBlogPosts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await fetch('http://localhost:8000/api/product'); // ← your real blog endpoint
//       if (!res.ok) throw new Error('Failed to fetch posts');
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message || 'Failed');
//       return data.data || [];
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// const blogSlice = createSlice({
//   name: 'blog',
//   initialState: {
//     categories: ["All"],
//     posts: [],
//     activeCategory: "All",
//     status: 'idle',       // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {
//     setActiveCategory: (state, action) => {
//       state.activeCategory = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Categories
//       .addCase(fetchCategories.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })

//       // Posts
//       .addCase(fetchBlogPosts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBlogPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.posts = action.payload;
//       })
//       .addCase(fetchBlogPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export const { setActiveCategory } = blogSlice.actions;
// export default blogSlice.reducer;

// src/features/blog/blogSlice.js   (or wherever you keep it)

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  "blog/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/api/blogcategory");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      return ["All", ...data.data.map((c) => c.name)];
    } catch (err) {
      return rejectWithValue(err.message || "Error fetching categories");
    }
  },
);

// Async thunk to fetch all blog posts
export const fetchBlogPosts = createAsyncThunk(
  "blog/fetchBlogPosts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/api/product");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      return data.data || [];
    } catch (err) {
      return rejectWithValue(err.message || "Error fetching blog posts");
    }
  },
);

// Async thunk to fetch SINGLE blog post by ID
export const fetchBlogPostById = createAsyncThunk(
  "blog/fetchBlogPostById",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/api/product/${postId}`);
      if (!res.ok) throw new Error("Post not found");
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to load post");
      return data.data;
    } catch (err) {
      return rejectWithValue(err.message || "Error loading blog post");
    }
  },
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    categories: ["All"],
    posts: [],
    activeCategory: "All",

    // ── Fields for list page ──
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,

    // ── Fields for detail page ──
    currentPost: null,
    detailStatus: "idle", // separate status so detail doesn't affect list
    detailError: null,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    // Optional: clear detail data when leaving the detail page
    clearCurrentPost: (state) => {
      state.currentPost = null;
      state.detailStatus = "idle";
      state.detailError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // All Posts (list)
      .addCase(fetchBlogPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Single Post (detail)
      .addCase(fetchBlogPostById.pending, (state) => {
        state.detailStatus = "loading";
        state.detailError = null;
      })
      .addCase(fetchBlogPostById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.currentPost = action.payload;
      })
      .addCase(fetchBlogPostById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError = action.payload;
      });
  },
});

export const { setActiveCategory, clearCurrentPost } = blogSlice.actions;
export default blogSlice.reducer;
