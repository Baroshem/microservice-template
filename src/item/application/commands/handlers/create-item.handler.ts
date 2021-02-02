import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { ItemEntity } from '../../../infrastructure/entities';
import { ItemRepository } from '../../../domain/repositories';
import { ItemWriteRepository } from '../../../infrastructure/repositories';
import { CreateItemCommand } from '../impl';
import { validateDbError } from '../../../../database/helpers';

@CommandHandler(CreateItemCommand)
export class CreateItemHandler implements ICommandHandler<CreateItemCommand> {
  constructor(
    @InjectRepository(ItemWriteRepository)
    private readonly itemWriteRepository: ItemWriteRepository,
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateItemCommand): Promise<ItemEntity> {
    const { createItemDto } = command;

    const item = this.itemWriteRepository.create();

    item.name = createItemDto.name;

    try {
      await item.save();

      const itemModel = this.publisher.mergeObjectContext(
        await this.itemRepository.createItem(createItemDto),
      );

      itemModel.commit();

      return item;
    } catch (error) {
      const { code, message } = validateDbError(error.code);

      throw new RpcException({ statusCode: code, errorStatus: message });
    }
  }
}
