export const delay = (func: () => number, ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(func()), ms);
  });
};
