import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { RpcExceptionService } from '../../../../utils/exception-handling';
import { GetItemByIdQuery } from '../impl';
import { ItemEntity } from '../../../entities';
import { ItemReadRepository } from '../../../infrastructure/repositories';

@QueryHandler(GetItemByIdQuery)
export class GetItemByIdHandler implements IQueryHandler<GetItemByIdQuery> {
  constructor(
    @InjectRepository(ItemReadRepository)
    private readonly itemReadRepository: ItemReadRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(query: GetItemByIdQuery): Promise<ItemEntity> {
    const item = await this.itemReadRepository.findOne(query.id);

    if (!item) this.rpcExceptionService.throwNotFound('Item not found');

    return item;
  }
}
