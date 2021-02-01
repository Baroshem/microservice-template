# Application

Application module. This layer defines jobs the software is supposed to do and directs expressive domain objects to work out problems. The tasks this layer is responsible for are meaningful to the business or necessary for interaction with the application layers of other systems. This layer is kept thin. It does not contain business rules or knowledge, but only coordinates tasks and delegates work to collaborations of domain objects in the next layer down. It does not have state reflecting the business situation, but it can have state that reflects the progress of a task for the user or the program. 
[Read more](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice)

This directory contains:

- `commands` -> CQRS Commands and Command Handlers. They perform Database writes and trigger events.
- `controllers` -> Microservice message handlers. They catch messages with certain patterns and transfers data to services.
- `dtos` -> Data Transfer Objects used for modeling how data travels across the application.
- `queries` -> CQRS Queries and Query Handlers. They perform Database reads.
- `services` -> Triggers commands and queries with data provided by Controller.
- ApplicationModule -> wrapper for application related code.
