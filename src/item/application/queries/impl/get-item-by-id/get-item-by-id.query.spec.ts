import { GetItemByIdQuery } from "./get-item-by-id.query";

describe('GetItemByIdQuery', () => {
  it('should create a GetItemByIdQuery instance', () => {
    const query = new GetItemByIdQuery(1);
    expect(query.id).toBe(1);
    expect(query instanceof GetItemByIdQuery).toBe(true);
  });
});
