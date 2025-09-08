// Hero.js
import { html, element } from '../lib/dom.js';
export default function Hero(tagline) {
  return element(html`
    <section class="centered">
      <hr class="divider"/>
    </section>
  `);
}
