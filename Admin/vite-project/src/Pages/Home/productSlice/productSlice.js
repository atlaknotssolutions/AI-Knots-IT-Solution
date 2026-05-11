// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Thunk: fetch categories
// export const fetchCategories = createAsyncThunk(
//   'product/fetchCategories',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch("http://localhost:8000/api/blogcategory");
//       if (!response.ok) throw new Error("Failed to load categories");

//       const result = await response.json();
//       if (!result.success) throw new Error(result.message || "Failed");

//       return result.data;
//     } catch (err) {
//       return rejectWithValue(err.message || "Failed to fetch categories");
//     }
//   }
// );

// // Thunk: create product
// export const createProduct = createAsyncThunk(
//   'product/createProduct',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await createProductApi(formData);
//       if (!response.data?.success) {
//         throw new Error(response.data?.message || "Failed to create product");
//       }
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message || "Something went wrong");
//     }
//   }
// );

// const initialState = {
//   form: {
//     name: "",
//     description: "",
//     category: "",
//     images: [],           // FileList
//   },
//   categories: [],
//   loading: false,         // create product
//   fetchingCategories: true,
//   error: null,
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     setFormField: (state, action) => {
//       const { field, value } = action.payload;
//       state.form[field] = value;
//     },
//     setImages: (state, action) => {
//       state.form.images = action.payload;
//     },
//     resetForm: (state) => {
//       state.form = {
//         name: "",
//         description: "",
//         category: "",
//         images: [],
//       };
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch categories
//       .addCase(fetchCategories.pending, (state) => {
//         state.fetchingCategories = true;
//         state.error = null;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.fetchingCategories = false;
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.fetchingCategories = false;
//         state.error = action.payload;
//       })

//       // Create product
//       .addCase(createProduct.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createProduct.fulfilled, (state) => {
//         state.loading = false;
//         state.form = { name: "", description: "", category: "", images: [] };
//       })
//       .addCase(createProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const {
//   setFormField,
//   setImages,
//   resetForm,
//   clearError,
// } = productSlice.actions;

// export default productSlice.reducer;

// src/features/product/productSlice.js
// src/features/product/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProductApi } from "../product.api"; // adjust path

export const fetchCategories = createAsyncThunk(
  "product/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/api/blogcategory");
      if (!res.ok) throw new Error("Failed to load categories");
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      return data.data || [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createProductApi(formData);
      if (!response.data?.success) {
        throw new Error(response.data?.message || "Creation failed");
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  },
);

const initialState = {
  form: {
    name: "",
    description: "",
    category: "",
    images: [],
  },
  categories: [],
  status: {
    loading: false,
    fetchingCategories: true,
  },
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFormField: (state, { payload: { field, value } }) => {
      state.form[field] = value;
    },
    setImages: (state, { payload }) => {
      state.form.images = payload;
    },
    resetForm: (state) => {
      state.form = { name: "", description: "", category: "", images: [] };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status.fetchingCategories = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status.fetchingCategories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status.fetchingCategories = false;
        state.error = action.payload;
      })

      .addCase(createProduct.pending, (state) => {
        state.status.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.status.loading = false;
        state.form = { name: "", description: "", category: "", images: [] };
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFormField, setImages, resetForm, clearError } =
  productSlice.actions;

export default productSlice.reducer;
