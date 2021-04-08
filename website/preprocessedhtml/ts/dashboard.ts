export {}
const navbar = document.querySelector(".sidenav")
const navExpanderContainer = document.createElement("div")
const navExpanderIcon = document.createElement("span")

navExpanderContainer.classList.add("nav-expander-container")
navExpanderIcon.classList.add("material-icons")
navExpanderIcon.innerText = "menu_open"

navExpanderContainer.append(navExpanderIcon)
navbar.prepend(navExpanderContainer)

navbar.classList.toggle("expanded")
navExpanderContainer.addEventListener("mousedown", e => {
    navbar.classList.toggle("expanded")
    navExpanderIcon.innerText = 
        (navExpanderIcon.innerText == "menu_open") ?
            "close" :
            "menu_open"
})

const navNotification = document.querySelector(".dashboard-topnav-item-notifications")

navNotification.addEventListener("click", e => {
    // Notifications was clicked
})

// -------------------------------------------------------------------------- //

const calendar = document.querySelector(".dashboard-calendar")
const nextMonth = document.querySelector("#month-next")
const lastMonth = document.querySelector("#month-last")
const monthLabel = document.querySelector("#month-label")
