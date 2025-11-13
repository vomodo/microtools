# Style Guide

This document outlines coding standards and best practices for Microtools Suite.

## 🎨 CSS Guidelines

### File Organization

```
assets/css/
├── global.css       # Base styles, reset, typography
├── components.css   # Reusable UI components
└── home.css         # Homepage-specific styles

packages/[tool-name]/
└── styles.css       # Tool-specific styles only
```

### Import Order

```html
<!-- 1. Global styles -->
<link rel="stylesheet" href="/assets/css/global.css">

<!-- 2. Component styles -->
<link rel="stylesheet" href="/assets/css/components.css">

<!-- 3. Page/tool-specific styles -->
<link rel="stylesheet" href="styles.css">
```

### CSS Best Practices

#### ✅ Do

```css
/* Use meaningful class names */
.tool-container { }
.input-section { }
.result-display { }

/* Keep specificity low */
.button { }
.button-primary { }

/* Use consistent spacing */
.card {
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 8px;
}

/* Mobile-first approach */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Use CSS custom properties for repeated values */
:root {
  --primary-color: #ff6d5a;
  --border-radius: 8px;
}

.button {
  background: var(--primary-color);
  border-radius: var(--border-radius);
}
```

#### ❌ Don't

```css
/* Avoid overly specific selectors */
body .container .tool .button { } /* Too specific */

/* Avoid inline styles */
<div style="color: red;"> /* Use classes */

/* Avoid !important unless absolutely necessary */
.text { color: red !important; } /* Avoid */

/* Avoid random class names */
.x123 { } /* Not meaningful */
.tmp { } /* Not descriptive */
```

### Naming Conventions

```css
/* Use kebab-case for class names */
.tool-container { }
.input-field { }
.result-display { }

/* Use BEM for complex components (optional) */
.card { }
.card__header { }
.card__body { }
.card--highlighted { }
```

### Color Palette

```css
/* Primary Colors */
--primary: #ff6d5a;      /* Main brand color */
--primary-dark: #d54329; /* Hover state */
--primary-light: #ff8c7d;

/* Neutral Colors */
--black: #000000;
--gray-dark: #222222;
--gray: #777777;
--gray-light: #dddddd;
--gray-lighter: #f7f4f4;
--white: #ffffff;

/* Background Colors */
--bg-primary: #ffffff;
--bg-secondary: #f9f9f9;
--bg-tertiary: #f7f4f8;

/* Text Colors */
--text-primary: #222222;
--text-secondary: #444444;
--text-muted: #777777;
```

### Spacing Scale

```css
/* Use consistent spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 18px;
--space-xl: 24px;
--space-2xl: 36px;
--space-3xl: 48px;
```

### Typography

```css
/* Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Font Sizes */
--font-xs: 0.75rem;    /* 12px */
--font-sm: 0.875rem;   /* 14px */
--font-base: 1rem;     /* 16px */
--font-lg: 1.125rem;   /* 18px */
--font-xl: 1.25rem;    /* 20px */
--font-2xl: 1.5rem;    /* 24px */
--font-3xl: 2rem;      /* 32px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## 📜 JavaScript Guidelines

### General Principles

1. **Use vanilla JavaScript** - No frameworks or libraries
2. **ES6+ syntax** - Use modern JavaScript features
3. **No transpiling** - Code should run in modern browsers
4. **Keep it simple** - Prefer readability over cleverness

### Code Style

#### ✅ Do

```javascript
// Use const and let, avoid var
const MAX_LENGTH = 1000;
let counter = 0;

// Use arrow functions
const processText = (text) => {
  return text.trim().toUpperCase();
};

// Use template literals
const message = `Processed ${count} items`;

// Use destructuring
const { name, age } = user;
const [first, second] = array;

// Use default parameters
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

// Use array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Use early returns
function processInput(text) {
  if (!text) return '';
  if (text.length > MAX_LENGTH) return 'Too long';
  
  return text.trim();
}
```

#### ❌ Don't

```javascript
// Avoid var
var x = 10; // Use const or let

// Avoid string concatenation
const message = 'Hello, ' + name + '!'; // Use template literals

// Avoid nested ternaries
const result = a ? b ? c : d : e; // Too complex

// Avoid deeply nested code
if (condition1) {
  if (condition2) {
    if (condition3) {
      // Too deep
    }
  }
}
```

### Naming Conventions

```javascript
// Variables and functions: camelCase
const userName = 'John';
function processText() { }

// Constants: UPPER_SNAKE_CASE
const MAX_LENGTH = 1000;
const API_ENDPOINT = '/api/data';

// Classes: PascalCase (if needed)
class TextProcessor { }

// Private variables: _prefixed (convention)
const _internalState = {};

// Boolean variables: is/has prefix
const isValid = true;
const hasError = false;
```

### DOM Manipulation

```javascript
// Cache DOM elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('processBtn');

// Use event delegation when appropriate
document.addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    handleButtonClick(e);
  }
});

// Clean event listeners
const handleClick = () => { /* ... */ };
button.addEventListener('click', handleClick);
// Later: button.removeEventListener('click', handleClick);
```

### Error Handling

```javascript
// Always handle errors
function processData(data) {
  try {
    const result = complexOperation(data);
    return result;
  } catch (error) {
    console.error('Error processing data:', error);
    return null;
  }
}

// Validate input
function convertText(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  if (!text.trim()) {
    return '';
  }
  
  // Process...
}
```

### Comments

```javascript
/**
 * Convert text to uppercase
 * @param {string} text - Input text
 * @returns {string} Uppercase text
 */
function toUpperCase(text) {
  return text.toUpperCase();
}

// Single-line comments for brief explanations
const result = calculate(); // Convert to percentage

// Multi-line comments for complex logic
/*
 * This algorithm processes text in three steps:
 * 1. Normalize whitespace
 * 2. Convert to lowercase
 * 3. Remove special characters
 */
```

## 📝 HTML Guidelines

### Semantic HTML

```html
<!-- ✅ Use semantic elements -->
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>

<!-- ❌ Avoid generic divs when semantic alternatives exist -->
<div class="header">  <!-- Use <header> instead -->
<div class="navigation"> <!-- Use <nav> instead -->
```

### Accessibility

```html
<!-- Always include alt text for images -->
<img src="icon.png" alt="Tool icon">

<!-- Use ARIA labels for form inputs -->
<textarea 
  id="input" 
  aria-label="Input text"
  placeholder="Enter text..."
></textarea>

<!-- Use proper heading hierarchy -->
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Make buttons accessible -->
<button aria-label="Copy to clipboard">
  Copy
</button>
```

### Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tool Name - Microtools</title>
  
  <!-- Styles -->
  <link rel="stylesheet" href="/assets/css/global.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Content -->
  
  <!-- Scripts at the end -->
  <script src="tool.js"></script>
</body>
</html>
```

## 📦 File Organization

```
microtools/
├── assets/
│   └── css/
│       ├── global.css
│       ├── components.css
│       └── home.css
├── packages/
│   └── [tool-name]/
│       ├── index.html
│       ├── styles.css
│       ├── tool.js
│       └── README.md
├── index.html
├── package.json
├── README.md
├── CONTRIBUTING.md
├── TOOL_TEMPLATE.md
└── STYLE_GUIDE.md
```

## ✅ Pre-Commit Checklist

Before committing code:

- [ ] Code follows style guidelines
- [ ] No console.log() in production code
- [ ] All functions have clear names
- [ ] Complex logic has comments
- [ ] No unused variables or functions
- [ ] Tested in multiple browsers
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Fast and performant

## 🔍 Code Review Checklist

When reviewing code:

- [ ] Follows project structure
- [ ] Uses shared CSS appropriately
- [ ] JavaScript is clean and readable
- [ ] HTML is semantic and accessible
- [ ] No security issues (XSS, etc.)
- [ ] Error handling is present
- [ ] Documentation is updated
- [ ] Examples are provided

---

**Questions? Check existing code or ask in discussions!**