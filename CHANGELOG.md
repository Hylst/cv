# Changelog

## [3.0.0] - 2026-09-04

Mise à jour majeure : le site présentait encore un profil « en reconversion, formation en cours
jusqu'en juillet 2026 ». Il présente désormais un profil certifié et en activité.

### Ajouté
- **Titre professionnel CDA (niveau 6)** obtenu le 4 août 2026 : ajouté aux diplômes, au parcours,
  à l'identité de la barre latérale et aux données structurées Schema.org (`hasCredential`).
- **Stage Prométhée Technologies & Ingénierie** (avril-juillet 2026) : conception d'une suite
  logicielle métier souveraine — FastAPI/SQLAlchemy, Zero-Trust, Transactional Outbox, React 19,
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
- **Titre et positionnement** : « Concepteur Développeur d'Applications — Full-stack · Data / IA ».
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
  `linkedin_learnings/` manquant depuis le commit précédent — 404 sur les trois.
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
  navigateur ne rend pas du tout lorsqu'ils sont fermés — aucune règle CSS ne peut y remédier.
  Un couple `beforeprint`/`afterprint` (plus un repli sur `matchMedia('print')` pour Safari) les
  ouvre puis restaure exactement l'état plié du visiteur. Mesuré : 11 595 px → 27 400 px imprimés.
- **Impression depuis le thème sombre** : les variables gardaient leurs valeurs sombres, donnant
  du texte à 1,08:1 sur l'encart « Objectif ». La palette est réinitialisée en clair au print.
- **Mode rétro : trois conteneurs illisibles** (`.modal-content`, `.objective`,
  `.collapsible-card`) — texte vert sur fond resté blanc, entre 1,27:1 et 1,53:1. Fond noir ajouté.
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
