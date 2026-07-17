/* Shared search box component.
 * Used identically by Notifications and Automations pages (and Tasks/To-do/
 * Scheduler) so sizing/width always matches exactly, and each call is bound
 * to its own scope key so searching one tab never filters another. */

function SearchBox({ scope, placeholder = "Search...", value, onInput }) {
  const input = h("input", {
    type: "text",
    placeholder,
    value: value || "",
    oninput: (e) => onInput(e.target.value),
  });
  return h("div", { class: "search-box", "data-scope": scope }, [
    h("span", { class: "icon" }, "\u{1F50D}"),
    input,
  ]);
}
