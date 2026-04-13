with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

target = "{/* 3. COLLEGES */}"

web_stories = """
                            {/* VISUAL STORIES / WEB STORIES */}
                            <section className="mb-12 border-y border-gray-100 py-8 bg-gray-50/50 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:border-0 sm:py-0">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
                                        Visual Stories
                                    </h2>
                                    <button className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors">See All Stories</button>
                                </div>
                                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
                                    {[
                                        { title: '7 Tips for Last Minute JEE Preparation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', time: '2h ago', color: 'bg-accent-green' },
                                        { title: 'Top 5 Scholarships in UK 2024 to Apply', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', time: '5h ago', color: 'bg-brand-blue' },
                                        { title: 'Campus Tour: A look inside IIT Delhi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp1tX0owh7m5KJp6sLZ8yCT1yMrSol9dX6MUWDVV_wBUyUCyN-yBtHc6zTFzWi_3p6dQiC2aG8_RC-i4MZIbmbUaZwo4l3pc-DR4ohjWNVCrMW3tU8iKyV9VhZThEBPdBZ9LXQwZxBJAX9pKJ0P_m4qeW1GRWy13t39FiBZs2FQ8baOwOQkizdDgtkGrk6UI98woN8B0vvwWsZnehrOQDA1NBKP28-BUe9DQ57rtmrCXP1EMxGde9RgkZU0BKkc10SnyHWbsl17BG', time: '1d ago', color: 'bg-motivational-orange' },
                                        { title: 'The Secret Life of an IIM Classroom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkukfnEQdIFzWXXO47GNsqWcObHkqOkQVnIR61FJHCWHV4SAxJjAeRhar11LI9GBYgZNM4empQ7f-IKoQL5dUYWNM-Nwurcaz_3933OfZSqGe3MtWv6aOzbCrynTnWWRmawcdTQQisH3bZsUjU77zA-8B8T5y9HP1oWT11sdgQ_ohfOWWO02CJC13h3eZKHbneZ01NU7UG9T_-gTbzf5a3N-_NWD67nDDlD_eQEMFz5LzpSgRl2zc9C6hQfljDwN9wgUvbu22xmFal', time: '1d ago', color: 'bg-urgent-red' },
                                        { title: 'How to build your Resume from scratch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkCUoVaJu-h4WCJLUxjwG413Vzp_LRDgyRBAIrLt8t8cU6V6I7QCt9Y9l2pgt1v5R6oYKitMLgv7vcEDOfb7pTTfzeACEUEjVMeKzb9F4vbl7ZVJrOVtqyndCIXmyg7qkxN66ZWkEmX_67lWokGc8RYlB1dMGk1u-JMJ0tAyuUd4xYbiJn513fhOkuqoDMqgwBu2261Ag3bhIGdq0qR8D-JnjDjCo8E8iIU5iZqFJrRxM7lD6jZnrhDEluo47eiTegwDTEo7kPiMB', time: '2d ago', color: 'bg-teal-500' },
                                        { title: 'The Future of AI in Modern Education', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVnxGmnKEhqcUKnKw7zIB7Rmuph33GXeXfTSwR6_5wnOwooH5ad0jM3Tq-8zF4PhUoyPoVTBGaGGdJGlB_nN7ggjz_i9AjI9evtpWPwuGyIXVGxRenXS6QPaXSDgr6IXeIsj4qTlNmQTl3AtBETZjzaFtj4H-F2Mi0VwcO8oBF2XhuekPuATdLD_3N471vt1wedLcThg5WojMOfPBRFN6gwM3pXm1zim9c_MQrckZmDfPZKJBxzJWgC4h0ibmFiZx83pko99TclTTP', time: '2d ago', color: 'bg-creativity-purple' },
                                    ].map((story, i) => (
                                        <div key={i} className={`flex-shrink-0 w-40 sm:w-48 h-64 sm:h-[340px] cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start ring-2 ring-transparent hover:ring-opacity-50 ring-offset-2 ${story.color.replace('bg-', 'hover:ring-')}`}>
                                            <img alt={story.title} src={story.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
                                                <div className="flex items-center gap-1.5 mb-2">
                                                    <span className={`w-2 h-2 rounded-full ${story.color}`}></span>
                                                    <span className="text-[10px] text-white/90 font-bold tracking-wider uppercase">{story.time}</span>
                                                </div>
                                                <h3 className="text-white text-sm sm:text-lg font-bold leading-tight line-clamp-3 group-hover:text-amber-300 transition-colors">{story.title}</h3>
                                            </div>
                                            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/20 group-hover:bg-brand-blue transition-colors">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            
                                            {/* Story Progress Bars Placeholder */}
                                            <div className="absolute top-2 left-2 right-2 flex gap-1 z-10">
                                                <div className="h-1 bg-white/40 rounded-full w-full overflow-hidden">
                                                    <div className={`h-full ${story.color} w-1/3 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                                </div>
                                                <div className="h-1 bg-white/40 rounded-full w-full"></div>
                                                <div className="h-1 bg-white/40 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

"""

if target in text:
    text = text.replace(target, web_stories + target)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Visual Stories added.")
