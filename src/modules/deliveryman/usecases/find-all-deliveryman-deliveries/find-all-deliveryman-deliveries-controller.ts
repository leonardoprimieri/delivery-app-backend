import { FindAllDeliverymanDeliveriesService } from "@modules/deliveryman/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FindAllDeliverymanDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliverymanDeliveriesService = container.resolve(
      FindAllDeliverymanDeliveriesService
    );

    const deliverymanDeliveries = await findAllDeliverymanDeliveriesService.execute(id_deliveryman);

    return response.status(200).json(deliverymanDeliveries);
  }
}
