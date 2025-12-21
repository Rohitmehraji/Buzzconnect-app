# Architecture

This document outlines the architecture of the BizzConnect application.

## Overview

BizzConnect is a B2B marketplace built with the following technologies:

- **Frontend:** Next.js with React and Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma

The application is a monolith, with the frontend and backend co-located in the same Next.js project. This simplifies development and deployment in the early stages of the project.

## Authentication

User authentication is handled via email and password, with JSON Web Tokens (JWTs) stored in http-only cookies. The application supports three user roles: `BUYER`, `SUPPLIER`, and `ADMIN`.
