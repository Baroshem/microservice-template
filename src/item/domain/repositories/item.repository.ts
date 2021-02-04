import { Injectable } from '@nestjs/common';

import { CreateItemDto, UpdateItemDto } from '@application/dtos';
import { Item } from '../models';
import { ItemEventType } from '../types';

@Injectable()
export class ItemRepository {
  public item: Item;

  deleteItem(id: number): Item {
    this.item = new Item(id);

    this.item.deleteItem();

    return this.item;
  }

  createItem(createItemDto: CreateItemDto): Item {
    this.item = new Item();

    this.item.createItem(createItemDto);

    return this.item;
  }

  updateItem(updateItemDto: UpdateItemDto): Item {
    this.item = new Item();

    this.item.updateItem(updateItemDto);

    return this.item;
  }

  notifyItemOwner(event: ItemEventType): Item {
    this.item = new Item();

    this.item.notifyItemOwner(event);

    return this.item;
  }
}
