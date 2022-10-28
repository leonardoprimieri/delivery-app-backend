import { prisma } from "@shared/database/prisma-client";
import { AppError } from "@shared/errors";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable } from "tsyringe";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

@injectable()
export class AuthenticateDeliverymanUsecase {
  async execute({ password, username }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new AppError("Username or password invalid", 401);
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new AppError("Username or password invalid", 401);
    }

    const token = sign({ username }, String(process.env.JWT_SECRET), {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
