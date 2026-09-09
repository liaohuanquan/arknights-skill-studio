# Usage Examples

Use the [complete Chinese PRTS prompt](../assets/templates/component-studio/src/visual-prompt.md) when reproducing the current visual baseline. The shorter requests below invoke the skill for related product work.

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
- Use signal blue for selected markers on dark surfaces and reference-blue (`#22bbff`) primary actions with white text. Use red for invalid data.

### Device Console

- Top: device name, connection state, and global actions.
- First viewport: key metrics, trends, and warning summary.
- Below: calibration steps, logs, and parameter forms.
- Separate destructive controls from routine actions.

### Design-System Page

- Display color, typography, spacing, geometry, and semantic-state tokens.
- Use a compact sidebar, fixed top bar, and independently scrolling workspace on desktop. Present components as consecutive label-instance rows.
- Combine a serif rules title, sparse yellow lines, completion metrics, and one primary action in the hero. Do not imitate the game logo or launch screen.
- Show default, pressed, focus, disabled, and error states. Do not show Hover variations.
- Use realistic product copy to validate Chinese typography instead of decorative Latin text alone.
- Label excerpts as "Skill Rules Summary." Use `SKILL.md` only for the complete source file.

## PRTS-Style Terminal Copy

Read [the source-backed interface language guide](interface-language.md) before writing UI copy for an Arknights/PRTS product. It provides official source links, a three-layer naming approach, original before-use examples and state semantics.

Use functional names for sections, concrete verbs for actions and factual sentences for states. For example: “设备档案”, “保存配置”, “配置已保存”. Keep actual business objects; do not replace every operation with “协议” or every person with “干员”. These examples are original adaptations, not quoted game UI text.

## Avoid

- Do not add blue-purple gradient backgrounds.
- Do not convert every surface into a large rounded glass card.
- Do not extract logos, characters, icons, or screen fragments from the game.
- Do not reduce body-copy contrast or hide required labels for atmosphere.
- Do not use red, yellow, or continuous flashing without clear data semantics.
