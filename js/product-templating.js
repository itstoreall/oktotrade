import productItem from "./product-markup.js";

const refs = {
   gallery: document.querySelector('.product-list')
};

refs.gallery.insertAdjacentHTML("beforeend", productItem);