import { CreateItemCommand } from "./create-item.command";

describe('CreateItemCommand', () => {
  it('should create a CreateItemCommand instance', () => {
    const command = new CreateItemCommand({ name: 'Test' });
    expect(command.createItemDto.name).toBe('Test');
    expect(command instanceof CreateItemCommand).toBe(true);
  });
});
