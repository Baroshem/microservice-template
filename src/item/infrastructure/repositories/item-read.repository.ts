import { EntityRepository, Repository } from 'typeorm';

import { ItemReadEntity } from '../entities';

@EntityRepository(ItemReadEntity)
export class ItemReadRepository extends Repository<ItemReadEntity> {}
