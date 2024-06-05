import * as jwt from "jose";

export function BearerToJWT(token: string) {
  const jwtToken = token.split(" ")[1];

  return jwt.decodeJwt(jwtToken);
}

export function tokenToJWT(token: string) {
  return jwt.decodeJwt(token) as any;
}
