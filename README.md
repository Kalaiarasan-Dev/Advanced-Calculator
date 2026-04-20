# 🧮 Advanced Calculator

A feature-rich, beautifully designed calculator web application with modern UI, dark/light theme, history tracking, and keyboard support.

![Calculator Demo](https://img.shields.io/badge/demo-live-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)

---

## ✨ Features

### Core Features
- ✅ **Basic Arithmetic** (+, -, ×, ÷)
- ✅ **Decimal Support** with validation
- ✅ **Clear (AC)** & **Delete (DEL)** functions
- ✅ **Error Handling** (division by zero protection)

### Advanced Features
- 🌙 **Dark/Light Theme Toggle** (saves preference)
- 📜 **History Panel** (last 10 calculations)
- ⌨️ **Full Keyboard Support**
- % **Percentage Calculator**
- ± **Sign Toggle** (positive/negative)
- √ **Square Root**
- x² **Square** & x³ **Cube**
- 📱 **Fully Responsive Design**
- ✨ **Smooth Animations** (hover & click effects)

---

## 🖥️ Live Demo

Open (https://kalaiarasan-dev.github.io/Advanced-Calculator/) in any modern web browser - no installation required!

---

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `.` | Decimal point |
| `+ - * /` | Operators |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |
| `%` | Percentage |

---

## 📸 Screenshots
┌─────────────────────────────┐
│ 🌙 Dark │
│ ┌───────────────────────┐ │
│ │ 123 + 456│ │
│ │ 579 │ │
│ └───────────────────────┘ │
│ ┌───────────────────────┐ │
│ │ 📜 History │ │
│ │ 123 + 456 = 579 │ │
│ │ 100 - 25 = 75 │ │
│ └───────────────────────┘ │
│ [7][8][9][÷][√] │
│ [4][5][6][×][x²] │
│ [1][2][3][-][x³] │
│ [0][.][=][+][%] │
└─────────────────────────────┘

text

### Dark Mode
Same layout with elegant dark color scheme and eye-friendly contrast.

---

## 🚀 Installation

### Option 1: Direct Download
1. Download `calculator.html`
2. Double-click to open in browser

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/advanced-calculator.git
cd advanced-calculator
open calculator.html
Option 3: Run Local Server (Optional)
bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code Live Server
Right-click index.html → Open with Live Server
📁 Project Structure
text
advanced-calculator/
│
├── calculator.html          # Complete application (HTML/CSS/JS)
├── README.md               # Project documentation
└── screenshot.png          # (Optional) Demo screenshot
Note: This is a single-file application! All styles and scripts are embedded in calculator.html.

🛠️ Technologies Used
Technology	Purpose
HTML5	Structure & layout
CSS3	Styling, animations, responsive design
JavaScript (ES6)	Logic, calculations, DOM manipulation
LocalStorage	Theme preference persistence
📖 Code Overview
Core Calculator Class
javascript
class AdvancedCalculator {
    constructor() { ... }
    appendNumber() { ... }
    appendOperator() { ... }
    compute() { ... }
    squareRoot() { ... }
    toggleTheme() { ... }
    addToHistory() { ... }
}
Key Features Implementation
Feature	Implementation
Decimal validation	Prevents multiple dots
Division by zero	Alert + auto-clear
Theme persistence	LocalStorage API
History tracking	Array with 10-item limit
Keyboard support	EventListener on document
🧪 Test Cases
Input	Expected Output
5 + 3 =	8
10 - 4 =	6
7 × 6 =	42
20 ÷ 4 =	5
5 ÷ 0 =	Error alert
√16 =	4
7 x² =	49
2 x³ =	8
50 % =	0.5
5 +/− =	-5
📱 Responsive Breakpoints
Screen Width	Adjustments
> 550px	Full layout, large buttons
≤ 550px	Reduced padding, smaller fonts
≤ 400px	Compact grid, optimized touch targets
🔧 Customization
Change Color Theme
Modify the CSS variables in style section:

css
/* Light mode gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Dark mode gradient */  
background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
Increase History Limit
javascript
// Change this line in addToHistory() method
if (this.history.length > 10) this.history.pop(); // Change 10 to desired number
Add New Operations
javascript
// Example: Add power function
power() {
    let value = parseFloat(this.currentOperand);
    let result = Math.pow(value, 2);
    this.addToHistory(`${this.currentOperand}²`, result);
    this.currentOperand = result.toString();
    this.updateDisplay();
}
🌟 Browser Support
Browser	Version
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
Opera	76+
Mobile Browsers	All modern
🤝 Contributing
Contributions are welcome! Here's how:

Fork the repository

Create feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

Suggested Improvements
Memory functions (M+, MR, MC)

Scientific mode (trigonometry, logarithms)

Voice input support

Copy/paste functionality

Export history as CSV

Custom themes

📄 License
This project is MIT Licensed - feel free to use, modify, and distribute!


MIT License

Copyright (c) 2026 [Kalai Arasan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
🙏 Acknowledgments
Inspired by modern calculator apps

Icons from Unicode standard

Gradient design inspired by modern UI trends

📞 Contact
Kalaiarasan

GitHub: Kalaiarasan-Dev


Email: kalaigurusamy8@gmail.com

⭐ Show Your Support
If you found this project helpful, please give it a ⭐ on GitHub!

📊 Project Status
✅ Version 1.0 - Complete
🔄 Version 1.1 - Planning scientific mode
📅 Last Updated: December 2024

Made with ❤️ and JavaScript

text

---

## 📦 Bonus: GitHub Repository Files

### `.gitignore` (create this file)
OS files
.DS_Store
Thumbs.db

Editor files
.vscode/
.idea/
*.swp

Logs
*.log

text

### `LICENSE` (create this file - MIT License)
MIT License

Copyright (c) 20246[Kalai Arasan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.






### Light Mode
