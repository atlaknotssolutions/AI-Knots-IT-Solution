// src/api/techApi.js
import axios from "axios";

// Base URL (change this to your production URL later)
const API_BASE_URL = "http://localhost:8000"; // Change to your production URL when deploying

// Optional: Create an axios instance with baseURL (recommended)
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createTechApi = (data) => api.post("/recentwork/create", data);

export const getCategoriesApi = () => api.get("/recentworkcategory");

export const getTechApi = () => api.get("/recentwork");

export const updateTechApi = (id, data) => api.put(`/recentwork/update/${id}`, data);

export const deleteTechApi = (id) => api.delete(`/recentwork/delete/${id}`);
