# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Core Technologies

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **ORM**: Prisma
- **Database**: PostgreSQL

## Application Structure

The application is a monolith built with Next.js, following the standard project structure.

- `pages/`: Contains the frontend pages and API routes.
  - `pages/api/`: All backend API endpoints are defined here.
- `components/`: Reusable React components.
- `lib/`: Shared utility functions and libraries.
- `prisma/`: Database schema, migrations, and seed scripts.
- `styles/`: Global styles and Tailwind CSS configuration.
