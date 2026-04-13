import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# we find the redundant big carousel inside Latest Blogs
pattern = r'\{/\*\s*Featured Blog Carousel\s*\*/\}\s*<div className="relative overflow-hidden rounded-3xl shadow-xl h-\[450px\] mb-8">.*?<div className="grid grid-cols-2'

# We replace it so that it just seamlessly leads into the grid
new_text = re.sub(pattern, r'<div className="grid grid-cols-2', text, flags=re.DOTALL)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(new_text)

print("Redundant featured blog carousel removed.")
