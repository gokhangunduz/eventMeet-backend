import { IAccessToken } from "../interface/token.interface";
import { IJWTToken } from "../interface/jwt.interface";
import { Request } from "express";
import { decodeJwt } from "jose";

export function getJWTFromBearerToken(bearerToken: string): IJWTToken {
  const token = bearerToken.split(" ")[1];

  const JWTToken = getJWTFromToken(token);

  return JWTToken as IJWTToken;
}

export function getJWTFromToken(token: string): IJWTToken {
  return decodeJwt(token) as IJWTToken;
}

export function getTokenFromRequest(req: Request): string | null {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const accessToken = authorization.split(" ")[1];

  return accessToken as IAccessToken;
}

export function getJWTFromRequest(req: Request): IJWTToken {
  const { authorization } = req.headers;

  const accessToken = authorization!.split(" ")[1];

  return getJWTFromToken(accessToken) as IJWTToken;
}
