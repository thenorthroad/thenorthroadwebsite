import { html, element } from '../lib/dom.js';

export default function Services(services) {
  return element(html`
    <section id="services" class="page services">
      <h2 class="page-title">What I do</h2>
      <div class="cards">
        ${services.map(s => `
          <article class="card">
            <h3>${s.title}</h3>
            <p>${s.body}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `);
}
