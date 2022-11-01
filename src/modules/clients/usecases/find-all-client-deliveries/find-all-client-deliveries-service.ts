import { prisma } from "@shared/database/prisma-client";
import { injectable } from "tsyringe";

@injectable()
export class FindAllClientDeliveriesService {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}
