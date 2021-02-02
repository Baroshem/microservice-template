import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { GetItemByIdQuery } from '../impl';
import { ItemEntity } from '../../../infrastructure/entities';
import { ItemReadRepository } from '../../../infrastructure/repositories';

@QueryHandler(GetItemByIdQuery)
export class GetItemByIdHandler implements IQueryHandler<GetItemByIdQuery> {
  constructor(
    @InjectRepository(ItemReadRepository)
    private readonly itemReadRepository: ItemReadRepository,
  ) {}

  async execute(query: GetItemByIdQuery): Promise<ItemEntity> {
    const { id } = query;
    const item = await this.itemReadRepository.findOne(id);

    if (!item) throw new RpcException({ statusCode: 404, errorStatus: `Item with ID: ${id} not found` })

    return item;
  }
}
