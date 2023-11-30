// initSpoilerBody(spoilersBlock, true);
// function initSpoilerBody(spoilersBlock, hideSpoilerBody = false) {
// 	const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
// 	if (spoilerTitles.length > 0) {
// 		spoilerTitles.forEach(spoilerTitle => {
// 				if (hideSpoilerBody) {
// 					spoilerTitle.removeAttribute('tabindex');
// 					if(!spoilerTitle.classList.contains('_active')) {
// 						spoilerTitle.nextElementSibling.hidden = true;
// 					}
// 				} else {
// 					spoilerTitle.setAttribute('tabindex', '-1');
// 					spoilerTitle.nextElementSibling.hidden = false;
// 				}
// 		});
// 	}
// }
document.querySelector("[data-one-spoiler]").addEventListener("click",function(e){var i=e.target;if(i.hasAttribute("data-spoiler")||i.closest("[data-spoiler]")){var r,s=i.hasAttribute("data-spoiler")?i:i.closest("[data-spoiler]"),n=s.closest("[data-spoilers]"),a=!!n.hasAttribute("data-one-spoiler");n.querySelectorAll("._slide").length||(a&&!s.classList.contains("_active")&&(r=n.querySelector("[data-spoiler]._active"))&&(r.classList.remove("_active"),t(r.nextElementSibling,500)),s.classList.toggle("_active"),o(s.nextElementSibling,500)),e.preventDefault()}});// ==========================================
var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t.classList.contains("_slide")||(t.classList.add("_slide"),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout(function(){t.hidden=!0,t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide")},e))},e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;if(!t.classList.contains("_slide")){t.classList.add("_slide"),t.hidden&&(t.hidden=!1);var o=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=o+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide")},e)}},o=function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return o.hidden?e(o,i):t(o,i)};//# sourceMappingURL=index.84e76521.js.map

//# sourceMappingURL=index.84e76521.js.map
