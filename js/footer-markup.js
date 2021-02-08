import footerContent from "./footer-items.js";

const footerMarkup = footerContent.reduce((content, item) => {
  return (
    content +
    `
      <div class="footer-content__wrap">
         <!-- Logo -->
         <a href="./index.html" class="footer-logo__link">
            <img src="./images/svg/logo-okto-trade-white.svg" alt="окто трейд" aria-label="окто трейд">
         </a>
            
         <!-- Info -->
         <nav class="footer-nav">
            <b class="footer-subtitle">Информация</b>
            <ul class="footer-nav__list">
               <li><a class="footer-nav__list-link ugol" href="${item.productLink_01}">${item.productName_01}</a></li>
               <li><a class="footer-nav__list-link shlak" href="${item.productLink_02}">${item.productName_02}</a></li>
               <li><a class="footer-nav__list-link shcheben" href="${item.productLink_03}">${item.productName_03}</a></li>
               <li><a class="footer-nav__list-link neft-svet" href="${item.productLink_04}">${item.productName_04}</a></li>
               <li><a class="footer-nav__list-link neftekhimiya" href="${item.productLink_05}">${item.productName_05}</a></li>
               <li><a class="footer-nav__list-link maslo-baz" href="${item.productLink_06}">${item.productName_06}</a></li>
            </ul>
         </nav>
      </div>
               
      <div class="footer-content__wrap">
         <!-- Address -->
         <address>
            <b class="footer-subtitle">Наши контакты</b>
            <ul class="footer-address__list">
               <li>
                  <a class="google-map" href="https://goo.gl/maps/R6bYdpyuvPCBq6NV9">
                     <span>03117 Украина, Киев,</span>
                     <span>ул. Грушевского, 5</span>
                  </a>
               </li>
               <li>
                  <a class="footer-address__list-link" href="mailto:info@example.com">
                     <svg class="address-icon__mail">
                        <use href="./images/svg/sprite.svg#icon_mail"></use>
                     </svg>
                     <span>info@example.com</span>
                  </a>
               </li>
               <li>
                  <a class="footer-address__list-link" href="tel:+380991111111">
                     <svg class="address-icon__tel">
                        <use href="./images/svg/sprite.svg#icon_tel"></use>
                     </svg>
                     <span>+38 099 111 11 11</span>
                  </a>
               </li>
            </ul>
         </address>

         <!-- Join -->
         <div>
            <b class="footer-subtitle">Мы в соцсетях</b>
            <ul class="footer-join">
               <li>
                  <a href="#" aria-label="инстаграм">
                     <svg>
                        <use href="./images/svg/sprite.svg#icon_instagram"></use>
                     </svg>
                  </a>
               </li>
               <li>
                  <a href="#" aria-label="фейсбук">
                     <svg>
                        <use href="./images/svg/sprite.svg#icon_facebook"></use>
                     </svg>
                  </a>
               </li>
            </ul>
         </div>
      </div>
         
      <!-- Copyright -->
      <p class="footer-copyright">ТД ОКТО ТРЕЙД &#169; 2021</p>`
  );
}, ``);

export default footerMarkup;
