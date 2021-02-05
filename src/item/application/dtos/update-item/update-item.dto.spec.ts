import { UpdateItemDto } from './update-item.dto';

describe('UpdateItemDto', () => {
  it('should create Dto object', () => {
    expect(new UpdateItemDto(1, 'Test')).toEqual(new UpdateItemDto(1, 'Test'));
  });
});
