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
        <div className="bg-[#F2F4F7] text-secondary-foreground font-sans">

            <main className="max-w-7xl mx-auto px-0 py-0">
                {/* Toggle + Ticker Row */}
                <div className="mb-10 flex items-center gap-4">



                    {/* Toggle */}
                    <div className="bg-gray-100 p-1.5 rounded-2xl flex flex-shrink-0">
                        <button 
                            onClick={() => setActiveFilter('ALL')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'ALL' ? 'bg-[#FCFCFD] shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            ALL
                        </button>
                        <button 
                            onClick={() => setActiveFilter('NEWS')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'NEWS' ? 'bg-[#FCFCFD] shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            NEWS
                        </button>
                        <button 
                            onClick={() => setActiveFilter('BLOGS')}
                            className={`w-20 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${activeFilter === 'BLOGS' ? 'bg-[#FCFCFD] shadow-sm text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                        >
                            BLOGS
                        </button>
                    </div>

                    {/* Scrolling News Ticker */}
                    <div className="flex-1 bg-[#FCFCFD] border border-[#EAECF0] rounded-2xl overflow-hidden flex items-center shadow-sm">
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
                                    <span key={i} className="inline-block text-sm font-medium text-gray-700 px-6 py-3 border-r border-[#EAECF0] last:border-r-0 hover:text-brand-blue transition-colors cursor-pointer">
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
                                    <span key={`dup-${i}`} className="inline-block text-sm font-medium text-gray-700 px-6 py-3 border-r border-[#EAECF0] last:border-r-0 hover:text-brand-blue transition-colors cursor-pointer">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Responsive Search & Filter Bar */}
                <div className="mb-10 w-full bg-[#FCFCFD] p-4 sm:p-5 rounded-2xl shadow-sm border border-[#EAECF0]">
                    {/* Top Row: Search Input and Dropdowns */}
                    <div className="flex flex-col md:flex-row gap-3 mb-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Search for blogs, topics, or exams..." 
                                className="w-full pl-11 pr-4 py-3.5 bg-[#F2F4F7] border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-[#FCFCFD] transition-all text-gray-800 placeholder-gray-400 font-medium text-sm"
                            />
                        </div>
                        <div className="flex gap-3 md:w-auto w-full">
                            <div className="relative w-1/2 md:w-36 flex-shrink-0">
                                <select className="w-full appearance-none bg-[#F2F4F7] border-transparent text-sm rounded-xl pl-4 pr-10 py-3.5 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-[#FCFCFD] transition-all cursor-pointer">
                                    <option value="" disabled selected>Categories</option>
                                    <option value="Colleges">Colleges</option>
                                    <option value="Exams">Exams</option>
                                    <option value="Schools">Schools</option>
                                    <option value="Scholarships">Scholarships</option>
                                    <option value="Courses">Courses</option>
                                    <option value="Careers">Careers</option>
                                    <option value="Startup and Innovation">Startup and Innovation</option>
                                    <option value="Study Abroad">Study Abroad</option>
                                    <option value="Featured News">Featured News/Articles for Partner Universities</option>
                                    <option value="Policies">Policies</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            <div className="relative w-1/2 md:w-36 flex-shrink-0">
                                <select className="w-full appearance-none bg-[#F2F4F7] border-transparent text-sm rounded-xl pl-4 pr-10 py-3.5 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-[#FCFCFD] transition-all cursor-pointer">
                                    <option value="" disabled selected>Streams</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="medical">Medical</option>
                                    <option value="management">Management</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Filter Chips */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Active Selection Example */}
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#EEF2FF] border border-[#E0E7FF] rounded-lg text-xs font-bold text-[#4338CA]">
                            Career Guidance
                            <button className="hover:bg-[#E0E7FF] rounded-full p-0.5 transition-colors focus:outline-none" aria-label="Remove Career Guidance filter">
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </span>
                        
                        {/* Inactive Selection Examples */}
                        {['Exam Prep', 'Engineering', 'Study Tips'].map((chip, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F2F4F7] border border-[#EAECF0] rounded-lg text-xs font-bold text-gray-600">
                                {chip}
                                <button className="hover:bg-gray-200 rounded-full p-0.5 transition-colors focus:outline-none" aria-label={`Remove ${chip} filter`}>
                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </span>
                        ))}
                        
                        <button className="text-xs font-black text-brand-blue hover:text-accent-blue ml-2 transition-colors">Clear all</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-12">
                        <div className="space-y-16 fade-in">

                            { (activeFilter === 'ALL' || activeFilter === 'NEWS') && (
                            <>
                            {/* 1. LATEST NEWS */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-accent-green rounded-full"></span>
                                            Latest News
                                        </h2>
                                        
                                    </div>

                                    {/* 8/4 Split Layout Carousel */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <section className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">
                            
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
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{(slide as any).date}</span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{slide.views || '8 min read'}</span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 group-hover/card:text-brand-blue transition-colors line-clamp-3 leading-snug">{slide.title}</h3>
                                                <p className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed">{slide.excerpt}</p>
                                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#EAECF0]">
                                                    <div className="flex items-center gap-4">
                                                        <img src={`https://i.pravatar.cc/100?u=${slide.title}`} className="w-10 h-10 rounded-full border border-[#EAECF0]" alt="Author" />
                                                        <span className="text-sm font-bold text-gray-900">{(slide as any).author || 'Editorial Team'}</span>
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
                                    <br/>

                                    
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
                                            },
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
                                            <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                                <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                    <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                    <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                        {card.tag}
                                                    </span>
                                                </div>
                                                <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                    <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                        <span>{card.readTime}</span>
                                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                        <span>{card.date}</span>
                                                    </div>
                                                    <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                        {card.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                                </section>

                                
                            </>
                            )}
                            { (activeFilter === 'ALL' || activeFilter === 'BLOGS') && (
                            <>
                            {/* 2. LATEST BLOGS */}
                                <section>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                            Latest Blogs
                                        </h2>
                                        
                                    </div>

                                    {/* 8/4 Split Layout Carousel */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <section className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-sm border border-[#EAECF0] bg-[#FCFCFD]">
                            
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
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{(slide as any).date || 'Oct 25, 2023'}</span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{(slide as any).read || (slide as any).readTime || '8 min read'}</span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 group-hover/card:text-brand-blue transition-colors line-clamp-3 leading-snug">{slide.title}</h3>
                                                <p className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed">{slide.excerpt}</p>
                                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#EAECF0]">
                                                    <div className="flex items-center gap-4">
                                                        <img src={`https://i.pravatar.cc/100?u=${(slide as any).author}`} className="w-10 h-10 rounded-full border border-[#EAECF0]" alt="Author" />
                                                        <span className="text-sm font-bold text-gray-900">{(slide as any).author || 'Editorial Team'}</span>
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
                                    <br/>

                                    
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                        {[
                                            {
                                                tag: 'HEALTH',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                                title: "Balancing Mental Health During JEE Prep: A Psychologist's Perspective",
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
                                            },
                                                                                    {
                                                tag: 'HEALTH',
                                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
                                                title: "Balancing Mental Health During JEE Prep: A Psychologist's Perspective",
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
                                            <Link to="/blog/jee-mental-health" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                                <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                    <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                    <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                        {card.tag}
                                                    </span>
                                                </div>
                                                <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                    <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                        <span>{card.readTime}</span>
                                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                        <span>{card.date}</span>
                                                    </div>
                                                    <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                        {card.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                                </section>

                                
                            </>
                            )}
                            
                            {/* VISUAL STORIES / WEB STORIES */}
                            <section className="mb-12 border-y border-[#EAECF0] py-8 bg-[#F2F4F7]/50 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:border-0 sm:py-0">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
                                        Visual Stories
                                    </h2>
                                    
                                </div>
                                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
                                    {[
                                        { title: '7 Tips for Last Minute JEE Preparation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', time: '2h ago', color: 'bg-accent-green' },
                                        { title: 'Top 5 Scholarships in UK 2024 to Apply', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', time: '5h ago', color: 'bg-brand-blue' },
                                        { title: 'Campus Tour: A look inside IIT Delhi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', time: '1d ago', color: 'bg-motivational-orange' },
                                        { title: 'The Secret Life of an IIM Classroom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', time: '1d ago', color: 'bg-urgent-red' },
                                        { title: 'How to build your Resume from scratch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', time: '2d ago', color: 'bg-teal-500' },
                                        { title: 'The Future of AI in Modern Education', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', time: '2d ago', color: 'bg-creativity-purple' },
                                    ].map((story, i) => (
                                        <div key={i} className={`flex-shrink-0 w-40 sm:w-48 h-64 sm:h-[340px] cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start ring-2 ring-transparent hover:ring-opacity-50 ring-offset-2 ${story.color.replace('bg-', 'hover:ring-')}`}>
                                            <img alt={story.title} src={story.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
                                                <div className="flex items-center gap-1.5 mb-2">
                                                    <span className={`w-2 h-2 rounded-full ${story.color}`}></span>
                                                    <span className="text-[10px] text-white/90 font-bold tracking-wider uppercase">{story.time}</span>
                                                </div>
                                                <h3 className="text-white text-sm sm:text-lg font-bold leading-tight line-clamp-3 group-hover:text-amber-300 transition-colors">{story.title}</h3>
                                            </div>
                                            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/20 group-hover:bg-brand-blue transition-colors">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            
                                            {/* Story Progress Bars Placeholder */}
                                            <div className="absolute top-2 left-2 right-2 flex gap-1 z-10">
                                                <div className="h-1 bg-white/40 rounded-full w-full overflow-hidden">
                                                    <div className={`h-full ${story.color} w-1/3 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                                </div>
                                                <div className="h-1 bg-white/40 rounded-full w-full"></div>
                                                <div className="h-1 bg-white/40 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

{/* 4. EXAMS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-urgent-red rounded-full"></span>
                                        Exams
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'BOARD EXAMS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'CBSE Class 12 Board Exam 2024: Timetable Released, Key Dates', excerpt: 'The Central Board of Secondary Education has officially announced the timetable for the 2024 class 12 examinations.', author: 'Exam Desk', date: 'Nov 1, 2023', readTime: '5 min read' },
                                        { tag: 'COMPETITIVE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'JEE Main 2024: Session 1 Registration Begins', excerpt: 'Check the new eligibility criteria, syllabus adjustments, and step-by-step application guide for joining IITs.', author: 'Prep Guru', date: 'Nov 2, 2023', readTime: '8 min read' },
                                                                            { tag: 'BOARD EXAMS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'CBSE Class 12 Board Exam 2024: Timetable Released, Key Dates', excerpt: 'The Central Board of Secondary Education has officially announced the timetable for the 2024 class 12 examinations.', author: 'Exam Desk', date: 'Nov 1, 2023', readTime: '5 min read' },
                                        { tag: 'COMPETITIVE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'JEE Main 2024: Session 1 Registration Begins', excerpt: 'Check the new eligibility criteria, syllabus adjustments, and step-by-step application guide for joining IITs.', author: 'Prep Guru', date: 'Nov 2, 2023', readTime: '8 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

 {/* LATEST ALERTS / LIVE EXAM UPDATES */}
                            <div className="bg-gradient-to-r from-urgent-red to-red-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 my-8">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FCFCFD] rounded-full blur-3xl opacity-10"></div>
                                <div className="flex-shrink-0 relative z-10 w-full lg:w-auto text-center lg:text-left">
                                    <span className="px-3 py-1 bg-[#FCFCFD] text-urgent-red text-[10px] font-black rounded-full animate-pulse mb-2 inline-block">BREAKING</span>
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
{/* 3. COLLEGES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-secondary-green rounded-full"></span>
                                        Colleges
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        {
                                            tag: 'CAMPUS LIFE',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'Inside IIT Bombay: What Life Really Looks Like for First-Year Students',
                                            excerpt: "Discover what freshers experience during their first semester at India's premier engineering institute.",
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
                                        },
                                                                            {
                                            tag: 'CAMPUS LIFE',
                                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
                                            title: 'Inside IIT Bombay: What Life Really Looks Like for First-Year Students',
                                            excerpt: "Discover what freshers experience during their first semester at India's premier engineering institute.",
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
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                                                       
                            {/* 5. SCHOOLS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-yellow-400 rounded-full"></span>
                                        Schools
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
                                        },
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
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                                                       {/* 6. SCHOLARSHIPS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                                        Scholarships
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'GLOBAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'PM Scholarship Scheme 2024: Applications Open', excerpt: 'Merit-based financial aid program for students seeking high quality education abroad.', author: 'Scholarship Desk', date: 'Nov 5, 2023', readTime: '5 min read' },
                                        { tag: 'WOMEN', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: "L'Oréal India For Young Women in Science", excerpt: 'Empowering young female aspirants looking to dive deeply into science fields.', author: 'Foundation Media', date: 'Oct 25, 2023', readTime: '4 min read' },
                                                                            { tag: 'GLOBAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'PM Scholarship Scheme 2024: Applications Open', excerpt: 'Merit-based financial aid program for students seeking high quality education abroad.', author: 'Scholarship Desk', date: 'Nov 5, 2023', readTime: '5 min read' },
                                        { tag: 'WOMEN', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: "L'Oréal India For Young Women in Science", excerpt: 'Empowering young female aspirants looking to dive deeply into science fields.', author: 'Foundation Media', date: 'Oct 25, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

 {/* 7. COURSES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                                        Courses
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
                                        },
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
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                                                       {/* 8. CAREERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                        Careers
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'GOVERNMENT STAFF', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'SSC CGL 2024 Notification Out: 17,727 Vacancies', excerpt: 'Staff Selection Commission announces a significant wave of hiring across multiple central departments.', author: 'Career News', date: 'Nov 3, 2023', readTime: '5 min read' },
                                        { tag: 'RAILWAYS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'RRB NTPC 2024: Recruitment Board Notifications', excerpt: 'Non-Technical Popular Categories announcements suggest major openings preparing early.', author: 'Jobs Alert', date: 'Oct 30, 2023', readTime: '3 min read' },
                                                                            { tag: 'GOVERNMENT STAFF', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'SSC CGL 2024 Notification Out: 17,727 Vacancies', excerpt: 'Staff Selection Commission announces a significant wave of hiring across multiple central departments.', author: 'Career News', date: 'Nov 3, 2023', readTime: '5 min read' },
                                        { tag: 'RAILWAYS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'RRB NTPC 2024: Recruitment Board Notifications', excerpt: 'Non-Technical Popular Categories announcements suggest major openings preparing early.', author: 'Jobs Alert', date: 'Oct 30, 2023', readTime: '3 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

 {/* 9. STARTUP AND INNOVATION */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
                                        Startup and Innovation
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
                                        },
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
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                                                       {/* 10. STUDY ABROAD */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-calm-teal rounded-full"></span>
                                        Study Abroad
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'UNITED KINGDOM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'UK Post-Study Work Visa Extended: Rules for Indian Students', excerpt: 'Graduates from recognized universities can continue staying finding relevant international work experience.', author: 'Overseas Editor', date: 'Nov 2, 2023', readTime: '5 min read' },
                                        { tag: 'USA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'F-1 Visa Interview Wait Times Drop to Record Low', excerpt: 'Expedited processing brings massive relief to hopeful MS aspirants studying stateside this fall.', author: 'Immigration Expert', date: 'Oct 29, 2023', readTime: '3 min read' },
                                                                            { tag: 'UNITED KINGDOM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'UK Post-Study Work Visa Extended: Rules for Indian Students', excerpt: 'Graduates from recognized universities can continue staying finding relevant international work experience.', author: 'Overseas Editor', date: 'Nov 2, 2023', readTime: '5 min read' },
                                        { tag: 'USA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'F-1 Visa Interview Wait Times Drop to Record Low', excerpt: 'Expedited processing brings massive relief to hopeful MS aspirants studying stateside this fall.', author: 'Immigration Expert', date: 'Oct 29, 2023', readTime: '3 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

 {/* 11. FEATURED NEWS / ARTICLES FOR PARTNER UNIVERSITIES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                                        Featured News/Articles for Partner Universities
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
                                        },
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
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                                                       {/* 12. POLICIES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                                        Policies
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'REGULATION', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'UGC Extends Ph.D. Thesis Submission Deadline', excerpt: 'Addressing backlogs, pushing the regular deadline 6 months deeper into winter session.', author: 'Policy Updates', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'INTERNATIONAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'AICTE Approves Guidelines for Joint Degree Programs', excerpt: 'Unprecedented access via global programs with partnered foreign institutes allowing seamless transfers.', author: 'AICTE Monitor', date: 'Oct 20, 2023', readTime: '4 min read' },
                                                                            { tag: 'REGULATION', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'UGC Extends Ph.D. Thesis Submission Deadline', excerpt: 'Addressing backlogs, pushing the regular deadline 6 months deeper into winter session.', author: 'Policy Updates', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'INTERNATIONAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'AICTE Approves Guidelines for Joint Degree Programs', excerpt: 'Unprecedented access via global programs with partnered foreign institutes allowing seamless transfers.', author: 'AICTE Monitor', date: 'Oct 20, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

                            {/* 13. OTHERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gray-400 rounded-full"></span>
                                        Others
                                    </h2>
                                    
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                                    {[
                                        { tag: 'LIFESTYLE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'Student Spotlights: How Gen Z Maintains Discipline', excerpt: 'We explore deep work habits amidst rising distractions for young scholars.', author: 'Community Voice', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'PODCAST', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'Alumni Network Show: Episode 5 Released', excerpt: 'Deep conversations linking success trajectories of successful institutional alumni globally.', author: 'Podcast Team', date: 'Oct 20, 2023', readTime: '4 min read' },
                                                                            { tag: 'LIFESTYLE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'Student Spotlights: How Gen Z Maintains Discipline', excerpt: 'We explore deep work habits amidst rising distractions for young scholars.', author: 'Community Voice', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'PODCAST', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'Alumni Network Show: Episode 5 Released', excerpt: 'Deep conversations linking success trajectories of successful institutional alumni globally.', author: 'Podcast Team', date: 'Oct 20, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-[#FCFCFD] rounded-2xl border border-[#EAECF0] overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-32 sm:h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-3 sm:p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 sm:line-clamp-none">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
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

                                <div className="mt-8 flex justify-center">
                                    <button className="bg-[#F9FAFB] border-2 border-[#E4E7EC] text-gray-600 px-8 py-2.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue flex items-center gap-2 transition-all group">
                                        Load More
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                </div>
                            </section>

 
                        </div>

                    </div>

                    
                            
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

                </div>
            </main>
        </div>
    );
};

export default BlogsNews;

