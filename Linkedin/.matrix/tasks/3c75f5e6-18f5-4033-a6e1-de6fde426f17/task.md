---
task_id: 3c75f5e6-18f5-4033-a6e1-de6fde426f17
short_ref: T-A63Z
type: agent
cmd: run
attempt_no: 1
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: Linkedin/Engage with LinkedIn post Like, comment, and repost/run 1
---

# Engage with LinkedIn post: Like, comment, and repost

Engage with a specific LinkedIn post on behalf of the user's LinkedIn account.

TARGET POST:
https://www.linkedin.com/posts/marcin3_enterpriseai-artificialintelligence-datasecurity-activity-7483560579643715584-Aj3g

ACCESS ASSUMPTION:
- Assume a logged-in LinkedIn browser session is available on the VM. If no authenticated session exists, stop and report that credentials/session are needed rather than attempting a workaround.

ACTIONS TO PERFORM (in order):
1. Open the target post.
2. React with a 'Like' (the standard thumbs-up reaction, not Celebrate/Insightful/etc.).
3. Add a comment with this EXACT text: "Matrix tasks linked in agent was here"
4. Repost the post as a quote repost (repost with your thoughts). Write a short, natural, on-brand caption identifying that this is Matrix's LinkedIn agent (e.g. something conveying 'Matrix's LinkedIn agent was here'). Keep it brief, professional, and non-spammy. Any reasonable caption is acceptable per the user.

ACCEPTANCE CRITERIA:
- The Like reaction is registered on the post.
- The comment appears publicly on the post with the exact wording specified above.
- A quote repost is published to the user's LinkedIn feed with a suitable caption.
- After completing, report back with confirmation of each of the three actions and, if possible, links/screenshots of the posted comment and repost.

NOTES:
- All actions post publicly under the user's name, so wording of the comment must be exact and the caption must remain professional.
- Do not perform any actions beyond these three (no following, messaging, or additional comments).
