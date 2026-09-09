# CV Interactif - Geoffroy Streit

CV interactif et portfolio de **Geoffroy Streit**, Concepteur Développeur d'Applications
(titre professionnel de niveau 6, obtenu en août 2026).

🌐 En ligne : [cv.hylst.fr](https://cv.hylst.fr/)

## 💡 Le concept : un CV qui démontre par lui-même

Ce site ne se contente pas de *dire* ce qu'il vaut : il le **montre**. Choisies volontairement,
ses orientations techniques illustrent les compétences qu'il revendique :

* **Accessibilité réelle** (navigation clavier complète, pièges à focus, `aria-live`,
  `prefers-reduced-motion`) - parce qu'elle s'écrit dans le code, pas dans un discours.
* **Sécurité applicative** (en-têtes CSP, HSTS, X-Frame-Options, politique de cache) - livrées
  par l'image Docker de production, pas ajoutées après coup.
* **Qualité de conception** (zéro framework, zéro build step, contenu séparé de la présentation) -
  le projet reste léger, auditable et démarrable en une commande.

## ✨ Ce que propose le site

* **Contenu entièrement dynamique** : compétences, parcours, projets, certifications et glossaire
  générés depuis une source de données unique (`data.js`).
* **Trois thèmes** : clair, sombre (suit la préférence système) et un mode « Rétro » caché -
  vert néon sur fond noir, clin d'œil aux années 1980.
* **Infobulles pédagogiques** : ~90 termes techniques du glossaire expliqués automatiquement
  au survol, pour rendre le CV lisible par des non-spécialistes.
* **Timeline basculable** : parcours chronologique ou regroupé par catégorie.
* **Modales projet** : fiches détaillées accessibles clavier (piège à focus, fermeture Échap).
* **Animation de particules** interactive dans la section d'accueil, désactivée si le système
  demande moins de mouvement.
* **Impression soignée** : feuille de style dédiée (Ctrl+P) pour une version papier propre.
* **SEO et partage** : métadonnées Open Graph, sitemap, domaine dédié.

## 📄 Documents téléchargeables

CV papier, diplômes et certifications sont disponibles dans la section prévue du site
(fichiers sources dans `pdf/`).

## 🛠 Aperçu technique

| Élément | Choix |
|---|---|
| Frontend | HTML5, CSS3 et JavaScript ES6+ **vanilla** - volontairement sans framework ni build step |
| Architecture | Modules ES6 modulaires ; contenu isolé dans `data.js`, présentation dans `styles/` |
| Icônes / polices | FontAwesome, Google Fonts (Inter, Roboto) |
| Production | Image Docker `nginx:alpine` : en-têtes de sécurité, gzip, cache |
| Accessibilité | WCAG au quotidien : clavier, focus, `aria-live`, `prefers-reduced-motion` |

Le dépôt est **volontairement épuré** : aucune trace de conception assistée par IA, aucun fichier
de session de développement - uniquement le site et sa documentation.

## 📚 Documentation

* [À Propos](ABOUT.md) - le projet, ses objectifs et sa stack technique.
* [Fonctionnalités](FEATURES.md) - les fonctionnalités détaillées du site.
* [Changelog](CHANGELOG.md) - historique des versions.

## 🧭 Reproduction locale

Site statique sans dépendance : un simple serveur local suffit (les modules ES6 ne se chargent
pas en `file://`).

```bash
python -m http.server 8765
# puis ouvrir http://127.0.0.1:8765/
```

---

*Auteur : Geoffroy Streit* · [hylst.fr](https://hylst.fr) · GitHub : [Hylst](https://github.com/Hylst)
*Dernière mise à jour : septembre 2026*