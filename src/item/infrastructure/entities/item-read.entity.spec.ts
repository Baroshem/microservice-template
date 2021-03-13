import { ItemReadEntity } from './item-read.entity';

describe('ItemReadEntity', () => {
  it('should create ItemReadEntity object', () => {
    const itemEntity = new ItemReadEntity(1, 'Test', 'tESt');
    expect(itemEntity.id).toBe(1);
    expect(itemEntity.name).toBe('Test');
    expect(itemEntity.transformedName).toBe('tESt');
    expect(itemEntity instanceof ItemReadEntity).toBe(true);
  });
});
