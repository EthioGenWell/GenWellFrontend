import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/User";
import { IResponse } from "../types/Response";

const BASE_URL = "http://localhost:8001/api/auth";

export const authApi = axios.create({ baseURL: BASE_URL });

export const signUp = async (
  user: IUser
): Promise<AxiosResponse<IResponse, IResponse>> => {
  const response = await authApi.post("/signup", user);
  return response;
};
