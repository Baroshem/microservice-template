import { ItemEventType } from '@domain/types';

export class NotifyItemOwnerCommand {
  constructor(public readonly event: ItemEventType) {}
}
