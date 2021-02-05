import { CreateItemDto } from './create-item.dto';

describe('CreateItemDto', () => {
  it('should create a Dto object', () => {
    expect(new CreateItemDto('Test')).toEqual(new CreateItemDto('Test'));
  });
});
