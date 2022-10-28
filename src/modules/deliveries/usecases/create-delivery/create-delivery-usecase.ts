import { CreateDeliveryDTO } from "@modules/deliveries/dtos/create-delivery-dto";
import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class CreateDeliveryUsecase {
  async execute({ id_client, item_name }: CreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
