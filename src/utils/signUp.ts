import axios from "axios";
import { IUser } from "../types/User";

const BASE_URL = "http://localhost:8001/api/v1/auth";

export const authApi = axios.create({ baseURL: BASE_URL });

export const signUp = async (user: IUser) => {
  const response = await authApi.post("/signup", user);
  return response;
};
