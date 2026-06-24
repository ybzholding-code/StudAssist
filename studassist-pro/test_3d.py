import os

def patch_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the img className
    old_class = 'className={`rounded-[2rem] w-full h-auto aspect-[3/2] object-cover bg-white ${heroImageClassName || ""}`}'
    new_class = 'className={`relative z-30 w-full h-auto aspect-[3/2] object-contain drop-shadow-xl ${heroImageClassName || ""}`}'
    
    if old_class in content:
        content = content.replace(old_class, new_class)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Patched {filepath}")

patch_file('src/components/ServicePage.tsx')
patch_file('src/components/OrientationLevelPage.tsx')
