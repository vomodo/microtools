# Contributing to Microtools Suite

First off, thank you for considering contributing to Microtools Suite! 🎉

It's people like you that make Microtools Suite such a great tool.

## 📜 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Welcome newcomers
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When submitting a bug report, include:**
- Clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When suggesting an enhancement, include:**
- Clear and descriptive title
- Detailed description of the proposed functionality
- Explain why this enhancement would be useful
- List any alternatives you've considered

### Adding New Tools

We're always looking for new tools! Here's how to add one:

1. **Check if the tool idea already exists** in issues or discussions
2. **Create an issue** describing your tool idea
3. **Wait for feedback** from maintainers
4. **Follow the tool template** (see `TOOL_TEMPLATE.md`)
5. **Submit a pull request**

**Good tool ideas:**
- Solve a specific problem
- Can run entirely client-side
- Don't require external APIs (exceptions: optional features)
- Are lightweight and fast
- Respect user privacy

### Improving Documentation

Documentation improvements are always welcome:
- Fix typos or grammatical errors
- Clarify existing documentation
- Add examples or tutorials
- Translate documentation

## 🛠️ Development Workflow

### 1. Fork and Clone

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/microtools.git
cd microtools

# Add upstream remote
git remote add upstream https://github.com/vomodo/microtools.git
```

### 2. Create a Branch

```bash
# Update your fork with the latest changes
git checkout dev
git pull upstream dev

# Create a feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

**Branch naming conventions:**
- `feature/` - New features or tools
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - Code style updates (formatting, etc.)

### 3. Make Your Changes

- Write clean, readable code
- Follow the style guidelines (see `STYLE_GUIDE.md`)
- Test your changes in multiple browsers
- Keep commits focused and atomic

### 4. Test Locally

```bash
# Serve the project locally
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

**Testing checklist:**
- [ ] Works in Chrome/Edge
- [ ] Works in Firefox
- [ ] Works in Safari (if available)
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All features work as expected

### 5. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add amazing new tool"
# or
git commit -m "fix: resolve issue with text converter"
```

**Commit message format:**
```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**
```bash
feat: add JSON formatter tool
fix: resolve textarea overflow in mobile view
docs: update installation instructions
refactor: extract common button styles to components.css
```

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub.

## 🎨 Style Guidelines

### JavaScript

- Use vanilla JavaScript (ES6+)
- Use descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Use `const` and `let`, avoid `var`

```javascript
// Good
const convertToUpperCase = (text) => {
  return text.toUpperCase();
};

// Avoid
var convert = function(t) {
  return t.toUpperCase();
};
```

### CSS

- Use shared styles from `assets/css/`
- Keep tool-specific styles minimal
- Use meaningful class names
- Mobile-first approach
- Use CSS custom properties for colors

```css
/* Good */
.tool-container {
  max-width: 800px;
  margin: 0 auto;
}

/* Avoid overly specific selectors */
.page .container .tool .button { }
```

### HTML

- Semantic HTML5 elements
- Proper indentation (2 spaces)
- Accessible (ARIA labels where needed)
- Meta tags for SEO

```html
<!-- Good -->
<textarea id="input" aria-label="Text input" placeholder="Enter text..."></textarea>

<!-- Avoid -->
<div class="textarea-like" contenteditable="true"></div>
```

See `STYLE_GUIDE.md` for complete guidelines.

## 📦 Pull Request Process

### Before Submitting

1. **Update documentation** if you've changed functionality
2. **Test thoroughly** in multiple browsers
3. **Follow the style guide**
4. **Write a clear PR description**

### PR Template

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature/tool
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Style update

## Testing
- [ ] Tested in Chrome/Edge
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Mobile responsive
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots]

## Related Issues
Fixes #[issue number]
```

### Review Process

1. At least one maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be credited in the release notes

### After Your PR is Merged

```bash
# Update your local repository
git checkout dev
git pull upstream dev

# Delete your feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

## ❓ Questions?

Don't hesitate to ask questions:
- Open a [GitHub Discussion](https://github.com/vomodo/microtools/discussions)
- Comment on an existing issue
- Reach out to maintainers

## 🌟 Recognition

All contributors will be recognized:
- Listed in release notes
- Added to CONTRIBUTORS.md
- Mentioned in project documentation

---

**Thank you for contributing to Microtools Suite! 🚀**