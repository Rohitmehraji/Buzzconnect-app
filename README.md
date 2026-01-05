# BizzConnect

BizzConnect is a B2B marketplace platform inspired by IndiaMART, designed to connect buyers and suppliers. This project is built with Next.js, Prisma, and PostgreSQL.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm
- PostgreSQL

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username_/BizzConnect.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Set up environment variables**

    Create a `.env` file in the root of the project and add your PostgreSQL database connection string:
    ```
    DATABASE_URL="postgresql://user:password@host:port/database"
    ```
4.  **Run database migrations**
    ```sh
    npx prisma migrate dev
    ```
5.  **Run the development server**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open source relational database
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Documentation

- [Architecture](docs/architecture.md)
- [Data Model](docs/data-model.md)
- [Roadmap](docs/roadmap.md)
