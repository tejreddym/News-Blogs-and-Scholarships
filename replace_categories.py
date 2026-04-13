import re

with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

old_options = """<option value="" disabled selected>Categories</option>
                                    <option value="news">News Updates</option>
                                    <option value="articles">Articles</option>
                                    <option value="features">Features</option>"""

new_options = """<option value="" disabled selected>Categories</option>
                                    <option value="Colleges">Colleges</option>
                                    <option value="Exams">Exams</option>
                                    <option value="Schools">Schools</option>
                                    <option value="Scholarships">Scholarships</option>
                                    <option value="Courses">Courses</option>
                                    <option value="Careers">Careers</option>
                                    <option value="Startup and Innovation">Startup and Innovation</option>
                                    <option value="Study Abroad">Study Abroad</option>
                                    <option value="Featured News">Featured News/Articles for Partner Universities</option>
                                    <option value="Policies">Policies</option>
                                    <option value="Others">Others</option>"""

text = text.replace(old_options, new_options)

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(text)

print("Categories updated successfully.")
