# Episode 9 Assets - Type Conversion & String Operations

## Remotion Components

This episode primarily uses code snippets from the outline.
No custom Remotion components needed.

## Code Snippets (from episode outline)

### Python Type Conversion
```python
umur_str = "25"
umur_int = int(umur_str)      # 25 (integer)
umur_float = float(umur_str)  # 25.0 (float)

harga = 99.99
harga_str = str(harga)        # "99.99"

# f-string untuk gabung
nama = "Budi"
pesan = f"Halo {nama}, umur {umur_int} tahun"
```

### JavaScript Type Conversion
```javascript
let umurStr = "25";
let umurInt = parseInt(umurStr);     // 25
let umurFloat = parseFloat(umurStr); // 25

// Shortcut dengan unary plus
let angka = +"42";  // 42 (number)

// Template literal
let nama = "Budi";
let pesan = `Halo ${nama}, umur ${umurInt} tahun`;
```

### Java Type Conversion
```java
String umurStr = "25";
int umurInt = Integer.parseInt(umurStr);
double umurDouble = Double.parseDouble(umurStr);

// Casting
double pi = 3.14159;
int truncated = (int) pi;  // 3
```

## Notes

- Input from users is always string
- Must convert to number for calculations
- f-strings (Python) and template literals (JS) for readable output
