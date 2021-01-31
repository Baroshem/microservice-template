import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  EventStoreModule,
  EventStoreSubscriptionType,
} from '@juicycleff/nestjs-event-store';

import { EventHandlers } from './events/handlers';
import { ItemController } from './controllers';
import { ItemService } from './services';
import { ItemSagas } from './sagas';
import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemUpdatedEvent,
  ItemOwnerNotifiedEvent,
} from './events/impl';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    CqrsModule,
    EventStoreModule.registerFeature({
      featureStreamName: '$ce-item',
      type: 'event-store',
      subscriptions: [
        {
          type: EventStoreSubscriptionType.CatchUp,
          stream: '$ce-item',
        },
      ],
      eventHandlers: {
        ItemCreatedEvent: (data) => new ItemCreatedEvent(data),
        ItemUpdatedEvent: (data) => new ItemUpdatedEvent(data),
        ItemDeletedEvent: (data) => new ItemDeletedEvent(data),
        ItemOwnerNotifiedEvent: (data) => new ItemOwnerNotifiedEvent(data),
      },
    }),
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  controllers: [ItemController],
  providers: [
    ConfigService,
    ...EventHandlers,
    ItemService,
    ItemSagas,
  ],
})
export class ItemModule {}
