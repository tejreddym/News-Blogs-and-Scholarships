import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    content = f.read()

# I will find the beginning of <div className="lg:col-span-8">
start_idx = content.find('<div className="lg:col-span-8">')
end_idx = content.find('<aside className="lg:col-span-4 space-y-8">')

if start_idx == -1 or end_idx == -1:
    print("Could not find the bounds.")
else:
    print(f"Bounds found: {start_idx} to {end_idx}")

