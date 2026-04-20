class GlassCalculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.updateDisplay();
    }

    delete() {
        if (this.currentOperand === '0') return;
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
        this.updateDisplay();
    }

    appendNumber(number) {
        // Prevent multiple decimals
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        // Replace 0 with number (except decimal)
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
        
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        
        if (this.previousOperand !== '') {
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.showError("Cannot divide by zero!");
                    return;
                }
                computation = prev / current;
                break;
            case '%':
                computation = (prev * current) / 100;
                break;
            default:
                return;
        }
        
        // Handle floating point precision
        this.currentOperand = parseFloat(computation.toFixed(8)).toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
        this.updateDisplay();
    }

    calculatePercentage() {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        
        this.currentOperand = (current / 100).toString();
        this.updateDisplay();
    }

    showError(message) {
        this.currentOperandElement.style.color = '#ef4444';
        this.currentOperandElement.classList.add('error-shake');
        this.currentOperand = message;
        this.updateDisplay();
        
        setTimeout(() => {
            this.currentOperandElement.style.color = '';
            this.currentOperandElement.classList.remove('error-shake');
            this.clear();
        }, 1500);
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand;
        
        if (this.operation != null) {
            this.previousOperandElement.innerText = 
                `${this.previousOperand} ${this.getOperationSymbol(this.operation)}`;
        } else {
            this.previousOperandElement.innerText = '';
        }
        
        // Trigger overflow check
        this.checkOverflow();
    }

    getOperationSymbol(operation) {
        const symbols = {
            '+': '+',
            '-': '-',
            '*': '×',
            '/': '÷',
            '%': '%'
        };
        return symbols[operation] || operation;
    }

    checkOverflow() {
        const display = this.currentOperandElement;
        if (display.scrollWidth > display.clientWidth) {
            display.style.fontSize = '2rem';
        } else {
            display.style.fontSize = '3rem';
        }
    }
}

// DOM Elements
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const calculator = new GlassCalculator(previousOperandElement, currentOperandElement);

// ========== SMOOTH ANIMATIONS - Button Press Effects ==========
function addButtonPressEffect(button) {
    button.classList.add('btn-press');
    
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'all 0.4s ease';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        ripple.remove();
    }, 400);
    
    setTimeout(() => {
        button.classList.remove('btn-press');
    }, 150);
}

// Button Event Listeners with animations
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        addButtonPressEffect(button);
    });
});

document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        addButtonPressEffect(button);
    });
});

document.querySelector('[data-action="clear"]').addEventListener('click', () => {
    calculator.clear();
    addButtonPressEffect(document.querySelector('[data-action="clear"]'));
});

document.querySelector('[data-action="delete"]').addEventListener('click', () => {
    calculator.delete();
    addButtonPressEffect(document.querySelector('[data-action="delete"]'));
});

document.querySelector('[data-action="equals"]').addEventListener('click', () => {
    calculator.compute();
    addButtonPressEffect(document.querySelector('[data-action="equals"]'));
});

// ========== KEYBOARD SUPPORT ==========
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers 0-9
    if (/^[0-9]$/.test(key)) {
        event.preventDefault();
        calculator.appendNumber(key);
        highlightButton(`[data-number="${key}"]`);
    }
    
    // Decimal point
    if (key === '.') {
        event.preventDefault();
        calculator.appendNumber('.');
        highlightButton('[data-number="."]');
    }
    
    // Operators
    if (key === '+') {
        event.preventDefault();
        calculator.chooseOperation('+');
        highlightButton('[data-operator="+"]');
    }
    
    if (key === '-') {
        event.preventDefault();
        calculator.chooseOperation('-');
        highlightButton('[data-operator="-"]');
    }
    
    if (key === '*') {
        event.preventDefault();
        calculator.chooseOperation('*');
        highlightButton('[data-operator="*"]');
    }
    
    if (key === '/') {
        event.preventDefault();
        calculator.chooseOperation('/');
        highlightButton('[data-operator="/"]');
    }
    
    if (key === '%') {
        event.preventDefault();
        calculator.chooseOperation('%');
        highlightButton('[data-operator="%"]');
    }
    
    // Equals (Enter key)
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculator.compute();
        highlightButton('[data-action="equals"]');
    }
    
    // Clear (Escape key)
    if (key === 'Escape') {
        event.preventDefault();
        calculator.clear();
        highlightButton('[data-action="clear"]');
    }
    
    // Delete (Backspace)
    if (key === 'Backspace') {
        event.preventDefault();
        calculator.delete();
        highlightButton('[data-action="delete"]');
    }
});

function highlightButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        addButtonPressEffect(button);
    }
}

// Prevent default behavior for calculator keys
document.addEventListener('keydown', (event) => {
    const calculatorKeys = ['+', '-', '*', '/', '.', 'Enter', 'Escape', 'Backspace', '%'];
    if (calculatorKeys.includes(event.key) || /^[0-9]$/.test(event.key)) {
        event.preventDefault();
    }
});

// ========== TOUCH DEVICE OPTIMIZATION ==========
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.click();
    });
});

// ========== DYNAMIC BACKGROUND EFFECT ==========
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = 20 + index * 10;
        const x = (mouseX * speed) - (speed / 2);
        const y = (mouseY * speed) - (speed / 2);
        blob.style.transform = `translate(${x}px, ${y}px) scale(${1 + mouseX * 0.1})`;
    });
});

// ========== RESIZE HANDLER ==========
window.addEventListener('resize', () => {
    calculator.checkOverflow();
});

// Initialize
calculator.clear();

// Add floating animation to calculator on load
window.addEventListener('load', () => {
    const calculator = document.querySelector('.calculator-glass');
    calculator.style.animation = 'slideUp 0.6s ease-out';
});

// Add custom animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);