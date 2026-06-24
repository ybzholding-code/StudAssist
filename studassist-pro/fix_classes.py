import os
import glob

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
            
        if 'heroImagePosition=' in line:
            # We will remove old heroImagePosition and heroImageClassName to recreate them cleanly
            continue
        if 'heroImageClassName=' in line:
            continue
            
        if 'heroImage=' in line:
            new_lines.append(line)
            indent = line[:len(line) - len(line.lstrip())]
            
            if '-new.png' in line or 'soutien-college' in line or 'soutien-lycee' in line or 'soutien-stages' in line:
                # Portrait images: use object-contain so they are fully visible
                new_lines.append(indent + 'heroImageClassName="!object-contain"')
            elif 'general.png' in line:
                # Landscape with bubbles at top: scale down slightly so rounded corners don't cut bubbles
                new_lines.append(indent + 'heroImageClassName="scale-[0.96] translate-y-1"')
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
