import { FindAllAvailableDeliveriesUsecase } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";

@injectable()
export class FindAllAvailableDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllAvailableDeliveriesUsecase = container.resolve(FindAllAvailableDeliveriesUsecase);
    const availableDeliveries = await findAllAvailableDeliveriesUsecase.execute();
    return response.status(200).json(availableDeliveries);
  }
}
