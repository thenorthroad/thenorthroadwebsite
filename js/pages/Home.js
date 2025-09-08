import { html, element } from '../lib/dom.js';

export default function Home(site) {
  return element(html`
    <div id="home" class="page home">
    <h1>The North Road</h1>
      <hr class="divider" />
    </div>
  `);
}
