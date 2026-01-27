# Data Model

This document describes the database schema for the BizzConnect application. The schema is defined in `prisma/schema.prisma`.

*This is an initial draft and will be updated as the application is developed.*

## User
Represents a user of the application.

- `id`: Int (Primary Key)
- `name`: String
- `email`: String (Unique)
- `password`: String
- `role`: Role (Enum: `BUYER`, `SUPPLIER`, `ADMIN`)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `supplierProfile`: `SupplierProfile?` (One-to-one)
- `rfqs`: `RFQ[]` (One-to-many)
- `reviews`: `Review[]` (One-to-many)
- `notifications`: `Notification[]` (One-to-many)
- `subscription`: `Subscription?` (One-to-one)

## SupplierProfile
Represents the profile of a supplier.

- `id`: Int (Primary Key)
- `userId`: Int (Foreign Key to `User`)
- `companyName`: String
- `address`: String
- `gstNumber`: String
- `panNumber`: String
- `contactNumber`: String
- `businessCategories`: String[]
- `serviceAreas`: String[]
- `certifications`: String[]
- `verificationStatus`: `VerificationStatus` (Enum: `PENDING`, `VERIFIED`, `REJECTED`)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `user`: `User` (One-to-one)
- `products`: `Product[]` (One-to-many)

## Category
Represents a product category.

- `id`: Int (Primary Key)
- `name`: String (Unique)
- `subcategories`: `Subcategory[]` (One-to-many)
- `products`: `Product[]` (One-to-many)

## Subcategory
Represents a product subcategory.

- `id`: Int (Primary Key)
- `name`: String
- `categoryId`: Int (Foreign Key to `Category`)
- `category`: `Category` (Many-to-one)
- `products`: `Product[]` (One-to-many)

## Product
Represents a product listed by a supplier.

- `id`: Int (Primary Key)
- `title`: String
- `description`: String
- `images`: String[]
- `price`: Float
- `priceOnRequest`: Boolean
- `moq`: Int (Minimum Order Quantity)
- `unit`: String
- `leadTime`: String
- `location`: String
- `tags`: String[]
- `status`: `ProductStatus` (Enum: `ACTIVE`, `DRAFT`, `ARCHIVED`)
- `supplierId`: Int (Foreign Key to `SupplierProfile`)
- `supplier`: `SupplierProfile` (Many-to-one)
- `categoryId`: Int (Foreign Key to `Category`)
- `category`: `Category` (Many-to-one)
- `subcategoryId`: Int (Foreign Key to `Subcategory`)
- `subcategory`: `Subcategory` (Many-to-one)
- `rfqs`: `RFQ[]` (One-to-many)

## RFQ (Request for Quote) / Lead
Represents a request for a quote from a buyer.

- `id`: Int (Primary Key)
- `buyerId`: Int (Foreign Key to `User`)
- `buyer`: `User` (Many-to-one)
- `productId`: Int? (Foreign Key to `Product`)
- `product`: `Product?` (Many-to-one)
- `category`: String
- `quantity`: Int
- `budget`: Float
- `location`: String
- `timeline`: String
- `description`: String
- `status`: `LeadStatus` (Enum: `OPEN`, `IN_PROGRESS`, `CLOSED`, `EXPIRED`)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `responses`: `LeadResponse[]` (One-to-many)

## LeadResponse
Represents a supplier's response to an RFQ.

- `id`: Int (Primary Key)
- `rfqId`: Int (Foreign Key to `RFQ`)
- `rfq`: `RFQ` (Many-to-one)
- `supplierId`: Int (Foreign Key to `SupplierProfile`)
- `supplier`: `SupplierProfile` (Many-to-one)
- `quote`: Float
- `message`: String
- `createdAt`: DateTime
- `messages`: `LeadMessage[]` (One-to-many)

## LeadMessage
Represents a message in a conversation between a buyer and a supplier for a specific lead.

- `id`: Int (Primary Key)
- `leadResponseId`: Int (Foreign Key to `LeadResponse`)
- `leadResponse`: `LeadResponse` (Many-to-one)
- `senderId`: Int (Foreign Key to `User`)
- `sender`: `User` (Many-to-one)
- `message`: String
- `createdAt`: DateTime

## Plan
Represents a subscription plan.

- `id`: Int (Primary Key)
- `name`: String
- `price`: Float
- `productLimit`: Int
- `leadLimit`: Int
- `priorityListing`: Boolean
- `subscriptions`: `Subscription[]` (One-to-many)

## Subscription
Represents a supplier's subscription to a plan.

- `id`: Int (Primary Key)
- `userId`: Int (Foreign Key to `User`)
- `user`: `User` (Many-to-one)
- `planId`: Int (Foreign Key to `Plan`)
- `plan`: `Plan` (Many-to-one)
- `startDate`: DateTime
- `endDate`: DateTime
- `status`: `SubscriptionStatus` (Enum: `ACTIVE`, `INACTIVE`, `CANCELLED`)

## Review
Represents a review of a supplier by a buyer.

- `id`: Int (Primary Key)
- `buyerId`: Int (Foreign Key to `User`)
- `buyer`: `User` (Many-to-one)
- `supplierId`: Int (Foreign Key to `SupplierProfile`)
- `supplier`: `SupplierProfile` (Many-to-one)
- `rating`: Int
- `comment`: String
- `createdAt`: DateTime
- `visible`: Boolean

## Notification
Represents a notification for a user.

- `id`: Int (Primary Key)
- `userId`: Int (Foreign Key to `User`)
- `user`: `User` (Many-to-one)
- `message`: String
- `read`: Boolean
- `createdAt`: DateTime
