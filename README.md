# BizzConnect

BizzConnect is a B2B marketplace platform inspired by IndiaMART, connecting buyers with suppliers. This project is built with Next.js, Prisma, and PostgreSQL.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm
*   PostgreSQL

### Installation

1.  **Clone the repo**
    ```sh
    git clone <repository-url>
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Set up environment variables**

    Create a `.env` file in the root of the project and add the following environment variable:

    ```env
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
    ```

    Replace the placeholders with your PostgreSQL connection details.

4.  **Run database migrations**

    Apply the database schema to your local database:

    ```sh
    npx prisma migrate dev
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Seeding the Database

To populate the database with some initial data, run the following command (seed script to be created):

```bash
npx prisma db seed
```

## Project Structure

*   `pages/`: Next.js pages and API routes.
*   `components/`: Reusable React components.
*   `prisma/`: Prisma schema and migration files.
*   `lib/`: Helper functions and utility code.
*   `docs/`: Project documentation.

## Learn More

To learn more about the technologies used in this project, see the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
