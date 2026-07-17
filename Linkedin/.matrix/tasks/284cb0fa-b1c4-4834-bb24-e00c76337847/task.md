---
task_id: 284cb0fa-b1c4-4834-bb24-e00c76337847
short_ref: T-LRH5
type: agent
cmd: cancel
attempt_no: 0
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: Linkedin/Like, comment, and repost a specific LinkedIn post/run 0
---

# Like, comment, and repost a specific LinkedIn post

Perform three engagement actions on a single LinkedIn post using the founder's logged-in LinkedIn session on the VM. Do not create new content beyond what's specified below.

TARGET POST:
https://www.linkedin.com/posts/seif-eldeen-ibrahim_assistant-workflows-productivity-share-7483568095387742209-h_C4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGtE6j8B0WI-cmPRE6Zs6MTMWK9KXtcUYeM

ACTIONS (perform in order):
1. REACT: Add a plain 'Like' reaction to the post (not Celebrate/Insightful/etc.).
2. COMMENT: Post a comment with this EXACT text (no changes, no added hashtags or emojis): Matrix tasks linked in agent was here
3. REPOST: Do a quote repost (repost with your own thoughts). Write a short, natural, on-brand caption in the founder's voice — the founder said 'any caption' is fine, so use a brief professional line consistent with the intent 'I am the Matrix LinkedIn agent here.' Keep it to one or two sentences, no spammy formatting.

ENVIRONMENT / ACCESS:
- Assumes a logged-in LinkedIn session (browser profile or valid cookies) is available on the VM. If no authenticated session is available, STOP and report back rather than attempting to log in with new credentials.

ACCEPTANCE CRITERIA:
- The Like reaction is visible on the target post.
- The comment appears publicly under the founder's name with the exact specified text.
- The quote repost is published to the founder's feed with a natural caption.
- After completion, report back with links/screenshots confirming each of the three actions succeeded.

NOTES:
- All actions post publicly under the founder's real LinkedIn identity — execute exactly as specified and do not perform any additional actions (no following, connecting, or messaging).
