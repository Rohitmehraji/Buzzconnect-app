# BizzConnect Data Model

This document provides a high-level overview of the data model for the BizzConnect platform.

## Single Source of Truth

The canonical source of truth for the database schema is the Prisma schema file, located at [`prisma/schema.prisma`](../prisma/schema.prisma). This file defines all the models, their fields, and the relationships between them.

To keep the documentation consistent and avoid drift, we will not be duplicating the schema definition in this file. Instead, developers should refer directly to the `schema.prisma` file for the most up-to-date and accurate representation of the data model.

## Key Models

The schema is designed to support a full-featured B2B marketplace and includes the following key models:

- **User**: Represents all users of the platform, with roles for BUYER, SUPPLIER, and ADMIN.
- **SupplierProfile**: Contains detailed information about suppliers, including company details, KYC information, and verification status.
- **Category & Subcategory**: Organizes products into a hierarchical structure.
- **Product**: Represents the products or services listed by suppliers.
- **RFQ & Lead**: Manages the "Request for Quote" and lead generation process.
- **Plan & Subscription**: Handles the monetization and subscription tiers for suppliers.
- **Review**: Allows buyers to rate and review suppliers.
- **Notification**: Powers the user notification system.

For detailed information on the fields and relationships of each model, please consult the [`prisma/schema.prisma`](../prisma/schema.prisma) file.
