export interface Scholarship {
    id: number;
    title: string;
    organization: string;
    amount: string;
    deadline: string;
    eligibility: string;
    category: string;
    image: string;
    slug: string;
}

export const SCHOLARSHIPS_DATA: Scholarship[] = [
    {
        id: 1,
        title: "HDFC Bank Parivartan's ECS Scholarship 2024-25",
        organization: "HDFC Bank",
        amount: "Up to INR 75,000",
        deadline: "Sep 30, 2024",
        eligibility: "Class 1 to Undergraduate student",
        category: "Merit-cum-Means",
        image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400",
        slug: "hdfc-bank-parivartan-scholarship"
    },
    {
        id: 2,
        title: "Reliance Foundation Undergraduate Scholarships",
        organization: "Reliance Foundation",
        amount: "Up to INR 2,00,000",
        deadline: "Oct 15, 2024",
        eligibility: "Full-time 1st year UG students",
        category: "Merit-based",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
        slug: "reliance-foundation-scholarship"
    },
    {
        id: 3,
        title: "Keep India Smiling Foundation Scholarship Program",
        organization: "Colgate-Palmolive (India) Ltd.",
        amount: "INR 30,000 per year",
        deadline: "Dec 31, 2024",
        eligibility: "Class 11, Diploma, Engineering students",
        category: "Merit-cum-Means",
        image: "https://images.unsplash.com/photo-1491843325455-081832c3f86e?auto=format&fit=crop&q=80&w=400",
        slug: "colgate-keep-india-smiling-scholarship"
    },
    {
        id: 4,
        title: "Adobe Women Engineers Scholarship",
        organization: "Adobe Systems India",
        amount: "Tuition fees & Internship",
        deadline: "Aug 31, 2024",
        eligibility: "Indian female students in Engineering",
        category: "Women only",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
        slug: "adobe-women-engineers-scholarship"
    },
    {
        id: 5,
        title: "Sitaram Jindal Foundation Scholarship",
        organization: "Sitaram Jindal Foundation",
        amount: "Monthly Stipend",
        deadline: "Ongoing",
        eligibility: "Class 11 to PG students",
        category: "Means-based",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400",
        slug: "sitaram-jindal-scholarship"
    }
];
