import { GetItemsDto } from "../../dtos";

export class GetItemsQuery {
    constructor(public readonly getItemsDto: GetItemsDto) {}
}
