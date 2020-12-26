import producsContent from "./product-items.js"

const productItem = producsContent.reduce((content, item, index) => {
   return content + `
      <li class="product-list__item">
         <a class="product-item__link" href="${item.link}" id="${index}">
            <div class="product-item__thumb">
               <picture>

                  <!-- Mobile -->
                  <source 
                     class="product-item__img"
                     srcset="
                        ${item.img_450_1x},
                        ${item.img_900_2x}
                     "media="(max-width: 767px)"/>

                  <!-- Tablet -->
                  <source 
                     class="product-item__img"
                     srcset="
                        ${item.img_354_1x},
                        ${item.img_708_2x}
                     "media="(max-width: 1199px)"/>

                  <!-- Desktop -->
                  <source 
                     class="product-item__img"
                     srcset="
                        ${item.img_370_1x},
                        ${item.img_740_2x}
                     "media="(min-width: 1200px)" />
                  <img 
                     class="product-item__img" 
                     src="${item.img_src}"
                     alt="${item.alt}" 
                     loading="lazy"/>
               </picture>

               <!-- Overlay -->
               <div class="product-item__overlay">
                  <p class="product-item__hover-text">
                     ${item.hover_text}
                  </p>
               </div>
            </div>

            <!-- Meta -->
            <div class="product-item__meta">
               <h3 class="product-item__meta-title">${item.meta_title}</h3>
               <p class="product-item__meta-text">${item.meta_text}</p>
            </div>
         </a>
      </li>`
   }, ``
);

export default productItem;