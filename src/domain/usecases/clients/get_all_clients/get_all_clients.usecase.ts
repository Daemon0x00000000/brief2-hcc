import { Injectable } from '@nestjs/common';
import { get } from 'http';
import { ClientMockService } from 'src/data/client_mock/client_mock.service';

@Injectable()
export class GetAllClientsUsecase {
    constructor(private clientMockService: ClientMockService) {
        
    }
    execute() {
        return this.clientMockService.getAllClients();
    }
}
