#!/usr/bin/env python3
# Script pour supprimer les BOM sans corrompre les fichiers

import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = ['scripts/main.js', 'scripts/ui.js', 'scripts/particles.js', 'scripts/data.js']

for f in files:
    path = os.path.join(base_dir, f)
    with open(path, 'rb') as file:
        content = file.read()
    # Remove only the BOM at the very beginning
    if content[:3] == b'\xef\xbb\xbf':
        content = content[3:]
        with open(path, 'wb') as file:
            file.write(content)
        print(f + ': BOM removed')
    else:
        print(f + ': No BOM')
