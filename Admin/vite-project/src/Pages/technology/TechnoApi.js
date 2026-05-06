// src/api/techApi.js
import axios from "axios";

// Base URL (change this to your production URL later)
const API_BASE_URL = "http://localhost:8000";

// Optional: Create an axios instance with baseURL (recommended)
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createTechApi = (data) =>
  api.post("/api/technology/product/create", data);

export const getCategoriesApi = () => api.get("/api/technology/category"); // Adjust endpoint if needed

export const getTechApi = () => api.get("/api/technology/product");

export const updateTechApi = (id, data) =>
  api.put(`/api/technology/product/update/${id}`, data);

export const deleteTechApi = (id) =>
  api.delete(`/api/technology/product/delete/${id}`);
