import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { ItemEntity } from '../entity';
import { ItemService } from '../services';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  async getItemById(id: number): Promise<ItemEntity> {
    return this.itemService.getItemById(id);
  }

  @MessagePattern({ role: 'item', cmd: 'delete-by-id' })
  async deleteItemById(id: number): Promise<ItemEntity> {
    return this.itemService.deleteItemById(id);
  }
}
