# User Search Application 🔍

A modern Next.js app that fetches users from an API and provides real-time search functionality.

![Next.js](https://img.shields.io/badge/Next.js-15.4.8-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## ✨ Features

- 🔄 Real-time search filtering by name
- 📱 Responsive design (mobile/tablet/desktop)
- ⚡ Loading spinner while fetching data
- 🎨 Modern UI with gradient backgrounds
- 🔍 Case-insensitive search

## 🛠 Tech Stack

- Next.js 15.4.8
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- JSONPlaceholder API

## 🚀 Quick Start

### Installation

```bash
# Create project
npx create-next-app@15.4.8 user-search-app

# Navigate to directory
cd user-search-app

# Install icons
npm install lucide-react

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Setup Options
When creating the project, select:
- ✅ TypeScript, ESLint, Tailwind CSS, src/ directory, App Router
- ❌ Customize import alias

## 📁 Project Structure

```
src/
└── app/
    ├── page.tsx       # Main component (replace this file)
    ├── layout.tsx
    └── globals.css
```

## 🌐 API Endpoint

Fetches from: `https://jsonplaceholder.typicode.com/users`

Returns 10 users with: `id`, `name`, `email`, `company.name`

## 💡 Usage

1. Type in search box to filter users by name
2. Results update instantly
3. Clear search to show all users

**Example searches:** `"Leanne"`, `"graham"`, `"xyz"` (shows no results)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Module not found 'lucide-react' | Run `npm install lucide-react` |
| Blank screen | Add `'use client';` at top of page.tsx |
| TypeScript errors | Ensure `interface User` is defined |
| Search not working | Check browser console (F12) for errors |

## ✅ Requirements Checklist

- ✅ Next.js v15.4.8 with TypeScript
- ✅ src/ directory structure
- ✅ Fetch from JSONPlaceholder API
- ✅ Search filter by name
- ✅ Display cards with Name, Email, Company
- ✅ Show loading state

---

