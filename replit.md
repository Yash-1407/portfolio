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
- **State Management**: React hooks for local state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: No database - simplified static portfolio
- **API**: Single contact form endpoint for message logging

### Key Design Decisions
- **Simplified Structure**: Organized with separate `client/` and `server/` directories only
- **No Database**: Completely static portfolio with contact form logging
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
- **Local State**: React hooks for component state management
- **Form Handling**: Native form handling with fetch API
- **Animation State**: Framer Motion manages component animation states
- **Toast Notifications**: Custom toast system for user feedback

### Backend API Structure
- **Single Endpoint**: Contact form submission at `/api/contact`
- **Middleware**: Request logging, JSON parsing, and error handling
- **No Database**: Contact submissions are logged to console only

## External Dependencies

### Core Libraries
- **Framer Motion**: Advanced animation capabilities
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundling

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **No Database**: Simple static portfolio deployment

### Environment Configuration
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express

### Hosting Considerations
- **Static Assets**: Served from `dist/public` directory
- **API Routes**: Single contact endpoint at `/api/contact`
- **No Database**: Simplified deployment without database dependencies

## Changelog

```
Changelog:
- July 01, 2025. Initial setup with full database architecture
- July 01, 2025. Simplified structure - removed database, storage, and routes files
- July 01, 2025. Converted to static portfolio with single contact endpoint
- July 01, 2025. Added device optimization and easy deployment features
- July 01, 2025. Implemented mobile navigation, lazy loading, and PWA capabilities
- July 01, 2025. Created comprehensive README for easy implementation on any device
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```