import axios from "axios";

const API_URL = "https://ai-knots-it-solution.onrender.com/api/create";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};
