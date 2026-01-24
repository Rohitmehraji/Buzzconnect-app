# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **Language:** TypeScript
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Authentication:** JWT-based, stored in http-only cookies.

## Structure

The application is a monolith with a clear separation of concerns:

- `pages/`: Contains the frontend pages and API routes.
- `components/`: Reusable React components.
- `lib/`: Shared utility functions and libraries.
- `prisma/`: Database schema, migrations, and seeds.
- `styles/`: Global styles and Tailwind CSS configuration.
- `docs/`: Project documentation.
