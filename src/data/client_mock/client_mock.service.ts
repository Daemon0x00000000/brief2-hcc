import { Injectable } from '@nestjs/common';
import { Client } from 'src/domain/models/client';

@Injectable()
export class ClientMockService {
    getAllClients() {
        return [
            new Client('John', 'Doe'),
            new Client('Jihn', 'Due'),
            new Client('Jahn', 'Dee'),
        ];
    }
}
