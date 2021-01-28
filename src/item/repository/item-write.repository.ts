import { EntityRepository, Repository } from "typeorm";

import { ItemEntity } from "../entity";

@EntityRepository(ItemEntity)
export class ItemWriteRepository extends Repository<ItemEntity> {}