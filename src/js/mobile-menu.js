(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
	const menuLink1 = document.querySelector('.js-menu-link1');
	const menuLink2 = document.querySelector('.js-menu-link2');
	const menuLink3 = document.querySelector('.js-menu-link3');
	const menuLink4 = document.querySelector('.js-menu-link4');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
	

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    	openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    	mobileMenu.classList.toggle('is-open');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
	menuLink1.addEventListener('click', toggleMenu);
	menuLink2.addEventListener('click', toggleMenu);
	menuLink3.addEventListener('click', toggleMenu);
	menuLink4.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();