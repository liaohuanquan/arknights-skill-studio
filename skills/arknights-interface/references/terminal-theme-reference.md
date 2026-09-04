# Terminal Navigation, Typography, Blue, Motion, and Background

Use this supplement when selecting sidebar navigation, numerical typography, dark-surface accents, motion, or atmosphere. Keep the composition reference appropriate to the target product.

Visual reference: [Yue-plus/hexo-theme-arknights](https://github.com/Yue-plus/hexo-theme-arknights), inspected at `f0f9bb2` (2026-07-13). Extract its number shapes, cyan state markers, short transitions, and subdued background depth. Use the bundled templates for the implementation; they retain the target product's own layout and interactions.

| Element | Application |
| --- | --- |
| Sidebar | Narrow width: 152px desktop, 144px on narrower desktop screens. Transparent charcoal surface, one thin outer divider, a quiet navigation filter near the top, centered unboxed white links in a compact vertical group, and a blue current item. Use 16px regular-weight Bender for Latin and system sans-serif (PingFang SC, Microsoft YaHei, sans-serif) for Chinese; keep the current item at weight 400 and the filter at 15px; omit desktop icons, number badges, selected fills, and large brand blocks. |
| Numerals | Bender 400 or 700 for digits, dates, counters, ratios, and numeric parts of identifiers. Let Chinese and Latin words retain their existing families. Keep code on its monospace stack. |
| Signal blue | `#22bbff` for selected controls, state markers, and progress fills on both light and dark surfaces, and important values on charcoal. Switches, checkboxes, radios, sliders, steps, and selected options share this signal-blue token. All blue-background buttons use white text on `#22bbff`. Use deeper blue `#006b8c` only for blue text on paper. |
| State motion | Use 160ms transitions for selection markers, 320ms opacity/8px translation for entering content, and up to 640ms for a progress fill entering view. Display actual values immediately. |
| Atmosphere | Neutral industrial silhouettes, faint surface texture, and sparse dust behind opaque content surfaces. Set the initial particle count to `floor((width + height) / 38)`. Randomize leftward speed from `1–2px` and upward speed from `0.01–1.01px` per animation frame. Use `0.5–2px` horizontal radii, vertical radii at `0.3–1.3` times that size, and random `0–3px` soft halos with slight offsets to imply depth. Clear the previous `12px` region before each move and respawn escaped particles at a random height on the right edge. Pause the canvas when the tab is hidden. |
| Pointer | Use the compact 6px theme pointer. Above 768px, add a 36px `#ccc` ring, follow with `min(0.025 × elapsed milliseconds, 1)`, shrink the ring to 24px with a 53% white fill over controls, and emit one 80px, 4px-border ripple for 500ms. Disable the extra ring and ripple on touch or reduced motion. |

The bundled example implements these shared details in `src/terminal-navigation.js`, `src/terminal-navigation.css`, `src/terminal-effects.js`, `src/terminal.css`, and `src/assets/`. The Bender files are distributed with their original OFL license and source note in `public/fonts/`, which Vite also copies into the production build. The geometric SVG backdrop and canvas particle implementation are original project assets.

## Adaptation

- On a light surface, use the deeper blue for readable labels; preserve the existing high-contrast keyboard focus ring; use bright blue as a marker backed by text or shape. Blue button labels remain white.
- Keep particles behind content and cursor feedback above it; both layers must ignore pointer events and be hidden from assistive technology. On `prefers-reduced-motion: reduce`, freeze particles, remove cursor effects, and disable animations, transitions, and smooth scrolling.
- Do not animate numeric values through invented intermediate readings. Do not replay entry animation on telemetry updates.
- Preserve the no-button-Hover rule. Express a changed state through pressed, selected, focus, disabled, or expanded states.
- Use event delegation for cursor feedback on dynamic controls. Clean up listeners, timers, and animation frames on unmount or hot reload. Keep the compact theme pointer while disabling its extra ring below 769px; music and official artwork are outside this visual treatment.
