import { PLAYER_ACTION } from "constants/player";
import { Coordinates } from "types";

export type MakeStepParams = {
  action: PLAYER_ACTION;
};

export type MakeStepResponse = {
  coordinates: Coordinates;
};

export type GetPlayerParams = {
  id: number;
};

export type GetPlayerResponse = {
  coordinates: Coordinates;
};
