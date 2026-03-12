import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BLOG_POSTS = [
    {
        slug: 'jee-mental-health',
        tag: 'Mentor Insight',
        tagColor: 'bg-creativity-purple text-white',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP',
        title: 'Balancing Mental Health During JEE Prep: A Psychologist\'s Perspective',
        subtitle: 'Actionable strategies to stay productive while preserving your mental wellbeing during the most intense exam season.',
        author: 'Dr. Sunita Verma',
        authorRole: 'Psychologist & Academic Counselor',
        date: 'October 25, 2023',
        readTime: '8 min read',
        views: '21K',
        content: [
            { type: 'lead', text: 'The pressure of competitive exams can be overwhelming. But with the right mindset and strategies, you can protect your mental health while still achieving your academic goals.' },
            { type: 'heading', text: 'Why Mental Health Matters During Exam Prep' },
            { type: 'para', text: 'JEE preparation is often described as a marathon, not a sprint. Students who neglect their mental health in favour of relentless studying frequently experience burnout, anxiety, and decreased performance — the very outcomes they were trying to avoid.' },
            { type: 'para', text: 'Research consistently shows that cognitive performance, memory retention, and problem-solving ability all deteriorate significantly under chronic stress. Protecting your mental health is not a luxury — it is a strategic advantage.' },
            { type: 'heading', text: '5 Evidence-Based Strategies' },
            { type: 'bullets', items: [
                'Structured Study Breaks: Use the Pomodoro technique — 25 minutes of focused study followed by a 5-minute break.',
                'Physical Movement: Even a 20-minute walk daily has measurable positive effects on concentration and mood.',
                'Sleep Prioritisation: Never sacrifice sleep for study time. 7–8 hours is non-negotiable for memory consolidation.',
                'Social Connection: Maintain at least one meaningful social interaction per day, even if brief.',
                'Mindfulness Practice: 10 minutes of guided meditation each morning can significantly reduce cortisol levels.'
            ]},
            { type: 'quote', text: 'Students who take care of their minds perform up to 30% better in high-stakes exams than those who ignore their mental wellbeing entirely.' },
            { type: 'heading', text: 'Recognising Early Warning Signs' },
            { type: 'para', text: 'It is crucial to identify stress before it becomes a crisis. Watch for persistent sleep disturbances, loss of interest in activities you once enjoyed, difficulty concentrating, frequent irritability, and physical symptoms like headaches or stomach aches.' },
            { type: 'para', text: 'If you notice these signs lasting more than two weeks, it is important to speak to a trusted adult, teacher, or professional counselor. There is no shame in seeking help — it is a sign of emotional intelligence and self-awareness.' },
            { type: 'heading', text: 'Building a Sustainable Routine' },
            { type: 'para', text: 'The most successful students build routines that are challenging but sustainable. Plan your week in advance, include leisure and downtime deliberately, and treat your mental health practices as non-negotiable appointments — just as important as your physics revision session.' },
        ],
        relatedBlogs: [
            { title: 'Is Data Science Still the Hottest Career Path in 2024?', tag: 'Career Guide' },
            { title: 'The Secret Sauce to Cracking Ivy League Admissions', tag: 'Expert Advice' },
            { title: 'NEET Strategy: A Topper\'s 90-Day Study Plan', tag: 'Study Tips' },
        ]
    }
];

const BlogsNewsArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

    return (
        <div className="bg-gray-50 min-h-screen pb-16">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/blogs-news" className="hover:text-brand-blue transition-colors">Blogs & News</Link>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span className="hover:text-brand-blue cursor-pointer transition-colors">Blogs</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span className="text-gray-800 font-medium truncate max-w-xs">{post.title}</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:col-span-8">

                    {/* Tag & Title above image */}
                    <div className="mb-6">
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase mb-4 ${post.tagColor}`}>{post.tag}</span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">{post.title}</h1>
                        <p className="text-lg text-gray-500">{post.subtitle}</p>
                    </div>

                    {/* Author + Meta */}
                    <div className="flex flex-wrap items-center gap-5 mb-7 pb-7 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <img
                                src={`https://i.pravatar.cc/80?u=${post.author}`}
                                alt={post.author}
                                className="w-12 h-12 rounded-full border-2 border-creativity-purple/20 object-cover"
                            />
                            <div>
                                <p className="text-sm font-bold text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-500">{post.authorRole}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 ml-auto text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <svg className="h-4 w-4 text-creativity-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="h-4 w-4 text-creativity-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                {post.views} Views
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 font-medium">Share:</span>
                            {['Twitter', 'LinkedIn', 'Copy'].map(s => (
                                <button key={s} className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-semibold rounded-lg hover:bg-creativity-purple hover:text-white hover:border-creativity-purple transition-all">{s}</button>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="rounded-3xl overflow-hidden mb-9 shadow-lg h-[380px]">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-gray-700 text-[16px] leading-relaxed">
                        {post.content.map((block, i) => {
                            if (block.type === 'lead') return (
                                <p key={i} className="text-xl font-medium text-gray-900 border-l-4 border-creativity-purple pl-6 py-2 bg-purple-50 rounded-r-xl italic">{block.text}</p>
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
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-creativity-purple flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            );
                            if (block.type === 'quote') return (
                                <blockquote key={i} className="border-l-4 border-creativity-purple pl-6 py-4 bg-purple-50 rounded-r-xl">
                                    <p className="text-lg font-semibold text-gray-800 italic">"{block.text}"</p>
                                </blockquote>
                            );
                            return null;
                        })}
                    </div>

                    {/* Tags */}
                    <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
                        {['JEE', 'Mental Health', 'Study Tips', 'Productive Habits', 'Stress Management'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-creativity-purple hover:text-white transition-colors cursor-pointer">{tag}</span>
                        ))}
                    </div>

                    {/* Author Bio */}
                    <div className="mt-10 p-6 bg-gray-100 rounded-3xl flex gap-5 items-start">
                        <img
                            src={`https://i.pravatar.cc/100?u=${post.author}`}
                            alt={post.author}
                            className="w-16 h-16 rounded-2xl border-4 border-white shadow-md flex-shrink-0 object-cover"
                        />
                        <div>
                            <p className="font-bold text-gray-900 mb-1">About {post.author}</p>
                            <p className="text-sm text-gray-500">{post.authorRole}. Dedicated to helping students thrive academically and emotionally. Published in 12+ peer-reviewed journals on adolescent psychology and exam stress.</p>
                        </div>
                    </div>

                    {/* Related Blogs */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                            Related Blogs
                        </h3>
                        <div className="space-y-3">
                            {post.relatedBlogs.map((item, i) => (
                                <Link
                                    key={i}
                                    to="/blog/jee-mental-health"
                                    className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-creativity-purple/30 transition-all group"
                                >
                                    <span className="px-2 py-0.5 bg-purple-100 text-creativity-purple text-xs font-bold rounded flex-shrink-0">{item.tag}</span>
                                    <p className="text-sm font-semibold text-gray-800 group-hover:text-creativity-purple transition-colors line-clamp-1">{item.title}</p>
                                    <svg className="h-4 w-4 text-gray-300 group-hover:text-creativity-purple ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:col-span-4 space-y-8">

                    {/* CTA */}
                    <div className="bg-brand-gradient-diag p-7 rounded-3xl text-white">
                        <h3 className="text-xl font-bold mb-2">Talk to a Mentor</h3>
                        <p className="text-white/80 text-sm mb-5">Get personalised guidance from an expert counselor, for free.</p>
                        <button className="w-full bg-white text-brand-blue font-bold py-3 rounded-xl hover:bg-gray-50 transition-all">Book a Free Session</button>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-secondary-foreground text-white p-7 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-1">Weekly Insights</h3>
                            <p className="text-gray-400 text-sm mb-5">Expert blogs delivered to your inbox every Monday.</p>
                            <input className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 mb-3 focus:outline-none focus:ring-2 focus:ring-accent-green" placeholder="Your email address" type="email" />
                            <button className="w-full bg-accent-green py-3 rounded-xl font-bold text-white hover:opacity-90 transition-all">Subscribe Now</button>
                        </div>
                        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-brand-blue rounded-full blur-3xl opacity-20"></div>
                    </div>

                    {/* Popular Topics */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-4">Popular Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {['JEE Main 2024', 'CUET UG', 'MBA Entrance', 'NEET Counselling', 'IELTS Guide', 'GATE Preparation'].map(t => (
                                <a key={t} href="#" className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-xl hover:bg-brand-blue hover:text-white transition-colors">{t}</a>
                            ))}
                        </div>
                    </div>

                    {/* Most Viewed */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-5 flex items-center justify-between">
                            Most Read Blogs
                            <span className="text-xs text-brand-blue font-medium underline cursor-pointer">View All</span>
                        </h3>
                        <div className="space-y-5">
                            {[
                                { title: 'How to build a killer portfolio for Design Admissions', views: '45K', time: '3 days ago' },
                                { title: 'Ivy League Admissions: The Mentor\'s Complete Guide', views: '38K', time: '1 week ago' },
                                { title: 'Data Science Career Path: Is It Still Worth It in 2024?', views: '22K', time: '2 days ago' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                    <span className="text-2xl font-black text-gray-100 group-hover:text-creativity-purple transition-colors">0{i + 1}</span>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-creativity-purple line-clamp-2 transition-colors">{item.title}</p>
                                        <span className="text-xs text-gray-400 mt-1 block">{item.views} Views · {item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default BlogsNewsArticleDetail;
