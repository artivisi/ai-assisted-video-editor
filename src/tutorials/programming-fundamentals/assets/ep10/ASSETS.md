# Episode 10 Assets - Arithmetic & Assignment Operators

## Remotion Components

| Component ID | Description | Used In Section |
|--------------|-------------|-----------------|
| EP10-OperatorPrecedenceChart | PEMDAS precedence levels | "Operator Precedence" (24:00) |
| EP10-OperatorExamples | Step-by-step calculation examples | "Operator Precedence" (24:00) |

## Code Snippets (from episode outline)

### Modulo Operator
```python
print(10 % 3)   # 1 (10 = 3*3 + 1)
print(15 % 5)   # 0 (15 = 5*3 + 0)

# Check even/odd
angka = 7
if angka % 2 == 0:
    print("Genap")
else:
    print("Ganjil")

# Wrap around (0-11 for clock)
jam = 14
jam_12 = jam % 12  # 2 (2 PM)
```

### Assignment Operators
```javascript
let x = 10;

x += 5;   // x = x + 5 = 15
x -= 3;   // x = x - 3 = 12
x *= 2;   // x = x * 2 = 24
x /= 4;   // x = x / 4 = 6

// Increment/Decrement (JS & Java only)
let i = 0;
i++;      // i = 1
i--;      // i = 0

// Python uses i += 1 instead
```

### Integer Division
```python
# Python
print(7 // 2)  # 3 (integer division)
print(7 / 2)   # 3.5 (float division)
```

```javascript
// JavaScript
console.log(Math.floor(7 / 2));  // 3
```

```java
// Java
int result = 7 / 2;  // 3 (int / int = int)
```

## Notes

- Modulo is very useful for even/odd, wrap-around
- PEMDAS order: Parentheses, Exponents, Multiply/Divide, Add/Subtract
- Use parentheses for clarity
