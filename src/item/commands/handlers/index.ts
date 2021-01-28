import { CreateItemHandler } from './create-item.handler';
import { DeleteItemByIdHandler } from './delete-item-by-id.handler';
import { UpdateItemHandler } from './update-item.handler';

export const CommandHandlers = [
  DeleteItemByIdHandler,
  CreateItemHandler,
  UpdateItemHandler,
];
