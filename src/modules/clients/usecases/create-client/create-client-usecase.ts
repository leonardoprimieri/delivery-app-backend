import { CreateClientDTO } from "../../dtos/create-client-dto";

import { hash } from "bcrypt";
import { injectable } from "tsyringe";
import { prisma } from "@shared/database/prisma-client";
import { AppError } from "@shared/errors";

@injectable()
export class CreateClientUsecase {
  async execute({ username, password }: CreateClientDTO) {
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (clientAlreadyExists) {
      throw new AppError("Client already exists");
    }

    const hashedPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return client;
  }
}
