# AI Context for Microtools Suite

This document provides context for AI assistants (Claude, ChatGPT, Copilot, etc.) working on the Microtools Suite project.

## 🎯 Project Overview

**Microtools Suite** is a collection of lightweight, privacy-focused web tools built with vanilla JavaScript. Each tool:
- Runs entirely client-side (no backend)
- Requires no build process or dependencies
- Is fast, simple, and focused on one task
- Respects user privacy (no data collection)

## 📁 Architecture

### Project Structure

```
microtools/
├── assets/
│   └── css/
│       ├── global.css          # Base styles (reset, typography, layouts)
│       ├── components.css      # Reusable UI components (buttons, inputs)
│       └── home.css           # Homepage-specific styles
├── packages/
│   ├── rich-text-to-markdown/
│   │   ├── index.html         # Tool UI
│   │   ├── styles.css         # Tool-specific styles
│   │   ├── converter.js       # Tool logic
│   │   └── README.md          # Tool docs
│   ├── text-case-converter/
│   └── word-counter/
├── index.html                  # Homepage/tool launcher
├── package.json
├── README.md
├── CONTRIBUTING.md
├── TOOL_TEMPLATE.md
├── STYLE_GUIDE.md
└── AI_CONTEXT.md              # This file
```

### Key Principles

1. **Modular**: Each tool is self-contained in `packages/[tool-name]/`
2. **No Build Step**: Pure HTML/CSS/JS, no transpiling or bundling
3. **Shared Styles**: Common styles in `assets/css/`, tool-specific in local `styles.css`
4. **Client-Side Only**: All processing happens in the browser
5. **Privacy First**: No data sent to servers, no tracking

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, accessibility-focused
- **CSS3**: Modern CSS, no preprocessors, mobile-first
- **JavaScript (ES6+)**: Vanilla JS, no frameworks or libraries
- **No Dependencies**: Pure web standards

## 📝 Common Tasks

### Creating a New Tool

1. **Create directory**: `packages/new-tool-name/`
2. **Required files**:
   - `index.html` - Tool interface
   - `styles.css` - Tool-specific styles
   - `tool.js` - Tool logic
   - `README.md` - Documentation
3. **Import shared CSS** in `index.html`:
   ```html
   <link rel="stylesheet" href="/assets/css/global.css">
   <link rel="stylesheet" href="/assets/css/components.css">
   <link rel="stylesheet" href="styles.css">
   ```
4. **Add to homepage**: Edit `index.html` to add tool card
5. **Test**: Serve locally and verify functionality

See `TOOL_TEMPLATE.md` for complete template.

### Refactoring Existing Tools

**Goal**: Extract common styles to shared CSS, keep tool-specific styles local.

**Steps**:
1. Identify styles that are duplicated across tools
2. Move common styles to `assets/css/components.css`
3. Update tool's `styles.css` to only include unique styles
4. Update tool's `index.html` to import shared CSS
5. Test to ensure styling remains consistent

**Common patterns to extract**:
- Button styles (already in `components.css`)
- Textarea styles (already in `components.css`)
- Input field styles
- Layout containers
- Typography styles

### Adding Features to Existing Tools

1. **Read the tool's README** to understand functionality
2. **Check `tool.js`** for existing logic
3. **Add new feature** following existing patterns
4. **Update README** with new functionality
5. **Test** in multiple browsers

### Updating Shared Styles

**When to update**:
- Adding new reusable components
- Fixing bugs in shared styles
- Improving accessibility
- Adding responsive breakpoints

**Files to modify**:
- `assets/css/global.css` - Base styles
- `assets/css/components.css` - UI components
- `assets/css/home.css` - Homepage only

**After updating**:
- Test all tools to ensure nothing breaks
- Document changes in commit message

## 🎨 Design System

### Colors

```css
/* Primary */
--primary: #ff6d5a;          /* Brand color, buttons, links */
--primary-dark: #d54329;     /* Hover states */
--primary-light: #ff8c7d;    /* Highlights */

/* Neutrals */
--black: #000000;
--gray-dark: #222222;        /* Headings */
--gray: #777777;             /* Secondary text */
--gray-light: #dddddd;       /* Borders */
--gray-lighter: #f7f4f4;     /* Backgrounds */
--white: #ffffff;

/* Backgrounds */
--bg-primary: #ffffff;       /* Main background */
--bg-secondary: #f9f9f9;     /* Alternate background */
--bg-tertiary: #f7f4f8;      /* Card backgrounds */
```

### Typography

```css
/* Font Family */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Sizes */
--font-xs: 0.75rem;    /* 12px */
--font-sm: 0.875rem;   /* 14px */
--font-base: 1rem;     /* 16px */
--font-lg: 1.125rem;   /* 18px */
--font-xl: 1.25rem;    /* 20px */
--font-2xl: 1.5rem;    /* 24px */
--font-3xl: 2rem;      /* 32px */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 18px;
--space-xl: 24px;
--space-2xl: 36px;
--space-3xl: 48px;
```

### Border Radius

```css
--radius-sm: 6px;      /* Small elements */
--radius-md: 8px;      /* Default */
--radius-lg: 10px;     /* Cards */
--radius-xl: 18px;     /* Large cards */
--radius-2xl: 20px;    /* Containers */
```

## 🤖 AI Assistant Guidelines

### When Creating New Tools

1. **Use the template**: Always start with `TOOL_TEMPLATE.md`
2. **Import shared CSS**: Don't duplicate styles from `assets/css/`
3. **Keep it simple**: One tool, one purpose
4. **Add documentation**: Complete README with examples
5. **Test accessibility**: Keyboard navigation, ARIA labels
6. **Error handling**: Validate input, catch errors gracefully

### When Refactoring Code

1. **Check existing patterns**: Look at other tools for consistency
2. **Extract common code**: Move duplicates to shared files
3. **Maintain functionality**: Test before and after
4. **Update documentation**: Reflect changes in README
5. **Commit atomically**: One logical change per commit

### When Fixing Bugs

1. **Reproduce the bug**: Understand the issue first
2. **Check all tools**: Bug might exist elsewhere
3. **Fix root cause**: Don't just patch symptoms
4. **Add edge case handling**: Prevent similar bugs
5. **Test thoroughly**: Multiple browsers, devices

### When Reviewing Code

1. **Check style guide**: Follows `STYLE_GUIDE.md`?
2. **Test functionality**: Actually works?
3. **Verify accessibility**: Keyboard nav, ARIA labels?
4. **Check performance**: Fast with large inputs?
5. **Review documentation**: Clear and complete?

## 📚 Code Patterns

### Tool Structure Pattern

```javascript
// 1. DOM Element References
const input = document.getElementById('input');
const output = document.getElementById('output');
const processBtn = document.getElementById('processBtn');
const copyBtn = document.getElementById('copyBtn');

// 2. Core Processing Function
function processInput() {
  const text = input.value;
  
  if (!text.trim()) {
    output.value = '';
    return;
  }
  
  try {
    const result = transformText(text);
    output.value = result;
  } catch (error) {
    console.error('Error:', error);
    output.value = 'Error processing input';
  }
}

// 3. Helper Functions
function transformText(text) {
  // Tool-specific logic
  return text;
}

// 4. Utility Functions
function copyToClipboard() {
  output.select();
  document.execCommand('copy');
  // Visual feedback...
}

// 5. Event Listeners
processBtn.addEventListener('click', processInput);
copyBtn.addEventListener('click', copyToClipboard);
input.addEventListener('input', processInput); // Auto-update

// 6. Keyboard Shortcuts (optional)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    processInput();
  }
});
```

### CSS Component Pattern

```css
/* Base component */
.button {
  /* Common button styles */
}

/* Variants */
.button-primary { }
.button-secondary { }
.button-danger { }

/* States */
.button:hover { }
.button:active { }
.button:disabled { }

/* Responsive */
@media (max-width: 768px) {
  .button {
    width: 100%;
  }
}
```

## ⚠️ Common Pitfalls

1. **Don't add dependencies**: No npm packages, CDN links, or frameworks
2. **Don't use build tools**: No webpack, babel, etc.
3. **Don't duplicate styles**: Use shared CSS from `assets/css/`
4. **Don't skip error handling**: Always validate and catch errors
5. **Don't forget mobile**: Test on small screens
6. **Don't ignore accessibility**: Add ARIA labels, keyboard nav
7. **Don't hardcode values**: Use CSS custom properties
8. **Don't leave console.logs**: Clean up debug code

## ✅ Quality Checklist

Before submitting code:

- [ ] Follows `STYLE_GUIDE.md`
- [ ] Uses shared CSS appropriately
- [ ] Includes error handling
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] No console errors
- [ ] Documentation updated
- [ ] Examples provided
- [ ] Tested with edge cases

## 🔗 Quick Links

- **Repository**: https://github.com/vomodo/microtools
- **Live Site**: https://microtools.pages.dev
- **Issues**: https://github.com/vomodo/microtools/issues
- **Discussions**: https://github.com/vomodo/microtools/discussions

## 💬 Common Questions

**Q: Can I use a JavaScript library?**  
A: No, vanilla JS only. The goal is to keep tools lightweight and dependency-free.

**Q: Can I add a build step?**  
A: No, the project should work without any build process.

**Q: Can tools call external APIs?**  
A: Avoid if possible. If necessary, make it optional and client-side only.

**Q: How do I handle large inputs?**  
A: Use debouncing, web workers, or chunk processing. Keep UI responsive.

**Q: Can I refactor the entire codebase?**  
A: Discuss major changes in issues first. Refactor incrementally.

**Q: How do I test locally?**  
A: Use any static server: `python -m http.server`, `npx serve`, etc.

## 📝 Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add JSON formatter tool
fix: resolve textarea overflow on mobile
docs: update tool creation guide
refactor: extract button styles to components.css
style: fix indentation in converter.js
chore: update package.json
```

## 🎉 Success Criteria

A good contribution:
- Solves a real problem
- Follows project conventions
- Is well-documented
- Is thoroughly tested
- Respects user privacy
- Is accessible to everyone
- Makes the project better

---

**This document is for AI assistants. For human contributors, see CONTRIBUTING.md**