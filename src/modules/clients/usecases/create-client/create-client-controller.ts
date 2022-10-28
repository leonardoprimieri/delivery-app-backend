import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUsecase } from "./create-client-usecase";

export class CreateClientController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const { password, username } = request.body;

    const createClientUsecase = container.resolve(CreateClientUsecase);

    const client = await createClientUsecase.execute({
      password,
      username,
    });

    return response.status(201).json(client);
  }
}
