import { DeleteItemByIdCommand } from './delete-item-by-id.command';

describe('DeleteItemByIdCommand', () => {
  it('should create a DeleteItemByIdCommand instance', () => {
    const command = new DeleteItemByIdCommand(1);
    expect(command.id).toBe(1);
    expect(command instanceof DeleteItemByIdCommand).toBe(true);
  });
});
