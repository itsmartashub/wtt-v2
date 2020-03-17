// import jsonData from '../json/hello'
// import '@babel/polyfill';


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

window.onload = function() {
	document.querySelector('.navbar__bag').addEventListener('click', () => {
		document.querySelector('.bag').classList.add('bag--open');
		// if(document.querySelector('.fav').classList.contains('fav--open')) {
		// 	document.querySelector('.fav').classList.remove('fav--open');
		// }
	})
	document.querySelector('.bag .btn-close').addEventListener('click', () => {
		document.querySelector('.bag').classList.remove('bag--open');
	})


	document.querySelector('.navbar__favs').addEventListener('click', () => {
		document.querySelector('.fav').classList.add('fav--open');
		// if(document.querySelector('.bag').classList.contains('bag--open')) {
		// 	document.querySelector('.bag').classList.remove('bag--open');
		// }
	})
	document.querySelector('.fav .btn-close').addEventListener('click', () => {
		document.querySelector('.fav').classList.remove('fav--open');
	})

	document.querySelector('.navbar__burger').addEventListener('click', () => {
		const $navbar = document.querySelector('.navbar');
		const $burger = document.querySelector('.navbar__burger');
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