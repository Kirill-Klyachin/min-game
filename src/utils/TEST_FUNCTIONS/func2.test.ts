import { delay } from "./func2";

describe("TEST ASYNC FUNCTION", () => {
  test("test-1", async () => {
    const res = await delay(() => 1 + 2, 1000);

    expect(res).toBe(3);
  });
});
