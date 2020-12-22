import productItem from "./product-markup.js";

const refs = {
   html: document.querySelector('#list-item-template').innerHTML.trim(),
   gallery: document.querySelector('.js-product-list')
};

refs.gallery.insertAdjacentHTML("beforeend", productItem);