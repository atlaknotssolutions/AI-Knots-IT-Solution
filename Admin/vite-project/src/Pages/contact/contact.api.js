import axios from "axios";

const API = "http://localhost:8000/api/contact";

// GET All Contacts
export const getContactsApi = () => {
  return axios.get(API);
};

// DELETE Contact
export const deleteContactApi = (id) => {
  return axios.delete(`${API}/${id}`);
};
