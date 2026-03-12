import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BlogsNews: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'ALL' | 'NEWS' | 'BLOGS'>('ALL');
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeBlogSlide, setActiveBlogSlide] = useState(0);

    const trendingSlides = [
        {
            tag: 'Entrance Exam',
            tagColor: 'bg-accent-green',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
            title: 'Top Engineering Entrance Exams 2024: Major Changes and Key Dates You Need to Know',
            excerpt: "The landscape of engineering admissions is shifting. From syllabus reductions to new computerized testing patterns, here's everything aspirants must prepare for this year...",
            date: 'Oct 24, 2023',
            views: '12.4K',
        },
        {
            tag: 'Scholarship',
            tagColor: 'bg-brand-blue',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
            title: 'Global Merit Scholarship Program 2024 Now Accepting Applications Worldwide',
            excerpt: 'The fellowship covers full tuition and a monthly stipend for students pursuing advanced degrees in Singapore, Europe, and North America.',
            date: 'Oct 22, 2023',
            views: '3.2K',
        },
        {
            tag: 'Study Abroad',
            tagColor: 'bg-motivational-orange',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG',
            title: 'Post-Graduation Work Permits: New Policy Updates for International Students in UK',
            excerpt: 'Recent policy changes aim to attract more skilled graduates. Here is a breakdown of the new duration and eligibility criteria for 2024.',
            date: 'Oct 18, 2023',
            views: '5.7K',
        },
        {
            tag: 'College Updates',
            tagColor: 'bg-success-green',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
            title: 'Top 10 Greenest Campuses in India: Leading the Way in Sustainable Education',
            excerpt: 'Discover the institutions leading the way in sustainable development, renewable energy, and eco-friendly infrastructure across India.',
            date: 'Oct 20, 2023',
            views: '8.1K',
        },
    ];

    const blogSlides = [
        {
            tag: 'Mentor Insight',
            tagColor: 'bg-accent-green',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
            title: 'Balancing Mental Health During JEE Prep: A Psychologist\'s Perspective',
            excerpt: 'The pressure of competitive exams can be overwhelming. Discover actionable strategies to maintain peak mental health while staying productive during your preparation phase.',
            author: 'Dr. Sunita Verma',
            read: '8 min read',
        },
        {
            tag: 'Career Guide',
            tagColor: 'bg-brand-blue',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
            title: 'Is Data Science Still the Hottest Career Path in 2024?',
            excerpt: 'With the rise of AI, the data landscape is evolving. We explore the current job market, required skillsets, and why specialized data roles are becoming more valuable than generalist ones.',
            author: 'Rahul Kapoor, Data Lead',
            read: '6 min read',
        },
        {
            tag: 'Study Abroad',
            tagColor: 'bg-motivational-orange',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG',
            title: 'Study in Germany for Free: The Complete 2024 Guide for Indian Students',
            excerpt: 'Germany offers tuition-free education at public universities. We break down the application process, deadlines, and visa requirements step-by-step.',
            author: 'Aditi Sharma',
            read: '7 min read',
        },
        {
            tag: 'Engineering',
            tagColor: 'bg-success-green',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
            title: 'Top 5 Engineering Branches with Highest Salaries in 2024',
            excerpt: 'AI, Robotics, and Sustainable Engineering are reshaping the job market. Our mentor ranks the most lucrative branches with real salary data and growth outlook.',
            author: 'Anand Krishnan, IIT Alumni',
            read: '6 min read',
        },
    ];

    // Auto-advance news carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % trendingSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [trendingSlides.length]);

    // Auto-advance blog carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveBlogSlide(prev => (prev + 1) % blogSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [blogSlides.length]);

    const goToSlide = (index: number) => setActiveSlide(index);
    const prevSlide = () => setActiveSlide(prev => (prev - 1 + trendingSlides.length) % trendingSlides.length);
    const nextSlide = () => setActiveSlide(prev => (prev + 1) % trendingSlides.length);


    return (
        <div className="bg-gray-50 text-secondary-foreground font-sans">

            <main className="max-w-7xl mx-auto px-0 py-0">
                {/* Toggle + Ticker Row */}
                <div className="mb-10 flex items-center gap-4">
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

                    {/* Scrolling News Ticker */}
                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl overflow-hidden flex items-center shadow-sm">
                        <span className="flex-shrink-0 bg-brand-blue text-white text-xs font-black px-4 py-3 tracking-widest uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                            LIVE
                        </span>
                        <div className="overflow-hidden flex-1">
                            <div className="ticker-scroll">
                                {[
                                    '🔴 CAT 2024 Admit Card Live — Download from iimcat.ac.in now',
                                    '📢 UPSC CSE Prelims 2024 Date Confirmed: May 26, 2024',
                                    '🏫 IIM Ahmedabad PGP Applications Open till December 15',
                                    '📝 NEP 2024: New Credit Framework Notified by UGC',
                                    '🌍 UK Post-Study Work Visa Extended to 2 Years for All Graduates',
                                    '🎓 JEE Main 2024 Registration: Last Date December 1',
                                    '💰 PM Scholarship 2024: ₹3,000/Month — Apply Before Nov 30',
                                    '📊 GATE 2024 Answer Key Released — Challenge Window Open',
                                    '🏆 IIT Bombay Ranked #1 India, #33 Globally in QS Rankings',
                                    '🩺 NEET UG 2024 Exam Date Confirmed: May 5, 2024',
                                ].map((item, i) => (
                                    <span key={i} className="inline-block text-sm font-medium text-gray-700 px-6 py-3 border-r border-gray-100 last:border-r-0 hover:text-brand-blue transition-colors cursor-pointer">
                                        {item}
                                    </span>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {[
                                    '🔴 CAT 2024 Admit Card Live — Download from iimcat.ac.in now',
                                    '📢 UPSC CSE Prelims 2024 Date Confirmed: May 26, 2024',
                                    '🏫 IIM Ahmedabad PGP Applications Open till December 15',
                                    '📝 NEP 2024: New Credit Framework Notified by UGC',
                                    '🌍 UK Post-Study Work Visa Extended to 2 Years for All Graduates',
                                    '🎓 JEE Main 2024 Registration: Last Date December 1',
                                    '💰 PM Scholarship 2024: ₹3,000/Month — Apply Before Nov 30',
                                    '📊 GATE 2024 Answer Key Released — Challenge Window Open',
                                    '🏆 IIT Bombay Ranked #1 India, #33 Globally in QS Rankings',
                                    '🩺 NEET UG 2024 Exam Date Confirmed: May 5, 2024',
                                ].map((item, i) => (
                                    <span key={`dup-${i}`} className="inline-block text-sm font-medium text-gray-700 px-6 py-3 border-r border-gray-100 last:border-r-0 hover:text-brand-blue transition-colors cursor-pointer">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        {(activeFilter === 'ALL' || activeFilter === 'NEWS') && (
                            <>
                                {/* Trending News Carousel */}
                                <div className="mb-12">
                                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                        Trending News
                                    </h2>
                                    <div className="relative overflow-hidden rounded-3xl shadow-xl h-[450px]">
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
                                </div>
                            </>
                        )}

                        {/* Featured Blog Carousel — shown only when BLOGS is active */}
                        {activeFilter === 'BLOGS' && (
                            <div className="mb-12">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                    Featured Blogs
                                </h2>
                                <div className="relative overflow-hidden rounded-3xl shadow-xl h-[450px]">
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
                            </div>
                        )}

                        {activeFilter === 'ALL' && (
                            <div className="fade-in">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                    Latest Updates
                                </h2>
                                <div className="space-y-6">
                                    {/* News Card 1 */}
                                    <Link to="/news/nep-2024-reforms" className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group block">
                                        <div className="md:w-64 h-48 flex-shrink-0">
                                            <img alt="News article" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2.5 py-0.5 bg-secondary-blue text-brand-blue text-xs font-bold rounded">Scholarship</span>
                                                    <span className="text-xs text-gray-400">Oct 22, 2023</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-blue transition-colors">Global Merit Scholarship Program 2024 Now Accepting Applications</h4>
                                                <p className="text-gray-500 text-sm line-clamp-2">The fellowship covers full tuition and a monthly stipend for students pursuing advanced management degrees in Singapore and Europe.</p>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3.2K Views</span>
                                                </div>
                                                <Link to="/news/nep-2024-reforms" className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                    Read More
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* News Card 2 */}
                                    <Link to="/news/nep-2024-reforms" className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group block">
                                        <div className="md:w-64 h-48 flex-shrink-0">
                                            <img alt="News article" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2.5 py-0.5 bg-secondary-green text-success-green text-xs font-bold rounded">Colleges</span>
                                                    <span className="text-xs text-gray-400">Oct 20, 2023</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-blue transition-colors">Top 10 Greenest Campuses in India: Sustaining Education and Environment</h4>
                                                <p className="text-gray-500 text-sm line-clamp-2">Discover the institutions that are leading the way in sustainable development, renewable energy, and eco-friendly infrastructure.</p>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 8.1K Views</span>
                                                </div>
                                                <Link to="/news/nep-2024-reforms" className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                    Read More
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* News Card 3 */}
                                    <Link to="/news/nep-2024-reforms" className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group block">
                                        <div className="md:w-64 h-48 flex-shrink-0">
                                            <img alt="News article" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2.5 py-0.5 bg-yellow-100 text-motivational-orange text-xs font-bold rounded">Study Abroad</span>
                                                    <span className="text-xs text-gray-400">Oct 18, 2023</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Post-Graduation Work Permits: New Updates for International Students in UK</h4>
                                                <p className="text-gray-500 text-sm line-clamp-2">Recent policy changes aim to attract more skilled graduates. Here is a breakdown of the new duration and eligibility criteria.</p>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5.7K Views</span>
                                                </div>
                                                <Link to="/news/nep-2024-reforms" className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                    Read More
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* Quick Bites Grid */}
                                <div className="mt-10">
                                    <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                        Quick Bites
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { tag: 'JEE', tagCls: 'bg-secondary-blue text-brand-blue', title: 'JEE Main 2024 Registration Opens: Complete Step-by-Step Guide', date: 'Nov 2', views: '45K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB' },
                                            { tag: 'NEET', tagCls: 'bg-secondary-green text-success-green', title: 'NEET UG 2024 Exam Date Confirmed — What Students Must Know', date: 'Nov 1', views: '38K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP' },
                                            { tag: 'Admissions', tagCls: 'bg-yellow-100 text-motivational-orange', title: 'DU CSAS Counselling Round 3: Seat Allotment List Out Now', date: 'Oct 31', views: '29K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG' },
                                            { tag: 'Results', tagCls: 'bg-purple-100 text-creativity-purple', title: 'GATE 2024 Answer Key Released — Challenge Window Open Till Nov 10', date: 'Nov 3', views: '17K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group block">
                                                <div className="h-36 overflow-hidden">
                                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <div className="p-4">
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block ${item.tagCls}`}>{item.tag}</span>
                                                    <p className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors mb-2">{item.title}</p>
                                                    <span className="text-xs text-gray-400">{item.date} · {item.views} Views</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* More Latest News */}
                                <div className="mt-10">
                                    <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                        More Latest News
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { tag: 'Employment', tagCls: 'bg-orange-100 text-motivational-orange', title: 'SSC CGL 2024: 17,727 Vacancies Announced — Apply by December 27', date: 'Nov 3', views: '32K' },
                                            { tag: 'Board Exams', tagCls: 'bg-red-100 text-urgent-red', title: 'CBSE Board 2024 Timetable Released — Exams Begin February 15', date: 'Nov 2', views: '22K' },
                                            { tag: 'Study Abroad', tagCls: 'bg-teal-100 text-calm-teal', title: 'F-1 Visa Interviews: Wait Times at Indian Consulates Drop to Record Low', date: 'Oct 29', views: '17K' },
                                            { tag: 'Colleges', tagCls: 'bg-secondary-green text-success-green', title: 'IIT Bombay Ranked 1st in India, 33rd Globally in QS Rankings 2024', date: 'Oct 28', views: '14K' },
                                            { tag: 'Scholarship', tagCls: 'bg-purple-100 text-creativity-purple', title: 'PM Scholarship Scheme 2024: ₹3,000/Month — Applications Open Now', date: 'Oct 27', views: '11K' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow group">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 ${item.tagCls}`}>{item.tag}</span>
                                                <p className="flex-1 font-semibold text-gray-800 text-sm leading-snug line-clamp-1 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 flex-shrink-0 hidden md:block">{item.date} · {item.views}</span>
                                                <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 text-center">
                                    <button className="bg-brand-gradient-h text-white px-10 py-3 rounded-full font-bold hover:shadow-lg transform transition active:scale-95">Load More Stories</button>
                                </div>
                            </div>
                        )}

                        {activeFilter === 'NEWS' && (
                            <div className="fade-in space-y-14">

                                {/* ── ALL NEWS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                            All News
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">
                                            View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {[
                                            { tag: 'National News', tagCls: 'bg-secondary-blue text-brand-blue', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'NEP 2024: Major Reforms in Higher Education Unveiled', date: 'Oct 25, 2023', views: '15.4K' },
                                            { tag: 'College Updates', tagCls: 'bg-secondary-green text-success-green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'Top 10 Greenest Campuses in India: Sustaining Education', date: 'Oct 20, 2023', views: '8.1K' },
                                            { tag: 'Study Abroad', tagCls: 'bg-yellow-100 text-motivational-orange', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'UK Post-Study Work Permit Extended to 3 Years for Graduates', date: 'Oct 18, 2023', views: '5.7K' },
                                            { tag: 'Scholarship', tagCls: 'bg-purple-100 text-creativity-purple', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'Global Merit Scholarship 2024: Applications Open for Indian Students', date: 'Oct 22, 2023', views: '3.2K' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group block">
                                                <div className="h-44 overflow-hidden">
                                                    <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} />
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`px-2 py-0.5 text-xs font-bold rounded ${item.tagCls}`}>{item.tag}</span>
                                                        <span className="text-xs text-gray-400">{item.date}</span>
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 leading-snug mb-3 line-clamp-2">{item.title}</h4>
                                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                                        <span>{item.views} Views</span>
                                                        <span className="text-brand-blue font-bold flex items-center gap-1">Read <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── BOARD EXAMS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-urgent-red rounded-full"></span>
                                            Board Exams
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { title: 'CBSE Class 12 Board Exam 2024: Timetable Released, Key Dates & Preparation Tips', date: 'Nov 1, 2023', views: '22K' },
                                            { title: 'ICSE Board Exam 2024: Important Changes in Marking Scheme Announced', date: 'Oct 30, 2023', views: '14K' },
                                            { title: 'State Board Results 2023: Maharashtra Announces Outstanding Pass Percentage', date: 'Oct 28, 2023', views: '9.3K' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow group cursor-pointer">
                                                <span className="text-2xl font-black text-gray-100 group-hover:text-urgent-red transition-colors flex-shrink-0 w-8">0{i + 1}</span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                    <span className="text-xs text-gray-400 mt-1 block">{item.date} · {item.views} Views</span>
                                                </div>
                                                <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── COMPETITIVE EXAMS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                            Competitive Exams
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { tag: 'JEE', color: 'text-brand-blue bg-secondary-blue', title: 'JEE Main 2024: Session 1 Registration Begins, Check Eligibility & Syllabus', date: 'Nov 2', views: '45K' },
                                            { tag: 'NEET', color: 'text-success-green bg-secondary-green', title: 'NEET UG 2024 Exam Date Confirmed: Application Form Details Inside', date: 'Nov 1', views: '38K' },
                                            { tag: 'UPSC', color: 'text-motivational-orange bg-yellow-100', title: 'UPSC Civil Services Prelims 2024: Notification Expected in January', date: 'Oct 30', views: '27K' },
                                            { tag: 'CAT', color: 'text-creativity-purple bg-purple-100', title: 'CAT 2024 Admit Card Released: Download Now from Official Portal', date: 'Oct 28', views: '19K' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow cursor-pointer group block">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.color} mb-2 inline-block`}>{item.tag}</span>
                                                <p className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                <span className="text-xs text-gray-400 mt-2 block">{item.date} · {item.views} Views</span>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── EXAM RESULTS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                            Exam Results
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { title: 'GATE 2023 Final Answer Key Released; Result Expected Next Week', date: 'Nov 3, 2023', live: true },
                                            { title: 'XAT 2024 Result Declared: Check Cutoff & Score Card at xatonline.in', date: 'Nov 2, 2023', live: false },
                                            { title: 'IBPS PO Mains Result 2023: Direct Link to Download Scorecard', date: 'Oct 29, 2023', live: false },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer group">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        {item.live && <span className="px-2 py-0.5 bg-urgent-red text-white text-[10px] font-bold rounded animate-pulse">LIVE</span>}
                                                        <span className="text-xs text-gray-400">{item.date}</span>
                                                    </div>
                                                    <p className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-brand-blue transition-colors">{item.title}</p>
                                                </div>
                                                <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── FEATURES ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                                            Features
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {[
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'Inside IIT Bombay: What Life Really Looks Like for First-Year Students', date: 'Nov 1, 2023', read: '8 min' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'How AI is Reshaping Campus Recruitment Across Engineering Colleges', date: 'Oct 30, 2023', read: '6 min' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer block">
                                                <div className="h-40 overflow-hidden">
                                                    <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} />
                                                </div>
                                                <div className="p-4">
                                                    <span className="px-2 py-0.5 bg-purple-100 text-creativity-purple text-xs font-bold rounded mb-2 inline-block">Feature</span>
                                                    <h4 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                                    <span className="text-xs text-gray-400">{item.date} · {item.read} read</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── STUDY ABROAD ── */}
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

                                {/* ── ADMISSIONS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                            Admissions
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: 'DU Admission 2024: CSAS Round 3 Allocation List Released', tag: 'DU', tagCls: 'bg-secondary-blue text-brand-blue', date: 'Nov 3' },
                                            { title: 'IIM Ahmedabad PGP Admissions 2024: Application Window Opens Today', tag: 'IIM', tagCls: 'bg-yellow-100 text-motivational-orange', date: 'Nov 2' },
                                            { title: 'JOSAA 2024 Counselling Schedule: Round 5 Seat Allotment on Nov 7', tag: 'JoSAA', tagCls: 'bg-secondary-green text-success-green', date: 'Nov 1' },
                                            { title: 'NIFT Admission 2024: Situation Test Date & Centers Announced', tag: 'NIFT', tagCls: 'bg-purple-100 text-creativity-purple', date: 'Oct 31' },
                                        ].map((item, i) => (
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow cursor-pointer group block">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.tagCls}`}>{item.tag}</span>
                                                    <span className="text-xs text-gray-400">{item.date}</span>
                                                </div>
                                                <p className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* ── EMPLOYMENT NEWS ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                            Employment News
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

                                {/* ── WEB STORIES ── */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                            Web Stories
                                        </h2>
                                        <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                                        {[
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', label: 'JEE 2024 Changes' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', label: 'Top 10 IITs' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', label: 'Study in UK' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', label: 'Scholarships 2024' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', label: 'NEET Strategy' },
                                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', label: 'College Placements' },
                                        ].map((s, i) => (
                                            <div key={i} className="flex-shrink-0 w-32 cursor-pointer group">
                                                <div className="relative h-52 rounded-2xl overflow-hidden ring-2 ring-brand-blue/40 group-hover:ring-brand-blue transition-all">
                                                    <img alt={s.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={s.img} />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                                                        <p className="text-white text-xs font-bold leading-tight">{s.label}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                            </div>
                        )}

                        {activeFilter === 'BLOGS' && (
                            <div className="fade-in">
                                {/* Featured Mentor Insights */}
                                <div className="mb-12">
                                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                        Featured Mentor Insights
                                    </h2>
                                    <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[450px]">
                                        <img
                                            alt="Featured Mentor Insight"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                            <span className="inline-block px-3 py-1 bg-creativity-purple text-white text-xs font-bold rounded-full mb-4 w-fit uppercase">Expert Advice</span>
                                            <h3 className="text-3xl font-bold text-white mb-3">The Secret Sauce to Cracking Ivy League Admissions: A Mentor's Guide</h3>
                                            <p className="text-gray-200 line-clamp-2 mb-6 max-w-2xl">Building a narrative that resonates with admissions officers is an art. In this long-form guide, our lead mentor breaks down the holistic review process and how to stand out...</p>
                                            <div className="flex items-center gap-6">
                                                <Link to="/blog/jee-mental-health" className="bg-brand-blue px-6 py-2.5 rounded-full text-white font-semibold hover:bg-accent-blue transition-colors">Read Article</Link>
                                                <div className="flex items-center text-gray-300 text-sm gap-4">
                                                    <span>By Dr. Aris Sharma</span>
                                                    <span className="flex items-center gap-1">
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                        15 Min Read
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Expert Blogs */}
                                <div>
                                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                        Recent Expert Blogs
                                    </h2>
                                    <div className="space-y-6">
                                        {/* Blog Card 1 */}
                                        <Link to="/blog/jee-mental-health" className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow group block">
                                            <div className="md:w-72 h-52 flex-shrink-0">
                                                <img alt="Blog post image" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP" />
                                            </div>
                                            <div className="flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="px-2.5 py-0.5 bg-purple-100 text-creativity-purple text-xs font-bold rounded">Mentor Insight</span>
                                                        <span className="text-xs text-gray-400">Oct 25, 2023</span>
                                                    </div>
                                                    <h4 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">Balancing Mental Health During JEE Prep: A Psychologist's Perspective</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">The pressure of competitive exams can be overwhelming. In this post, we discuss actionable strategies to maintain peak mental health while staying productive during your preparation phase...</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                                        <span className="text-sm font-medium text-gray-700">Dr. Sunita Verma</span>
                                                    </div>
                                                    <Link to="/blog/jee-mental-health" className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                        Read Full Blog
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Blog Card 2 */}
                                        <Link to="/blog/jee-mental-health" className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow group block">
                                            <div className="md:w-72 h-52 flex-shrink-0">
                                                <img alt="Blog post image" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal" />
                                            </div>
                                            <div className="flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="px-2.5 py-0.5 bg-blue-100 text-brand-blue text-xs font-bold rounded">Career Guide</span>
                                                        <span className="text-xs text-gray-400">Oct 22, 2023</span>
                                                    </div>
                                                    <h4 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">Is Data Science Still the Hottest Career Path in 2024?</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">With the rise of AI, the data landscape is evolving. We explore the current job market, required skillsets, and why specialized data roles are becoming more valuable than generalist ones...</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                                        <span className="text-sm font-medium text-gray-700">Rahul Kapoor, Data Lead</span>
                                                    </div>
                                                    <Link to="/blog/jee-mental-health" className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                        Read Full Blog
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* More Blogs — compact card grid */}
                                    <h2 className="text-xl font-bold mt-10 mb-5 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                                        More From Our Mentors
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {[
                                            {
                                                tag: 'Study Abroad', tagCls: 'bg-teal-100 text-calm-teal',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG',
                                                title: 'Study in Germany for Free: The Complete 2024 Guide for Indian Students',
                                                desc: 'Germany offers tuition-free education at public universities. We break down the application process, deadlines, and visa requirements step-by-step.',
                                                author: 'Aditi Sharma', role: 'Study Abroad Counselor', date: 'Oct 20, 2023', read: '7 min'
                                            },
                                            {
                                                tag: 'Admissions', tagCls: 'bg-secondary-blue text-brand-blue',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal',
                                                title: 'Cracking IIM Interviews: The Honest Truth Behind WAT-PI Rounds',
                                                desc: 'IIM interview panels look for more than grades. A seasoned mentor reveals the psychological patterns behind successful CAT interview performance.',
                                                author: 'Prof. Vikram Nair', role: 'MBA Mentor', date: 'Oct 18, 2023', read: '9 min'
                                            },
                                            {
                                                tag: 'Engineering', tagCls: 'bg-secondary-green text-success-green',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                                title: 'Top 5 Engineering Branches You Should Pick for Highest Salaries in 2024',
                                                desc: 'AI, Robotics, and Sustainable Engineering are reshaping the job market. Our mentor ranks the most lucrative branches with real salary data and growth outlook.',
                                                author: 'Anand Krishnan', role: 'IIT Alumni & Mentor', date: 'Oct 15, 2023', read: '6 min'
                                            },
                                            {
                                                tag: 'Scholarship', tagCls: 'bg-yellow-100 text-motivational-orange',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pko99TclTTP',
                                                title: 'How I Won a ₹12 Lakh Scholarship: A First-Generation Student\'s Story',
                                                desc: 'From a small town in Bihar to a fully-funded master\'s degree — this is the story of perseverance, the right applications, and knowing where to look.',
                                                author: 'Priya Singh', role: 'Scholarship Awardee & Blogger', date: 'Oct 12, 2023', read: '5 min'
                                            },
                                        ].map((blog, i) => (
                                            <Link to="/blog/jee-mental-health" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group block">
                                                <div className="h-44 overflow-hidden">
                                                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <div className="p-5">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${blog.tagCls}`}>{blog.tag}</span>
                                                        <span className="text-xs text-gray-400">{blog.date} · {blog.read} read</span>
                                                    </div>
                                                    <h5 className="font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-brand-blue transition-colors">{blog.title}</h5>
                                                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{blog.desc}</p>
                                                    <div className="flex items-center gap-2">
                                                        <img src={`https://i.pravatar.cc/40?u=${blog.author}`} alt={blog.author} className="w-7 h-7 rounded-full object-cover" />
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-800">{blog.author}</p>
                                                            <p className="text-[10px] text-gray-400">{blog.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-10 text-center">
                                        <button className="bg-brand-gradient-h text-white px-10 py-3 rounded-full font-bold hover:shadow-lg transform transition active:scale-95">Load More Blogs</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Popular Topics */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-4">Popular Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {['JEE Main 2024', 'CUET UG', 'MBA Entrance', 'NEET Counselling', 'IELTS Guide', 'GATE Preparation', 'Study Abroad', 'Scholarships'].map(t => (
                                    <a key={t} href="#" className="px-4 py-2 bg-light-grey text-gray-700 text-sm rounded-xl hover:bg-brand-blue hover:text-white transition-colors">{t}</a>
                                ))}
                            </div>
                        </div>

                        {/* Most Viewed */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">
                                Most Viewed
                                <span className="text-xs text-brand-blue font-medium underline cursor-pointer">View All</span>
                            </h3>
                            <div className="space-y-5">
                                {[
                                    { title: 'How to build a killer portfolio for Design Admissions', views: '45K', time: '3 days ago' },
                                    { title: 'Understanding the 2024 Reservation Policy Updates', views: '38K', time: '1 week ago' },
                                    { title: 'Mental Health Checklist for Competitive Exam Aspirants', views: '22K', time: '2 days ago' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                        <span className="text-2xl font-black text-gray-100 group-hover:text-brand-blue transition-colors">0{i + 1}</span>
                                        <div>
                                            <p className="font-bold text-gray-800 leading-snug hover:text-brand-blue line-clamp-2 text-sm">{item.title}</p>
                                            <span className="text-xs text-gray-400 mt-1 block">{item.views} Views · {item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Explore By Type */}
                        <div className="bg-brand-gradient-diag p-1 rounded-3xl overflow-hidden shadow-lg">
                            <div className="bg-white p-6 rounded-[calc(1.5rem-2px)]">
                                <h3 className="text-lg font-bold mb-6">Explore By Type</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { icon: '📰', label: 'All News', bg: 'bg-blue-50 hover:bg-blue-100' },
                                        { icon: '📝', label: 'Exams', bg: 'bg-orange-50 hover:bg-orange-100' },
                                        { icon: '🏛️', label: 'Colleges', bg: 'bg-green-50 hover:bg-green-100' },
                                        { icon: '📚', label: 'Courses', bg: 'bg-purple-50 hover:bg-purple-100' },
                                        { icon: '✈️', label: 'Abroad', bg: 'bg-teal-50 hover:bg-teal-100' },
                                        { icon: '💰', label: 'Scholarship', bg: 'bg-yellow-50 hover:bg-yellow-100' },
                                    ].map((item, i) => (
                                        <a key={i} href="#" className={`flex flex-col items-center p-3 rounded-xl transition-colors text-center ${item.bg}`}>
                                            <span className="text-2xl mb-1">{item.icon}</span>
                                            <span className="text-[10px] font-bold text-gray-700">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-secondary-foreground text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Stay Ahead</h3>
                                <p className="text-gray-400 text-sm mb-6">Weekly insights and exam alerts delivered to your inbox.</p>
                                <input className="w-full bg-gray-800 border-none rounded-xl mb-3 focus:ring-accent-green" placeholder="Email Address" type="email" />
                                <button className="w-full bg-accent-green py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">Subscribe Now</button>
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
                        </div>

                        {/* Breaking News */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-urgent-red text-white text-[10px] font-black rounded animate-pulse">BREAKING</span>
                                Latest Alerts
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'CAT 2024 Admit Card Live — Download Now', time: '2 hrs ago' },
                                    { title: 'UPSC CSE Prelims 2024 Date Confirmed: May 26', time: '5 hrs ago' },
                                    { title: 'IIM Ahmedabad PGP Applications Open', time: '8 hrs ago' },
                                    { title: 'NEP 2024: New Credit Framework Notified', time: '12 hrs ago' },
                                ].map((item, i) => (
                                    <Link to="/news/nep-2024-reforms" key={i} className="flex items-start gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-urgent-red mt-2 flex-shrink-0"></span>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-brand-blue transition-colors">{item.title}</p>
                                            <span className="text-xs text-gray-400">{item.time}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Live Exam Updates */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                                Live Exam Updates
                                <span className="text-xs text-brand-blue font-medium underline cursor-pointer">View All</span>
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { exam: 'JEE Main', status: 'Registration Open', color: 'text-success-green bg-secondary-green', date: 'Last date: Dec 1' },
                                    { exam: 'NEET UG', status: 'Notification Out', color: 'text-brand-blue bg-secondary-blue', date: 'Exam: May 5, 2024' },
                                    { exam: 'CAT 2024', status: 'Admit Card Live', color: 'text-urgent-red bg-red-100', date: 'Exam: Nov 26' },
                                    { exam: 'CUET PG', status: 'Results Declared', color: 'text-creativity-purple bg-purple-100', date: 'Counselling: Nov 20' },
                                    { exam: 'GATE 2024', status: 'Registration Open', color: 'text-motivational-orange bg-yellow-100', date: 'Last date: Oct 28' },
                                ].map((item, i) => (
                                    <Link to="/news/nep-2024-reforms" key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors group">
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors">{item.exam}</p>
                                            <span className="text-xs text-gray-400">{item.date}</span>
                                        </div>
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${item.color}`}>{item.status}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Top Colleges */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                                Top Colleges 2024
                                <span className="text-xs text-brand-blue font-medium underline cursor-pointer">View Rankings</span>
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { rank: '01', name: 'IIT Bombay', stream: 'Engineering', score: '99.8' },
                                    { rank: '02', name: 'AIIMS Delhi', stream: 'Medical', score: '99.6' },
                                    { rank: '03', name: 'IIM Ahmedabad', stream: 'Management', score: '99.2' },
                                    { rank: '04', name: 'NLS Bengaluru', stream: 'Law', score: '98.9' },
                                    { rank: '05', name: 'NID Ahmedabad', stream: 'Design', score: '98.4' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                                        <span className="text-xl font-black text-gray-100 group-hover:text-brand-blue transition-colors w-8">{item.rank}</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors">{item.name}</p>
                                            <span className="text-xs text-gray-400">{item.stream}</span>
                                        </div>
                                        <span className="text-xs font-bold text-accent-green">{item.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mentor CTA */}
                        <div className="bg-brand-gradient-diag p-7 rounded-3xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <span className="text-3xl mb-3 block">🎓</span>
                                <h3 className="text-xl font-bold mb-2">Talk to a Mentor</h3>
                                <p className="text-white/80 text-sm mb-5">Get personalised college and exam guidance — completely free.</p>
                                <button className="w-full bg-white text-brand-blue font-bold py-3 rounded-xl hover:bg-gray-50 transition-all">Book Free Session</button>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full"></div>
                        </div>

                        {/* Recent Stories */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                                Recent Stories
                                <span className="text-xs text-brand-blue font-medium underline cursor-pointer">View All</span>
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'How to crack JEE without coaching in 6 months', tag: 'JEE', time: '1 hr ago' },
                                    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'Top 5 engineering branches with highest salary in 2024', tag: 'Careers', time: '3 hrs ago' },
                                    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'Study in Germany for free — complete guide 2024', tag: 'Study Abroad', time: '6 hrs ago' },
                                ].map((item, i) => (
                                    <Link to="/news/nep-2024-reforms" key={i} className="flex gap-3 group cursor-pointer">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[10px] font-bold text-brand-blue uppercase">{item.tag}</span>
                                            <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">{item.title}</p>
                                            <span className="text-xs text-gray-400">{item.time}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default BlogsNews;

