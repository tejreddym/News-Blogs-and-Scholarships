export interface NewsBlock {
    type: 'lead' | 'heading' | 'para' | 'bullets' | 'quote' | 'video' | 'image' | 'table';
    text?: string;
    items?: string[];
    url?: string;
    caption?: string;
    headers?: string[];
    rows?: string[][];
}

export interface NewsItem {
    slug: string;
    tag: string;
    tagColor: string;
    category: string;
    image: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    views: string;
    content: NewsBlock[];
    relatedNews: Array<{ title: string; tag: string }>;
}

export const NEWS_DATA: NewsItem[] = [
    {
        slug: 'nep-2024-reforms',
        tag: 'National News',
        tagColor: 'bg-brand-blue text-white',
        category: 'All News',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
        title: 'NEP 2024: Major Reforms in Higher Education Unveiled',
        subtitle: 'The Ministry of Education has unveiled a revised framework aimed at increasing flexibility and interdisciplinary studies.',
        date: 'October 25, 2023',
        readTime: '6 min read',
        author: 'Dr. Priya Nair',
        authorRole: 'Education Correspondent',
        views: '15.4K',
        content: [
            { type: 'lead', text: 'The National Education Policy 2024 brings sweeping changes to India\'s higher education landscape, promising to reshape how millions of students pursue their academic ambitions.' },
            { type: 'heading', text: 'What\'s Changing?' },
            { type: 'para', text: 'The Ministry of Education has unveiled a revised framework that emphasizes flexibility, interdisciplinary learning, and a multidisciplinary approach to undergraduate programs.' },
            
            { 
                type: 'video', 
                url: 'https://www.youtube.com/embed/uIApbkbNQQw', 
                caption: 'Watch: Understanding the core pillars of NEP 2024 reforms.' 
            },

            { type: 'para', text: 'Under the new framework, universities will be required to offer a minimum of 40% of credits from disciplines outside the students\' primary field of study.' },
            
            { type: 'heading', text: 'Implementation Timeline' },
            {
                type: 'table',
                headers: ['Phase', 'Target Date', 'Key Objective'],
                rows: [
                    ['Phase 1', 'Jan 2024', 'Curriculum Framework Finalization'],
                    ['Phase 2', 'July 2024', 'Pilot Implementation in Central Universities'],
                    ['Phase 3', 'Dec 2024', 'State-wide Rollout and ABC Integration'],
                    ['Phase 4', 'June 2025', 'Full Compliance Deadline']
                ]
            },

            { type: 'heading', text: 'Key Provisions' },
            { type: 'bullets', items: ['Four-year undergraduate programs with multiple exit options', 'Academic Bank of Credits (ABC) for credit transfer', 'Internships and research opportunities embedded in curriculum', 'Choice-based credit system across all recognized universities', 'Dual degree programs between Indian and foreign institutions'] },
            
            { 
                type: 'image', 
                url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200', 
                caption: 'The revised policy aims to bridge the gap between traditional and modern learning environments.' 
            },

            { type: 'para', text: 'The rollout is expected to begin from the 2024–25 academic year, with universities given until 2026 to achieve full compliance.' },
            { type: 'quote', text: 'This is the most significant transformation in Indian higher education in three decades. We are building a system that produces not just graduates, but thinkers.' },
        ],
        relatedNews: [
            { title: 'JEE Main 2024: What Changes to Expect in the New Academic Year', tag: 'Competitive Exams' },
            { title: 'CBSE Class 12 Board Exam 2024: Timetable Released', tag: 'Board Exams' },
            { title: 'DU Admission 2024: CSAS Round 3 Allocation List Released', tag: 'Admissions' },
        ]
    },
    {
        slug: 'post-graduation-work-permits-new-policy-updates-for-2024',
        tag: 'International News',
        tagColor: 'bg-orange-500 text-white',
        category: 'All News',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
        title: 'Post Graduation Work Permits: New Policy Updates for 2024',
        subtitle: 'Major changes announced for international students regarding work permit eligibility and duration in Canada and the UK.',
        date: 'November 12, 2023',
        readTime: '8 min read',
        author: 'Marcus Thorne',
        authorRole: 'Global Policy Analyst',
        views: '22.1K',
        content: [
            { type: 'lead', text: 'New immigration directives are set to change the post-study work landscape for thousands of international students starting next year.' },
            { type: 'heading', text: 'What is Changing In Canada?' },
            { type: 'para', text: 'IRCC has announced that starting January 2024, the criteria for PGWP will be more closely tied to labor market needs. Certain vocational courses may no longer qualify if they fall outside the priority sectors.' },
            { type: 'heading', text: 'UK Graduate Route Update' },
            { type: 'para', text: 'The UK Home Office is reviewing the Graduate visa route to ensure it is being used for its intended purpose. While no immediate cuts have been made, tougher financial requirements are being introduced.' },
            { 
                type: 'image', 
                url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200', 
                caption: 'Navigating global policy changes requires careful planning and early preparation.' 
            },
            { type: 'quote', text: 'International education remains a key priority, but we must ensure sustainability for our communities and quality experiences for students.' },
        ],
        relatedNews: [
            { title: 'Top 10 Countries for Study Abroad in 2024', tag: 'Study Abroad' },
            { title: 'IELTS vs PTE: Which English Test is Better for Your Visa?', tag: 'Visa Tips' },
        ]
    }
];
