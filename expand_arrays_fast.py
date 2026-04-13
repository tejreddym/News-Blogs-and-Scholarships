with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

offset = 0
while True:
    end_idx = text.find('].map((card, i) => (', offset)
    if end_idx == -1:
        break
    
    start_idx = text.rfind('{[\n', 0, end_idx) + 3 # Just after "{["
    if start_idx != 2:
        items = text[start_idx:end_idx]
        text = text[:start_idx] + items + items + text[end_idx:]
        offset = start_idx + len(items) * 2 + len('].map((card, i) => (')
    else:
        offset = end_idx + 1

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Arrays expanded successfully")
