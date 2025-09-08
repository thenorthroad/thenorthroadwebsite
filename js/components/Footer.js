// Footer.js
import { html, el } from '../lib/dom.js';
export default function Footer(brand) {
  const year = new Date().getFullYear();
  return el(html`
    <footer class="site-footer container">
      <small>© ${year} ${brand} · All rights reserved.</small>
    </footer>
  `);
}
