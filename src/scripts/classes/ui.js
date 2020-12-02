const $navbar = document.querySelector('.navbar');
const $navmob = document.querySelector('.navmob');
const $navbarBag = document.querySelector('.navbar__bag');
const $bag = document.querySelector('.bag');
const $closeBagBtn = document.querySelector('.bag .btn-close');
const $navbarFav = document.querySelector('.navbar__favs');
const $fav = document.querySelector('.fav');
const $closeFavBtn = document.querySelector('.fav .btn-close');
const $burger = document.querySelector('.navbar__burger');

export default class UI {
	static openBagFav(_el, _class) {
		if (!_el.classList.contains(_class)) _el.classList.add(_class);
		// console.log(this);
	}
	static closeBagFav(_el, _class) {
		if (_el.classList.contains(_class)) _el.classList.remove(_class);
		// console.log(this);
	}
	static displayNoneTitleNoItems(_selector) {
		document.querySelector(_selector).style.display = 'none'
	}
	static displayBlockTitleNoItems(_selector) {
		document.querySelector(_selector).style.display = 'block'
	}

	addClickListenersToNavbarIcons(_clickElOpen, _clickElClose, _el, _class) {
		_clickElOpen.addEventListener('click', () => {
			UI.openBagFav(_el, _class);
		});
		_clickElClose.addEventListener('click', () => {
			UI.closeBagFav(_el, _class);
		});
	}

	addListenerToBurger() {
		$burger.addEventListener('click', () => {
			// const $navmob = document.querySelector('.navmob');

			if (!$burger.classList.contains('burger--opened')) {
				$burger.classList.add('burger--opened');
				$navmob.classList.add('navmob--opened');
				$navbar.classList.add('navbar--transparent');

			} else {
				$burger.classList.remove('burger--opened');
				$navmob.classList.remove('navmob--opened');
				$navbar.classList.remove('navbar--transparent');
			}
		})
	}

	resizeNavbarOnScroll() {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 30 && !$navmob.classList.contains('navmob--opened')) {
				$navbar.classList.add('navbar--scrolled');
				return
			}
			$navbar.classList.remove('navbar--scrolled');
		})
	}




	SETUP_UI() {
		// Bag.SETUP_BAG();
		// Favourites.SETUP_FAV();

		// this.arrFav = Storage.getFav();
		// this.setFavValues(this.arrFav);
		// this.populateFav(this.arrFav);
		this.resizeNavbarOnScroll();

		this.addClickListenersToNavbarIcons($navbarBag, $closeBagBtn, $bag, 'bag--open');
		this.addClickListenersToNavbarIcons($navbarFav, $closeFavBtn, $fav, 'fav--open');

		this.addListenerToBurger();
	}



}