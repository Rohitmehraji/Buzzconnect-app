# Data Model

This document outlines the data model for the BizzConnect platform.

## Single Source of Truth

The canonical source of truth for the database schema is the Prisma schema file, located at [`/prisma/schema.prisma`](../prisma/schema.prisma). This file defines all tables, columns, relations, and enums used in the application.

To keep documentation consistent and avoid drift, we will not duplicate the schema definition here. Instead, developers should refer directly to the `schema.prisma` file for the most accurate and up-to-date information on the data model.

## Schema Visualization (Optional)

For a visual representation of the schema, you can use a tool like [Prisma ERD](https://github.com/keonik/prisma-erd) or the [Prisma Client extension](https://www.prisma.io/client) in your IDE.

## Key Entities

While the full schema is in `schema.prisma`, the following are the core entities in the BizzConnect data model:

- **User**: Represents all users of the platform, including buyers, suppliers, and admins. It stores authentication credentials and basic profile information.
- **SupplierProfile**: Contains detailed information about a supplier's business, including KYC details, verification status, and contact information.
- **Category & Subcategory**: A hierarchical structure for organizing products and services.
- **Product**: Represents a product or service listed by a supplier.
- **RFQ / Lead**: Manages Request for Quotes (RFQs) from buyers and the resulting leads for suppliers.
- **LeadMessage**: Stores messages exchanged between buyers and suppliers for a specific lead.
- **Plan & Subscription**: Defines the monetization model, including different subscription plans and their features.
- **Review**: Stores ratings and reviews of suppliers by buyers.
- **Notification**: A log of notifications sent to users.

For detailed fields and relations, please refer to the [`/prisma/schema.prisma`](../prisma/schema.prisma) file.
