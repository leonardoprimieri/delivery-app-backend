import auth from "config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id_client } = verify(token, auth.clientSecret);
    request.id_client = String(id_client);
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}
