const $scrollTop = document.querySelector('.scrolltop');
const $scrollDown = document.querySelector('.scrolldown');
const $filtermobile = document.querySelector('.filtermobile');

//? ANIM
const $from_bottom = document.querySelectorAll('.anim-from-bottom');
const $from_bottom_cards = document.querySelectorAll('.anim-card-from-bottom');

const $feature_figure = document.querySelectorAll('.feature__figure');
const $feature_infos = document.querySelectorAll('.feature__infos');
const $sliders = [...$feature_figure, ...$feature_infos];

const $anim_text = document.querySelectorAll('.anim-text');

export default class Observer {

	scroll_observer(_selectorScrolltopShow, _selectorScrolltopHide, _selectorScrolldownHide) {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				// console.log(entry.target.className);

				if (entry.isIntersecting && (entry.target.className == _selectorScrolltopShow)) {
					this.showScrollTop();
					this.showScrollDown();

				} else if (entry.isIntersecting && (entry.target.className == _selectorScrolltopHide)) {
					this.hideScrollTop();
				}

				if (entry.isIntersecting && (entry.target.className == _selectorScrolldownHide)) {
					this.hideScrollDown();
					if (window.location.pathname == '/allwatches.html') this.hideFiltermobile();
				} else {
					if (window.location.pathname == '/allwatches.html') {
						this.showFiltermobile();
						this.showScrollDown();
					};
				}
			})
		})

		let showScrolltopTriggerEl = document.querySelectorAll(`.${_selectorScrolltopShow}`);
		let hideScrolltopTriggerEl = document.querySelectorAll(`.${_selectorScrolltopHide}`);
		let hideScrolldownTriggerEl = document.querySelectorAll(`.${_selectorScrolldownHide}`);
		let arrObservingElements = [...showScrolltopTriggerEl, ...hideScrolltopTriggerEl, ...hideScrolldownTriggerEl];

		// console.log(arrObservingElements);
		arrObservingElements.forEach(el => {
			observer.observe(el);
		})
	}

	showScrollTop() {
		$scrollTop.classList.add('scrolltop--show');
	}
	hideScrollTop() {
		if ($scrollTop.classList.contains('scrolltop--show')) $scrollTop.classList.remove('scrolltop--show');
	}
	hideScrollDown() {
		$scrollDown.classList.add('scrolldown--hidden');
	}
	showScrollDown() {
		if ($scrollDown.classList.contains('scrolldown--hidden')) $scrollDown.classList.remove('scrolldown--hidden');
	}

	hideFiltermobile() {
		$filtermobile.classList.add('filtermobile--hidden');
		$filtermobile.style.animation = 'none';
	}
	showFiltermobile() {
		if ($filtermobile.classList.contains('filtermobile--hidden')) $filtermobile.classList.remove('filtermobile--hidden');
	}

	animation_observer() {
		const appearOptions = {
			// threshold: 1, //! zelim da se uverim da je cela recimo slika u view-u pre nego sto se pojavi uopste tj fadeinuje
			threshold: 0.5, //! ali smo ipak stavili na 0 jer za ovo slide-in gde ..
			rootMargin: '0px 0px 0px 0px'
		};
		const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return
				} else {
					entry.target.classList.add('appear');
					appearOnScroll.unobserve(entry.target); //! stop looking on something when you've done ur job
				}
			})
		}, appearOptions);

		// this.addObserveToEls($from_bottom, appearOnScroll);
		// this.addObserveToEls($from_bottom_cards, appearOnScroll);
		// this.addObserveToEls($sliders, appearOnScroll);
		// this.addObserveToEls($anim_text, appearOnScroll);

		$from_bottom.forEach(bottom => {
			appearOnScroll.observe(bottom);
		});
		$from_bottom_cards.forEach(card => {
			appearOnScroll.observe(card);
		});
		$sliders.forEach(slider => {
			appearOnScroll.observe(slider);
		});
		$anim_text.forEach(text => {
			appearOnScroll.observe(text);
		});
	}



	addObserveToEls(_arrEls, _nameOfObserver) {
		_arrEls.forEach(el => {
			_nameOfObserver.observe(el)
		})
	}

	browserDontSupportObserver() {
		$from_bottom.forEach(bottom => {
			bottom.style.cssText = `
				opacity: 1;
				transform: translate3d(0,0,0);
			`;
		});
		$from_bottom_cards.forEach(card => {
			card.style.cssText = `
				opacity: 1;
				transform: inherit;
			`;
		});
		$sliders.forEach(slider => {
			slider.style.cssText = `
				opacity: 1;
				transform: translate3d(0,0,0);
			`;
		});
		$anim_text.forEach(text => {
			text.style.cssText = `
				opacity: 1;
				letter-spacing: inherit;
			`;
		});
	}

	SETUP_OBSERVER(_selector) {
		this.scroll_observer(_selector);
	}
}