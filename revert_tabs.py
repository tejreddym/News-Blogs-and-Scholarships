import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Inject activeFilter state at line 6
text = text.replace(
    "const BlogsNews: React.FC = () => {\n",
    "const BlogsNews: React.FC = () => {\n    const [activeFilter, setActiveFilter] = useState<'ALL' | 'NEWS' | 'BLOGS'>('ALL');\n",
    1
)

# 2. Inject toggle buttons before ticking news
toggle_ui = """
                    {/* Toggle */}
                    <div className="bg-gray-100 p-1.5 rounded-2xl flex flex-shrink-0">
                        <button 
                            onClick={() => setActiveFilter('ALL')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'ALL' ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            ALL
                        </button>
                        <button 
                            onClick={() => setActiveFilter('NEWS')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'NEWS' ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            NEWS
                        </button>
                        <button 
                            onClick={() => setActiveFilter('BLOGS')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'BLOGS' ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            BLOGS
                        </button>
                    </div>
"""

text = text.replace(
    "                    {/* Scrolling News Ticker */}",
    toggle_ui + "\n                    {/* Scrolling News Ticker */}",
    1
)

# 3. Wrap Latest News
# Find `{/* 1. LATEST NEWS */}` section
news_start = text.find("{/* 1. LATEST NEWS */}\n                            <section>")
# Find the end of section 1, which is the start of section 2
news_end = text.find("{/* 2. LATEST BLOGS */}")

if news_start != -1 and news_end != -1:
    section_1 = text[news_start:news_end]
    wrapped_section_1 = "{ (activeFilter === 'ALL' || activeFilter === 'NEWS') && (\n                            <>\n                            " + section_1.replace("\n                            ", "\n                                ") + "\n                            </>\n                            )}\n                            "
    text = text[:news_start] + wrapped_section_1 + text[news_end:]

# 4. Wrap Latest Blogs
blogs_start = text.find("{/* 2. LATEST BLOGS */}\n                            <section>")
blogs_end = text.find("{/* 3. COLLEGES */}")

if blogs_start != -1 and blogs_end != -1:
    section_2 = text[blogs_start:blogs_end]
    wrapped_section_2 = "{ (activeFilter === 'ALL' || activeFilter === 'BLOGS') && (\n                            <>\n                            " + section_2.replace("\n                            ", "\n                                ") + "\n                            </>\n                            )}\n                            "
    text = text[:blogs_start] + wrapped_section_2 + text[blogs_end:]


with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Restored ALL/NEWS/BLOGS toggles successfully!")
