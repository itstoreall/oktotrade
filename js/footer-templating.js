import refs from './refs.js';
import footerMarkup from './footer-markup.js';

// Inserts Markup into the DOM
refs.footerContainer.insertAdjacentHTML("beforeend", footerMarkup);

// Assigns a class to the carrent page link
const markupRender = (href) => {

   switch(href) {
      // case "/ugol.html":
      case "/oktotrade/ugol.html":
         linkHandler('.ugol');
         console.log("1", href);
         break;
      // case "/shlak.html":
      case "/oktotrade/shlak.html":
         console.log("2", href);
         linkHandler('.shlak');
         break;
      // case "/shcheben.html":
      case "/oktotrade/shcheben.html":
         console.log("3", href);
         linkHandler('.shcheben');
         break;
      // case "/nefteprodukty-svetlyye.html":
      case "/oktotrade/nefteprodukty-svetlyye.html":
         console.log("4", href);
         linkHandler('.neft-svet');
         break;
      // case "/neftekhimiya.html":
      case "/oktotrade/neftekhimiya.html":
         console.log("5", href);
         linkHandler('.neftekhimiya');
         break;
      // case "/maslo-bazovoye.html":
      case "/oktotrade/maslo-bazovoye.html":
         console.log("6", href);
         linkHandler('.maslo-baz');
         break;
      default:
         linkHandler('home-page');
         console.log("0", href);
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