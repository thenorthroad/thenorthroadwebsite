// main.js
import pageRegistry from './pages/index.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

async function loadJSON(url){ const r = await fetch(url); return r.json(); }

(async function init() {
  const headerHost = document.getElementById('site-header');
  const app = document.getElementById('app');
  const footerHost = document.getElementById('site-footer');

  const [site, services, undercon] = await Promise.all([
    loadJSON('/js/data/site.json'),
    loadJSON('/js/data/services.json'),
    loadJSON('/js/data/underConstruction.json'),

  ]);

  // render persistent header + footer
  headerHost.replaceChildren(Header(site));
  footerHost.replaceChildren(Footer(site.brand, site.socials));

  // render page sections in between
  const context = { site, services, undercon };
  const pages = pageRegistry(context).map(make => make(context));
  app.replaceChildren(...pages);
  app.hidden = false;
})();
