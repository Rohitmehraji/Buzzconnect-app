# BizzConnect

BizzConnect is a B2B marketplace platform inspired by IndiaMART, built with Next.js, TypeScript, and Prisma.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, set up your `.env` file by copying the example:

```bash
cp .env.example .env
```

Update the `DATABASE_URL` in your `.env` file with your PostgreSQL connection string.

Run the database migrations:

```bash
npx prisma migrate dev
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project, see the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
