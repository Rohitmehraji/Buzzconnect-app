# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Tech Stack

- **Frontend:** Next.js with React and TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **ORM:** Prisma
- **Database:** PostgreSQL

## Overview

The application is a monolith built with Next.js, leveraging its file-based routing for both frontend pages and backend API endpoints. This approach simplifies development and deployment by keeping the entire codebase in a single repository.

### Frontend

The frontend is built with React and TypeScript, using Next.js for server-side rendering (SSR) and static site generation (SSG) where applicable. Tailwind CSS is used for styling, providing a utility-first approach to building a consistent and responsive user interface.

### Backend

The backend is implemented using Next.js API Routes. These are serverless functions that handle API requests, process data, and interact with the database through Prisma. This serverless architecture allows for automatic scaling and reduces the need for manual server management.

### Database

The application uses a PostgreSQL database, with Prisma as the Object-Relational Mapper (ORM). Prisma simplifies database access and management by providing a type-safe and intuitive API for querying and mutating data. The database schema is defined in the `prisma/schema.prisma` file, and migrations are managed using Prisma Migrate.
