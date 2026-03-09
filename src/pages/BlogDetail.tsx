import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS_DATA, FAQS } from '../data/blogData';

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const blog = BLOGS_DATA.find(b => b.slug === slug);

    if (!blog) return <div className="text-center py-20">Blog post not found. <Link to="/" className="text-primary">Back home</Link></div>;

    return (
        <div className="animate-fadeIn">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="material-icons text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium truncate">{blog.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <article className="lg:col-span-8">
                    <div className="relative rounded-3xl overflow-hidden mb-8 shadow-lg h-[400px] md:h-[500px]">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase mb-4 inline-block">{blog.tag}</span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{blog.title}</h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-12 h-12 rounded-full border-2 border-primary/20 shadow-sm" alt={blog.author} />
                            <div><p className="text-sm font-bold text-gray-900">{blog.author}</p><p className="text-xs text-gray-500">Academic Counselor</p></div>
                        </div>
                        <div className="flex items-center gap-4 ml-auto">
                            <span className="text-gray-500 text-sm flex items-center gap-1"><span className="material-icons text-primary/60 text-sm">calendar_today</span>{blog.date}</span>
                            <span className="text-gray-500 text-sm flex items-center gap-1"><span className="material-icons text-primary/60 text-sm">schedule</span>{blog.readTime}</span>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p className="text-xl font-medium text-gray-900 border-l-4 border-primary pl-6 py-2 bg-gray-50 italic">"Educational excellence is not just a destination, but a continuous journey of discovery and growth."</p>
                        <p>{blog.description}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaways</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Continuous Learning:</strong> Stay updated with industry trends and research.</li>
                            <li><strong>Networking:</strong> Connect with peers and mentors in your academic stream.</li>
                            <li><strong>Practical Application:</strong> Bridge the gap between theory and real-world scenarios.</li>
                        </ul>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-10 border-t border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2"><span className="material-icons text-primary">quiz</span> Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {FAQS.map((faq, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all group">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center justify-between">{faq.q}<span className="material-icons text-gray-400 group-hover:text-primary">add</span></h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-16 p-8 bg-[#F3F4F6] rounded-3xl flex items-center gap-6">
                        <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-20 h-20 rounded-2xl border-4 border-white shadow-md" alt={blog.author} />
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">About {blog.author}</h4>
                            <p className="text-gray-600 text-sm">Experienced mentor helping students navigate their academic and professional journeys.</p>
                        </div>
                    </div>
                </article>

                <aside className="lg:col-span-4 space-y-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><span className="material-icons text-primary">category</span> Categories</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Engineering', 'Medical', 'Management', 'Arts', 'Coding', 'Research'].map(cat => (
                                <span key={cat} className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer">{cat}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Weekly Insights</h3>
                        <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white/20 border-white/30 backdrop-blur-md placeholder-white focus:bg-white focus:outline-none text-sm mb-4" />
                        <button className="w-full bg-white text-primary font-bold py-4 rounded-xl hover:bg-gray-50 transition-all text-sm">Subscribe</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetail;
