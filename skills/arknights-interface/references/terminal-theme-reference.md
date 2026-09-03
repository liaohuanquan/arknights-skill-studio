# Terminal Typography, Blue, Motion, and Background

Use this supplement when selecting numerical typography, dark-surface accents, motion, or atmosphere. Keep the composition reference appropriate to the target product.

Visual reference: [Yue-plus/hexo-theme-arknights](https://github.com/Yue-plus/hexo-theme-arknights), inspected at `f0f9bb2` (2026-07-13). Extract its number shapes, cyan state markers, short transitions, and subdued background depth. Use the bundled templates for the implementation; they retain the target product's own layout and interactions.

| Element | Application |
| --- | --- |
| Numerals | Bender 400 or 700 for digits, dates, counters, ratios, and numeric parts of identifiers. Let Chinese and Latin words retain their existing families. Keep code on its monospace stack. |
| Signal blue | `#22bbff` for selected markers, progress, and important values on charcoal. All blue-background buttons use white text on `#006b8c`. Use the same deeper blue for blue text on paper. |
| State motion | Use 160ms transitions for selection markers, 320ms opacity/8px translation for entering content, and up to 640ms for a progress fill entering view. Display actual values immediately. |
| Atmosphere | Neutral industrial silhouettes, faint surface texture, and sparse dust behind opaque content surfaces. The example dust settles after a single 4.8s arrival animation. |

The examples implement these shared details in `src/terminal.css` and `src/assets/`. The Bender files are distributed with their original OFL license and source note in `public/fonts/`, which Vite also copies into the production build. The geometric SVG backdrop and dust are original project assets.

## Adaptation

- On a light surface, use the deeper blue for readable labels; preserve the existing high-contrast keyboard focus ring; use bright blue as a marker backed by text or shape. Blue button labels remain white.
- Keep decorative motion behind content, non-interactive, and finite. On `prefers-reduced-motion: reduce`, render the final state immediately and disable animations, transitions, and smooth scrolling.
- Do not animate numeric values through invented intermediate readings. Do not replay entry animation on telemetry updates.
- Preserve the no-button-Hover rule. Express a changed state through pressed, selected, focus, disabled, or expanded states.
- Keep the native pointer. The reference's music, official artwork, and custom cursor are not required for this visual treatment.
