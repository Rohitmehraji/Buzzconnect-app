# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## 1. Core Technology Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Authentication**: Email/Password-based authentication with role-based access control.

## 2. Project Structure

The project follows a standard Next.js pages router structure.

- `pages/`: Contains the application's routes and frontend pages.
- `pages/api/`: Contains the backend API endpoints.
- `components/`: Contains reusable React components.
- `lib/`: Contains helper functions, hooks, and utility code.
- `prisma/`: Contains the Prisma schema (`schema.prisma`) and migrations.
- `styles/`: Contains global styles.
- `docs/`: Contains project documentation.

## 3. Authentication and Authorization

- Authentication will be handled using JWTs (JSON Web Tokens) stored in browser cookies.
- Authorization will be implemented using a role-based access control (RBAC) system. The roles are `BUYER`, `SUPPLIER`, and `ADMIN`.
- Middleware will be used to protect routes and API endpoints based on user roles.

## 4. Database Schema

The database schema will be managed using Prisma. The schema will be designed to be normalized and scalable. The core entities are described in `docs/data-model.md`.

## 5. Modularity and Scalability

The application is designed to be modular. Each feature (e.g., user management, product catalog, RFQ system) will be implemented as a separate module with its own set of components, API routes, and services. This will make the application easier to maintain and scale.
