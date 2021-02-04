import { GetItemsQuery } from './get-items.query';

describe('GetItemsQuery', () => {
  it('should create a GetItemsQuery instance', () => {
    const query = new GetItemsQuery({ limit: 10, order: 'ASC' });
    expect(query.getItemsDto.limit).toBe(10);
    expect(query.getItemsDto.order).toBe('ASC');
    expect(query instanceof GetItemsQuery).toBe(true);
  });
});
