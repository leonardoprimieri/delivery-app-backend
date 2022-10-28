import { CreateClientUsecase } from "@modules/clients/usecases";
import { container } from "tsyringe";

container.registerSingleton("CreateClientUsecase", CreateClientUsecase);
