import { AuthenticateClientController } from "@modules/accounts/usecases";
import { CreateClientController } from "@modules/clients/usecases";
import { CreateDeliverymanController } from "@modules/deliveryman/usecases";
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };
