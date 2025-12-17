# Architecture

This document outlines the high-level architecture of the BizzConnect platform.

## Frontend

*   **Framework:** Next.js with React
*   **Styling:** Tailwind CSS
*   **State Management:** React Context API for global state (e.g., user authentication) and component-level state for local UI state.

## Backend

*   **Framework:** Next.js API Routes
*   **Database:** PostgreSQL
*   **ORM:** Prisma

## Authentication

*   **Strategy:** Email/password authentication with JWTs (JSON Web Tokens).
*   **Roles:**
    *   `BUYER`
    *   `SUPPLIER`
    *   `ADMIN`

## Deployment

*   **Platform:** Vercel (initially)
