# Component Patterns

## Buttons

- All blue-background buttons use white text, including primary actions and selected button states. Use reference blue `#22bbff` for these fills. Keep hard edges and restrained shadows.
- Use a light or charcoal fill, a visible border, and the same height as the primary button for secondary actions.
- Use red only for destructive or irreversible actions.
- Reduce saturation and contrast for disabled buttons while keeping labels readable.
- Avoid pill shapes. Keep button sizes and baselines consistent within one action group.
- Do not create Hover styles. Provide keyboard focus, pressed, selected, and disabled states.

## Navigation

- Use centered, unboxed text links on a transparent charcoal desktop sidebar. Mark the current item with signal-blue text and `aria-current`, keeping its regular weight; keep a single thin outer divider.
- Keep the current destination identifiable through its page heading and `aria-current`; mobile navigation also retains a selected underline.
- Use 16px Bender 400 for Latin sidebar labels and system sans-serif (PingFang SC, Microsoft YaHei, sans-serif) for Chinese. Keep all items at 400, including the current item; use the same font stack at 16px for the filter. Group 64px rows with 8px gaps; omit large brand blocks, per-item borders, icons, and badges. Use the 152/144px shared sidebar width from the studio and avoid viewport-height row stretching.
- A sidebar search field filters navigation names, supports Escape to clear, and shows an honest empty state. Reset the filter when switching to bottom navigation.
- Convert navigation to a fixed bottom bar on mobile without covering the end of the page.
- Use light unselected tabs, a dark selected tab, and a cyan bottom edge. Reserve orange diamonds for unread or updated states.
- Keep pagination at content width and center the complete button group inside its container.

## Component Documentation Pages

- Use horizontal documentation rows on desktop: place the index and serif component name on the left and a realistic instance on the right.
- Use cool-white surfaces, thin separators, and downward soft shadows. Keep adjacent rows compact and avoid rounded-card stacks.
- Move the label area above the instance on narrow screens while preserving labels, states, and operable space.

## Data Cards

- Pair large Bender 400 or 700 values with smaller units and labels. Do not use Noto Sans SC 900 for metrics.
- Group information with borders, spacing, and tonal contrast instead of rounded-card stacks.
- Use semantic colors only for success, warning, or error information.
- Keep chart guide lines low contrast. Use signal blue `#22bbff` for data marks and progress fills on both light and dark surfaces; reserve deep blue for text on light surfaces.

## Panels and Dialogs

- Use opaque or high-contrast translucent panels so foreground copy stays clear.
- Allow one clipped corner, a side accent, and a downward soft shadow.
- Give every dialog a title, a close path, keyboard focus management, and one clear primary action.
- Express completion with a mark, lower contrast, and explicit copy rather than color alone.

## Forms

- Keep labels persistent instead of relying on placeholders.
- Use signal-blue control borders while preserving native accessible focus semantics. Switches, checkboxes, radios, sliders, and selected options use `#22bbff` on light and dark surfaces.
- Pair red error styling with explanatory text.
- Keep inputs, selects, and buttons at a consistent height with hard-edge geometry.
- Use a custom listbox when visual consistency requires it. Preserve `aria-expanded`, `listbox` and `option` roles, arrow-key movement, and `Escape` closing.
- Use a dark dropdown panel, a cyan selected row, and white selected text. Do not create Hover changes.

## Status Feedback

- Use a green status mark or short notice for success.
- Use an amber edge and explanatory copy for warnings.
- Use a red edge, error copy, and an actionable recovery path for errors.
- Use progress, a skeleton, or an explicit processing label for loading.

## Responsive Behavior

- Preserve wide information panels and side navigation on desktop.
- Reduce column count at medium widths instead of compressing text.
- Stack multi-column content and move navigation to the bottom or a disclosure on mobile.
- Reserve space for fixed navigation and inspect horizontal overflow and clipped corners.
