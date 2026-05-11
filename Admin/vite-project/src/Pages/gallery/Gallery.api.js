// import axios from "axios";

// const API_URL = "http://localhost:8000/api/gallery";

// export const createProductApi = (formData) => {
//   return axios.post(API_URL, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// // src/api/Gallery.api.js
// import axios from "axios";

// const API_BASE_URL = "http://localhost:8000/api/gallery";

// // For development - you can later move this to .env
// // const API_BASE_URL = import.meta.env.VITE_API_URL + "/api/gallery";

// export const createGalleryItem = (formData) => {
//   return axios.post(API_BASE_URL, formData, {

//   });
// };

// // Optional: if you later need to fetch gallery items
// export const getAllGalleryItems = () => {
//   return axios.get(API_BASE_URL);
// };

// export const getGalleryItemById = (id) => {
//   return axios.get(`${API_BASE_URL}/${id}`);
// };

// export const updateGalleryItem = (id, formData) => {
//   return axios.put(`${API_BASE_URL}/${id}`, formData, {
//   });
// };

// export const deleteGalleryItem = (id) => {
//   return axios.delete(`${API_BASE_URL}/${id}`);
// };

// src/api/Gallery.api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/gallery";
// Later → const API_BASE_URL = import.meta.env.VITE_API_URL + "/api/gallery";

export const createGalleryItem = (formData) => {
  return axios.post(API_BASE_URL, formData);
};

export const getAllGalleryItems = () => {
  return axios.get(API_BASE_URL);
};

export const getGalleryItemById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

export const updateGalleryItem = (id, formData) => {
  return axios.put(`${API_BASE_URL}/${id}`, formData);
};

export const deleteGalleryItem = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};
