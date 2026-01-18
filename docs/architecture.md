# Architecture

This document outlines the high-level architecture of the BizzConnect application.

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **ORM**: Prisma
- **Database**: PostgreSQL

## Architecture Overview

The application follows a monolithic architecture with the frontend and backend co-located in the same Next.js project.

- **Frontend**: Built with React and Next.js, using pages for routing.
- **Backend**: Implemented using Next.js API routes.
- **Database**: PostgreSQL is used as the database, with Prisma as the ORM for data access.
