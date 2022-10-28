import { AuthenticateClientUsecase } from "@modules/accounts/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const authenticateClientUsecase = container.resolve(AuthenticateClientUsecase);
  }
}
