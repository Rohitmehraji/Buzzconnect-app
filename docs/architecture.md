# BizzConnect Architecture

This document outlines the high-level architecture and technical decisions for the BizzConnect B2B marketplace.

## 1. Core Technology Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **UI**: React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma

## 2. Project Structure

The project follows a standard Next.js structure:

- `pages/`: Contains all frontend pages and API routes.
  - `pages/api/`: All backend API endpoints.
  - `pages/app/`: Frontend pages for the authenticated user dashboards (buyer, supplier, admin).
- `components/`: Reusable React components.
- `lib/`: Shared utility functions, hooks, and libraries (e.g., Prisma client).
- `prisma/`: Database schema, migrations, and seed scripts.
- `styles/`: Global CSS and Tailwind CSS configuration.
- `docs/`: Project documentation.

## 3. Authentication

Authentication will be handled using JSON Web Tokens (JWT).

- **Flow**:
  1. User registers or logs in via email/password.
  2. The server generates a JWT containing the user's ID and role.
  3. The token is sent to the client and stored securely (e.g., in an HTTP-only cookie).
  4. For authenticated requests, the token is sent in the `Authorization` header.
- **Roles**: `BUYER`, `SUPPLIER`, `ADMIN`. Access to specific API routes and frontend pages will be restricted based on these roles.

## 4. Database & Data Model

The database schema is managed with Prisma. The source of truth for the data model is `prisma/schema.prisma`. All relations and entities are documented in `docs/data-model.md`.

## 5. Modularity and Scalability

The application is designed to be modular. Each core feature (e.g., Products, RFQs, Reviews) will have its own set of API routes, services, and frontend components. This separation of concerns will make the codebase easier to maintain and extend.
