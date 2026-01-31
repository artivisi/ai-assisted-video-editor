# Episode 5 Assets - Komentar & Struktur Kode

## Remotion Components

| Component ID | Description | Used In Section |
|--------------|-------------|-----------------|
| EP05-CommentSyntaxComparison | Side-by-side comment syntax (Python # vs JS/Java //) | "Best Practices Komentar" (20:00) |

## Code Snippets (from episode outline)

### Python Comments
```python
# Ini komentar satu baris

"""
Ini komentar
multiple baris (docstring)
"""

def greet(name):
    """
    Function untuk menyapa user.
    Parameter: name (string)
    Return: greeting message
    """
    return f"Hello, {name}!"
```

### JavaScript Comments
```javascript
// Ini komentar satu baris

/*
 * Ini komentar
 * multiple baris
 */

/**
 * Function untuk menyapa user
 * @param {string} name - Nama user
 * @returns {string} Greeting message
 */
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Notes

- Episode focuses on comment best practices
- Emphasize "why" not "what" in comments
- Self-documenting code > excessive comments
