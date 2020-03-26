//* localstorage
export default class Storage {
	static saveProducts(all_products) {
		localStorage.setItem('all_products', JSON.stringify(all_products));
	} // posto je static metod ne moramo da kreiramo instancu new Storage tamo gde zelimo da koristimo ovaj metod. zasto je to on uradio ovako, nisam sigurna

	static getProduct(id) {  // static jer zelimo da koristimo i u drugim klasama?
		let arrProducts = JSON.parse(localStorage.getItem('all_products'));
		return arrProducts.find(product => product.id == id)
	}
	static getAllProducts() {  // static jer zelimo da koristimo i u drugim klasama?
		let arrProducts = JSON.parse(localStorage.getItem('all_products'));
		return arrProducts || [];
	}

	static saveBag(arrBag) { localStorage.setItem('arrBag', JSON.stringify(arrBag)); }

	static saveFav(arrFav) { localStorage.setItem('arrFav', JSON.stringify(arrFav)); }

	static getBag() {
		return localStorage.getItem('arrBag') ? JSON.parse(localStorage.getItem('arrBag')) : []
	}
	static getFav() {
		return localStorage.getItem('arrFav') ? JSON.parse(localStorage.getItem('arrFav')) : []
	}
}