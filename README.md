# Leuk 🚀

> Deep GitHub profile analytics, AI insights, and developer comparison platform.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

Leuk is a modern, high-performance web application designed to analyze GitHub developer profiles, calculate codebase health metrics and Leuk scores, generate AI insights, and compare two developer profiles side-by-side.

---

## ✨ Key Features

- **GitHub Profile Analytics (`/analyze/[username]`)**:
  - Comprehensive metrics including Leuk Score (/100), letter grade, and 90-day activity trends.
  - Signal badges, developer bio, location, company, and account age metrics.
  - Top repositories breakdown with hygiene scores, language identification, stars, forks, and archive status.
  - Contribution heatmaps and activity insights.
- **Side-by-Side Comparison (`/compare/[left]/[right]`)**:
  - Compare two developer profiles head-to-head.
  - Contrast stats, impact scores, and tech stacks.
- **Retro-Terminal & Modern Aesthetic**:
  - Precision grid pattern backgrounds and rail separators.
  - Fully responsive design optimized for mobile (iPhone SE), tablets (iPad Mini), and desktop viewports.
  - Built-in Dark and Light mode support via `next-themes`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) installed on your machine.

### Installation & Running

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```tree
├── app/                  # Next.js App Router pages and API routes
│   ├── analyze/          # Profile analysis search & dynamic [username] routes
│   ├── compare/          # Profile comparison search & dynamic [left]/[right] routes
│   └── api/              # Backend analytics & comparison API handlers
├── components/           # Reusable UI components
│   ├── analytics/        # Profile header, repository tables, score cards
│   ├── page/             # Landing page sections (Hero, Features, Beliefs, Footer, etc.)
│   └── ui/               # Section shell, pattern, separators, primary buttons
├── lib/                  # TypeScript types, color utilities, and data helpers
└── public/               # Static assets
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
