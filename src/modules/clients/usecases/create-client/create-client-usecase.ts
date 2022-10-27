import { prisma } from "../../../../database/prisma-client";
import { CreateClientDTO } from "../../dtos/create-client-dto";

import { hash } from "bcrypt";

export class CreateClientUsecase {
  async execute({ username, password }: CreateClientDTO) {
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientAlreadyExists) {
      throw new Error("Client already exists");
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
