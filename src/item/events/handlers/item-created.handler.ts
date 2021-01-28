import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ItemCreatedEvent } from '../impl';

@EventsHandler(ItemCreatedEvent)
export class ItemCreatedHandler implements IEventHandler<ItemCreatedEvent> {
  handle(event: ItemCreatedEvent) {
    console.log(
      `Handled ItemCreatedEvent with name: ${event.createItemDto.name}`,
    );
  }
}
