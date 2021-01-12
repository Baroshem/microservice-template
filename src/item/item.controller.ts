import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ItemEntity } from 'src/db/entities';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService,
    ) {}

    @MessagePattern({ role: 'item', cmd: 'get-by-id' })
    async getItemById(id: number): Promise<ItemEntity> {
        return this.itemService.getItemById(id);
    }
}
