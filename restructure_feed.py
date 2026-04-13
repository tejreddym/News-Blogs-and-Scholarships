import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# 1. Update lg:col-span-8 to lg:col-span-12
text = text.replace('<div className="lg:col-span-8">', '<div className="lg:col-span-12">')

# 2. Update grids
text = text.replace('className="grid grid-cols-1 md:grid-cols-2 gap-6"', 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"')

# 3. Add Latest Alerts between Colleges and Exams
latest_alerts = """
                            {/* LATEST ALERTS / LIVE EXAM UPDATES */}
                            <div className="bg-gradient-to-r from-urgent-red to-red-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 my-8">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-10"></div>
                                <div className="flex-shrink-0 relative z-10 w-full lg:w-auto text-center lg:text-left">
                                    <span className="px-3 py-1 bg-white text-urgent-red text-[10px] font-black rounded-full animate-pulse mb-2 inline-block">BREAKING</span>
                                    <h3 className="text-2xl md:text-3xl font-bold">Latest Alerts &<br/>Live Updates</h3>
                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 relative z-10 w-full">
                                    {[
                                        { title: 'CAT 2024 Admit Card Live — Download Now', time: '2 hrs ago' },
                                        { title: 'UPSC CSE Prelims 2024 Date Confirmed: May 26', time: '5 hrs ago' },
                                        { title: 'IIM Ahmedabad PGP Applications Open', time: '8 hrs ago' },
                                        { title: 'NEP 2024: New Credit Framework Notified', time: '12 hrs ago' },
                                    ].map((item, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/10 transition-colors group flex flex-col justify-between">
                                            <p className="text-sm font-bold leading-snug mb-2 group-hover:text-white line-clamp-2">{item.title}</p>
                                            <span className="text-xs text-red-200">{item.time}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
"""

exams_start = text.find("{/* 4. EXAMS */}")
if exams_start != -1:
    text = text[:exams_start] + latest_alerts + text[exams_start:]


# 4. Insert Newsletter and remove sidebar
sidebar_start = text.find("{/* Sidebar */}")
sidebar_end = text.find("</aside>") + len("</aside>")

newsletter = """
                            {/* Newsletter */}
                            <div className="bg-secondary-foreground text-white p-8 md:p-12 rounded-3xl relative overflow-hidden mt-10 shadow-2xl">
                                <div className="relative z-10 max-w-2xl mx-auto text-center">
                                    <h3 className="text-3xl font-bold mb-3">Stay Ahead</h3>
                                    <p className="text-gray-400 text-sm md:text-base mb-8">Weekly insights, career guidance, and live exam alerts delivered directly to your inbox.</p>
                                    <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                                        <input className="flex-1 bg-gray-800 text-white border-none rounded-xl px-4 py-3.5 focus:ring-accent-green" placeholder="Your Email Address" type="email" />
                                        <button className="bg-accent-green px-8 py-3.5 rounded-xl font-bold hover:bg-opacity-90 transition-all text-secondary-foreground whitespace-nowrap shadow-lg">Subscribe Now</button>
                                    </div>
                                </div>
                                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-green rounded-full blur-3xl opacity-10"></div>
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
                            </div>
"""

if sidebar_start != -1 and sidebar_end != -1:
    # Insert newsletter right before the last closing </div> of the main column layout, which is near the sidebar.
    text = text[:sidebar_start] + newsletter + "\n" + text[sidebar_end:]

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Applied layout expanson efficiently.")
