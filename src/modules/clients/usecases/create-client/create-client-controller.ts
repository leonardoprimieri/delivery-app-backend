import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientService } from "./create-client-service";

export class CreateClientController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const { password, username } = request.body;

    const createClientService = container.resolve(CreateClientService);

    const client = await createClientService.execute({
      password,
      username,
    });

    return response.status(201).json(client);
  }
}
