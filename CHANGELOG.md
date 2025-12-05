# Changelog

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
