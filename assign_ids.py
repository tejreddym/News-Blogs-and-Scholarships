import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    content = f.read()

# For each <h2> tag, we want to add an id to the parent or just before it if we can't find.
# An easier way: just add id="section-slug" to the <h2> tag itself! Since it represents the section title, scrolling to the <h2> is perfectly fine and often looks better because the title is right at the top.
# Let's find all `        <h2 className="text-xl font-bold flex items-center gap-2">`
# and the text inside them.

def replace_h2(match):
    full_h2 = match.group(0)
    title = re.sub(r'<[^>]+>', '', full_h2).strip()
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', title.lower()).strip('-')
    
    # ensure it's not "latest-news" if it's already there? None are there.
    # We replace `<h2 className="` with `<h2 id="slug" className="`
    new_h2 = full_h2.replace('<h2 className="', f'<h2 id="sec-{slug}" className="')
    return new_h2

new_content = re.sub(r'<h2 className="text-xl font-bold flex items-center gap-2">.*?</h2>', replace_h2, content, flags=re.DOTALL)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(new_content)

