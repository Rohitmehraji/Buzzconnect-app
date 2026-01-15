# BizzConnect Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Tech Stack

- **Frontend:** Next.js with React, TypeScript, and Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma

## Architecture Overview

BizzConnect is a monolithic application built with Next.js. The frontend and backend are tightly coupled, which allows for rapid development and simplified deployment.

- **Authentication:** User authentication is handled through email and password, with JWTs stored in http-only cookies. The application supports three user roles: `BUYER`, `SUPPLIER`, and `ADMIN`.
- **API:** The backend is exposed through Next.js API Routes, which handle all business logic and database interactions.
- **Database:** Prisma is used as the ORM to interact with the PostgreSQL database. The database schema is defined in `prisma/schema.prisma`.
- **UI:** The user interface is built with React and styled with Tailwind CSS. The application is designed to be responsive and work seamlessly on all devices.
