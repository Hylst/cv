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

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particles
    if (document.getElementById('hero-canvas')) {
        new ParticleNetwork('hero-canvas');
    }

    // Render Content
    renderSkills(SKILLS_DATA);
    renderProjects(PROJECTS_DATA);
    renderDocuments(CERTIFICATIONS_DATA, 'certifications-list', 'pdf/certifications/');
    renderDocuments(DIPLOMAS_DATA, 'diplomas-list', 'pdf/diplômes/');

    // Setup UI Interactions
    setupTimelineView(TIMELINE_DATA);
    setupThemeToggle();
    setupModalListeners();
    setupScrollReveal();

    // Easter Egg: Click on photo 5 times
    const photo = document.querySelector('.profile-photo');
    let clickCount = 0;
    if (photo) {
        photo.style.cursor = 'pointer';
        photo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                activateRetroMode();
                clickCount = 0;
            }
            // Reset count after 2 seconds of inactivity
            setTimeout(() => clickCount = 0, 2000);
        });
    }

    // Spotlight Effect
    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    // Add spotlight element
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    document.body.appendChild(spotlight);
});
