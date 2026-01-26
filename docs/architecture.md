# BizzConnect Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Core Philosophy

BizzConnect is designed as a **monolithic application** using the **Next.js framework**. This approach was chosen to simplify development, deployment, and maintenance, especially in the early stages of the project. By keeping the frontend and backend in a single codebase, we can ensure a tightly integrated and consistent development experience.

## Technology Stack

- **Framework**: **Next.js** serves as the foundation for both the frontend and backend.
  - **Frontend**: We will use **React** with **TypeScript** for building the user interface. **Tailwind CSS** will be used for styling, providing a utility-first approach to design.
  - **Backend**: **Next.js API Routes** will power the backend, handling all business logic, database interactions, and authentication.

- **Database**: **PostgreSQL** is the chosen relational database, offering a robust and scalable solution for storing structured data.

- **ORM**: **Prisma** will be used as the Object-Relational Mapper (ORM). It provides a type-safe and intuitive way to interact with the database, and its schema-first approach ensures a single source of truth for our data model.

## Folder Structure

The project will follow the standard Next.js folder structure, with some additional conventions for scalability:

- `pages/`: Contains the application's routes and frontend pages.
- `pages/api/`: All backend API endpoints will be located here.
- `components/`: Reusable React components will be stored in this directory.
- `lib/`: A directory for helper functions, utility classes, and other shared code.
- `prisma/`: Contains the Prisma schema (`schema.prisma`) and migration files.
- `docs/`: Project documentation, including this file.
