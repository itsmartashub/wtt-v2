export default class AlertNotification {
	notification = {
		display: false,
		text: "Notification placeholder text",
		className: 'success'
	}

	get notification() {
		return this.notification;
	}

	set notification({ display, text, alertClass}) {
		this.notification.display = display;
		this.notification.text = text;
		this.notification.className = alertClass;
	}

	displayNotification({ display, text, alertClass}) {
		if(display) {
			setTimeout(() => {
				this.notification.display = false
			}, 3000);

			this.notification({display, text, alertClass});
		}
	}
}