# Data Model

The single source of truth for the BizzConnect database schema is the Prisma schema file located at [`prisma/schema.prisma`](../prisma/schema.prisma).

This file defines all the models, fields, and relations in the database. Any changes to the data model should be made by modifying this file and generating a new migration using Prisma Migrate.

For a visual representation of the schema, you can use the Prisma ERD visualizer:

1.  **Install the Prisma ERD Visualizer extension** in your VS Code editor.
2.  **Open the `prisma/schema.prisma` file.**
3.  **Click the "Prisma ERD" icon** in the top-right corner of the editor.
