import os

def fix_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    
    skip_next = False
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
            
        if 'heroImagePosition=' in line or 'heroImageClassName=' in line:
            continue
            
        if 'heroImage=' in line:
            new_lines.append(line)
            indent = line[:len(line) - len(line.lstrip())]
            
            if '-new.png' in line or 'soutien-college' in line or 'soutien-lycee' in line or 'soutien-stages' in line:
                # Portrait images: cover and top (half body is enough)
                new_lines.append(indent + 'heroImageClassName="!object-cover"')
                new_lines.append(indent + 'heroImagePosition="top"')
            elif 'general.png' in line:
                # Landscape with bubbles at top: scale down more so rounded corners don't cut bubbles
                new_lines.append(indent + 'heroImageClassName="scale-[0.88] translate-y-2"')
                new_lines.append(indent + 'heroImagePosition="bottom"')
            else:
                pass # Master and Reorientation are perfect
        else:
            new_lines.append(line)
            
    new_content = '\n'.join(new_lines)
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            fix_page(os.path.join(root, file))
