# 10 Fonctionnalités CSS Modernes - Cheat Sheet

##  Choix Techniques
* **Architecture Vanilla :** Le projet est construit entièrement en HTML5, CSS3 et JavaScript pur (Vanilla JS). L'absence de framework permet de démontrer la puissance et les capacités natives des navigateurs modernes.
* **Design System "School / Chalkboard" :** 
  * Utilisation de variables CSS (`:root`) pour gérer la palette de couleurs thématique (craie blanche, post-its colorés, fond de tableau vert).
  * Typographie adaptée avec `Gochi Hand` pour le côté manuscrit et `Inter` pour la lisibilité des démonstrations.
  * Navigation stylisée sous forme de notes adhésives (Post-its) avec des rotations asymétriques via la propriété `transform`.
* **Mise en page :** Utilisation de CSS Grid et Flexbox pour assurer une disposition fluide, centrée et un design responsive.
* **Amélioration Progressive (Progressive Enhancement) :** Les nouvelles propriétés (ex: `@property`, `interpolate-size`) sont implémentées de manière à ce que l'interface reste utilisable et esthétique même sur les navigateurs ne les supportant pas encore.

##  Limites et Bugs Connus
* **Compatibilité Navigateur Restreinte :** La majorité de ces fonctionnalités datant de 2024/2025 (comme `text-box-trim` ou `progress()`), elles nécessitent des navigateurs mis à jour très récemment (Chrome 129+, Firefox 126+). Sur les anciennes versions, le rendu basculera sur les styles de secours (fallbacks).
* **Positionnement des Ancres (Anchor Positioning) :** Sur les navigateurs incompatibles, l'infobulle (tooltip) perd son comportement de collision dynamique. Le projet utilise une dégradation gracieuse pour un affichage fixe plutôt que d'importer une lourde librairie comme Popper.js.
* **Redimensionnement (Field Sizing) :** Le comportement de `field-sizing: content` peut potentiellement causer des sauts de mise en page inattendus si l'utilisateur saisit ou colle un bloc de texte extrêmement long et qu'aucune limite `max-width` ou `max-height` stricte n'est appliquée.
* **Validation Utilisateur (`:user-invalid`) :** Le fallback pour les anciens navigateurs (souvent via `:invalid:not(:placeholder-shown)`) n'offre pas la même finesse d'expérience utilisateur (UX) que la pseudo-classe native.

