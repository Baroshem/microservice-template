import { Global, Module } from '@nestjs/common';
import { EventStoreModule, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store';

import { ItemCreatedEvent, ItemDeletedEvent, ItemOwnerNotifiedEvent, ItemUpdatedEvent } from './events/impl';
import { ItemRepository } from './repositories';
import { EventHandlers } from './events/handlers';
import { ItemSagas } from './sagas';

@Global()
@Module({
    imports: [
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
    ],
    providers: [
        ItemRepository,
        ItemSagas,
        ...EventHandlers,
    ],
    exports: [
        ItemRepository,
    ]
})
export class DomainModule {}
