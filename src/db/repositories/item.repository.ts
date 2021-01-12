import { EntityRepository, Repository } from 'typeorm';
import { ItemEntity } from '../entities';

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {}
