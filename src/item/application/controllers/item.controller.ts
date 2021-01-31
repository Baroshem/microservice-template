import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CreateItemDto, GetItemsDto, UpdateItemDto } from '../../dtos';
import { ItemEntity } from '../../infrastructure/entities';
import { ItemService } from '../../services';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  async getItemById(id: number): Promise<ItemEntity> {
    return this.itemService.getItemById(id);
  }

  @MessagePattern({ role: 'item', cmd: 'get-many' })
  async getItems(getItemsDto: GetItemsDto): Promise<ItemEntity[]> {
    return this.itemService.getItems(getItemsDto);
  }

  @MessagePattern({ role: 'item', cmd: 'create' })
  async createItem(createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.itemService.createItem(createItemDto);
  }

  @MessagePattern({ role: 'item', cmd: 'update' })
  async updateItem(updateItemDto: UpdateItemDto): Promise<ItemEntity> {
    return this.itemService.updateItem(updateItemDto);
  }

  @MessagePattern({ role: 'item', cmd: 'delete-by-id' })
  async deleteItemById(id: number): Promise<ItemEntity> {
    return this.itemService.deleteItemById(id);
  }
}
