import { EntityRepository, Repository } from 'typeorm';

import { ItemEntity } from '../../entities';

@EntityRepository(ItemEntity)
export class ItemWriteRepository extends Repository<ItemEntity> {}
