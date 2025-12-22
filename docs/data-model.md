# Data Model

This document provides a high-level overview of the database schema for the BizzConnect application. The single source of truth for the data model is `prisma/schema.prisma`.

## Schema Overview

The database is designed to support a B2B marketplace. The core entities are:

- **User**: Represents an individual user of the platform, who can be a buyer, a supplier, or an admin.
- **SupplierProfile**: Contains detailed information about a supplier's business.
- **Category**: Defines the categories and subcategories for products.
- **Product**: Represents a product or service listed by a supplier.
- **Lead**: Represents a request for quotation (RFQ) or an inquiry from a buyer.
- **Message**: Represents a message in a conversation between a buyer and a supplier.
- **Plan**: Defines the subscription plans for suppliers.
- **Subscription**: Represents a supplier's subscription to a plan.
- **Review**: Represents a review and rating of a supplier by a buyer.
- **Notification**: Represents a notification for a user.
