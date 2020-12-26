const pageHeaderHeight = document.querySelector(".page-header")
   .getBoundingClientRect().height;
const heroSection = document.querySelector(".section.hero");
const pageFooter = document.querySelector('.page-footer');

let heroHeight = 0;

const setMobHeroHeight = () => {
   if (screen.orientation.type === "portrait-primary" 
      && window.innerHeight <= 740   
      && window.innerWidth >= 375 
      && window.innerWidth <= 480 
   ) {
      heroHeight = window.innerHeight - pageHeaderHeight;
      heroSection.style.minHeight = `${heroHeight}px`;
   };
};

const setMobFooterHeight = () => {
   if (screen.orientation.type === "portrait-primary"
      && window.innerHeight >= 740   
      && window.innerWidth >= 375 
      && window.innerWidth <= 480
   ) {
      pageFooter.style.minHeight = `auto`;
   }
}

setMobHeroHeight();
setMobFooterHeight();