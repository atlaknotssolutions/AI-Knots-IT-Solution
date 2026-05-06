import axios from "axios";

const API_URL = "http://localhost:8000/api/create";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};
