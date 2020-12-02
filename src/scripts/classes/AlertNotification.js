export default class AlertNotification {
	$alertParent = document.querySelector('.alert');

	// notification = {
	// 	display: false,
	// 	text: "Notification placeholder text",
	// 	alertClass: 'alert--removed' // removed //default
	// }
	notification = {}

	// setNotification({ display, text, alertClass}) {
	// 	this.notification.display = display;
	// 	this.notification.text = text;
	// 	this.notification.alertClass = alertClass;
	// }

	addNotification({text, alertClass}) {
		// this.setNotification({ display, text, alertClass});

		let article = document.createElement('article');
		article.className = `alert__item ${alertClass}`;
		article.innerHTML = `
			<span class="alert__icon">&#8505;</span>
			<p class="alert__text">${text}</p>
			<span class="alert__icon--close">&#10005;</span>
		`;

		// this.$alertParent.insertAdjacentElement('afterbegin', article);
		this.$alertParent.appendChild(article);

		setTimeout(() => {
			article.style.display = 'none'
			// article.style.opacity = '0';
			// setTimeout(() => article.style.display = 'none', 500);
		}, 3000);

	}

	// displayNotification({ display, text, alertClass}) {
	// 	const $alertItem = document.querySelector('.alert');
	// 	if(display) {
	// 		$alertItem.querySelector('p').textContent = text;
	// 		if(alertClass) $alertItem.classList.add(alertClass);
	// 		$alertItem.display = 'block';
	// 		setTimeout(() => {
	// 			$alertItem.display = 'none';
	// 		}, 3000);

	// 		// this.setNotification({display, text, alertClass});
	// 	}
	// }

	hideMoreThanFewAlerts() {
		const $arrAlerts =[...document.querySelectorAll('.alert')];

		if($arrAlerts.length > 4) {
			console.log('HIDE SOME');
		}
	}
}