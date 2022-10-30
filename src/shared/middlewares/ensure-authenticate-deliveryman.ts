import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateDeliveryman(
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
    const { sub: id_deliveryman } = verify(token, String(process.env.JWT_SECRET_DELIVERYMAN));
    request.id_deliveryman = String(id_deliveryman);
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}
