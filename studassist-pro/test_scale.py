import os

def patch_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'heroImagePosition="top"' in line or 'heroImagePosition="bottom"' in line:
            # Check if it uses a -new.png or -general.png
            if 'heroImagePosition="top"' in line:
                indent = line[:len(line) - len(line.lstrip())]
                lines.insert(i + 1, indent + 'heroImageClassName="scale-[1.25] -translate-y-4 hover:scale-[1.3] transition-transform duration-700"')
                break
            elif 'heroImagePosition="bottom"' in line:
                indent = line[:len(line) - len(line.lstrip())]
                lines.insert(i + 1, indent + 'heroImageClassName="scale-[1.15] translate-y-4 hover:scale-[1.2] transition-transform duration-700"')
                break
                
    new_content = '\n'.join(lines)
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Patched {filepath}")

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            patch_file(os.path.join(root, file))
