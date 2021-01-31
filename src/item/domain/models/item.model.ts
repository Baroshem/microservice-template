import { AggregateRoot } from '@nestjs/cqrs';

import { CreateItemDto, UpdateItemDto } from '../../application/dtos';
import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemOwnerNotifiedEvent,
  ItemUpdatedEvent,
} from '../events/impl';
import { ItemEventType } from '../types';

export class Item extends AggregateRoot {
  constructor(private readonly id?: number) {
    super();
  }

  deleteItem() {
    this.apply(new ItemDeletedEvent(this.id));
  }

  createItem(createItemDto: CreateItemDto) {
    this.apply(new ItemCreatedEvent(createItemDto));
  }

  updateItem(updateItemDto: UpdateItemDto) {
    this.apply(new ItemUpdatedEvent(updateItemDto));
  }

  notifyItemOwner(event: ItemEventType) {
    this.apply(new ItemOwnerNotifiedEvent(event));
  }
}
