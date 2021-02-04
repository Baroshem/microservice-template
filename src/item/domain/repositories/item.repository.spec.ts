import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemUpdatedEvent,
} from '@domain/events/impl';
import { Item } from '@domain/models';
import { ItemRepository } from './item.repository';

describe('ItemRepository', () => {
  it('should call item.deleteItem on deleteItem and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.deleteItem(1);

    expect(result instanceof Item).toBe(true);
  });

  it('should call item.createItem on createItem and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.createItem({ name: 'Test' });

    expect(result instanceof Item).toBe(true);
  });

  it('should call item.updateItem on updateItem and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.updateItem({ id: 1, name: 'Test' });

    expect(result instanceof Item).toBe(true);
  });

  it('should call item.notifyItemOwner on notifyItemOwner and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.notifyItemOwner(new ItemDeletedEvent(1));

    expect(result instanceof Item).toBe(true);
  });

  it('should call item.notifyItemOwner on notifyItemOwner and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.notifyItemOwner(
      new ItemCreatedEvent({ name: 'Test' }),
    );

    expect(result instanceof Item).toBe(true);
  });

  it('should call item.notifyItemOwner on notifyItemOwner and return item', () => {
    const itemRepository = new ItemRepository();

    const result = itemRepository.notifyItemOwner(
      new ItemUpdatedEvent({ id: 1, name: 'Test' }),
    );

    expect(result instanceof Item).toBe(true);
  });
});
