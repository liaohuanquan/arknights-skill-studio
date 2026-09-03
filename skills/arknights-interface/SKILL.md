---
name: arknights-interface
description: Design, implement, or refine web interfaces inspired by the industrial terminal language of Arknights. Use for tactical HUDs, high-contrast black-gray-white game interfaces, dashboards, admin tools, data review pages, device consoles, and reusable component libraries. Do not use to reproduce official artwork, logos, icons, characters, or protected screen layouts.
---

# Arknights-Inspired Industrial Interface

Create clear, usable, and restrained industrial terminal interfaces. Extract the visual language without copying game screens.

## Workflow

1. Inspect the existing framework, component conventions, entry points, and responsive breakpoints.
2. Define information hierarchy, primary actions, and status semantics before changing visual styles.
3. Read [references/reference-index.md](references/reference-index.md), select the closest page type, and inspect both its screenshot and source template before editing.
4. Read [references/component-studio-reference.md](references/component-studio-reference.md) for component catalogs and design-system pages, or [references/operations-dashboard-reference.md](references/operations-dashboard-reference.md) for dashboards and device consoles.
5. Record the selected reference's shell proportions, type roles, surface hierarchy, semantic accents, density, and interaction states. Treat these as composition anchors, not page requirements.
6. Read [references/visual-system.md](references/visual-system.md) for color, typography, geometry, and hierarchy rules. For numerals, signal blue, motion, or backgrounds, also read [references/terminal-theme-reference.md](references/terminal-theme-reference.md).
7. Read [references/component-patterns.md](references/component-patterns.md) when building or modifying reusable components.
8. Read [references/page-elements.md](references/page-elements.md) when selecting general interface elements. Select only what the product needs; never copy the entire reference page.
9. Read [references/examples.md](references/examples.md) when choosing page composition or copy tone.
10. Change only the code required for the requested outcome. Preserve the existing framework, business structure, behavior, and terminology.
11. Replace all reference copy and data with realistic target-product content. Never copy reference branding or page-specific information.
12. Validate layout, contrast, keyboard focus, scrolling, and core interactions at desktop and mobile widths.

## Core Constraints

- Use black, charcoal, and cool white as the base. Use bright signal blue on dark surfaces for selected markers, progress, and key values. All blue-background buttons use white text. Use deep blue for button fills and for blue text on paper.
- Use yellow for limited-time content, rewards, high-priority notices, and sparse brand lines. Use orange for unread or new markers. Reserve red for danger and failure.
- Do not use blue-purple gradients, excessive neon, low-contrast glassmorphism, or soft oversized rounded cards.
- Prefer rectangles, hard edges, thin borders, and occasional clipped corners. Keep default corner radii at `0–2px`.
- Use Noto Serif SC as the primary Chinese typeface for brand, page, section, and component titles at weights 700–900.
- Use Noto Sans SC for Chinese navigation, controls, body copy, and supporting text at weights 400 or 700 only. Use Bender 400 or 700 for numerals, dates, and numeric parts of identifiers. Use Times New Roman for Latin words. Keep code blocks on an SF Mono-first stack.
- Use Noto Sans SC for navigation by default. A brand-led studio or archive sidebar may use Noto Serif SC 700, while action controls remain sans serif.
- Build hierarchy with type scale, spacing, borders, and contrast. Use neutral geometric backgrounds with faint texture. Keep entry motion brief and decorative drift finite; respect reduced-motion preferences. Decoration must not reduce readability.
- Never communicate an important state with color alone. Buttons must not change on Hover; provide pressed, selected, focus, and disabled states instead.
- Do not copy game logos, official icons, characters, artwork, or exact layouts. Reuse only typography, panel hierarchy, and industrial interface principles.

## Implementation Principles

- Match the existing technology stack. Do not rewrite the project for a visual change.
- Prefer CSS variables for shared design tokens.
- Preserve wheel and touch scrolling. When hiding scrollbars, support both WebKit and Firefox.
- Distinguish a "Skill Rules Summary" from the actual `SKILL.md`. Label content as `SKILL.md` only when it represents the complete source file.
- Format debug logs as `console.log('[functionName] log message')`.
- Avoid single-use abstractions and unnecessary component dependencies.

## Validation

- Run the project's existing build, type-check, and test commands.
- Inspect at least one desktop width and one mobile width.
- Verify computed typefaces and weights for primary titles, body text, Latin labels, and code.
- Verify that there is no horizontal overflow, clipped content, misplaced errors, or unreachable controls.
- Clearly separate static inspection, successful builds, and browser-tested results.
