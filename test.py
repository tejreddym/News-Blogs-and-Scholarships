import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

view_all_pattern = r'<button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>'

count = text.count(view_all_pattern)
print(f"Found standard View All buttons: {count}")

see_all_stories_pattern = r'<button className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors">See All Stories</button>'
count2 = text.count(see_all_stories_pattern)
print(f"Found See All Stories buttons: {count2}")
