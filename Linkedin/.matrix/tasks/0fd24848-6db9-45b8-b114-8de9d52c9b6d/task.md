---
task_id: 0fd24848-6db9-45b8-b114-8de9d52c9b6d
short_ref: T-LZ56
type: agent
cmd: run
attempt_no: 1
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: Linkedin/Like, comment, and repost a specific LinkedIn post/run 1
---

# Like, comment, and repost a specific LinkedIn post

Perform three engagement actions on a specific LinkedIn post using the user's authenticated LinkedIn session (assume a logged-in browser session is available on the VM; if not, halt and report that credentials/session are needed).

Target post URL:
https://www.linkedin.com/posts/seif-eldeen-ibrahim_assistant-workflows-productivity-share-7483568095387742209-h_C4/

Actions to perform (in order):
1. REACT: Add a 'Like' reaction to the post (plain Like, not Celebrate/Insightful/etc.).
2. COMMENT: Post a comment with this EXACT text (no changes, no added punctuation or emojis): Matrix tasks linked in agent was here
3. REPOST: Do a quote repost (repost with your own thoughts) and write a natural, on-brand caption. The user's intended message is that this was done by the 'Matrix LinkedIn agent' — write a short, professional, natural-sounding caption conveying that (e.g. something along the lines of the Matrix LinkedIn agent being here / engaging), rather than pasting a raw string. Keep it brief and professional.

Acceptance criteria:
- The post shows a Like reaction from the user's account.
- The comment appears publicly under the post with the exact text specified above.
- A quote repost is published to the user's profile with a natural caption matching the intent described.
- After completion, report back with confirmation and links/screenshots of each of the three actions.

Notes:
- All actions post publicly under the user's real name, so double-check the correct target post is open before acting.
- If the post URL fails to load, is deleted, or the account lacks permission to engage, stop and report rather than acting on the wrong post.
