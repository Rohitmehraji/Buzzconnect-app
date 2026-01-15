# BizzConnect Data Model

This document outlines the database schema for the BizzConnect application. The source of truth for the data model is `prisma/schema.prisma`.

## Models

- **User:** Stores user information, including authentication details and role.
- **SupplierProfile:** Contains detailed information about suppliers, including company details and verification status.
- **Category:** A hierarchical model for product categories.
- **Product:** Represents the products or services listed by suppliers.
- **RFQ:** A request for quotation submitted by a buyer.
- **Lead:** A lead generated from an RFQ, connecting a buyer with a supplier.
- **LeadMessage:** A message exchanged between a buyer and a supplier for a specific lead.
- **Plan:** Defines the subscription plans available to suppliers.
- **Subscription:** Tracks the subscription status of a supplier.
- **Review:** A review and rating submitted by a buyer for a supplier.
- **Notification:** Stores notifications for users.
