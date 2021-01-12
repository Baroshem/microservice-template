import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteItemByIdCommand } from '../impl';
import { ItemRepository } from '../../../db/repositories';
import { RpcExceptionService } from '../../../utils/exception-handling';

@CommandHandler(DeleteItemByIdCommand)
export class DeleteItemByIdHandler
  implements ICommandHandler<DeleteItemByIdCommand> {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(command: DeleteItemByIdCommand) {
    const item = await this.itemRepository.findOne(command.id);

    if (!item) this.rpcExceptionService.throwNotFound('Cannot delete item because the item was not found');

    try {
      await this.itemRepository.delete(item)
    } catch (error) {
      this.rpcExceptionService.throwCatchedException(error);
    }
  }
}
