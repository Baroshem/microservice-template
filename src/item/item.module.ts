import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { ItemController } from './controllers';
import { ItemService } from './services';
import { ItemSagas } from './sagas';
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
  controllers: [ItemController],
  providers: [
    ConfigService,
    ItemService,
    ItemSagas,
  ],
})
export class ItemModule {}
