import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { ItemEntity } from '../entities';
import {
  CreateItemCommand,
  DeleteItemByIdCommand,
  UpdateItemCommand,
} from '../commands/impl';
import { GetItemByIdQuery } from '../queries/impl';
import { CreateItemDto, UpdateItemDto } from '../dtos';

@Injectable()
export class ItemService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async getItemById(id: number): Promise<ItemEntity> {
    return this.queryBus.execute(new GetItemByIdQuery(id));
  }

  async createItem(createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.commandBus.execute(new CreateItemCommand(createItemDto));
  }

  async updateItem(updateItemDto: UpdateItemDto): Promise<ItemEntity> {
    return this.commandBus.execute(new UpdateItemCommand(updateItemDto));
  }

  async deleteItemById(id: number): Promise<ItemEntity> {
    return this.commandBus.execute(new DeleteItemByIdCommand(id));
  }
}
