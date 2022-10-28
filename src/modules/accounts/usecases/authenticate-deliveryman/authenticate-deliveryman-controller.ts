import { AuthenticateDeliverymanUsecase } from "@modules/accounts/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateDeliverymanUsecase = container.resolve(AuthenticateDeliverymanUsecase);

    const token = await authenticateDeliverymanUsecase.execute({
      password,
      username,
    });

    return response.status(200).json({
      accessToken: token,
    });
  }
}
