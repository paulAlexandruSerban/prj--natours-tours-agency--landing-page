/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../js-component-library/source/layout/header/header.js
const headerStructure = () => {
  class Header {
    constructor(element) {
      this.element = element;
      this.init();
    }
    init() {
      console.log("class Header - is loaded", this.element);
    }
  }
  document.querySelectorAll('[data-js-cmp="header"]').forEach(el => {
    new Header(el);
  });
};
/* harmony default export */ var header = (headerStructure);
;// CONCATENATED MODULE: ../js-component-library/source/layout/section/section.js
const sectionStructure = () => {
  class Section {
    constructor(element) {
      this.element = element;
      this.init();
    }
    init() {
      console.log("class section - is loaded", this.element);
    }
  }
  document.querySelectorAll('[data-js-cmp="section"]').forEach(el => {
    new Section(el);
  });
};
/* harmony default export */ var section = (sectionStructure);
;// CONCATENATED MODULE: ../js-component-library/source/layout/navigation/navigation.js
const navigationStructure = () => {
  class Navigation {
    constructor(element) {
      this.element = element;
      this.init();
    }
    init() {
      console.log("class Navigation - is loaded", this.element);
    }
  }
  document.querySelectorAll('[data-js-cmp="navigation"]').forEach(el => {
    new Navigation(el);
  });
};
/* harmony default export */ var navigation = (navigationStructure);
;// CONCATENATED MODULE: ../js-component-library/source/components/card/card.js
const cardComponent = () => {
  class Card {
    constructor(element) {
      this.element = element;
      this.init();
    }
    init() {
      console.log("class Header - is loaded", this.element);
    }
  }
  document.querySelectorAll('[data-js-cmp="header"]').forEach(el => {
    new Card(el);
  });
};
/* harmony default export */ var card = (cardComponent);
;// CONCATENATED MODULE: ../js-component-library/source/components/booking/booking.js
const bookingComponent = () => {
  class Booking {
    constructor(element) {
      this.element = element;
      this.init();
    }
    init() {
      console.log("class booking - is loaded", this.element);
    }
  }
  document.querySelectorAll('[data-js-cmp="booking"]').forEach(el => {
    new Booking(el);
  });
};
/* harmony default export */ var booking = (bookingComponent);
;// CONCATENATED MODULE: ../js-component-library/source/main.entry.js
// JS LAYOUT / STRUCTURE





new header();
new section();
new card();
new booking();
new navigation();
/******/ })()
;