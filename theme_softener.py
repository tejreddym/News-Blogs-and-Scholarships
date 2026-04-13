import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Soften the main application background
text = text.replace('bg-gray-50', 'bg-[#F2F4F7]')

# Soften all cards and search bars (replace bg-white with near-white slate)
# Only replace bg-white when it's standing as a class, to avoid breaking bg-white/10 etc.
text = re.sub(r'\bbg-white\b(?!\/)', 'bg-[#FCFCFD]', text)

# The 'Load More' buttons should probably match the new background
text = text.replace('bg-[#FCFCFD] border-2 border-gray-100', 'bg-[#F9FAFB] border-2 border-[#E4E7EC]')

# Soften harsh borders
text = text.replace('border-gray-100', 'border-[#EAECF0]')
text = text.replace('border-gray-200', 'border-[#D0D5DD]')

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Theme softened successfully.")
