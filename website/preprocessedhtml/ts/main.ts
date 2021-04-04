export {}

enum theme {light, dark}

let currentTheme:theme
let defaultTheme:theme

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
    defaultTheme = theme.dark
else 
    defaultTheme = theme.light

const saveTheme = () => {
    localStorage['currentTheme'] = JSON.stringify(currentTheme)
}

const loadTheme = () => {
    if (localStorage['currentTheme'])
        currentTheme = JSON.parse(localStorage['currentTheme'])
    else 
        currentTheme = defaultTheme
    document.querySelector("body").classList.add(theme[currentTheme])
}

const switchTheme = (newTheme:theme) => {
    currentTheme = newTheme
    saveTheme()
    document.querySelector("body").removeAttribute("class")
    document.querySelector("body").classList.add(theme[currentTheme])
}

const toggleTheme = () => {
    (currentTheme != theme.light) ? switchTheme(theme.light) : switchTheme(theme.dark)
}

window.onload = () => {
    loadTheme()
    document.querySelector(".js-current-year").innerHTML = new Date().getFullYear().toString()

    document.onkeydown = keydown; 
    function keydown (evt) { 
        if (!evt) evt = event; 
        if (evt.altKey && (evt.keyCode === 192)) { 
            toggleTheme()
        } 
    }

    document.getElementById("toggleTheme").addEventListener("mouseup", e => {
        toggleTheme()
    })
}