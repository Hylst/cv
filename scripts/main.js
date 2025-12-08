/**
 * =============================================================================
 * MAIN.JS - Le Grimoire Principal
 * =============================================================================
 * Point d'entree de l'application. Ici on invoque tous les modules comme un
 * mage invoque ses familiers. Chaque import est un sort qui donne vie au CV.
 * 
 * Auteur: Geoffroy Streit (un dev qui a trop joue a Baldur's Gate)
 * =============================================================================
 */

import { ParticleNetwork } from './particles.js';
import { SKILLS_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA, DIPLOMAS_DATA, TIMELINE_DATA } from './data.js';
import { activateRetroMode } from './utils.js';
import {
    renderSkills,
    renderProjects,
    renderDocuments,
    setupTimelineView,
    setupThemeToggle,
    setupModalListeners,
    setupScrollReveal
} from './ui.js';

// Quand le DOM est pret, on lance la quete principale
document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------------------
    // PHASE 1: Invocation du Reseau de Particules
    // On cree un effet visuel digne d'un portail dimensionnel
    // -------------------------------------------------------------------------
    if (document.getElementById('hero-canvas')) {
        new ParticleNetwork('hero-canvas');
    }

    // -------------------------------------------------------------------------
    // PHASE 2: Materialisation du Contenu
    // On rend visible tout le contenu comme un sort de Revelation
    // -------------------------------------------------------------------------
    renderSkills(SKILLS_DATA);
    renderProjects(PROJECTS_DATA);
    renderDocuments(CERTIFICATIONS_DATA, 'certifications-list', 'pdf/certifications/');
    renderDocuments(DIPLOMAS_DATA, 'diplomas-list', 'pdf/diplômes/');

    // -------------------------------------------------------------------------
    // PHASE 3: Enchantements Interactifs
    // On ajoute les interactions - chaque clic est un jet de des
    // -------------------------------------------------------------------------
    setupTimelineView(TIMELINE_DATA);
    setupThemeToggle();
    setupModalListeners();
    setupScrollReveal();

    // -------------------------------------------------------------------------
    // EASTER EGG: Le Code Konami du Pauvre
    // 5 clics sur la photo = Mode Retro (attention, effet secondaire garanti)
    // C'est comme trouver un passage secret dans un donjon
    // -------------------------------------------------------------------------
    const photo = document.querySelector('.profile-photo');
    let clickCount = 0;
    if (photo) {
        photo.style.cursor = 'pointer';
        photo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                // Achievement Unlocked: You found the Matrix!
                activateRetroMode();
                clickCount = 0;
            }
            // Reset du compteur apres 2 sec - comme un combo qui expire
            setTimeout(() => clickCount = 0, 2000);
        });
    }

    // -------------------------------------------------------------------------
    // EFFET SPOTLIGHT: La Lampe du Mineur
    // Suit la souris comme un compagnon fidele (ou un stalker bienveillant)
    // -------------------------------------------------------------------------
    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    // On materialise le spotlight dans le DOM - Fiat Lux!
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    document.body.appendChild(spotlight);
});
