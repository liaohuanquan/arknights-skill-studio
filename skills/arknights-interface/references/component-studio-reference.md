# Component Studio Reference

Use this reference for component catalogs, design-system pages, internal UI documentation, and reusable interface studios.

## Files

- Screenshot: `images/component-studio.png`
- Runnable template: `../assets/templates/component-studio/`
- Main source: `../assets/templates/component-studio/src/main.js`
- Reusable Chinese prompt: [PRTS Visual Prompt](../assets/templates/component-studio/src/visual-prompt.md)
- Styles: `../assets/templates/component-studio/src/style.css`

## Composition to Reuse

- Use a transparent charcoal rail with a thin outer divider and a quiet navigation filter near the top. Match the measured geometry below when reproducing this studio.
- Center unboxed text links in a compact vertical group. Use white ordinary links and a blue current item at the same regular weight. Keep branding, card borders, selected fills, icons, and badges out of the desktop rail.
- Fix a dark utility bar above an independently scrolling workspace.
- Present components as consecutive horizontal documentation rows on desktop.
- Keep the label column stable and give the instance area most of the width.
- Stack the label above the instance on narrow screens.
- Use hard edges, thin separators, cool-white surfaces, and visibly downward shadows.

## Verified Layout Dimensions

| Element | Current studio |
| --- | --- |
| Desktop sidebar | 152px; 144px at 721–1050px viewport width; shared offset variable |
| Navigation group | Four 64px rows with 8px gaps, totaling 280px; no viewport-height stretching |
| Filter | 48px tall, followed by an 18px gap; filtered rows are 56px tall |
| Sidebar padding | `clamp(56px, 10vh, 120px) 12px 32px`; short screens reduce block padding |
| Desktop header and workspace | Header 104px; workspace padding `40px 48px 72px`, with 26px horizontal padding at 1050px and below |
| Component rows | Label column 280px desktop, 220px at 1050px and below; instances fill the remaining width |
| Mobile at 720px and below | 76px header, 66px bottom navigation, stacked component labels and examples |

The current catalog contains 22 groups, including command queues and task/reward patterns. Use the groups needed by the target product. The protocol section displays a complete reusable prompt with matching copy/download actions; label it as a prompt rather than `SKILL.md`.

## Typography to Reuse

- Use Noto Serif SC 700 or 900 for the page title, section titles, and component names.
- Use Noto Sans SC 400 or 700 for controls, explanations, and supporting labels.
- Use Bender for numerals, metrics, dates, and numeric parts of identifiers; use Bender for sidebar Latin labels and Times New Roman for other Latin words and labels.
- Sidebar labels use 16px regular-weight Bender for Latin and system sans-serif (PingFang SC, Microsoft YaHei, sans-serif) for Chinese. The current item stays at weight 400; the navigation filter uses the same stack at 15px.
- Keep sans-serif control labels visually lighter than major serif titles.

## Do Not Copy

- Do not copy the studio's section names when the target catalog needs a different taxonomy.
- Do not place every available component on a product page.
- Do not reproduce sample data, example labels, or decorative text without product meaning.
- Do not turn documentation rows into large rounded cards.

## Adaptation Test

The result should remain recognizable as the target product after removing color. If the result still reads as the example studio rather than the target product, replace copied composition details with product-specific structure.
