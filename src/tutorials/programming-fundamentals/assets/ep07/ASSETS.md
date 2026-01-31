# Episode 7 Assets - Data Types & Typing Systems

## Remotion Components

| Component ID | Description | Used In Section |
|--------------|-------------|-----------------|
| EP01-TypingSystemsDiagram | Typing systems quadrant diagram | "Typing Matrix Summary" (22:00) |
| EP01-TypingSystemsDiagramAll | Full diagram with all languages | Reference |

## Code Snippets (from episode outline)

### Dynamic vs Static Typing
```python
# Python - Dynamic Typing
x = 10          # x adalah int
x = "hello"     # x sekarang string - OK!
x = 3.14        # x sekarang float - OK!
```

```java
// Java - Static Typing
int x = 10;
x = "hello";  // COMPILE ERROR!
// Type mismatch: cannot convert String to int
```

### Strong vs Weak Typing
```javascript
// JavaScript - Weak Typing (Type Coercion)
console.log("5" + 3);    // "53" (string)
console.log("5" - 3);    // 2 (number)
console.log("5" * 2);    // 10 (number)

// Triple equals for strict comparison
console.log(5 == "5");   // true (coercion)
console.log(5 === "5");  // false (strict)
```

```python
# Python - Strong Typing
result = "5" + 3  # TypeError!
# Harus explicit conversion
result = int("5") + 3     # 8
result = "5" + str(3)     # "53"
```

### Floating Point Problem
```python
print(0.1 + 0.2)  # 0.30000000000000004

# Solution: use Decimal
from decimal import Decimal
a = Decimal("0.1")
b = Decimal("0.2")
print(a + b)  # 0.3 exactly!
```

## Notes

- This is a longer episode (45 min)
- Important for understanding why finance apps need Decimal
- Reuse TypingSystemsDiagram from EP01
