import { CreateDeliveryDTO } from "@modules/deliveries/dtos/create-delivery-dto";
import { CreateDeliveryUsecase } from "@modules/deliveries/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { id_client, item_name } = request.body;

    const createDeliveryUsecase = container.resolve(CreateDeliveryUsecase);

    const delivery = await createDeliveryUsecase.execute({
      id_client,
      item_name,
    });

    return response.status(201).json(delivery);
  }
}
