import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [DataModule, PresentationModule, DomainModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
