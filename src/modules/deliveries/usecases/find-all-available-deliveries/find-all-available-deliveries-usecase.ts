import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class FindAllAvailableDeliveriesUsecase {
  async execute() {
    const allAvailableDeliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return allAvailableDeliveries;
  }
}
