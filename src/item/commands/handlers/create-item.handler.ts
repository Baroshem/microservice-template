import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";

import { ErrorValidationService, RpcExceptionService } from "../../../utils";
import { ItemEntity } from "../../entities";
import { ItemRepository, ItemWriteRepository } from "../../repositories";
import { CreateItemCommand } from "../impl";

@CommandHandler(CreateItemCommand)
export class CreateItemHandler implements ICommandHandler<CreateItemCommand> {
    constructor(
        @InjectRepository(ItemWriteRepository)
        private readonly itemWriteRepository: ItemWriteRepository,
        private readonly itemRepository: ItemRepository,
        private readonly publisher: EventPublisher,
        private readonly rpcExceptionService: RpcExceptionService,
        private readonly errorValidationService: ErrorValidationService,
    ) {}

    async execute(command: CreateItemCommand): Promise<ItemEntity> {
        const { createItemDto } = command;

        const item = this.itemWriteRepository.create();

        item.name = createItemDto.name;

        try {
            await item.save();

            const itemModel = this.publisher.mergeObjectContext(
                await this.itemRepository.createItem(createItemDto)
            )

            itemModel.commit();
            
            return item;
        } catch (error) {
            const errorObject = this.errorValidationService.validateDbError(error.code);

            this.rpcExceptionService.throwCatchedException(errorObject);
        }
    }
}