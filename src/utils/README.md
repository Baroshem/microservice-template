# Utils

Utils module. It is a collection of useful services that can be used accross the application:

- RpcExceptionService -> Useful for throwing Rpc -> HTTP Exceptions
- ErrorValidationService -> Useful for validating internal database errors
- MockedService -> Useful for mocking services while running unit tests

This directory contains:

- UtilsModule which wraps all utils services
- `error-validation` directory with RpcExceptionService and index.ts exporting that service
- `exception-handling` directory with ErrorValidationService and index.ts exporting that service
- `mocks` directory with mockedConfigService and index.ts exporting that service
