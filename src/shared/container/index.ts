import {
  AuthenticateClientService,
  AuthenticateDeliverymanService,
} from "@modules/accounts/usecases";
import { CreateClientService, FindAllClientDeliveriesService } from "@modules/clients/usecases";
import {
  FindAllAvailableDeliveriesService,
  FinishDeliveryService,
  UpdateDeliverymanService,
} from "@modules/deliveries/usecases";
import {
  CreateDeliverymanService,
  FindAllDeliverymanDeliveriesService,
} from "@modules/deliveryman/usecases";
import { container } from "tsyringe";

container.registerSingleton("CreateClientService", CreateClientService);
container.registerSingleton("AuthenticateClientService", AuthenticateClientService);
container.registerSingleton("CreateDeliverymanService", CreateDeliverymanService);
container.registerSingleton("AuthenticateDeliverymanService", AuthenticateDeliverymanService);
container.registerSingleton("FindAllAvailableDeliveriesService", FindAllAvailableDeliveriesService);
container.registerSingleton("UpdateDeliverymanService", UpdateDeliverymanService);
container.registerSingleton("FindAllClientDeliveriesService", FindAllClientDeliveriesService);
container.registerSingleton(
  "FindAllDeliverymanDeliveriesService",
  FindAllDeliverymanDeliveriesService
);
container.registerSingleton("FinishDeliveryService", FinishDeliveryService);
