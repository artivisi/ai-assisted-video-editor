# Episode 6 Assets - Variables

## Remotion Components

| Component ID | Description | Used In Section |
|--------------|-------------|-----------------|
| EP06-VariableDeclarationComparison | Variable syntax in 3 languages | "Perbandingan & Naming" (26:00) |

## Code Snippets (from episode outline)

### Python Variables
```python
nama = "Budi"
umur = 25
tinggi = 175.5
sudah_menikah = False

print(f"Nama: {nama}")
print(f"Umur: {umur} tahun")
```

### JavaScript Variables
```javascript
let nama = "Budi";        // bisa diubah
const umur = 25;          // tidak bisa diubah
let tinggi = 175.5;
let sudahMenikah = false;

const PI = 3.14159;       // const untuk nilai fixed
let score = 0;
score = score + 10;       // OK - let bisa diubah
```

### Java Variables
```java
String nama = "Budi";
int umur = 25;
double tinggi = 175.5;
boolean sudahMenikah = false;

System.out.println("Nama: " + nama);
```

## Notes

- Python: dynamic typing, no keyword needed
- JavaScript: let vs const choice
- Java: must declare type explicitly
