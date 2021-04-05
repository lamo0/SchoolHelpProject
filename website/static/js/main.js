// Variables
var theme;
(function (theme) {
    theme[theme["light"] = 0] = "light";
    theme[theme["dark"] = 1] = "dark";
})(theme || (theme = {}));
var currentTheme;
var defaultTheme;
var opened = null;
var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
    defaultTheme = theme.dark;
else
    defaultTheme = theme.light;
// Functions
var saveTheme = function () {
    localStorage['currentTheme'] = JSON.stringify(currentTheme);
};
var loadTheme = function () {
    if (localStorage['currentTheme'])
        currentTheme = JSON.parse(localStorage['currentTheme']);
    else
        currentTheme = defaultTheme;
    document.querySelector("body").classList.add(theme[currentTheme]);
};
var switchTheme = function (newTheme) {
    currentTheme = newTheme;
    saveTheme();
    document.querySelector("body").removeAttribute("class");
    document.querySelector("body").classList.add(theme[currentTheme]);
};
var toggleTheme = function () {
    (currentTheme != theme.light) ? switchTheme(theme.light) : switchTheme(theme.dark);
};
var toggleDropdownVisibility = function (e) { return e.classList.toggle('dropdown-show'); };
var handleDropdown = function (e) {
    var clickedItem = e.parentElement.lastChild.previousSibling;
    toggleDropdownVisibility(clickedItem);
    if (!opened)
        opened = clickedItem;
    else if (opened == clickedItem)
        opened = null;
    else {
        toggleDropdownVisibility(opened);
        opened = clickedItem;
    }
};
var handleClick = function (e) {
    if (e.target.className.includes("dropdown"))
        handleDropdown(e.target);
    else if (opened) {
        toggleDropdownVisibility(opened);
        opened = null;
    }
};
window.onload = function () {
    loadTheme();
    if (document.querySelector(".js-current-year") != (null || undefined))
        document.querySelector(".js-current-year").innerHTML = new Date().getFullYear().toString();
    // Event Listeners
    document.onkeydown = keydown;
    function keydown(evt) {
        if (!evt)
            evt = event;
        if (evt.altKey && (evt.keyCode === 192)) {
            toggleTheme();
        }
    }
    if (document.getElementById("toggleTheme") != (null || undefined))
        document.getElementById("toggleTheme").addEventListener("mouseup", toggleTheme);
    for (var i = 0; i < document.querySelectorAll(".dropdown-changable-item").length; i++)
        document.querySelectorAll(".dropdown-changable-item")[i].addEventListener("click", function (e) {
            var target = e.target;
            target.parentElement.parentElement.querySelector(".dropdown-activator").innerText = target.getAttribute("value");
            target.parentElement.parentElement.querySelector(".dropdown-activator").setAttribute("value", target.getAttribute("value"));
        });
    document.addEventListener('click', handleClick);
};
export {};
