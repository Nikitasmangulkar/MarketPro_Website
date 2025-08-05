# MarketPro - Business Marketing Solutions

## Overview

MarketPro is a professional business marketing solutions website built as a modern full-stack application. The application serves as a marketing agency's web presence, featuring service showcases, client testimonials, contact forms, and newsletter subscription functionality. It's designed to attract potential clients and demonstrate the agency's capabilities through a polished, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing a consistent and accessible design system.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected for fast hot module replacement and optimized builds
- **shadcn/ui + Radix UI**: Provides accessible, customizable components with consistent styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Wouter**: Lightweight client-side routing library chosen over React Router for simplicity
- **TanStack Query**: Data fetching and caching library for API interactions

### Backend Architecture
The backend follows a minimal Express.js REST API architecture with clear separation of concerns. The server provides API endpoints for contact form submissions and newsletter subscriptions, with proper validation and error handling.

**Key Backend Decisions:**
- **Express.js**: Lightweight web framework chosen for simplicity and minimal overhead
- **TypeScript**: Consistent typing across the entire application stack
- **Memory Storage**: Simple in-memory storage implementation with interface abstraction for easy database migration
- **Zod Validation**: Schema validation for API inputs ensuring data integrity
- **Shared Schema**: Common type definitions between frontend and backend preventing API contract mismatches

### Data Storage Solutions
Currently implements an in-memory storage solution with a well-defined interface that abstracts storage operations. This design allows for easy migration to a persistent database solution.

**Storage Interface Design:**
- Abstract storage interface (`IStorage`) defines contract for data operations
- Memory storage implementation for development and testing
- Schema definitions using Drizzle ORM for future PostgreSQL integration
- Proper type safety with shared schema definitions

### Form Handling and Validation
The application implements robust form handling with client-side and server-side validation to ensure data quality and user experience.

**Form Architecture:**
- React Hook Form for client-side form state management
- Zod schemas for validation rules shared between client and server
- Real-time validation feedback with accessible error messages
- Success states and user feedback through toast notifications

### Styling and Design System
The application uses a comprehensive design system built on Tailwind CSS with custom CSS variables for theming and consistency.

**Design Decisions:**
- Tailwind CSS for utility-first styling approach
- CSS custom properties for theme variables enabling easy customization
- Responsive design patterns for mobile-first approach
- Professional blue and amber color scheme for brand identity
- Inter font family for modern, readable typography

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for building the component library
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx & tailwind-merge**: Conditional CSS class management and conflict resolution
- **tailwindcss**: Utility-first CSS framework for styling
- **lucide-react**: Icon library providing consistent iconography

### Form Management
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: TypeScript-first schema validation library

### Data Fetching
- **@tanstack/react-query**: Server state management and data fetching with caching capabilities

### Database and Schema
- **drizzle-orm**: TypeScript ORM for database operations and schema management
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe schema validation
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for better debugging experience

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: Unique ID generation for database records
- **wouter**: Lightweight client-side routing