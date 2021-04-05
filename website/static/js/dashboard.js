var navbar = document.querySelector(".sidenav");
var navExpanderContainer = document.createElement("div");
var navExpanderIcon = document.createElement("span");
navExpanderContainer.classList.add("nav-expander-container");
navExpanderIcon.classList.add("material-icons");
navExpanderIcon.innerText = "menu_open";
navExpanderContainer.append(navExpanderIcon);
navbar.prepend(navExpanderContainer);
navbar.classList.toggle("expanded");
navExpanderContainer.addEventListener("mousedown", function (e) {
    navbar.classList.toggle("expanded");
    navExpanderIcon.innerText =
        (navExpanderIcon.innerText == "menu_open") ?
            "close" :
            "menu_open";
});
export {};
