# General Page Elements

Select elements from this catalog when building design-system pages, device consoles, dashboards, admin tools, or data-review interfaces. Preserve product semantics and existing behavior. Reuse information structure and visual roles, not the example site's copy.

## Application Shell

- Use a fixed top bar for the page title, global status, preview controls, and global actions.
- Use a wide desktop sidebar for brand identity and primary navigation. A brand-led sidebar may use Noto Serif SC 700.
- Keep the workspace independently scrollable. When hiding scrollbars, support Firefox and WebKit while preserving wheel and touch scrolling.
- Convert the sidebar to a fixed bottom bar on mobile. Hide secondary brand metadata and reserve bottom space for the bar.
- Layer cool white, charcoal, and low-contrast blurred backgrounds. Do not use a full-page grid.

## Foundation Displays

| Element | Structure | Required Content |
| --- | --- | --- |
| Rules hero | Narrative title, short rule summary, primary action, secondary action, completion panel | Serif title, sparse yellow lines, one clear primary action |
| Design-token card | Label, large value or swatch, usage note | Color, geometry, contrast, or semantic state |
| Type specimen | Serif, sans-serif, and Times New Roman samples | Usage, weight, and realistic Chinese and Latin copy |
| Rules checklist | Check state, rule name, explanation, index | Never communicate completion with color alone |
| Live preview | Context label, status, key metric, simple chart, actions | Use realistic product copy instead of decorative Latin text only |

## General Components

| ID | Element | Recommended Structure and States |
| --- | --- | --- |
| 01 | Buttons | Primary, secondary, destructive, icon-only, and disabled; equal height, hard edges, no Hover |
| 02 | Status badges | Success, processing, warning, error, and neutral; combine text with border or shape |
| 03 | Selection controls | Switch, checkbox, and radio; selected, unselected, focus, and disabled states |
| 04 | Form fields | Persistent labels, text inputs, custom select, and inline error text; consistent control height |
| 05 | Tabs and segmented controls | Dark selected item with a cyan edge; synchronize the visual state with ARIA state |
| 06 | Progress indicators | Label, current value, total, and progress bar; use yellow for warning progress |
| 07 | Data tables | Headers, entity name, status, key value, and update time; allow horizontal scrolling on narrow screens |
| 08 | Alerts and notices | Success, warning, and error notices with a semantic side rule, title, and resolution text |
| 09 | Dialogs and feedback | Title, impact copy, cancel, and confirm actions; manage focus, Escape, and focus return |
| 10 | Breadcrumbs, steps, and pagination | Current path, ordered steps, and content-width pagination centered as one group |
| 11 | Disclosure | Summary title, count, and expanded content; preserve native keyboard behavior |
| 12 | Loading and empty states | Skeleton, processing label, empty-state mark, and next-step guidance |
| 13 | Avatars and entity lists | Original initials avatar, name, role, and availability state |
| 14 | Range and rating | Persistent label, current value, native range input, and graphical quality level |
| 15 | Date and time | Date input, time input, date strip, previous and next controls, and selected state |
| 16 | Uploads and attachments | File picker, format limits, attachment summary, validation state, and progress |
| 17 | Tree controls | Parent and child nodes, checkbox state, counts, and current selection summary |
| 18 | Transfer lists | Available list, selected list, add and remove actions, and capacity guidance |
| 19 | Description lists and statistics | Term-value pairs, key-metric strip, large numbers, and small units |
| 20 | Timelines and results | Time, stage, status copy, pending state, result summary, and primary follow-up action |

## Component Documentation Layout

- Organize each desktop component as a horizontal documentation row: place the index and serif component name on the left, and a realistic component instance on the right.
- Use a cool-white label area, a light instance area, thin separators, and downward soft shadows. Keep adjacent rows tightly spaced.
- Move the label area above the instance on narrow screens. Do not compress controls, tables, or form fields.
- Replace placeholder copy such as "Button 1" or "Example text" with product-context labels.

## Composition Constraints

- Select only the elements needed to complete the page's task. Do not place the complete catalog on a product screen.
- Separate destructive actions from routine actions.
- Keep one primary action per viewport or establish a clear priority between multiple actions.
- Implement keyboard focus, selected, pressed, disabled, and error states. Do not implement Hover changes.
- Use original linear SVG, CSS geometry, or generic icons. Do not copy game logos, characters, items, or official interface icons.
