import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

view_all_pattern = r'<button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>'
see_all_stories_pattern = r'<button className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors">See All Stories</button>'

# Remove the top buttons
text = text.replace(view_all_pattern, '')
text = text.replace(see_all_stories_pattern, '')

# Prepare the new "Load More" block
load_more_ui = """
                                <div className="mt-8 flex justify-center">
                                    <button className="bg-white border-2 border-gray-100 text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>"""

# Insert before </section>
# Note: we use regex replacement to properly indent it before </section>
text = re.sub(r'(\s*)</section>', r'\n' + load_more_ui + r'\1</section>', text)


with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Swapped View All for Load More globally.")
