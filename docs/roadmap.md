# Development Roadmap

This document outlines the phased development plan for the BizzConnect platform.

## Phase 1: Foundation & User Onboarding

1.  **Project Setup & Rebranding**:
    *   [x] Rename project and update `README.md`.
    *   [x] Establish documentation structure (`architecture.md`, `data-model.md`, `roadmap.md`).
2.  **Schema & Authentication**:
    *   [ ] Overhaul the Prisma schema to support all core features.
    *   [ ] Implement a robust email/password authentication system with JWTs.
    *   [ ] Implement role-based access control (RBAC) middleware.
3.  **User & Supplier Onboarding**:
    *   [ ] Create sign-up and login pages.
    *   [ ] Develop the supplier profile creation and management dashboard.
    *   [ ] Implement the supplier KYC submission flow.

## Phase 2: Core Marketplace Features

4.  **Product & Service Catalog**:
    *   [ ] Implement the category and subcategory hierarchy.
    *   [ ] Develop the supplier product listing and management dashboard.
    *   [ ] Create public-facing product detail pages.
5.  **Search & Discovery**:
    *   [ ] Implement a global search bar for products and suppliers.
    *   [ ] Add filtering by category, location, and other attributes.
    *   [ ] Implement sorting and pagination for search results.

## Phase 3: RFQ & Lead Management

6.  **RFQ / "Get Quotes" System**:
    *   [ ] Implement the buyer RFQ submission form.
    *   [ ] Create the lead generation and notification system for suppliers.
    *   [ ] Develop the buyer and supplier dashboards for managing RFQs and quotes.
7.  **Messaging & Notifications**:
    *   [ ] Implement a basic messaging system between buyers and suppliers for each lead.
    *   [ ] Create a user notification center for key events.
    *   [ ] Abstract email notifications to be integrated with a provider later.

## Phase 4: Monetization, Reviews & Admin Panel

8.  **Plans & Subscriptions**:
    *   [ ] Implement the subscription plan model in the database.
    *   [ ] Create a basic upgrade UI and enforce plan limits.
    *   [ ] Stub out the payment integration interface.
9.  **Reviews & Ratings**:
    *   [ ] Implement the supplier review and rating system.
    *   [ ] Display average ratings on supplier profiles and product pages.
10. **Admin Panel**:
    *   [ ] Develop the user management dashboard.
    *   [ ] Implement the supplier verification and product moderation tools.
    *   [ ] Create a basic analytics dashboard.

*This roadmap is a living document and may be adjusted as the project evolves.*
