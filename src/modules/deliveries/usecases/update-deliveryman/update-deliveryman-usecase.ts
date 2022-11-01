import { UpdateDeliverymanDTO } from "@modules/deliveries/dtos/update-deliveryman-dto";
import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class UpdateDeliverymanUsecase {
  async execute({ id_delivery, id_deliveryman }: UpdateDeliverymanDTO) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return result;
  }
}
