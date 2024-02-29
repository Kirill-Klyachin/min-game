import { instance } from "api";
import { LOGIN } from "constants/api";
import { LoginParams, LoginResponse } from "./types";

export const logIn = async (body: LoginParams) =>
  instance.post<LoginResponse>(LOGIN, body);
