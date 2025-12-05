import { processText, activateRetroMode } from './utils.js';

export function renderSkills(skills) {
    const container = document.getElementById('skills-list');
    if (!container) return;

    const legendHtml = `
        <div class="skills-legend">
            <span style="font-size:0.9em; opacity:0.8"><em>Légende : * Bases | ** Notions</em></span>
        </div>
    `;

    const skillsHtml = skills.map(category => {
        let content = '';
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

        return `
        <details class="skill-category" open>
            <summary><h3><i class="icon-${category.icon}"></i> ${category.category}</h3></summary>
            <div class="skill-content">
                ${content}
            </div>
        </details>
        `;
    }).join('');

    container.innerHTML = legendHtml + '<div class="skills-grid">' + skillsHtml + '</div>';

    // Observe newly added skill categories
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.skill-category'));
    }
}

export function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    if (!container) return;

    const filterBtns = document.querySelectorAll('.filter-btn');

    // Setup filter listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const filter = btn.getAttribute('data-filter');
            renderFilteredProjects(projects, filter);
        });
    });

    // Initial render (all)
    renderFilteredProjects(projects, 'all');
    window.projectsData = projects; // Expose for modal

    // Easter Egg: Konami Code (Keep it as secondary option)
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateRetroMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function renderFilteredProjects(projects, filter) {
    const container = document.getElementById('projects-list');
    if (!container) return;

    let filtered = projects;
    if (filter !== 'all') {
        filtered = projects.filter(p => {
            const tags = p.tech.map(t => t.toLowerCase());
            // const title = p.title.toLowerCase(); // Unused

            if (filter === 'python') return tags.some(t => t.includes('python') || t.includes('data') || t.includes('scikit'));
            if (filter === 'web') return tags.some(t => t.includes('web') || t.includes('html') || t.includes('react') || t.includes('js'));
            if (filter === 'ia') return tags.some(t => t.includes('ia') || t.includes('gpt') || t.includes('llm') || t.includes('auto'));
            if (filter === 'hardware') return tags.some(t => t.includes('hardware') || t.includes('optique') || t.includes('laser') || t.includes('arduino'));
            return true;
        });
    }

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

    // Observe new project cards
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.project-card'));
    }
}

export function renderDocuments(data, containerId, basePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    // Check if data is categorized (array of objects with 'category' and 'items') or flat
    if (data.length > 0 && data[0].category) {
        // Categorized
        html = data.map(cat => `
            <details class="collapsible-card">
                <summary><h3>${cat.category}</h3></summary>
                <div class="collapsible-content">
                    <ul class="doc-list">
                        ${cat.items.map(item => `
                            <li>
                                <div class="doc-links">
                                    ${item.link ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a>` : ''}
                                    ${item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link-icon" title="Télécharger PDF"><i class="fas fa-file-pdf"></i></a>` : ''}
                                    ${!item.link && !item.file ? `<span class="doc-link">${item.name}</span>` : ''}
                                    ${!item.link && item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link"><i class="fas fa-file-pdf"></i> ${item.name}</a>` : ''}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </details>
        `).join('');
    } else {
        // Flat list
        html = `
            <div class="collapsible-card" style="padding: 1.5rem;">
                <ul class="doc-list">
                    ${data.map(item => `
                        <li>
                            <div class="doc-links">
                                ${item.link ? `<a href="${item.link}" target="_blank" class="doc-link"><i class="fas fa-external-link-alt"></i> ${item.name}</a>` : ''}
                                ${item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link-icon" title="Télécharger PDF"><i class="fas fa-file-pdf"></i></a>` : ''}
                                ${!item.link && !item.file ? `<span class="doc-link">${item.name}</span>` : ''}
                                ${!item.link && item.file ? `<a href="${basePath}${item.file}" target="_blank" class="doc-link"><i class="fas fa-file-pdf"></i> ${item.name}</a>` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    container.innerHTML = html;
}

export function setupTimelineView(timelineData) {
    const btnChrono = document.getElementById('view-chronological');
    const btnCat = document.getElementById('view-categorical');

    if (!btnChrono || !btnCat) return;

    btnChrono.addEventListener('click', () => {
        btnChrono.classList.add('active');
        btnCat.classList.remove('active');
        renderTimeline(timelineData, 'chronological');
    });

    btnCat.addEventListener('click', () => {
        btnCat.classList.add('active');
        btnChrono.classList.remove('active');
        renderTimeline(timelineData, 'categorical');
    });

    // Initial render
    renderTimeline(timelineData, 'chronological');
}

function renderTimeline(timeline, mode = 'chronological') {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    // Helper to render a single timeline card
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
        container.innerHTML = timeline.map(renderCard).join('');
    }

    // Observe new elements for animation
    if (window.observeElements) {
        window.observeElements(container.querySelectorAll('.timeline-card'));
    }
}

export function setupThemeToggle() {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Default to dark mode if no preference is saved, or if saved as dark
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.textContent = '🌙';
    }

    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

export function setupModalListeners() {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;

    const closeBtns = document.querySelectorAll('[data-close-modal]');

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalContainer.classList.remove('active');
            modalContainer.setAttribute('aria-hidden', 'true');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalContainer.classList.remove('active');
            modalContainer.setAttribute('aria-hidden', 'true');
        }
    });
}

// Global function for inline onclick handlers
window.openModal = function (projectId) {
    const project = window.projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalBody = document.getElementById('modal-body');
    const modalContainer = document.getElementById('modal-container');

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

    modalContainer.classList.add('active');
    modalContainer.setAttribute('aria-hidden', 'false');
    modalContainer.querySelector('.modal-content').focus();
};

// Improved Scroll Reveal using IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

window.observeElements = (elements) => {
    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
};

export function setupScrollReveal() {
    // Observe initial static elements
    const staticElements = document.querySelectorAll('.section, .timeline-item, .interest-card');
    window.observeElements(staticElements);
}
