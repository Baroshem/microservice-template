import { EntityRepository, Repository } from 'typeorm';
import { ItemEntity } from '../../db/entities';

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {}
