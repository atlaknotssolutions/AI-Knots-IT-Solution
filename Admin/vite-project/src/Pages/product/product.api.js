import axios from "axios";

const API_URL = "http://localhost:8000/api/product";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};

export const updateHomeApi = (id, data) => {
  return axios.put(`http://localhost:8000/api/updatehome/${id}`, data);
};
export const deleteHomeApi = (id) => axios.delete(`${API_URL}/${id}`);

export const getProductsApi = () => {
  return axios.get(API_URL);
};
