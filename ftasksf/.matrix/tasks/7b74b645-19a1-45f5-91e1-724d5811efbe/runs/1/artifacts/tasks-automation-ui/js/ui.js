/* Tiny DOM helpers (no framework / no build step, sandbox has no network access). */

function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") el.className = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k === "html") el.innerHTML = v;
    else if (v !== null && v !== undefined) el.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined || c === false) return;
    el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(c) : c);
  });
  return el;
}

function statusLabel(status) {
  const map = {
    queued: "Queued",
    executing: "Executing",
    failed: "Failed",
    blocked: "Blocked",
    done: "Done",
    scheduled: "Scheduled",
    unscheduled: "Unscheduled",
  };
  return map[status] || status;
}

function statusPill(status) {
  return h("span", { class: `status-pill ${status}` }, statusLabel(status));
}

function matchesSearch(text, query) {
  if (!query) return true;
  return text.toLowerCase().includes(query.trim().toLowerCase());
}
