# Data Model

The single source of truth for the data model is `prisma/schema.prisma`. This document provides a high-level overview of the entities and their relationships.

## Core Entities

- **User**: Represents a user of the platform. Can have one of three roles: `BUYER`, `SUPPLIER`, or `ADMIN`.
- **SupplierProfile**: Contains detailed information about a supplier, including company details, KYC information, and verification status.
- **Category**: A top-level category for products (e.g., "Industrial Machinery").
- **Subcategory**: A sub-category within a `Category` (e.g., "Construction Machinery").
- **Product**: A product or service listed by a supplier.
- **Rfq**: A "Request for Quote" submitted by a buyer.
- **LeadMessage**: A message sent in response to an RFQ.
- **Plan**: A subscription plan for suppliers.
- **Subscription**: A record of a supplier's subscription to a plan.
- **Review**: A review and rating of a product, submitted by a buyer.
- **Notification**: A notification for a user.
- **Enquiry**: A direct enquiry about a product.
