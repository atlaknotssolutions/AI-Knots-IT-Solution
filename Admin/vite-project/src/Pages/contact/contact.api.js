import axios from "axios";

const API = "https://ai-knots-it-solution.onrender.com/api/contact";

// GET All Contacts
export const getContactsApi = () => {
  return axios.get(API);
};

// DELETE Contact
export const deleteContactApi = (id) => {
  return axios.delete(`${API}/${id}`);
};
