import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { ItemEntity } from '@infrastructure/entities';
import { ItemReadRepository } from '@infrastructure/repositories';
import { GetItemsQuery } from '../impl';

@QueryHandler(GetItemsQuery)
export class GetItemsHandler implements IQueryHandler<GetItemsQuery> {
  constructor(
    @InjectRepository(ItemReadRepository)
    private readonly itemReadRepository: ItemReadRepository,
  ) {}

  async execute(query: GetItemsQuery): Promise<ItemEntity[]> {
    const { limit, order } = query.getItemsDto;

    const items = await this.itemReadRepository.find({ take: limit });

    if (!items.length)
      throw new RpcException({
        statusCode: 404,
        errorStatus: 'Items not found',
      });

    return items;
  }
}
