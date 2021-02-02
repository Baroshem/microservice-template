<br />
<p align="center">
  <a href="https://github.com/otasoft/microservice-template">
    <img src="doc/microservice-template-logo.png" alt="Otasoft Logo" width="128" height="128">
  </a>

  <h1 align="center">Otasoft Microservice Template - Template for creating Nest.js microservices</h1>

  <p align="center">
    <!-- <a href="https://github.com/otasoft/microservice-template"><strong>Explore the docs »</strong></a> -->
    <!-- <a href="https://github.com/otasoft/microservice-template">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/otasoft/microservice-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/otasoft/microservice-template/issues">Request Feature</a>
  </p>
  <p align="center">
    <a href="https://github.com/otasoft/microservice-template/actions"><img src="https://github.com/otasoft/microservice-template/workflows/Node.js%20CI/badge.svg?branch=master" alt="CI"></a>
</p>

# About The Project

Otasoft Microservice template - [Nest.js](https://nestjs.com) based microservice repository template. This project consists of:

* PostgreSQL Typeorm
* CQRS
* Domain Driven Design
* Event Sourcing
* Healthchecks
* .env support
* RabbitMQ Event Bus Connection
* Dockerfile and docker-compose
* doc directory
* Github workflows and issue templates

Otasoft projects are and always will be open source (MIT Licence). Anyone can use and support the project. The project is currently in the development phase.

## Table of Contents

* [Getting Started](#getting-started)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [How to support](#how-to-support)
* [Contact](#contact)
* [Special Thanks](#special-thanks)
* [License](#license)

<!-- GETTING STARTED -->
## Getting Started

To start developing the project please check if you have these tools installed on your machine:

* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repo

```sh
git clone https://github.com/otasoft/microservice-template
```

2. Move into microservice-template

```sh
cd microservice-template
```

3. Install project dependencies

```sh
yarn
```

4. Copy .env.example file as .env and fill it with your environment variables

```sh
cp .env.example .env
```

5. Run docker-compose to start development environment

```sh
docker-compose up
```

6. Run project

```sh
yarn start:dev
```

### Testing as a normal web server instead of microservice

1. Replace bootstrap logic inside `main.ts` from microservice

```typescript
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_NODENAME}:${process.env.RABBITMQ_FIRST_HOST_PORT}/${process.env.RABBITMQ_DEFAULT_VHOST}`,
      ],
      queue: 'microservice_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(() => {
    logger.log('Microservice is listening');
  });
```

2. To basic web HTTP server

```typescript
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
```

3. Replace message pattern in controller

```typescript
  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  async getItemById(id: number): Promise<ItemEntity> {
    return this.itemService.getItemById(id);
  }

  @MessagePattern({ role: 'item', cmd: 'create' })
  async createItem(createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.itemService.createItem(createItemDto);
  }
```

4. To HTTP methods (with Decorators like `@Body()`, `@Param()`)

```typescript
  @Get('/get-by-id/:id')
  async getItemById(@Param('id') id: number): Promise<ItemEntity> {
    return this.itemService.getItemById(id);
  }

  @Post('/create')
  async createItem(@Body() createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.itemService.createItem(createItemDto);
  }
```

5. Test locally with [Postman](https://www.postman.com/) and [TablePlus](https://tableplus.com/)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/otasoft/microservice-template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

You are welcome to contribute to Otasoft projects. Please see [contribution tips](CONTRIBUTING.md)

<!-- SUPPORT -->
## How to support

Otasoft projects are and always will be Open Source.

Core team and contributors in the Otasoft ecosystem spend their free and off work time to make this project grow. If you would like to support us you can do so by:

* contributing - it does not matter whether it is writing code, creating designs, or sharing knowledge in our e-books and pdfs. Any help is always welcome!
* evangelizing - share a good news about Otasoft projects in social media or during technology conferences ;)

<!-- CONTACT -->
## Contact

Founder -> [Jakub Andrzejewski](https://www.linkedin.com/in/jakub-andrzejewski/)

<!-- THANKS -->
## Special Thanks

This project wouldn't be possible without amazing work of [Kamil Myśliwiec](https://github.com/kamilmysliwiec) and the [Nest.js Core Team](https://github.com/orgs/nestjs/people). Keep doing the awesome work!

<!-- LICENSE -->
## License

Distributed under the [MIT licensed](LICENSE). See `LICENSE` for more information.