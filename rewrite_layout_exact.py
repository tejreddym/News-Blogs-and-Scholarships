import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Change the `<div className="lg:col-span-12">` inside the grid grid-cols-12 to `<div className="lg:col-span-8 space-y-12">`
# The grid starts at `<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">`
match = re.search(r'<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">\s*<div className="lg:col-span-12">', text)
if match:
    text = text.replace(match.group(0), '<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">\n<div className="lg:col-span-8 space-y-12">')

# 2. Extract and remove the old Trending News Carousel and Featured Blogs Carousel
start_news_carousel = "{/* Trending News Carousel */}"
start_news_grid = "{/* Latest News Grid */}"

start_blogs_carousel = "{/* Featured Blogs Carousel */}"
start_blogs_grid = "{/* Latest Blogs Grid */}"

news_carousel_match = re.search(r'\{\/\* Trending News Carousel \*\/.*?\{\/\* Latest News Grid \*\/\}', text, re.DOTALL)
if news_carousel_match:
    text = text.replace(news_carousel_match.group(0), "{/* Latest News Grid */}")

blogs_carousel_match = re.search(r'\{\/\* Featured Blogs Carousel \*\/.*?\{\/\* Latest Blogs Grid \*\/\}', text, re.DOTALL)
if blogs_carousel_match:
    text = text.replace(blogs_carousel_match.group(0), "{/* Latest Blogs Grid */}")

# 3. Reduce grid width from `xl:grid-cols-4` to `xl:grid-cols-3` globally inside the feed
text = text.replace('lg:grid-cols-3 xl:grid-cols-4', 'lg:grid-cols-2 xl:grid-cols-3')

# 4. Remove the old Newsletter component. Let's find exactly where it starts.
newsletter_start_pattern = r'\{\/\*\s*Newsletter\s*\*\/\}.*?<div className="lg:col-span-12 bg-secondary-foreground text-white'
newsletter_match = re.search(r'\{\/\*\s*Newsletter\s*\*\/\}.*?<\/div>\s*<\/main>', text, re.DOTALL)
if newsletter_match:
    # We replace everything from Newsletter up to </main> with just closing tags we KNOW are needed.
    # What tags are needed? The col-span-8 needs to be closed. The grid-cols-12 needs to be closed. 
    # Originally, newsletter was sitting outside col-span-12 (it was its own col-span-12), inside the grid.
    # Therefore, before Newsletter, the previous col-span-12 was closed.
    # Let's verify by replacing Newsletter up to </main> with </main>
    # WAIT! The old col-span-12 was already closed right before Newsletter!
    # So `</div>\n</div>\n{/* Newsletter */}`.
    # We will just wipe everything from `/* Newsletter */` to `</main>` and manually add the remaining close tags plus sidebar!
    pass


# A safer way to swap Newsletter to Sidebar:
import sys
# Just use strict find to avoid destroying closing tags
newsletter_target = "{/* Newsletter */}"
if newsletter_target in text:
    nl_start = text.find(newsletter_target)
    # The newsletter div ends before `                </div>\n            </main>`
    main_end = text.find('</main>', nl_start)
    text = text[:nl_start] + "###SIDEBAR###\n                </div>\n            </main>" + text[main_end + len('</main>'):]

# Let's locate the opening of `<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">`
grid_start = '<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">'
text = text.replace(grid_start, grid_start + '\n###NEW_CAROUSEL###\n')

NEW_CAROUSEL_BLOCK = """
                    {/* NEW TOP CAROUSELS */}
                    <div className="lg:col-span-12 mb-4 space-y-12">
                        {/* New Horizontal News Carousel */}
                        {(activeFilter === 'ALL' || activeFilter === 'NEWS') && (
                            <section className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                                >
                                    {trendingSlides.map((slide, i) => (
                                        <Link
                                            key={i}
                                            to={`/news/${slide.title.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="w-full flex-shrink-0 flex flex-col md:flex-row group/card"
                                        >
                                            <div className="md:w-6/12 relative h-[250px] md:h-[420px] overflow-hidden bg-gray-100">
                                                <span className={`absolute top-5 left-5 z-10 px-4 py-1.5 ${slide.tagColor || 'bg-brand-blue'} text-white text-[10px] font-black rounded uppercase tracking-wider`}>{slide.tag}</span>
                                                <img src={slide.image} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" alt={slide.title} />
                                            </div>
                                            <div className="md:w-6/12 p-8 md:p-12 flex flex-col justify-center bg-[#FCFCFD]">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{slide.date}</span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{slide.views || '8 min read'}</span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 group-hover/card:text-brand-blue transition-colors line-clamp-3 leading-snug">{slide.title}</h3>
                                                <p className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed">{slide.excerpt}</p>
                                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#EAECF0]">
                                                    <div className="flex items-center gap-4">
                                                        <img src={`https://i.pravatar.cc/100?u=${slide.title}`} className="w-10 h-10 rounded-full border border-[#EAECF0]" alt="Author" />
                                                        <span className="text-sm font-bold text-gray-900">{slide.author || 'Editorial Team'}</span>
                                                    </div>
                                                    <span className="text-brand-blue text-sm font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">Read Story <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <button
                                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-white hover:scale-105"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-white hover:scale-105"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                                <div className="absolute bottom-6 left-6 md:left-[50%] md:-ml-8 flex gap-2 z-20 hidden md:flex">
                                    {trendingSlides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => { e.preventDefault(); goToSlide(i); }}
                                            className={`w-2 h-2 rounded-full transition-all ${activeSlide === i ? 'bg-brand-blue w-6' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                        
                        {(activeFilter === 'ALL' || activeFilter === 'BLOGS') && (
                            <section className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${activeBlogSlide * 100}%)` }}
                                >
                                    {blogSlides.map((slide, i) => (
                                        <Link
                                            key={i}
                                            to={`/blog/${slide.title.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="w-full flex-shrink-0 flex flex-col md:flex-row group/card"
                                        >
                                            <div className="md:w-6/12 relative h-[250px] md:h-[420px] overflow-hidden bg-gray-100">
                                                <span className={`absolute top-5 left-5 z-10 px-4 py-1.5 ${slide.tagColor || 'bg-brand-blue'} text-white text-[10px] font-black rounded uppercase tracking-wider`}>{slide.tag}</span>
                                                <img src={slide.image} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" alt={slide.title} />
                                            </div>
                                            <div className="md:w-6/12 p-8 md:p-12 flex flex-col justify-center bg-[#FCFCFD]">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{slide.date || 'Oct 25, 2023'}</span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{slide.read || slide.readTime || '8 min read'}</span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 group-hover/card:text-brand-blue transition-colors line-clamp-3 leading-snug">{slide.title}</h3>
                                                <p className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed">{slide.excerpt}</p>
                                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#EAECF0]">
                                                    <div className="flex items-center gap-4">
                                                        <img src={`https://i.pravatar.cc/100?u=${slide.author}`} className="w-10 h-10 rounded-full border border-[#EAECF0]" alt="Author" />
                                                        <span className="text-sm font-bold text-gray-900">{slide.author || 'Editorial Team'}</span>
                                                    </div>
                                                    <span className="text-brand-blue text-sm font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">Read Full <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <button
                                    onClick={(e) => { e.preventDefault(); setActiveBlogSlide((prev) => (prev - 1 + blogSlides.length) % blogSlides.length); }}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-white hover:scale-105"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); setActiveBlogSlide((prev) => (prev + 1) % blogSlides.length); }}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-white hover:scale-105"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                                <div className="absolute bottom-6 left-6 md:left-[50%] md:-ml-8 flex gap-2 z-20 hidden md:flex">
                                    {blogSlides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => { e.preventDefault(); setActiveBlogSlide(i); }}
                                            className={`w-2 h-2 rounded-full transition-all ${activeBlogSlide === i ? 'bg-brand-blue w-6' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
"""

SIDEBAR_BLOCK = """
                    {/* The New Restored Right Sidebar */}
                    <aside className="lg:col-span-4 space-y-8 lg:pl-6 hidden lg:block">
                        
                        {/* Weekly Insights Newsletter */}
                        <div className="bg-secondary-foreground text-[#FCFCFD] p-8 rounded-3xl overflow-hidden shadow-xl relative group border border-gray-800">
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-green rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3 text-white">Join the Community</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">Weekly insights, career guidance, and live exam alerts dropped directly into your inbox.</p>
                                <input className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue mb-4 outline-none backdrop-blur-md text-sm transition-all" placeholder="Your Email Address" type="email" />
                                <button className="w-full bg-accent-green text-gray-900 px-6 py-3.5 rounded-xl font-black hover:bg-[#2bc478] transition-all shadow-lg flex items-center justify-center gap-2">
                                    Subscribe Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Popular Content */}
                        <div className="bg-[#FCFCFD] p-8 rounded-3xl shadow-sm border border-[#EAECF0] sticky top-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <span className="p-1.5 bg-[#FFF4ED] text-motivational-orange rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </span>
                                Popular Reads
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { tag: 'Entrance Exam', title: 'Top Engineering Entrance Exams 2024: Major Changes', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                                    { tag: 'Scholarship', title: 'Global Merit Scholarship Program 2024 Now Accepting Applications', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
                                    { tag: 'Study Abroad', title: 'Study in Germany for Free: The Complete 2024 Guide', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                                    { tag: 'Engineering', title: 'Top 5 Engineering Branches with Highest Salaries in 2024', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                                ].map((item, index) => (
                                    <Link key={index} to="#" className="flex gap-4 group items-start border-b border-[#EAECF0] pb-6 last:mb-0 last:pb-0 last:border-0 hover:-translate-y-0.5 transition-transform">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-1 block">{item.tag}</span>
                                            <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">{item.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </aside>
"""

text = text.replace('###NEW_CAROUSEL###', NEW_CAROUSEL_BLOCK)
text = text.replace('###SIDEBAR###', SIDEBAR_BLOCK)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Layout rewritten correctly!")
