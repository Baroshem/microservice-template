import { EntityRepository, Repository } from "typeorm";

import { ItemEntity } from "../entity";

@EntityRepository(ItemEntity)
export class ItemReadRepository extends Repository<ItemEntity> {}