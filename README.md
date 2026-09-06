# Arknights Industrial Interface Skill

A Codex Skill and reference studio for building restrained industrial web interfaces inspired by the visual language of Arknights without reproducing official artwork, logos, characters, icons, or protected screen layouts.

The repository combines:

- An English Codex Skill with design rules and implementation workflow.
- A verified visual reference for the component catalog.
- A runnable Vite template that provides a composition anchor instead of a fixed product layout.
- A component studio covering typography, controls, forms, tables, feedback, navigation, and responsive behavior.

## Preview

### Component studio

![Component studio](skills/arknights-interface/references/images/component-studio.png)

## Repository Structure

```text
.
├── skills/arknights-interface/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   ├── references/
│   └── assets/templates/
├── src/                    # Component studio source
├── index.html
└── package.json
```

## Install the Skill

Copy `skills/arknights-interface` into the Codex Skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R skills/arknights-interface ~/.codex/skills/arknights-interface
```

Invoke it with:

```text
使用 $arknights-interface 编写或修改 UI、组件前，先查阅 assets/templates/component-studio/ 中最接近的样例源码、样式和可用预览，再在现有组件体系中实现，保持样例的视觉与交互规则，并保留产品业务行为。
```

## Current Page Prompt

The [Chinese PRTS visual prompt](src/visual-prompt.md) captures the current 152/144px sidebar, 64px navigation rows with 8px gaps, fonts, blue controls, particles, cursor feedback, and terminal copy. The studio reads this Markdown for its prompt preview, clipboard copy, and download. Keep its [standalone template copy](skills/arknights-interface/assets/templates/component-studio/src/visual-prompt.md) synchronized when editing it.

## Run the Component Studio

```bash
npm install
npm run dev
```

Build verification:

```bash
npm run build
```

## Design Boundaries

- Use black, charcoal, gray, and cool white as the base palette.
- Use bright signal blue (`#22bbff`) for selected controls, state markers, and progress fills on light and dark surfaces, and values on dark surfaces. Keep legacy control tokens aliased to this same signal blue. Blue buttons use the reference blue (`#22bbff`) with white text; blue text on light surfaces uses deep blue (`#006b8c`).
- Use yellow for warnings and sparse priority accents.
- Use Noto Serif SC for major Chinese titles, Noto Sans SC for controls and body copy, Bender for numerals and dates, and Times New Roman for Latin words outside navigation. Sidebar labels use Bender for Latin and system sans-serif for Chinese at 16px and weight 400, including the current item.
- Do not add button Hover states, full-page grids, blue-purple gradients, or oversized rounded glass cards.
- Use a narrow transparent charcoal sidebar with centered text links in a compact vertical group, a quiet navigation filter, and a blue current item. Avoid boxed navigation cards and large sidebar branding.
- Use neutral geometric backgrounds, continuously drifting sparse particles, and a thin mouse-following ring with click ripples. Pause particles in hidden tabs; reduced-motion preferences freeze particles and disable the ring.
- When a PRTS-style terminal voice is requested, use concise system reports and a restrained vocabulary of protocols, archives, commands, nodes, links, transfers, and status. Keep button labels action-first and preserve the product's real entities and tasks.
- Treat the bundled template as a composition reference. Preserve the target product's framework, business structure, content, and terminology.

## Intellectual Property Notice

This is an independent, unofficial project. It is not affiliated with, endorsed by, or sponsored by Hypergryph, Yostar, or the Arknights rights holders. Arknights and related names are trademarks of their respective owners. The repository does not distribute official game artwork or extracted assets.

## License

Original source code and documentation in this repository are released under the [MIT License](LICENSE).

Bundled Bender fonts use the SIL Open Font License 1.1. See the [font license](public/fonts/Bender-OFL.txt) and [source note](public/fonts/Bender-SOURCE.txt).
