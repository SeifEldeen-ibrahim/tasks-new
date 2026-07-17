/* Shared page header component.
 * IMPORTANT: Tasks screen and Automations screen both call this SAME
 * function with the same markup/classes, so they are visually identical
 * (per acceptance criteria: "Tasks screen header must reuse the exact
 * same header design/component as the Automations screen"). */

function PageHeader({ title, subtitle, actions = [] }) {
  return h("div", { class: "page-header" }, [
    h("div", { class: "title-block" }, [
      h("h1", {}, title),
      h("p", {}, subtitle),
    ]),
    h("div", { class: "header-actions" }, actions),
  ]);
}
