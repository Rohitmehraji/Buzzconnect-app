# BizzConnect (formerly Buzzconnect-app)

This repository contains the source code for BizzConnect, a B2B marketplace platform inspired by IndiaMART.

## About

BizzConnect is a feature-rich platform designed to connect buyers and suppliers, facilitating seamless trade and communication. It aims to replicate the core functionalities of a modern B2B marketplace, including supplier verification, product catalogs, a request for quotation (RFQ) system, and more.

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd buzzconnect-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the environment:**
    Create a `.env` file in the root of the project and add your PostgreSQL database connection string:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/bizzconnect"
    ```

4.  **Run database migrations:**
    ```bash
    npx prisma migrate dev
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

*   `docs/`: Contains project documentation, including architecture, data model, and roadmap.
*   `pages/`: Next.js pages and API routes.
*   `prisma/`: Prisma schema and migration files.
*   `components/`: Reusable React components.
*   `lib/`: Shared libraries and helper functions.

## License

This project is proprietary and confidential.
