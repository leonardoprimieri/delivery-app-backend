import { compare } from "bcrypt";
import { prisma } from "database/prisma-client";
import { sign } from "jsonwebtoken";
import { injectable } from "tsyringe";

interface IAuthenticateClient {
  username: string;
  password: string;
}

@injectable()
export class AuthenticateClientUsecase {
  async execute({ password, username }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid");
    }

    const token = sign({ username }, String(process.env.JWT_SECRET), {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
