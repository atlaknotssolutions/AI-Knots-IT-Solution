import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/category/portfolio",
});

// CREATE
export const createCategoryApi = (data) => API.post("/create", data);

// GET ALL
export const getCategoriesApi = () => API.get("/");

// UPDATE
export const updateCategoryApi = (id, data) => API.put(`/update/${id}`, data);

// DELETE
export const deleteCategoryApi = (id) => API.delete(`/${id}`);
