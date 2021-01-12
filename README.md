<br />
<p align="center">
  <a href="https://github.com/otasoft/otasoft-auth">
    <img src="doc/microservice-template-logo.png" alt="Otasoft Logo" width="128" height="128">
  </a>

  <h1 align="center">Otasoft Microservice Template - Basic template for creating new microservices</h1>

  <p align="center">
    <!-- <a href="https://github.com/otasoft/otasoft-auth"><strong>Explore the docs »</strong></a> -->
    <!-- <a href="https://github.com/otasoft/otasoft-auth">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/otasoft/otasoft-auth/issues">Report Bug</a>
    ·
    <a href="https://github.com/otasoft/otasoft-auth/issues">Request Feature</a>
  </p>
  <p align="center">
    <!-- <a href="https://github.com/otasoft/otasoft-api/actions"><img src="https://github.com/otasoft/otasoft-api/workflows/Node.js%20CI/badge.svg?branch=master" alt="CI"></a> -->
</p>

# About The Project

Otasoft Microservice template - Basic template for creating new microservices

* PostgreSQL
* CQRS
* Healthchecks
* .env support
* Typeorm
* Utils (exceptions, microservice connection, mocks, ...)
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
* [License](#license)

<!-- GETTING STARTED -->
## Getting Started

To start developing the project please check if you have these tools installed on your machine:

* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [Docker](https://www.docker.com/get-started)

Installation

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

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/otasoft/otasoft-auth/issues) for a list of proposed features (and known issues).

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

<!-- LICENSE -->
## License

Distributed under the [MIT licensed](LICENSE). See `LICENSE` for more information.