import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ItemOwnerNotifiedEvent } from '../../impl';

EventsHandler(ItemOwnerNotifiedEvent);
export class ItemOwnerNotifiedHandler
  implements IEventHandler<ItemOwnerNotifiedEvent> {
  handle(event: ItemOwnerNotifiedEvent) {
    console.log(`Handled ItemOwnerNotifiedEvent with data ${JSON.stringify(event)}`);
  }
}
