# FEATURES.md

Fonctionnalités du CV numérique de **Geoffroy Streit** (Concepteur Développeur d'Applications,
niveau 6, août 2026). Ce site est un CV qui démontre par lui-même les compétences qu'il
revendique : interface soignée, accessibilité, sécurité, qualité de conception.

## Interface & Expérience Utilisateur

* **Design responsive & moderne** : CSS Grid / Flexbox, variables CSS, glassmorphism,
  thème adapté aux deux modes (clair / sombre) avec respect de la préférence système.
* **Trois thèmes** : clair, sombre, et un mode « Rétro » caché (easter egg activable au
  clavier) qui remet le site en vert néon sur fond noir, clins d'œil aux années 1980.
* **Animations au défilement** (`reveal`) : apparition en douceur des sections, avec
  respect de `prefers-reduced-motion` (les animations et le canvas de particules ne se
  lancent pas si le système demande moins de mouvement).
* **Fond animé de particules** : réseau de points interactif dans la section d'accueil.
* **Modales projet** : ouverture des fiches détaillées avec piège à focus clavier et
  fermeture par Échap.

## Contenu & Interactions

* **Timeline basculable** : vue chronologique ou par catégorie (Formations / Expériences
  professionnelles), cartes dépliables.
* **Offre de services interactive** (GS Solutions Numériques) : accordéon sur **2 niveaux**
  - six familles de services (Développement d'applications & sites, Numérisation / données
  & gouvernance, Conseil & intégration d'IA, Gestion de projets, Design & médias,
  Rédaction) ; chaque famille se déplie pour révéler le détail de ses prestations et ses
  engagements (RGAA/WCAG, RGPD, souveraineté, AI Act).
* **Compétences organisées en catégories** dépliables, avec statut visuel (acquis / en
  cours) et légende `* Bases | ** Notions`.
* **Glossaire automatique** : les termes techniques du site reçoivent une infobulle
  explicative (~90 termes), vérifiée au survol et au clavier.
* **Projets** : cartes filtrées par thème, captures d'écran réelles, liens vers les
  réalisations en ligne (hylst.fr, Vercel...).
* **Certifications & diplômes** : cartes cliquables avec fichiers PDF téléchargeables.
* **Impression** : feuille de style dédiée (Ctrl+P) qui produit un CV papier propre.

## Accessibilité (RGAA / WCAG)

* Navigation clavier complète, lien d'évitement, ordre de lecture logique avec ARIA.
* Piège à focus dans les modales, annonces `aria-live` pour les changements d'état.
* Contraste WCAG 1.4.11 vérifié sur le liseré de statut des compétences.
* Respect de `prefers-reduced-motion`.
* Aucun élément interactif imbriqué dans les `<summary>` (validé headless Chrome).

## Sécurité & Performance

* **En-têtes HTTP de sécurité** (nginx) : `Content-Security-Policy`, `Strict-Transport-Security`,
  `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
* **Compression gzip** et **politique de cache** fine (HTML revalidé à chaque visite,
  assets et PDF mis en cache).
* **Aucune dépendance de build** : HTML/CSS/JS vanilla, modules ES6, aucun framework
  externe. Démarrage en une commande (`python -m http.server`).
* Site statique auditable, aucune donnée utilisateur traitée.

## SEO & Partage

* Balisage **Schema.org JSON-LD** (fiche `Person`), Open Graph (Facebook / LinkedIn),
  Twitter Card, canonical, `sitemap.xml`, `robots.txt`.

## Déploiement

* Image Docker `nginx:alpine` (voir `Dockerfile` et `nginx.conf`).
* En production : déployé via **Coolify** sur un VPS Hostinger, domaine
  `cv.hylst.fr` (HTTPS géré par le reverse proxy).
* Mise à jour : `git push` sur `origin/main` puis **redeploy manuel dans Coolify**
  (le webhook GitHub ne déclenche pas toujours le déploiement automatiquement).

---
*Document mis à jour le 9 septembre 2026.*