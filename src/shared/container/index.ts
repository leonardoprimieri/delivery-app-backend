import { AuthenticateClientUsecase } from "@modules/accounts/usecases";
import { CreateClientUsecase } from "@modules/clients/usecases";
import { CreateDeliverymanUsecase } from "@modules/deliveryman/usecases";
import { container } from "tsyringe";

container.registerSingleton("CreateClientUsecase", CreateClientUsecase);
container.registerSingleton("AuthenticateClientUsecase", AuthenticateClientUsecase);
container.registerSingleton("CreateDeliverymanUsecase", CreateDeliverymanUsecase);
