import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isScholarships = location.pathname === '/scholarships';
    const isBlog = location.pathname === '/' || location.pathname.startsWith('/blog/');

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
                            to="/scholarships"
                            className={`${isScholarships ? 'text-primary font-bold border-b-2 border-primary' : 'text-gray-600 hover:text-primary font-medium'} py-7 transition-all h-full flex items-center`}
                        >
                            Scholarships
                        </Link>
                        <Link
                            to="/"
                            className={`${isBlog ? 'text-primary font-bold border-b-2 border-primary' : 'text-gray-600 hover:text-primary font-medium'} py-7 transition-all h-full flex items-center`}
                        >
                            Blogs
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-accent shadow-sm transition-all">
                            Get Counselling
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
