import axios from "axios";

const API_URL = "http://localhost:8000/api/product";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};

export const updateHomeApi = (id, data) => {
  return axios.put(`http://localhost:8000/api/product/${id}`, data);
};
export const deleteHomeApi = (id) => axios.delete(`${API_URL}/${id}`);

export const getProductsApi = () => {
  return axios.get(`${API_URL}/alladminproducts`);
};

export const getAdminProductCommentsApi = (id) => {
  return axios.get(`${API_URL}/${id}/admin-comments`);
};

export const deleteAdminProductCommentApi = (productId, commentId) => {
  return axios.delete(`${API_URL}/${productId}/admin-comment/${commentId}`);
};
