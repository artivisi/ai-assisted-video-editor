# Episode 8 Assets - Number Systems

## Remotion Components

| Component ID | Description | Used In Section |
|--------------|-------------|-----------------|
| EP08-NumberSystemsChart | Conversion table (decimal/binary/octal/hex) | "Konversi di Code" (22:00) |
| EP08-HexColors | Hex color codes demo | "Hexadecimal dalam Programming" (16:00) |

## Code Snippets (from episode outline)

### Number Literals
```python
decimal_num = 255
binary_num = 0b11111111   # = 255
hex_num = 0xFF            # = 255
octal_num = 0o377         # = 255
```

### Conversions
```python
num = 255
print(bin(num))   # '0b11111111'
print(hex(num))   # '0xff'
print(oct(num))   # '0o377'

# From string
print(int('11111111', 2))  # 255 (from binary)
print(int('FF', 16))       # 255 (from hex)
```

### Hex Colors
```python
red = "#FF0000"      # RGB(255, 0, 0)
green = "#00FF00"    # RGB(0, 255, 0)
blue = "#0000FF"     # RGB(0, 0, 255)
white = "#FFFFFF"    # RGB(255, 255, 255)
```

## Notes

- Binary: language of computers (0/1)
- Hex: compact representation, used for colors
- Octal: Unix file permissions (chmod 755)
