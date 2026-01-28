# Data Model

This document describes the database schema for the BizzConnect application. The single source of truth for the data model is `prisma/schema.prisma`.

## Entities and Relations

The initial data model will be expanded to include the following entities:

- **User**: Represents a user of the platform, with roles (BUYER, SUPPLIER, ADMIN).
- **SupplierProfile**: Contains detailed information about a supplier's company.
- **Category**: A top-level category for products (e.g., "Industrial Machinery").
- **Subcategory**: A sub-category within a Category (e.g., "Lathe Machines").
- **Product**: A product or service offered by a supplier.
- **RFQ / Lead**: A request for quote submitted by a buyer.
- **LeadMessage**: A message exchanged between a buyer and supplier for a specific lead.
- **Plan**: A subscription plan for suppliers.
- **Subscription**: A supplier's subscription to a plan.
- **Review**: a review of a supplier by a buyer.
- **Notification**: A notification for a user.
