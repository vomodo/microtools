# 🛠️ Microtools Suite

> A collection of lightweight, fast, and privacy-focused web tools built with vanilla JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## 📋 Overview

Microtools Suite is a modular collection of small, focused web utilities designed to solve everyday problems. Each tool is:

- **🚀 Fast**: No heavy frameworks, pure vanilla JS
- **🔒 Private**: Everything runs client-side, no data sent to servers
- **📦 Lightweight**: Minimal dependencies, optimized for performance
- **🎨 Modern**: Clean UI with responsive design
- **🔧 Modular**: Each tool is independent and can be used standalone

## 🌟 Available Tools

### 📝 Text & Formatting
- **Rich Text to Markdown Converter** - Convert HTML/rich text to Markdown format
- **Text Case Converter** - Transform text between UPPERCASE, lowercase, Title Case, camelCase, snake_case
- **Word Counter** - Count words, characters, paragraphs, and estimate reading time

### 🤖 AI Helpers
- **Prompt Library** _(Coming soon)_

### 📊 Data & Tables
- **CSV to Table** _(Coming soon)_
- **JSON Formatter** _(Coming soon)_

### 🎨 Design & Media
- **Color Picker & Palette** _(Coming soon)_
- **QR Code Generator** _(Coming soon)_

### 📋 Productivity
- **Clipboard History** _(Coming soon)_

## 🏗️ Project Structure

```
microtools/
├── assets/
│   └── css/
│       ├── global.css          # Global styles (reset, typography)
│       ├── components.css      # Reusable UI components
│       └── home.css           # Homepage-specific styles
├── packages/
│   ├── rich-text-to-markdown/
│   │   ├── index.html         # Tool interface
│   │   ├── styles.css         # Tool-specific styles
│   │   ├── converter.js       # Tool logic
│   │   └── README.md          # Tool documentation
│   ├── text-case-converter/
│   └── word-counter/
├── index.html                  # Homepage/launcher
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vomodo/microtools.git
   cd microtools
   ```

2. **Serve locally**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment

This project is a static site and can be deployed to:
- **Cloudflare Pages** (recommended)
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply point the deployment to the root directory.

## 🎯 Adding a New Tool

### Quick Start

1. **Create a new package directory**
   ```bash
   mkdir -p packages/your-tool-name
   cd packages/your-tool-name
   ```

2. **Use the tool template** (see `TOOL_TEMPLATE.md`)

3. **Required files**:
   - `index.html` - Tool interface
   - `styles.css` - Tool-specific styles
   - `converter.js` or `tool.js` - Tool logic
   - `README.md` - Tool documentation

4. **Add to homepage** (`index.html`):
   ```html
   <div class="tool-row">
     <span>Your Tool Name</span>
     <a href="/packages/your-tool-name/index.html" target="_blank">Truy cập</a>
   </div>
   ```

### Tool Development Guidelines

- Keep tools **simple and focused** on one task
- Use **vanilla JavaScript** (no frameworks)
- Import shared CSS: `global.css` and `components.css`
- Keep tool-specific styles in local `styles.css`
- **Client-side only** - no backend calls
- Ensure **responsive design** for mobile devices
- Add **keyboard shortcuts** where appropriate
- Include **copy/download** functionality if relevant

## 📚 Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute to the project
- **[TOOL_TEMPLATE.md](TOOL_TEMPLATE.md)** - Template for creating new tools
- **[STYLE_GUIDE.md](STYLE_GUIDE.md)** - CSS and code style guidelines
- **[AI_CONTEXT.md](AI_CONTEXT.md)** - AI-friendly project context for development

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-tool`
3. Make your changes
4. Test locally
5. Commit: `git commit -m 'Add amazing tool'`
6. Push: `git push origin feature/amazing-tool`
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by the open-source community
- Inspired by the need for simple, privacy-focused tools
- Thanks to all contributors!

## 📞 Contact

- **Website**: [microtools.pages.dev](https://microtools.pages.dev)
- **Issues**: [GitHub Issues](https://github.com/vomodo/microtools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/vomodo/microtools/discussions)

---

**Made with ❤️ for developers, by developers**