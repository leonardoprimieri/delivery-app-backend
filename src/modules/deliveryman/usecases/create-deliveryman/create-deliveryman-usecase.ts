import { CreateDeliverymanDTO } from "@modules/deliveryman/dtos/create-deliveryman-dto";
import { prisma } from "@shared/database/prisma-client";
import { AppError } from "@shared/errors";
import { compare, hash } from "bcrypt";
import { injectable } from "tsyringe";

@injectable()
export class CreateDeliverymanUsecase {
  async execute({ password, username }: CreateDeliverymanDTO) {
    const deliverymanAlreadyExists = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (deliverymanAlreadyExists) {
      throw new AppError("Deliveryman already exists!");
    }

    const hashedPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        password: hashedPassword,
        username,
      },
    });

    return deliveryman;
  }
}
