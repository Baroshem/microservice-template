import { AggregateRoot } from '@nestjs/cqrs';

import { ItemDeletedEvent } from '../events/impl';

export class Item extends AggregateRoot {
  constructor(private readonly id: number) {
    super();
  }

  deleteItem() {
    this.apply(new ItemDeletedEvent(this.id));
  }
}
