# Real Estate Landing Page

A modern, responsive real estate landing page built with Next.js 15, TypeScript, and Tailwind CSS, featuring pixel-perfect implementation from Figma design.

## 🎨 Design

Figma Design: [View Design](https://www.figma.com/design/ithZWareoGkkCls4cBm58v/Untitled?node-id=0-1&p=f)

## 🚀 Tech Stack

- **Framework:** Next.js 15.4.8
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Animations:** Framer Motion
- **Architecture:** src directory structure

## ✨ Features

- ✅ Pixel-perfect implementation from Figma design
- ✅ Fully responsive (mobile-first approach)
- ✅ Modern UI components from Shadcn
- ✅ Smooth animations and transitions
- ✅ TypeScript for type safety
- ✅ Optimized performance
- ✅ SEO-friendly structure

## 📋 Requirements Met

- [x] Next.js v15.4.8
- [x] TypeScript
- [x] src directory structure
- [x] Pixel-perfect layout matching Figma
- [x] Tailwind CSS for styling
- [x] Mobile-first responsive design
- [x] Shadcn UI components
- [x] Framer Motion animations

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd real-estate-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Dependencies
```json
{
  "dependencies": {
    "next": "15.4.8",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "framer-motion": "^11.x",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

## 📁 Project Structure
```
real-estate-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/          # Shadcn components
│   │   ├── Hero.tsx
│   │   ├── PropertyCard.tsx
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎭 Animations

The project includes smooth animations using Framer Motion:
- Hover effects on property cards
- Fade-in animations on scroll
- Smooth page transitions
- Interactive button states

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎨 Shadcn Components Used

- Button
- Card
- Input
- Badge
- Dialog
- Select
- Carousel

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` includes:
- Custom colors matching Figma design
- Extended spacing and sizing
- Custom animations

### TypeScript
Strict mode enabled with proper type checking for all components.

## 📝 Development Notes

- All components are fully typed with TypeScript
- Mobile-first approach for all responsive designs
- Reusable components following DRY principles
- Optimized images using Next.js Image component
- Semantic HTML for accessibility

## 🚢 Deployment

The project is ready to be deployed on Vercel:
```bash
npm run build
```

Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🧪 Testing
```bash
npm run lint
npm run type-check
```

## 📄 License

MIT

## 👤 Author

Your Name - [GitHub](https://github.com/yourusername)

---

**Note:** This project was built as a pixel-perfect implementation of the provided Figma design, meeting all specified requirements including Next.js 15.4.8, TypeScript, Tailwind CSS, Shadcn components, and animations.