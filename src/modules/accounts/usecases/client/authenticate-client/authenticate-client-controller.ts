import { AuthenticateClientService } from "@modules/accounts/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateClientService = container.resolve(AuthenticateClientService);

    const token = await authenticateClientService.execute({
      password,
      username,
    });

    return response.status(200).json({
      accessToken: token,
    });
  }
}
