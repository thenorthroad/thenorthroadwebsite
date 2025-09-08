// Header.js
import { html, element } from '../lib/dom.js';

export default function Header(site) {
  return element(html`
    <div class="site-header container">
      <header class="logo">
        <div>The North Road</div>
      </header>
      <nav class="nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <!-- add more links as you add pages -->
      </nav>
    </div>
  `);
}
