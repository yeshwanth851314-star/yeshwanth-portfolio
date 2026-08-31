# Dark motion portfolio redesign

## Overview
Rebuild the existing single-page portfolio around the supplied dark, oversized-type creative direction while keeping Yeshwanth’s real CV content, projects, links, and contact details.

## What will change
- Replace the light gallery layout with a near-black portfolio using Kanit, silver gradient display type, and high-contrast white sections.
- Build a full-height hero with spaced navigation, oversized “Hi, I’m Yeshwanth” typography, the edited transparent portrait, a concise developer positioning statement, and a prominent résumé button.
- Make every résumé CTA open the supplied Google Docs résumé in a new tab.
- Add restrained entrance, magnetic-hover, scroll-reveal, horizontal showcase, and sticky project-card motion with reduced-motion support.
- Adapt the reference sections to the CV:
  - showcase strip using the existing SDG Dashboard and Tiki Topple work
  - About section with Yeshwanth’s actual profile and decorated technical motifs
  - Skills/Services section using his languages, databases, tools, and core concepts
  - Project section using the two real projects, their descriptions, stacks, and GitHub links
  - Education, certificates, achievements, and contact details retained in the same visual system
- Keep responsive layouts readable on mobile and desktop, with semantic navigation and accessible image/link labels.
- Update page metadata and the font link for the final portfolio identity.

## Technical details
- Use React 19, TypeScript, Tailwind CSS v4, Lucide React, and Motion for React (Framer Motion package).
- Define all visual colors and gradient/shadow roles as semantic tokens in `src/styles.css`.
- Use the newly edited transparent portrait asset generated from the uploaded photo.
- Preserve TanStack Start routing and leaf-route SEO metadata.

## Verification
- Confirm the production preview builds without errors.
- Check hero, navigation, résumé link, project cards, and responsive behavior in a real browser at desktop and mobile widths.
