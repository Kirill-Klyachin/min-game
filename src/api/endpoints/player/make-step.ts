import { instance } from "api";
import { PLAYER } from "constants/api";
import { MakeStepParams, MakeStepResponse } from "./types";

export const makeStep = async (body: MakeStepParams, id: number) =>
  instance.patch<MakeStepResponse>(PLAYER, body, { params: { id } });
