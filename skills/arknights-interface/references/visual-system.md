# Visual System

## Color

```css
:root {
  --canvas: #d2d3d3;
  --paper: #f1f1f0;
  --ink: #242627;
  --panel-dark: #303233;
  --muted: #777b7d;
  --primary-cyan: #22bbff;
  --text-cyan: #006b8c;
  --signal-blue: #22bbff;
  --success: #45c685;
  --warning: #ffd200;
  --danger: #d74a40;
  --resource-orange: #dc6900;
  --timer-rose: #9d4d67;
}
```

- Cover most of the interface with black, charcoal, gray, and cool white.
- Use signal blue `#22bbff` for selected markers, progress, and critical readings on dark surfaces.
- All blue-background buttons must use white text on reference blue `#22bbff`. Keep deep blue `#006b8c` for text on paper; do not darken button fills when applying white labels. Preserve the target product's high-contrast keyboard focus ring. Keep blue markers paired with a label, shape, or state change.
- Use yellow for limited-time content, rewards, and high-priority notices. Use orange for unread, new, or updated markers.
- Allow sparse yellow rules, nodes, and diagonal connections in a brand hero. Do not make yellow the default decoration for ordinary components.
- Reserve red for danger, failure, and irreversible actions. Do not use semantic colors as arbitrary decoration.
- Do not use blue-purple gradients. Create depth with tonal opacity, subtle grain, diagonal connections, or solid color regions.

## Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&family=Noto+Serif+SC:wght@400;700;900&display=swap");

@font-face {
  font-family: "Interface Numeric";
  src: url("./assets/Bender-Regular.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
  unicode-range: U+0025, U+002B-003A, U+00B0, U+00D7, U+2032-2033, U+2212;
}

@font-face {
  font-family: "Interface Latin";
  src: local("Times New Roman"), local("TimesNewRomanPSMT");
  font-weight: 400;
  unicode-range: U+0020-007E, U+00A0-00FF;
}

:root {
  --font-serif: "Interface Numeric", "Interface Latin", "Noto Serif SC", serif;
  --font-sans: "Interface Numeric", "Interface Latin", "Noto Sans SC", Roboto, Arial, sans-serif;
  --font-latin: "Interface Numeric", "Interface Latin", "Times New Roman", Times, serif;
  --font-numeric: "Interface Numeric", "Interface Latin", "Noto Sans SC", sans-serif;
  --font-code: "SFMono-Regular", "SF Mono", Menlo, Monaco, Consolas, monospace;
}
```

| Content | Typeface | Weight |
| --- | --- | --- |
| Chinese brand, page, section, and component titles | Noto Serif SC | 700 or 900 |
| Chinese navigation, buttons, body copy, and supporting text | Noto Sans SC | 400 or 700 |
| Numerals, dates, counters, ratios, and numeric parts of identifiers | Bender | 400 or 700 |
| Sidebar Latin labels | Bender | 400; current item 700 |
| Other Latin words and narrative labels | Times New Roman | 400 or 700 |
| Code blocks, paths, and configuration fragments | SF Mono-first monospace stack | 400 or 700 |

Use 900 only for important serif page, section, and component titles. Prefer 700 for ordinary component names. Never use Noto Sans SC 900: cap control labels at 700 and prefer 400 for body and supporting text. Place the numeric face before the Latin face and scope it with `unicode-range`; Chinese text must fall back to the selected serif or sans-serif family. Declare separate 400 and 700 faces with their matching files; the bundled `src/terminal.css` contains both numeric declarations. Keep code blocks outside this numeric substitution.

## Geometry

- Keep default corner radii at `0–2px`.
- Use `1px solid rgba(24, 27, 28, 0.2)` as the default border.
- Allow a single `12–28px` clipped corner on major panels.
- Use a visibly downward, diffused dark shadow such as `0 14px 18px -9px rgba(0,0,0,.72)`. Avoid uniform glows and hard bottom-right block shadows.
- Allow controlled asymmetry, offset labels, and panel overlap without breaking alignment baselines.

Clipped-corner example:

```css
.panel-cut {
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
}
```

## Background and Decoration

- Use neutral geometric silhouettes and faint grain or diagonal texture behind the content. Keep backgrounds subordinate to solid or nearly opaque content surfaces. Do not use a full-page grid.
- For terminal atmosphere, continuously drift sparse white particles behind the application on a non-interactive canvas. Use the shared `terminal-effects.js` implementation: cap density at 70 particles, drawing at 30fps, and device pixel ratio at 1.5; pause in hidden tabs.
- Keep texture opacity low enough to preserve text contrast.
- Avoid extensive glowing outlines and do not treat cyberpunk neon as the default direction.
- Keep foreground text sharp; never blur it with the background.

## Page Composition

- Brand hero: use a cool-white field, a prominent serif narrative title, sparse yellow diagonal connections, and a dark utility region.
- Studio or component library: use a compact transparent charcoal sidebar (184px desktop, 168px on narrower desktop screens; share one width token with content offsets), fixed top bar, and independently scrolling content area. Center unboxed text links with generous vertical spacing. Use a quiet navigation filter and one thin outer divider; omit large brand blocks, item borders, desktop icons, and selected fills.
- Sidebar typography: use Noto Sans SC for Chinese and a separate Bender Latin face for English labels. Ordinary links are white at weight 400; the current item is signal blue at 700 and has `aria-current`. Keep the numeric-only Bender face unchanged elsewhere.
- Component catalog: use horizontal label-instance rows on desktop and stack the label above the instance on narrow screens.
- Data review page: place navigation and filters on the left, primary content in the center, and metadata or validation actions on the right.
- Device console: place device identity, connection state, and global actions at the top; show key metrics and warnings before detailed forms and logs.
- Tabs: use light unselected items, a dark selected item, and a cyan bottom edge. Use orange diamonds only for unread or updated states.

## Motion

- Do not provide button Hover styles. Pointer movement must not change position, shadow, color, or background.
- Express interaction through selected, pressed, keyboard-focus, and disabled states. Use 160ms state transitions and 320ms content entry with opacity and at most 8px displacement. Progress entry may take up to 640ms.
- Keep content-entry and click-ripple animations finite. Background particles may drift continuously; show real numbers immediately and do not replay entry animation during data refreshes.
- On a fine mouse pointer, add a 36px thin ring with a slight follow delay, shrink it to 24px over controls, and show a 500ms click ripple. Retain native pointer semantics. Keep these overlays non-interactive and out of the accessibility tree.
- For `prefers-reduced-motion: reduce`, freeze particles, remove the cursor ring and ripple, render final states immediately, and disable animations, transitions, and smooth scrolling, including pseudo-elements. Avoid persistent flashing and meaningless scanning effects.
