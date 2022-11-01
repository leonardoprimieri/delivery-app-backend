import { prisma } from "@shared/database/prisma-client";
import { AppError } from "@shared/errors";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable } from "tsyringe";

interface IAuthenticateClient {
  username: string;
  password: string;
}

@injectable()
export class AuthenticateClientService {
  async execute({ password, username }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new AppError("Username or password invalid", 401);
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new AppError("Username or password invalid", 401);
    }

    const token = sign({ username }, String(process.env.JWT_SECRET_CLIENT), {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
