import { html, element } from '../lib/dom.js';

export default function Home(site) {
  return element(html`
    <div id="intro" class="page intro">
    <h1>The North Road</h1>
    <hr class="divider" />
  `);
}

