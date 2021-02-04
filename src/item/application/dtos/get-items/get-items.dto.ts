export class GetItemsDto {
  limit: number;
  order?: string;

  constructor(limit: number, order: string) {
    this.limit = limit;
    this.order = order;
  }
}
