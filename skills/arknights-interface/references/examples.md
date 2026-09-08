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

Use this voice only when the target product or the user explicitly asks for an Arknights- or PRTS-inspired terminal tone.

- Write short declarative sentences that report a subject, state, and next action: "终端链路波动。请复核中继节点。"
- Prefer a restrained working vocabulary such as 协议、档案、指令、节点、链路、回传、校验、调度、归档, and 状态. Use a term only when it describes the actual product behavior.
- Name primary sections as stable system areas: "协议总览", "组件档案", or "行动记录". Use English metadata as a namespace or identifier, for example `PRTS / COMPONENT ARCHIVE`.
- Start buttons with a concrete verb and retain the object: "录入协议", "调阅源文件", "执行校准", or "终止指令".
- Distinguish neutral reports, warnings, and high-risk commands through explicit copy before applying color. State “已同步”, “已导出”, or “已归档” only after the corresponding behavior succeeds; identify illustrative status data as examples.
- Preserve the target product's entities and tasks. Do not insert faction names, story details, dialogue, or copied game text merely for atmosphere.

## Avoid

- Do not add blue-purple gradient backgrounds.
- Do not convert every surface into a large rounded glass card.
- Do not extract logos, characters, icons, or screen fragments from the game.
- Do not reduce body-copy contrast or hide required labels for atmosphere.
- Do not use red, yellow, or continuous flashing without clear data semantics.
