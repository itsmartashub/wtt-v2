const $navbar = document.querySelector(".navbar")
const $navmob = document.querySelector(".navmob")
const $navbarBag = document.querySelector(".navbar__bag")
const $bag = document.querySelector(".bag")
const $closeBagBtn = document.querySelector(".bag .btn-close")
const $navbarFav = document.querySelector(".navbar__favs")
const $fav = document.querySelector(".fav")
const $closeFavBtn = document.querySelector(".fav .btn-close")
const $burger = document.querySelector(".navbar__burger")
const $modal_bg = document.querySelector(".modal-bg")

export default class UI {
	static openBagFav(_el, _class) {
		if (!_el.classList.contains(_class)) _el.classList.add(_class)

		if (!$modal_bg.classList.contains("modal-bg--open"))
			$modal_bg.classList.add("modal-bg--open")
	}
	static closeBagFav(_el, _class) {
		if (_el.classList.contains(_class)) _el.classList.remove(_class)

		if ($modal_bg.classList.contains("modal-bg--open"))
			$modal_bg.classList.remove("modal-bg--open")
	}

	static displayNoneTitleNoItems(_selector) {
		document.querySelector(_selector).style.display = "none"
	}
	static displayBlockTitleNoItems(_selector) {
		document.querySelector(_selector).style.display = "flex"
	}
	static disableBtn(_selector) {
		document.querySelector(_selector).disabled = true
	}
	static enableBtn(_selector) {
		document.querySelector(_selector).disabled = false
	}

	static setStyle({
		_footerEl,
		_noItemsTitleEl,
		_displayFooter,
		_displayNoItemsTitle,
	}) {
		_footerEl.style.display = _displayFooter
		_noItemsTitleEl.style.display = _displayNoItemsTitle
	}
	static setBagFavStyleEmpty(_footerEl, _noItemsTitleEl) {
		this.setStyle({
			_footerEl,
			_noItemsTitleEl,
			_displayFooter: "none",
			_displayNoItemsTitle: "block",
		})
	}
	static setBagFavStyleFilled(_footerEl, _noItemsTitleEl) {
		this.setStyle({
			_footerEl,
			_noItemsTitleEl,
			_displayFooter: "grid",
			_displayNoItemsTitle: "none",
		})
	}

	addClickListenersToNavbarIcons(_clickElOpen, _clickElClose, _el, _class) {
		_clickElOpen.addEventListener("click", () => {
			UI.openBagFav(_el, _class)
		})
		_clickElClose.addEventListener("click", () => {
			UI.closeBagFav(_el, _class)
		})
	}

	addListenerToBurger() {
		$burger.addEventListener("click", () => {
			if (!$burger.classList.contains("burger--opened")) {
				$burger.classList.add("burger--opened")
				$navmob.classList.add("navmob--opened")
				$navbar.classList.add("navbar--transparent")
			} else {
				$burger.classList.remove("burger--opened")
				$navmob.classList.remove("navmob--opened")
				$navbar.classList.remove("navbar--transparent")
			}
		})
	}

	addListenersToModalBg() {
		$modal_bg.addEventListener("click", () => {
			UI.closeBagFav($bag, "bag--open")
			UI.closeBagFav($fav, "fav--open")
		})

		window.addEventListener("keyup", (e) => {
			e.preventDefault()

			if (
				e.key === "Escape" ||
				e.key === 27 ||
				$modal_bg.classList.contains("modal-bg--open")
			) {
				UI.closeBagFav($bag, "bag--open")
				UI.closeBagFav($fav, "fav--open")
			}
		})
	}

	resizeNavbarOnScroll() {
		window.addEventListener("scroll", () => {
			if (
				window.pageYOffset > 30 &&
				!$navmob.classList.contains("navmob--opened")
			) {
				$navbar.classList.add("navbar--scrolled")
				return
			}
			$navbar.classList.remove("navbar--scrolled")
		})
	}

	SETUP_UI() {
		this.resizeNavbarOnScroll()

		this.addClickListenersToNavbarIcons(
			$navbarBag,
			$closeBagBtn,
			$bag,
			"bag--open"
		)
		this.addClickListenersToNavbarIcons(
			$navbarFav,
			$closeFavBtn,
			$fav,
			"fav--open"
		)

		this.addListenerToBurger()
		this.addListenersToModalBg()
	}
}
