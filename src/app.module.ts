import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { ScheduleModule } from '@nestjs/schedule';

import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { UtilsModule } from './utils/utils.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TerminusModule,
    ScheduleModule.forRoot(),
    DatabaseModule,
    UtilsModule,
    HealthModule,
    ItemModule,
  ],
})
export class AppModule {}
