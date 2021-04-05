export {}
// Variables
enum theme {light, dark}

let currentTheme:theme
let defaultTheme:theme

let opened:any = null

const prefersDarkScheme:any = window.matchMedia("(prefers-color-scheme: dark)")

if (prefersDarkScheme.matches)
    defaultTheme = theme.dark
else
    defaultTheme = theme.light

// Functions
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

const toggleDropdownVisibility = e => e.classList.toggle('dropdown-show')

const handleDropdown = e => {
    const clickedItem = e.parentElement.lastChild.previousSibling

    toggleDropdownVisibility(clickedItem)

    if (!opened) 
        opened = clickedItem
    else if (opened == clickedItem)
        opened = null
     else {
        toggleDropdownVisibility(opened)
        opened = clickedItem
    }
}

const handleClick = e => {
    if (e.target.className.includes("dropdown"))
        handleDropdown(e.target)
    else if (opened) {
        toggleDropdownVisibility(opened)
        opened = null
    }
}

window.onload = () => {
    loadTheme()

    if (document.querySelector(".js-current-year") != (null || undefined))
        document.querySelector(".js-current-year").innerHTML = new Date().getFullYear().toString()

    // Event Listeners
    document.onkeydown = keydown
    function keydown (evt) { 
        if (!evt) evt = event; 
        if (evt.altKey && (evt.keyCode === 192)) { 
            toggleTheme()
        } 
    }

    if (document.getElementById("toggleTheme") != (null || undefined))
        document.getElementById("toggleTheme").addEventListener("mouseup", toggleTheme)

    for (let i = 0; i < document.querySelectorAll(".dropdown-changable-item").length; i++)
        document.querySelectorAll(".dropdown-changable-item")[i].addEventListener("click", e => {
            let target:any = e.target

            target.parentElement.parentElement.querySelector(".dropdown-activator").innerText = target.getAttribute("value")
            target.parentElement.parentElement.querySelector(".dropdown-activator").setAttribute("value", target.getAttribute("value"))
        })

    document.addEventListener('click', handleClick)
}