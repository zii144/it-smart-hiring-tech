# IT Smart Hiring - Job Opportunities 2026

A modern recruitment website for IT Smart Co., Ltd. showcasing job opportunities for 2026.

## Overview

This is a Next.js-based single-page application featuring an immersive user experience with 3D graphics, animations, and modern UI components. The site showcases four key positions available at IT Smart.

## Available Positions

- **Junior Software Engineer** - Starting point from feature implementation to system understanding
- **System Usage Quality Coordinator** - Key role bridging users and systems
- **Digital Education Content Architect** - Transforming knowledge into learnable systems
- **Graphic Visual Designer** - Making content understandable, usable, and memorable

## Tech Stack

### Core Framework

- [Next.js](https://nextjs.org) 16.1.1 (App Router)
- [React](https://react.dev) 19.2.3
- [TypeScript](https://www.typescriptlang.org)

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com) 4.1.18
- [Motion](https://motion.dev) 12.23.26 - Animation library
- [Lucide React](https://lucide.dev) - Icon library
- [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility functions

### 3D Graphics & Visual Effects

- [Three.js](https://threejs.org) 0.182.0
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) 9.4.2 - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) 10.7.7 - Useful helpers for react-three-fiber
- [Shader Gradient](https://shadergradient.co) 2.4.20 - Gradient effects

### Additional Libraries

- [@tsparticles/react](https://particles.js.org) - Particle effects
- [class-variance-authority](https://cva.style) - Component variant management

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── cta-button.tsx
│   │   ├── motion-drawer.tsx
│   │   ├── scroll-text.tsx
│   │   └── scroll-text-marque.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LoadingScreen.tsx
│   ├── MotionDrawerNav.tsx
│   ├── RoleSection.tsx
│   ├── SectionMarquee.tsx
│   ├── ShaderBackground.tsx
│   └── sparkles.tsx
├── hooks/                # Custom React hooks
│   └── useSectionInView.ts
├── lib/                  # Utility functions
│   └── utils.ts
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) (recommended) or npm/yarn

### Installation

Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:4500](http://localhost:4500) in your browser to see the result.

The development server uses webpack and runs on port 4500.

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

### Running Production Build

Start the production server:

```bash
pnpm start
```

### Linting

Run ESLint to check for code issues:

```bash
pnpm lint
```

## Features

- **Modern UI/UX**: Smooth animations and transitions powered by Motion
- **3D Background**: Interactive shader-based gradient background using Three.js
- **Responsive Design**: Optimized for all device sizes with adaptive layouts
- **Section-based Navigation**: Dynamic marquee that changes based on viewing section
- **Performance Optimized**: Reduced pixel density on mobile devices for better performance
- **Loading States**: Smooth loading screen experience
- **Motion Drawer Navigation**: Animated drawer navigation component

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

#### Initial Setup

1. **Enable GitHub Pages in your repository:**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code:**

   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment:**
   - The GitHub Actions workflow will automatically build and deploy your site on every push to `main` or `master` branch
   - The workflow is located at `.github/workflows/deploy.yml`
   - After the first deployment, your site will be available at:
     - `https://<username>.github.io/<repository-name>/` (for project repositories)
     - `https://<username>.github.io/` (for user/organization pages)

#### Manual Build and Test Locally

To test the static export locally before deploying:

```bash
# Build the static site
pnpm run export

# The static files will be in the ./out directory
# You can serve them with any static file server:
npx serve out
```

#### Configuration for Subdirectory Deployment

If your repository name is not `username.github.io`, you'll need to configure the base path:

1. Open `next.config.ts`
2. Uncomment and update the `basePath` line:
   ```typescript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   trailingSlash: true,
   ```

### Other Deployment Options

The application is also compatible with other platforms that support Next.js, such as:

- [Vercel Platform](https://vercel.com/new) - Zero-config deployment
- Netlify
- AWS Amplify
- Docker containers
- Any Node.js hosting service

## License

Zii, transparency and open source project - © 2025 IT Smart Co., Ltd.
