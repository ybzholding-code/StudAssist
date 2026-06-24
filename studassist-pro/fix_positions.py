import os
import glob

def add_position(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    if 'heroImagePosition="top"' in content or 'heroImagePosition="bottom"' in content:
        return
        
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'heroImage=' in line:
            # Check if it uses a -new.png or -general.png
            if '-new.png' in line or 'soutien-college' in line or 'soutien-lycee' in line or 'soutien-stages' in line:
                indent = line[:len(line) - len(line.lstrip())]
                lines.insert(i + 1, indent + 'heroImagePosition="top"')
                break
            elif 'general.png' in line:
                indent = line[:len(line) - len(line.lstrip())]
                lines.insert(i + 1, indent + 'heroImagePosition="bottom"')
                break
                
    new_content = '\n'.join(lines)
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            add_position(os.path.join(root, file))
