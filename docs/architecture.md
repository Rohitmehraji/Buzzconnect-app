# Architecture

This document outlines the high-level architecture of the BizzConnect application.

**Note on Project Structure:** The project uses the Next.js Pages Router (`pages/` directory). The original boilerplate `README.md` may incorrectly refer to an `app/` directory structure.

## Tech Stack

- **Framework**: Next.js (React) - Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Email/Password (JWT-based)

## Application Structure

The application is a monolith built with Next.js, using the Pages Router for frontend and API routes.

- **`pages/`**: Contains the frontend pages of the application.
- **`pages/api/`**: Contains the backend API routes.
- **`components/`**: Contains reusable React components.
- **`lib/`**: Contains shared utility functions and libraries.
- **`prisma/`**: Contains the Prisma schema and migration files.
- **`styles/`**: Contains global stylesheets.
