import { AuthenticateUserUsecase } from "@modules/accounts/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateController {
  async handle(request: Request, response: Response) {
    const authenticateUserUsecase = container.resolve(AuthenticateUserUsecase);
  }
}
