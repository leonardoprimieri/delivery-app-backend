import { AuthenticateClientController } from "@modules/accounts/usecases";
import { CreateClientController } from "@modules/clients/usecases";
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

export { routes };
