# Data Model

This document describes the database schema for the BizzConnect application. The schema is defined in the `prisma/schema.prisma` file, which is the single source of truth for the data model.

## User
Represents a user of the application.

- `id`: Unique identifier for the user.
- `name`: Name of the user.
- `email`: Email address of the user (must be unique).
- `password`: Hashed password for the user.
- `role`: Role of the user (BUYER, SUPPLIER, or ADMIN).

## SupplierProfile
Stores additional information for users with the SUPPLIER role.

- `id`: Unique identifier for the supplier profile.
- `companyName`: Name of the supplier's company.
- `address`: Physical address of the company.
- `gstNumber`: GST number of the company.
- `panNumber`: PAN number of the company.
- `contactNumber`: Contact number for the company.
- `businessCategories`: Categories of business the supplier is in.
- `serviceAreas`: Areas where the supplier provides services.
- `certifications`: Any certifications the supplier has.
- `verificationStatus`: Verification status of the supplier (PENDING, VERIFIED, REJECTED).
- `user`: A one-to-one relationship with the User model.

## Category
Represents a product category.

- `id`: Unique identifier for the category.
- `name`: Name of the category.
- `subcategories`: A one-to-many relationship with the Subcategory model.

## Subcategory
Represents a product subcategory.

- `id`: Unique identifier for the subcategory.
- `name`: Name of the subcategory.
- `category`: A many-to-one relationship with the Category model.

## Product
Represents a product or service offered by a supplier.

- `id`: Unique identifier for the product.
- `title`: Title of the product.
- `description`: Description of the product.
- `images`: URLs of product images.
- `price`: Price of the product (can be "on request").
- `moq`: Minimum order quantity.
- `units`: Units of the product (e.g., kg, piece).
- `leadTime`: Time required to ship the product.
- `location`: Location of the product.
- `tags`: Keywords or tags associated with the product.
- `status`: Status of the product (ACTIVE, DRAFT, ARCHIVED).
- `supplier`: A many-to-one relationship with the User model.

## RFQ / Lead
Represents a Request for Quote (RFQ) or a lead.

- `id`: Unique identifier for the RFQ.
- `category`: Category of the required product.
- `quantity`: Quantity of the product required.
- `budget`: Budget for the RFQ.
- `location`: Location where the product is required.
- `timeline`: Timeline for the RFQ.
- `status`: Status of the RFQ (OPEN, IN_PROGRESS, CLOSED, EXPIRED).
- `buyer`: A many-to-one relationship with the User model.

## LeadMessage
Represents a message in a conversation between a buyer and a supplier for a specific lead.

- `id`: Unique identifier for the message.
- `message`: Content of the message.
- `sender`: The user who sent the message.
- `receiver`: The user who received the message.
- `lead`: The lead to which the message belongs.

## Plan
Represents a subscription plan.

- `id`: Unique identifier for the plan.
- `name`: Name of the plan.
- `price`: Price of the plan.
- `productLimit`: Number of active products allowed.
- `leadLimit`: Number of monthly leads allowed.
- `priorityListing`: Whether the plan includes priority listing.

## Subscription
Represents a user's subscription to a plan.

- `id`: Unique identifier for the subscription.
- `user`: The user who is subscribed.
- `plan`: The plan to which the user is subscribed.
- `startDate`: Start date of the subscription.
- `endDate`: End date of the subscription.
- `status`: Status of the subscription (ACTIVE, CANCELED, EXPIRED).

## Review
Represents a review or rating given by a buyer to a supplier.

- `id`: Unique identifier for the review.
- `rating`: Rating given by the buyer (1-5).
- `comment`: Comment or review text.
- `buyer`: The user who wrote the review.
- `supplier`: The user who was reviewed.

## Notification
Represents a notification for a user.

- `id`: Unique identifier for the notification.
- `message`: Notification message.
- `read`: Whether the notification has been read.
- `user`: The user who received the notification.
