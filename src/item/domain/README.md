# Domain

Domain module. This layer is responsible for representing concepts of the business, information about the business situation, and business rules. State that reflects the business situation is controlled and used here, even though the technical details of storing it are delegated to the infrastructure. This layer is the heart of business software.
[Read more](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice)

This directory contains:

- `events` -> Events and Events Handlers. They provide reactivity to the application.
- `models` -> Aggregate Root, found inside, is responsible for dispatching events.
- `repositories` -> Responsible for communicating to the Aggregate Root from Command Handlers.
- `sagas` -> Sagas allow to react for events
- `types` -> Optional. Contains usefult event types that can be used across the application.
- DomainModule -> wrapper for domain related code.
