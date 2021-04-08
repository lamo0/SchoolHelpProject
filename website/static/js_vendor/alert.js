const allAlerts = document.querySelectorAll(".alert")

for (var i = 0; i < allAlerts.length; i++) {
	allAlerts[i].insertAdjacentHTML('beforeend', '<div class="alert-close">&times;</div>');
	allAlerts[i].querySelector(".alert-close").addEventListener("mouseup", e => {
		e.target.parentElement.classList.add("alert-hidden")
	})
}
