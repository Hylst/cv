# Changelog

## [3.3.1] - 2026-09-08

Session corrective et éditoriale : réparation du chargement complet du site sous Chrome,
correction d'accessibilité et mise à jour des contenus (parcours, compétences, orientation).

### Corrigé
- **Site entièrement inopérant sous Chrome** (contenus vides, boutons morts) : une chaîne
  entre guillemets doubles s'étendait sur plus de 70 lignes dans `scripts/data.js`
  (l'accordéon de l'offre de services), ce qui est illégal en JavaScript et provoquait un
  `SyntaxError` faisant échouer le chargement de tout le graphe de modules. Les sauts de
  ligne ont été retirés de la chaîne ; validé par import Node et rendu headless Chrome.
- **BOM résiduels** supprimés de `index.html` et des scripts (premier diagnostic erroné,
  ils masquaient le vrai bug).

### Accessibilité
- **Lien interactif retiré des `<summary>` de timeline** (30 alertes
  « Interactive element inside of a `<summary>` element ») : l'icône de lien externe du
  titre était un `<a>` imbriqué dans le `<summary>`, inaccessible proprement au clavier.
  Le lien reste disponible via le bouton « En savoir plus » dans le contenu déplié.

### Contenus
- Stage Prométhée : durée 4 → 3 mois (timeline, « En bref » et résumé professionnel).
- Orientation : suppression de « active » dans « recherche de CDI ».
- BUT : ajout des rôles Livreur - installateur et Dépanneur ; détail du rayon géré
  (électroménager / électro-loisir, informatique / Hifi / Vidéo / TV, mobilité urbaine,
  accessoires).
- Bonnet Électronique : « Conception » → « Co-Conception » (mission).
- Hohner Automation : ajout de la rédaction de documentations techniques et datasheets.
- Forces principales : « technique + relationnel » → « technique + organisationnel ».
- Compétences : légende recalibrée - Tailwind, Bootstrap, LangChain et Google Cloud
  passent de ** à * ; n8n / Make / Zapier, GitLab et Jira passent en *.

## [3.3.0] - 2026-09-05
## [3.3.0] - 2026-09-05

Session autonome de nuit (planifiée la veille, exécutée par cron pendant que l'utilisateur
dormait) : fusion dans `main`, vérification Docker/nginx, audit pessimiste final indépendant.

### Fusionné
- **`maj-cv-2026` fusionnée dans `main`** (fast-forward, `5a555bd..54f226e`) : condition posée
  par l'utilisateur remplie (contrôle pessimiste + contrôle visuel réalisés la veille). Rien
  poussé sur le remote.

### Corrigé
- **CSP : `logo.clearbit.com` retiré** - ce domaine ne résout plus depuis que les logos de
  timeline ont été mis à `null` (session du 04/09), mais `nginx.conf` continuait à l'autoriser
  dans `img-src`. Trouvé en vérifiant `nginx -t` (Docker enfin disponible) puis un conteneur réel
  avec `curl` sur les en-têtes.
- **Incohérence « Bas Rhin » / « Bas-Rhin »** dans `scripts/data.js` : trois entrées de la
  timeline (Titre CDA, Bonnet Électronique, Hohner) écrivaient le département sans trait
  d'union, deux autres avec - uniformisé sur la graphie correcte.
- **« 20 ans 7 mois »** pour une période Mars 2004 → Sept 2024, qui fait 20 ans 6 mois - corrigé.
- **Contraste WCAG 1.4.11 du liseré de statut compétence** (`.status-acquired` vert /
  `.status-learning` jaune) : 1,94:1 et 1,53:1 en thème clair sur les 76 étiquettes de
  compétences, sous le seuil de 3:1 pour un objet graphique porteur de sens (c'est le seul signal
  distinguant "acquis" de "en cours" sur chaque étiquette individuelle). Nouvelles teintes plus
  soutenues (`#1b8a4a` / `#9c6400`) qui passent sur les deux thèmes sans variante par thème
  (~4:1 à ~4,6:1 selon le fond).
- **Mode rétro : distinction acquis/en cours totalement perdue.** La règle générale
  `.retro-mode * { border-color: #0f0 !important }` rendait les deux statuts strictement
  identiques (même vert néon), sur les 76 étiquettes et les swatches de légende. Restaurée via le
  style de bordure (plein pour acquis, pointillé pour en cours) plutôt que la couleur : la
  distinction reste lisible même dans une palette mono-teinte, et sans dépendre de la perception
  des couleurs.
- **Lien mort `https://portfolio.hylst.fr`** dans la section « Ma Story » (certificat TLS
  invalide + 503) : présenté comme un lien actif alors que la timeline elle-même le décrivait
  déjà comme « à venir ». Remplacé par le vrai hub `hylst.fr` (200, déjà largement documenté
  ailleurs sur le site) aux deux endroits - le lien et la mention dans la timeline 2024-2025.
- **17 captures d'écran orphelines supprimées** (`assets/screenshots/`, ~416 Ko) : restes des
  consolidations de cartes déjà actées (15 jeux → une seule carte portail « Hylst.Games »,
  placeholders génériques → CogniAI/Bulle Sensorielle) mais jamais nettoyés sur disque. 24
  fichiers restants pour 24 références dans `PROJECTS_DATA` - correspondance exacte.

### Vérifié sans changement
- `nginx -t` : syntaxe OK, et vérification fonctionnelle réelle (conteneur lancé, en-têtes de
  sécurité confirmés par `curl` sur `/`, un asset CSS et un `.webp`) - le piège `add_header`
  documenté dans `CLAUDE.md` n'est pas déclenché.
- Cohérence interne de `data.js` : 76 compétences, 24 projets, 20 certificats LinkedIn, 5
  diplômes - tous les fichiers référencés existent, correspondance exacte avec le disque.
  Aucune régression sur les nouvelles compétences ajoutées la veille (Intégration & Services
  tiers, UML/Merise, Vector DB...), toutes visibles dans le DOM rendu avec un statut cohérent.
- Les 24 liens de projets et 10 liens de timeline retestés indépendamment : tous 200. `pappers.fr`
  et `demozoo.org` renvoient un défi Cloudflare à un client script (403) mais s'affichent
  normalement pour un vrai navigateur - faux positif écarté après vérification Chromium réelle.
- `.skills-legend`, les nouvelles règles `.retro-mode` (filtres, footer, boutons, badge), et les
  6 nouvelles cartes projet en thème sombre : contrastes mesurés entre 5,36:1 et 15,30:1, tous
  conformes.

## [3.2.0] - 2026-09-04

Alignement sur le nouveau CV papier de référence, corrections rédactionnelles et SEO.

### Ajouté
- **`robots.txt` et `sitemap.xml`** : le site n'en avait aucun. Il se déclare pourtant indexable
  (`meta robots: index, follow` + `canonical`) - les moteurs devaient donc deviner. Les PDF
  (`/pdf/`, `/ressources/`) sont exclus de l'indexation : ils doivent rester accessibles au
  visiteur, pas remonter dans les résultats à la place du CV lui-même.
- **Compétences issues du CV papier et absentes du site** : nouvelle section « Intégration &
  Services tiers » (API/Webhooks, Stripe, Sendcloud, Factur-X / facturation électronique, SaaS),
  plus UML/Merise, Responsive, MySQL/SQLite, Vector DB, Google Cloud, Jira/Notion, Merchandising /
  gestion de rayon, mécatronique, acquisition &amp; calibration, transmission et (dé)modulation.
  76 compétences listées contre 68 auparavant.
- **Légende des compétences complétée** : le liseré vert/jaune des étiquettes n'avait aucune clé
  de lecture. Les deux axes sont désormais explicites - les astérisques disent la *profondeur*
  (bases / notions), le liseré dit l'*état* (acquis / en cours). Les deux sont indépendants :
  on peut avoir acquis des notions.

### Modifié
- **CV téléchargeable** : `pdf/CV_2026-09_Geoffroy_Streit_CDA.pdf` remplace la version du
  3 septembre. Les trois PDF obsolètes (2014, 2025, 2026-09-03) sont supprimés du dépôt - une
  seule version de référence, pas d'ambiguïté possible sur laquelle un recruteur télécharge.
- **Accents rétablis dans les métadonnées SEO** (`title`, `description`, `keywords`, Open Graph,
  Twitter Card, JSON-LD) : elles étaient intégralement écrites sans accents (« Developpeur »,
  « securite », « Ministere »…) alors que tout le contenu visible est accentué. Ces chaînes
  s'affichent telles quelles dans les résultats Google et les aperçus de partage LinkedIn.
- **BUT** : les trois sites d'affectation du CV papier (Vendenheim, Fegersheim, Schweighouse)
  remplacent la mention du seul Vendenheim.

### Corrigé
- **Certificat LinkedIn en double supprimé** : « HTML : Les images responsive » pointait vers le
  lien *et* le fichier de « L'essentiel du HTML5 », et aucun PDF distinct n'existe pour lui.
  20 certificats LinkedIn au lieu de 21 - un de moins affiché, mais plus aucun lien trompeur.
- **Fautes de français** : « dans le vente » → « dans la vente » ; « Plusieurs aspect » →
  « aspects » ; « accès à apprentissage facilité » → « d'accès à un apprentissage facilité » ;
  « micro électronique » → « micro-électronique » ; « solutions électronique embarquée » →
  « solutions d'électronique embarquée » ; « c-à-d » → « c.-à-d. » ; « repose pied » /
  « appuis tête » → « repose-pieds » / « appuis-tête ».

### Corrigé (audit visuel indépendant, mode rétro)
Le mode rétro comportait une liste d'éléments qui n'avaient **jamais reçu de règle
`.retro-mode`** et gardaient donc les couleurs du thème sous-jacent - en rétro-sur-clair, cela
donnait des pavés blancs en plein écran noir. Corrigés : les **boutons de filtre de projets**
(pastilles blanches, les plus visibles), la bascule de vue du parcours (`.btn-sm`), les **cartes
du parcours** (seules cartes sans bordure verte), les titres de sous-section de la sidebar, le
bouton de téléchargement du CV, le **pied de page** (bande claire en bas d'une page noire), les
étiquettes de compétences (`.skill-tag` n'avait pas de règle alors que `.tag` et `.project-tag`
en avaient), la pastille d'année du parcours, le diagramme des trois facettes et sa légende, le
nom animé (dégradé gris/bleu au lieu du vert néon), ainsi que les accents restés bleus
(soulignement des titres de section, icônes de contact).
Vérification finale automatisée : plus **aucune zone de fond clair** détectée en mode rétro, sur
les deux bases (clair et sombre), toutes sections dépliées.

### Signalé, non corrigé (hors de portée de ce dépôt)
- Le **CV papier** annonce « Concepteur Développeur d'Applications **sécurisées** » alors que le
  diplôme officiel (relu visuellement) indique « Concepteur développeur d'applications », sans
  « sécurisées ». Le site est conforme au diplôme ; c'est le PDF qui est à corriger.
- Le CV papier porte aussi « RELATIONELLES » (deux N attendus), un point mal placé dans
  « managériale. et industrielle », et « Bas Rhin » sans trait d'union.
- Durées : le papier annonce « 1 an 1/2 » de stages cumulés, le détail du site en totalise 17
  mois. L'un des deux arrondit - à trancher côté CV papier.

## [3.1.0] - 2026-09-04

Enrichissement du portfolio : exploration exhaustive de hylst.fr et games.hylst.fr (Playwright,
sous-agents dédiés) pour remplacer les cartes projet approximatives par du contenu vérifié.

### Ajouté
- **6 nouvelles cartes projet**, toutes vérifiées en HTTP 200 avec captures d'écran réelles :
  ASCIIverse Studio, Keyboard Atlas, HylstDevToolBox, Neurodiversity Explorer (vercel.app),
  À Votre Service (vercel.app - stack confirmée React/TypeScript/Tailwind/Shadcn/Vite/IndexedDB),
  DataScienceExplorer (vercel.app, marqué explicitement en construction sur le site source).
- **Captures d'écran réelles** (1280×800, recadrées 800×400, converties en `.webp`, 2 à 37 Ko
  pièce) pour tous les projets Hylst : remplacent les 7 SVG placeholders dégradé+emoji.

### Modifié
- **Hylst IT Learning** : nombre de parcours corrigé (13 réellement en ligne, pas 14), liste des
  parcours encore annoncés mais non ouverts (Data Science, IA, Cybersécurité, Green IT...) reflétée
  honnêtement plutôt qu'omise.
- **Espace Réussite Brevet 2026** : chiffres réels relevés en jeu (181 modules, mode « Mise en
  situation » à 100 questions, badges nommés) remplacent les chiffres approximatifs précédents.
- **Guide Mathématiques** : chiffres réels (215 cours, carte conceptuelle de 126 notions,
  22 badges) et statut corrigé en « bêta », conforme au bandeau affiché sur le site lui-même.
- **3D Creator** : la version « Next.js 16 » n'était pas vérifiable (seule la balise meta
  generator confirme Next.js, sans numéro de version) - affirmation retirée.
- **Pang Genesis → Hylst.Games** : la carte dédiée à un seul jeu devient une carte de portail
  couvrant les 15 mini-jeux réellement en ligne sur games.hylst.fr (Arcade, RPG, Puzzle/Simulation),
  cohérent avec le traitement déjà appliqué au hub hylst.fr plutôt qu'une carte par jeu.
- **« Apps & Sites Assistés par IA » et « Aides & Assistance Cognitive »** : ces deux cartes
  généralistes sans lien (`#`) sont remplacées, sans réduction du nombre de cartes, par leur
  contenu réel identifié sur le terrain : CogniAI (guide anti-illusion de compétence face à l'IA)
  et Bulle Sensorielle (outil d'apaisement sensoriel pour profils neuro-atypiques).

### Corrigé
- **Bug latent dans `processText` (`utils.js`)** : les termes du glossaire contenant un caractère
  regex (le point de « Node.js », « Three.js »...) n'étaient pas échappés avant d'être injectés
  dans une `RegExp` - un `.` y matche n'importe quel caractère. Sans conséquence visible constatée
  sur le contenu actuel, mais un vrai bug de correction, corrigé par une fonction d'échappement.
- **Duplication de template dans `ui.js`** : `renderDocuments` (documents/certifications) et
  `renderSkills` (compétences) répétaient un bloc de rendu identique entre leur variante « avec
  sous-catégories » et leur variante « à plat ». Extrait en fonctions communes
  (`renderDocLink`/`renderDocList`, `renderSkillItems`) : même comportement, code non dupliqué.

### Corrigé (suite à l'audit QA indépendant)
- **Contraste `.project-tag` insuffisant dans les deux thèmes** : mesuré à 3,09:1 en clair et
  3,85:1 en sombre (`var(--accent-color)` sur fond degrade translucide), sous le seuil AA de
  4,5:1. Texte assombri en clair (`var(--primary-color)`, 8,40:1) et eclairci en sombre
  (`#8ab4f8`, 8,51:1) - deux couleurs differentes car le degrade de fond n'est pas le meme.
- **2 captures placeholder surdimensionnees** : `robotics.webp` (217 Ko) et `low-level.webp`
  (157 Ko) recompressees a 64 et 52 Ko (memes dimensions 800x400, qualite webp abaissee - perte
  invisible sur un simple degrade).

### Vérifié sans changement
- `sitemap.xml` et `robots.txt` de hylst.fr renvoient tous deux 404 - confirmé à nouveau, aucune
  action possible depuis ce dépôt (ce sont des fichiers du site hylst.fr, pas de ce CV).
- Le certificat LinkedIn Learning « HTML : Les images responsive » reste non résolu : le seul
  fichier PDF présent dans `pdf/certifications/linkedin_learnings/` pour ce sujet est déjà utilisé
  par « L'essentiel du HTML5 », et aucun fichier distinct n'existe pour ce certificat précis.
  Non corrigé délibérément (consigne : ne pas deviner un lien) - décision laissée à l'utilisateur.

## [3.0.0] - 2026-09-04

Mise à jour majeure : le site présentait encore un profil « en reconversion, formation en cours
jusqu'en juillet 2026 ». Il présente désormais un profil certifié et en activité.

### Ajouté
- **Titre professionnel CDA (niveau 6)** obtenu le 4 août 2026 : ajouté aux diplômes, au parcours,
  à l'identité de la barre latérale et aux données structurées Schema.org (`hasCredential`).
- **Stage Prométhée Technologies & Ingénierie** (avril-juillet 2026) : conception d'une suite
  logicielle métier souveraine - FastAPI/SQLAlchemy, Zero-Trust, Transactional Outbox, React 19,
  Offline-first, WebSockets. Ajouté au parcours et aux projets.
- **GS Solutions Numériques** : entreprise individuelle en cours de création (activité visée en
  octobre 2026), avec son offre de services, ajoutée au parcours et à la section Orientation.
- **7 nouveaux projets** : Hylst IT Learning (`hylst.fr/`), Brevet 2026 (`/brevet2026/`), Guide
  Mathématiques (`/guide_maths/`), Hylst Books & Reader (`/books_reader/`), 3D Creator
  (`/3dcreator/`), Pang Genesis (`games.hylst.fr/pang_genesis/`) et la suite logicielle Prométhée
  (sans lien public). Toutes les URL ont été vérifiées en HTTP 200.
- **Compétences** : ajout de FastAPI, SQLAlchemy, WebSockets/OpenAPI, RGAA/WCAG/ARIA,
  OWASP / sécurité applicative, authentification & droits (OAuth2, RBAC/ABAC, RLS), Zero-Trust.
- **Bloc « Disponibilité »** dans la barre latérale (ouvert au CDI et aux missions).
- **26 nouveaux termes au glossaire** (Zero-Trust, RBAC, RGAA, OWASP, SQLAlchemy, WebSockets…).
- **Toasts non bloquants** en remplacement des `alert()`.
- Zone `aria-live` pour annoncer les changements d'état aux lecteurs d'écran.

### Modifié
- **Titre et positionnement** : « Concepteur Développeur d'Applications - Full-stack · Data / IA ».
- Métadonnées SEO, Open Graph, Twitter Card et JSON-LD entièrement réalignés.
- Bouton de téléchargement pointant vers le CV 2026.
- Sections « En bref », « Ma Story », « Résumé professionnel » et « Positionnement marché »
  réécrites au présent d'un profil certifié.
- **Thème** : le mode sombre n'est plus imposé, la préférence système est respectée
  (`prefers-color-scheme`) tant que l'utilisateur n'a pas choisi.
- **nginx** : en-têtes de sécurité (CSP, HSTS, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy), compression gzip et politique de cache.

### Corrigé
- **3 liens de certificats LinkedIn morts** (Cloud computing, Docker, Git) : préfixe
  `linkedin_learnings/` manquant depuis le commit précédent - 404 sur les trois.
- **Favicon 404** : `assets/icons/favicon.ico` n'existait pas, remplacé par un SVG inline.
- **`og:image` 404** : l'aperçu était vide lors des partages sur LinkedIn.
- **Accessibilité** : piège à focus et restauration du focus dans les modales, activation des
  cartes projet à la barre d'espace autant qu'à Entrée, `aria-pressed` sur le sélecteur de thème,
  focus visible garanti, et respect de `prefers-reduced-motion`.
- **Performance** : `loading="lazy"` et dimensions explicites sur les images (moins de décalage de
  mise en page), suivi de souris synchronisé sur `requestAnimationFrame`.
- Bouton « Voir le projet » qui pointait vers `#` : remplacé par une mention explicite quand le
  projet n'a pas de lien public.
- **7 logos morts dans le parcours** : `logo.clearbit.com` ne résout plus (API gratuite fermée
  après le rachat par HubSpot). Chaque visite déclenchait 7 requêtes DNS en échec et autant
  d'erreurs console ; les logos étaient masqués par un `onerror`, donc la panne était invisible.
  Références supprimées.
- **Impression : deux tiers du contenu manquaient.** Tout le CV vit dans des `<details>`, qu'un
  navigateur ne rend pas du tout lorsqu'ils sont fermés - aucune règle CSS ne peut y remédier.
  Un couple `beforeprint`/`afterprint` (plus un repli sur `matchMedia('print')` pour Safari) les
  ouvre puis restaure exactement l'état plié du visiteur. Mesuré : 11 595 px → 27 400 px imprimés.
- **Impression depuis le thème sombre** : les variables gardaient leurs valeurs sombres, donnant
  du texte à 1,08:1 sur l'encart « Objectif ». La palette est réinitialisée en clair au print.
- **Mode rétro : trois conteneurs illisibles** (`.modal-content`, `.objective`,
  `.collapsible-card`) - texte vert sur fond resté blanc, entre 1,27:1 et 1,53:1. Fond noir ajouté.
- **Contrastes WCAG** : toast en thème sombre (3,29:1 → 15,30:1, il réutilisait `--primary-color`
  qui vire au bleu clair en sombre), pastille de disponibilité (1,98:1 → 4,72:1, seuil non-textuel
  1.4.11), sous-titre de poste (5,36:1 → 7,02:1), badge du titre en sombre (4,71:1 → 6,94:1).
- **Filtres de projets** : 4 projets n'apparaissaient sous aucun filtre et disparaissaient
  silencieusement ; « Engagement Associatif » (tag « Social ») remontait sous le filtre « IA »
  parce que `"social".includes("ia")` est vrai. Comparaison désormais sur des tags entiers,
  plus un filtre « Autres » calculé qui garantit qu'aucun projet ne devient inatteignable.
- README dupliqué trois fois, footer daté de 2025.

## [2.1.0] - 2025-12-05
### Ajouté
- **Certifications LinkedIn Learning** : Ajout d'une nouvelle catégorie dans les certifications avec liens vers les certificats en ligne et téléchargement des PDF locaux.
- **Support PDF/Lien Externe** : Mise à jour de `ui.js` pour afficher à la fois le lien externe et le téléchargement PDF.
- **Animation Nom** : Ajout d'une animation "shine" (lettres et couleurs) sur le nom dans la barre latérale.
- **Intérêts** : Ajout de "Montage vidéo" et renommage de la section en "Centres d'intérêts & loisirs".

### Modifié
- **Titre CV** : Mise à jour du titre en "Ingénieur pluridisciplinaire, puis commercial, en reconversion IT".
- **Structure du Projet** : Les fichiers PDF de LinkedIn Learning sont maintenant organisés dans un sous-dossier `pdf/certifications/linkedin_learnings/`.

### Corrigé
- **Bug d'affichage** : Correction d'un bug critique où le contenu principal disparaissait (restauration de `index.html`).
- **CSS Corrompu** : Restauration du fichier `main.css` qui avait été corrompu, rétablissant les styles Rétro et Print.

## [2.0.0] - 2025-12-04
### Ajouté
- **Refonte Complète** : Migration vers une architecture modulaire (ES Modules).
- **Fichiers Séparés** : `data.js`, `ui.js`, `utils.js`, `particles.js`.
- **Mode Rétro** : Ajout d'un thème "Matrix/Terminal" activable via Easter Egg (5 clics sur la photo).
- **Scroll Reveal** : Animation d'apparition des éléments au défilement.

### Modifié
- **CSS** : Refonte du CSS en fichiers modulaires (`base.css`, `layout.css`, `components.css`, `sections.css`).
- **Contenu** : Mise à jour majeure des compétences (Optronique, Info Indus) et du parcours.
