// Socials.js
import { html, element } from '../lib/dom.js';
export default function Socials(items) {
  return element(html`
    <nav class="socials" aria-label="Social links">
      ${items.map(i => `
        <a href="${i.href}" target="${i.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener" aria-label="${i.name}">
          <img src="${i.icon}" alt="" class="icon">
        </a>
      `).join('')}
    </nav>
  `);
}
