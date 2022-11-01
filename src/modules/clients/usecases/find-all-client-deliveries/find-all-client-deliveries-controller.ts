import { FindAllClientDeliveriesService } from "@modules/clients/usecases";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FindAllClientDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const findAllClientDeliveriesService = container.resolve(FindAllClientDeliveriesService);
    const clientDeliveries = await findAllClientDeliveriesService.execute(id_client);
    return response.status(201).json(clientDeliveries);
  }
}
