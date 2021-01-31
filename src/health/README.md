# Health

Health checks module. Health checks are used to check the state of the microservice. Currently implemented:

- TypeOrm Health check
- Storage check
- Heap and RSS checks

This directory contains:

- HealthModule which is a wrapper for TerminusModule
- `services` directory with HealthService and index.ts exporting that service
