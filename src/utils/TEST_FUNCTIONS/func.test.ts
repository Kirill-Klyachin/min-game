import { defineLightColor, LIGHT_COLORS, PortOrFiberColor } from "./func1";

test("Testing color", () => {
  expect(defineLightColor({ color: PortOrFiberColor.Black })).toBeFalsy();
  expect(defineLightColor({ color: PortOrFiberColor.White })).toBeTruthy();
});
