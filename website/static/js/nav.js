// Create Element Variables
var navbar = document.querySelector(".topnav");
var navExpanderContainer = document.createElement("span");
var navExpander = document.createElement("i");
navExpanderContainer.append(navExpander);
// Set Element Attributes
navExpanderContainer.classList.add("nav-mobile-expander");
navExpander.classList.add("material-icons");
navExpander.innerText = "menu_open";
function swapNavExpanderText() {
    if (navExpander.innerText.indexOf("menu_open") !== -1) {
        navExpander.innerText = "close";
    }
    else if (navExpander.innerText.indexOf("close") !== -1) {
        navExpander.innerText = "menu_open";
    }
}
// Mousedown Event Listener
navExpanderContainer.addEventListener("mousedown", function () {
    navbar.classList.toggle("expanded");
    swapNavExpanderText();
});
// Add navExpander element to the nav bar
navbar.querySelectorAll(".nav-item")[0].prepend(navExpanderContainer);
export {};
