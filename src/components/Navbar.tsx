import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isBlogsNews = location.pathname === '/' || location.pathname.startsWith('/blog/') || location.pathname.startsWith('/news/');
    const catScrollRef = useRef<HTMLDivElement>(null);

    const scrollCat = (direction: 'left' | 'right') => {
        if (catScrollRef.current) {
            catScrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group outline-none">
                            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-accent transition-colors">CM</div>
                            <span className="font-display font-bold text-2xl tracking-tight text-primary">College Mentor</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8 items-center h-full">
                        <a className="text-gray-600 hover:text-primary font-medium transition-colors cursor-pointer" href="#">Colleges</a>
                        <a className="text-gray-600 hover:text-primary font-medium transition-colors cursor-pointer" href="#">Exams</a>
                        <Link
                            to="/"
                            className={`${isBlogsNews ? 'text-primary font-bold border-b-2 border-primary' : 'text-gray-600 hover:text-primary font-medium'} py-7 transition-all h-full flex items-center`}
                        >
                            BLOGS/NEWS
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-accent shadow-sm transition-all">
                            Get Counselling
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Scrollbar — only visible on /blogs-news */}
            {isBlogsNews && (
                <div className="border-t bg-white py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
                        {/* Left fade + arrow */}
                        <div className="absolute left-4 sm:left-6 lg:left-8 z-10 bg-gradient-to-r from-white via-white to-transparent pr-8 flex items-center h-full">
                            <button
                                onClick={() => scrollCat('left')}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Scroll categories left"
                            >
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable categories */}
                        <div
                            ref={catScrollRef}
                            className="flex overflow-x-auto gap-8 text-sm font-medium text-gray-500 whitespace-nowrap scroll-smooth w-full px-10"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <a className="text-primary font-bold flex-shrink-0" href="#">All Categories</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Engineering and Architecture</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Management and Business Administration</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Medicine and Allied Sciences</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Law</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Animation and Design</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Media, Mass Communication and Journalism</a>
                            <a className="hover:text-primary flex-shrink-0" href="#">Hospitality and Tourism</a>
                        </div>

                        {/* Right fade + arrow */}
                        <div className="absolute right-4 sm:right-6 lg:right-8 z-10 bg-gradient-to-l from-white via-white to-transparent pl-8 flex items-center h-full">
                            <button
                                onClick={() => scrollCat('right')}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Scroll categories right"
                            >
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
