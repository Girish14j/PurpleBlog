# Blogging Application

A modern React TypeScript blog application with MDN code style guide compliance.

## Features

- 📝 Create, edit, and delete blog posts
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 🌙 Dark/Light theme toggle
- 📱 Responsive design
- 🔍 Search and filter functionality
- 📂 Category management
- ✨ MDN JavaScript Code Style Guide compliant
- 🚀 Vercel deployment ready

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Code Quality**: ESLint, Prettier
- **Deployment**: Vercel, GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Girish14j/PurpleBlog.git
   cd PurpleBlog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Radix UI components
│   ├── BlogCard.tsx    # Blog post card component
│   ├── BlogForm.tsx    # Blog post form
│   ├── DeleteDialog.tsx # Delete confirmation dialog
│   ├── Navbar.tsx      # Navigation bar
│   └── ThemeToggle.tsx # Theme toggle component
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── pages/              # Page components
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Code Style

This project follows the [MDN JavaScript Code Style Guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript) for consistent and maintainable code.

### Key Style Rules

- Use meaningful variable and function names
- Prefer `const` and `let` over `var`
- Use template literals for string concatenation
- Prefer arrow functions for callbacks
- Use destructuring for cleaner code
- Follow consistent indentation (2 spaces)

## Deployment

### Vercel

The project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deployments are triggered on every push to main branch

### GitHub Pages

For GitHub Pages deployment, the project includes a GitHub Actions workflow that builds and deploys the application.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Test deployment fix - Updated README for clean repository structure**
