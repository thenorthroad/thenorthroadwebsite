import Home from './Home.js';
import Services from './Services.js';

export default function pageRegistry(ctx) {
  const { site, services } = ctx;
  return [
    () => Home(site),        // first (top) section
    () => Services(services) // next section
    // add more: () => Contact(site), etc.
  ];
}
