# Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **UI**: React, Tailwind CSS
- **Backend**: Next.js API Routes
- **ORM**: Prisma
- **Database**: PostgreSQL

## Architecture Overview

The application is a monolith built with Next.js. The frontend and backend are tightly coupled, with the frontend consuming the backend through API routes.

### Frontend

The frontend is built with React and Next.js. It uses Tailwind CSS for styling.

### Backend

The backend is built with Next.js API Routes. It uses Prisma to interact with the PostgreSQL database.

### Authentication

Authentication is handled using JWTs. When a user logs in, a JWT is generated and stored in an http-only cookie. This JWT is then used to authenticate subsequent requests.

### Authorization

Authorization is handled using role-based access control (RBAC). Each user has a role (BUYER, SUPPLIER, or ADMIN), and access to certain resources is restricted based on the user's role. This is enforced using Next.js middleware.
