# ADR-002: Use PostgreSQL as the Primary Database

**Status:** Accepted

**Date:** 2026-08-06

## Context

TeamSync manages highly relational business entities including Users, Workspaces, Tasks, Assignments, Comments, Notifications, and Activity Logs.

The application requires strong consistency, transactional updates, and relational integrity.

## Decision

PostgreSQL will be used as the primary relational database.

Prisma ORM will be used for database access.

## Alternatives Considered

### MongoDB

**Pros**

- Flexible schema
- Fast document storage
- Easy horizontal scaling

**Cons**

- Complex relationship management
- Data duplication
- More difficult transactional workflows

## Rationale

PostgreSQL provides:

- ACID transactions
- Foreign key constraints
- Strong relational modeling
- Powerful indexing
- Mature SQL ecosystem
- Excellent reporting capabilities

These characteristics align well with TeamSync's collaboration domain.

## Consequences

**Positive**

- Strong data consistency
- Normalized schema
- Easier complex queries

**Negative**

- Schema migrations required
- Less flexible than document databases
