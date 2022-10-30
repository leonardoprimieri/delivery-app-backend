import { FindAllAvailableDeliveriesController } from "@modules/deliveries/usecases";
import { prisma } from "@shared/database/prisma-client";
import { container, injectable } from "tsyringe";

@injectable()
export class FindAllAvailableDeliveriesUsecase {
  async execute() {
    const allAvailableDeliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return allAvailableDeliveries;
  }
}
