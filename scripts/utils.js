/**
 * =============================================================================
 * UTILS.JS - La Boite a Outils du Magicien
 * =============================================================================
 * Fonctions utilitaires comme des potions dans un inventaire.
 * Chaque fonction est un sort pret a l'emploi.
 * 
 * Auteur: Geoffroy Streit (alchimiste du code qui transforme le texte en or)
 * =============================================================================
 */

import { GLOSSARY } from './data.js';

/**
 * processText - Le Sort de Tooltipification
 * 
 * Prend du texte brut et le transforme en texte enrichi avec des tooltips.
 * C'est comme ajouter des notes de bas de page, mais en plus classe.
 * Fonctionne comme un sort de Detection de la Magie sur le texte.
 * 
 * @param {string} text - Le texte a ensorceler
 * @returns {string} - Le texte avec des tooltips comme des runes brillantes
 */
export function processText(text) {
    let processed = text;

    // On trie les termes du plus long au plus court
    // Sinon "Python" pourrait matcher avant "Python Django" - pas cool
    const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

    terms.forEach(term => {
        // Regex magique: on cherche le mot exact, pas dans les balises HTML
        // C'est comme chercher un mot dans un livre mais pas dans les notes de marge
        const regex = new RegExp(`\\b${term}\\b(?![^<]*>)`, 'gi');
        processed = processed.replace(regex, (match) => {
            // On echappe les guillemets - la securite avant tout, jeune padawan
            const tooltipText = GLOSSARY[term].replace(/"/g, '&quot;');
            return `<span class="tooltip" data-tooltip="${tooltipText}" tabindex="0">${match}</span>`;
        });
    });
    return processed;
}

/**
 * activateRetroMode - Le Portail vers la Matrice
 * 
 * Active/desactive le mode retro. C'est comme passer en mode Terminator
 * mais avec du vert Matrix au lieu du rouge Skynet.
 * Easter egg cache pour les vrais nerds qui cliquent partout.
 */
export function activateRetroMode() {
    document.body.classList.toggle('retro-mode');
    const isRetro = document.body.classList.contains('retro-mode');

    if (isRetro) {
        // Bienvenue dans le terrier du lapin blanc, Neo
        alert('🕹️ MODE RETRO ACTIVE ! 🕹️\nBienvenue dans la matrice...');
    } else {
        // Retour a la realite, les pilules bleues c\'est par la
        alert('Mode normal retabli.');
    }
}
