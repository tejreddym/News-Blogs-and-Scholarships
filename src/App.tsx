import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BlogsNews from './pages/BlogsNews';
import NewsDetail from './pages/NewsDetail';
import BlogsNewsArticleDetail from './pages/BlogsNewsArticleDetail';

const App: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <div className="bg-[#F8FAFB] min-h-screen font-body text-[#1F2937]">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Routes>
                        <Route path="/" element={<BlogsNews />} />
                        <Route path="/blog/:slug" element={<BlogsNewsArticleDetail />} />
                        <Route path="/news/:slug" element={<NewsDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
