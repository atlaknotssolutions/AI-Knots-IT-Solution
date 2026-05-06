// src/features/technology/techSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  createTechApi,
  getTechApi,
  updateTechApi,
  deleteTechApi,
  getCategoriesApi,
} from '../TechnoApi.js';   // adjust path if needed

// ────────────── Async Thunks ──────────────
export const fetchTechs = createAsyncThunk(
  'tech/fetchTechs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getTechApi();
      return res.data?.data || [];
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to load tech news';
      return rejectWithValue(msg);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'tech/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCategoriesApi();
      return res.data?.data || [];
    } catch (err) {
      return rejectWithValue('Failed to load categories');
    }
  }
);

export const createTech = createAsyncThunk(
  'tech/createTech',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await createTechApi(formData);
      return res.data?.data || res.data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to create tech news';
      return rejectWithValue(msg);
    }
  }
);

export const updateTech = createAsyncThunk(
  'tech/updateTech',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await updateTechApi(id, formData);
      return res.data?.data || res.data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to update tech news';
      return rejectWithValue(msg);
    }
  }
);

export const deleteTech = createAsyncThunk(
  'tech/deleteTech',
  async (id, { rejectWithValue }) => {
    try {
      await deleteTechApi(id);
      return id; // return id so we can remove it from list optimistically
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to delete';
      return rejectWithValue(msg);
    }
  }
);

// ────────────── Slice ──────────────
const initialState = {
  techs: [],
  categories: [],
  form: {
    title: '',
    description: '',
    category: '',
    images: [],          // FileList or []
  },
  editId: null,
  loading: {
    table: false,
    form: false,
    delete: {},          // { [id]: true }
  },
  error: null,
};

const techSlice = createSlice({
  name: 'tech',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    setImages: (state, action) => {
      state.form.images = action.payload; // FileList
    },
    startEdit: (state, action) => {
      const tech = action.payload;
      state.editId = tech._id;
      state.form.title = tech.title;
      state.form.description = tech.description;
      state.form.category = tech.category?._id || tech.category || '';
      state.form.images = []; // reset images on edit (or handle differently)
      toast.info(`Now editing: ${tech.title}`);
    },
    resetForm: (state) => {
      state.form = { title: '', description: '', category: '', images: [] };
      state.editId = null;
    },
    // Optional: clear error
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // fetchTechs
    builder
      .addCase(fetchTechs.pending, (state) => {
        state.loading.table = true;
        state.error = null;
      })
      .addCase(fetchTechs.fulfilled, (state, action) => {
        state.loading.table = false;
        state.techs = action.payload;
      })
      .addCase(fetchTechs.rejected, (state, action) => {
        state.loading.table = false;
        state.error = action.payload;
        toast.error(action.payload);
      });

    // fetchCategories
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    // create
    builder
      .addCase(createTech.pending, (state) => {
        state.loading.form = true;
      })
      .addCase(createTech.fulfilled, (state) => {
        state.loading.form = false;
        toast.success('Tech news created successfully!');
        state.techs = [...state.techs]; // force re-render or refetch below
      })
      .addCase(createTech.rejected, (state, action) => {
        state.loading.form = false;
        toast.error(action.payload);
      });

    // update
    builder
      .addCase(updateTech.pending, (state) => {
        state.loading.form = true;
      })
      .addCase(updateTech.fulfilled, (state) => {
        state.loading.form = false;
        toast.success('Tech news updated successfully!');
        state.editId = null;
        // reset form
        state.form = { title: '', description: '', category: '', images: [] };
      })
      .addCase(updateTech.rejected, (state, action) => {
        state.loading.form = false;
        toast.error(action.payload);
      });

    // delete
    builder
      .addCase(deleteTech.pending, (state, action) => {
        state.loading.delete[action.meta.arg] = true;
      })
      .addCase(deleteTech.fulfilled, (state, action) => {
        const id = action.payload;
        state.techs = state.techs.filter((t) => t._id !== id);
        state.loading.delete[id] = false;
        toast.success('Deleted successfully');
      })
      .addCase(deleteTech.rejected, (state, action) => {
        const id = action.meta.arg;
        state.loading.delete[id] = false;
        toast.error(action.payload);
      });
  },
});

export const {
  setFormField,
  setImages,
  startEdit,
  resetForm,
  clearError,
} = techSlice.actions;

export default techSlice.reducer;