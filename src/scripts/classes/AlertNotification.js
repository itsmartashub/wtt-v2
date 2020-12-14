export default class AlertNotification {
	$alertParent = document.querySelector('.alert');

	notification = {}

	addNotification({
		text,
		alertClass
	}) {

		let article = document.createElement('article');
		article.className = `alert__item ${alertClass}`;
		article.innerHTML = `
			<span class="alert__icon">&#8505;</span>
			<p class="alert__text">${text}</p>
			<span class="alert__icon--close">&#10005;</span>
		`;

		this.$alertParent.appendChild(article);

		setTimeout(() => {
			article.style.display = 'none'
		}, 3000);
	}

	hideMoreThanFewAlerts() {
		const $arrAlerts = [...document.querySelectorAll('.alert')];

		if ($arrAlerts.length > 4) {
			console.log('HIDE SOME');
		}
	}
}