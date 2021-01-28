import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { UpdateItemCommand } from '../impl';
import { RpcExceptionService, ErrorValidationService } from '../../../utils';
import { ItemEntity } from '../../entities';
import { ItemWriteRepository, ItemRepository } from '../../repositories';

@CommandHandler(UpdateItemCommand)
export class UpdateItemHandler implements ICommandHandler<UpdateItemCommand> {
  constructor(
    @InjectRepository(ItemWriteRepository)
    private readonly itemWriteRepository: ItemWriteRepository,
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
    private readonly rpcExceptionService: RpcExceptionService,
    private readonly errorValidationService: ErrorValidationService,
  ) {}

  async execute(command: UpdateItemCommand): Promise<ItemEntity> {
    const { updateItemDto } = command;

    const item = await this.itemWriteRepository.findOne(updateItemDto.id);

    if (!item) this.rpcExceptionService.throwNotFound('Item not found');

    item.name = updateItemDto.name;

    try {
      await item.save();

      const itemModel = await this.publisher.mergeObjectContext(
        this.itemRepository.updateItem(updateItemDto),
      );

      itemModel.commit();

      return item;
    } catch (error) {
      const errorObject = this.errorValidationService.validateDbError(
        error.code,
      );

      this.rpcExceptionService.throwCatchedException(errorObject);
    }
  }
}
