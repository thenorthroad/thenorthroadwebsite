// Section.js (optional cards)
import { html, element } from '../lib/dom.js';
export default function Section(title, cards) {
  return element(html`
    <section class="cards">
      ${title ? `<h2>${title}</h2>` : ''}
      ${cards.map(c => `
        <article class="card">
          <h3>${c.title}</h3>
          <p>${c.body}</p>
        </article>
      `).join('')}
    </section>
  `);
}
