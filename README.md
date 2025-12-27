# BizzConnect (buzzconnect-app)

BizzConnect is a fully functional B2B marketplace website that replicates the core features and flows of IndiaMART. It's built from the ground up using a modern, robust tech stack. The project name in the code is `buzzconnect-app`.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: Email/Password with JWTs stored in http-only cookies.

## Project Structure

The repository is organized as a standard Next.js application:

- `pages/`: Contains the frontend pages and API routes.
- `components/`: Reusable React components.
- `prisma/`: Prisma schema (`schema.prisma`) and migrations.
- `lib/`: Shared utilities, hooks, and helper functions.
- `styles/`: Global styles and Tailwind CSS configuration.
- `docs/`: Project documentation, including architecture, data model, and roadmap.

## Getting Started

To get the development environment up and running, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- A running [PostgreSQL](https://www.postgresql.org/) database.

### 1. Clone & Install

Clone the repository and install the dependencies.

```bash
git clone <repository-url>
cd buzzconnect-app
npm install
```

### 2. Environment Setup

You will need a `.env` file at the root of the project to configure the database connection. An example is provided in `.env.example`.

First, create the `.env` file:
```bash
# You can create it manually or copy the example if it exists
touch .env
```

Then, add your database connection string to it:

```
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:5432/your_database"
```

### 3. Database Migration

Apply the schema to your database.

```bash
npx prisma migrate dev
```
This command will synchronize your database schema with the `prisma/schema.prisma` file, creating all necessary tables and columns.

### 4. Run the Development Server

Start the Next.js development server.

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).
