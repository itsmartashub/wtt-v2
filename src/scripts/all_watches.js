// import '@babel/polyfill';
import UI from "./classes/UI"
import Products from "./classes/Products"
import Storage from "./classes/Storage"
import Bag from "./classes/Bag"
import Favourites from "./classes/Fav"
import Filter from "./classes/Filter"
import Observer from "./classes/Observer"

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".preloader").classList.add("preloader--hidden")

	const _ui = new UI()
	const _products = new Products()
	const _bag = new Bag()
	const _fav = new Favourites()
	const _observe = new Observer()
	const _filter = new Filter()

	// // _ui.SETUP_APP();
	_ui.SETUP_UI()
	_bag.SETUP_BAG()
	_fav.SETUP_FAV()

	if (!!window.IntersectionObserver) {
		_observe.scroll_observer("footer", "title", "footer")
	}

	_products
		.fetchProducts()
		.then((all_products) => {
			_filter.displayProducts(all_products)
			Storage.saveProducts(all_products)
		})
		.then(() => {
			_bag.getAddToBagBtns()
			_fav.getFavBtns()
			_bag.bagLogic()
			_fav.favLogic()

			_filter.setup_filter()
		})
})
