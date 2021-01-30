import { IEvent } from "@nestjs/cqrs";

import { ItemEventType } from "../../types";

export class ItemOwnerNotifiedEvent implements IEvent{
    constructor(public readonly event: ItemEventType) {}
}
