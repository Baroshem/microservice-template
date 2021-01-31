import { IEvent } from '@nestjs/cqrs';

export class ItemDeletedEvent implements IEvent {
  constructor(public readonly itemId: number) {}
}
