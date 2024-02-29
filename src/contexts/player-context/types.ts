import { PLAYER_ACTION } from "constants/player";

export type TPlayerContext = {
  id: number;
  coordinates: number[];
  action: PLAYER_ACTION | null;
};

export type TActionsPlayerContext = {
  setId:
    | React.Dispatch<React.SetStateAction<TPlayerContext["id"]>>
    | (() => null);
  setCoordinates:
    | React.Dispatch<React.SetStateAction<TPlayerContext["coordinates"]>>
    | (() => null);
  setAction:
    | React.Dispatch<React.SetStateAction<TPlayerContext["action"]>>
    | (() => null);
};
