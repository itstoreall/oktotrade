const pageHeaderHeight = document.querySelector(".page-header")
   .getBoundingClientRect().height;
const heroSection = document.querySelector(".section.hero");

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

setMobHeroHeight();