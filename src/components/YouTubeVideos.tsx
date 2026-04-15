import React from 'react';

const VIDEOS = [
    {
        id: '-otTV4Brj_0',
        title: 'Confused About Your Career? This One Event Can Change Everything',
        thumbnail: 'https://img.youtube.com/vi/-otTV4Brj_0/mqdefault.jpg'
    },
    {
        id: 'uIApbkbNQQw',
        title: 'Don’t Miss Out: Vijayawada’s Biggest Scholarship & Admission Fair!',
        thumbnail: 'https://img.youtube.com/vi/uIApbkbNQQw/mqdefault.jpg'
    },
    {
        id: 'RkC9JsC3_6g',
        title: 'What Happens When Powerful Women Share One Stage?',
        thumbnail: 'https://img.youtube.com/vi/RkC9JsC3_6g/mqdefault.jpg'
    }
];

interface YouTubeVideosProps {
    layout?: 'sidebar' | 'bottom';
}

const YouTubeVideos: React.FC<YouTubeVideosProps> = ({ layout = 'bottom' }) => {
    const channelUrl = "https://www.youtube.com/@college.mentor";

    if (layout === 'sidebar') {
        return (
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">Latest Videos</h3>
                    <a 
                        href={channelUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
                    >
                        Visit Channel
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                <div className="space-y-4">
                    {VIDEOS.map((video) => (
                        <a 
                            key={video.id} 
                            href={`https://www.youtube.com/watch?v=${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-2 ring-1 ring-gray-200 group-hover:ring-brand-blue/50 transition-all">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-300">
                                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs font-bold text-gray-800 line-clamp-2 group-hover:text-brand-blue transition-colors leading-relaxed">
                                {video.title}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section className="mt-16 pt-10 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-red-50 text-red-600 rounded-xl">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
                        </span>
                        Latest from College Mentor
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 ml-14">Expert guidance, scholarship alerts, and career tips.</p>
                </div>
                <a 
                    href={channelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                    Subscribe on YouTube
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VIDEOS.map((video) => (
                    <a 
                        key={video.id} 
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="text-[15px] font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                                {video.title}
                            </h4>
                            <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-red-600 uppercase tracking-wider">
                                <span>Watch Now</span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default YouTubeVideos;
