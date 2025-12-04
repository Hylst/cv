import { GLOSSARY } from './data.js';

export function processText(text) {
    let processed = text;
    // Sort keys by length descending to avoid replacing substrings of longer terms
    const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

    terms.forEach(term => {
        // Use word boundary to match exact words, case insensitive
        // AND negative lookahead to ensure we are not inside an HTML tag (no closing > before opening <)
        const regex = new RegExp(`\\b${term}\\b(?![^<]*>)`, 'gi');
        processed = processed.replace(regex, (match) => {
            // Escape double quotes in the tooltip text to prevent breaking the HTML attribute
            const tooltipText = GLOSSARY[term].replace(/"/g, '&quot;');
            return `<span class="tooltip" data-tooltip="${tooltipText}" tabindex="0">${match}</span>`;
        });
    });
    return processed;
}

export function activateRetroMode() {
    document.body.classList.toggle('retro-mode');
    const isRetro = document.body.classList.contains('retro-mode');

    if (isRetro) {
        alert('🕹️ MODE RETRO ACTIVÉ ! 🕹️\nBienvenue dans la matrice...');
    } else {
        alert('Mode normal rétabli.');
    }
}
