import refs from './refs.js';
import footerMarkup from './footer-markup.js';

// Inserts Markup into the DOM
refs.footerContainer.insertAdjacentHTML("beforeend", footerMarkup);

// Assigns a class to the carrent page link
const markupRender = (href) => {

   switch(href) {
      case "/ugol.html":
         linkHandler('.ugol');
         break;
      case "/shlak.html":
         linkHandler('.shlak');
         break;
      case "/shcheben.html":
         linkHandler('.shcheben');
         break;
      case "/nefteprodukty-svetlyye.html":
         linkHandler('.neft-svet');
         break;
      case "/neftekhimiya.html":
         linkHandler('.neftekhimiya');
         break;
      case "/maslo-bazovoye.html":
         linkHandler('.maslo-baz');
         break;
      default:
         linkHandler('home-page');
         break;
   };
};

// Current class toggle
const linkHandler = (currentClass) => {
   const links = document.querySelector(`.footer-nav_link`);
   const currentLink = document.querySelector(`.footer-nav_link${currentClass}`);

   currentClass !== 'home-page'
      ? currentLink.classList.add('current')
      : links.classList.remove('current');
};
   
markupRender(window.location.pathname);