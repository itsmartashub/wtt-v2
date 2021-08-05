import Bag from './bag';
import Storage from './Storage'
import UI from './UI'
import Filter from './Filter'
import AlertNotification from './AlertNotification'

const $navbarFavCounter = document.querySelector('.navbar__favs-counter');
const $fav = document.querySelector('.fav');
const $favFooter = document.querySelector('.fav__footer');
const $noItemsTitle = document.querySelector('.fav--if-no-items');
const $clearFavBtn = document.querySelector('.fav .btn-clearfav');
const $favItemsCounter = document.querySelector('.fav .total-price-items');
const $favItems = document.querySelector('.fav .items');

const _AlertNotification = new AlertNotification();

let arrFavBtns = [];

export default class Favourites extends Bag {
	constructor() {
		super();
		this._arrFav = [];
	}

	get arrBag() {
		return this._arrBag;
	}
	set arrBag(value) {
		this._arrBag = value;
	}

	get arrFav() {
		return this._arrFav;
	}
	set arrFav(value) {
		this._arrFav = value;
	}


	// constructor() {
	// 	super();
	// }
	// arrFav = [];
	// arrFavBtns = [];

	getFavBtns() {
		const $favBtns = [...document.querySelectorAll('.card-fav-btn')];
		arrFavBtns = $favBtns;

		arrFavBtns.forEach(fav => {
			let itemID = fav.dataset.id;
			let itemInFav = this.arrFav.find(item => item.id == itemID);

			if (itemInFav) fav.classList.add('card-fav-btn--liked');

			fav.addEventListener('click', () => {
				if (!fav.classList.contains('card-fav-btn--liked')) {
					fav.classList.add('card-fav-btn--liked');
					let favItem = {
						...Storage.getProduct(itemID),
						amount: 1
					};
					this.arrFav = [...this.arrFav, favItem];
					Storage.saveFav(this.arrFav);
					this.setFavValues(this.arrFav);
					this.addToFavourites(favItem);

					//todo dodati alert notify kada dodamo item
					_AlertNotification.addNotification({
						text: `${favItem.title} has been added to Favourites!`,
						alertClass: 'alert__item--added'
					});
				} else {
					fav.classList.remove('card-fav-btn--liked');
					this.deleteFromFavourites(itemID);

					document.querySelectorAll('.fav .item').forEach(item => {
						if (item.dataset.id == itemID) $favItems.removeChild(item);
					})
					this.setFavValues(this.arrFav);

					//todo dodati alert notify kada obrisemo item
					_AlertNotification.addNotification({
						text: `Watch has been removed from Favourites!`,
						alertClass: 'alert__item--removed'
					});
				}
			})
		})
	}

	getSingleFavBtn(itemID) {
		return arrFavBtns.find(fav => fav.dataset.id == itemID)
	}

	setFavValues(_arrFav) {
		let items_counter = 0;
		items_counter = _arrFav.length;
		$favItemsCounter.innerText = items_counter;
		$navbarFavCounter.innerText = items_counter;
	}

	addToFavourites(favItem) {
		let arr_obj_imgs = Filter.arrObjImgs;
		const article = document.createElement('article');
		article.classList.add('item');
		article.setAttribute('data-id', `${favItem.id}`);
		article.innerHTML = `
			<figure class="item__figure">
				<img class="item__img" src=${arr_obj_imgs[favItem.id-1]} alt="watch-brown-white-${favItem.title}" />
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
		UI.displayNoneTitleNoItems('.fav--if-no-items');
		UI.enableBtn('.btn-clearfav');
		// UI.setBagFavStyleFilled($favFooter, $noItemsTitle);
	}

	deleteFromFavourites(itemID) {
		this.arrFav = this.arrFav.filter(item => item.id != itemID);
		this.setFavValues(this.arrFav);
		Storage.saveFav(this.arrFav);
		let favBtn = this.getSingleFavBtn(itemID);
		this.removeLikedClass(favBtn);
	}

	removeLikedClass(favBtn) {
		favBtn.classList.remove('card-fav-btn--liked');
	}
	addLikedClass(favBtn) {
		favBtn.classList.add('card-fav-btn--liked');
	}

	clearFav() {
		let favItemsIDs = this.arrFav.map(item => item.id);
		favItemsIDs.forEach(itemID => this.deleteFromFavourites(itemID));

		while ($favItems.children.length > 0) {
			$favItems.removeChild($favItems.children[0])
		}

		// this.setStyle({favFooter: 'none', noItems: 'block'})

		_AlertNotification.addNotification({
			text: `Your Favourites are empty!`,
			alertClass: 'alert__item--remove'
		});

		UI.displayBlockTitleNoItems('.fav--if-no-items')
		UI.disableBtn('.btn-clearbag');
		// UI.setBagFavStyleEmpty($favFooter, $noItemsTitle);

		UI.closeBagFav($fav, 'fav--open');
	}

	populateFav(_arrFav) {
		_arrFav.forEach(item => this.addToFavourites(item))
	}

	favLogic() {
		$clearFavBtn.addEventListener('click', () => {
			this.clearFav();
		});

		$favItems.addEventListener('click', e => {
			if (e.target.closest('.item__icon--remove-from-fav')) {
				let $deleteItemFromFavBtn = e.target;
				let itemID = $deleteItemFromFavBtn.dataset.id;

				$deleteItemFromFavBtn.parentElement.classList.add('item--deleted');
				_AlertNotification.addNotification({
					text: `Watch has been removed from Favourites!`,
					alertClass: 'alert__item--removed'
				});
				setTimeout(() => {
					this.deleteFromFavourites(itemID);
					$favItems.removeChild($deleteItemFromFavBtn.parentElement);
					$deleteItemFromFavBtn.parentElement.classList.remove('item--deleted');
				}, 400);

			} else if (e.target.closest('.item__icon--add-to-bag')) {
				let $addItemToBagBtn = e.target;
				let itemID = $addItemToBagBtn.dataset.id;
				let forBagItem = {
					...Storage.getProduct(itemID),
					amount: 1
				};
				let arr_bag = Storage.getBag();
				let isAlreadyInBag = arr_bag.find(item => item.id == forBagItem.id);

				if (!isAlreadyInBag) {
					arr_bag = [...arr_bag, forBagItem];
					super.arrBag = arr_bag;
					Storage.saveBag(super.arrBag);
					super.setBagValues(super.arrBag);
					// Storage.saveBag(arr_bag);
					// super.setBagValues(arr_bag);
					super.addToBag(forBagItem);
					super.bagLogic();

					this.arrFav = this.arrFav.filter(item => item.id != itemID);
					Storage.saveFav(this.arrFav);

					console.table(arr_bag);
					console.table(super.arrBag);


					$addItemToBagBtn.parentElement.classList.add('item--deleted');
					this.deleteFromFavourites(itemID); // delete iz LS

					setTimeout(() => {
						$favItems.removeChild($addItemToBagBtn.parentElement);
						$addItemToBagBtn.parentElement.classList.remove('item--deleted');
					}, 400);

					_AlertNotification.addNotification({
						text: `${forBagItem.title} has been added to the Bag!`,
						alertClass: 'alert__item--added'
					});
					//! how to match btn on card and item which is added to bag from fav
					if (window.location.pathname == '/allwatches.html') {
						let cardAddToBagBtn = document.querySelector('.card .btn-addtobag');
						if (cardAddToBagBtn.dataset.id == itemID) {
							cardAddToBagBtn.closest('.card').classList.add('card--added');
							cardAddToBagBtn.disabled = true;
						}
					}
					// this.bagFunctionallity();
				} else {
					alert(`${forBagItem.title} watch is already in Bag! You can only remove this item from the Favourites.`)
					return
				}


			}
		})

	}


	SETUP_FAV() {
		this.arrFav = Storage.getFav();
		this.setFavValues(this.arrFav);
		this.populateFav(this.arrFav);
		// this.setStyleCondition();
	}
}