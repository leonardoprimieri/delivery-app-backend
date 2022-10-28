import { CreateDeliverymanUsecase } from "@modules/deliveryman/usecases";
import { Request, Response } from "express";
import { container, inject } from "tsyringe";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createDeliverymanUsecase = container.resolve(CreateDeliverymanUsecase);

    const deliveryman = await createDeliverymanUsecase.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}
