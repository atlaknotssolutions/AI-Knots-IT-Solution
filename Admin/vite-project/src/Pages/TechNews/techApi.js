// src/api/techApi.js
import axios from "axios";

// Base URL (change this to your production URL later)
const API_BASE_URL = "http://localhost:8000"; // Change to your production URL when deploying

// Optional: Create an axios instance with baseURL (recommended)
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createTechApi = (data) => api.post("/tech/create", data);

export const getCategoriesApi = () => api.get("/api/category"); // Adjust endpoint if needed

export const getTechApi = () => api.get("/tech");

export const updateTechApi = (id, data) => api.put(`/tech/update/${id}`, data);

export const deleteTechApi = (id) => api.delete(`/tech/delete/${id}`);
