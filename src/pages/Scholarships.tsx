import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipData';

const Scholarships: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="bg-primary rounded-3xl p-8 md:p-12 text-white mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the Right Scholarship for You</h1>
                    <p className="text-white/80 text-lg mb-8">Discover thousands of scholarship opportunities to fund your education. Search by level, category, and eligibility.</p>
                    <div className="flex flex-col md:flex-row gap-4 bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20">
                        <div className="flex-grow relative">
                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-white/60">search</span>
                            <input
                                type="text"
                                placeholder="Search scholarships by name or provider..."
                                className="w-full bg-transparent border-none focus:ring-0 pl-12 pr-4 py-3 text-white placeholder:text-white/50"
                            />
                        </div>
                        <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all">Search Now</button>
                    </div>
                </div>
            </section>

            {/* Quick Filters */}
            <section className="mb-10 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-2">
                    {['All Scholarships', 'Undergraduate', 'Engineering', 'Medical', 'Means Based', 'Women'].map((filter, idx) => (
                        <button
                            key={idx}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold border transition-all
                                ${idx === 0
                                    ? 'bg-primary text-white border-primary shadow-md'
                                    : 'bg-white text-gray-600 border-gray-100 hover:border-primary hover:text-primary shadow-sm'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Recommended Scholarships</h2>
                        <span className="text-gray-500 text-sm font-medium">Showing {SCHOLARSHIPS_DATA.length} results</span>
                    </div>

                    {SCHOLARSHIPS_DATA.map((scholarship) => (
                        <Link
                            key={scholarship.id}
                            to={`/scholarships/${scholarship.slug}`}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                                <img src={scholarship.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={scholarship.title} />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">{scholarship.category}</span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <span className="material-icons text-sm">event</span>
                                        <span className="text-[10px] font-bold">DEADLINE: {scholarship.deadline}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{scholarship.title}</h3>
                                <p className="text-sm text-gray-500 font-medium mb-4">{scholarship.organization}</p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-50">
                                    <div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Scholarship Amount</span>
                                        <span className="text-sm font-bold text-gray-900">{scholarship.amount}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Eligibility</span>
                                        <span className="text-sm font-bold text-gray-900">{scholarship.eligibility}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-primary text-sm font-bold flex items-center gap-1">View Details <span className="material-icons text-[18px]">chevron_right</span></span>
                                    <button className="px-6 py-2 bg-primary/5 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all">Apply Now</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 not-italic underline decoration-primary decoration-4 underline-offset-4">Top Providers</h3>
                        <div className="space-y-4">
                            {['Reliance Foundation', 'HDFC Bank', 'Tata Trusts', 'Adobe India'].map((provider, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-pointer not-italic">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center font-bold text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">{provider.charAt(0)}</div>
                                    <span className="font-bold text-gray-700 group-hover:text-primary">{provider}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Scholarship Alert</h3>
                            <p className="text-white/80 text-sm mb-8">Never miss a deadline. Get personalized scholarship alerts directly in your inbox.</p>
                            <input type="email" placeholder="Your work email" className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white/20 border-white/30 backdrop-blur-md placeholder-white/80 focus:bg-white focus:outline-none transition-all text-sm mb-4" />
                            <button className="w-full bg-white text-indigo-600 font-bold py-4 rounded-xl shadow-xl hover:bg-gray-50 transition-all text-sm">Notify Me</button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Scholarships;
