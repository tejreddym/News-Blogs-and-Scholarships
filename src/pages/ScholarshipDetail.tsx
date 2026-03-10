import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipData';

const ScholarshipDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const scholarship = SCHOLARSHIPS_DATA.find(s => s.slug === slug);

    if (!scholarship) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship not found</h2>
                <Link to="/scholarships" className="text-primary hover:underline flex items-center justify-center gap-2">
                    <span className="material-icons">arrow_back</span> Back to Scholarships
                </Link>
            </div>
        );
    }

    return (
        <div className="animate-fadeIn">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap bg-white/50 p-3 rounded-xl backdrop-blur-sm border border-gray-100">
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-icons text-sm">home</span> Home
                </Link>
                <span className="material-icons text-sm text-gray-300">chevron_right</span>
                <Link to="/scholarships" className="hover:text-primary transition-colors">Scholarships</Link>
                <span className="material-icons text-sm text-gray-300">chevron_right</span>
                <span className="text-gray-900 font-medium truncate">{scholarship.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8">
                    {/* Hero Feature */}
                    <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl group h-[350px] md:h-[450px]">
                        <img src={scholarship.image} alt={scholarship.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">
                                {scholarship.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
                                {scholarship.title}
                            </h1>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                            <span className="material-icons text-primary/40 text-xl mb-3">payments</span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Grant Amount</p>
                            <p className="text-lg font-bold text-gray-900">{scholarship.amount}</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                            <span className="material-icons text-primary/40 text-xl mb-3">event</span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Deadline</p>
                            <p className="text-lg font-bold text-gray-900">{scholarship.deadline}</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                            <span className="material-icons text-primary/40 text-xl mb-3">school</span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Level</p>
                            <p className="text-lg font-bold text-gray-900 truncate" title={scholarship.eligibility}>{scholarship.eligibility}</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                            <span className="material-icons text-primary/40 text-xl mb-3">business</span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Provider</p>
                            <p className="text-lg font-bold text-gray-900 truncate" title={scholarship.organization}>{scholarship.organization}</p>
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-icons text-lg">description</span>
                                </span>
                                Scholarship Overview
                            </h2>
                            <p className="mb-6">
                                The <strong>{scholarship.title}</strong> provided by <strong>{scholarship.organization}</strong> is a prestigious 
                                opportunity designed to support {scholarship.eligibility.toLowerCase()} pursuing their educational dreams.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Eligibility Criteria</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-green-500 text-lg mt-0.5">check_circle</span>
                                    <span>Must be an Indian citizen.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-green-500 text-lg mt-0.5">check_circle</span>
                                    <span>Applicants must be {scholarship.eligibility}.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-green-500 text-lg mt-0.5">check_circle</span>
                                    <span>Detailed merit criteria as per foundation guidelines.</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {['Photo Identity Proof', 'Previous Year Marksheet', 'Income Certificate', 'Admission Proof', 'Bank Passbook'].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="material-icons text-gray-400 text-lg">insert_drive_file</span>
                                        <span className="text-sm font-medium text-gray-700">{doc}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="italic text-gray-500 bg-gray-50 p-6 rounded-2xl border-l-4 border-primary">
                                Note: This scholarship is aimed at meritorious students from financially weaker sections to help them continue their education without financial constraints.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Call to Action */}
                    <div className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                            <p className="text-white/80 text-sm mb-8 leading-relaxed">Ensure you have all documents ready before starting the application process. Check the eligibility criteria one last time.</p>
                            <button className="w-full bg-white text-primary font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                                Apply Now <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <p className="text-center text-[10px] text-white/50 mt-4 uppercase tracking-widest">Powered by Education Portal</p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    </div>

                    {/* Important Dates */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="material-icons text-primary text-xl">schedule</span> Important Dates
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b border-gray-50">
                                <span className="text-sm text-gray-500">Application Opens</span>
                                <span className="text-sm font-bold text-gray-900 italic">Announced Soon</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-50">
                                <span className="text-sm text-gray-500">Last Date to Apply</span>
                                <span className="text-sm font-bold text-red-500">{scholarship.deadline}</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <span className="text-sm text-gray-500">Result Declaration</span>
                                <span className="text-sm font-bold text-gray-900 italic">TBA</span>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Share Opportunity</h3>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'content_copy'].map((icon, idx) => (
                                <button key={idx} className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary/10 hover:text-primary transition-all">
                                    <span className="material-icons text-xl">{icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ScholarshipDetail;
