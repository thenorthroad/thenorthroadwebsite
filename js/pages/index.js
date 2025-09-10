import Home from './Home.js';
import Intro from './Intro.js'
import Services from './Services.js';
import UnderCon from './UnderConstruction.js';
import GridTest from './GridTest.js';



export default function pageRegistry(ctx) {
  const { site, services, undercon } = ctx;
  return [
    () => Intro(site),        // Intro Animation
    () => Home(site),        // first (top) section
    () => Services(services), // next section
    () => UnderCon(undercon), // next section
    () => GridTest(undercon) // next section

    // add more: () => Contact(site), etc.
  ];
}
