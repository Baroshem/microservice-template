import { UpdateItemDto } from '../../dtos';

export class UpdateItemCommand {
  constructor(public readonly updateItemDto: UpdateItemDto) {}
}
