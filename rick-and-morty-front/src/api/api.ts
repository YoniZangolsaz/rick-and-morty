import axios from "axios";
import { User } from "../components/LoginForm";

export const baseUrl = import.meta.env.VITE_API_BACKEND_URL;

const getTokenHeader = () => {
  const ls = localStorage.getItem("token");

  if (!ls) return { headers: { "Cache-Control": "no-cache" } };
  return { headers: { Authorization: ls, "Cache-Control": "no-cache" } };
};

export const login = async (user: User) => {
  const loginUser = await axios.post(`${baseUrl}/users/login`, user, {});
  return loginUser.data;
};

export const getAll = async (dataType: string, pageNumber: string) => {
  const characters = await axios.get(
    `${baseUrl}/${dataType}/?page=${pageNumber}`,
    getTokenHeader()
  );
  return characters.data;
};
