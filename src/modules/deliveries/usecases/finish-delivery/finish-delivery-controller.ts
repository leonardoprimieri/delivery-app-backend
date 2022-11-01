import { FinishDeliveryService } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FinishDeliveryController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const finishDeliveryService = container.resolve(FinishDeliveryService);
    const finishedDelivery = await finishDeliveryService.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.status(201).json(finishedDelivery);
  }
}
