# CV Interactif - Geoffroy Streit

CV interactif et portfolio de **Geoffroy Streit**, Concepteur Développeur d'Applications
(titre professionnel de niveau 6, obtenu en août 2026).

🌐 En ligne : [cv.hylst.fr](https://cv.hylst.fr/)

## 📚 Documentation

* [À Propos](ABOUT.md) - le projet et sa stack technique.
* [Fonctionnalités](FEATURES.md) - les fonctionnalités détaillées du site.
* [Changelog](CHANGELOG.md) - historique des versions.
* [CLAUDE.md](CLAUDE.md) - architecture et conventions, pour le développement assisté par IA.
* [Règles IA](ai_dev_rules_memory_recall.md) - mémoire contextuelle des sessions IA.

## 🚀 Lancement

Site statique : ni build, ni gestionnaire de paquets, ni dépendances à installer.

```bash
# Un serveur local est nécessaire : les modules ES6 ne se chargent pas en file://
python -m http.server 8765
# puis ouvrir http://127.0.0.1:8765/
```

Ou, pour reproduire la production (nginx) :

```bash
docker build -t cv .
docker run -p 8080:80 cv
```

## 🌍 Déploiement en ligne

En production, le site est servi via **Docker + nginx** puis exposé sur
[https://cv.hylst.fr/](https://cv.hylst.fr/) par **Coolify** (VPS Hostinger, HTTPS via le
reverse proxy).

Pour publier une mise à jour :

```bash
git push origin main
# puis : redeploy manuel de l'application `cv` dans Coolify
# (le webhook GitHub ne déclenche pas toujours le déploiement automatiquement)
```

## 🛠 Structure

| Chemin | Rôle |
|---|---|
| `index.html` | Point d'entrée unique, structure des sections. |
| `scripts/data.js` | **Tout le contenu du CV** (compétences, parcours, projets, certifications, glossaire). |
| `scripts/main.js` | Point d'entrée JS : orchestre les modules au chargement. |
| `scripts/ui.js` | Rendu du DOM et interactions (timeline, projets, thème, modales). |
| `scripts/utils.js` | Utilitaires : infobulles du glossaire, mode rétro, toasts. |
| `scripts/particles.js` | Animation de particules de la section d'accueil. |
| `styles/` | CSS modulaire, importé en cascade par `main.css`. |
| `assets/` | Photo, illustrations et visuels de projets. |
| `pdf/` | CV, diplômes et certifications téléchargeables. |

## ✨ Fonctionnalités

* Contenu généré dynamiquement depuis `data.js`.
* Trois thèmes : clair, sombre (suit la préférence système) et rétro (easter egg).
* Infobulles explicatives automatiques sur les termes techniques.
* Timeline basculable : chronologique ou par catégorie.
* Accessibilité : navigation clavier, lien d'évitement, piège à focus dans les modales,
  respect de `prefers-reduced-motion`.
* Impression : feuille de style dédiée (Ctrl+P).

---
*Dernière mise à jour : septembre 2026*
