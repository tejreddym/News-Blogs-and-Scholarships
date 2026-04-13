with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

text = text.replace('slide.author', '(slide as any).author')
text = text.replace('slide.date', '(slide as any).date')
text = text.replace('slide.read || slide.readTime', '(slide as any).read || (slide as any).readTime')

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("TS type errors fixed using 'any' casting.")
