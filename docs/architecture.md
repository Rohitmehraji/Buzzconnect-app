# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma, PostgreSQL
- **Authentication:** Email/Password

## Project Structure

The project follows a standard Next.js structure.

- `pages/`: Contains the frontend pages of the application.
- `pages/api/`: Contains the backend API routes.
- `prisma/`: Contains the Prisma schema and migrations.
- `lib/`: Contains shared library code, such as Prisma client instances and hooks.
- `components/`: Contains reusable React components.
- `styles/`: Contains global CSS styles.
- `public/`: Contains static assets.
- `docs/`: Contains project documentation.
