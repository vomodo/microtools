# Tool Template

Use this template to create new tools for Microtools Suite.

## 📝 Directory Structure

```
packages/your-tool-name/
├── index.html      # Main tool interface
├── styles.css      # Tool-specific styles
├── tool.js         # Tool logic and functionality
└── README.md       # Tool documentation
```

## 📦 File Templates

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Tool Name - Microtools</title>
  
  <!-- Import shared styles -->
  <link rel="stylesheet" href="/assets/css/global.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  
  <!-- Tool-specific styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="tool-container">
    <h2>Your Tool Name</h2>
    
    <!-- Input Section -->
    <div class="input-section">
      <h3>Input</h3>
      <textarea 
        id="input" 
        placeholder="Enter your text here..."
        aria-label="Input text"
      ></textarea>
    </div>
    
    <!-- Output Section -->
    <div class="output-section">
      <h3>Output</h3>
      <textarea 
        id="output" 
        readonly 
        placeholder="Result will appear here..."
        aria-label="Output text"
      ></textarea>
    </div>
    
    <!-- Action Buttons -->
    <div class="actions">
      <button id="processBtn">Process</button>
      <button id="copyBtn">Copy to Clipboard</button>
      <button id="clearBtn">Clear</button>
    </div>
  </div>
  
  <!-- Tool Logic -->
  <script src="tool.js"></script>
</body>
</html>
```

### styles.css

```css
/* Tool-specific styles only */
/* Global and component styles are already imported */

.tool-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.input-section,
.output-section {
  margin-bottom: 24px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Custom tool-specific styles here */
```

### tool.js

```javascript
/**
 * Your Tool Name
 * Description: Brief description of what this tool does
 */

// DOM Elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const processBtn = document.getElementById('processBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

// Main Processing Function
function processInput() {
  const inputText = input.value;
  
  if (!inputText.trim()) {
    output.value = '';
    return;
  }
  
  try {
    // Your tool logic here
    const result = yourProcessingFunction(inputText);
    output.value = result;
  } catch (error) {
    console.error('Error processing input:', error);
    output.value = 'Error: Unable to process input';
  }
}

// Your Processing Logic
function yourProcessingFunction(text) {
  // Implement your tool's core functionality here
  return text; // Replace with actual processing
}

// Copy to Clipboard
function copyToClipboard() {
  if (!output.value) return;
  
  output.select();
  document.execCommand('copy');
  
  // Visual feedback
  const originalText = copyBtn.textContent;
  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = originalText;
  }, 1500);
}

// Clear All
function clearAll() {
  input.value = '';
  output.value = '';
  input.focus();
}

// Event Listeners
processBtn.addEventListener('click', processInput);
copyBtn.addEventListener('click', copyToClipboard);
clearBtn.addEventListener('click', clearAll);

// Auto-process on input (optional)
input.addEventListener('input', processInput);

// Keyboard Shortcuts (optional)
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter to process
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    processInput();
  }
  
  // Ctrl/Cmd + K to clear
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    clearAll();
  }
});
```

### README.md

```markdown
# Your Tool Name

Brief description of what this tool does and why it's useful.

## 🚀 Features

- Feature 1
- Feature 2
- Feature 3

## 📝 Usage

1. Step 1
2. Step 2
3. Step 3

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + Enter` - Process input
- `Ctrl/Cmd + K` - Clear all

## 📦 Example

**Input:**
```
Example input
```

**Output:**
```
Example output
```

## 🔒 Privacy

All processing happens client-side. No data is sent to any server.

## 🛠️ Technical Details

- Pure vanilla JavaScript
- No external dependencies
- Runs entirely in the browser
- Lightweight and fast

## 🐛 Known Limitations

- Limitation 1
- Limitation 2

## 📚 References

- [Reference 1](https://example.com)
- [Reference 2](https://example.com)
```

## ✅ Checklist for New Tools

Before submitting your tool, make sure:

### Functionality
- [ ] Tool solves a specific problem
- [ ] Core functionality works correctly
- [ ] Edge cases are handled
- [ ] Error handling is implemented
- [ ] Input validation works

### User Experience
- [ ] Clear and intuitive interface
- [ ] Helpful placeholder text
- [ ] Loading states (if applicable)
- [ ] Error messages are user-friendly
- [ ] Copy/download functionality (if applicable)
- [ ] Clear button works

### Accessibility
- [ ] ARIA labels on inputs
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG standards

### Performance
- [ ] Fast processing (< 1s for typical input)
- [ ] No memory leaks
- [ ] Works with large inputs
- [ ] Debouncing for auto-process (if applicable)

### Code Quality
- [ ] Clean, readable code
- [ ] Meaningful variable names
- [ ] Comments for complex logic
- [ ] No console errors
- [ ] Follows project style guide

### Styling
- [ ] Uses shared CSS from `assets/css/`
- [ ] Minimal tool-specific styles
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Consistent with other tools

### Documentation
- [ ] README.md is complete
- [ ] Usage instructions are clear
- [ ] Examples are provided
- [ ] Known limitations documented

### Testing
- [ ] Works in Chrome/Edge
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Mobile responsive
- [ ] Tested with various input sizes

### Integration
- [ ] Added to homepage (`index.html`)
- [ ] Tool card properly formatted
- [ ] Link points to correct path
- [ ] Tool appears in correct category

## 💡 Tips for Great Tools

1. **Keep it simple** - One tool, one purpose
2. **Be fast** - Process instantly when possible
3. **Think mobile** - Many users are on phones
4. **Add shortcuts** - Power users love keyboard shortcuts
5. **Handle errors** - Validate input and show helpful messages
6. **Be accessible** - Everyone should be able to use your tool
7. **Document well** - Good docs = happy users
8. **Test thoroughly** - Try to break your own tool first

## 👁️ Examples to Study

Look at these existing tools for reference:
- `packages/rich-text-to-markdown/` - Good use of contenteditable
- `packages/text-case-converter/` - Multiple actions/buttons
- `packages/word-counter/` - Real-time stats display

## ❓ Need Help?

- Check existing tools for patterns
- Read the `STYLE_GUIDE.md`
- Ask in GitHub Discussions
- Open an issue for guidance

---

**Happy coding! 🚀**