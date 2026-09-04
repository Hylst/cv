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
/**
 * renderSkillItems - La liste de tags d'une (sous-)section de competences
 *
 * Commune aux categories avec sous-sections (ex: "Front-End", "Back-End")
 * et aux categories simples - seul le conteneur autour differe.
 */
function renderSkillItems(items) {
    return `
        <div class="skill-items-list">
            ${items.map(item => `
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
        // Structure avec sous-sections (comme les specs dans WoW) ou simple
        // (comme une liste d'inventaire) : seul le regroupement change.
        const content = category.sections
            ? category.sections.map(section => `
                <div class="skill-section">
                    <h4 class="skill-section-title">${section.title}</h4>
                    ${renderSkillItems(section.items)}
                </div>
            `).join('')
            : renderSkillItems(category.items);

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

    // Mots-cles par filtre. On compare des tags ENTIERS et non des sous-chaines :
    // l'ancienne version testait t.includes('ia'), donc le tag "Social" tombait
    // dans le filtre "IA" ("soc-IA-l"), et "Graphisme" aurait suivi le meme sort.
    const FILTRES = {
        python: ['python', 'data', 'scikit', 'fastapi', 'pandas', 'sqlalchemy', 'machine learning'],
        web: ['web dev', 'web', 'html', 'css', 'react', 'javascript', 'js', 'typescript', 'pwa',
            'three.js', 'next.js', 'node.js', 'websockets', 'game dev', 'webmastering', 'accessibilité'],
        ia: ['ia', 'ia générative', 'llm', 'gpt', 'rag', 'automatisation', 'cognitive science',
            'edtech', 'app'],
        hardware: ['hardware', 'électronique', 'optique', 'laser', 'arduino', 'robotique', 'c', 'c++',
            'asm', 'holographie', 'chimie', 'vr', 'ihm', 'recherche', 'sécurité']
    };

    const correspond = (projet, cles) =>
        projet.tech.some(t => cles.includes(t.trim().toLowerCase()));

    let filtered = projects;
    if (filter === 'autres') {
        // Categorie de recuperation, calculee et non declaree : tout projet
        // qu'aucun filtre technique ne retient reste accessible. Aucun projet
        // ne peut donc disparaitre silencieusement de la navigation.
        filtered = projects.filter(p =>
            !Object.values(FILTRES).some(cles => correspond(p, cles))
        );
    } else if (filter !== 'all') {
        filtered = projects.filter(p => correspond(p, FILTRES[filter] || []));
    }

    // Un filtre qui ne renvoie rien doit le dire, pas afficher une grille vide
    if (filtered.length === 0) {
        container.innerHTML = `
            <p class="section-notice">Aucun projet dans cette catégorie pour le moment.</p>
        `;
        return;
    }

    // Template pour chaque carte projet - comme une fiche de monstre.
    // L'image est purement decorative (alt vide) : le titre juste en dessous
    // dit deja de quoi il s'agit, inutile de le faire repeter par le lecteur d'ecran.
    const renderCard = (project) => `
        <article class="project-card reveal" data-id="${project.id}" role="button" tabindex="0"
                 aria-label="${project.title} — ouvrir le détail">
            <div class="project-image">
                <img src="${project.image}" alt="" loading="lazy" decoding="async" width="800" height="400">
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

    // Activation clavier ET souris, sans handler inline (une CSP stricte les
    // interdirait). Espace autant qu'Entree : c'est ce qu'attend un vrai bouton.
    container.querySelectorAll('.project-card').forEach(card => {
        const open = () => window.openModal(card.dataset.id);
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault(); // sinon Espace fait defiler la page
                open();
            }
        });
    });

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
 * renderDocLink - Le lien (ou les deux liens) d'un document
 *
 * Un document a 4 combinaisons possibles link/file (lien externe seul, PDF
 * seul, les deux, ou ni l'un ni l'autre - juste un nom affiche). Isole ici
 * pour ne plus dupliquer cette logique entre le rendu categorise et le plat.
 *
 * @param {Object} item - { name, link?, file? }
 * @param {string} basePath - Le chemin de base pour les PDFs
 */
function renderDocLink(item, basePath) {
    if (item.link && item.file) {
        return `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a><a href="${basePath}${item.file}" target="_blank" class="doc-link-icon" title="Télécharger PDF"><i class="fas fa-file-pdf"></i></a>`;
    }
    if (item.link) {
        return `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a>`;
    }
    if (item.file) {
        return `<a href="${basePath}${item.file}" target="_blank" class="doc-link"><i class="fas fa-file-pdf"></i> ${item.name}</a>`;
    }
    return `<span class="doc-link">${item.name}</span>`;
}

/**
 * renderDocList - La liste <ul> de documents, commune aux deux formats
 */
function renderDocList(items, basePath) {
    return `
        <ul class="doc-list">
            ${items.map(item => `
                <li>
                    <div class="doc-links">${renderDocLink(item, basePath)}</div>
                </li>
            `).join('')}
        </ul>
    `;
}

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

    // Detection du format: categorise (avec sous-sections) ou plat
    const isCategorized = data.length > 0 && data[0].category;

    container.innerHTML = isCategorized
        // Format categorise - comme les chapitres d'un livre
        ? data.map(cat => `
            <details class="collapsible-card">
                <summary><h3>${cat.category}</h3></summary>
                <div class="collapsible-content">${renderDocList(cat.items, basePath)}</div>
            </details>
        `).join('')
        // Format plat - une liste simple comme un inventaire
        : `<div class="collapsible-card" style="padding: 1.5rem;">${renderDocList(data, basePath)}</div>`;
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

    /**
     * applyTheme - Applique un theme et synchronise l'etat accessible du bouton.
     * Le bouton est un interrupteur : aria-pressed dit s'il est enclenche,
     * aria-label dit ce que fera le prochain clic. Sans ca, un lecteur d'ecran
     * annonce une lune ou un soleil, ce qui ne veut rien dire.
     */
    const applyTheme = (theme) => {
        const isDark = theme === 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        btn.textContent = isDark ? '☀️' : '🌙';
        btn.setAttribute('aria-pressed', String(isDark));
        btn.setAttribute('aria-label', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');
    };

    // Choix initial : la preference enregistree l'emporte, sinon on suit le
    // reglage du systeme d'exploitation (et non un mode sombre impose).
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored || (prefersDark ? 'dark' : 'light'));

    // On branche l'evenement click
    btn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        announce(newTheme === 'dark' ? 'Mode sombre activé.' : 'Mode clair activé.');
    });

    // Si l'utilisateur n'a jamais choisi, on suit les changements systeme a la volee
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
    });
}

/**
 * announce - Le Heraut Discret
 *
 * Envoie un message dans la zone aria-live pour les lecteurs d'ecran.
 * Utile quand une action change l'etat de la page sans deplacer le focus.
 *
 * @param {string} message - Ce qu'il faut annoncer
 */
export function announce(message) {
    const region = document.getElementById('live-region');
    if (!region) return;
    region.textContent = '';
    // Un reflow force la re-annonce meme si le texte est identique
    void region.offsetWidth;
    region.textContent = message;
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
// Element qui avait le focus avant l'ouverture : on doit le lui rendre a la
// fermeture, sinon l'utilisateur au clavier est renvoye en haut de la page.
let lastFocusedElement = null;

/**
 * closeModal - Le Sort de Renvoi
 * Ferme la modale et restitue le focus a son point de depart.
 */
export function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer || !modalContainer.classList.contains('active')) return;

    modalContainer.classList.remove('active');
    modalContainer.setAttribute('aria-hidden', 'true');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
    }
    lastFocusedElement = null;
}

export function setupModalListeners() {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;

    // Boutons de fermeture - le X classique et le clic sur le fond
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (!modalContainer.classList.contains('active')) return;

        // Touche Echap - la touche universelle de "laisse-moi tranquille"
        if (e.key === 'Escape') {
            closeModal();
            return;
        }

        // Piege a focus : tant que la modale est ouverte, Tab tourne en boucle
        // a l'interieur. Sans ca, on tabule derriere la modale sans le voir.
        if (e.key !== 'Tab') return;

        const focusables = modalContainer.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
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

    // Un lien reel ou rien : un bouton "Voir le projet" qui pointe vers "#"
    // fait plus de degats que pas de bouton du tout.
    const hasLink = project.link && project.link !== '#';

    // On remplit la modale avec les infos du projet
    modalBody.innerHTML = `
        <h2 id="modal-title">${project.title}</h2>
        <img src="${project.image}" alt="" loading="lazy" style="width:100%; max-height:300px; object-fit:cover; margin-bottom:1rem; border-radius:8px;">
        <p><strong>Statut :</strong> ${project.status}</p>
        <p>${processText(project.description)}</p>
        <div style="margin: 1rem 0;">
            <strong>Technologies :</strong>
            <div class="skill-tags" style="margin-top:0.5rem;">
                ${project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
        </div>
        ${hasLink
            ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Voir le projet <i class="fas fa-external-link-alt"></i></a>`
            : `<p class="modal-no-link"><i class="fas fa-lock"></i> Pas de lien public pour ce projet.</p>`}
    `;

    // On memorise d'ou l'on vient pour y revenir a la fermeture
    lastFocusedElement = document.activeElement;

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
