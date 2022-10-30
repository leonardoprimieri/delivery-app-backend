import {
  AuthenticateClientController,
  AuthenticateDeliverymanController,
} from "@modules/accounts/usecases";
import { CreateClientController } from "@modules/clients/usecases";
import {
  CreateDeliveryController,
  FindAllAvailableDeliveriesController,
} from "@modules/deliveries/usecases";
import { CreateDeliverymanController } from "@modules/deliveryman/usecases";
import { ensureAuthenticateClient } from "@shared/middlewares/ensure-authenticate-client";
import { ensureAuthenticateDeliveryman } from "@shared/middlewares/ensure-authenticate-deliveryman";
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const findAllAvailableDeliveries = new FindAllAvailableDeliveriesController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/deliveries/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get(
  "/deliveries/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableDeliveries.handle
);

export { routes };
