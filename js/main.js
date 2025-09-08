import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Socials from './components/Socials.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';

const app = document.getElementById('app');

async function loadJSON(url){ const r = await fetch(url); return r.json(); }

(async function init() {
  const site = await loadJSON('/js/data/site.json');
  const services = await loadJSON('/js/data/services.json');

  app.replaceChildren(
    Header(site.brand),
    Hero(site.tagline),
    Socials(site.socials),
    Section('What I do', services),
    Footer(site.brand),
  );

  app.hidden = false; // reveal once ready
})();
