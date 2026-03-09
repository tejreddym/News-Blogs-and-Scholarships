import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS_DATA, WEB_STORIES_DATA, CATEGORIES, STREAMS } from '../data/blogData';

const Blog: React.FC = () => {
    const featuredBlogs = BLOGS_DATA.slice(0, 3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const blogList = BLOGS_DATA.slice(3);
    const latestBlogs = blogList.slice(0, 4);
    const moreNews = blogList.slice(4);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % featuredBlogs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
    };

    return (
        <div className="animate-fadeIn">
            {/* Search and Filter Section */}
            <section className="bg-white p-2 md:p-4 rounded-2xl shadow-sm mb-10 border border-gray-100">
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                    <div className="relative flex-grow w-full">
                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">search</span>
                        <input
                            type="text"
                            placeholder="Search for blogs, topics, or exams..."
                            className="w-full pl-12 pr-4 py-3.5 bg-[#F8FAFC] border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-gray-400"
                        />
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-3 w-full lg:w-auto">
                        <div className="relative w-full md:w-40 lg:w-36">
                            <select className="w-full appearance-none bg-[#F8FAFC] bg-none border-none rounded-xl pl-4 pr-10 py-3.5 text-sm font-medium text-gray-600 cursor-pointer focus:ring-2 focus:ring-primary/20">
                                <option>Categories</option>
                                {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                            </select>
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                        </div>
                        <div className="relative w-full md:w-40 lg:w-36 flex-shrink-0">
                            <select className="w-full appearance-none bg-[#F8FAFC] bg-none border-none rounded-xl pl-4 pr-10 py-3.5 text-sm font-medium text-gray-600 cursor-pointer focus:ring-2 focus:ring-primary/20">
                                <option>Streams</option>
                                {STREAMS.map(stream => <option key={stream}>{stream}</option>)}
                            </select>
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                        </div>
                    </div>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                    {[
                        { label: 'Career Guidance', active: true },
                        { label: 'Exam Prep', active: false },
                        { label: 'Engineering', active: false },
                        { label: 'Study Tips', active: false }
                    ].map((tag, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer
                                ${tag.active
                                    ? 'bg-primary/10 text-primary border border-primary/20'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'}`}
                        >
                            {tag.label}
                            <span className="material-icons text-[14px]">close</span>
                        </div>
                    ))}
                    <button className="text-primary text-xs font-bold hover:underline ml-2">Clear all</button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Featured Carousel */}
                    <section className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {featuredBlogs.map((blog) => (
                                    <Link
                                        key={blog.id}
                                        to={`/blog/${blog.slug}`}
                                        className="w-full flex-shrink-0 flex flex-col md:flex-row group/card"
                                    >
                                        <div className="md:w-5/12 relative h-[220px] md:h-[350px] overflow-hidden">
                                            <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase">Featured Blog</span>
                                            <img src={blog.image} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" alt={blog.title} />
                                        </div>
                                        <div className="md:w-7/12 p-6 flex flex-col justify-center">
                                            <span className="text-primary text-xs font-bold uppercase mb-3">{blog.tag} • {blog.readTime}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover/card:text-primary transition-colors">{blog.title}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.description}</p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-3">
                                                    <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-10 h-10 rounded-full border-2 border-white" alt={blog.author} />
                                                    <span className="text-sm font-bold text-gray-900">{blog.author}</span>
                                                </div>
                                                <span className="text-primary text-sm font-bold flex items-center gap-1">Read More <span className="material-icons text-[18px]">arrow_forward</span></span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Controls */}
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
                        >
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
                        >
                            <span className="material-icons">chevron_right</span>
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 right-8 flex gap-2 z-20">
                            {featuredBlogs.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.preventDefault(); setCurrentIndex(i); }}
                                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-primary w-6' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Latest Blogs */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Blogs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {latestBlogs.map((blog) => (
                                <Link key={blog.id} to={`/blog/${blog.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                    <div className="relative h-56">
                                        <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} />
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded tracking-wider border border-white/30 uppercase">{blog.tag}</div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex gap-4 text-[10px] text-gray-500 font-medium mb-3"><span>{blog.readTime}</span> • <span>{blog.date}</span></div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h4>
                                        <p className="text-gray-500 text-sm line-clamp-3">{blog.description}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-6">
                                            <div className="flex items-center gap-2">
                                                <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-8 h-8 rounded-full" alt={blog.author} />
                                                <span className="text-xs font-bold text-gray-900">{blog.author}</span>
                                            </div>
                                            <span className="text-primary text-xs font-bold">Read More</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Web Stories */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-icons text-primary">play_circle_filled</span>
                                Web Stories
                            </h2>
                            <button className="text-primary font-bold text-sm hover:underline">View All</button>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                            {WEB_STORIES_DATA.map((story) => (
                                <Link
                                    key={story.id}
                                    to={`/stories/${story.slug}`}
                                    className="flex-shrink-0 w-40 md:w-48 aspect-[9/16] relative rounded-2xl overflow-hidden group/story shadow-sm snap-start"
                                >
                                    <img
                                        src={story.image}
                                        className="w-full h-full object-cover group-hover/story:scale-110 transition-transform duration-700"
                                        alt={story.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-sm font-bold leading-tight line-clamp-2">{story.title}</h3>
                                    </div>
                                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center p-0.5">
                                        <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                                            <img src="https://i.pravatar.cc/100?u=mentor" alt="CM" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* More News */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">More News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {moreNews.map((blog) => (
                                <Link key={blog.id} to={`/blog/${blog.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                    <div className="relative h-56">
                                        <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} />
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded tracking-wider border border-white/30 uppercase">{blog.tag}</div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex gap-4 text-[10px] text-gray-500 font-medium mb-3"><span>{blog.readTime}</span> • <span>{blog.date}</span></div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h4>
                                        <p className="text-gray-500 text-sm line-clamp-3">{blog.description}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-6">
                                            <div className="flex items-center gap-2">
                                                <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-8 h-8 rounded-full" alt={blog.author} />
                                                <span className="text-xs font-bold text-gray-900">{blog.author}</span>
                                            </div>
                                            <span className="text-primary text-xs font-bold">Read More</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="lg:col-span-4 space-y-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><span className="material-icons text-orange-400">trending_up</span> Popular</h3>
                        <div className="space-y-6">
                            {BLOGS_DATA.slice(0, 3).map((item) => (
                                <Link key={item.id} to={`/blog/${item.slug}`} className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={item.title} />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary line-clamp-2">{item.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-lg mb-10">
                        <h3 className="text-2xl font-bold mb-2">Weekly Insights</h3>
                        <p className="text-white/80 text-sm mb-8">Join 15,000+ students receiving the best career advice.</p>
                        <input type="email" placeholder="Email address" className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white/20 border-white/30 backdrop-blur-md placeholder-white/80 focus:bg-white focus:outline-none transition-all text-sm mb-4" />
                        <button className="w-full bg-white text-primary font-bold py-4 rounded-xl shadow-xl hover:bg-gray-50 transition-all text-sm">Subscribe Now</button>
                    </div>

                    {/* Recent Stories Sidebar */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><span className="material-icons text-primary">article</span> Recent Stories</h3>
                        <div className="space-y-6">
                            {BLOGS_DATA.slice(4, 8).map((item) => (
                                <Link key={item.id} to={`/blog/${item.slug}`} className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={item.title} />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary line-clamp-2">{item.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blog;
