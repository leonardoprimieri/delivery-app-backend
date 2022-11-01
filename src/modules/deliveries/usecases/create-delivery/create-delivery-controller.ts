import { CreateDeliveryService } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;

    const createDeliveryService = container.resolve(CreateDeliveryService);

    const delivery = await createDeliveryService.execute({
      id_client,
      item_name,
    });

    return response.status(201).json(delivery);
  }
}
