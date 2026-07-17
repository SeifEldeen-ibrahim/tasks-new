/* Minimal store: holds per-tab UI state (search text, status filter, active tab)
 * so search is scoped independently per tab, as required. */

const Store = {
  state: {
    activeTab: "todo", // todo | tasks | scheduler
    automationsSecondaryTab: "automations", // automations | notifications (kept separate section)
    search: {
      todo: "",
      tasks: "",
      scheduler: "",
      automations: "",
      notifications: "",
    },
    statusFilter: {
      tasks: "all",
      automations: "all",
    },
    typeFilter: {
      automations: "all",
    },
    modal: null, // { type: 'details'|'logs'|'schedule', taskId }
  },
  listeners: [],
  subscribe(fn) {
    this.listeners.push(fn);
  },
  emit() {
    this.listeners.forEach((fn) => fn(this.state));
  },
  setTab(tab) {
    this.state.activeTab = tab;
    this.emit();
  },
  setSearch(scope, value) {
    this.state.search[scope] = value;
    this.emit();
  },
  setStatusFilter(scope, value) {
    this.state.statusFilter[scope] = value;
    this.emit();
  },
  setTypeFilter(scope, value) {
    this.state.typeFilter[scope] = value;
    this.emit();
  },
  openModal(type, taskId) {
    this.state.modal = { type, taskId };
    this.emit();
  },
  closeModal() {
    this.state.modal = null;
    this.emit();
  },
};
