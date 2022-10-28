import { AuthenticateClientUsecase } from "@modules/accounts/usecases";
import { CreateClientUsecase } from "@modules/clients/usecases";
import { container } from "tsyringe";

container.registerSingleton("CreateClientUsecase", CreateClientUsecase);
container.registerSingleton("AuthenticateClientUsecase", AuthenticateClientUsecase);
