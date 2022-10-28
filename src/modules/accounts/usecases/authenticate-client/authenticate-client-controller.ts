import { AuthenticateClientUsecase } from "@modules/accounts/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateClientUsecase = container.resolve(AuthenticateClientUsecase);

    const token = await authenticateClientUsecase.execute({
      password,
      username,
    });

    return response.status(200).json({
      accessToken: token,
    });
  }
}
