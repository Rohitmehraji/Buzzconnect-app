# BizzConnect Data Model

This document provides a high-level overview of the database schema for the BizzConnect application. The single source of truth for the data model is the Prisma schema file located at `prisma/schema.prisma`.

## Enums

- **Role**: Defines the user's role (`BUYER`, `SUPPLIER`, `ADMIN`).
- **VerificationStatus**: Tracks the KYC status of a supplier (`PENDING`, `VERIFIED`, `REJECTED`).
- **ProductStatus**: Manages the state of a product listing (`ACTIVE`, `DRAFT`, `ARCHIVED`).
- **LeadStatus**: Tracks the progress of an RFQ lead (`OPEN`, `IN_PROGRESS`, `CLOSED`, `EXPIRED`).

## Models

### User
Represents an individual who can act as a Buyer, Supplier, or Admin.
- `id`: Unique identifier.
- `email`: Unique email for login.
- `password`: Hashed password.
- `name`: User's full name.
- `role`: User's role (defaults to `BUYER`).
- **Relations**:
    - Has one `SupplierProfile` (if they are a supplier).
    - Can write multiple `Review`s.
    - Can create multiple `RFQ`s.
    - Can send multiple `Message`s.
    - Can receive multiple `Notification`s.

### SupplierProfile
Contains detailed information for a user with the `SUPPLIER` role.
- `id`: Unique identifier.
- `userId`: Foreign key linking to the `User` model.
- `companyName`: The legal name of the supplier's company.
- `contactNumber`: Business contact number.
- `address`: Physical business address.
- `gstNumber`, `panNumber`: Tax identification numbers.
- `serviceAreas`: List of geographical areas the supplier serves.
- `certifications`: List of business certifications.
- `verificationStatus`: KYC verification status.
- **Relations**:
    - Belongs to one `User`.
    - Can have multiple `Product`s.
    - Can receive multiple `Lead`s.
    - Can receive multiple `Review`s.
    - Can have one `Subscription`.

### Category & Subcategory
Organizes products into a two-level hierarchy.
- `Category`: A top-level product category (e.g., "Industrial Machinery").
- `Subcategory`: A more specific category within a parent `Category` (e.g., "Lathe Machines").
- **Relations**:
    - A `Category` has many `Subcategory`s and many `Product`s.
    - A `Subcategory` belongs to one `Category` and has many `Product`s.

### Product
A product or service listed by a supplier.
- `id`: Unique identifier.
- `title`, `description`, `images`, `price`, `location`, `tags`.
- `minOrderQuantity`, `unit`, `leadTime`: Details for purchasing.
- `status`: The current state of the listing (`DRAFT`, `ACTIVE`).
- **Relations**:
    - Belongs to one `SupplierProfile`.
    - Belongs to one `Category` and optionally one `Subcategory`.

### RFQ (Request for Quote)
A buyer's request for a product or service.
- `id`: Unique identifier.
- `description`: Details of the buyer's requirements.
- `category`, `quantity`, `budget`, `location`, `timeline`.
- **Relations**:
    - Belongs to one `User` (the buyer).
    - Can generate multiple `Lead`s for different suppliers.

### Lead
Represents an RFQ that has been sent to a specific supplier.
- `id`: Unique identifier.
- `status`: The current state of the lead (`OPEN`, `IN_PROGRESS`).
- **Relations**:
    - Belongs to one `RFQ`.
    - Belongs to one `SupplierProfile`.
    - Can have multiple `Message`s.

### Message
A message within the context of a `Lead`, enabling communication between a buyer and a supplier.
- `id`: Unique identifier.
- `content`: The text of the message.
- **Relations**:
    - Belongs to one `Lead`.
    - Belongs to one `User` (the sender).

### Plan & Subscription
Manages the monetization model.
- `Plan`: Defines a subscription tier (e.g., "Free", "Premium") with specific limits (`productLimit`, `leadLimit`).
- `Subscription`: Links a `SupplierProfile` to a `Plan`.
- **Relations**:
    - A `Plan` can have many `Subscription`s.
    - A `Subscription` belongs to one `SupplierProfile` and one `Plan`.

### Review
A buyer's rating and comment for a supplier.
- `id`: Unique identifier.
- `rating`: A numerical score (1-5).
- `comment`: The text of the review.
- **Relations**:
    - Belongs to one `User` (the buyer).
    - Belongs to one `SupplierProfile`.

### Notification
A system-generated notification for a user.
- `id`: Unique identifier.
- `message`: The content of the notification.
- `isRead`: Whether the user has seen the notification.
- `link`: A URL to the relevant page.
- **Relations**:
    - Belongs to one `User`.
