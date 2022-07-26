//* getting the products
export default class Products {
	async fetchProducts() {
		try {
			// console.log(process.env.JSONBIN_MASTER_KEY);
			// let masterApiKey = process.env.JSONBIN_MASTER_KEY;
			// let accessApiKey = process.env.JSONBIN_ACCESS_KEY;
			let masterApiKey = '$2b$10$NTsGaPg03ptznM8jGi3aeeYr9HbZTzvXRIdTLo0MyrWdiSzXUKxMK';
			let accessApiKey = '$2b$10$HKsoBTB3118d7CWndWXebeT2k1vWYze9YOMFWuDI9rur/S3GWoXj.';

			let configObject = {
				method: 'GET',
				// mode: "cors", // no-cors, *cors, same-origin
				mode: 'cors', // no-cors, *cors, same-origin
				// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json',
					'X-Master-Key': masterApiKey,
					'X-Access-Key': accessApiKey,
				},
			};

			// let url = `https://api.jsonbin.io/b/610bf0cdd5667e403a39cbc6`;
			let url = `https://api.jsonbin.io/v3/b/610bf0cdd5667e403a39cbc6`;
			let response = await fetch(url, configObject);
			let data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
