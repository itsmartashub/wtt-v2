//* getting the products
export default class Products {
	async fetchProducts() {
		try {
			// let url = `http://localhost:1234/json/hello.json`
			// let url = `../json/all_watches.json`
			let apiKey = `$2b$10$RIb7MpsCSbkaShHFKwvqB.I5kDrmuFGxSV12IG0NNdrt0MvWgEI5G`;
			let configObject = {
				method: 'GET', // *GET, POST, PUT, DELETE, etc.
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json',
					'secret-key': apiKey
				}
			}
			let url = `https://api.jsonbin.io/b/5e72239bb325b3162e39fe2d`
			let response = await fetch(url, configObject);
			let data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}