export type GetOtherPlayersParams = {
  id: number;
};

export type GetOtherPlayersResponse = {
  players: {
    id: number;
    name: string;
    isOnline: number;
    x: number;
    y: number;
  }[];
};
