# Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Authentication:** JWTs (via `jose`), stored in http-only cookies

## Project Structure

The project follows a standard Next.js (Pages Router) structure:

*   `docs/`: Contains project documentation, including this file, the data model, and the roadmap.
*   `pages/`: Contains the Next.js pages and API routes.
    *   `pages/api/`: Backend API routes.
    *   `pages/admin/`: Admin panel.
    *   `pages/buyer/`: Buyer dashboard.
    *   `pages/supplier/`: Supplier dashboard.
*   `prisma/`: Contains the Prisma schema and migration files.
*   `components/`: Contains reusable React components.
*   `lib/`: Contains shared libraries and helper functions, such as the Prisma client and authentication utilities.

## Key Architectural Decisions

*   **Monolithic Architecture:** The frontend and backend are part of the same Next.js application. This simplifies development and deployment in the early stages of the project.
*   **Role-Based Access Control (RBAC):** Implemented using Next.js middleware, this ensures that only authorized users can access protected routes.
*   **Database Schema as Single Source of Truth:** The `prisma/schema.prisma` file is the single source of truth for the database schema. All database changes are managed through Prisma migrations.
