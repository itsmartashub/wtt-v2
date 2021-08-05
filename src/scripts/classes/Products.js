//* getting the products
export default class Products {
	async fetchProducts() {
		try {
			let apiKey = process.env.jsonbinAK
			let configObject = {
				method: "GET",
				mode: "cors", // no-cors, *cors, same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				credentials: "same-origin", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
					"secret-key": apiKey,
				},
			}

			let url = `https://api.jsonbin.io/b/610bf0cdd5667e403a39cbc6`
			let response = await fetch(url, configObject)
			let data = await response.json()
			return data
		} catch (error) {
			console.error(error)
		}
	}
}
