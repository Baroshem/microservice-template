import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemUpdatedEvent,
} from '@domain/events/impl';
import { NotifyItemOwnerCommand } from './notify-item-owner.command';

describe('NotifyItemOwnerCommand', () => {
  it('should create a NotifyItemOwnerCommand instance with ItemCreatedEvent', () => {
    const command = new NotifyItemOwnerCommand(
      new ItemCreatedEvent({ name: 'Test' }),
    );
    expect(command.event).toEqual({ createItemDto: { name: 'Test' } });
    expect(command instanceof NotifyItemOwnerCommand).toBe(true);
  });

  it('should create a NotifyItemOwnerCommand instance with ItemUpdatedEvent', () => {
    const command = new NotifyItemOwnerCommand(
      new ItemUpdatedEvent({ id: 1, name: 'Test' }),
    );
    expect(command.event).toEqual({ updateItemDto: { id: 1, name: 'Test' } });
    expect(command instanceof NotifyItemOwnerCommand).toBe(true);
  });

  it('should create a NotifyItemOwnerCommand instance with ItemDeletedEvent', () => {
    const command = new NotifyItemOwnerCommand(new ItemDeletedEvent(1));
    expect(command.event).toEqual({ itemId: 1 });
    expect(command instanceof NotifyItemOwnerCommand).toBe(true);
  });
});
