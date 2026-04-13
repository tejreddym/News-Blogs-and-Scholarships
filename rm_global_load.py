import re
with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

pattern = r'<div className="mt-16 pb-12 text-center border-t border-gray-100 pt-10">\n\s*<button className="bg-brand-gradient-h text-white px-10 py-3 rounded-full font-bold hover:shadow-lg transform transition active:scale-95">Load More Content</button>\n\s*</div>'

new_text = re.sub(pattern, '', text)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(new_text)

print("Removed global Load More button.")
