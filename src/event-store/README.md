# Eventstore

Eventstore connection module. Eventstore is used for storing events created during handling commands across the application (i.e When a new item is created, `CreateItemHandler` is triggered and it fires an `ItemCreatedEvent`).

This directory contains:

- EventStoreWrapperModule which is a wrapper for EventStoreModule
- `config` directory with EventStoreConfigService and index.ts exporting that service
