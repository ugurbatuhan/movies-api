# Node.js Movies-Api

## Introduction

This project is built following the principles of clean architecture, which ensures that its core functions and models are independent of any specific framework and database. It incorporates the use of generic repositories and use cases for a modular and maintainable codebase.

### Clean Architecture

- **Core Independence**: The core functionality and models are decoupled from the dependencies, making the project highly flexible for use with different frameworks and databases.

- **Generic Repositories**: Generic repositories are used to abstract data access, allowing for easy integration with different data storage solutions.

- **Use Cases**: Use cases are employed to implement the project's business logic independently of the external interfaces. This design enhances testability and maintainability.

## Getting Started

To run the project, it is **containerized** using **Docker**. You can get it up and running quickly with the following steps:

## 1. Clone this repository to your local machine:

## 2. Build and start the containers using Docker Compose:

```bash
$ docker compose up
```
This will create the necessary containers and initialize the project.

## 3. Access the Swagger documentation:

You can access Swagger API documentation at http://localhost:3000/api.

Alternatively, you can open another terminal and run the following command to automatically open Swagger in your default web browser:

```bash
$ npm run open-swagger
```
## API Endpoints
Movie Controller

The following endpoints are available through the MovieController, and you can interact with them via Swagger:

    GET /api/movie: Get a list of all movies.

    GET /api/movie/:id: Get a single movie by its ID.

    POST /api/movie: Create a new movie.

    PUT /api/movie/:id: Update an existing movie.

    DELETE /api/movie/:id: Delete an existing movie.

Swagger documentation is also available for these endpoints, providing detailed information on request and response data.