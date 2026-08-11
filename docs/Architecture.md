# TeamSync Architecture

## Purpose

This document provides the high-level architecture of TeamSync and explains the reasoning behind major technical decisions.

---

# High-Level Architecture

```
                    React Web Application
                            │
                            │ REST API
                            ▼
                    NestJS Backend API
                            │
      ┌─────────────────────┼─────────────────────┐
      │                     │                     │
 Authentication        Workspace            Task Module
      │                     │                     │
      └─────────────────────┼─────────────────────┘
                            │
                     PostgreSQL Database
                            │
                     Transactional Outbox
                            │
                            ▼
                        Kafka Broker
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
 Notification          Activity          Email Consumer
    Module              Module
       │
       ▼
 WebSocket Gateway
       │
       ▼
 Connected React Clients
```

---

# Architecture Style

The initial implementation follows a **Modular Monolith** architecture.

Each business capability is implemented as an independent NestJS module with clear boundaries.

Modules communicate through well-defined interfaces and domain events.

As the application grows, individual modules can be extracted into independent microservices without changing the overall business logic.

---

# Core Domains

- Authentication
- User
- Workspace
- Task
- Notification
- Activity
- File Storage
- Chat (Future)

The **Task** domain is the core business domain.

All other modules support task execution and collaboration.

---

# Frontend Architecture

The frontend follows a **feature-based architecture**.

```
features/

    auth/

    workspace/

    task/

    notification/

shared/

layouts/

routes/
```

Each feature owns:

- Components
- Hooks
- API Layer
- Types
- Utilities

React components never communicate directly with Axios.

Communication flow:

Component

↓

Custom Hook

↓

API Layer

↓

Axios Client

↓

Backend API

---

# Backend Architecture

NestJS follows a layered architecture.

Request

↓

Controller

↓

Service

↓

Repository

↓

Prisma

↓

PostgreSQL

Responsibilities:

Controller

- Input validation
- Request handling
- Response formatting

Service

- Business rules
- Domain logic
- Permission checks

Repository

- Database interaction only

---

# Event-Driven Design

Business events are published through Kafka.

Examples:

- TaskCreated
- TaskAssigned
- TaskCompleted
- CommentAdded
- MemberInvited

The Transactional Outbox Pattern ensures events are never lost.

Business transaction:

1. Update domain data.
2. Insert Outbox record.
3. Commit transaction.

Background workers publish pending events to Kafka.

Consumers process events independently.

---

# Real-Time Communication

Immediate user notifications are delivered through WebSockets.

Flow:

Task Assigned

↓

Outbox

↓

Kafka

↓

Notification Module

↓

WebSocket Gateway

↓

React Client

↓

React Query Cache Update

---

# Data Storage

Primary Database

- PostgreSQL

Object Storage

- Amazon S3

Only file metadata is stored inside PostgreSQL.

Actual file content is stored in object storage.

---

# Security

Authentication

- JWT Access Token
- Refresh Token
- Role-Based Access Control

Authorization

- Permission-based access checks
- Workspace-level roles
- Future support for fine-grained permissions

---

# Guiding Principles

- Prefer simplicity over premature optimization.
- Build modules that can evolve independently.
- Hide implementation details behind stable interfaces.
- Database schema is not an API contract.
- Every architectural decision should optimize maintainability first, scalability second.

---

This document will evolve as TeamSync grows. Significant architectural decisions will be captured separately as Architecture Decision Records (ADRs).
