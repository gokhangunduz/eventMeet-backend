import { IUserId } from "../interface/users.interface";

export const generateUserId: IUserId = [...Array(36)]
  .map(() => Math.random().toString(36)[2] || "0")
  .join("");

export const generateCurrentUnixTimeStamp: number = Math.floor(
  Date.now() / 1000
);
