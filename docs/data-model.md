# Data Model

This document describes the database schema for the BizzConnect application. The schema is defined in the `prisma/schema.prisma` file and serves as the single source of truth.

## Enums

### `Role`
Defines the possible roles for a user.
- `BUYER`
- `SUPPLIER`
- `ADMIN`

### `VerificationStatus`
Defines the verification status of a supplier's profile.
- `PENDING`
- `VERIFIED`
- `REJECTED`

### `ProductStatus`
Defines the status of a product listing.
- `ACTIVE`
- `DRAFT`
- `ARCHIVED`

### `LeadStatus`
Defines the status of a lead/RFQ.
- `OPEN`
- `IN_PROGRESS`
- `CLOSED`
- `EXPIRED`

### `SubscriptionStatus`
Defines the status of a supplier's subscription.
- `ACTIVE`
- `INACTIVE`
- `CANCELLED`

## Models

### `User`
Stores user account information.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `email` | `String` | Unique email for login |
| `name` | `String` | User's full name |
| `password` | `String` | Hashed password |
| `role` | `Role` | User role (BUYER, SUPPLIER, ADMIN) |
| `createdAt` | `DateTime` | Timestamp of creation |
| `updatedAt` | `DateTime` | Timestamp of last update |

### `SupplierProfile`
Stores detailed information for users with the `SUPPLIER` role.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `companyName` | `String` | Registered company name |
| `address` | `String` | Business address |
| `gstNumber` | `String` | GSTIN |
| `panNumber` | `String` | PAN |
| `contactPhone`| `String` | Business phone number |
| `contactEmail`| `String` | Business email |
| `verificationStatus` | `VerificationStatus`| KYC status |
| `userId` | `Int` | Foreign key to `User` |

### `Category` & `Subcategory`
Represents the product category hierarchy.
- **Category**: `id`, `name`
- **Subcategory**: `id`, `name`, `categoryId`

### `Product`
Represents a product listed by a supplier.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `title` | `String` | Product name |
| `description` | `String` | Detailed product description |
| `price` | `Float?` | Price per unit (optional) |
| `priceOnRequest`| `Boolean` | Flag if price is not disclosed |
| `minOrderQuantity`|`Int`| Minimum Order Quantity (MOQ) |
| `status` | `ProductStatus` | Product's visibility status |
| `supplierId` | `Int` | Foreign key to `User` (supplier) |
| `subcategoryId`|`Int`| Foreign key to `Subcategory` |

### `Rfq` (Request for Quote)
Represents a quote request submitted by a buyer.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `description` | `String` | Buyer's requirements |
| `quantity` | `Int` | Required quantity |
| `budget` | `Float?`| Optional budget |
| `buyerId` | `Int` | Foreign key to `User` (buyer) |

### `Lead`
Represents an RFQ that has been sent to a specific supplier.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `status` | `LeadStatus` | Current status of the lead |
| `rfqId` | `Int` | Foreign key to `Rfq` |
| `supplierId` | `Int` | Foreign key to `User` (supplier) |

### `LeadMessage`
Represents a message within a lead's conversation.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `content` | `String` | Message text |
| `leadId` | `Int` | Foreign key to `Lead` |
| `senderId` | `Int` | Foreign key to `User` (sender) |
| `receiverId` | `Int` | Foreign key to `User` (receiver) |

### `Plan` & `Subscription`
Manages monetization tiers.
- **Plan**: `id`, `name`, `price`, `productLimit`, `leadLimit`
- **Subscription**: `id`, `startDate`, `endDate`, `status`, `userId`, `planId`

### `Review`
Stores ratings and reviews left by buyers for suppliers.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `rating` | `Int` | Rating from 1 to 5 |
| `comment` | `String?`| Optional review text |
| `authorId` | `Int` | Foreign key to `User` (buyer) |
| `supplierId` | `Int` | Foreign key to `User` (supplier) |

### `Notification`
Stores notifications for users.
| Field | Type | Description |
|---|---|---|
| `id` | `Int` | Primary Key |
| `message` | `String` | Notification content |
| `isRead` | `Boolean` | Read status |
| `recipientId` | `Int` | Foreign key to `User` |
