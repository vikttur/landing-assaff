const spoilersBlock = document.querySelector('[data-one-spoiler]');

initSpoilerBody(spoilersBlock); 

function initSpoilerBody(spoilersBlock) {
	const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');

	if (spoilerTitles.length > 0) {
		spoilerTitles.forEach(spoilerTitle => {
				if(!spoilerTitle.classList.contains('_active')) {
					spoilerTitle.nextElementSibling.hidden = true;
				}
		});
	}
}

spoilersBlock.addEventListener('click', setSpoilerAction);

function setSpoilerAction (e) {
	const el = e.target;
	
	if (el.hasAttribute('data-spoiler')) {
		const spoilerTitle = el;
		const spoilersBlock = el.closest('[data-one-spoiler]');
		
		if (!spoilerTitle.classList.contains('_active')) hideSpoilersBody(spoilersBlock);
		spoilerTitle.classList.toggle('_active');
		_slideToggle(spoilerTitle.nextElementSibling);

		e.preventDefault();
	}
}

function hideSpoilersBody(spoilersBlock) {
	const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');

	if (spoilerActiveTitle) {
		spoilerActiveTitle.classList.remove('_active');
		_slideUp(spoilerActiveTitle.nextElementSibling);
	}
}

const _slideToggle = (target) => {
	return target.hidden ? _slideDown (target) : _slideUp (target);
}

const _slideUp = (target) => {
		target.hidden = true;
}

const _slideDown = (target) => {
		target.hidden = false;
}
