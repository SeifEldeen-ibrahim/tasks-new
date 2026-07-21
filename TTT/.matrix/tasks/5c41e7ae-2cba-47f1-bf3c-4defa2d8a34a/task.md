---
task_id: 5c41e7ae-2cba-47f1-bf3c-4defa2d8a34a
short_ref: T-TN38
type: agent
cmd: run
attempt_no: 1
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: "TTT/Post exact comment on ClickUp task 'Agent VM Billing'/run 1"
---

# Post exact comment on ClickUp task 'Agent VM Billing'

Post a comment on an existing ClickUp task, preserving an intentional typo verbatim.

Task details:
- Task ID: 869e61v6d
- URL: https://app.clickup.com/t/869e61v6d
- Title: 'Agent VM Billing'
- Owner: Anas

Exact comment text to post (do NOT correct spelling/grammar, do NOT let any autocorrect/autocomplete alter it):
"matrix tasks reviewd the plans and approved it"

Steps:
1. Authenticate to ClickUp using the available API credentials/integration.
2. Fetch task 869e61v6d and confirm its title is 'Agent VM Billing' and it is owned by Anas. If title or owner do not match, stop and report the mismatch instead of posting.
3. Post a new comment on the task via the ClickUp API with the exact text above, character-for-character, including the typo 'reviewd'. Ensure no client-side spellcheck/autocorrect modifies it (e.g., disable autocorrect if using a UI path, prefer direct API call with the raw string).
4. Re-fetch the task's comment thread via the API to verify the new comment exists and its text matches exactly (character-for-character) the required string.
5. Report back: confirmation that the comment was posted successfully, the comment ID/timestamp if available, and a link/reference to the task (and comment if a direct link is obtainable). Include the verification result from step 4 (not just an assumption that posting succeeded).

Acceptance criteria:
- Comment text matches exactly, character-for-character, including the typo 'reviewd'.
- Successful posting is confirmed via an API re-fetch (or UI check) of the comment thread, not merely assumed from the post response.
