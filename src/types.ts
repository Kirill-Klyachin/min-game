export type Coordinates = [number, number];

export type Chunk = {
  id: number;
  coordinates: Coordinates;
};

export type ChankRow = Chunk[];

export type Ground = ChankRow[];

export type WSMessage = {
  event: string;
  payload: any;
};
