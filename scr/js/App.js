import { createElement } from './utils';
import { initRouter } from './router';

function Header() {
  const appTitle = createElement('h1', {
    textContent: 'Movie Info',
    className: 'heading',
  });

  // nav items
  const homeLink = createElement('a', {
    href: '#/home',
    textContent: 'Home',
  });
  const recipeLink = createElement('a', {
    href: '#/movies',
    textContent: 'Movies',
  });
  const favoriterecipesLink = createElement('a', {
    href: '#/favoritemovies',
    textContent: 'Favorites',
  });

  const nav = createElement('nav', {}, [
    homeLink,
    recipeLink,
    favoriterecipesLink,
  ]);

  return createElement('header', {}, [appTitle, nav]);
}

function Footer() {
  const copyright = createElement('span', {
    textContent: `© ${new Date().getFullYear()} Movie Info`,
  });

  const footerP = createElement('p', {
    textContent: 'All rights reserves',
  });
  const lastModification = createElement('p', {
    textContent: `Last Modification: ${new Date().toLocaleString()}`,
  });

  const contactInfo = createElement('div', {}, [
    createElement('p', { textContent: 'Contact Us' }),
    createElement('p', { textContent: 'Phone: +18296565322' }),
    createElement('p', { textContent: 'Email: movie_info@gmail.com' }),
    createElement('p', {
      textContent: 'Address: respaldo 10 St, Buena Vista 1ra, Villa Mella',
    }),
  ]);

  const credit = createElement('p', {}, [
    createElement('a', {
      href: 'https://www.freepublicapis.com/free-movie-api',
      textContent: 'Themoviedb',
      target: '_blank',
    }),
  ]);

  return createElement('footer', {}, [
    contactInfo,
    credit,
    copyright,
    footerP,
    lastModification,
  ]);
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [Header(main), main, Footer()]);
}

document.getElementById('root').appendChild(App());

export default App;