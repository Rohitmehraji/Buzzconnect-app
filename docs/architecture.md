# Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Core Technology Stack

- **Framework**: Next.js (Pages Router)
- **Primary Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **UI**: React with Tailwind CSS

## Architecture Overview

BizzConnect is designed as a monolithic application built on Next.js. This approach was chosen to simplify development and deployment in the initial stages while still providing a robust, scalable foundation.

### Frontend

The frontend is a standard Next.js application using the Pages Router. Key characteristics include:

- **Server-Side Rendering (SSR)**: For fast initial page loads and improved SEO on public-facing pages like product listings and supplier profiles.
- **Client-Side Rendering (CSR)**: For highly interactive dashboards (Buyer, Supplier, Admin) where dynamic data and a fluid user experience are paramount.
- **Component-Based UI**: Built with React and styled using Tailwind CSS for a consistent and maintainable design system.
- **State Management**: Primarily managed with React's native state and context APIs. For more complex global state, a lightweight library may be considered in the future.

### Backend

The backend is implemented using Next.js API Routes. This serverless approach integrates seamlessly with the frontend and simplifies the overall architecture.

- **API Routes**: All backend logic, including authentication, data access, and business rules, is handled within the `/pages/api` directory.
- **Authentication**: A custom email/password authentication system is implemented using JSON Web Tokens (JWTs). These tokens are stored in secure, http-only cookies to prevent XSS attacks.
- **Authorization**: Role-based access control (RBAC) is enforced at the API level. Middleware will check user roles (BUYER, SUPPLIER, ADMIN) to protect sensitive endpoints and actions.

### Database and Data Access

- **Database**: PostgreSQL was chosen for its reliability, feature set, and strong community support.
- **ORM**: Prisma serves as the interface between the application and the database. It provides type-safe database access, simplified migrations, and a clear, declarative schema definition (`prisma/schema.prisma`), which acts as the single source of truth for the data model.

## Folder Structure

The repository follows a conventional Next.js structure with some added directories for organization:

- `pages/`: Application pages and API routes.
- `components/`: Reusable React components.
- `prisma/`: Prisma schema, migrations, and seed scripts.
- `lib/`: Shared utilities, hooks, helper functions, and Prisma client instantiation.
- `styles/`: Global styles and Tailwind CSS configuration.
- `docs/`: Project documentation.
