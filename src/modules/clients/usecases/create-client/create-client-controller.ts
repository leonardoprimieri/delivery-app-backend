import { Request, Response } from "express";
import { CreateClientUsecase } from "./create-client-usecase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { password, username } = request.body;
    const createClientUsecase = new CreateClientUsecase();

    const client = await createClientUsecase.execute({
      password,
      username,
    });

    return response.status(201).json(client);
  }
}
