for (var i = 0; i < document.querySelectorAll(".modal").length; i++) {
	let currentModal = document.querySelectorAll(".modal")[i]
	
	currentModal.insertAdjacentHTML("beforeend", "<div class='modal-shade'></div>")
	
	currentModal.querySelector(".modal-shade")
		.appendChild(currentModal.querySelector(".modal-content"))
	
	currentModal.querySelector(".modal-content")
		.insertAdjacentHTML("beforeend", '<div class="modal-close">&times;</div>')
	
	currentModal.addEventListener("mouseup", e => {
		// Toggle the modal shown class
		
		e.target.parentElement.classList.toggle("modal-show")
		
		if (e.target.classList.contains("modal-close"))
			e.target.parentElement.parentElement.parentElement.classList.remove("modal-show")
	})
}