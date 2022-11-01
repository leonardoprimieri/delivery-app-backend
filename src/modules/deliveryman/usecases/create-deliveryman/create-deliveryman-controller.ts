import { CreateDeliverymanService } from "@modules/deliveryman/usecases";
import { Request, Response } from "express";
import { container, inject } from "tsyringe";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createDeliverymanService = container.resolve(CreateDeliverymanService);

    const deliveryman = await createDeliverymanService.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}
