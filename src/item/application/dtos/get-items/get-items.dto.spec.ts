import { GetItemsDto } from './get-items.dto';

describe('GetItemsDto', () => {
  it('should create dto object', () => {
    expect(new GetItemsDto(10, 'ASC')).toEqual(new GetItemsDto(10, 'ASC'));
  });
});
