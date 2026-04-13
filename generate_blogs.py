import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    content = f.read()

start_idx = content.find('<div className="lg:col-span-8">')
end_idx = content.find('                    {/* Sidebar */}')

if start_idx == -1 or end_idx == -1:
    print("Could not find the bounds.")
    exit(1)

# Before the <div className="lg:col-span-8"> there is "                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">"
# Let's extract the full block 

header = content[:start_idx + len('<div className="lg:col-span-8">')]
footer = content[end_idx:]

new_content = """
                        <div className="space-y-16 fade-in">

                            {/* 1. LATEST NEWS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                        Latest News
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                
                                {/* Trending News Carousel */}
                                <div className="relative overflow-hidden rounded-3xl shadow-xl h-[450px] mb-8">
                                    {trendingSlides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                        >
                                            <img alt={slide.title} className="w-full h-full object-cover" src={slide.image} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                                <span className={`inline-block px-3 py-1 ${slide.tagColor} text-white text-xs font-bold rounded-full mb-4 w-fit uppercase`}>{slide.tag}</span>
                                                <h3 className="text-3xl font-bold text-white mb-3">{slide.title}</h3>
                                                <p className="text-gray-200 line-clamp-2 mb-5 max-w-2xl">{slide.excerpt}</p>
                                                <div className="flex items-center gap-6">
                                                    <Link to="/news/nep-2024-reforms" className="bg-brand-blue px-6 py-2.5 rounded-full text-white font-semibold hover:bg-accent-blue transition-colors">Read Full Story</Link>
                                                    <div className="flex items-center text-gray-300 text-sm gap-4">
                                                        <span>{slide.date}</span>
                                                        <span className="flex items-center gap-1">
                                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                            {slide.views}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Previous slide">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Next slide">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                        {trendingSlides.map((_, index) => (
                                            <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'NATIONAL NEWS',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'NEP 2024: Major Reforms in Higher Education Unveiled',
                                            excerpt: 'The Ministry has announced significant structural changes aiming to modernize higher education across national institutions starting this fall.',
                                            author: 'Ananya Sharma',
                                            date: 'Oct 25, 2023',
                                            readTime: '6 min read'
                                        },
                                        {
                                            tag: 'SCHOLARSHIP',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
                                            title: 'Global Merit Scholarship 2024: Applications Open for Indian Students',
                                            excerpt: 'The fellowship covers full tuition and a monthly stipend for students pursuing advanced degrees in Singapore and Europe.',
                                            author: 'Neha Kapoor',
                                            date: 'Oct 22, 2023',
                                            readTime: '4 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 2. LATEST BLOGS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                        Latest Blogs
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                
                                {/* Featured Blog Carousel */}
                                <div className="relative overflow-hidden rounded-3xl shadow-xl h-[450px] mb-8">
                                    {blogSlides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-700 ${index === activeBlogSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                        >
                                            <img alt={slide.title} className="w-full h-full object-cover" src={slide.image} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                                <span className={`inline-block px-3 py-1 ${slide.tagColor} text-white text-xs font-bold rounded-full mb-4 w-fit uppercase`}>{slide.tag}</span>
                                                <h3 className="text-3xl font-bold text-white mb-3">{slide.title}</h3>
                                                <p className="text-gray-200 line-clamp-2 mb-5 max-w-2xl">{slide.excerpt}</p>
                                                <div className="flex items-center gap-6">
                                                    <Link to="/blog/jee-mental-health" className="bg-brand-blue px-6 py-2.5 rounded-full text-white font-semibold hover:bg-accent-blue transition-colors">Read Full Blog</Link>
                                                    <div className="flex items-center text-gray-300 text-sm gap-3">
                                                        <img src={`https://i.pravatar.cc/40?u=${slide.author}`} alt={slide.author} className="w-7 h-7 rounded-full object-cover" />
                                                        <span>{slide.author}</span>
                                                        <span className="text-gray-400">· {slide.read}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => setActiveBlogSlide(prev => (prev - 1 + blogSlides.length) % blogSlides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Previous blog">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                    <button onClick={() => setActiveBlogSlide(prev => (prev + 1) % blogSlides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Next blog">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                        {blogSlides.map((_, index) => (
                                            <button key={index} onClick={() => setActiveBlogSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === activeBlogSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} aria-label={`Go to blog slide ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'HEALTH',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                            title: 'Balancing Mental Health During JEE Prep: A Psychologist\'s Perspective',
                                            excerpt: 'The pressure of competitive exams can be overwhelming. In this post, we discuss actionable strategies to maintain peak mental health...',
                                            author: 'Dr. Sunita Verma',
                                            date: 'Oct 25, 2023',
                                            readTime: '7 min read'
                                        },
                                        {
                                            tag: 'CAREER GUIDE',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
                                            title: 'Is Data Science Still the Hottest Career Path in 2024?',
                                            excerpt: 'With the rise of AI, the data landscape is evolving. We explore the current job market, required skillsets, and why specialized data roles are becoming more valuable...',
                                            author: 'Rahul Kapoor',
                                            date: 'Oct 22, 2023',
                                            readTime: '9 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/blog/jee-mental-health" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200">
                                                            <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-full h-full rounded-full object-cover" />
                                                        </div>
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 3. COLLEGES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-secondary-green rounded-full"></span>
                                        Colleges
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'CAMPUS LIFE',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'Inside IIT Bombay: What Life Really Looks Like for First-Year Students',
                                            excerpt: 'Discover what freshers experience during their first semester at India\'s premier engineering institute.',
                                            author: 'Student Blogger',
                                            date: 'Nov 1, 2023',
                                            readTime: '8 min read'
                                        },
                                        {
                                            tag: 'RANKINGS',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                            title: 'Top 10 Greenest Campuses in India: Sustaining Education',
                                            excerpt: 'Institutions that are leading the way in sustainable development, renewable energy, and eco-friendly infrastructure.',
                                            author: 'Rahul Verma',
                                            date: 'Oct 20, 2023',
                                            readTime: '5 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 4. EXAMS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-urgent-red rounded-full"></span>
                                        Exams
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { tag: 'BOARD', title: 'CBSE Class 12 Board Exam 2024: Timetable Released, Key Dates & Preparation Tips', date: 'Nov 1, 2023', views: '22K' },
                                        { tag: 'COMPETITIVE', title: 'JEE Main 2024: Session 1 Registration Begins, Check Eligibility & Syllabus', date: 'Nov 2, 2023', views: '45K' },
                                        { tag: 'RESULTS', title: 'GATE 2023 Final Answer Key Released; Result Expected Next Week', date: 'Nov 3, 2023', views: '38K', live: true },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow group cursor-pointer">
                                            <span className="text-2xl font-black text-gray-100 group-hover:text-urgent-red transition-colors flex-shrink-0 w-8">0{i + 1}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {item.live && <span className="px-2 py-0.5 bg-urgent-red text-white text-[10px] font-bold rounded animate-pulse">LIVE</span>}
                                                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded">{item.tag}</span>
                                                </div>
                                                <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 mt-1 block">{item.date} · {item.views} Views</span>
                                            </div>
                                            <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 5. SCHOOLS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-yellow-400 rounded-full"></span>
                                        Schools
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'K12 EDUCATION',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG',
                                            title: 'How Schools are Adapting to the New Education Policy 2024',
                                            excerpt: 'A deep dive into how curriculum changes are being implemented at the foundational stages across India.',
                                            author: 'Meera Rai',
                                            date: 'Nov 4, 2023',
                                            readTime: '6 min read'
                                        },
                                        {
                                            tag: 'ED-TECH',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
                                            title: 'Smart Classrooms: The Future of Primary Education',
                                            excerpt: 'Interactive whiteboards, tablets, and AI tutors are becoming the new norm in tier-1 city schools.',
                                            author: 'Ankit Sharma',
                                            date: 'Oct 28, 2023',
                                            readTime: '4 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 6. SCHOLARSHIPS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                                        Scholarships
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { tag: 'GLOBAL', tagCls: 'bg-purple-100 text-creativity-purple', title: 'PM Scholarship Scheme 2024: Applications Open', date: 'Nov 5', views: '11K' },
                                        { tag: 'NATIONAL', tagCls: 'bg-blue-100 text-brand-blue', title: 'NSF Scholarship for Engineering Undergraduates Announced', date: 'Oct 30', views: '9K' },
                                        { tag: 'WOMEN', tagCls: 'bg-pink-100 text-pink-600', title: 'L\'Oréal India For Young Women in Science Scholarship', date: 'Oct 25', views: '14K' },
                                        { tag: 'SPORTS', tagCls: 'bg-green-100 text-success-green', title: 'National Sports Talent Search Scholarship 2024', date: 'Oct 20', views: '8K' },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow group">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 ${item.tagCls}`}>{item.tag}</span>
                                            <p className="flex-1 font-semibold text-gray-800 text-sm leading-snug line-clamp-1 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                            <span className="text-xs text-gray-400 flex-shrink-0 hidden md:block">{item.date} · {item.views} Views</span>
                                            <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 7. COURSES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                                        Courses
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'TECH',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'Top 5 AI and Machine Learning Courses to Enroll in 2024',
                                            excerpt: 'Skyrocket your career with these highly rated online and offline bootcamps focused on Generative AI.',
                                            author: 'Sanjay Reddy',
                                            date: 'Nov 6, 2023',
                                            readTime: '7 min read'
                                        },
                                        {
                                            tag: 'DESIGN',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                            title: 'UI/UX Design Certification: Is it Worth It?',
                                            excerpt: 'We analyze the top 3 design courses in India and their placement statistics for the current year.',
                                            author: 'Preeti Deshmukh',
                                            date: 'Nov 1, 2023',
                                            readTime: '5 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 8. CAREERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                        Careers
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { title: 'SSC CGL 2024 Notification Out: 17,727 Vacancies Announced, Apply by Dec 27', date: 'Nov 3, 2023', views: '32K' },
                                        { title: 'UPSC EPFO 2024: Enforcement Officers Exam Date & Notification Released', date: 'Nov 1, 2023', views: '18K' },
                                        { title: 'RRB NTPC 2024: Railway Recruitment Board Issues Official Notification', date: 'Oct 30, 2023', views: '24K' },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer group">
                                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-lg">💼</div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 mt-1 block">{item.date} · {item.views} Views</span>
                                            </div>
                                            <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 9. STARTUP AND INNOVATION */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
                                        Startup and Innovation
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'ED-TECH STARTUPS',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
                                            title: 'Student-led Startups at IITs Raise Over $50M in 2023',
                                            excerpt: 'Campus incubators are flourishing as more young innovators opt out of placements to build their own companies.',
                                            author: 'Venture Insider',
                                            date: 'Nov 2, 2023',
                                            readTime: '6 min read'
                                        },
                                        {
                                            tag: 'INNOVATION',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG',
                                            title: 'Hackathons: The New Recruitment Ground for Tech Giants',
                                            excerpt: 'Why companies are prioritizing hackathon winners over traditional interview candidates for engineering roles.',
                                            author: 'Tech Chronicler',
                                            date: 'Oct 29, 2023',
                                            readTime: '5 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 10. STUDY ABROAD */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-calm-teal rounded-full"></span>
                                        Study Abroad
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { country: '🇬🇧 UK', title: 'UK Post-Study Work Visa Extended: New Rules for Indian Students', date: 'Nov 2', views: '11K' },
                                        { country: '🇦🇺 AUS', title: 'Australia Announces New Scholarship Scheme for South Asian Applicants', date: 'Oct 31', views: '8.4K' },
                                        { country: '🇺🇸 USA', title: 'F-1 Visa Interview Wait Times Drop to Record Low Across Indian Consulates', date: 'Oct 29', views: '17K' },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer group">
                                            <span className="text-2xl flex-shrink-0">{item.country.split(' ')[0]}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 mt-1 block">{item.country.split(' ')[1]} · {item.date} · {item.views} Views</span>
                                            </div>
                                            <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 11. FEATURED NEWS / ARTICLES FOR PARTNER UNIVERSITIES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                        Featured News/Articles for Partner Universities
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            tag: 'PARTNERSHIP',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'Amity University Collaborates with Google Cloud for New AI Curriculum',
                                            excerpt: 'A landmark partnership brings hands-on cloud computing and Generative AI courses to undergraduates.',
                                            author: 'University Press',
                                            date: 'Nov 3, 2023',
                                            readTime: '4 min read'
                                        },
                                        {
                                            tag: 'EVENTS',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                            title: 'SRM Institute Hosts Annual Global Tech Summit 2024',
                                            excerpt: 'Industry leaders gather to discuss the future of engineering education and industry 4.0 readiness.',
                                            author: 'Event Coverage',
                                            date: 'Oct 31, 2023',
                                            readTime: '3 min read'
                                        }
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 12. POLICIES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                                        Policies
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { title: 'UGC Extends Ph.D. Thesis Submission Deadline by 6 Months', date: 'Nov 6, 2023', views: '21K' },
                                        { title: 'New Reservation Directives for Central Universities Notified', date: 'Oct 28, 2023', views: '45K' },
                                        { title: 'AICTE Approves Guidelines for Joint Degree Programs with Foreign Institutes', date: 'Oct 20, 2023', views: '13K' },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer group">
                                            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-lg">📜</div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 mt-1 block">{item.date} · {item.views} Views</span>
                                            </div>
                                            <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* 13. OTHERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gray-400 rounded-full"></span>
                                        Others
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                                    {[
                                        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', label: 'Student Spotlights' },
                                        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', label: 'Podcast Episodes' },
                                        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', label: 'Alumni Network' },
                                        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', label: 'Mental Health Resources' },
                                    ].map((s, i) => (
                                        <div key={i} className="flex-shrink-0 w-32 cursor-pointer group">
                                            <div className="relative h-40 rounded-2xl overflow-hidden ring-2 ring-brand-blue/40 group-hover:ring-brand-blue transition-all">
                                                <img alt={s.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={s.img} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                                                    <p className="text-white text-xs font-bold leading-tight">{s.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="mt-16 pb-12 text-center border-t border-gray-100 pt-10">
                                <button className="bg-brand-gradient-h text-white px-10 py-3 rounded-full font-bold hover:shadow-lg transform transition active:scale-95">Load More Content</button>
                            </div>
                        </div>

"""

final_content = header + new_content + footer
with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(final_content)

print("Replacement successful")
