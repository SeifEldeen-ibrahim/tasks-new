---
task_id: 7b74b645-19a1-45f5-91e1-724d5811efbe
short_ref: T-GVJ5
type: agent
cmd: changes
attempt_no: 2
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: ftasksf/Tasks and Automation UI Improvements (Tabs, Search, Actions, Redesign)/run 2
---

# Tasks and Automation UI Improvements (Tabs, Search, Actions, Redesign)

Assignee: Seif

Implement the following UI/UX improvements across the Tasks, Automations, Notifications, and Scheduler surfaces.

1. NEW TAB STRUCTURE
- Restructure into three tabs, in this exact order: To-do, Tasks, Scheduler (Tasks must sit in the middle).
- To-do tab: shows items that specifically require user action.
- Tasks tab: repository for ALL unscheduled tasks.
- Scheduler tab: shows ONLY scheduled tasks; unscheduled tasks must not appear here.

2. UI CONSISTENCY & SEARCH
- Remove the placeholder text "Space test" from both the Notifications and Automations pages.
- Make the Automations page search box match the Notifications page search box exactly in size and width.
- Search must be scoped per-tab only (e.g., searching in To-do must not also search Scheduler/Tasks simultaneously).
- Tasks screen header must reuse the exact same header design/component as the Automations screen for consistency.

3. ACTION BUTTONS & FILTERS
- Rename "Pause" button (in schedule) to "Remove" (or "Cancel" — pick one and apply consistently).
- Rename "View runs" button to "View logs".
- Add a new "Run now" button to the UI.
- Keep the "All types" filter as-is.
- Rename the "Data syncs" filter option to "Integrations".
- "Request changes" action must apply to the entire task, not to a single execution run.
- Users must be able to schedule a task directly from the Tasks tab.

4. TASKS UI REDESIGN (replacing pop-ups)
- Convert Tasks UI from large popups to a list-based view styled like the Notifications screen.
- Show the task's most recent status inline in the row (e.g., Queued, Executing, Failed, Blocked) — no click-through required to see status.
- Place row actions on the right-hand side, matching Notifications screen layout.
- Split task interactions into two distinct actions instead of one big popup:
  - "View details": opens the MD file/plan.
  - "View logs": shows all execution logs and runs.
- Add status filtering (e.g., filter by Failed) on both the Tasks and Automations screens.

Rationale/context to preserve: users mainly care about task details at plan-approval time, and about execution logs afterward — the split between "View details" and "View logs" should reflect that usage pattern.

Acceptance criteria:
- All three tabs exist in the specified order with correct filtering behavior (Scheduler shows scheduled-only, Tasks shows unscheduled-only).
- "Space test" placeholder text no longer appears anywhere on Notifications or Automations pages.
- Automations search box visually matches Notifications search box (size/width) and each tab's search is scoped independently.
- Tasks screen header is visually identical to Automations header.
- Buttons renamed as specified: Pause→Remove/Cancel, View runs→View logs; Run now button added; Data syncs filter renamed to Integrations; All types filter retained.
- Request changes affects the whole task, not a single run.
- Tasks can be scheduled directly from the Tasks tab.
- Tasks list view replaces popup-heavy flow, with inline status, right-aligned actions, and separate View details / View logs actions.
- Status filtering works on both Tasks and Automations screens.

## Changes requested

no no  the discription i gave you in to create the task on click up not to implment

