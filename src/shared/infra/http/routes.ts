import { AuthenticateClientController } from "@modules/accounts/usecases";
import { CreateClientController } from "@modules/clients/usecases";
import { CreateDeliveryController } from "@modules/deliveries/usecases";
import { CreateDeliverymanController } from "@modules/deliveryman/usecases";
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveries/", createDeliveryController.handle);

export { routes };
