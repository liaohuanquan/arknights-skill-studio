# Visual System

## Color

```css
:root {
  --canvas: #d2d3d3;
  --paper: #f1f1f0;
  --ink: #242627;
  --panel-dark: #303233;
  --muted: #777b7d;
  --primary-cyan: #0088ad;
  --success: #45c685;
  --warning: #ffd200;
  --danger: #d74a40;
  --resource-orange: #dc6900;
  --timer-rose: #9d4d67;
}
```

- Cover most of the interface with black, charcoal, gray, and cool white.
- Use deep cyan only for primary actions, selected states, focus, and critical readings. Use white text on cyan fills.
- Use yellow for limited-time content, rewards, and high-priority notices. Use orange for unread, new, or updated markers.
- Allow sparse yellow rules, nodes, and diagonal connections in a brand hero. Do not make yellow the default decoration for ordinary components.
- Reserve red for danger, failure, and irreversible actions. Do not use semantic colors as arbitrary decoration.
- Do not use blue-purple gradients. Create depth with tonal opacity, subtle grain, diagonal connections, or solid color regions.

## Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&family=Noto+Serif+SC:wght@400;700;900&display=swap");

@font-face {
  font-family: "Interface Latin";
  src: local("Times New Roman"), local("TimesNewRomanPSMT");
  font-weight: 400;
  unicode-range: U+0020-007E, U+00A0-00FF;
}

:root {
  --font-serif: "Interface Latin", "Noto Serif SC", serif;
  --font-sans: "Interface Latin", "Noto Sans SC", Roboto, Arial, sans-serif;
  --font-latin: "Interface Latin", "Times New Roman", Times, serif;
  --font-code: "SFMono-Regular", "SF Mono", Menlo, Monaco, Consolas, monospace;
}
```

| Content | Typeface | Weight |
| --- | --- | --- |
| Chinese brand, page, section, and component titles | Noto Serif SC | 700 or 900 |
| Chinese navigation, buttons, body copy, and supporting text | Noto Sans SC | 400 or 700 |
| Latin text, numbers, dates, indices, and interface identifiers | Times New Roman | 400 or 700 |
| Code blocks, paths, and configuration fragments | SF Mono-first monospace stack | 400 or 700 |

Use 900 only for important serif page, section, and component titles. Prefer 700 for ordinary component names. Never use Noto Sans SC 900: cap control labels at 700 and prefer 400 for body and supporting text. Let Times New Roman claim only Latin characters and numbers through `unicode-range`; Chinese text must continue to fall back to the selected serif or sans-serif family.

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

- Use low-contrast scan lines, grain, diagonal connections, or local blur to create a device-interface atmosphere. Do not use a full-page grid.
- Keep texture opacity low enough to preserve text contrast.
- Avoid extensive glowing outlines and do not treat cyberpunk neon as the default direction.
- Keep foreground text sharp; never blur it with the background.

## Page Composition

- Brand hero: use a cool-white field, a prominent serif narrative title, sparse yellow diagonal connections, and a dark utility region.
- Studio or component library: use a wide desktop sidebar, fixed top bar, and independently scrolling content area. The sidebar may use serif type for brand identity while controls remain sans serif.
- Component catalog: use horizontal label-instance rows on desktop and stack the label above the instance on narrow screens.
- Data review page: place navigation and filters on the left, primary content in the center, and metadata or validation actions on the right.
- Device console: place device identity, connection state, and global actions at the top; show key metrics and warnings before detailed forms and logs.
- Tabs: use light unselected items, a dark selected item, and a cyan bottom edge. Use orange diamonds only for unread or updated states.

## Motion

- Do not provide button Hover styles. Pointer movement must not change position, shadow, color, or background.
- Express interaction through selected, pressed, keyboard-focus, and disabled states. Avoid continuous animation.
- Respect `prefers-reduced-motion`. Avoid persistent flashing and meaningless scanning effects.
