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
        "category": "Développement Web & App",
        "icon": "code",
        "sections": [
            {
                "title": "Front-End",
                "items": [
                    { name: "HTML5 / CSS3 / SASS", status: "acquired", desc: "Structure, style et préprocesseurs pour le web moderne." },
                    { name: "JavaScript (ES6+)", status: "acquired", desc: "Langage de script côté client, standards modernes." },
                    { name: "React* / Next.js**", status: "acquired", desc: "Bibliothèque UI et framework React pour le rendu serveur (SSR)." },
                    { name: "Vue.js** / Angular**", status: "learning", desc: "Frameworks JS progressifs et complets." },
                    { name: "Tailwind** / Bootstrap**", status: "acquired", desc: "Frameworks CSS utilitaires et composants." },
                    { name: "Three.js* / jQuery", status: "acquired", desc: "3D dans le navigateur et manipulation DOM historique." }
                ]
            },
            {
                "title": "Back-End",
                "items": [
                    { name: "Node.js* / Express**", status: "acquired", desc: "JavaScript côté serveur et framework web minimaliste." },
                    { name: "PHP / Symfony** / Laravel**", status: "acquired", desc: "Langage serveur historique et ses frameworks robustes." },
                    { name: "Python (Django* / Flask)", status: "acquired", desc: "Frameworks Python : complet (Django) ou micro (Flask)." },
                    { name: "Java EE** / Spring**", status: "learning", desc: "Développement d'applications d'entreprise en Java." },
                    { name: "C#* / .NET**", status: "acquired", desc: "Écosystème Microsoft pour le développement applicatif." }
                ]
            },
            {
                "title": "CMS & NoCode",
                "items": [
                    { name: "WordPress / WooCommerce", status: "acquired", desc: "CMS le plus utilisé au monde et sa solution e-commerce." },
                    { name: "Joomla / Prestashop", status: "acquired", desc: "Alternatives CMS et E-commerce robustes." },
                    { name: "Headless CMS (Strapi*)", status: "acquired", desc: "CMS sans tête pour servir du contenu via API." },
                    { name: "Webflow / Bubble**", status: "learning", desc: "Outils de développement visuel No-Code." }
                ]
            },
            {
                "title": "Architecture & Qualité",
                "items": [
                    { name: "UI/UX* / Design Thinking*", status: "acquired", desc: "Conception centrée utilisateur et ergonomie." },
                    { name: "SEO / WCAG* / RGPD", status: "acquired", desc: "Référencement, Accessibilité et Protection des données." },
                    { name: "API REST / GraphQL**", status: "acquired", desc: "Architectures d'échange de données standardisées." },
                    { name: "PWA* / Mobile First", status: "acquired", desc: "Applications Web Progressives et conception mobile." }
                ]
            }
        ]
    },
    {
        "category": "Data, IA & Automatisation",
        "icon": "chart-bar",
        "sections": [
            {
                "title": "Data Science",
                "items": [
                    { name: "Python", status: "acquired", desc: "Langage de référence pour la Data Science." },
                    { name: "Pandas / NumPy / Matplotlib", status: "acquired", desc: "Manipulation, calcul et visualisation de données." },
                    { name: "SQL* / NoSQL* / MongoDB*", status: "acquired", desc: "Bases de données relationnelles et orientées documents." },
                    { name: "Scikit-learn / TensorFlow*", status: "acquired", desc: "Machine Learning classique et Deep Learning." },
                    { name: "PyTorch* / Keras**", status: "acquired", desc: "Frameworks de Deep Learning flexibles." }
                ]
            },
            {
                "title": "IA Générative & LLMs",
                "items": [
                    { name: "LLMs / RAG / Agents", status: "acquired", desc: "Grands modèles de langage, génération augmentée et agents autonomes." },
                    { name: "LangChain** / LlamaIndex**", status: "acquired", desc: "Frameworks pour orchestrer les applications LLM." },
                    { name: "Prompt Engineering", status: "acquired", desc: "Optimisation des instructions aux modèles d'IA." },
                    { name: "Hugging Face / OpenAI SDK", status: "acquired", desc: "Hubs de modèles et APIs d'IA." },
                    { name: "Computer Vision (OpenCV**)", status: "learning", desc: "Traitement d'images et vision par ordinateur." }
                ]
            },
            {
                "title": "Automatisation",
                "items": [
                    { name: "n8n / Make / Zapier", status: "acquired", desc: "Outils d'automatisation de workflows Low-Code." },
                    { name: "Selenium** / PyAutoGUI", status: "acquired", desc: "Automatisation de navigateur et d'interface graphique." },
                    { name: "Web Scraping (Scrapy*)", status: "acquired", desc: "Extraction de données web à grande échelle." },
                    { name: "Scripting (Bash / Python)", status: "acquired", desc: "Scripts d'automatisation système." }
                ]
            }
        ]
    },
    {
        "category": "DevOps, Outils & Systèmes",
        "icon": "server",
        "sections": [
            {
                "title": "DevOps & Cloud",
                "items": [
                    { name: "Git / GitHub / GitLab", status: "acquired", desc: "Gestion de version et collaboration." },
                    { name: "Docker* / Kubernetes**", status: "acquired", desc: "Conteneurisation et orchestration." },
                    { name: "CI/CD (GitHub Actions)", status: "acquired", desc: "Intégration et déploiement continus." },
                    { name: "AWS** / Cloud Native*", status: "learning", desc: "Services Cloud Amazon et architectures cloud." }
                ]
            },
            {
                "title": "Environnement & Outils",
                "items": [
                    { name: "Linux* / Bash*", status: "acquired", desc: "Système d'exploitation et ligne de commande." },
                    { name: "VSCode / PyCharm / Cursor", status: "acquired", desc: "IDE et éditeurs de code avancés (et IA)." },
                    { name: "Virtualenv / Pipenv", status: "acquired", desc: "Gestion d'environnements virtuels Python." }
                ]
            },
            {
                "title": "Réseaux & Sécurité",
                "items": [
                    { name: "Protocoles Web (HTTP/WS)", status: "acquired", desc: "Fonctionnement du web et websockets." },
                    { name: "Cybersécurité*", status: "acquired", desc: "Bonnes pratiques de sécurité informatique." },
                    { name: "Réseaux locaux / Distants", status: "acquired", desc: "Architecture réseau et communication." }
                ]
            }
        ]
    },
    {
        "category": "Optronique & Sciences de l'Ingénieur",
        "icon": "atom",
        "sections": [
            {
                "title": "Optique & Photonique",
                "items": [
                    { name: "Optique Géom. / Ondulatoire", status: "acquired", desc: "Physique de la lumière et propagation." },
                    { name: "Lasers / Fibres Optiques", status: "acquired", desc: "Sources cohérentes et transmission de signal." },
                    { name: "Spectroscopie / Photométrie", status: "acquired", desc: "Analyse spectrale et mesure de la lumière." },
                    { name: "Holographie / Vision", status: "acquired", desc: "Imagerie 3D et systèmes de vision." }
                ]
            },
            {
                "title": "Électronique & Systèmes",
                "items": [
                    { name: "Électronique Analog/Num", status: "acquired", desc: "Circuits, composants et logique numérique." },
                    { name: "Systèmes Embarqués (C/ASM)", status: "acquired", desc: "Programmation bas niveau sur microcontrôleurs." },
                    { name: "Traitement du Signal", status: "acquired", desc: "Analyse et modification de signaux." },
                    { name: "Capteurs / Métrologie", status: "acquired", desc: "Instrumentation et mesure physique." }
                ]
            }
        ]
    },
    {
        "category": "Soft Skills & Business",
        "icon": "users",
        "sections": [
            {
                "title": "Management & Gestion",
                "items": [
                    { name: "Gestion Projet (Agile/Scrum)", status: "acquired", desc: "Méthodologies de gestion de projet itératives." },
                    { name: "Management d'équipe", status: "acquired", desc: "Animation, motivation et suivi d'équipes." },
                    { name: "Coordination Commerciale", status: "acquired", desc: "Pilotage de l'activité commerciale." },
                    { name: "Stratégie / Marketing", status: "acquired", desc: "Vision stratégique et actions marketing." }
                ]
            },
            {
                "title": "Communication",
                "items": [
                    { name: "Pédagogie / Formation", status: "acquired", desc: "Transmission de savoirs et animation de formations." },
                    { name: "Relation Client / Fournisseur", status: "acquired", desc: "Négociation et suivi relationnel." },
                    { name: "Anglais Technique", status: "acquired", desc: "Lecture et rédaction de documentation technique." },
                    { name: "Communication Interpersonnelle", status: "acquired", desc: "Écoute active et communication efficace." }
                ]
            }
        ]
    }
];

const TIMELINE_DATA = [
    {
        "year": "2025 - 2026",
        "title": "Concepteur Développeur d'Applications (CDA)",
        "description": "<strong>M2i Formation (17 Sept 2025 - 23 Juil 2026) - Titre Professionnel Niveau 6 (BAC+3/4)</strong><br><em>Format :</em> Distanciel synchrone/asynchrone + Présentiel<br><span style=\"font-size:0.9em; opacity:0.8\"><em>Légende : * Bases | ** Notions</em></span><br><br><em>Développement Web :</em><br>• Front-end : HTML/CSS, JavaScript, jQuery, React*, Vue**, Angular**<br>• Back-end : PHP (procédural & OO), Node.js*<br>• CMS : WordPress/WooCommerce, Joomla, Headless CMS (Strapi*)<br>• Java EE : servlets, JSP, frameworks entreprise**<br><br><em>Data & Architecture :</em><br>• Bases de données : SQL, Merise, NoSQL*, MongoDB*, Big Data<br>• Conception : UML, Algorithmie, Architectures applicatives<br>• Méthodes : Scrum, gestion de projet agile<br><br><em>DevOps & Cloud :</em><br>• Fondamentaux DevOps*, CI/CD*<br>• Cloud Native AWS (containerisation, déploiement)<br><br><em>Sécurité & Qualité :</em><br>• Cybersécurité, RGPD<br>• Testing applicatif (unitaires, intégration)<br><br><em>Soft Skills :</em> Communication, travail équipe, gestion stress, anglais professionnel, TRE<br><br><em>Projet fil rouge :</em> Application complète (conception → déploiement)<br><em>Stage :</em> 3+ mois en entreprise (Avril-Juillet 2026)<br><em>Examen :</em> Titre Professionnel CDA (Juillet 2026)",
        "type": "education",
        "url": "https://macarriere.m2iformation.fr/offres/concepteur-rice-developpeur-se-d-applications/89/",
        "logo": "https://logo.clearbit.com/m2iformation.fr"
    },
    {
        "year": "2024 - 2025",
        "title": "Autoformation Intensive IT - Web Dev - IA - Automatisation",
        "description": "<strong>Apprentissage autodirigé - Domaine IA & Développement Web</strong><br><span style=\"font-size:0.9em; opacity:0.8\"><em>Légende : * Bases | ** Notions</em></span><br><br><em>Développement Web & Front-End :</em> HTML/CSS, JS/React*, PHP, Node.js*, Next.js**, Express**, Vite**, Tailwind, Web Components**, PWA*, SEO.<br><br><em>Architecture & Rendering :</em> SSR/SSG, Headless CMS (Strapi*), Three.js (bases).<br><br><em>DevOps & Infrastructure :</em> Docker*, Git*, GitHub, Apache/Nginx, CI/CD, Sécurité*, DevOps*, Bash*.<br><br><em>Automatisation & Intégrations :</em> n8n/Make, Zapier, Apps Script, Python/Bash*, GitHub Actions**, Webhooks, Scrapy*, Luigi*.<br><br><em>IA Générative & LLMs :</em> Prompt Engineering, RAG, Fine-tuning, agents IA, Vector DBs, Hugging Face, LlamaIndex**, LangChain**, GPT/LLMs (texte/image/vidéo/musique).<br><br><em>No/Low-Code :</em> Cursor, Lovable, Bolt, intégrations API/Webhooks, Google AI / Firebase Studio.<br><br><em>Projets :</em><br><strong>Conception d'apps et sites web assistés par IA sur :</strong><br>• Neuro-diversité, IA, Green IT<br>• Apprentissage (Optique, Électronique, Dev info, Data Science)<br>• Culturels, Ludiques, Sites démo...<br><br><strong>Apps d'aide à l'apprentissage & assistance cognitive (profils neuro-atypiques) :</strong><br>• Dys (Dyslexie, Dyspraxie, Dysorthographie, Dyscalculie, Dysphasie, Dysgraphie)<br>• TDA/H, TSA, Hypersensibilité<br>• Troubles (Mémoire, Concentration, Apprentissages)<br><br>Portfolio : <em>portfolio.hylst.fr (à venir)</em>",
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
        "description": "<strong>Lycée Jean Mermoz - Saint-Louis (68)</strong><br><em>Options :</em> Gestion, Anglais<br><em>Compétences clés :</em> Conception, réalisation et maintenance de systèmes optiques (lasers, fibre optique, imagerie). Physique des signaux et traitement du signal lumineux.<br><em>Projet :</em> Optimisation de supports holographiques.",
        "type": "education",
        "url": "https://jean-mermoz-montpellier.mon-ent-occitanie.fr/formations-post-bac/bts/bts-photonique-technologies-et-sciences-de-la-lumiere-ptsl--4548.htm",
        "logo": null
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
        "id": "ia-apps",
        "category": "recent",
        "title": "Apps & Sites Assistés par IA",
        "description": "Conception d'applications et sites web sur des thématiques variées : Neuro-diversité, Green IT, Apprentissage (Optique, Électronique, Dev, Data Science), Culturel & Ludique.",
        "tech": ["IA Générative", "Web Dev", "Python"],
        "status": "En cours",
        "link": "#",
        "image": "assets/screenshots/ia-apps.jpg"
    },
    {
        "id": "cognitive-assist",
        "category": "recent",
        "title": "Aides & Assistance Cognitive",
        "description": "Outils pour profils neuro-atypiques (Dys, TDA/H, TSA, HPI) et troubles de l'apprentissage (mémoire, concentration).",
        "tech": ["Accessibilité", "Cognitive Science", "App"],
        "status": "En cours",
        "link": "#",
        "image": "assets/screenshots/cognitive.jpg"
    },
    {
        "id": "dev-low-level",
        "category": "recent",
        "title": "Développement Bas Niveau & Graphique",
        "description": "Développement ASM/C/BASIC, jeux, démos graphiques et utilitaires.",
        "tech": ["C", "ASM", "Graphisme"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/low-level.jpg"
    },
    {
        "id": "video-card",
        "category": "old",
        "title": "Carte d'Acquisition Vidéo",
        "description": "Réalisation d’un prototype de carte d’acquisition vidéo : conception matérielle et logicielle.",
        "tech": ["Électronique", "Hardware", "C"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/hardware.jpg"
    },
    {
        "id": "robotics",
        "category": "old",
        "title": "Robotique & Arduino",
        "description": "Programmation Arduino et participation à un club de robotique.",
        "tech": ["Arduino", "C++", "Robotique"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/robotics.jpg"
    },
    {
        "id": "events",
        "category": "old",
        "title": "Organisation Événementielle",
        "description": "Organisation de conventions ludiques et d'une grande exposition d'arts visuels.",
        "tech": ["Management", "Event", "Culture"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/events.jpg"
    },
    {
        "id": "lasers-study",
        "category": "old",
        "title": "Études Technologies Laser & Optique",
        "description": "Holographie, GPS, capteurs fibre optique, télémètres lasers, réalité virtuelle.",
        "tech": ["Optique", "Laser", "Recherche"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/laser.jpg"
    },
    {
        "id": "bts-project",
        "category": "old",
        "title": "Optimisation Holographique (BTS)",
        "description": "Collaboration avec l’ENSCMU : optimisation de méthodes d’enregistrement sur supports photo-polymérisables.",
        "tech": ["Holographie", "Chimie", "Optique"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/holography.jpg"
    },
    {
        "id": "videogames-study",
        "category": "old",
        "title": "Étude Technologies Jeux Vidéo",
        "description": "Étude bibliographique sur la réalité virtuelle et les IHM dans le jeu vidéo.",
        "tech": ["VR", "IHM", "Recherche"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/vr.jpg"
    },
    {
        "id": "associations",
        "category": "old",
        "title": "Engagement Associatif",
        "description": "Membre actif et bureau de plusieurs associations (ludiques, culturelles, techniques, humanitaires).",
        "tech": ["Bénévolat", "Gestion", "Social"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/asso.jpg"
    },
    {
        "id": "web-legacy",
        "category": "old",
        "title": "Conception Web (Historique)",
        "description": "Conception de plusieurs sites web à des fins personnelles, professionnelles et associatives.",
        "tech": ["HTML", "CSS", "Webmastering"],
        "status": "Terminé",
        "link": "#",
        "image": "assets/screenshots/web-old.jpg"
    }
];

const CERTIFICATIONS_DATA = [
    {
        "category": "OpenClassrooms",
        "items": [
            { name: "Apprenez à apprendre", file: "Certificat OPENCLASSROOMS - Apprenez à apprendre - Geoffroy STREIT.pdf" },
            { name: "Apprenez à programmer en C", file: "Certificat OPENCLASSROOMS - Apprenez à programmer en C.pdf" },
            { name: "Comprendre le Web", file: "Certificat OPENCLASSROOMS - Comprendre le Web - Geoffroy STREIT.pdf" },
            { name: "Concevez votre site web avec PHP et MySQL", file: "Certificat OPENCLASSROOMS - Concevez votre site web avec PHP et MySQL.pdf" },
            { name: "Créez votre site web avec HTML5 et CSS3", file: "Certificat OPENCLASSROOMS - Créez votre site web avec HTML5 et CSS3 - Geoffroy STREIT.pdf" },
            { name: "Développer en C pour l'embarqué", file: "Certificat OPENCLASSROOMS - Développer en C pour l'embarqué - Geoffroy STREIT.pdf" },
            { name: "Gérez du code avec Git et GitHub", file: "Certificat OPENCLASSROOMS - Gérez du code avec Git et GitHub - Geoffroy STREIT.pdf" },
            { name: "Initiation électronique embarquée", file: "Certificat OPENCLASSROOMS - Initiation électronique embarquée, capteurs, actionneurs  - Geoffroy STREIT.pdf" },
            { name: "Initiez-vous au Design Thinking", file: "Certificat OPENCLASSROOMS - Initiez-vous au Design Thinking - Geoffroy STREIT.pdf" },
            { name: "Initiez-vous à Linux", file: "Certificat OPENCLASSROOMS - Initiez-vous à Linux - Geoffroy STREIT.pdf" },
            { name: "Le fonctionnement des algorithmes v1", file: "Certificat OPENCLASSROOMS - Le fonctionnement des algorithmes v1 - Geoffroy STREIT.pdf" },
            { name: "Le fonctionnement des algorithmes v2", file: "Certificat OPENCLASSROOMS - Le fonctionnement des algorithmes v2 - Geoffroy STREIT.pdf" }
        ]
    },
    {
        "category": "Mimo",
        "items": [
            { name: "Python", file: "mimo-certificates-Python - STREIT Geoffroy.pdf" },
            { name: "SQL", file: "mimo-certificates-SQL - STREIT Geoffroy.pdf" },
            { name: "Web Development", file: "mimo-certificates-Web Development - STREIT Geoffroy.pdf" }
        ]
    },
    {
        "category": "Autres",
        "items": [
            { name: "Sécurité Numérique (ANSSI)", file: "attestation de formation en sécurité numérique anssi 25102024.pdf" },
            { name: "Manager Sécurité Magasin", file: "attestation de formation manager sécurité magasin.pdf" },
            { name: "Fondamentaux Marketing Numérique", file: "certificat fondamentaux du marketing numerique.pdf" },
            { name: "Python Docstrings Bases", file: "attestations python docstrings bases.webp" }
        ]
    }
];

const DIPLOMAS_DATA = [
    { name: "Diplôme d'ingénieur Optronique", file: "Diplôme d'ingénieur des techniques de l'industrie spécialité optronique - Geoffroy Streit _c.pdf" },
    { name: "BTS Optique Photonique", file: "BTS Optique photonique - Geoffroy Streit_c.pdf" },
    { name: "TOEIC Anglais (835)", file: "TOEIC ANGLAIS 835 - Geoffroy Streit_c.pdf" },
    { name: "Diplômes Complets (Ingé-BTS-BAC-TOEIC)", file: "Diplômes Geoffroy Streit Ingé-BTS-BAC-TOEIC c.pdf" }
];

document.addEventListener('DOMContentLoaded', () => {
    renderSkills(SKILLS_DATA);
    renderProjects(PROJECTS_DATA);
    renderDocuments(CERTIFICATIONS_DATA, 'certifications-list', 'pdf/certifications/');
    renderDocuments(DIPLOMAS_DATA, 'diplomas-list', 'pdf/diplômes/');
    setupTimelineView();
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
            <span style="font-size:0.9em; opacity:0.8"><em>Légende : * Bases | ** Notions</em></span>
        </div>
    `;

    const skillsHtml = skills.map(category => {
        let content = '';
        if (category.sections) {
            content = category.sections.map(section => `
                <div class="skill-section">
                    <h4 class="skill-section-title">${section.title}</h4>
                    <div class="skill-tags">
                        ${section.items.map(item => `
                            <span class="skill-tag status-${item.status}" 
                                  data-tooltip="${item.desc || ''}" 
                                  tabindex="0">
                                ${item.name}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            content = `
                <div class="skill-tags">
                    ${category.items.map(item => `
                        <span class="skill-tag status-${item.status}" 
                              data-tooltip="${item.desc || ''}" 
                              tabindex="0">
                            ${item.name}
                        </span>
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
}

function renderProjects(projects) {
    const container = document.getElementById('projects-list');

    // Group by category
    const recent = projects.filter(p => p.category === 'recent');
    const old = projects.filter(p => p.category === 'old');

    const renderCard = (project) => `
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
    `;

    container.innerHTML = `
        <h3 style="width:100%; margin: 2rem 0 1rem; color: var(--primary-color); border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem;">Récents / En cours</h3>
        <div class="projects-grid-inner" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; width: 100%;">
            ${recent.map(renderCard).join('')}
        </div>

        <h3 style="width:100%; margin: 3rem 0 1rem; color: var(--primary-color); border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem;">Plus anciens</h3>
        <div class="projects-grid-inner" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; width: 100%;">
            ${old.map(renderCard).join('')}
        </div>
    `;

    window.projectsData = projects;
}

function renderDocuments(data, containerId, basePath) {
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
                                <a href="${basePath}${item.file}" target="_blank" class="doc-link">
                                    <i class="fas fa-file-pdf"></i> ${item.name}
                                </a>
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
                            <a href="${basePath}${item.file}" target="_blank" class="doc-link">
                                <i class="fas fa-file-pdf"></i> ${item.name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    container.innerHTML = html;
}


function setupTimelineView() {
    const btnChrono = document.getElementById('view-chronological');
    const btnCat = document.getElementById('view-categorical');

    if (!btnChrono || !btnCat) return;

    btnChrono.addEventListener('click', () => {
        btnChrono.classList.add('active');
        btnCat.classList.remove('active');
        renderTimeline(TIMELINE_DATA, 'chronological');
    });

    btnCat.addEventListener('click', () => {
        btnCat.classList.add('active');
        btnChrono.classList.remove('active');
        renderTimeline(TIMELINE_DATA, 'categorical');
    });

    // Initial render
    renderTimeline(TIMELINE_DATA, 'chronological');
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

function renderTimeline(timeline, mode = 'chronological') {
    const container = document.getElementById('timeline-list');

    if (mode === 'categorical') {
        const education = timeline.filter(item => item.type === 'education');
        const experience = timeline.filter(item => item.type === 'experience');

        const renderItem = (item) => `
            <div class="timeline-item">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">
                    ${item.logo ? `<img src="${item.logo}" alt="Logo" class="timeline-logo" onerror="this.style.display='none'">` : ''}
                    ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="timeline-link">${item.title} <span class="external-icon">↗</span></a>` : item.title}
                </h3>
                <p>${processText(item.description)}</p>
            </div>
        `;

        container.innerHTML = `
            <h3 style="margin: 2rem 0 1rem; color: var(--primary-color); border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem;">Formations</h3>
            ${education.map(renderItem).join('')}
            <h3 style="margin: 2rem 0 1rem; color: var(--primary-color); border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem;">Expériences Professionnelles</h3>
            ${experience.map(renderItem).join('')}
        `;
    } else {
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
}
