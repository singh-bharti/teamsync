# TeamSync

> A real-time engineering collaboration platform built using React, NestJS, PostgreSQL, Kafka, Docker, and TypeScript.

---

# Overview

TeamSync is a collaborative execution platform designed for software engineering teams. It combines project management, task tracking, team communication, and real-time notifications into a single application.

Unlike traditional project management tools that require switching between multiple applications for task management, communication, and notifications, TeamSync keeps everything centered around the task.

---

# Vision

To provide engineering teams with a unified platform where planning, execution, collaboration, and communication happen seamlessly.

---

# Core Features

## Workspace Management

- Create and manage workspaces
- Invite team members
- Role-based access control
- Multi-workspace support

## Task Management

- Create tasks
- Assign multiple users
- Priority management
- Status workflow
- Comments
- Attachments
- Activity timeline

## Collaboration

- Workspace chat
- Task discussions (future)
- Real-time notifications
- Presence indicators (future)

## Notifications

- Instant task assignment notifications
- Comment notifications
- Mention notifications
- Email notifications

## Activity Timeline

Track every important business event including:

- Task creation
- Task assignment
- Status updates
- Member invitations
- Workspace changes

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Zod
- Axios
- Tailwind CSS
- Zustand

## Backend

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM

## Infrastructure

- Docker
- Docker Compose

## Messaging

- Apache Kafka
- Transactional Outbox Pattern

## Storage

- Amazon S3 (or compatible object storage)

---

# Architecture Principles

- Modular Monolith
- Domain-Driven Design
- Event-Driven Communication
- Feature-Based Frontend Structure
- API First Design
- Clean Architecture
- Separation of Concerns

---

# Repository Structure

```
teamsync/

apps/
    web/
    api/

packages/
    shared/
    ui/
    config/

infra/
    docker/

docs/

.github/
```

---

# Development Principles

- Every feature starts with a design discussion.
- API contracts are defined before implementation.
- UI should never depend on database schema.
- Business logic belongs in services, not controllers.
- React components focus on presentation.
- Shared logic should be reusable.
- Every architectural decision must have a documented reason.

---

# Development Workflow

Requirement

↓

Design Discussion

↓

Implementation

↓

Code Review

↓

Refactoring

↓

Testing

↓

Merge

---

# Local Infrastructure

TeamSync uses Docker Compose for local infrastructure dependencies.

For now, Docker runs PostgreSQL. The React and NestJS applications run on the host machine during development so hot reload, debugging, and TypeScript feedback stay fast.

## Environment

Create a local `.env` from `.env.example` before starting infrastructure.

## Commands

```bash
pnpm docker:up
```

Starts local infrastructure in the background.

```bash
pnpm docker:ps
```

Shows running TeamSync containers.

```bash
pnpm docker:logs
```

Streams container logs.

```bash
pnpm docker:down
```

Stops containers while keeping database data.

```bash
pnpm docker:reset
```

Stops containers and deletes local database volume data.

---

# Future Roadmap

- Authentication
- Workspace Management
- Task Management
- Notifications
- WebSocket Support
- Activity Timeline
- Chat
- AI Assistant
- Kubernetes Deployment

---

# Authors

Engineering Team

- Tech Lead
- Senior Full Stack Engineer

Version: 1.0.0
