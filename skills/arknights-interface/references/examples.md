# Usage Examples

## Example Requests

```text
Use $arknights-interface to restyle this video-review admin tool as an industrial terminal while preserving the existing React components and business logic.
```

```text
Use $arknights-interface to create a device-calibration dashboard with connection status, live latency, alerts, and calibration controls.
```

```text
Use $arknights-interface to refine this mobile screen, focusing on bottom navigation, information density, and action hierarchy.
```

## Page Compositions

### Data Review Page

- Left: review navigation and filters.
- Center: media preview, timeline, and annotations.
- Right: metadata, validation results, and submission actions.
- Use signal blue for selected markers on dark surfaces and deep-blue primary actions with white text. Use red for invalid data.

### Device Console

- Top: device name, connection state, and global actions.
- First viewport: key metrics, trends, and warning summary.
- Below: calibration steps, logs, and parameter forms.
- Separate destructive controls from routine actions.

### Design-System Page

- Display color, typography, spacing, geometry, and semantic-state tokens.
- Use a wide sidebar, fixed top bar, and independently scrolling workspace on desktop. Present components as consecutive label-instance rows.
- Combine a serif rules title, sparse yellow lines, completion metrics, and one primary action in the hero. Do not imitate the game logo or launch screen.
- Show default, pressed, focus, disabled, and error states. Do not show Hover variations.
- Use realistic product copy to validate Chinese typography instead of decorative Latin text alone.
- Label excerpts as "Skill Rules Summary." Use `SKILL.md` only for the complete source file.

## Avoid

- Do not add blue-purple gradient backgrounds.
- Do not convert every surface into a large rounded glass card.
- Do not extract logos, characters, icons, or screen fragments from the game.
- Do not reduce body-copy contrast or hide required labels for atmosphere.
- Do not use red, yellow, or continuous flashing without clear data semantics.
