import {
  AuthenticateClientUsecase,
  AuthenticateDeliverymanUsecase,
} from "@modules/accounts/usecases";
import { CreateClientUsecase } from "@modules/clients/usecases";
import { FindAllAvailableDeliveriesUsecase } from "@modules/deliveries/usecases";
import { UpdateDeliverymanUsecase } from "@modules/deliveries/usecases";
import { CreateDeliverymanUsecase } from "@modules/deliveryman/usecases";
import { container } from "tsyringe";

container.registerSingleton("CreateClientUsecase", CreateClientUsecase);
container.registerSingleton("AuthenticateClientUsecase", AuthenticateClientUsecase);
container.registerSingleton("CreateDeliverymanUsecase", CreateDeliverymanUsecase);
container.registerSingleton("AuthenticateDeliverymanUsecase", AuthenticateDeliverymanUsecase);
container.registerSingleton("FindAllAvailableDeliveriesUsecase", FindAllAvailableDeliveriesUsecase);
container.registerSingleton("UpdateDeliverymanUsecase", UpdateDeliverymanUsecase);
