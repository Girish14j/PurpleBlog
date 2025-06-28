# Modern Blogging Platform

A modern, feature-rich blogging platform built with React, TypeScript, and Vite. This project leverages the power of modern web technologies to provide a seamless blogging experience.

## 🚀 Features

- Modern UI with Tailwind CSS
- Responsive design
- Rich text editing capabilities
- Theme customization
- Interactive components using Radix UI
- Type-safe development with TypeScript
- Fast development and build times with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form
- **State Management:** React Query
- **Development Tools:** ESLint, TypeScript, Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd blogging
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Automatically fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run preview` - Preview the production build locally

## 📝 Code Style Guide

This project follows the [MDN JavaScript Code Style Guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript) and uses automated tools to enforce consistent code quality:

### Key Style Rules:

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for strings
- **Semicolons:** Always required
- **Variables:** Prefer `const` and `let` over `var`
- **Equality:** Use strict equality (`===` and `!==`)
- **Functions:** Use arrow functions where appropriate
- **Template Literals:** Prefer over string concatenation
- **Trailing Commas:** Use in multi-line objects/arrays
- **Naming:** Use descriptive camelCase names

### Code Quality Tools:

- **ESLint:** Code quality and style enforcement
- **Prettier:** Automatic code formatting
- **TypeScript:** Type safety and static analysis
- **EditorConfig:** Editor-level consistency

### Formatting Your Code:

```bash
# Format all code
npm run format

# Check and fix linting issues
npm run lint:fix

# Check if code is properly formatted
npm run format:check
```

## 🎨 UI Components

The project uses a comprehensive set of UI components from Radix UI, including:

- Accordion
- Alert Dialog
- Avatar
- Dropdown Menu
- Navigation Menu
- Toast notifications
- And many more...

## 🔧 Configuration

The project includes several configuration files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration with MDN style rules
- `.prettierrc` - Prettier formatting rules
- `.editorconfig` - Editor consistency settings

## 📝 Project Structure

```
blogging/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── .github/          # GitHub Actions workflows
├── index.html        # Entry HTML file
└── [config files]    # Various configuration files
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages. The deployment workflow will:

1. Build the project
2. Deploy to GitHub Pages
3. Make it available at `https://[username].github.io/Blogging/`

## 🤝 Contributing

Contributions are welcome! Please ensure your code follows the established style guidelines:

1. Run `npm run format` before committing
2. Run `npm run lint` to check for issues
3. Fix any linting errors before submitting a PR

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
