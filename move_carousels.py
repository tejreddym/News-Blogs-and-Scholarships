with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# I will find the NEW TOP CAROUSELS block
# It starts at: {/* NEW TOP CAROUSELS */}
# It ends right before: {/* Main Content Area */}

top_carousels_start = text.find('{/* NEW TOP CAROUSELS */}')
main_content_start = text.find('{/* Main Content Area */}')

if top_carousels_start != -1 and main_content_start != -1:
    top_block = text[top_carousels_start:main_content_start]
    
    # We strip out the outer wrapper `<div className="lg:col-span-12 mb-4 space-y-12">`
    # We find the two `{(activeFilter === ...)}` blocks.
    news_carousel_start = top_block.find("{(activeFilter === 'ALL' || activeFilter === 'NEWS') && (")
    blogs_carousel_start = top_block.find("{(activeFilter === 'ALL' || activeFilter === 'BLOGS') && (")
    blogs_carousel_end = top_block.rfind(")}\n") + 3
    
    news_carousel_block = top_block[news_carousel_start:blogs_carousel_start]
    blogs_carousel_block = top_block[blogs_carousel_start:blogs_carousel_end]
    
    # Now we delete the entire top_block from the text
    text = text[:top_carousels_start] + text[main_content_start:]
    
    # Let's cleanly format the blocks to insert them directly into the sections
    news_carousel_block_styled = news_carousel_block.replace(
        '{(activeFilter === \'ALL\' || activeFilter === \'NEWS\') && (', ''
    ).rsplit(')}', 1)[0].strip() + '\n                                    <br/>' # Just to remove the conditional since it's already inside a conditional wrapper below!
    
    blogs_carousel_block_styled = blogs_carousel_block.replace(
        '{(activeFilter === \'ALL\' || activeFilter === \'BLOGS\') && (', ''
    ).rsplit(')}', 1)[0].strip() + '\n                                    <br/>'

    # 1. Insert into LATEST NEWS
    # target: {/* 1. LATEST NEWS */} \n <section> \n ... </h2> \n </div> \n
    news_target = '<span className="w-1.5 h-6 bg-accent-green rounded-full"></span>\n                                            Latest News\n                                        </h2>\n                                        \n                                    </div>'
    
    text = text.replace(news_target, news_target + '\n\n                                    {/* 8/4 Split Layout Carousel */}\n                                    ' + news_carousel_block_styled + '\n')
    
    # 2. Insert into LATEST BLOGS
    # target: {/* 2. LATEST BLOGS */}
    blogs_target = '<span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>\n                                            Latest Blogs\n                                        </h2>\n                                        \n                                    </div>'
    
    text = text.replace(blogs_target, blogs_target + '\n\n                                    {/* 8/4 Split Layout Carousel */}\n                                    ' + blogs_carousel_block_styled + '\n')
    
    # Write it back out
    with open('src/pages/BlogsNews.tsx', 'w') as f:
        f.write(text)
    
    print("Migrated successfully.")
else:
    print("Could not find delimiters.")
