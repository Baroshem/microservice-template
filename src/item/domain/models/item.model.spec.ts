import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemOwnerNotifiedEvent,
  ItemUpdatedEvent,
} from '@domain/events/impl';
import { Item } from './item.model';

describe('ItemModel', () => {
  beforeEach(() => {});

  it('should fire ItemCreatedEvent on create', () => {
    const itemModel = new Item();

    const createItemDto = { name: 'Test' };

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    itemModel.createItem(createItemDto);

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemCreatedEvent(createItemDto));
  });

  it('should fire ItemDeletedEvent on delete', () => {
    const deleteItemId = 1;
    const itemModel = new Item(deleteItemId);

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    itemModel.deleteItem();

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemDeletedEvent(deleteItemId));
  });

  it('should fire ItemUpdatedEvent on update', () => {
    const updateItemDto = { id: 1, name: 'Test' };
    const itemModel = new Item();

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    itemModel.updateItem(updateItemDto);

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemUpdatedEvent(updateItemDto));
  });

  it('should fire ItemOwnerNotifiedEvent on notifyItemOwner with ItemCreatedEvent', () => {
    const itemModel = new Item();
    const createItemDto = { name: 'Test' };

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    const event = new ItemCreatedEvent(createItemDto);
    itemModel.notifyItemOwner(event);

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemOwnerNotifiedEvent(event));
  });

  it('should fire ItemOwnerNotifiedEvent on notifyItemOwner with ItemUpdatedEvent', () => {
    const itemModel = new Item();
    const updateItemDto = { id: 1, name: 'Test' };

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    const event = new ItemUpdatedEvent(updateItemDto);
    itemModel.notifyItemOwner(event);

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemOwnerNotifiedEvent(event));
  });

  it('should fire ItemOwnerNotifiedEvent on notifyItemOwner with ItemDeletedEvent', () => {
    const deleteItemId = 1;
    const itemModel = new Item(deleteItemId);

    const applySpy = jest.spyOn(itemModel, 'apply').mockImplementation();
    const event = new ItemDeletedEvent(deleteItemId);
    itemModel.notifyItemOwner(event);

    expect(applySpy).toBeCalledTimes(1);
    expect(applySpy).toBeCalledWith(new ItemOwnerNotifiedEvent(event));
  });
});
