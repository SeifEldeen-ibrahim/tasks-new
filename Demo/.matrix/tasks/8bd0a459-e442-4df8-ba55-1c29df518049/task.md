---
task_id: 8bd0a459-e442-4df8-ba55-1c29df518049
short_ref: T-9Y8N
type: agent
cmd: run
attempt_no: 1
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: "Demo/Append text to ClickUp task 'Plan = Copilot' description/run 1"
---

# Append text to ClickUp task 'Plan = Copilot' description

In ClickUp, edit the task titled 'Plan = Copilot' (task URL: https://app.clickup.com/t/869e3vvyp, currently status 'in review', assigned to Seif Ibrahim). 

Action: Fetch the task's current description via the ClickUp API (GET task), then update it by APPENDING the following text to the end of the existing description (do not overwrite or delete existing content):

"this is verrryyyyy coool form matrix tasks"

Use the ClickUp API PUT/task update endpoint with the task ID 869e3vvyp. Preserve original formatting/content and just add the new text on a new line at the end. Confirm the update succeeded by re-fetching the task and verifying the appended text is present.
