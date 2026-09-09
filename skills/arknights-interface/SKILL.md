---
name: arknights-interface
description: Design, implement, or refine web interfaces inspired by the industrial terminal language of Arknights. Use for tactical HUDs, high-contrast black-gray-white game interfaces, dashboards, admin tools, data review pages, device consoles, and reusable component libraries. Do not use to reproduce official artwork, logos, icons, characters, or protected screen layouts.
---

# Arknights-Inspired Industrial Interface

Create clear, usable, and restrained industrial terminal interfaces using the verified PRTS studio as the visual baseline. Extract the visual language without copying game screens.

For a ready-to-use Chinese page-generation prompt, read [PRTS Visual Prompt](assets/templates/component-studio/src/visual-prompt.md). It is also the text displayed, copied, and downloaded by the bundled studio; it is a prompt, not a replacement for this complete skill.

## Workflow

1. Inspect the existing framework, component conventions, entry points, and responsive breakpoints.
2. Define information hierarchy, primary actions, and status semantics before changing visual styles.
3. Before creating or changing any UI, including a single component, inspect the closest example in [the component-studio source](assets/templates/component-studio/src/main.js) and its selectors, shared tokens, and breakpoints in [the stylesheet](assets/templates/component-studio/src/style.css). These examples are the concrete implementation reference, not optional inspiration. Inspect the matching area in a running template or preview when available; use [references/reference-index.md](references/reference-index.md) to locate further visual references.
4. Read [references/component-studio-reference.md](references/component-studio-reference.md) for component catalogs and design-system pages. For dashboards, device consoles, and other product pages, use the composition guidance in [references/examples.md](references/examples.md) and [references/component-patterns.md](references/component-patterns.md).
5. Carry the relevant example's proportions, type roles, surfaces, colors, spacing, and interaction states into the target project's existing component system. When no exact example exists, extend the closest pattern and shared tokens. The template's native HTML/CSS does not require a framework migration or copying its full page composition.
6. Read [references/visual-system.md](references/visual-system.md) for color, typography, geometry, and hierarchy rules. For sidebar navigation, numerals, signal blue, motion, or backgrounds, also read [references/terminal-theme-reference.md](references/terminal-theme-reference.md).
7. Read [references/component-patterns.md](references/component-patterns.md) when building or modifying reusable components.
8. Read [references/page-elements.md](references/page-elements.md) when selecting general interface elements. Select only what the product needs; never copy the entire reference page.
9. Read [references/examples.md](references/examples.md) for page composition. For Arknights/PRTS UI copy, read [references/interface-language.md](references/interface-language.md) before naming sections, actions or states; it distinguishes official evidence from original adaptations.
10. Change only the code required for the requested outcome. Preserve the existing framework, business structure, behavior, and terminology.
11. Replace all reference copy and data with realistic target-product content. Never copy reference branding or page-specific information.
12. Validate layout, contrast, keyboard focus, scrolling, and core interactions against the selected example at desktop and mobile widths. Briefly identify which example informed the implementation. If the template is unavailable, state that and request the files rather than claiming to have inspected it.

## Required Typography and Pointer Rules

- Use exactly three font-size tokens: `--text-sm: .75rem` (12px at the default root size) for supporting text, `--text-md: 1rem` (16px) for body, buttons, inputs, navigation, tables and code, and `--text-lg: 1.5rem` (24px) for titles and key metrics. Preserve browser zoom and the default root size.
- Map every `font-size` and font shorthand to these tokens, including placeholders, pseudo-elements and small/sup/sub text. Do not add component-specific sizes, fluid font-size values or text scaling. Keep the same three sizes on mobile; use wrapping, spacing, weight and color for hierarchy.
- These rules supersede historical sizes in the bundled template and screenshots. Inspect the examples, then map their typography to the three tokens; do not claim the unmodified legacy template already meets this constraint.
- Read [scrolling and pointer rules](references/visual-system.md#scrolling-and-pointer-rules) for every UI implementation, including individual components. Reuse both `src/terminal.css` and `src/terminal-effects.js` from the template when implementing its cursor: the 6px white pointer, 36px lagging ring, 24px interactive ring and 80px click ripple are one shared behavior, mounted once per application.

## Core Constraints

- Use black, charcoal, and cool white as the base. Use signal blue `#22bbff` for selected controls, progress fills, state markers, and key values on dark surfaces. Switches, checkboxes, radios, sliders, steps, and selected options use this same blue on both light and dark surfaces; any legacy `--cyan` control token must reference `--signal-blue`. All blue-background buttons use reference blue `#22bbff` with white text. Use deep blue only for blue text on paper, not as a substitute button fill.
- Use yellow for limited-time content, rewards, high-priority notices, and sparse brand lines. Use orange for unread or new markers. Reserve red for danger and failure.
- Do not use blue-purple gradients, excessive neon, low-contrast glassmorphism, or soft oversized rounded cards.
- Prefer rectangles, hard edges, thin borders, and occasional clipped corners. Keep default corner radii at `0–2px`.
- Use Noto Serif SC as the primary Chinese typeface for brand, page, section, and component titles at weights 700–900.
- Use Noto Sans SC for Chinese controls, body copy, and supporting text at weights 400 or 700 only. Use Bender 400 or 700 for numerals, dates, and numeric parts of identifiers. Use Bender for sidebar Latin labels and Times New Roman for other Latin words. Keep code blocks on an SF Mono-first stack.
- Keep desktop sidebars narrow: default to 152px, or 144px on narrower desktop screens, using one width token for the rail and content offsets. Group 64px navigation rows with 8px gaps below the filter; do not stretch them across the viewport height. Use a transparent charcoal sidebar with centered, unboxed text links grouped in a compact vertical rhythm. Use 16px regular-weight sidebar labels: Bender for Latin and system sans-serif for Chinese (PingFang SC, Microsoft YaHei, sans-serif). Use the same font stack at 16px for the navigation filter. Keep the current item at weight 400, mark it in blue with `aria-current`; omit large brand blocks, item borders, icons, number badges, and filled selected cards on desktop.
- Build hierarchy with type scale, spacing, borders, and contrast. Use neutral geometric backgrounds with faint texture. Keep entry motion brief. For the terminal treatment, reuse the bundled particle and cursor implementations and the numerical parameters in [references/terminal-theme-reference.md](references/terminal-theme-reference.md); include the 6px pointer, lagging ring, and click ripple. Pause particles in hidden tabs; reduced-motion preferences freeze particles and disable the ring. Decoration must not reduce readability.
- When the product explicitly calls for a PRTS-style terminal voice, use short declarative system copy and a restrained vocabulary of protocols, archives, commands, nodes, links, transfers, and status reports. Start buttons with a concrete action and keep the affected object visible. Use functional section names, concrete action verbs and factual status reports; do not rename every operation as a protocol or command. Follow [references/interface-language.md](references/interface-language.md); do not copy dialogue, lore text, or branded phrases from the game.
- Never communicate an important state with color alone. Buttons must not change on Hover; provide pressed, selected, focus, and disabled states instead.
- Do not copy game logos, official icons, characters, artwork, or exact layouts. Reuse only typography, panel hierarchy, and industrial interface principles.

## Implementation Principles

- Match the existing technology stack and reuse existing components. Prefer shadcn/ui when a compatible component foundation is needed; do not rewrite the project for a visual change.
- Prefer CSS variables for shared design tokens.
- Hide the outer page/workspace scrollbar using both Firefox and WebKit rules while keeping `overflow: auto`; use thin scrollbars for overflowing sidebars and local code/prompt areas. Preserve wheel, touch and keyboard access, visible focus and native mobile scrolling; never hide overflow to imitate a hidden scrollbar.
- Distinguish a "Skill Rules Summary" from the actual `SKILL.md`. Label content as `SKILL.md` only when it represents the complete source file.
- Format debug logs as `console.log('[functionName] message', data)` with the actual function name and relevant non-sensitive data.
- Avoid single-use abstractions and unnecessary component dependencies.

## Validation

- Run the project's existing build, type-check, and test commands.
- Run the page and inspect a 1920×1080 desktop viewport and a mobile viewport. Save a desktop screenshot outside the project for delivery, using the browser workflow required by the target project.
- Verify computed typefaces and weights for primary titles, body text, Latin labels, and code. Check 152/144px sidebar widths, compact row spacing, blue fills with white text, unchanged button Hover colors, cursor feedback, and reduced-motion behavior when those elements are present.
- Audit computed font sizes against the three tokens across desktop/mobile, controls and pseudo-elements, accounting for browser zoom; test keyboard scrolling and pointer/ring/ripple behavior separately.
- Verify that there is no horizontal overflow, clipped content, misplaced errors, or unreachable controls.
- Clearly separate static inspection, successful builds, and browser-tested results.
