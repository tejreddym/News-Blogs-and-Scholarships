with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Update grids to render 2 side-by-side on mobile
text = text.replace(
    'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"',
    'className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"'
)

# 2. Adjust card padding for tight mobile fit (since 2 side-by-side on 320px is super tight)
text = text.replace(
    'className="p-6 flex flex-col flex-1"',
    'className="p-3 sm:p-6 flex flex-col flex-1"'
)

# 3. Adjust image height on mobile to prevent extreme tall aspect ratios
text = text.replace(
    'className="relative h-56 flex-shrink-0"',
    'className="relative h-32 sm:h-56 flex-shrink-0"'
)

# 4. Decrease font sizes inside the mobile cards to prevent overflowing text
text = text.replace(
    'className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors"',
    'className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none"'
)

text = text.replace(
    'className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3"',
    'className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3"'
)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Mobile optimizations completed.")
