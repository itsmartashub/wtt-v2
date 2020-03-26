// import images from '../../assets/products/*.png';
import Storage from './storage'
// import Bag from './bag'
// import Favourites from './fav'

"use strict";
const $navbarBag = document.querySelector('.navbar__bag');
const $navbarBagCounter = document.querySelector('.navbar__bag-counter'); // koliko itemsa imamo u bagu

const $bag = document.querySelector('.bag');
const $closeBagBtn = document.querySelector('.bag .btn-close');
const $clearBagBtn = document.querySelector('.bag .btn-clearbag');
const $bagTotal = document.querySelector('.bag .total-price-items');
const $bagItems = document.querySelector('.bag .items');

const $navbarFav = document.querySelector('.navbar__favs');
const $navbarFavCounter = document.querySelector('.navbar__favs-counter');
const $fav = document.querySelector('.fav');
const $closeFavBtn = document.querySelector('.fav .btn-close');

const $clearFavBtn = document.querySelector('.fav .btn-clearfav');
const $favItemsCounter = document.querySelector('.fav .total-price-items');
const $favItems = document.querySelector('.fav .items');


const $burger = document.querySelector('.navbar__burger');

// const $productsContainer = document.querySelector('.allwatches__cards');

//! bag array
// let arrBag = [];
// let arrAddToBagBtns = [];
// let arrFav = [];
// let arrFavBtns = [];


// let arrObj = Object.values(images);
//* display products
export default class UI {
	// arrBag = [];
	// arrAddToBagBtns = [];
	// arrFav = [];
	// arrFavBtns = [];

	// arrObjImgs = Object.values(images);
	// static get arrObjImgs() { return this.arrObjImgs }

	// get arrBag() {
	// 	return this.arrBag;
	// }
	// set arrBag(newValue) {
	// 	this.arrBag = newValue;
	// }

	static openBagFav(_el, _class) {
		if(!_el.classList.contains( _class)) _el.classList.add( _class);
		// console.log(this);
	}
	static closeBagFav(_el, _class) {
		if(_el.classList.contains( _class)) _el.classList.remove( _class);
		// console.log(this);
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
			const $navbar = document.querySelector('.navbar');
			const $navmob = document.querySelector('.navmob');

			if(!$burger.classList.contains('burger--opened')) {
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

	

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* --------------- BAG ---------------
	getAddToBagBtns() {
		const $addToBagBtns = [...document.querySelectorAll('.btn-addtobag')];// SET_ADD_TO_BAG_BTNS_DOM($addToBagBtns)// kasnije cemo da setujemo metod koji ce da pronadje partikularan btn u tom btns DOM-u
		// console.log(document.querySelectorAll('.item__icon--add-to-bag'));
		this.arrAddToBagBtns = $addToBagBtns;

		$addToBagBtns.forEach(btn => {
			let id = btn.dataset.id;
			let itemInBag = this.arrBag.find(item => item.id == id);

			if(itemInBag) {
				btn.closest('.card').classList.add('card--added');
				btn.disabled = true;  
			}

			btn.addEventListener('click', e => {
				// console.log(e.target);
				e.target.closest('.card').classList.add('card--added');
				e.target.disabled = true;

				//? 1. get product from products
				let bagItem = { ...Storage.getProduct(id), amount: 1 };

				//? 2. add products to the bag
				this.arrBag = [...this.arrBag, bagItem];

				//? 3. save bag in ls
				Storage.saveBag(this.arrBag);

				//? 4. set bag values
				this.setBagValues(this.arrBag);

				//? 5. display bag item
				this.addToBag(bagItem);

				//? 5. show the bag
				this.openBagFav($bag, 'bag--open');
			})
		})
	}

	setBagValues(_arrBag) {
		let total_price = 0;
		let items_counter = 0;

		_arrBag.map(item => {
			total_price += item.price * item.amount;
			items_counter += item.amount
		});

		$bagTotal.innerText = `$ ${parseFloat(total_price.toFixed(2))}`;
		$navbarBagCounter.innerText = items_counter;
	}

	addToBag(bagItem) {
		const article = document.createElement('article');
		article.classList.add('item');
		article.innerHTML = `
			<figure class="item__figure">
				<img class="item__img" src=${arrObj[bagItem.id-1]} alt="watch-brown-white-${bagItem.title}" />
			</figure>

			<div class="item__informations">
				<h3 class="item__title">${bagItem.title}</h3>
				<h4 class="item__subtitle">${bagItem.brand}</h4>
				<p class="item__price">$ ${bagItem.price}</p>
			</div>

			<div class="item__controller">
				<div class="item__add" data-id=${bagItem.id}>+</div>
				<div class="item__amount">${bagItem.amount}</div>
				<div class="item__remove" data-id=${bagItem.id}>-</div>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" class="item__icon item__icon--delete" data-id=${bagItem.id} width="17.499" height="20.783" viewBox="0 0 17.499 20.783">
				<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>
			</svg>
		`;

		$bagItems.appendChild(article);
	}

	populateBag(_arrBag) {
		_arrBag.forEach(item => this.addToBag(item))
	}

	bagLogic() {
		$clearBagBtn.addEventListener('click', () => {
			this.clearBag();
		});

		//? bag functionallity
		$bagItems.addEventListener('click', e => {
			//* delete item
			if(e.target.closest('.item__icon--delete')) { // ! da nisam stavila pointer-events: none; u css-u za sve childove svg elementa, morala bih closest() da koristim, a ne match()
				let $deleteItemBtn = e.target;
				let itemID = $deleteItemBtn.dataset.id;

				$deleteItemBtn.parentElement.classList.add('item--deleted');

				setTimeout(() => {
						this.deleteFromBag(itemID); // uklonili smo iz arrBag, ali nismo i iz DOM-a
					// $bagItems.removeChild(deleteItemBtn.parentElement) || $bagItems.removeChild(deleteItemBtn.parentNode); // za mozilu kao radi parentNode
					$bagItems.removeChild($deleteItemBtn.parentElement);
					$deleteItemBtn.parentElement.classList.remove('item--deleted');
				}, 400);

			//* add item amount
			} else if(e.target.matches('.item__add')) {
				let $increaseAmountBtn = e.target;
				let itemID = $increaseAmountBtn.dataset.id;
				let currItem = this.arrBag.find(item => item.id == itemID);
				currItem.amount = currItem.amount + 1;
				Storage.saveBag(this.arrBag);
				this.setBagValues(this.arrBag);
				$increaseAmountBtn.nextElementSibling.innerText = currItem.amount;
			} else if(e.target.matches('.item__remove')) {
				let $decreaseAmountBtn = e.target;
				let itemID = $decreaseAmountBtn.dataset.id;
				let currItem = this.arrBag.find(item => item.id == itemID);
				currItem.amount = currItem.amount - 1;

				if(currItem.amount > 0) {
					Storage.saveBag(this.arrBag);
					this.setBagValues(this.arrBag);
					$decreaseAmountBtn.previousElementSibling.innerText = currItem.amount;
				} else {
					$decreaseAmountBtn.parentElement.parentElement.classList.add('item--deleted');

					setTimeout(() => {
						$bagItems.removeChild($decreaseAmountBtn.parentElement.parentElement);
						this.deleteFromBag(itemID);
						$decreaseAmountBtn.parentElement.parentElement.classList.remove('item--deleted');
					}, 400);
				}
			}
		})
	}

	clearBag() {
		console.log(this); // kad stavim aa addEventListener this.clearBag() on vrati da se this odnosi na UI{} dakle ono sto bi nam trebalo, a kad stavimo this.clearBAg bez zagrada, onda za referencu vraca button na koji smo kliknuli tj clearBagBtn, on kaze da je u ovim slucajevima bolje koristini () => { this.clearBtn()} nego bez () => {}
		let bagItemsIDs = this.arrBag.map(item => item.id);
		bagItemsIDs.forEach(itemID => this.deleteFromBag(itemID));

		console.log($bagItems.children);

		while($bagItems.children.length > 0) {
			$bagItems.removeChild($bagItems.children[0])
		}

		this.closeBagFav($bag, 'bag--open')
	}
	
	deleteFromBag(itemID) {
		this.arrBag = this.arrBag.filter(item => item.id != itemID);
		this.setBagValues(this.arrBag);
		Storage.saveBag(this.arrBag);
		let ATBbtn = this.getSingleATBbtn(itemID);
		ATBbtn.disabled = false;
		ATBbtn.closest('.card').classList.remove('card--added');
	}

	getSingleATBbtn(itemID) {
		return this.arrAddToBagBtns.find(btn => btn.dataset.id == itemID)
	}


//* --------------- FAV ---------------
	getFavBtns() {
		const $favBtns = [...document.querySelectorAll('.card__fav')];
		this.arrFavBtns = $favBtns;
		
		this.arrFavBtns.forEach(fav => {
			let itemID = fav.dataset.id;
			let itemInFav = this.arrFav.find(item => item.id == itemID);

			if(itemInFav) fav.classList.add('card__fav--liked');

			fav.addEventListener('click', () => {
				if(!fav.classList.contains('card__fav--liked')) {
					fav.classList.add('card__fav--liked');
					let favItem = Storage.getProduct(itemID);
					this.arrFav = [...this.arrFav, favItem];
					Storage.saveFav(this.arrFav);
					this.setFavValues(this.arrFav);
					this.addToFavourites(favItem);
				} else {
					fav.classList.remove('card__fav--liked');
					this.deleteFromFavourites(itemID);

					document.querySelectorAll('.fav .item').forEach(item => {
						if(item.dataset.id == itemID) $favItems.removeChild(item);
					})
					this.setFavValues(this.arrFav);
				}
			})
		})
	}

	getSingleFavBtn(itemID) {
		return this.arrFavBtns.find(fav => fav.dataset.id == itemID)
	}

	setFavValues(_arrFav) {
		let items_counter = 0;
		items_counter = _arrFav.length;
		$favItemsCounter.innerText = items_counter;
		$navbarFavCounter.innerText = items_counter;
	}

	addToFavourites(favItem) {
		const article = document.createElement('article');
		article.classList.add('item');
		article.setAttribute('data-id', `${favItem.id}`);
		article.innerHTML = `
			<figure class="item__figure">
				<img class="item__img" src=${arrObj[favItem.id-1]} alt="watch-brown-white-${favItem.title}" />
			</figure>

			<div class="item__informations">
				<h3 class="item__title">${favItem.title}</h3>
				<h4 class="item__subtitle">${favItem.brand}</h4>
				<p class="item__price">$ ${favItem.price}</p>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" data-id=${favItem.id} class="item__icon item__icon--add-to-bag" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">
				<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>
			</svg>

			<svg xmlns="http://www.w3.org/2000/svg" data-id=${favItem.id} class="item__icon item__icon--remove-from-fav" width="17.499" height="20.783" viewBox="0 0 17.499 20.783">
				<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>
			</svg>
		`;

		$favItems.appendChild(article);
	}

	deleteFromFavourites(itemID) {
		this.arrFav = this.arrFav.filter(item => item.id != itemID);
		this.setFavValues(this.arrFav);
		Storage.saveFav(this.arrFav);

		let favBtn = this.getSingleFavBtn(itemID);
		this.removeLikedClass(favBtn);
	}

	removeLikedClass(favBtn) {
		favBtn.classList.remove('card__fav--liked');
	}
	addLikedClass(favBtn) {
		favBtn.classList.add('card__fav--liked');
	}

	clearFav() {
		let favItemsIDs = this.arrFav.map(item => item.id);
		favItemsIDs.forEach(itemID => this.deleteFromFavourites(itemID));

		// let $currItem = document.querySelector(`[data-id="${itemID}"]`);
		// console.log($favItems);
		// console.log($currItem);
		// $favItems.removeChild($currItem);

		// console.log($favItems.children);

		while($favItems.children.length > 0) {
			$favItems.removeChild($favItems.children[0])
		}

		this.closeBagFav($fav, 'fav--open')
	}

	populateFav(_arrFav) {
		_arrFav.forEach(item => this.addToFavourites(item))
	}

	favLogic() {
		$clearFavBtn.addEventListener('click', () => {
			this.clearFav();
		});

		$favItems.addEventListener('click', e => {
			if(e.target.closest('.item__icon--remove-from-fav')) {
				let $deleteItemFromFavBtn = e.target;
				let itemID = $deleteItemFromFavBtn.dataset.id;

				$deleteItemFromFavBtn.parentElement.classList.add('item--deleted');
				setTimeout(() => {
					this.deleteFromFavourites(itemID);
					$favItems.removeChild($deleteItemFromFavBtn.parentElement);
					$deleteItemFromFavBtn.parentElement.classList.remove('item--deleted');
				}, 400);

			} else if(e.target.closest('.item__icon--add-to-bag')) {
				// console.log(e.target);
				let $addItemToBagBtn = e.target;
				let itemID = $addItemToBagBtn.dataset.id;
				// console.log(itemID);
				let forBagItem = {...Storage.getProduct(itemID), amount: 1 };

				$addItemToBagBtn.parentElement.classList.add('item--deleted');
			
				this.arrBag = [...this.arrBag, forBagItem];
				Storage.saveBag(this.arrBag);
				this.setBagValues(this.arrBag);
				this.addToBag(forBagItem);

				//! how to match btn on card and item which is added to bag from fav
				let cardAddToBagBtn = document.querySelector('.card .btn-addtobag');
				if(cardAddToBagBtn.dataset.id == itemID) {
					console.log(cardAddToBagBtn);
					// cardAddToBagBtn.closest('.card').classList.add('card--added');
					// cardAddToBagBtn.disabled = true;
				}

				this.deleteFromFavourites(itemID); // delete iz LS
				setTimeout(() => {
					$favItems.removeChild($addItemToBagBtn.parentElement);
					$addItemToBagBtn.parentElement.classList.remove('item--deleted');
				}, 400);
			}
		})

	}

*/

	// SETUP_APP() {
	// 	this.arrBag = Storage.getBag();
	// 	this.setBagValues(this.arrBag);
	// 	this.populateBag(this.arrBag);
		
	// 	this.arrFav = Storage.getFav();
	// 	this.setFavValues(this.arrFav);
	// 	this.populateFav(this.arrFav);

	// 	this.addClickListenersToNavbarIcons($navbarBag, $closeBagBtn, $bag, 'bag--open');
	// 	this.addClickListenersToNavbarIcons($navbarFav, $closeFavBtn, $fav, 'fav--open');

	// 	this.addListenerToBurger();
	// }

	SETUP_UI() {
		// Bag.SETUP_BAG();
		// Favourites.SETUP_FAV();
		
		// this.arrFav = Storage.getFav();
		// this.setFavValues(this.arrFav);
		// this.populateFav(this.arrFav);

		this.addClickListenersToNavbarIcons($navbarBag, $closeBagBtn, $bag, 'bag--open');
		this.addClickListenersToNavbarIcons($navbarFav, $closeFavBtn, $fav, 'fav--open');

		this.addListenerToBurger();
	}

	

}