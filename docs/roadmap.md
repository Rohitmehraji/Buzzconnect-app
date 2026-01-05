# Roadmap

This document outlines the development roadmap for the BizzConnect application. The project will be implemented in several phases, starting with the core features and progressively adding more advanced functionality.

## Phase 1: Core Data Model and Authentication (In Progress)

- [ ] **Project Setup and Branding:**
  - [x] Update project name in `package.json`.
  - [x] Create initial documentation files (`architecture.md`, `data-model.md`, `roadmap.md`).
  - [x] Update `README.md` with new branding and instructions.
- [ ] **Data Model:**
  - [ ] Revise the Prisma schema to include all necessary models and relationships.
  - [ ] Use the `Decimal` type for monetary values.
- [ ] **Authentication:**
  - [ ] Implement user registration and login with email and password.
  - [ ] Use JWTs for session management, stored in http-only cookies.
  - [ ] Implement role-based access control (RBAC) for BUYER, SUPPLIER, and ADMIN roles.

## Phase 2: Supplier Onboarding and Product Management

- [ ] **Supplier Onboarding:**
  - [ ] Create a supplier registration form to collect company information and KYC details.
  - [ ] Implement a verification system for supplier profiles, managed by admins.
- [ ] **Product and Catalog Management:**
  - [ ] Create a hierarchical category and subcategory system.
  - [ ] Allow suppliers to create, edit, and manage their product listings.
  - [ ] Implement product status management (ACTIVE, DRAFT, ARCHIVED).

## Phase 3: Search, Discovery, and RFQ System

- [ ] **Search and Discovery:**
  - [ ] Implement a global search bar for products and suppliers.
  - [ ] Add filters for category, location, price, etc.
  - [ ] Implement sorting and pagination for search results.
- [ ] **RFQ and Lead Management:**
  - [ ] Allow buyers to submit generic RFQs and direct inquiries.
  - [ ] Create a lead management system for suppliers to respond to inquiries.
  - [ ] Implement a dashboard for buyers to track their RFQs and responses.

## Phase 4: Messaging, Notifications, and Monetization

- [ ] **Messaging and Notifications:**
  - [ ] Implement an internal messaging system for buyers and suppliers.
  - [ ] Create a notification center for important events.
  - [ ] Abstract email notifications for future integration.
- [ ] **Monetization:**
  - [ ] Create subscription plans with different limits and features.
  - [ ] Implement a basic upgrade UI and enforcement checks.
  - [ ] Create a payment integration stub for future use.

## Phase 5: Reviews, Ratings, and Admin Panel

- [ ] **Reviews and Ratings:**
  - [ ] Allow buyers to rate and review suppliers.
  - [ ] Display average ratings on supplier profiles and product pages.
- [ ] **Admin Panel:**
  - [ ] Create a comprehensive admin panel to manage users, suppliers, and content.
  - [ ] Implement basic analytics to track key metrics.
