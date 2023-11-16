var e,t,n,c,d,i,r,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-menu-link1"),n=document.querySelector(".js-menu-link2"),c=document.querySelector(".js-menu-link3"),d=document.querySelector(".js-menu-link4"),i=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=function(){var t="true"===i.getAttribute("aria-expanded");i.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");// const scrollLockMethod = !isMenuOpen
//   ? 'disableBodyScroll'
//   : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
},i.addEventListener("click",o),r.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",o),c.addEventListener("click",o),d.addEventListener("click",o),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",function(t){t.matches&&(e.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});//# sourceMappingURL=index.db9871c4.js.map

//# sourceMappingURL=index.db9871c4.js.map
