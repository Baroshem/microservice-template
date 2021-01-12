import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { RpcExceptionService } from '../../../utils/exception-handling';
import { ItemRepository } from '../../../db/repositories';
import { GetItemByIdQuery } from '../impl';


@QueryHandler(GetItemByIdQuery)
export class GetItemByIdHandler
  implements IQueryHandler<GetItemByIdQuery> {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(query: GetItemByIdQuery) {
    const item = await this.itemRepository.findOne(query.id);

    if (!item) this.rpcExceptionService.throwNotFound('Item not found')

    return item;
  }
}
