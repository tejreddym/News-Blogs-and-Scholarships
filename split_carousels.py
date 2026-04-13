import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. DELETE THE REDUNDANT CAROUSEL
# Find the start of the `<div className="relative overflow-hidden rounded-3xl shadow-xl h-[450px] mb-8">`
# and delete until before `<div className="grid grid-cols-2`
redundant_carousel_pattern = r'\{/\*\s*Trending News Carousel\s*\*/\}\s*<div className="relative overflow-hidden rounded-3xl shadow-xl h-\[450px\] mb-8">.*?<div className="grid grid-cols-2'
text = re.sub(redundant_carousel_pattern, r'<div className="grid grid-cols-2', text, flags=re.DOTALL)


# 2. WRAP NEWS CAROUSEL IN SPLIT GRID
news_start_pattern = r'\{\(activeFilter === \'ALL\' \|\| activeFilter === \'NEWS\'\) && \(\s*<section className="relative group overflow-hidden rounded-3xl shadow-sm border border-\[#EAECF0\] bg-\[#FCFCFD\]">'
news_end_pattern = r'</section>\s*\)}'

new_news_start = """{(activeFilter === 'ALL' || activeFilter === 'NEWS') && (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <section className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">"""
                                
new_news_end = """</section>
                                <aside className="lg:col-span-4 bg-[#FCFCFD] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#EAECF0] flex flex-col">
                                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent-green rounded-full"></span> 
                                        Trending News
                                    </h3>
                                    <div className="flex flex-col gap-6 flex-1">
                                        {trendingSlides.slice(0, 4).map((item, idx) => (
                                            <Link key={idx} to={`/news/${item.title.replace(/\s+/g, '-').toLowerCase()}`} className="flex gap-4 group items-center">
                                                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                                                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">{item.tag}</span>
                                                    <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-brand-blue line-clamp-2">{item.title}</h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <button className="mt-8 pt-6 border-t border-[#EAECF0] text-sm font-black text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest text-left w-full">View All Trending</button>
                                </aside>
                            </div>
                        )}"""

# We substitute the specific sections for News
# Since we need to replace exactly the news block, we find the first block
news_split = text.split("{(activeFilter === 'ALL' || activeFilter === 'NEWS') && (", 1)
if len(news_split) == 2:
    news_content_split = news_split[1].split("</section>\n                        )}", 1)
    if len(news_content_split) == 2:
        inner = news_content_split[0]
        inner = inner.replace('<section className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">', '', 1)
        # Assemble
        text = news_split[0] + new_news_start + inner + new_news_end + news_content_split[1]


# 2. WRAP BLOGS CAROUSEL IN SPLIT GRID
blog_split = text.split("{(activeFilter === 'ALL' || activeFilter === 'BLOGS') && (", 1)
if len(blog_split) == 2:
    blog_content_split = blog_split[1].split("</section>\n                        )}", 1)
    if len(blog_content_split) == 2:
        inner = blog_content_split[0]
        inner = inner.replace('<section className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">', '', 1)
        
        new_blogs_start = """{(activeFilter === 'ALL' || activeFilter === 'BLOGS') && (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <section className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">"""
        
        new_blogs_end = """</section>
                                <aside className="lg:col-span-4 bg-[#FCFCFD] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#EAECF0] flex flex-col">
                                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span> 
                                        Featured Blogs
                                    </h3>
                                    <div className="flex flex-col gap-6 flex-1">
                                        {blogSlides.slice(1, 5).map((item, idx) => (
                                            <Link key={idx} to={`/blog/${item.title.replace(/\s+/g, '-').toLowerCase()}`} className="flex gap-4 group items-center">
                                                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                                                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1.5">{item.tag}</span>
                                                    <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-brand-blue line-clamp-2">{item.title}</h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <button className="mt-8 pt-6 border-t border-[#EAECF0] text-sm font-black text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest text-left w-full">View Top Authors</button>
                                </aside>
                            </div>
                        )}"""
        
        text = blog_split[0] + new_blogs_start + inner + new_blogs_end + blog_content_split[1]


with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Split Carousels applied.")
