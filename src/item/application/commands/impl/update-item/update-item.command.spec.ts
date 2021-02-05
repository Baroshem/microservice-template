import { UpdateItemCommand } from './update-item.command';

describe('UpdateItemCommand', () => {
  it('should create a UpdateItemCommand instance', () => {
    const command = new UpdateItemCommand({ id: 1, name: 'New Test' });
    expect(command.updateItemDto.id).toBe(1);
    expect(command.updateItemDto.name).toBe('New Test');
    expect(command instanceof UpdateItemCommand).toBe(true);
  });
});
