/* ---------------------------------------------------------------------
 * Mock data model.
 * A "Task" is the single source of truth. Whether it shows in the
 * Scheduler tab is purely a function of task.scheduledFor being set.
 * ------------------------------------------------------------------- */

const DB = {
  tasks: [
    {
      id: "t1",
      title: "Sync customer records from Salesforce",
      description: "One-off task to reconcile customer records between Salesforce and the warehouse.",
      status: "failed", // queued | executing | failed | blocked | done
      requiresAction: true, // shows in To-do
      scheduledFor: null, // unscheduled -> Tasks tab only
      planMd: "# Plan: Sync customer records\n\n1. Extract customers modified in last 24h from Salesforce.\n2. Transform to warehouse schema.\n3. Load into `customers` table.\n4. Reconcile diffs and flag conflicts.\n\n**Owner:** data-eng\n**Risk:** low",
      logs: [
        { time: "09:12:03", run: "run-1044", line: "Started extraction from Salesforce API." },
        { time: "09:12:41", run: "run-1044", line: "Fetched 4,213 records." },
        { time: "09:13:02", run: "run-1044", line: "ERROR: schema mismatch on field `region_code`." },
        { time: "09:13:02", run: "run-1044", line: "Task marked FAILED." },
      ],
    },
    {
      id: "t2",
      title: "Generate weekly investor update draft",
      description: "Draft the weekly investor update from latest metrics dashboards.",
      status: "blocked",
      requiresAction: true,
      scheduledFor: null,
      planMd: "# Plan: Weekly investor update\n\n1. Pull metrics from analytics dashboard.\n2. Summarize into draft doc.\n3. Await approval before sending.\n\n**Owner:** ops\n**Risk:** medium",
      logs: [
        { time: "Mon 08:00", run: "run-991", line: "Draft generated, waiting on human approval." },
      ],
    },
    {
      id: "t3",
      title: "Clean up stale feature flags",
      description: "Remove feature flags that have been fully rolled out for 90+ days.",
      status: "queued",
      requiresAction: false,
      scheduledFor: null,
      planMd: "# Plan: Stale feature flag cleanup\n\n1. Query flag service for flags older than 90 days at 100% rollout.\n2. Open PRs removing flag checks.\n3. Notify flag owners.\n\n**Owner:** platform\n**Risk:** low",
      logs: [],
    },
    {
      id: "t4",
      title: "Nightly backup verification",
      description: "Verify integrity of nightly database backups.",
      status: "executing",
      requiresAction: false,
      scheduledFor: { date: "2025-06-02", time: "02:00", recurrence: "Daily" },
      planMd: "# Plan: Nightly backup verification\n\n1. Restore latest backup to sandbox.\n2. Run integrity checks.\n3. Report results to #data-eng.\n\n**Owner:** infra\n**Risk:** low",
      logs: [
        { time: "02:00:01", run: "run-2201", line: "Restore started." },
        { time: "02:04:12", run: "run-2201", line: "Integrity checks running..." },
      ],
    },
    {
      id: "t5",
      title: "Send end-of-month billing summary",
      description: "Compile and send billing summary emails to enterprise accounts.",
      status: "done",
      requiresAction: false,
      scheduledFor: { date: "2025-05-31", time: "18:00", recurrence: "Monthly" },
      planMd: "# Plan: EOM billing summary\n\n1. Aggregate billing data.\n2. Render per-account summary.\n3. Send via email service.\n\n**Owner:** finance\n**Risk:** low",
      logs: [
        { time: "18:00:03", run: "run-870", line: "Compiled summaries for 312 accounts." },
        { time: "18:02:55", run: "run-870", line: "All emails sent successfully." },
      ],
    },
    {
      id: "t6",
      title: "Rotate service account credentials",
      description: "Rotate and redistribute service account keys across environments.",
      status: "queued",
      requiresAction: false,
      scheduledFor: null,
      planMd: "# Plan: Credential rotation\n\n1. Generate new keys.\n2. Update secret store.\n3. Roll pods with new secrets.\n4. Revoke old keys after grace period.\n\n**Owner:** security\n**Risk:** high",
      logs: [],
    },
    {
      id: "t7",
      title: "Archive resolved support tickets",
      description: "Archive tickets resolved more than 60 days ago.",
      status: "queued",
      requiresAction: false,
      scheduledFor: { date: "2025-06-05", time: "03:30", recurrence: "Weekly" },
      planMd: "# Plan: Archive resolved tickets\n\n1. Query tickets resolved 60+ days ago.\n2. Move to cold storage.\n3. Update ticket index.\n\n**Owner:** support-eng\n**Risk:** low",
      logs: [],
    },
    {
      id: "t8",
      title: "Reindex search cluster",
      description: "Full reindex of the product search cluster after mapping change.",
      status: "failed",
      requiresAction: true,
      scheduledFor: null,
      planMd: "# Plan: Reindex search cluster\n\n1. Create new index with updated mapping.\n2. Backfill documents.\n3. Swap alias.\n\n**Owner:** search-team\n**Risk:** medium",
      logs: [
        { time: "14:20:11", run: "run-1502", line: "Backfill started." },
        { time: "14:41:09", run: "run-1502", line: "ERROR: out of memory on shard 3." },
        { time: "14:41:10", run: "run-1502", line: "Task marked FAILED." },
      ],
    },
  ],

  automations: [
    { id: "a1", name: "Auto-tag new leads", type: "Workflow", status: "executing", lastRun: "2m ago" },
    { id: "a2", name: "Nightly warehouse export", type: "Integrations", status: "queued", lastRun: "6h ago" },
    { id: "a3", name: "Slack incident notifier", type: "Notification", status: "failed", lastRun: "1d ago" },
    { id: "a4", name: "CRM contact dedupe", type: "Integrations", status: "done", lastRun: "3d ago" },
    { id: "a5", name: "PR auto-labeler", type: "Workflow", status: "blocked", lastRun: "12h ago" },
  ],

  notifications: [
    { id: "n1", title: "Task failed: Sync customer records", body: "run-1044 failed due to schema mismatch.", time: "2m ago", unread: true },
    { id: "n2", title: "Plan awaiting approval: Weekly investor update", body: "Requires your review before it can run.", time: "1h ago", unread: true },
    { id: "n3", title: "Automation completed: CRM contact dedupe", body: "Finished successfully, 128 duplicates merged.", time: "3d ago", unread: false },
  ],
};

// simple id helper for newly scheduled/created items
DB.nextId = (prefix) => `${prefix}${Math.floor(Math.random() * 100000)}`;
