// Hero.js
import { html, el } from '../lib/dom.js';
export default function Hero(tagline) {
  return el(html`
    <section class="centered">
      <p class="tagline">${tagline}</p>
      <hr class="divider"/>
    </section>
  `);
}
