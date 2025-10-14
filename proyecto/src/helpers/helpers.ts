export const randomNumber = ({ x, y }: { x: number; y: number }) =>
  Math.floor(Math.random() * (y - x + 1) + x);
