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

// Certains visiteurs demandent explicitement moins d'animations : migraines,
// vertiges, troubles de l'attention. Sur un CV qui revendique l'accessibilite
// et la neurodiversite, ce reglage n'est pas une option decorative.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Quand le DOM est pret, on lance la quete principale
document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------------------
    // PHASE 1: Invocation du Reseau de Particules
    // On cree un effet visuel digne d'un portail dimensionnel
    // (sauf si l'utilisateur a demande le calme : on ne lance meme pas la boucle)
    // -------------------------------------------------------------------------
    if (!prefersReducedMotion && document.getElementById('hero-canvas')) {
        new ParticleNetwork('hero-canvas');
    }

    // -------------------------------------------------------------------------
    // PHASE 2: Materialisation du Contenu
    // On rend visible tout le contenu comme un sort de Revelation
    // -------------------------------------------------------------------------
    try {
        renderSkills(SKILLS_DATA);
        console.log('Skills rendered');
    } catch (e) {
        console.error('Error rendering skills:', e);
    }
    try {
        renderProjects(PROJECTS_DATA);
        console.log('Projects rendered');
    } catch (e) {
        console.error('Error rendering projects:', e);
    }
    try {
        renderDocuments(CERTIFICATIONS_DATA, 'certifications-list', 'pdf/certifications/');
        console.log('Certifications rendered');
    } catch (e) {
        console.error('Error rendering certifications:', e);
    }
    try {
        renderDocuments(DIPLOMAS_DATA, 'diplomas-list', 'pdf/diplômes/');
        console.log('Diplomas rendered');
    } catch (e) {
        console.error('Error rendering diplomas:', e);
    }

    // -------------------------------------------------------------------------
    // PHASE 3: Enchantements Interactifs
    // On ajoute les interactions - chaque clic est un jet de des
    // -------------------------------------------------------------------------
    try {
        setupTimelineView(TIMELINE_DATA);
        console.log('Timeline rendered');
    } catch (e) {
        console.error('Error rendering timeline:', e);
    }
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
    // IMPRESSION: Le Sort de Revelation Totale
    //
    // Tout le contenu du CV vit dans des <details>. Un <details> ferme n'est pas
    // seulement masque : le navigateur ne le rend pas du tout, et aucune regle
    // CSS ne peut le forcer. A l'impression, les deux tiers du document
    // disparaissaient donc silencieusement -- alors que la page promet un
    // "export PDF propre".
    //
    // On ouvre tout avant l'impression, et on restaure exactement l'etat
    // precedent apres : le visiteur retrouve sa page telle qu'il l'avait pliee.
    // -------------------------------------------------------------------------
    let detailsOuvertsParImpression = [];
    let impressionEnCours = false;

    const ouvrirToutPourImpression = () => {
        // Chrome declenche a la fois 'beforeprint' ET le changement de
        // matchMedia('print'). Sans ce garde-fou, le second appel ecrasait la
        // liste memorisee par un tableau vide (plus aucun details ferme a
        // trouver), et la page restait entierement depliee apres impression.
        if (impressionEnCours) return;
        impressionEnCours = true;

        detailsOuvertsParImpression = [];
        document.querySelectorAll('details:not([open])').forEach(d => {
            detailsOuvertsParImpression.push(d);
            d.open = true;
        });
    };

    const restaurerApresImpression = () => {
        if (!impressionEnCours) return;
        detailsOuvertsParImpression.forEach(d => { d.open = false; });
        detailsOuvertsParImpression = [];
        impressionEnCours = false;
    };

    window.addEventListener('beforeprint', ouvrirToutPourImpression);
    window.addEventListener('afterprint', restaurerApresImpression);

    // Safari et quelques navigateurs mobiles ignorent beforeprint/afterprint,
    // mais exposent l'impression via matchMedia('print').
    const mediaImpression = window.matchMedia('print');
    if (mediaImpression.addEventListener) {
        mediaImpression.addEventListener('change', (e) => {
            if (e.matches) ouvrirToutPourImpression();
            else restaurerApresImpression();
        });
    }

    // -------------------------------------------------------------------------
    // EFFET SPOTLIGHT: La Lampe du Mineur
    // Suit la souris comme un compagnon fidele (ou un stalker bienveillant).
    // Deux precautions : on ne l'active pas en mode "mouvement reduit", et on
    // synchronise l'ecriture des variables CSS avec le rafraichissement ecran
    // (sans ca, on repeint a chaque pixel parcouru par la souris).
    // -------------------------------------------------------------------------
    if (!prefersReducedMotion) {
        let pending = false;
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (pending) return;
            pending = true;
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
                document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
                pending = false;
            });
        }, { passive: true });

        // On materialise le spotlight dans le DOM - Fiat Lux!
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        document.body.appendChild(spotlight);
    }
});
