import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ItemModule } from './item/item.module';
import { EventStoreWrapperModule } from './event-store/event-store-wrapper.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    EventStoreWrapperModule,
    HealthModule,
    ItemModule,
  ],
})
export class AppModule {}
