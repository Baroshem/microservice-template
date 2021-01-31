import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteItemByIdCommand } from '../impl';
import { RpcExceptionService, ErrorValidationService } from '../../../../utils';
import { ItemEntity } from '../../../entities';
import { ItemWriteRepository, ItemRepository } from '../../../repositories';

@CommandHandler(DeleteItemByIdCommand)
export class DeleteItemByIdHandler
  implements ICommandHandler<DeleteItemByIdCommand> {
  constructor(
    @InjectRepository(ItemWriteRepository)
    private readonly itemWriteRepository: ItemWriteRepository,
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
    private readonly rpcExceptionService: RpcExceptionService,
    private readonly errorValidationService: ErrorValidationService,
  ) {}

  async execute(command: DeleteItemByIdCommand): Promise<ItemEntity> {
    const item = await this.itemWriteRepository.findOne(command.id);

    if (!item)
      this.rpcExceptionService.throwNotFound(
        'Cannot delete item because the item was not found',
      );

    try {
      await this.itemWriteRepository.delete(item);

      const itemModel = this.publisher.mergeObjectContext(
        await this.itemRepository.deleteItem(command.id),
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
