const pageHeaderHeight = document.querySelector(".page-header")
   .getBoundingClientRect().height;
const heroSection = document.querySelector(".js-hero-section");

let heroHeight = 0;

const setMobHeroHeight = () => {
   if (screen.orientation.type === "portrait-primary" 
      && window.innerWidth <= 480 
      && window.innerHeight <= 740 
      && window.innerWidth >= 375
   ) {
      heroHeight = window.innerHeight - pageHeaderHeight;
      heroSection.style.minHeight = `${heroHeight}px`;
   };
};

// const setDescHeroHeight = () => {
//    if (screen.orientation.type === "landscape-primary"
//       && window.innerWidth >= 970) {
//       heroHeight = window.innerHeight - pageHeaderHeight;
//       heroSection.style.height = `${heroHeight}px`;
//       heroSection.style.maxHeight = `700px`;
//    }
// }

setMobHeroHeight();
// setDescHeroHeight();