import { ItemEventType } from '../../../types';

export class NotifyItemOwnerCommand {
  constructor(public readonly event: ItemEventType) {}
}
