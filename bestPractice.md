### README: Best Practices for Writing Clean JavaScript Code  

This document outlines essential best practices for writing clean and maintainable JavaScript code. Below are the key guidelines, with examples provided in the comments:

---

### **1. Never More Than One Line Break**
- Avoid excessive blank lines to maintain code readability.

**Example:**
```javascript
const name = "Alice";
const age = 25;

console.log(name, age);
```

---

### **2. Add Line Breaks Between Logical Blocks**
- Use line breaks between variables, functions, or logical sections for clarity.

**Example:**
```javascript
const user = "John";
const isActive = true;

console.log(`User: ${user}, Active: ${isActive}`);
```

---

### **3. Use `forEach` and `map` Over Traditional Loops**
- Prefer modern iteration methods (`forEach`, `map`) for cleaner and declarative code.

**Example:**
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));

const squared = numbers.map(num => num ** 2);
console.log(squared);
```

---

### **4. Never Use `var`; Always Use `let` or `const`**
- Use `const` for values that do not change and `let` for variables that do.

**Example:**
```javascript
const city = "New York";
let temperature = 20;
```

---

### **5. Use Arrow Functions**
- Use arrow functions for shorter and cleaner syntax, where applicable.

**Example:**
```javascript
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice"));
```

---

### **6. Use Ternary and Nullish Coalescing Operators**
- Simplify conditional assignments with ternary (`? :`) or nullish (`??`) operators.

**Example:**
```javascript
const myName = name ? name : 'no name';
const myNameAlt = name ?? 'no name';
```

---

### **7. Avoid Nested `if` Statements**
- Simplify logic using `return` and logical operators to reduce nesting.

**Example (Clean):**
```javascript
const authenticateClean = (wifi, login, admin) => {
    if (!wifi) return console.log(`no wifi`);
    if (!login) return console.log(`login failed`);
    if (!admin) return console.log(`not admin`);
    
    console.log(`render admin panel`);
};
```

**Example (Bad - Nested):**
```javascript
const authenticateBad = (wifi, login, admin) => {
    if (wifi) {
        if (login) {
            if (admin) {
                console.log(`render admin panel`);
            } else {
                console.log(`not admin`);
            }
        } else {
            console.log(`login failed`);
        }
    } else {
        console.log(`no wifi`);
    }
};
```

---

### **8. Use `async/await` for Asynchronous Operations**
- Replace callback or `.then()` syntax with `async/await` for readability.

---

### **9. Use JSDoc for Documentation**
- Document functions with JSDoc comments to explain parameters and return values.

**Example:**
```javascript
/**
 * Calculates the square of a number.
 * @param {number} num - The number to square.
 * @returns {number} - The squared value.
 */
const square = num => num ** 2;
```

---

### **10. Define Functions in the Order They Are Used**
- Place functions above their callers to reduce scrolling and improve readability.

**Example:**
```javascript
const calculate = num => num * 2;

const main = () => {
    const result = calculate(5);
    console.log(result);
};

main();
```

---

By following these guidelines, you can ensure your JavaScript code is clean, efficient, and maintainable.
