# Operations Dashboard Reference

Use this reference for monitoring dashboards, device consoles, review queues, administration tools, telemetry pages, and dense operational interfaces.

## Files

- Screenshot: `images/operations-dashboard.png`
- Runnable template: `../assets/templates/operations-dashboard/`
- Main source: `../assets/templates/operations-dashboard/src/app.js`
- Styles: `../assets/templates/operations-dashboard/src/style.css`

## Composition to Reuse

- Use a fixed translucent charcoal rail and a fixed dark global utility bar.
- Keep the workspace independently scrollable and hide only the visual scrollbar.
- Put identity, connection state, time, and global actions in the utility bar.
- Place key metrics and urgent warnings before detailed tables, forms, or logs.
- Combine dark title bands with cool-white data regions.
- Use a single dense strip for related metrics instead of separate floating cards.
- Use a side detail panel when a map, list, or topology requires selection context.
- Convert the rail to a fixed bottom navigation bar on narrow screens.

## State and Data Treatment

- Use large Bender values with smaller units and labels.
- Pair semantic color with text, shape, border, or symbols.
- Reserve yellow for warnings and high-priority notices.
- Use signal blue for selected markers, progress, and key values on dark surfaces; use deep blue for text on light surfaces. Preserve the existing high-contrast keyboard focus ring.
- Keep tables horizontally scrollable on narrow screens.
- Keep alerts dismissible only when dismissal is valid for the target workflow.

## Do Not Copy

- Do not copy station names, telemetry values, coordinates, alerts, or maintenance records.
- Do not force a topology map into products that do not have spatial or network relationships.
- Do not add monitoring metrics that the target product cannot supply.
- Do not reproduce the exact dashboard section order when the target workflow has a different priority.

## Adaptation Test

Every first-viewport panel must answer a target-product question. Remove any panel that exists only because it appears in the reference.

