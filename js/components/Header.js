// Header.js
import { html, element } from '../lib/dom.js';
export default function Header(brand) {
  return element(html`
    <header class="logo">
      <div>The North Road</div>
    </header>
  `);
}
