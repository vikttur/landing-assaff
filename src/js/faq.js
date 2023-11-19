const spoilersBlock = document.querySelector('[data-one-spoiler]');

spoilersBlock.addEventListener('click', setSpoilerAction);

function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
 const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
	if (spoilerTitles.length > 0) {
		spoilerTitles.forEach(spoilerTitle => {
				if (hideSpoilerBody) {
					spoilerTitle.removeAttribute('tabindex');

					if(!spoilerTitle.classList.contains('_active')) {
						spoilerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spoilerTitle.setAttribute('tabindex', '-1');
					spoilerTitle.nextElementSibling.hidden = false;
				}
		});
	}
}

function setSpoilerAction (e) {
	const el = e.target;

	if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
		const spoilerTitle = el.hasAttribute('[data-spoiler]') ? el	: el.closest('data-spoiler');
		const spoilersBlock = spoilerTitle.closest('[data-spoiler]');
		const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true: false;

		if (!spoilersBlock.querySelectorAll('.slide').length) {
			if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
				hideSpoilersBody(spoilersBlock);
			}

			spoilerTitle.classlist.toggle('_active');
			_slideToggle(spoilerTitle.nextElementSibling, 500);
		}

		e.preventDefault();
	}
}

function hideSpoilersBody(spoilersBlock) {
	const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
	if (spoilerActiveTitle) {
		spoilerActiveTitle.classList.remove('_active');
		_slideUp(spoilerActiveTitle.nextElementSibling, 500);
	}
}
