import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const searchEmployees = async (query) => {
  const response = await axios.get(`${API_BASE}/employees`, {
    params: { search: query }
  });
  console.log("API Response:", response.data);
  return response.data;
};
