import { instance } from "api";
import { LOGOUT } from "constants/api";
import { LogoutParams, LogoutResponse } from "./types";

export const logout = async ({ id }: LogoutParams) =>
  instance.get<LogoutResponse>(LOGOUT, { params: { id } });
