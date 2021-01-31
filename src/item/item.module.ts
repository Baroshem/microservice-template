import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { ItemService } from './services';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    CqrsModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  providers: [
    ConfigService,
    ItemService,
  ],
})
export class ItemModule {}
