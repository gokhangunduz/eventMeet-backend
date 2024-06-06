export const generateId: string = [...Array(48)]
  .map(() => Math.random().toString(36)[2] || "0")
  .join("");

export const generateCurrentUnixTimeStamp: number = Math.floor(
  Date.now() / 1000
);
