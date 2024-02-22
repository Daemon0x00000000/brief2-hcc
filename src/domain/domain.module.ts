import { Module } from '@nestjs/common';
import { DataModule } from '../data/data.module';

import { ClientMockService } from 'src/data/client_mock/client_mock.service';

@Module({
  imports: [DataModule],
  providers: [ClientMockService],
  exports: [ClientMockService]
})
export class DomainModule {}
