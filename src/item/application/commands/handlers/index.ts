import { CreateItemHandler } from './create-item';
import { DeleteItemByIdHandler } from './delete-item-by-id';
import { NotifyItemOwnerHandler } from './notify-item-owner';
import { UpdateItemHandler } from './update-item';

export const CommandHandlers = [
  DeleteItemByIdHandler,
  CreateItemHandler,
  UpdateItemHandler,
  NotifyItemOwnerHandler,
];
