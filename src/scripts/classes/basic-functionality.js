export default class BasicFunctionality {
	openBag() {
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
	}
}