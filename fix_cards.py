import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Define standard uniform card template string to avoid duplication syntax
STANDARDIZED_CARD = """                                        <Link to="/news/nep-2024-reforms" key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
                                            <div className="relative h-56 flex-shrink-0">
                                                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} />
                                                <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded tracking-wider shadow-sm">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                                                    <span>{card.readTime}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>{card.date}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {card.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <img src={`https://i.pravatar.cc/150?u=${card.author}`} alt={card.author} className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm font-bold text-gray-900">{card.author}</span>
                                                    </div>
                                                    <span className="text-brand-blue font-bold text-sm hover:text-accent-blue transition-colors">Read More</span>
                                                </div>
                                            </div>
                                        </Link>"""

# Replace Section 4: Exams
section_4_start = text.find(' {/* 4. EXAMS */}')
section_4_end = text.find(' {/* 5. SCHOOLS */}')
if section_4_start != -1 and section_4_end != -1:
    new_s4 = """                            {/* 4. EXAMS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-urgent-red rounded-full"></span>
                                        Exams
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'BOARD EXAMS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'CBSE Class 12 Board Exam 2024: Timetable Released, Key Dates', excerpt: 'The Central Board of Secondary Education has officially announced the timetable for the 2024 class 12 examinations.', author: 'Exam Desk', date: 'Nov 1, 2023', readTime: '5 min read' },
                                        { tag: 'COMPETITIVE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'JEE Main 2024: Session 1 Registration Begins', excerpt: 'Check the new eligibility criteria, syllabus adjustments, and step-by-step application guide for joining IITs.', author: 'Prep Guru', date: 'Nov 2, 2023', readTime: '8 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_4_start] + new_s4 + text[section_4_end:]


# Replace Section 6: Scholarships
section_6_start = text.find(' {/* 6. SCHOLARSHIPS */}')
section_6_end = text.find(' {/* 7. COURSES */}')
if section_6_start != -1 and section_6_end != -1:
    new_s6 = """                            {/* 6. SCHOLARSHIPS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-creativity-purple rounded-full"></span>
                                        Scholarships
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'GLOBAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'PM Scholarship Scheme 2024: Applications Open', excerpt: 'Merit-based financial aid program for students seeking high quality education abroad.', author: 'Scholarship Desk', date: 'Nov 5, 2023', readTime: '5 min read' },
                                        { tag: 'WOMEN', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: "L'Oréal India For Young Women in Science", excerpt: 'Empowering young female aspirants looking to dive deeply into science fields.', author: 'Foundation Media', date: 'Oct 25, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_6_start] + new_s6 + text[section_6_end:]

# Replace Section 8: Careers
section_8_start = text.find(' {/* 8. CAREERS */}')
section_8_end = text.find(' {/* 9. STARTUP AND INNOVATION */}')
if section_8_start != -1 and section_8_end != -1:
    new_s8 = """                            {/* 8. CAREERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-motivational-orange rounded-full"></span>
                                        Careers
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'GOVERNMENT STAFF', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'SSC CGL 2024 Notification Out: 17,727 Vacancies', excerpt: 'Staff Selection Commission announces a significant wave of hiring across multiple central departments.', author: 'Career News', date: 'Nov 3, 2023', readTime: '5 min read' },
                                        { tag: 'RAILWAYS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'RRB NTPC 2024: Recruitment Board Notifications', excerpt: 'Non-Technical Popular Categories announcements suggest major openings preparing early.', author: 'Jobs Alert', date: 'Oct 30, 2023', readTime: '3 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_8_start] + new_s8 + text[section_8_end:]

# Replace Section 10: Study Abroad
section_10_start = text.find(' {/* 10. STUDY ABROAD */}')
section_10_end = text.find(' {/* 11. FEATURED NEWS / ARTICLES FOR PARTNER UNIVERSITIES */}')
if section_10_start != -1 and section_10_end != -1:
    new_s10 = """                            {/* 10. STUDY ABROAD */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-calm-teal rounded-full"></span>
                                        Study Abroad
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'UNITED KINGDOM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'UK Post-Study Work Visa Extended: Rules for Indian Students', excerpt: 'Graduates from recognized universities can continue staying finding relevant international work experience.', author: 'Overseas Editor', date: 'Nov 2, 2023', readTime: '5 min read' },
                                        { tag: 'USA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'F-1 Visa Interview Wait Times Drop to Record Low', excerpt: 'Expedited processing brings massive relief to hopeful MS aspirants studying stateside this fall.', author: 'Immigration Expert', date: 'Oct 29, 2023', readTime: '3 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_10_start] + new_s10 + text[section_10_end:]

# Replace Section 12: Policies
section_12_start = text.find(' {/* 12. POLICIES */}')
section_12_end = text.find(' {/* 13. OTHERS */}')
if section_12_start != -1 and section_12_end != -1:
    new_s12 = """                            {/* 12. POLICIES */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                                        Policies
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'REGULATION', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', title: 'UGC Extends Ph.D. Thesis Submission Deadline', excerpt: 'Addressing backlogs, pushing the regular deadline 6 months deeper into winter session.', author: 'Policy Updates', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'INTERNATIONAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', title: 'AICTE Approves Guidelines for Joint Degree Programs', excerpt: 'Unprecedented access via global programs with partnered foreign institutes allowing seamless transfers.', author: 'AICTE Monitor', date: 'Oct 20, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_12_start] + new_s12 + text[section_12_end:]

# Replace Section 13: Others
section_13_start = text.find(' {/* 13. OTHERS */}')
section_13_end = text.find(' <div className="mt-16 pb-12 text-center border-t border-gray-100 pt-10">')
if section_13_start != -1 and section_13_end != -1:
    new_s13 = """                            {/* 13. OTHERS */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gray-400 rounded-full"></span>
                                        Others
                                    </h2>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1">View All <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { tag: 'LIFESTYLE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', title: 'Student Spotlights: How Gen Z Maintains Discipline', excerpt: 'We explore deep work habits amidst rising distractions for young scholars.', author: 'Community Voice', date: 'Nov 6, 2023', readTime: '5 min read' },
                                        { tag: 'PODCAST', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', title: 'Alumni Network Show: Episode 5 Released', excerpt: 'Deep conversations linking success trajectories of successful institutional alumni globally.', author: 'Podcast Team', date: 'Oct 20, 2023', readTime: '4 min read' },
                                    ].map((card, i) => (
""" + STANDARDIZED_CARD + """
                                    ))}
                                </div>
                            </section>\n
"""
    text = text[:section_13_start] + new_s13 + text[section_13_end:]

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Unified ALL lists to standardized vertical cards successfully!")
