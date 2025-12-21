# Data Model

The single source of truth for the BizzConnect data model is the Prisma schema, located at `prisma/schema.prisma`. This file defines all the tables, columns, and relationships in the database.

Any changes to the data model should be made by editing the `prisma/schema.prisma` file and then running `npx prisma migrate dev` to create a new database migration.
