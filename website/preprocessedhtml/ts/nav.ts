export {}

// Create Element Variables
const navbar = document.querySelector(".topnav")
const navExpanderContainer = document.createElement("span")
const navExpander = document.createElement("i")
navExpanderContainer.append(navExpander)

// Set Element Attributes
navExpanderContainer.classList.add("nav-mobile-expander")
navExpander.classList.add("material-icons")
navExpander.innerText = "menu_open"

function swapNavExpanderText () {
	if (navExpander.innerText.indexOf("menu_open") !== -1) {
		navExpander.innerText = "close"
	} else if (navExpander.innerText.indexOf("close") !== -1) {
		navExpander.innerText = "menu_open"
	}
}

// Mousedown Event Listener
navExpanderContainer.addEventListener("mousedown", () => {
    navbar.classList.toggle("expanded")
    swapNavExpanderText();
})

// Add navExpander element to the nav bar
navbar.querySelectorAll(".nav-item")[0].prepend(navExpanderContainer)