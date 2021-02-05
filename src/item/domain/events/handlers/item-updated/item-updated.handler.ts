import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ItemUpdatedEvent } from '../../impl';

@EventsHandler(ItemUpdatedEvent)
export class ItemUpdatedHandler implements IEventHandler<ItemUpdatedEvent> {
  handle(event: ItemUpdatedEvent) {
    const { id, name } = event.updateItemDto;
    console.log(`Handled ItemUpdatedEvent with ID: ${id} and name: ${name}`);
  }
}
