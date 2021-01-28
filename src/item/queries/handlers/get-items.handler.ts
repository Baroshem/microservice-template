import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { ItemEntity } from '../../entities';
import { ItemReadRepository } from '../../repositories';
import { RpcExceptionService } from '../../../utils';
import { GetItemsQuery } from '../impl';

@QueryHandler(GetItemsQuery)
export class GetItemsHandler implements IQueryHandler<GetItemsQuery> {
  constructor(
    @InjectRepository(ItemReadRepository)
    private readonly itemReadRepository: ItemReadRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(query: GetItemsQuery): Promise<ItemEntity[]> {
    const { limit, order } = query.getItemsDto;

    const items = await this.itemReadRepository.find({ take: limit });

    if (!items.length)
      this.rpcExceptionService.throwNotFound('Items not found');

    return items;
  }
}
