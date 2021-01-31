import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { ItemRepository } from '../../../repositories';
import { NotifyItemOwnerCommand } from '../impl';

@CommandHandler(NotifyItemOwnerCommand)
export class NotifyItemOwnerHandler
  implements ICommandHandler<NotifyItemOwnerCommand> {
  constructor(
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: NotifyItemOwnerCommand) {
    const itemModel = this.publisher.mergeObjectContext(
      await this.itemRepository.notifyItemOwner(command.event),
    );

    itemModel.commit();
  }
}
