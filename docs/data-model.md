# Data Model

This document describes the database schema for the BizzConnect application, managed by Prisma.

## Entities and Relations

The following is a high-level overview of the main entities and their relationships.

- **User:** Represents a user of the platform. Can have a role of `BUYER`, `SUPPLIER`, or `ADMIN`.
- **SupplierProfile:** Contains detailed information about a supplier's company.
- **Category & Subcategory:** Organizes products into a hierarchical structure.
- **Product:** Represents a product or service listed by a supplier.
- **RFQ / Lead:** Represents a Request for Quotation submitted by a buyer.
- **Message:** Represents a message in the communication between a buyer and a supplier.
- **Plan & Subscription:** Manages the subscription plans for suppliers.
- **Review:** Represents a review and rating given by a buyer to a supplier.
- **Notification:** Represents a notification for a user.

*This document will be updated with a more detailed schema diagram and field descriptions as the project progresses.*
