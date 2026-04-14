import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Sample news data (in a real app this would come from an API/data file)
const NEWS_DATA = [
    {
        slug: 'nep-2024-reforms',
        tag: 'National News',
        tagColor: 'bg-brand-blue text-white',
        category: 'All News',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB',
        title: 'NEP 2024: Major Reforms in Higher Education Unveiled',
        subtitle: 'The Ministry of Education has unveiled a revised framework aimed at increasing flexibility and interdisciplinary studies.',
        date: 'October 25, 2023',
        readTime: '6 min read',
        author: 'Dr. Priya Nair',
        authorRole: 'Education Correspondent',
        views: '15.4K',
        content: [
            { type: 'lead', text: 'The National Education Policy 2024 brings sweeping changes to India\'s higher education landscape, promising to reshape how millions of students pursue their academic ambitions.' },
            { type: 'youtube', url: 'https://www.youtube.com/embed/-otTV4Brj_0' },
            { type: 'heading', text: 'What\'s Changing?' },
            { type: 'para', text: 'The Ministry of Education has unveiled a revised framework that emphasizes flexibility, interdisciplinary learning, and a multidisciplinary approach to undergraduate programs. Students will now have the freedom to choose courses across different streams, enabling a truly holistic education.' },
            { type: 'para', text: 'Under the new framework, universities will be required to offer a minimum of 40% of credits from disciplines outside the students\' primary field of study. This move is designed to break down the traditional silos between arts, science, and commerce.' },
            { type: 'heading', text: 'Key Provisions' },
            { type: 'bullets', items: ['Four-year undergraduate programs with multiple exit options', 'Academic Bank of Credits (ABC) for credit transfer', 'Internships and research opportunities embedded in curriculum', 'Choice-based credit system across all recognized universities', 'Dual degree programs between Indian and foreign institutions'] },
            { type: 'para', text: 'The rollout is expected to begin from the 2024–25 academic year, with universities given until 2026 to achieve full compliance. The University Grants Commission (UGC) will oversee the implementation and issue detailed guidelines by December 2023.' },
            { type: 'heading', text: 'What Students Should Know' },
            { type: 'para', text: 'Students currently enrolled in three-year programs will continue under their existing curriculum. The new policies will apply to first-year students from the upcoming academic session. Admission criteria, however, are likely to be updated to reflect the multidisciplinary nature of the new framework.' },
            { type: 'quote', text: 'This is the most significant transformation in Indian higher education in three decades. We are building a system that produces not just graduates, but thinkers.' },
            { type: 'para', text: 'Officials from the Ministry have assured students that proper counseling and guidance will be made available through colleges and dedicated digital portals to help navigate the new choices available to them.' },
        ],
        relatedNews: [
            { title: 'JEE Main 2024: What Changes to Expect in the New Academic Year', tag: 'Competitive Exams' },
            { title: 'CBSE Class 12 Board Exam 2024: Timetable Released', tag: 'Board Exams' },
            { title: 'DU Admission 2024: CSAS Round 3 Allocation List Released', tag: 'Admissions' },
        ]
    }
];

const NewsDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const news = NEWS_DATA.find(n => n.slug === slug) || NEWS_DATA[0]; // Default to first for demo

    // Eye icon SVG
    const EyeIcon = () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-16">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/blogs-news" className="hover:text-brand-blue transition-colors">Blogs & News</Link>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span className="hover:text-brand-blue cursor-pointer transition-colors">News</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span className="text-gray-800 font-medium truncate max-w-xs">{news.title}</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:col-span-8">

                    {/* Hero Image */}
                    <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] mb-8 shadow-xl">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 uppercase ${news.tagColor}`}>{news.tag}</span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{news.title}</h1>
                            <p className="text-gray-300 mt-3 text-base md:text-lg">{news.subtitle}</p>
                        </div>
                    </div>

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <img
                                src={`https://i.pravatar.cc/80?u=${news.author}`}
                                alt={news.author}
                                className="w-12 h-12 rounded-full border-2 border-brand-blue/20 object-cover"
                            />
                            <div>
                                <p className="text-sm font-bold text-gray-900">{news.author}</p>
                                <p className="text-xs text-gray-500">{news.authorRole}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 ml-auto text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <svg className="h-4 w-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                {news.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="h-4 w-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                {news.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <EyeIcon />
                                {news.views} Views
                            </span>
                        </div>
                        {/* Share buttons */}
                        <div className="flex items-center gap-2 ml-auto">
                            <span className="text-xs text-gray-400 font-medium">Share:</span>
                            {['Twitter', 'LinkedIn', 'Copy'].map(s => (
                                <button key={s} className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-semibold rounded-lg hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">{s}</button>
                            ))}
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-gray-700 text-[16px] leading-relaxed">
                        {news.content.map((block, i) => {
                            if (block.type === 'lead') return (
                                <p key={i} className="text-xl font-medium text-gray-900 border-l-4 border-brand-blue pl-6 py-2 bg-blue-50 rounded-r-xl italic">{block.text}</p>
                            );
                            if (block.type === 'heading') return (
                                <h2 key={i} className="text-2xl font-bold text-gray-900 pt-4">{block.text}</h2>
                            );
                            if (block.type === 'para') return (
                                <p key={i}>{block.text}</p>
                            );
                            if (block.type === 'bullets') return (
                                <ul key={i} className="list-none space-y-3 pl-2">
                                    {block.items?.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-green flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            );
                            if (block.type === 'quote') return (
                                <blockquote key={i} className="border-l-4 border-accent-green pl-6 py-4 bg-green-50 rounded-r-xl">
                                    <p className="text-lg font-semibold text-gray-800 italic">"{block.text}"</p>
                                </blockquote>
                            );
                            if (block.type === 'youtube') return (
                                <div key={i} className="my-8 h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                                    <iframe width="100%" height="100%" src={block.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            );
                            return null;
                        })}
                    </div>

                    {/* Tags */}
                    <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
                        {['NEP 2024', 'Higher Education', 'UGC', 'University Reform', 'India'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-brand-blue hover:text-white transition-colors cursor-pointer">{tag}</span>
                        ))}
                    </div>

                    {/* Related News */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                            Related News
                        </h3>
                        <div className="space-y-3">
                            {news.relatedNews.map((item, i) => (
                                <Link
                                    key={i}
                                    to="/news/nep-2024-reforms"
                                    className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-brand-blue/30 transition-all group"
                                >
                                    <span className="px-2 py-0.5 bg-secondary-blue text-brand-blue text-xs font-bold rounded flex-shrink-0">{item.tag}</span>
                                    <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue transition-colors line-clamp-1">{item.title}</p>
                                    <svg className="h-4 w-4 text-gray-300 group-hover:text-brand-blue ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:col-span-4 space-y-8">

                    {/* Newsletter */}
                    <div className="bg-secondary-foreground text-white p-7 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-1">Stay Ahead</h3>
                            <p className="text-gray-400 text-sm mb-5">Weekly news alerts to your inbox.</p>
                            <input className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 mb-3 focus:outline-none focus:ring-2 focus:ring-accent-green" placeholder="Your email address" type="email" />
                            <button className="w-full bg-accent-green py-3 rounded-xl font-bold text-white hover:opacity-90 transition-all">Subscribe Now</button>
                        </div>
                        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
                    </div>

                    {/* Popular Topics */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-4">Popular Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {['JEE Main 2024', 'CUET UG', 'MBA Entrance', 'NEET Counselling', 'IELTS Guide', 'GATE Preparation', 'Study Abroad', 'Scholarships'].map(t => (
                                <a key={t} href="#" className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-xl hover:bg-brand-blue hover:text-white transition-colors">{t}</a>
                            ))}
                        </div>
                    </div>

                    {/* Most Viewed */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-5 flex items-center justify-between">
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
                                        <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-brand-blue line-clamp-2 transition-colors">{item.title}</p>
                                        <span className="text-xs text-gray-400 mt-1 block">{item.views} Views · {item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Explore By Type */}
                    <div className="bg-brand-gradient-diag p-1 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-white p-5 rounded-[calc(1.5rem-2px)]">
                            <h3 className="text-base font-bold mb-4">Explore By Type</h3>
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
                                        <span className="text-xl mb-1">{item.icon}</span>
                                        <span className="text-[10px] font-bold text-gray-700 leading-tight">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default NewsDetail;
