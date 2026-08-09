# Component Patterns

## Buttons

- Use deep cyan, white text, hard edges, and a downward soft shadow for the primary button.
- Use a light or charcoal fill, a visible border, and the same height as the primary button for secondary actions.
- Use red only for destructive or irreversible actions.
- Reduce saturation and contrast for disabled buttons while keeping labels readable.
- Avoid pill shapes. Keep button sizes and baselines consistent within one action group.
- Do not create Hover styles. Provide keyboard focus, pressed, selected, and disabled states.

## Navigation

- Mark the current item with a deep-cyan edge or solid block.
- Reinforce selection with position, iconography, or weight instead of color alone.
- Allow Noto Serif SC 700 in a brand-led wide sidebar. Use Noto Sans SC 400 or 700 for ordinary product navigation.
- Convert navigation to a fixed bottom bar on mobile without covering the end of the page.
- Use light unselected tabs, a dark selected tab, and a cyan bottom edge. Reserve orange diamonds for unread or updated states.
- Keep pagination at content width and center the complete button group inside its container.

## Component Documentation Pages

- Use horizontal documentation rows on desktop: place the index and serif component name on the left and a realistic instance on the right.
- Use cool-white surfaces, thin separators, and downward soft shadows. Keep adjacent rows compact and avoid rounded-card stacks.
- Move the label area above the instance on narrow screens while preserving labels, states, and operable space.

## Data Cards

- Pair large Times New Roman 700 values with smaller units and labels. Do not use Noto Sans SC 900 for metrics.
- Group information with borders, spacing, and tonal contrast instead of rounded-card stacks.
- Use semantic colors only for success, warning, or error information.
- Keep chart lines low contrast and reserve deep cyan for key data points.

## Panels and Dialogs

- Use opaque or high-contrast translucent panels so foreground copy stays clear.
- Allow one clipped corner, a side accent, and a downward soft shadow.
- Give every dialog a title, a close path, keyboard focus management, and one clear primary action.
- Express completion with a mark, lower contrast, and explicit copy rather than color alone.

## Forms

- Keep labels persistent instead of relying on placeholders.
- Use a deep-cyan focus border while preserving native accessible focus semantics.
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
