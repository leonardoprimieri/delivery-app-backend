import { UpdateDeliverymanService } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const updateDeliverymanService = container.resolve(UpdateDeliverymanService);

    const delivery = await updateDeliverymanService.execute({
      id_deliveryman,
      id_delivery: String(id_delivery),
    });

    return response.json(delivery);
  }
}
