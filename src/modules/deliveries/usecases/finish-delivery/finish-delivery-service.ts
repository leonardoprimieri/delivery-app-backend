import { FinishDeliveryDTO } from "@modules/deliveries/dtos/finish-delivery-dto";
import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class FinishDeliveryService {
  async execute({ id_delivery, id_deliveryman }: FinishDeliveryDTO) {
    const finishedDelivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });
    return finishedDelivery;
  }
}
