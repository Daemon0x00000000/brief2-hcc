import { Get, Module } from '@nestjs/common';
import { ClientsController } from './clients/clients.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GetAllClientsUsecase } from 'src/domain/usecases/clients/get_all_clients/get_all_clients.usecase';

@Module({
  imports: [DomainModule],
  controllers: [ClientsController],
  providers: [GetAllClientsUsecase],
})
export class PresentationModule {}
