import environments from "../providers/environments.provider";
import User from "../class/user.class";
import * as jwt from "jose";

export async function generateToken(user: User): Promise<{
  accessToken: string;
  refreshToken: string;
}> {
  const secretKey = new TextEncoder().encode(environments.jwt.secret);

  const payload = {
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  const accessToken = await new jwt.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(environments.jwt.accessTokenExp)
    .sign(Uint8Array.from(secretKey));

  const refreshToken = await new jwt.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(environments.jwt.refreshTokenExp)
    .sign(Uint8Array.from(secretKey));

  return { accessToken, refreshToken };
}

export async function verifyToken(
  token: string
): Promise<{ isValid: boolean; message: string }> {
  const secretKey = new TextEncoder().encode(environments.jwt.secret);

  const result = await jwt
    .jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    })
    .then(() => {
      return {
        isValid: true,
        message: "Token is valid.",
      };
    })
    .catch((error) => {
      return {
        isValid: false,
        message: String(error?.code) || "Token is invalid.",
      };
    });

  return result;
}
