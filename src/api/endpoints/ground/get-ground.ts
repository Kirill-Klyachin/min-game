import { instance } from "api";
import { GROUND } from "constants/api";
import { Response } from "./types";

export const getGound = async () => instance.get<Response>(GROUND);
