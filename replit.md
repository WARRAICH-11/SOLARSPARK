# Solar Electric Pakistan - Website

## Overview

This is a premium solar installation company website for Solar Electric Pakistan. The application serves as a lead generation platform showcasing solar installation services across major Pakistani cities (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Gujrat, Gujranwala, Sialkot). Key features include an interactive solar savings calculator, installation pricing plans, product showcase, testimonials, and WhatsApp integration for customer support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll animations and transitions
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Development**: Vite middleware integration for HMR

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client/server)
- **Schema Validation**: Zod with drizzle-zod integration
- **Current Storage**: In-memory storage (`MemStorage` class) with PostgreSQL schema ready
- **Tables**: leads, calculator_usage, users

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (header, footer, sections)
│   │   ├── pages/        # Route pages (home, not-found)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
```

### Design System
- **Color Palette**: Deep Navy Blue (#1B3A5C) primary, Solar Yellow/Gold (#FFB700) accent
- **Typography**: Inter font family (Google Fonts)
- **Component Style**: shadcn/ui "new-york" style
- **Theme**: Light/dark mode support via CSS variables

### Key API Endpoints
- `POST /api/leads` - Submit lead form data
- `GET /api/leads` - Retrieve all leads
- `POST /api/calculator` - Log calculator usage

## External Dependencies

### Third-Party Services
- **WhatsApp Business**: Floating chat widget for customer support (+92 312 7739752)
- **Google Fonts**: Inter font family for typography

### Key NPM Packages
- **UI**: @radix-ui/* components, lucide-react icons, react-icons
- **Forms**: react-hook-form with @hookform/resolvers, zod validation
- **Data**: @tanstack/react-query, drizzle-orm
- **Styling**: tailwindcss, class-variance-authority, clsx, tailwind-merge
- **Animation**: framer-motion, embla-carousel-react

### Database
- PostgreSQL (configured via DATABASE_URL environment variable)
- Drizzle Kit for schema migrations (`drizzle-kit push`)
- connect-pg-simple for session storage (available but not currently used)

### Build & Deploy
- Vite for frontend bundling
- esbuild for server bundling
- GitHub Pages deployment configured (base path: `/SOLARSPARK/`)