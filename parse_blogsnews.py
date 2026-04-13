import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Grab everything before the grid wrapper
grid_wrapper_start = '<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">'
before_grid, rest = text.split(grid_wrapper_start, 1)

# 2. Rip out the old carousels. They are inside sections. 
# It's safer to just look for "Trending News Carousel" and "Featured Blogs Carousel"
trending_carousel_pattern = re.compile(r'\{\/\*\s*Trending News Carousel\s*\*\/\}.*?<div className="grid grid-cols-2 md:grid-cols-2', re.DOTALL)
featured_carousel_pattern = re.compile(r'\{\/\*\s*Featured Blogs Carousel\s*\*\/\}.*?<div className="grid grid-cols-2 md:grid-cols-2', re.DOTALL)

# Grab the Grid content! Let's just remove the carousels from the rest of the text.
rest = trending_carousel_pattern.sub('<div className="grid grid-cols-2 md:grid-cols-2', rest)
rest = featured_carousel_pattern.sub('<div className="grid grid-cols-2 md:grid-cols-2', rest)

# Let's adjust the `<div className="lg:col-span-12">` inside `rest` to be `lg:col-span-8`
# Wait, there's a problem: the very first wrapper inside the grid is lg:col-span-12. 
# Let's just replace the FIRST instance of "lg:col-span-12" in `rest` with "lg:col-span-8 space-y-12"
first_span12 = rest.find('<div className="lg:col-span-12">')
if first_span12 != -1:
    rest = rest[:first_span12] + '<div className="lg:col-span-8">' + rest[first_span12 + len('<div className="lg:col-span-12">'):]

# Let's extract the Newsletter block which was at the bottom of the page
newsletter_pattern = re.compile(r'\{\/\*\s*Newsletter\s*\*\/\}.*?<\/div>\s*<\/div>', re.DOTALL)
newsletter_match = newsletter_pattern.search(rest)
newsletter_html = ""
if newsletter_match:
    # Actually the Newsletter block has multiple divs so pulling it out via regex might chop the HTML.
    # Let's use a highly specific find.
    pass

with open('src/pages/BlogsNews_debug.tsx', 'w') as f:
    f.write(rest)

print("Parsed successfully. Check debug file.")
