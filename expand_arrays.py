import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Pattern specifically for the items array block
pattern = r'({\[\s+)((?:\s*{.*},\s*)+)(\s*\]\.map\(\(card, i\) => \()'

def replacer(match):
    prefix = match.group(1)
    items = match.group(2)
    suffix = match.group(3)
    
    # Repeat the items to fill the row (4 cards)
    return prefix + items + items + suffix

new_text = re.sub(pattern, replacer, text)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(new_text)

print("Arrays expanded.")
