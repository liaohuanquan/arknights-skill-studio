# Terminal Typography, Blue, Motion, and Background

Use this supplement when selecting numerical typography, dark-surface accents, motion, or atmosphere. Keep the composition reference appropriate to the target product.

Visual reference: [Yue-plus/hexo-theme-arknights](https://github.com/Yue-plus/hexo-theme-arknights), inspected at `f0f9bb2` (2026-07-13). Extract its number shapes, cyan state markers, short transitions, and subdued background depth. Use the bundled templates for the implementation; they retain the target product's own layout and interactions.

| Element | Application |
| --- | --- |
| Numerals | Bender 400 or 700 for digits, dates, counters, ratios, and numeric parts of identifiers. Let Chinese and Latin words retain their existing families. Keep code on its monospace stack. |
| Signal blue | `#22bbff` for selected markers, progress, and important values on charcoal. All blue-background buttons use white text on `#22bbff`. Use deeper blue `#006b8c` only for blue text on paper. |
| State motion | Use 160ms transitions for selection markers, 320ms opacity/8px translation for entering content, and up to 640ms for a progress fill entering view. Display actual values immediately. |
| Atmosphere | Neutral industrial silhouettes, faint surface texture, and sparse dust behind opaque content surfaces. Sparse white particles drift continuously, with small soft halos and varied speeds. Pause the canvas when the tab is hidden. |
| Pointer | A 36px thin ring follows the mouse with slight lag, shrinks to 24px over controls, and emits a 500ms click ripple. Retain the native pointer and disable the extra effect on touch or reduced motion. |

The examples implement these shared details in `src/terminal-effects.js`, `src/terminal.css`, and `src/assets/`. The Bender files are distributed with their original OFL license and source note in `public/fonts/`, which Vite also copies into the production build. The geometric SVG backdrop and canvas particle implementation are original project assets.

## Adaptation

- On a light surface, use the deeper blue for readable labels; preserve the existing high-contrast keyboard focus ring; use bright blue as a marker backed by text or shape. Blue button labels remain white.
- Keep particles behind content and cursor feedback above it; both layers must ignore pointer events and be hidden from assistive technology. On `prefers-reduced-motion: reduce`, freeze particles, remove cursor effects, and disable animations, transitions, and smooth scrolling.
- Do not animate numeric values through invented intermediate readings. Do not replay entry animation on telemetry updates.
- Preserve the no-button-Hover rule. Express a changed state through pressed, selected, focus, disabled, or expanded states.
- Use event delegation for cursor feedback on dynamic controls. Clean up listeners and animation frames on unmount or hot reload. Keep the native pointer; music and official artwork are outside this visual treatment.
