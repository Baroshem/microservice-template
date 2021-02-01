# Src

Root module. Contains all the Nest.js source code used for creating the microservice.

This directory contains:

- `database` -> Postgres Typeorm
- `eventstore` -> Eventstore
- `health` -> Healthchecks
- `item` -> CQRS, Event Sourcing, DDD
- `utils` -> Rpc exception handling, Validating Database errors, service mocks
- AppModule -> Root module of the microservice application
- `main.ts` -> Root file of the Nest.js project
