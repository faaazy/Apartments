import { initMobileMenu } from "./components/mobile.js";
import { initBadges, initRangeSlider } from "./components/filter.js";
import { initCardSliders } from "./components/sliders.js";
import { initShowMore, initMoreCredits, showMoreCardsMobile, showMoreCreditsMobile } from "./components/showMore.js";
import { initMap } from "./components/map.js";
import { initFixedContacts } from "./components/contactsFixed.js";
import { initPhoneValidation } from "./components/phoneValidation.js";

initMobileMenu();

initBadges();
initRangeSlider();

initCardSliders();

initShowMore();
initMoreCredits();
showMoreCardsMobile();
showMoreCreditsMobile();

initMap();
initFixedContacts();
initPhoneValidation();
