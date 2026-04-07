# Next.js 15.5.9 Professional Setup

A production-grade Next.js application with TypeScript, Tailwind CSS, Radix UI, TanStack Query, and Axios.

## Features

- **Next.js 15.5.9** - Latest Next.js with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first CSS
- **Radix UI** - Accessible component primitives
- **TanStack Query** - Powerful data synchronization
- **Axios** - HTTP client with interceptors
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Sonner** - Beautiful toast notifications

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
│   └── api/             # API-related hooks
├── services/             # API services
│   └── api/             # Service modules
├── lib/                  # Utility functions
│   ├── axios.ts         # Axios instance & interceptors
│   └── utils.ts         # Helper functions
├── providers/            # React context providers
│   └── index.tsx        # Query provider setup
├── types/                # TypeScript type definitions
│   └── api.types.ts     # API types
└── public/               # Static assets
    ├── logo.svg
    └── favicon.svg
```

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## API Integration

### Creating a Service

Services are located in `services/api/`:

```typescript
// services/api/example.service.ts
import { apiClient } from '@/lib/axios'

export const exampleService = {
  getItems: async () => {
    const response = await apiClient.get('/items')
    return response.data
  },
}
```

### Creating a Hook

Hooks are located in `hooks/api/`:

```typescript
// hooks/api/use-example.ts
import { useQuery } from '@tanstack/react-query'
import { exampleService } from '@/services/api/example.service'

export function useItems() {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => exampleService.getItems(),
  })
}
```

### Using in Components

```typescript
'use client'

import { useItems } from '@/hooks/api/use-example'

export function ExampleComponent() {
  const { data, isLoading, error } = useItems()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return <div>{/* Render data */}</div>
}
```

## Features

### Axios Configuration

- Request/response interceptors
- Automatic token management
- Error handling with toast notifications
- Configurable timeout and base URL

### TanStack Query

- Automatic caching and revalidation
- Optimistic updates
- Query invalidation
- DevTools for debugging

### Type Safety

- Full TypeScript support
- API type definitions
- Zod schema validation

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Radix UI](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)
