// Header.js
import { html, el } from '../lib/dom.js';
export default function Header(brand) {
  return el(html`
    <header class="site-header container">
      <a class="brand" href="/"><img src="/assets/logo.svg" alt="${brand} logo" class="logo"/></a>
    </header>
  `);
}
