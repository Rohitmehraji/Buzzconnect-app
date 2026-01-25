# Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma

## Architecture Overview

The application is a monolith built with Next.js. The frontend is composed of React components, and the backend is implemented using Next.js API routes.

### Frontend

The frontend is built using the Next.js Pages Router. Components are written in TypeScript and styled with Tailwind CSS.

### Backend

The backend is built using Next.js API routes. All business logic and data access is handled through these routes.

### Database

The database is a PostgreSQL instance, managed by Prisma. The Prisma schema is the single source of truth for the database schema.
