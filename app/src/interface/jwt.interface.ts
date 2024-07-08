import { IUserId } from "./user.interface";

export type Iiat = number;
export type Iexp = number;

export interface IJWTToken {
  id: IUserId;
  iat: Iiat;
  exp: Iexp;
}
