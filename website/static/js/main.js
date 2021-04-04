var theme;
(function (theme) {
    theme[theme["light"] = 0] = "light";
    theme[theme["dark"] = 1] = "dark";
})(theme || (theme = {}));
var currentTheme;
var defaultTheme;
var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
    defaultTheme = theme.dark;
else
    defaultTheme = theme.light;
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
window.onload = function () {
    loadTheme();
    document.querySelector(".js-current-year").innerHTML = new Date().getFullYear().toString();
    document.onkeydown = keydown;
    function keydown(evt) {
        if (!evt)
            evt = event;
        if (evt.altKey && (evt.keyCode === 192)) {
            toggleTheme();
        }
    }
    document.getElementById("toggleTheme").addEventListener("mouseup", function (e) {
        toggleTheme();
    });
};
export {};
