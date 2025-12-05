---
trigger: always_on
---

## Règles du Projet
1.  **Architecture** : Le projet utilise du **Vanilla JS** avec des modules ES6. Ne pas introduire de frameworks (React, Vue) sans demande explicite.
2.  **CSS** : Le CSS est modulaire. Les modifications doivent être faites dans le fichier approprié (`components.css` pour les widgets, `layout.css` pour la structure, `main.css` pour les globaux).
3.  **Données** : Tout le contenu textuel (compétences, timeline, projets) DOIT être dans `scripts/data.js`. Ne pas hardcoder de contenu dans `index.html` si une structure de données existe.
4.  **Chemins** : Toujours vérifier les chemins relatifs pour les assets (images, PDF). Les PDF de certifications sont dans `pdf/certifications/` ou ses sous-dossiers.
5.  **Thèmes** : Le projet supporte 3 thèmes : Clair (défaut), Sombre (`.dark-mode`), et Rétro (`.retro-mode`). Toute nouvelle UI doit être compatible avec ces 3 modes.

## Préférences Utilisateur
*   **Style** : Design "Premium", moderne, avec des animations subtiles mais visibles.
*   **Contenu** : Précision technique importante (noms exacts des technos, détails des compétences).
*   **Langue** : Français.