import {
  AuthenticateClientController,
  AuthenticateDeliverymanController,
} from "@modules/accounts/usecases";
import {
  CreateClientController,
  FindAllClientDeliveriesController,
} from "@modules/clients/usecases";
import {
  CreateDeliveryController,
  FindAllAvailableDeliveriesController,
  FinishDeliveryController,
  UpdateDeliverymanController,
} from "@modules/deliveries/usecases";
import {
  CreateDeliverymanController,
  FindAllDeliverymanDeliveriesController,
} from "@modules/deliveryman/usecases";
import { ensureAuthenticateClient } from "@shared/middlewares/ensure-authenticate-client";
import { ensureAuthenticateDeliveryman } from "@shared/middlewares/ensure-authenticate-deliveryman";
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllClientDeliveries = new FindAllClientDeliveriesController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllDeliverymanDeliveries = new FindAllDeliverymanDeliveriesController();

const createDeliveryController = new CreateDeliveryController();

const findAllAvailableDeliveries = new FindAllAvailableDeliveriesController();

const updateDeliverymanController = new UpdateDeliverymanController();
const finishDeliveryController = new FinishDeliveryController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllClientDeliveries.handle);

routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliverymanDeliveries.handle
);

routes.put(
  "/deliveries/:id/update-deliveryman",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);
routes.put(
  "/deliveries/:id/finish-delivery",
  ensureAuthenticateDeliveryman,
  finishDeliveryController.handle
);
routes.post("/deliveries/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get(
  "/deliveries/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableDeliveries.handle
);

export { routes };
