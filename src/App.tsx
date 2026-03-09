import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Scholarships from './pages/Scholarships';

const App: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <div className="bg-[#F8FAFB] min-h-screen font-body text-[#1F2937]">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Routes>
                        <Route path="/" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                        <Route path="/scholarships" element={<Scholarships />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
