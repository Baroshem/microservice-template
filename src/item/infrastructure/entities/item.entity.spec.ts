import { ItemEntity } from './item.entity';

describe('ItemEntity', () => {
  it('should create ItemEntity object', () => {
    const itemEntity = new ItemEntity(1, 'Test');
    expect(itemEntity.id).toBe(1);
    expect(itemEntity.name).toBe('Test');
    expect(itemEntity instanceof ItemEntity).toBe(true);
  });
});
