import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Fix missing commas between duplicated objects in arrays
fixed_text = re.sub(r'}\n(\s+){(?=\s*tag:)', r'},\n\1{', text)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(fixed_text)

print("Fixed commas.")
