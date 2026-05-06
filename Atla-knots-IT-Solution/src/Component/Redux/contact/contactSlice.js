// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk for submitting the contact form
// export const submitContactForm = createAsyncThunk(
//   'contact/submitForm',
//   async (formDataWithCaptcha, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8000/api/contact/create',
//         formDataWithCaptcha
//       );
//       return response.data; // you can return success message or whatever backend sends
//     } catch (err) {
//       // Handle different error shapes
//       if (err.response?.data?.message) {
//         return rejectWithValue(err.response.data.message);
//       }
//       if (err.response?.data?.error) {
//         return rejectWithValue(err.response.data.error);
//       }
//       if (err.message) {
//         return rejectWithValue(err.message);
//       }
//       return rejectWithValue('Something went wrong. Please try again.');
//     }
//   }
// );

// const initialState = {
//   formData: {
//     usernamee: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   },
//   status: 'idle',       // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
//   captchaValue: null,   // we'll store it temporarily here too
// };

// const contactSlice = createSlice({
//   name: 'contact',
//   initialState,
//   reducers: {
//     updateFormField: (state, action) => {
//       const { field, value } = action.payload;
//       state.formData[field] = value;
//     },
//     resetForm: (state) => {
//       state.formData = { ...initialState.formData };
//       state.captchaValue = null;
//       state.error = null;
//     },
//     setCaptcha: (state, action) => {
//       state.captchaValue = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitContactForm.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(submitContactForm.fulfilled, (state) => {
//         state.status = 'succeeded';
//         // Optionally keep message or reset immediately
//         // state.formData = { ...initialState.formData };
//         // state.captchaValue = null;
//       })
//       .addCase(submitContactForm.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions
// export const {
//   updateFormField,
//   resetForm,
//   setCaptcha,
//   clearError,
// } = contactSlice.actions;

// // Export reducer
// export default contactSlice.reducer;

// // Selectors (optional but recommended)
// export const selectContactForm = (state) => state.contact.formData;
// export const selectContactStatus = (state) => state.contact.status;
// export const selectContactError = (state) => state.contact.error;
// export const selectCaptchaValue = (state) => state.contact.captchaValue;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ─── Async Thunk ────────────────────────────────────────────────────────────

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/contact/create",
        payload,
      );
      return response.data;
    } catch (error) {
      let errorMsg = "Something went wrong. Please try again.";

      if (error.response) {
        errorMsg =
          error.response.data?.message ||
          error.response.data?.error ||
          errorMsg;
      } else if (error.request) {
        errorMsg =
          "No response from server. Please check if backend is running.";
      }

      return rejectWithValue(errorMsg);
    }
  },
);

// ─── Initial State ───────────────────────────────────────────────────────────

const initialFormData = {
  usernamee: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: initialFormData,
    captchaValue: null,
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    // Update any single form field
    updateField(state, action) {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    // Store reCAPTCHA token
    setCaptcha(state, action) {
      state.captchaValue = action.payload;
    },
    // Reset entire form after success
    resetForm(state) {
      state.formData = initialFormData;
      state.captchaValue = null;
      state.successMessage = null;
      state.errorMessage = null;
    },
    // Clear alert messages manually if needed
    clearMessages(state) {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.successMessage =
          "Message sent successfully! We'll get back to you soon.";
        state.formData = initialFormData;
        state.captchaValue = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { updateField, setCaptcha, resetForm, clearMessages } =
  contactSlice.actions;

export default contactSlice.reducer;
