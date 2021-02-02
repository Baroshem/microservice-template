import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { DeleteItemByIdCommand } from '../impl';
import { ErrorValidationService } from '../../../../utils';
import { ItemEntity } from '../../../infrastructure/entities';
import { ItemRepository } from '../../../domain/repositories';
import { ItemWriteRepository } from '../../../infrastructure/repositories';

@CommandHandler(DeleteItemByIdCommand)
export class DeleteItemByIdHandler
  implements ICommandHandler<DeleteItemByIdCommand> {
  constructor(
    @InjectRepository(ItemWriteRepository)
    private readonly itemWriteRepository: ItemWriteRepository,
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
    private readonly errorValidationService: ErrorValidationService,
  ) {}

  async execute(command: DeleteItemByIdCommand): Promise<ItemEntity> {
    const item = await this.itemWriteRepository.findOne(command.id);

    if (!item) throw new RpcException({ statusCode: 404, errorStatus: 'Cannot delete item because the item was not found' })

    try {
      await this.itemWriteRepository.delete(item);

      const itemModel = this.publisher.mergeObjectContext(
        await this.itemRepository.deleteItem(command.id),
      );
      itemModel.commit();

      return item;
    } catch (error) {
      const { code, message } = this.errorValidationService.validateDbError(
        error.code,
      );

      throw new RpcException({ statusCode: code, errorStatus: message })
    }
  }
}
