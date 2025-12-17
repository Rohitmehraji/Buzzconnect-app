# Roadmap

This document outlines the development roadmap for the BizzConnect platform.

## Iteration 1: Core Data Model and Authentication

*   [x] Create initial documentation files (`architecture.md`, `data-model.md`, `roadmap.md`).
*   [ ] Define and implement the core data model in `prisma/schema.prisma`.
*   [ ] Implement user authentication (email/password) with JWTs.
*   [ ] Implement role-based access control for `BUYER`, `SUPPLIER`, and `ADMIN` roles.
*   [ ] Update the `README.md` file.

## Iteration 2: Supplier Onboarding and Product Catalog

*   [ ] Implement supplier KYC/profile creation and management.
*   [ ] Implement product and service catalog with categories and subcategories.
*   [ ] Implement product listing and management for suppliers.

## Iteration 3: Search, Discovery, and RFQs

*   [ ] Implement global search for products and suppliers with filters.
*   [ ] Implement the RFQ (Request for Quote) system.
*   [ ] Implement buyer and supplier dashboards for managing RFQs.

## Iteration 4: Messaging, Notifications, and Subscriptions

*   [ ] Implement a basic messaging system between buyers and suppliers.
*   [ ] Implement a notification center and email notifications.
*   [ ] Implement a basic subscription model with free and paid tiers.

## Iteration 5: Reviews, Ratings, and Admin Panel

*   [ ] Implement a review and rating system for suppliers.
*   [ ] Build an admin panel for user and product management.
*   [ ] Implement basic analytics for the admin dashboard.
