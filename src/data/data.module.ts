import { Module } from '@nestjs/common';
import { ClientMockService } from './client_mock/client_mock.service';

@Module({
  providers: [ClientMockService]
})
export class DataModule {}
