import { FindAllAvailableDeliveriesService } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";

@injectable()
export class FindAllAvailableDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllAvailableDeliveriesService = container.resolve(FindAllAvailableDeliveriesService);
    const availableDeliveries = await findAllAvailableDeliveriesService.execute();
    return response.status(200).json(availableDeliveries);
  }
}
