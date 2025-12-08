/**
 * =============================================================================
 * UI.JS - L'Interface du Heros
 * =============================================================================
 * Module responsable de tout l'affichage dynamique.
 * C'est ici que les donnees deviennent pixels, comme la magie devient realite.
 * Chaque fonction est un enchantement qui transforme le DOM.
 * 
 * Auteur: Geoffroy Streit (barde du code qui chante les exploits en HTML)
 * =============================================================================
 */

import { processText, activateRetroMode } from './utils.js';

/**
 * =============================================================================
 * SECTION COMPETENCES - L'Arbre de Talents
 * =============================================================================
 */

/**
 * renderSkills - Materialisation de l'Arbre de Competences
 * 
 * Comme dans tout bon RPG, on affiche les skills du personnage.
 * Chaque categorie est une branche, chaque competence une feuille.
 * 
 * @param {Array} skills - Le bestiaire des competences
 */
export function renderSkills(skills) {
    const container = document.getElementById('skills-list');
    if (!container) return; // Pas de container, pas de quete

    // La legende, indispensable comme un tuto dans un jeu From Software
    const legendHtml = `
        <div class="skills-legend">
            <span style="font-size:0.9em; opacity:0.8"><em>Légende : * Bases | ** Notions</em></span>
        </div>
    `;

    // On genere le HTML pour chaque categorie - template literals FTW
    const skillsHtml = skills.map(category => {
        let content = '';

        // Structure avec sous-sections (comme les specs dans WoW)
        if (category.sections) {
            content = category.sections.map(section => `
                <div class="skill-section">
                    <h4 class="skill-section-title">${section.title}</h4>
                    <div class="skill-items-list">
                        ${section.items.map(item => `
                            <div class="skill-item">
                                <span class="skill-tag status-${item.status}" tabindex="0">
                                    ${item.name}
                                </span>
                                ${item.desc ? `<p class="skill-desc">${item.desc}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            // Structure simple (comme une liste d'inventaire)
            content = `
                <div class="skill-items-list">
                    ${category.items.map(item => `
                        <div class="skill-item">
                            <span class="skill-tag status-${item.status}" tabindex="0">
                                ${item.name}
                            </span>
                            ${item.desc ? `<p class="skill-desc">${item.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Chaque categorie est pliable comme un parchemin antique
        return `
        <details class="skill-category">
            <summary><h3><i class="icon-${category.icon}"></i> ${category.category}</h3></summary>
            <div class="skill-content">
                ${content}
            </div>
        </details>
        `;
    }).join('');

    container.innerHTML = legendHtml + '<div class="skills-grid">' + skillsHtml + '</div>';

    // On anime les nouveaux elements - spell de revelation
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.skill-category'));
    }
}

/**
 * =============================================================================
 * SECTION PROJETS - Le Hall de la Renommee
 * =============================================================================
 */

/**
 * renderProjects - Affichage du Portfolio Heroique
 * 
 * Presente les projets comme des quetes accomplies.
 * Avec filtres, comme les categories dans un grimoire.
 * 
 * @param {Array} projects - La liste des hauts faits
 */
export function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    if (!container) return;

    const filterBtns = document.querySelectorAll('.filter-btn');

    // On branche les filtres - comme les onglets d'un livre de sorts
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            renderFilteredProjects(projects, filter);
        });
    });

    // Rendu initial - on montre tout le bestiaire
    renderFilteredProjects(projects, 'all');
    window.projectsData = projects; // Export global pour les modales

    // -------------------------------------------------------------------------
    // EASTER EGG NUMERO 2: Le Code Konami (le classique des classiques)
    // Haut Haut Bas Bas Gauche Droite Gauche Droite B A
    // Si tu connais pas, tu as rate ta vie de gamer
    // -------------------------------------------------------------------------
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // 30 vies! (ou mode retro dans notre cas)
                activateRetroMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0; // Combo break!
        }
    });
}

/**
 * renderFilteredProjects - Le Trieur de Quetes
 * 
 * Filtre les projets selon la categorie choisie.
 * C'est comme chercher dans son inventaire par type d'objet.
 */
function renderFilteredProjects(projects, filter) {
    const container = document.getElementById('projects-list');
    if (!container) return;

    let filtered = projects;
    if (filter !== 'all') {
        filtered = projects.filter(p => {
            const tags = p.tech.map(t => t.toLowerCase());

            // Les regles de filtrage - comme les conditions d'une quete
            if (filter === 'python') return tags.some(t => t.includes('python') || t.includes('data') || t.includes('scikit'));
            if (filter === 'web') return tags.some(t => t.includes('web') || t.includes('html') || t.includes('react') || t.includes('js'));
            if (filter === 'ia') return tags.some(t => t.includes('ia') || t.includes('gpt') || t.includes('llm') || t.includes('auto'));
            if (filter === 'hardware') return tags.some(t => t.includes('hardware') || t.includes('optique') || t.includes('laser') || t.includes('arduino'));
            return true;
        });
    }

    // Template pour chaque carte projet - comme une fiche de monstre
    const renderCard = (project) => `
        <article class="project-card reveal" data-id="${project.id}" onclick="openModal('${project.id}')" role="button" tabindex="0" onkeypress="if(event.key === 'Enter') openModal('${project.id}')">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22180%22%20fill%3D%22%23e1e4e8%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20fill%3D%22%23666%22%3EImage%20non%20disponible%3C%2Ftext%3E%3C%2Fsvg%3E'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${processText(project.description)}</p>
                <div class="project-tags">
                    ${project.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
            </div>
        </article>
    `;

    container.innerHTML = `
        <div class="projects-grid-inner" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; width: 100%;">
            ${filtered.map(renderCard).join('')}
        </div>
    `;

    // Animation d'apparition progressive
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.project-card'));
    }
}

/**
 * =============================================================================
 * SECTION DOCUMENTS - La Bibliotheque des Parchemins
 * =============================================================================
 */

/**
 * renderDocuments - Affichage des Certifications et Diplomes
 * 
 * Les preuves ecrites de nos accomplissements.
 * Comme les medailles d'un veteran ou les badges Steam.
 * 
 * @param {Array} data - Les donnees des documents
 * @param {string} containerId - L'ID du conteneur cible
 * @param {string} basePath - Le chemin de base pour les PDFs
 */
export function renderDocuments(data, containerId, basePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    // Detection du format: categorise (avec sous-sections) ou plat
    if (data.length > 0 && data[0].category) {
        // Format categorise - comme les chapitres d'un livre
        html = data.map(cat => `
            <details class="collapsible-card">
                <summary><h3>${cat.category}</h3></summary>
                <div class="collapsible-content">
                    <ul class="doc-list">
                        ${cat.items.map(item => `
                            <li>
                                <div class="doc-links">
                                    ${item.link && item.file ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a><a href="${basePath}${item.file}" target="_blank" class="doc-link-icon" title="Télécharger PDF"><i class="fas fa-file-pdf"></i></a>` : ''}
                                    ${item.link && !item.file ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a>` : ''}
                                    ${!item.link && item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link"><i class="fas fa-file-pdf"></i> ${item.name}</a>` : ''}
                                    ${!item.link && !item.file ? `<span class="doc-link">${item.name}</span>` : ''}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </details>
        `).join('');
    } else {
        // Format plat - une liste simple comme un inventaire
        html = `
            <div class="collapsible-card" style="padding: 1.5rem;">
                <ul class="doc-list">
                    ${data.map(item => `
                        <li>
                            <div class="doc-links">
                                ${item.link && item.file ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a><a href="${basePath}${item.file}" target="_blank" class="doc-link-icon" title="Télécharger PDF"><i class="fas fa-file-pdf"></i></a>` : ''}
                                ${item.link && !item.file ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a>` : ''}
                                ${!item.link && item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link"><i class="fas fa-file-pdf"></i> ${item.name}</a>` : ''}
                                ${!item.link && !item.file ? `<span class="doc-link">${item.name}</span>` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    container.innerHTML = html;
}

/**
 * =============================================================================
 * SECTION TIMELINE - Le Parchemin du Temps
 * =============================================================================
 */

/**
 * setupTimelineView - Configuration de la Vue Chronologique
 * 
 * Permet de basculer entre vue chronologique et categorisee.
 * Comme choisir entre une ligne du temps et des onglets de classe.
 */
export function setupTimelineView(timelineData) {
    const btnChrono = document.getElementById('view-chronological');
    const btnCat = document.getElementById('view-categorical');

    if (!btnChrono || !btnCat) return;

    // Bouton vue chronologique - le temps lineaire, version Interstellar
    btnChrono.addEventListener('click', () => {
        btnChrono.classList.add('active');
        btnCat.classList.remove('active');
        renderTimeline(timelineData, 'chronological');
    });

    // Bouton vue categorisee - trier par type, version Pokedex
    btnCat.addEventListener('click', () => {
        btnCat.classList.add('active');
        btnChrono.classList.remove('active');
        renderTimeline(timelineData, 'categorical');
    });

    // Rendu initial en mode chronologique
    renderTimeline(timelineData, 'chronological');
}

/**
 * renderTimeline - Le Tisseur de Chroniques
 * 
 * Affiche les evenements de la timeline dans le mode choisi.
 */
function renderTimeline(timeline, mode = 'chronological') {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    // Template pour chaque evenement - comme une entree de journal de quete
    const renderCard = (item) => `
        <details class="timeline-card">
            <summary>
                <div class="timeline-header">
                    <span class="timeline-year">${item.year}</span>
                    <div class="timeline-title-group">
                        ${item.logo ? `<img src="${item.logo}" alt="Logo" class="timeline-logo" onerror="this.style.display='none'">` : ''}
                        <h3 class="timeline-title-text">${item.title}</h3>
                        ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="timeline-link-icon" title="Voir Lien"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
            </summary>
            <div class="timeline-content">
                <p>${processText(item.description)}</p>
                ${item.url ? `<div class="timeline-footer"><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">En savoir plus</a></div>` : ''}
            </div>
        </details>
    `;

    if (mode === 'categorical') {
        // Mode categorise - on separe formations et experiences
        const education = timeline.filter(item => item.type === 'education');
        const experience = timeline.filter(item => item.type === 'experience');

        container.innerHTML = `
            <div class="timeline-category-section">
                <h3 class="category-title">Formations</h3>
                ${education.map(renderCard).join('')}
            </div>
            <div class="timeline-category-section">
                <h3 class="category-title">Expériences Professionnelles</h3>
                ${experience.map(renderCard).join('')}
            </div>
        `;
    } else {
        // Mode chronologique - le temps s'ecoule comme la riviere de Heraclite
        container.innerHTML = timeline.map(renderCard).join('');
    }

    // Animation des cartes
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.timeline-card'));
    }
}

/**
 * =============================================================================
 * GESTION DES THEMES - Le Changeur de Dimension
 * =============================================================================
 */

/**
 * setupThemeToggle - Configuration du Basculeur de Theme
 * 
 * Permet de passer du mode clair au mode sombre.
 * Comme passer du Monde Normal au Monde Inverse (Stranger Things vibes).
 */
export function setupThemeToggle() {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;

    // On verifie les preferences systeme - respect du choix utilisateur
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Par defaut on est en mode sombre (parce que c'est plus classe)
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️'; // Emoji soleil pour basculer vers la lumiere
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.textContent = '🌙'; // Emoji lune pour basculer vers les tenebres
    }

    // On branche l'evenement click
    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

/**
 * =============================================================================
 * GESTION DES MODALES - Les Fenetres Magiques
 * =============================================================================
 */

/**
 * setupModalListeners - Configuration des Ecouteurs de Modales
 * 
 * Les modales sont comme des inventaires popup dans les jeux.
 * On peut les fermer avec le bouton X ou la touche Echap (comme tout bon menu).
 */
export function setupModalListeners() {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;

    const closeBtns = document.querySelectorAll('[data-close-modal]');

    // Boutons de fermeture - le X classique
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalContainer.classList.remove('active');
            modalContainer.setAttribute('aria-hidden', 'true');
        });
    });

    // Touche Echap - la touche universelle de "laisse-moi tranquille"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalContainer.classList.remove('active');
            modalContainer.setAttribute('aria-hidden', 'true');
        }
    });
}

/**
 * openModal - Ouverture de la Modale Projet
 * 
 * Fonction globale pour ouvrir une modale avec les details d'un projet.
 * C'est comme consulter la page wiki d'un boss avant de l'affronter.
 */
window.openModal = function (projectId) {
    const project = window.projectsData.find(p => p.id === projectId);
    if (!project) return; // Projet introuvable, 404 heroique

    const modalBody = document.getElementById('modal-body');
    const modalContainer = document.getElementById('modal-container');

    // On remplit la modale avec les infos du projet
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:300px; object-fit:cover; margin-bottom:1rem; border-radius:8px;" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22180%22%20fill%3D%22%23e1e4e8%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20fill%3D%22%23666%22%3EImage%20non%20disponible%3C%2Ftext%3E%3C%2Fsvg%3E'">
        <p><strong>Statut:</strong> ${project.status}</p>
        <p>${processText(project.description)}</p>
        <div style="margin: 1rem 0;">
            <strong>Technologies:</strong>
            <div class="skill-tags" style="margin-top:0.5rem;">
                ${project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
        </div>
        <a href="${project.link}" target="_blank" class="btn btn-primary">Voir le projet</a>
    `;

    // On affiche la modale
    modalContainer.classList.add('active');
    modalContainer.setAttribute('aria-hidden', 'false');
    modalContainer.querySelector('.modal-content').focus();
};

/**
 * =============================================================================
 * ANIMATIONS - La Magie du Scroll
 * =============================================================================
 */

// Configuration de l'observateur - les yeux invisibles qui surveillent le scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% visible = on declenche l'animation
};

// L'Observateur - comme le Eye of Sauron mais bienveillant
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // On pourrait unobserve ici, mais on garde la possibilite de re-trigger
        }
    });
}, observerOptions);

/**
 * Fonction globale pour observer les elements
 * Ajoute la classe 'reveal' et commence a surveiller
 */
window.observeElements = (elements) => {
    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
};

/**
 * setupScrollReveal - Initialisation des Animations au Scroll
 * 
 * Configure les elements statiques pour qu'ils apparaissent progressivement.
 * Comme les objets qui se materialisent quand on s'approche dans un jeu.
 */
export function setupScrollReveal() {
    // On observe les elements statiques qui existent deja dans le HTML
    const staticElements = document.querySelectorAll('.section, .timeline-item, .interest-card');
    window.observeElements(staticElements);
}
