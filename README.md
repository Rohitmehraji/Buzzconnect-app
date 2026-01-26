# BizzConnect

BizzConnect is a modern, full-stack B2B marketplace platform inspired by the core functionalities of IndiaMART. It's built with Next.js, Prisma, and PostgreSQL, designed to connect buyers and suppliers in a seamless and efficient digital ecosystem.

## Project Goal

The primary goal of this project is to replicate the essential features of a B2B marketplace, including user onboarding, product cataloging, search and discovery, a request for quote (RFQ) system, and basic monetization features. This repository serves as the foundation for the BizzConnect platform.

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Next, set up your PostgreSQL database and add the connection string to a `.env` file in the root of the project:

```
DATABASE_URL="postgresql://user:password@host:port/database"
```

With the database configured, apply the database schema:

```bash
npx prisma migrate dev
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## Learn More

To learn more about the technologies used in this project, refer to their official documentation:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma Client, Prisma Migrate, and more.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about the utility-first CSS framework.
