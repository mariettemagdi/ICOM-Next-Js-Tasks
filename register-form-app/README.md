# Register Form with Validation

## Overview

A Next.js registration form with real-time validation, API integration, and toast notifications. Features email/password fields with validation, loading states, and error handling.

## 🛠 Tech Stack

- **Next.js 15.4.8** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Query** - API calls
- **Lucide React** - Icons

##  Setup

```bash
# 1. Create project
npx create-next-app@15.4.8 register-form-app --typescript --tailwind --src-dir --app --no-git
cd register-form-app

# 2. Install dependencies
npm install react-hook-form zod @hookform/resolvers @tanstack/react-query
npm install clsx tailwind-merge class-variance-authority @radix-ui/react-toast

# 3. Install Shadcn components
npx shadcn@latest init -d
npx shadcn@latest add button input label form

# 4. Run app
npm run dev
```

Visit: **http://localhost:3000**

##  File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + providers
│   ├── page.tsx            # Main page
│   ├── providers.tsx       # React Query wrapper
│   └── globals.css
├── components/
│   ├── RegisterForm.tsx    # Main form logic
│   └── ui/                 # Shadcn components
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── toast.tsx       # Toast UI (manual)
│       └── toaster.tsx     # Toast container (manual)
├── hooks/
│   └── use-toast.ts        # Toast logic (manual)
└── lib/
    └── utils.ts            # cn() utility
```

## 🔄 Application Flow

```
User Input → Zod Validation → React Hook Form
                                    ↓
                            React Query Mutation
                                    ↓
                          POST /users/add API
                                    ↓
                        Success ✓ / Error ✗
                                    ↓
                            Toast Notification
```

## Component Architecture

```
layout.tsx
├── Providers (React Query)
│   └── page.tsx
│       └── RegisterForm
│           ├── useForm (React Hook Form)
│           ├── Zod Schema Validation
│           └── useMutation (API Call)
└── Toaster (Toast Notifications)
```

##  Key Features & Requirements

### Form Fields
- Email (validated format)
- Password (min 8 characters)
- Confirm Password (must match)

### Validation (Zod Schema)
```typescript
email: z.string().email()
password: z.string().min(8)
confirmPassword: must match password
```

### UI Features
-  Eye icon toggle for password visibility
-  Error messages under inputs
-  Disabled button during submission
-  Loading spinner on submit
-  Toast notifications (success/error)

### API Integration
- **Endpoint:** `https://dummyjson.com/users/add`
- **Method:** POST
- **Body:** `{ email, password, confirmPassword }`

## 🔧 Manual Toast Setup

Since Shadcn CLI may fail, create these files manually:

**1. `src/components/ui/toast.tsx`**
- Toast UI components with Radix primitives

**2. `src/hooks/use-toast.ts`**
- Toast state management (TypeScript only, NO JSX)

**3. `src/components/ui/toaster.tsx`**
- Toast container component

**4. `src/lib/utils.ts`**
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Toast errors | Create toast files manually, install `@radix-ui/react-toast` |
| JSX parsing error in `use-toast.ts` | File should have NO JSX, only TypeScript logic |
| `@/lib/utils` not found | Create `utils.ts` with `cn()` function |
| Form not submitting | Check React Query provider wraps app in `layout.tsx` |

##  Testing Checklist

1. **Valid submission** - Shows success toast, resets form
2. **Invalid email** - Shows error: "Please enter a valid email"
3. **Short password** - Shows error: "Password must be at least 8 characters"
4. **Password mismatch** - Shows error: "Passwords do not match"
5. **Password toggle** - Eye icon shows/hides password
6. **Loading state** - Button disables, shows spinner

##  Code Flow Explanation

### RegisterForm.tsx
1. Define Zod validation schema
2. Initialize React Hook Form with Zod resolver
3. Setup React Query mutation for API call
4. Create password visibility state
5. Handle form submit → validate → API call
6. Show success toast + reset OR show error toast

### providers.tsx
Wraps app with QueryClientProvider for React Query

### layout.tsx
Root layout with Providers + Toaster component

### Toast System
- `toast.tsx` - UI components
- `use-toast.ts` - State logic
- `toaster.tsx` - Renders active toasts

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Shadcn UI](https://ui.shadcn.com/)

---

**🚀 Ready to use!** Run `npm run dev` and start building.