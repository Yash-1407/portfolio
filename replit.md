# Pooja Rathod Portfolio Website

## Overview

This is a fully animated, aesthetically pleasing portfolio website for Pooja Rathod, an aspiring female software developer. The application uses a modern full-stack architecture with a React frontend and Express backend, featuring a "girly yet professional" design theme with soft colors and smooth animations throughout.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Animation Library**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database interactions
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Storage**: PostgreSQL sessions with connect-pg-simple

### Key Design Decisions
- **Monorepo Structure**: Organized with separate `client/`, `server/`, and `shared/` directories
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
- **Component-Driven**: Reusable animated components for consistent UX
- **Mobile-First**: Responsive design with mobile considerations

## Key Components

### Animation Components
- **AnimatedSection**: Intersection Observer-based animations with customizable directions
- **TypingAnimation**: Typewriter effect for dynamic text display
- **FlipCard**: 3D card flip animations for experience showcases
- **ProgressBar**: Animated skill progress indicators
- **ParticleBackground**: Floating particle effects for visual appeal

### Portfolio Sections
1. **Landing Page**: Animated hero section with typing effects
2. **About Me**: Fade-in biographical information
3. **Education Timeline**: Vertical timeline with animated milestones
4. **Experience Cards**: Interactive flip cards for roles and positions
5. **Skills Section**: Animated progress bars and soft skill displays
6. **Projects Showcase**: Gallery-style project cards with hover effects
7. **Achievements**: Badge-style animated achievement display
8. **Publications**: Hover-enhanced publication listings
9. **Contact Form**: Interactive contact form with validation

## Data Flow

### Frontend Data Management
- **React Query**: Handles API state management and caching
- **Form Handling**: React Hook Form with Zod validation
- **Animation State**: Framer Motion manages component animation states
- **Toast Notifications**: Custom toast system for user feedback

### Backend API Structure
- **RESTful Routes**: Organized under `/api` prefix
- **Middleware**: Request logging, JSON parsing, and error handling
- **Database Operations**: Abstracted through storage interface pattern

## External Dependencies

### Core Libraries
- **Framer Motion**: Advanced animation capabilities
- **Radix UI**: Accessible component primitives
- **TanStack Query**: Server state management
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling framework
- **ESBuild**: Fast JavaScript bundling

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations deployed via `db:push` command

### Environment Configuration
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express
- **Database**: Environment-based connection via `DATABASE_URL`

### Hosting Considerations
- **Static Assets**: Served from `dist/public` directory
- **API Routes**: Express server handles `/api` endpoints
- **Database**: PostgreSQL connection with session storage

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```