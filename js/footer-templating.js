import refs from './refs.js';
import footerMarkup from './footer-markup.js';

refs.footerContainer.insertAdjacentHTML("beforeend", footerMarkup);

const markupRender = (href) => {

   switch(href) {
      case "/ugol.html":
         document.querySelector('a#footer-nav_link-01').classList.add('current');
         break;
      case "/shlak.html":
         document.querySelector('a#footer-nav_link-02').classList.add('current');
         break;
      case "/shcheben.html":
         document.querySelector('a#footer-nav_link-03').classList.add('current');
         break;
      case "/nefteprodukty-svetlyye.html":
         document.querySelector('a#footer-nav_link-04').classList.add('current');
         break;
      case "/neftekhimiya.html":
         document.querySelector('a#footer-nav_link-05').classList.add('current');
         break;
      case "/maslo-bazovoye.html":
         document.querySelector('a#footer-nav_link-06').classList.add('current');
         break;
      default:
         break;
   };
};

markupRender(window.location.pathname);

