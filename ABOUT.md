# À Propos du Projet CV Interactif

Ce projet est le CV interactif et le portfolio de **Geoffroy Streit**, **Concepteur Développeur
d'Applications** (titre professionnel de niveau 6 délivré par le Ministère du Travail, août 2026),
ancien ingénieur en sciences de l'industrie et manager commercial.

Il sert un double objectif : présenter un parcours, et **démontrer par lui-même** les compétences
qu'il revendique - accessibilité, sécurité applicative, qualité de conception.

## Fonctionnalités Clés

* **Design responsive & moderne** : CSS Grid/Flexbox, variables CSS, glassmorphism.
* **Interactivité** : animations au défilement, modales, filtrage des projets, infobulles
  automatiques sur le vocabulaire technique (glossaire de ~90 termes).
* **Thèmes** : clair, sombre (suivant la préférence système) et un mode « Rétro » caché.
* **Accessibilité** : navigation clavier complète, lien d'évitement, piège à focus dans les
  modales, annonces `aria-live`, et respect de `prefers-reduced-motion` (les animations et le
  canvas de particules ne se lancent pas si le système demande moins de mouvement).
* **Architecture modulaire** : modules ES6 (`main.js`, `data.js`, `ui.js`, `utils.js`,
  `particles.js`).
* **Données séparées** : tout le contenu est dans `data.js`, pour une maintenance sans toucher au
  HTML.

## Stack Technique

* **Frontend** : HTML5, CSS3 (vanilla), JavaScript (ES6+ modules).
* **Assets** : FontAwesome pour les icônes, Google Fonts (Inter, Roboto).
* **Déploiement** : image Docker `nginx:alpine`, avec en-têtes de sécurité (CSP, HSTS,
  X-Frame-Options…), compression gzip et politique de cache.
* **Outils** : aucun framework ni build step, volontairement - le projet reste léger, auditable et
  démarrable en une commande.

## Auteur

Geoffroy Streit - [geoffroy.streit@gmail.com](mailto:geoffroy.streit@gmail.com)
Plateforme personnelle : [hylst.fr](https://hylst.fr) · GitHub : [Hylst](https://github.com/Hylst)
