import { configureStore } from '@reduxjs/toolkit';
import technologyReducer from './Technology/technologyslice/technologySlice.js';
import techNewsReducer from './Technology/techNewsSlice/techNewsSlice.js';
import contactReducer from './Component/Redux/contact/contactSlice.js';
// import other reducers if you have them
import blogReducer from './Component/Redux/Blog/blogSlice.js';
import portfolioReducer from './Component/Portfolio/portfolioslice.js';
export const store = configureStore({
  reducer: {
    technology: technologyReducer,
    techNews: techNewsReducer,
    contact: contactReducer,
    blog: blogReducer,
    portfolio: portfolioReducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // optional - if you have non-serializable data
    }),
  // devTools: process.env.NODE_ENV !== 'production', // optional
});

export default store;