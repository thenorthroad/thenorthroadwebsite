// html tagged template: safe, tiny, no framework
export const html = (strings, ...vals) =>
  strings.reduce((out, s, i) => out + s + (vals[i] ?? ''), '');

export function el(markup) {
  const tpl = document.createElement('template');
  tpl.innerHTML = markup.trim();
  return tpl.content.firstElementChild;
}

export function mount(parent, ...children) {
  children.forEach(c => parent.append(c));
  return parent;
}
