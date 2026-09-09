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
 * Fonctionne comme un sort de Detection de la Magie sur le texte.
 *
 * @param {string} text - Le texte a ensorceler
 * @returns {string} - Le texte avec des tooltips comme des runes brillantes
 */
export function processText(text) {
    let processed = text;

    try {
        // On trie les termes du plus long au plus court
        const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

        const echapper = (s) => s.replace(/[.*+?${}()|[\]\\]/g, '\\$&');

        terms.forEach(term => {
            try {
                // Regex: on cherche le mot exact, pas dans les balises HTML
                const regex = new RegExp(`\\b${echapper(term)}\\b(?![^<]*>)`, 'gi');
                processed = processed.replace(regex, (match) => {
                    const tooltipText = GLOSSARY[term].replace(/"/g, '&quot;');
                    // La bulle visuelle vit dans ::after (CSS), donc les lecteurs
                    // d'ecran ne la voient pas : on double la definition en
                    // aria-label, la synthese vocale lira "terme : definition".
                    return '<span class="tooltip" data-tooltip="' + tooltipText + '" tabindex="0" aria-label="' + match + ' : ' + tooltipText + '">' + match + '</span>';
                });
            } catch (e) {
                console.warn('Error processing term:', term, e);
            }
        });
    } catch (e) {
        console.error('Error in processText:', e);
    }
    return processed;
}

/**
 * activateRetroMode - Le Portail vers la Matrice
 *
 * Active/desactive le mode retro.
 * Easter egg cache pour les vrais nerds qui cliquent partout.
 */
export function activateRetroMode() {
    document.body.classList.toggle('retro-mode');
    const isRetro = document.body.classList.contains('retro-mode');

    showToast(
        isRetro
            ? 'Mode retro active - bienvenue dans la matrice...'
            : 'Mode normal retabli.'
    );
}

/**
 * showToast - Le Parchemin Volant
 *
 * Affiche un message temporaire en bas de l'ecran, puis le fait disparaitre.
 * Annonce aussi le message aux lecteurs d'ecran via role="status".
 *
 * @param {string} message - Le texte a afficher
 * @param {number} duration - Duree d'affichage en millisecondes
 */
export function showToast(message, duration = 3200) {
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('toast-visible'));

    setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => toast.remove(), 400);
    }, duration);
}
