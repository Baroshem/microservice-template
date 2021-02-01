# Infrastructure

Infrastructure module. This layer is how the data that is initially held in domain entities (in memory) is persisted in databases or another persistent store. An example is using Entity Framework Core code to implement the Repository pattern classes that use a DBContext to persist data in a relational database.
[Read more](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice)

This directory contains:

- `entities` -> Contains Typeorm entities that reflect database tables.
- `repositories` -> Used for communicating with the database and certain entities (tables).
