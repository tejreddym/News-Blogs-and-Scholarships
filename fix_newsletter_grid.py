with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Add lg:col-span-12 to the Newsletter div
text = text.replace(
    '<div className="bg-secondary-foreground text-white p-8 md:p-12 rounded-3xl relative overflow-hidden mt-10 shadow-2xl">',
    '<div className="lg:col-span-12 bg-secondary-foreground text-white p-8 md:p-12 rounded-3xl relative overflow-hidden mt-10 shadow-2xl">'
)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Newsletter alignment fixed.")
