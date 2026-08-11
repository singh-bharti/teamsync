# ADR-004: Adopt a Feature-Based Frontend Architecture

**Status:** Accepted

**Date:** 2026-08-06

## Context

As TeamSync grows, organizing frontend code by file type (components, hooks, pages, utils) becomes difficult to navigate and maintain.

## Decision

The frontend will follow a **feature-based architecture**, where each business domain owns its components, hooks, API layer, types, and utilities.

Example:

```text
features/
    task/
        components/
        hooks/
        api/
        types/
        pages/

    workspace/
    auth/
    notification/
```

## Alternatives Considered

### Type-Based Structure

```text
components/
hooks/
pages/
utils/
```

**Pros**

- Easy for small projects

**Cons**

- Difficult to scale
- Related files become scattered
- Higher maintenance cost

## Rationale

A feature-based structure:

- Groups related code together
- Improves discoverability
- Simplifies ownership
- Scales naturally with application growth

## Consequences

**Positive**

- Better scalability
- Easier onboarding
- Reduced coupling between features

**Negative**

- Slightly more initial planning required
