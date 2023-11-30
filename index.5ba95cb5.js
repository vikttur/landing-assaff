var e,t,n,c,i;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=document.querySelector(".js-navigation-menu"),i=function(){var n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");// const scrollLockMethod = !isMenuOpen
//   ? 'disableBodyScroll'
//   : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
},t.addEventListener("click",i),n.addEventListener("click",i),e.addEventListener("click",function(e){e.target.classList.contains("menu-container__link")&&i()}),c.addEventListener("click",i),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});//# sourceMappingURL=index.5ba95cb5.js.map

//# sourceMappingURL=index.5ba95cb5.js.map
