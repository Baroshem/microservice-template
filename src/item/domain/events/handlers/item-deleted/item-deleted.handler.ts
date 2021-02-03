import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ItemDeletedEvent } from '../../impl';

@EventsHandler(ItemDeletedEvent)
export class ItemDeletedHandler implements IEventHandler<ItemDeletedEvent> {
  handle(event: ItemDeletedEvent) {
    console.log(`Handled ItemDeletedEvent with ID: ${event.itemId}`);
  }
}
