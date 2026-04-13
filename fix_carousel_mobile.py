with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Update the title sizes in Carousels
text = text.replace(
    'className="text-3xl font-bold text-white mb-3"',
    'className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 line-clamp-2"'
)

# 2. Update the gap and flex wrap in the footer row containing the button in the carousel
text = text.replace(
    'className="flex items-center gap-6"',
    'className="flex items-center flex-wrap gap-3 sm:gap-6"'
)

# 3. Update the 'Read Full Story' / 'Read Full Blog' button to prevent wrapping
text = text.replace(
    'className="bg-brand-blue px-6 py-2.5 rounded-full text-white font-semibold hover:bg-accent-blue transition-colors"',
    'className="bg-brand-blue px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white text-sm sm:text-base font-semibold hover:bg-accent-blue transition-colors whitespace-nowrap"'
)

# 4. Limit the excerpt in the carousel further on mobile
text = text.replace(
    'className="text-gray-200 line-clamp-2 mb-5 max-w-2xl"',
    'className="text-gray-200 line-clamp-2 text-sm sm:text-base mb-3 sm:mb-5 max-w-2xl"'
)

# 5. Make the carousel tag smaller on mobile
text = text.replace(
    ' text-xs font-bold rounded-full mb-4 w-fit uppercase"',
    ' text-[10px] sm:text-xs font-bold rounded-full mb-2 sm:mb-4 w-fit uppercase"'
)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Carousel mobile layout optimized.")
