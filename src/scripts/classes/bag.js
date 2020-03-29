import Storage from './Storage'
import UI from './UI'
import Filter from './Filter'

const $navbarBagCounter = document.querySelector('.navbar__bag-counter'); // koliko itemsa imamo u bagu
const $bag = document.querySelector('.bag');
const $clearBagBtn = document.querySelector('.bag .btn-clearbag');
const $bagTotal = document.querySelector('.bag .total-price-items');
const $bagItems = document.querySelector('.bag .items');

let arrAddToBagBtns = [];

export default class Bag {
	constructor() {
		this._arrBag = [];
	}

	get arrBag() {
		return this._arrBag;
	}

	set arrBag(value) {
		this._arrBag = value;
	}

	getAddToBagBtns() {
		let $addToBagBtns;
		if(window.location.pathname == '/index.html' || window.location.pathname == '/') {
			$addToBagBtns = [...document.querySelectorAll('.add-to-bag')];
		} else if(window.location.pathname == '/allwatches.html') {
			$addToBagBtns = [...document.querySelectorAll('.btn-addtobag')];
		}

		arrAddToBagBtns = $addToBagBtns;

		$addToBagBtns.forEach(btn => {
			let id = btn.dataset.id;
			let itemInBag = this.arrBag.find(item => item.id == id);

			if(itemInBag && window.location.pathname == '/index.html') {
				btn.classList.add('btn--added');
				btn.innerHTML = 'ADDED &nbsp;&#10003;';
				btn.disabled = true;
			} else if(itemInBag && window.location.pathname == '/allwatches.html') {
				btn.closest('.card').classList.add('card--added');
				btn.disabled = true; 
			}

			btn.addEventListener('click', e => {
				if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
					e.target.classList.add('btn--added');
					e.target.innerHTML = 'ADDED &nbsp;&#10003;';
				} else if(window.location.pathname == '/allwatches.html') {
					e.target.closest('.card').classList.add('card--added');
				}
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
				UI.openBagFav($bag, 'bag--open');
			})
		})
	}

	setBagValues(_arrBag) {
		console.log(this.arrBag);
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
		let arr_obj_imgs = Filter.arrObjImgs;
		const article = document.createElement('article');
		article.classList.add('item');
		article.innerHTML = `
			<figure class="item__figure">
				<img class="item__img" src=${arr_obj_imgs[bagItem.id-1]} alt="watch-brown-white-${bagItem.title}" />
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

				console.log(this.arrBag); //! []

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
		// console.log(this); // kad stavim aa addEventListener this.clearBag() on vrati da se this odnosi na UI{} dakle ono sto bi nam trebalo, a kad stavimo this.clearBAg bez zagrada, onda za referencu vraca button na koji smo kliknuli tj clearBagBtn, on kaze da je u ovim slucajevima bolje koristini () => { this.clearBtn()} nego bez () => {}
		let bagItemsIDs = this.arrBag.map(item => item.id);
		bagItemsIDs.forEach(itemID => this.deleteFromBag(itemID));

		// console.log($bagItems.children);

		while($bagItems.children.length > 0) {
			$bagItems.removeChild($bagItems.children[0])
		}

		UI.closeBagFav($bag, 'bag--open')
	}
	
	deleteFromBag(itemID) {
		this.arrBag = this.arrBag.filter(item => item.id != itemID);
		this.setBagValues(this.arrBag);
		Storage.saveBag(this.arrBag);
		let ATBbtn = this.getSingleATBbtn(itemID);
		ATBbtn.disabled = false;

		if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
			ATBbtn.classList.remove('btn--added');

			if(ATBbtn.parentElement.className == 'feature__footer') {
				ATBbtn.innerText = 'add to bag';
			} else {
				ATBbtn.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">
						<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>
					</svg>
					add to bag
				`;
			}
		} else if (window.location.pathname == '/allwatches.html') {
			ATBbtn.closest('.card').classList.remove('card--added');
		}
	}

	getSingleATBbtn(itemID) {
		return arrAddToBagBtns.find(btn => btn.dataset.id == itemID)
	}

	SETUP_BAG() {
		this.arrBag = Storage.getBag();
		this.setBagValues(this.arrBag);
		this.populateBag(this.arrBag);
	}

}