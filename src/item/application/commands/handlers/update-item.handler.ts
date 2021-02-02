import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { UpdateItemCommand } from '../impl';
import { ItemEntity } from '../../../infrastructure/entities';
import { ItemRepository } from '../../../domain/repositories';
import { ItemWriteRepository } from '../../../infrastructure/repositories';
import { validateDbError } from '../../../../database/helpers';

@CommandHandler(UpdateItemCommand)
export class UpdateItemHandler implements ICommandHandler<UpdateItemCommand> {
  constructor(
    @InjectRepository(ItemWriteRepository)
    private readonly itemWriteRepository: ItemWriteRepository,
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateItemCommand): Promise<ItemEntity> {
    const { updateItemDto } = command;

    const item = await this.itemWriteRepository.findOne(updateItemDto.id);

    if (!item)
      throw new RpcException({
        statusCode: 404,
        errorStatus: 'Item not found',
      });

    item.name = updateItemDto.name;

    try {
      await item.save();

      const itemModel = await this.publisher.mergeObjectContext(
        this.itemRepository.updateItem(updateItemDto),
      );

      itemModel.commit();

      return item;
    } catch (error) {
      const { code, message } = validateDbError(error.code);

      throw new RpcException({ statusCode: code, errorStatus: message });
    }
  }
}
