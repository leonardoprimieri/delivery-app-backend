import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class FindAllDeliverymanDeliveriesService {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}
