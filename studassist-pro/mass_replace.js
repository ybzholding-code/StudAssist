const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('/home/kali/code/StudAssist/studassist-pro/src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    content = content.replace(/primaryHref:\s*["']https:\/\/wa\.me\/212669495996["']/g, 'primaryHref: "/contact"');
    content = content.replace(/secondaryHref:\s*["']https:\/\/wa\.me\/212669495996["']/g, 'secondaryHref: "/contact"');
    
    // handle anchor tags
    if (content.includes('href="https://wa.me/212669495996"')) {
        const anchorRegex = /<a[\s\S]*?href="https:\/\/wa\.me\/212669495996"[\s\S]*?<\/a>/g;
        content = content.replace(anchorRegex, (match) => {
            let newMatch = match.replace(/^<a/g, '<Link');
            newMatch = newMatch.replace(/<\/a>$/g, '</Link>');
            newMatch = newMatch.replace(/href="https:\/\/wa\.me\/212669495996"/g, 'to="/contact"');
            newMatch = newMatch.replace(/target="_blank"\s*/g, '');
            newMatch = newMatch.replace(/rel="noopener noreferrer"\s*/g, '');
            return newMatch;
        });
        
        // make sure Link is imported
        if (!content.includes('import { Link }')) {
            if (content.includes("import ")) {
                content = content.replace(/import /, 'import { Link } from "react-router-dom";\nimport ');
            } else {
                content = 'import { Link } from "react-router-dom";\n' + content;
            }
        }
    }
    
    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated", file);
    }
});
