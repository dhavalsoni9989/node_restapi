# Node - Expressjs - RestAPI

This project has been template and mvc structure for crud operations.

In this project we used the Expressjs + mongoose

[![npm](https://img.shields.io/npm/v/elastic-apm-node.svg)](https://www.npmjs.com/package/elastic-apm-node)
[![Build Status](https://apm-ci.elastic.co/buildStatus/icon?job=apm-agent-nodejs%2Fapm-agent-nodejs-mbp%2F3.x)](https://apm-ci.elastic.co/job/apm-agent-nodejs/job/apm-agent-nodejs-mbp/job/3.x/)

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `>=gallium (v.16.0.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local.

### Using NPM

- Run `npm i` to install the project dependencies

### Using Yarn

- Run `yarn` to install the project dependencies

## Available scripts

```bash
# Start developing with REPL
npm run dev

# Start production
npm start

# Run unit tests
`npm t unit` or `npm t integration` or `npm t` only

# Run continuous test mode
npm run ci

# Run ESLint
npm run lint

# Run ESLint with --fix
npm run lint-fix

# Format the code with Prettier
npm run prettier
```

### Run without Docker (Development)

In order to test the hello function locally, run the following command:

    - `npx run start` if you're using NPM
    - `yarn run start` if you're using Yarn

### Run in Docker (Development)

    1. `cd ./docker/development/`
    2. `cp .env.example .env` and update your vars
    3. Start with docker-compose: `docker compose up -d`

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `configs` - Containing code for connecting the database
- `controllers` - containing the controller files
- `middlewares` Containing the all middlewares like auth, validation and response middleware
- `models` - Containing the schema definitions
- `routes` - Containing the routes files for all controllers
- `services` - Containing the services files which will interact with database. Fetch the data and pass on the data to controller.
- `utilities` - Containing all the utilities like helper functions, mapper functions which will map the data and serializer function which is the common response format functions

```
|---src
    |   server.js   # Main server file
    +---configs
    |       index.js
    +---controllers
    |       index.js
    |       user.controller.js
    +---middlewares
    |   +---authentication
    |   |       index.js
    |   +---response
    |   |       index.js
    |   +---validations
    |           custom.validation.js
    |           index.js
    |           user.validation.js
    +---models
    |       user.model.js
    +---routes
    |       index.js
    |       user.route.js
    +---services
    |       user.service.js
    +---utilities
        +---helpers
        |       apiResponse.js
        +---mappers
        +---serializers
```

### 3rd party libraries

- [mongoose](https://github.com/Automattic/mongoose) - uses mongoose to connect the database
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - middleware engine for Node.Js to generate JWTs used by authentication.
- [body-parser](https://github.com/expressjs/body-parser) to convert API Gateway `request.body` property, originally passed as a stringified JSON, to its corresponding parsed object
