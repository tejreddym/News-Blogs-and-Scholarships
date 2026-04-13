with open('src/pages/BlogsNews.tsx', 'r') as f:
    text = f.read()

# Locate the exact bounds of the three elements
colleges_idx = text.find('{/* 3. COLLEGES */}')
alerts_idx = text.find('{/* LATEST ALERTS / LIVE EXAM UPDATES */}')
exams_idx = text.find('{/* 4. EXAMS */}')
schools_idx = text.find('{/* 5. SCHOOLS */}')

if -1 in [colleges_idx, alerts_idx, exams_idx, schools_idx]:
    print("Error: Could not find one of the section delimiters.")
    print(colleges_idx, alerts_idx, exams_idx, schools_idx)
    exit(1)

# Extract blocks
colleges_block = text[colleges_idx:alerts_idx]
alerts_block = text[alerts_idx:exams_idx]
exams_block = text[exams_idx:schools_idx]

# Assemble the new swapped text
# Order was: colleges_block + alerts_block + exams_block
# Order becomes: exams_block + alerts_block + colleges_block

new_middle = exams_block + alerts_block + colleges_block
new_text = text[:colleges_idx] + new_middle + text[schools_idx:]

with open('src/pages/BlogsNews.tsx', 'w') as f:
    f.write(new_text)

print("Panels swapped successfully!")
