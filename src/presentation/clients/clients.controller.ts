import { Controller, Get } from '@nestjs/common';
import { GetAllClientsUsecase } from '../../domain/usecases/clients/get_all_clients/get_all_clients.usecase';

@Controller('clients')
export class ClientsController {

    constructor( private getAllClientsUsecase: GetAllClientsUsecase) {}
    @Get()
    getAllClients() {
       return this.getAllClientsUsecase.execute();
    }
}
