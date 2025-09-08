// Footer.js
import { html, element } from '../lib/dom.js';

export default function Footer(brand, socials) {
  const year = new Date().getFullYear();
  return element(html`
    <footer class="site-footer container">
      <small>© ${year} ${brand} · All rights reserved.</small>
      <nav class="socials" aria-label="Footer social links">
        ${socials.map(s => `
          <a href="${s.href}" target="${s.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener" aria-label="${s.name}">
            <img src="${s.icon}" alt="" class="icon" />
          </a>
        `).join('')}
      </nav>
    </footer>
  `);
}

