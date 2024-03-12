import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfigModule } from './data/config/typeorm/database-config.module';
import { AppConfigModule } from './data/config/app-config/app-config.module';

@Module({
  imports: [DatabaseConfigModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
