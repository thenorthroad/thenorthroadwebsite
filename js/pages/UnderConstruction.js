import { html, element } from '../lib/dom.js';

export default function UnderCon(undercon) {
  return element(html`
    <section id="services" class="page services">
      <div class="cards">
        ${undercon.map(s => `
          <article class="card">
            <h3>${s.title}</h3>
            <p>${s.body}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `);
}