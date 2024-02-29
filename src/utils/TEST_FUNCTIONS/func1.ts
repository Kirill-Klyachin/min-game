export enum PortOrFiberColor {
  Red = "#EF4444",
  Yellow = "#FFC107",
  Green = "#22C55E",
  Blue = "#184BFF",
  Brown = "#664D03",
  Black = "#212121",
  Orange = "#F97316",
  Purple = "#792ED8",
  White = "#FFFFFF",
  Gray = "#92969D",
  Teal = "#30CDFF",
  Pink = "#EC4899",
  LightGreen = "#3BEB1E",
  Olive = "#92AC28",
  Beige = "#C6BC87",
  Natural = "#E1E3E4",
  None = "",
}

export const LIGHT_COLORS = [PortOrFiberColor.White];

type Params = {
  color: string;
};

export const defineLightColor = ({ color }: Params) => {
  const isColorWhite = LIGHT_COLORS.some(
    (item) => item.toLocaleLowerCase() === color.toLocaleLowerCase()
  );

  return isColorWhite;
};
