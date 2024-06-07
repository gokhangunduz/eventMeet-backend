import User from "../class/user.class";

export type Iiat = number;
export type Iexp = number;

export interface IJWTToken extends User {
  iat: Iiat;
  exp: Iexp;
}
