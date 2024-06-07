import { IAccessToken } from "../interface/token.interface";
import { IJWTToken } from "../interface/jwt.interface";
import { Request } from "express";
import { decodeJwt } from "jose";

export function BearerToJWT(bearerToken: string): IJWTToken {
  const token = bearerToken.split(" ")[1];

  const JWTToken = tokenToJWT(token);

  return JWTToken as IJWTToken;
}

export function tokenToJWT(token: string): IJWTToken {
  return decodeJwt(token) as IJWTToken;
}

export function requestToToken(req: Request): string | null {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const accessToken = authorization.split(" ")[1];

  return accessToken as IAccessToken;
}
