const GLOSSARY = {
    "Python": "Langage de programmation polyvalent, très utilisé en Data Science et Web.",
    "Django": "Framework web Python complet et robuste.",
    "Flask": "Micro-framework web Python léger et flexible.",
    "React": "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives.",
    "Docker": "Plateforme permettant de lancer des applications dans des conteneurs isolés.",
    "API REST": "Interface permettant à des logiciels de communiquer entre eux via le Web.",
    "n8n": "Outil d'automatisation de workflow 'low-code' et open-source.",
    "NLP": "Traitement du Langage Naturel : branche de l'IA traitant le texte et la parole.",
    "Scikit-learn": "Bibliothèque Python populaire pour le Machine Learning.",
    "Pandas": "Bibliothèque Python incontournable pour la manipulation et l'analyse de données.",
    "Optronique": "Domaine technologique alliant l'optique et l'électronique.",
    "Low-code": "Approche de développement nécessitant peu de code manuel.",
    "H5P": "Standard pour créer du contenu interactif HTML5 (quiz, vidéos, etc.).",
    "Moodle": "Plateforme d'apprentissage en ligne (LMS) open-source.",
    "IA générative": "IA capable de créer du contenu (texte, images, code) nouveau.",
    "Data cleaning": "Processus de nettoyage et de préparation des données pour l'analyse.",
    "Architecture MVC": "Modèle-Vue-Contrôleur : motif d'architecture logicielle pour les interfaces graphiques.",
    "UML": "Langage de Modélisation Unifié : langage graphique pour visualiser la conception d'un système.",
    "RAG": "Retrieval-Augmented Generation : technique combinant recherche de documents et génération de texte par IA.",
    "Fine-tuning": "Ajustement d'un modèle pré-entraîné sur des données spécifiques.",
    "Prompt Engineering": "Art d'optimiser les instructions données aux modèles d'IA pour obtenir les meilleurs résultats.",
    "CI/CD": "Intégration Continue / Déploiement Continu : pratiques DevOps pour automatiser le développement.",
    "SSR/SSG": "Server-Side Rendering / Static Site Generation : techniques de rendu web pour optimiser les performances.",
    "GraphQL": "Langage de requête pour les API, alternative à REST.",
    "ETL": "Extract, Transform, Load : processus d'intégration de données.",
    "PWA": "Progressive Web App : application web offrant une expérience proche d'une app native.",
    "TensorFlow": "Framework open-source de Google pour le Machine Learning et le Deep Learning.",
    "PyTorch": "Framework de Deep Learning développé par Meta/Facebook.",
    "Keras": "API haut niveau pour le Deep Learning, intégrée à TensorFlow.",
    "FastAPI": "Framework web moderne et rapide pour créer des APIs avec Python.",
    "Streamlit": "Framework Python pour créer rapidement des applications web de Data Science.",
    "Selenium": "Outil d'automatisation de navigateurs web pour le testing et le web scraping.",
    "BeautifulSoup": "Bibliothèque Python pour extraire des données de fichiers HTML et XML.",
    "Transformers": "Architecture de réseau de neurones révolutionnaire pour le traitement du langage (NLP).",
    "Whisper": "Modèle d'IA d'OpenAI pour la reconnaissance vocale et la transcription.",
    "Airflow": "Plateforme d'orchestration de workflows pour la data engineering.",
    "Feature engineering": "Processus de création et sélection de variables pertinentes pour le ML.",
    "Cross-validation": "Technique de validation de modèles ML pour éviter le surapprentissage.",
    "Java SE": "Java Standard Edition : plateforme de base pour le développement d'applications Java.",
    "Java EE": "Java Enterprise Edition : plateforme pour développer des applications d'entreprise robustes.",
    "Scrum": "Framework agile pour la gestion de projets complexes, basé sur des sprints itératifs.",
    "DevOps": "Pratiques combinant développement et opérations pour livrer rapidement et continuellement.",
    "AWS": "Amazon Web Services : plateforme de cloud computing leader du marché.",
    "MongoDB": "Base de données NoSQL orientée documents, très utilisée pour sa flexibilité.",
    "Merise": "Méthode française de conception de systèmes d'information et bases de données.",
    "WordPress": "CMS open-source populaire pour créer des sites web et blogs.",
    "NoSQL": "Bases de données 'non relationnelles' conçues pour la scalabilité et la flexibilité.",
    "Photonique": "Science et technologie de la génération, manipulation et détection de photons (lumière).",
    "Holographie": "Technique d'enregistrement et de restitution d'images en trois dimensions par interférence lumineuse.",
    "Spectroscopie": "Étude de la matière par l'analyse du spectre de la lumière qu'elle émet ou absorbe.",
    "Fibre optique": "Technologie de transmission de données par impulsions lumineuses dans des fibres de verre."
};

const SKILLS_DATA = [
    {
        "category": "Développement & Automatisation",
        "icon": "code",
        "items": [
            { name: "Python", status: "acquired" },
            { name: "HTML5/CSS3", status: "acquired" },
            { name: "JavaScript", status: "acquired" },
            { name: "Django", status: "acquired" },
            { name: "Flask", status: "acquired" },
            { name: "React (bases)", status: "learning" },
            { name: "PHP", status: "acquired" },
            { name: "Make", status: "acquired" },
            { name: "n8n", status: "acquired" },
            { name: "Git", status: "acquired" },
            { name: "API REST", status: "acquired" },
            { name: "Docker", status: "acquired" },
            { name: "Architecture MVC", status: "learning" },
            { name: "UML", status: "learning" }
        ]
    },
    {
        "category": "Data & IA",
        "icon": "chart-bar",
        "items": [
            { name: "Pandas", status: "acquired" },
            { name: "NumPy", status: "acquired" },
            { name: "Matplotlib", status: "acquired" },
            { name: "Scikit-learn", status: "acquired" },
            { name: "IA générative", status: "acquired" },
            { name: "NLP", status: "acquired" },
            { name: "Data cleaning", status: "acquired" }
        ]
    },
    {
        "category": "Pédagogie & Création",
        "icon": "lightbulb",
        "items": [
            { name: "Plateformes éducatives", status: "acquired" },
            { name: "Gamification", status: "acquired" },
            { name: "UX/UI", status: "acquired" },
            { name: "Vulgarisation scientifique", status: "acquired" },
            { name: "Accessibilité numérique", status: "acquired" }
        ]
    },
    {
        "category": "Connaissances Transversales",
        "icon": "cogs",
        "items": [
            { name: "Optique", status: "acquired" },
            { name: "Électronique", status: "acquired" },
            { name: "Systèmes embarqués", status: "acquired" },
            { name: "Management", status: "acquired" },
            { name: "Communication", status: "acquired" }
        ]
    }
];

const TIMELINE_DATA = [
    {
        "year": "2025 - 2026",
        "title": "Concepteur Développeur d'Applications (CDA)",
        "description": "<strong>M2i Formation (17 Sept 2025 - 23 Juil 2026) - Titre Professionnel Niveau 6 (BAC+3/4)</strong><br><em>Format :</em> Distanciel synchrone/asynchrone + Présentiel<br><span style=\"font-size:0.9em; opacity:0.8\"><em>Légende : * Bases | ** Notions</em></span><br><br><em>Développement Web :</em><br>• Front-end : HTML/CSS, JavaScript, jQuery, React, Vue**, Angular**<br>• Back-end : PHP (procédural & OO), Node.js<br>• CMS : WordPress/WooCommerce, Joomla, Headless CMS (Strapi)<br>• Java EE : servlets, JSP, frameworks entreprise<br><br><em>Data & Architecture :</em><br>• Bases de données : SQL, Merise, NoSQL, MongoDB, Big Data<br>• Conception : UML, Algorithmie, Architectures applicatives<br>• Méthodes : Scrum, gestion de projet agile<br><br><em>DevOps & Cloud :</em><br>• Fondamentaux DevOps, CI/CD<br>• Cloud Native AWS (containerisation, déploiement)<br><br><em>Sécurité & Qualité :</em><br>• Cybersécurité, RGPD<br>• Testing applicatif (unitaires, intégration)<br><br><em>Soft Skills :</em> Communication, travail équipe, gestion stress, anglais professionnel, TRE<br><br><em>Projet fil rouge :</em> Application complète (conception → déploiement)<br><em>Stage :</em> 3+ mois en entreprise (Avril-Juillet 2026)<br><em>Examen :</em> Titre Professionnel CDA (Juillet 2026)",
        "type": "education",
        "url": "https://macarriere.m2iformation.fr/offres/concepteur-rice-developpeur-se-d-applications/89/",
        "logo": "https://logo.clearbit.com/m2iformation.fr"
    },
    {
        "year": "2024 - 2025",
        "title": "Autoformation Intensive IT - Web Dev - IA - Automatisation",
        "description": "<strong>Apprentissage autodirigé - Domaine IA & Développement Web</strong><br><span style=\"font-size:0.9em; opacity:0.8\"><em>Légende : * Bases | ** Notions</em></span><br><br><em>Développement Web & Front-End :</em> HTML/CSS, JS/React, PHP, Node.js*, Next.js**, Express**, Vite**, Tailwind, Web Components**, PWA*, SEO.<br><br><em>Architecture & Rendering :</em> SSR/SSG, Headless CMS (Strapi*), Three.js (bases).<br><br><em>DevOps & Infrastructure :</em> Docker*, Git*, GitHub, Apache/Nginx, CI/CD, Sécurité*.<br><br><em>Automatisation & Intégrations :</em> n8n/Make, Zapier, Apps Script, Python/Bash, GitHub Actions**, Webhooks.<br><br><em>IA Générative & LLMs :</em> Prompt Engineering, RAG, Fine-tuning, agents IA, Vector DBs, Hugging Face, LlamaIndex**, LangChain**, GPT/LLMs (texte/image/vidéo/musique).<br><br><em>No/Low-Code :</em> Cursor, Lovable, Bolt, intégrations API/Webhooks, Google AI / Firebase Studio.<br><br><em>Projets :</em><br><strong>Conception d'apps et sites web assistés par IA sur :</strong><br>• Neuro-diversité, IA, Green IT<br>• Apprentissage (Optique, Électronique, Dev info, Data Science)<br>• Culturels, Ludiques, Sites démo...<br><br><strong>Apps d'aide à l'apprentissage & assistance cognitive (profils neuro-atypiques) :</strong><br>• Dys (Dyslexie, Dyspraxie, Dysorthographie, Dyscalculie, Dysphasie, Dysgraphie)<br>• TDA/H, TSA, Hypersensibilité<br>• Troubles (Mémoire, Concentration, Apprentissages)<br><br>Portfolio : <em>portfolio.hylst.fr (à venir)</em>",
        "type": "education",
        "url": null,
        "logo": null
    },
    {
        "year": "2023 - 2024",
        "title": "Python, Data Science & IA",
        "description": "<strong>Formation via Docstrings, OpenClassrooms, Machine Learnia, Kaggle</strong><br><em>Certifications :</em> OpenClassrooms, Google Cloud/IA, SecNum Académie.<br><span style=\"font-size:0.9em; opacity:0.8\"><em>Légende : * Bases | ** Notions</em></span><br><br><em>Développement Python :</em> Django*, Flask, FastAPI*, bonnes pratiques PEP, scripts modulaires.<br><br><em>Automatisation :</em> Requests, BeautifulSoup, Selenium**, PyAutoGUI**. Environnements : Pipenv, Virtualenv, Docker.<br><br><em>Data & Analyse :</em> Pandas, NumPy, visualisation (Matplotlib, Seaborn, Plotly), bases SQLAlchemy, Psycopg2, PyMongo.<br><br><em>Machine Learning* & Deep Learning** :</em> Modèles supervisés/non-supervisés, Feature engineering, Cross-validation, Scikit-learn, TensorFlow*/Keras**, PyTorch*.<br><br><em>IA & LLMs :</em> Transformers, SentenceTransformers, LangChain, LlamaIndex*, Whisper, OpenAI SDK, Nombreux outils et ressources IA (modèles génératifs text to text / code / image / music / video, CNN** / RAG*).<br><br><em>MLOps & Data Engineering :</em> Notions Airflow, Luigi, déploiement/monitoring de modèles.<br><br><em>Expérimentations :</em> Jupyter Notebooks, Scrapy, Streamlit*, Dask**, OpenCV**.",
        "type": "education",
        "url": null,
        "logo": "https://logo.clearbit.com/openclassrooms.com"
    },
    {
        "year": "2004 - 2024",
        "title": "BUT - Coordinateur Commercial",
        "description": "<strong>Vendenheim (Mars 2004 - Sept 2024 - 20 ans 7 mois)</strong><br><em>Rôles variés :</em> Coordinateur commercial, Vendeur, Responsable SAV, Chef de rayon électroménager, Attaché de direction.<br><br><em>Compétences développées :</em> Vente, coordination, Management d'équipe, Gestion de rayon, Gestion des litiges et SAV, Relation client et fournisseurs, Achat et marketing, Dépannage et installation, Planification, communication, formation.",
        "type": "experience",
        "url": "https://www.but.fr",
        "logo": "https://logo.clearbit.com/but.fr"
    },
    {
        "year": "2002",
        "title": "Thales Laser - Ingénieur Industrialisation Laser",
        "description": "<strong>Mars - Août 2002 (6 mois)</strong><br><em>Mission :</em> Ingénieur co-responsable de l’industrialisation d'un laser.<br><em>Compétences :</em> Méthode, Qualité, Communication, Technique (Optique, Électronique, Mécanique).",
        "type": "experience",
        "url": "https://www.thalesgroup.com",
        "logo": "https://logo.clearbit.com/thalesgroup.com"
    },
    {
        "year": "2001",
        "title": "LORD Ingénierie - Apprenti Ingénieur Optro/Info Embarquée",
        "description": "<strong>Fév - Juillet 2001 (6 mois)</strong><br><em>Mission :</em> Réalisation de programmes de sauvegarde, restauration, formatage de données pour système embarqué (caméra intelligente linéaire).",
        "type": "experience",
        "url": null,
        "logo": null
    },
    {
        "year": "2000",
        "title": "Bonnet Électronique - Technicien Sup. Électro/Info Embarquée",
        "description": "<strong>Juin - Août 2000 (3 mois)</strong><br><em>Mission :</em> Conception d'une carte de télégestion de centre de lavage automatique et d'un système automatisé d'orientation de panneau solaire (software essentiellement).",
        "type": "experience",
        "url": null,
        "logo": null
    },
    {
        "year": "1997",
        "title": "Ideacod Hohner Automation - Technicien Optronique/Photométrie",
        "description": "<strong>Juillet - Août 1997 (2 mois)</strong><br><em>Mission :</em> Optimisation d'un système miniaturisé de transmission optique pour codeur optique de rotation.",
        "type": "experience",
        "url": "https://www.hohner-elektrotechnik.de",
        "logo": "https://logo.clearbit.com/hohner-elektrotechnik.de"
    },
    {
        "year": "1999 - 2002",
        "title": "Ingénieur en Sciences de l'Industrie - Spécialité Optronique",
        "description": "<strong>NFIO / Université Paris-Sud (devenue Paris-Saclay) - Orsay (91)</strong><br><em>Domaines d'expertise :</em><br>• <em>Optique :</em> Géométrique, ondulatoire, non linéaire, holographie, vision, photonique, radio-photométrie<br>• <em>Électronique :</em> Analogique, numérique, haute fréquence, électrotechnique, micro-électronique<br>• <em>Télécommunications :</em> Fibre optique, radio-télécoms, traitement du signal, réseaux, multiplexage<br>• <em>Autres :</em> Détecteurs, spectroscopie, métrologie, automatismes, mécanique quantique, optomécanique",
        "type": "education",
        "url": "https://www.universite-paris-saclay.fr",
        "logo": "https://logo.clearbit.com/universite-paris-saclay.fr"
    },
    {
        "year": "1998 - 1999",
        "title": "Maths Spé ATS - Génie Électronique et Mécanique",
        "description": "<strong>Lycée Louis Armand - Mulhouse (68)</strong><br>Classe préparatoire Adaptation Technicien Supérieur pour l'entrée en école d'ingénieur.",
        "type": "education",
        "url": null
    },
    {
        "year": "1996 - 1998",
        "title": "BTS Génie Optique Photonique",
        "description": "<strong>Lycée Jean Mermoz - Saint-Louis (68)</strong><br><em>Options :</em> Gestion, Anglais<br>Projet : Optimisation de supports holographiques.",
        "type": "education",
        "url": null
    },
    {
        "year": "1994 - 1996",
        "title": "Bac STL Physique de Laboratoire",
        "description": "<strong>Lycée Jean Rostand - Strasbourg (67)</strong>",
        "type": "education",
        "url": null
    }
];

const PROJECTS_DATA = [
    {
        "id": "neurodiversite",
        "title": "Neurodiversité interactive",
        "description": "Plateforme sur les troubles DYS (quiz, glossaire, blog, forum).",
        "tech": ["Python", "Django", "JS"],
        "status": "En cours",
        "link": "#",
        "image": "assets/screenshots/neuro.jpg"
    },
    {
        "id": "ia-humanite",
        "title": "IA & Humanité",
        "description": "Vulgarisation de l'histoire, techniques et usages de l'IA.",
        "tech": ["HTML", "CSS", "JS"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/ia.jpg"
    },
    {
        "id": "cognitive-help",
        "title": "Apps d'aide cognitive & émotionnelle",
        "description": "Gestion des émotions, mémoire et surcharge mentale via IA.",
        "tech": ["Python", "NLP", "React"],
        "status": "Prototype",
        "link": "#",
        "image": "assets/screenshots/cognitive.jpg"
    },
    {
        "id": "edu-platform",
        "title": "Plateformes éducatives",
        "description": "Modules complets (cours, quiz, évaluations) sur optique, data, musique.",
        "tech": ["Moodle", "H5P", "PHP"],
        "status": "En production",
        "link": "#",
        "image": "assets/screenshots/edu.jpg"
    },
    {
        "id": "tools-suite",
        "title": "Suite d'outils numériques (300+)",
        "description": "Productivité, IA, bureautique, CRM.",
        "tech": ["n8n", "Python", "API"],
        "status": "En production",
        "link": "#",
        "image": "assets/screenshots/tools.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderSkills(SKILLS_DATA);
    renderProjects(PROJECTS_DATA);
    renderTimeline(TIMELINE_DATA);
    setupThemeToggle();
    setupModalListeners();
});

function processText(text) {
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

function renderSkills(skills) {
    const container = document.getElementById('skills-list');

    const legendHtml = `
        <div class="skills-legend">
            <span class="legend-item"><span class="skill-tag status-acquired"></span> Acquis</span>
            <span class="legend-item"><span class="skill-tag status-learning"></span> En cours d'acquisition</span>
        </div>
    `;

    const skillsHtml = skills.map(category => `
        <div class="skill-category">
            <h3><i class="icon-${category.icon}"></i> ${category.category}</h3>
            <div class="skill-tags">
                ${category.items.map(item => `
                    <span class="skill-tag status-${item.status}">
                        ${item.name}
                        ${item.status === 'learning' ? '<span class="learning-indicator" title="En cours d\'acquisition">*</span>' : ''}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = legendHtml + '<div class="skills-grid">' + skillsHtml + '</div>';
}

function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    container.innerHTML = projects.map(project => `
        <article class="project-card" data-id="${project.id}" onclick="openModal('${project.id}')" role="button" tabindex="0" onkeypress="if(event.key === 'Enter') openModal('${project.id}')">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x180?text=Projet'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${processText(project.description)}</p>
                <div class="project-tags">
                    ${project.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');

    window.projectsData = projects;
}

function renderTimeline(timeline) {
    const container = document.getElementById('timeline-list');
    container.innerHTML = timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-year">${item.year}</div>
            <h3 class="timeline-title">
                ${item.logo ? `<img src="${item.logo}" alt="Logo" class="timeline-logo" onerror="this.style.display='none'">` : ''}
                ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="timeline-link">${item.title} <span class="external-icon">↗</span></a>` : item.title}
            </h3>
            <p>${processText(item.description)}</p>
        </div>
    `).join('');
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-btn');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
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

function setupModalListeners() {
    const modalContainer = document.getElementById('modal-container');
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

window.openModal = function (projectId) {
    const project = window.projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalBody = document.getElementById('modal-body');
    const modalContainer = document.getElementById('modal-container');

    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:300px; object-fit:cover; margin-bottom:1rem; border-radius:8px;" onerror="this.src='https://via.placeholder.com/600x300?text=Projet'">
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
