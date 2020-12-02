// import jsonData from '../json/hello'
import '@babel/polyfill';
import UI from './classes/UI';
import Products from './classes/Products';
import Storage from './classes/Storage';
import Bag from './classes/Bag';
import Favourites from './classes/Fav';
import Filter from './classes/Filter';
import Observer from './classes/Observer';

// class Proba {
// 	name = "Rorors";

// 	test() {
// 		console.log(this.name);
// 	}

// }

// document.addEventListener('DOMContentLoaded', () => {
// 	const proba = new Proba();

// 	proba.test();

// 	const values = {a: 1, b: 2}
// 	const newValues = { ...values, c: 3}

// 	console.log(newValues);
// 	console.log(jsonData);

// 	console.log(Object.entries(jsonData));
// 	let fromJSONobjToArr = Object.entries(jsonData)

// 	fromJSONobjToArr.forEach(([key, value]) => {
// 		console.log('KEY ' + key);
// 		console.log('VALUE ' +value);
// 	})

// 	// LAZY LOADING
// 	const pages = {
// 		about: import('./pages/about'),
// 		blog: import('./pages/blog')
// 	}

// 	async function renderPage(name) {
// 		let page = await pages[name];
// 		return page.render()
// 	}

// 	renderPage('about')

// 	document.getElementById('aboutButton').addEventListener('click', async () => {
//         const module = await import('./pages/about');
//         module.readFSText();
//     });

// })

document.addEventListener('DOMContentLoaded', () => {
	const _ui = new UI();
	const _bag = new Bag();
	const _fav = new Favourites();
	const _products = new Products();
	const _observe = new Observer();

	const _filter = new Filter();

	// // _ui.SETUP_APP();
	_bag.SETUP_BAG();
	_fav.SETUP_FAV();
	_ui.SETUP_UI();

	if (!!window.IntersectionObserver) {
		_observe.scroll_observer('footer', 'title', 'footer');
	}

	_products.fetchProducts().then(all_products => {
		_filter.displayProducts(all_products);
		Storage.saveProducts(all_products);
	}).then(() => {
		_bag.getAddToBagBtns();
		_fav.getFavBtns();
		_bag.bagLogic();
		_fav.favLogic();

		_filter.setup_filter();
	});
})