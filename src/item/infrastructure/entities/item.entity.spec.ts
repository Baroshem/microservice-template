import { ItemEntity } from './item.entity';

describe('ItemEntity', () => {
  it('should create ItemEnitity object', () => {
    const itemEnitity = new ItemEntity(1, 'Test');
    expect(itemEnitity.id).toBe(1);
    expect(itemEnitity.name).toBe('Test');
    expect(itemEnitity instanceof ItemEntity).toBe(true);
  });
});
