with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

text = text.replace(
    "title: 'Balancing Mental Health During JEE Prep: A Psychologist's Perspective'",
    'title: "Balancing Mental Health During JEE Prep: A Psychologist\'s Perspective"'
)

text = text.replace(
    "excerpt: 'Discover what freshers experience during their first semester at India's premier engineering institute.'",
    'excerpt: "Discover what freshers experience during their first semester at India\'s premier engineering institute."'
)

text = text.replace(
    "                    {/* Sidebar */}",
    "                    </div>\n\n                    {/* Sidebar */}"
)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Fixed errors!")

