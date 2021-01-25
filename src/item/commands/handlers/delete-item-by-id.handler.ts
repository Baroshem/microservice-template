import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteItemByIdCommand } from '../impl';
import { ItemRepository } from '../../repository';
import { RpcExceptionService } from '../../../utils/exception-handling';
import { ItemEntity } from 'src/db/entities';

@CommandHandler(DeleteItemByIdCommand)
export class DeleteItemByIdHandler
  implements ICommandHandler<DeleteItemByIdCommand> {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(command: DeleteItemByIdCommand): Promise<ItemEntity> {
    const item = await this.itemRepository.findOne(command.id);

    if (!item)
      this.rpcExceptionService.throwNotFound(
        'Cannot delete item because the item was not found',
      );

    try {
      await this.itemRepository.delete(item);

      return item;
    } catch (error) {
      this.rpcExceptionService.throwCatchedException(error);
    }
  }
}
