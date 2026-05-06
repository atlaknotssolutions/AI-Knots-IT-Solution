import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch categories
export const fetchCategories = createAsyncThunk(
  "technology/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data: result } = await axios.get(
        "http://localhost:8000/api/technology/category",
        { timeout: 10000 },
      );
      const categoryData = result.data || [];
      return Array.isArray(categoryData) ? categoryData : [];
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to load categories.",
      );
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

      const { data: result } = await axios.get(url, { timeout: 12000 });

      let items = result.data || [];
      if (!Array.isArray(items)) items = [];

      const formattedData = items.map((item, index) => ({
        id: item._id || `item-${index + 1}`,
        title: item.title || "Untitled",
        description: item.description || "No description available",
        date:
          item.updatedAt || item.createdAt
            ? new Date(item.updatedAt || item.createdAt).toLocaleDateString(
                "en-US",
                { month: "short", day: "numeric", year: "numeric" },
              )
            : new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
        category: item.category?.name || "General",
        link: item.link || item.url || "#",
        image: item.images?.length > 0 ? item.images[0] : null,
        readTime: "5 min read",
        views: `${Math.floor(Math.random() * 20)}k`,
        author: "Tech Team",
        trending: Math.random() > 0.7,
      }));

      return formattedData;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to load products. Please try again later.",
      );
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
    // fetchCategories
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

    // fetchProducts
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
      });
  },
});

export const { setSelectedCategory, clearError } = technologySlice.actions;

export default technologySlice.reducer;
