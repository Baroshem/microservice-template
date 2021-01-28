import { CreateItemDto } from "../../dtos";

export class CreateItemCommand {
    constructor(public readonly createItemDto: CreateItemDto) {}
}
  