
// Addition of topbar into the heading
const addTopbar = () => {
    
    const div = document.createElement("div")
    const brand = document.createElement("h1")
    const button = document.createElement("button")

    button.textContent = "Change Theme";
    button.onclick = () => changeTheme()
    brand.textContent = "BEACHES.";
    div.appendChild(brand)
    div.appendChild(button)
    div.classList.add("topbar")

    const body = document.querySelector("body")

    body.insertBefore(div, body.querySelector("header"))
}
addTopbar()



// Change the theme from darkmode to light
const changeTheme = () => {
    if (localStorage.theme !== 'dark' || (!('theme' in localStorage))) {
        localStorage.setItem("theme", "dark")
        document.documentElement.classList.add('dark')
    } else {
        localStorage.removeItem("theme")
        document.documentElement.classList.remove('dark')
    }
}

const checkTheme = () => {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
    }
}
checkTheme()



// Addition of images from unsplash into the html
const images = [
    "https://images.unsplash.com/photo-1610056352054-a68fe4f998e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxXaGl0ZWhhdmVuJTIwQmVhY2glMkMlMjBBdXN0cmFsaWF8ZW58MHx8fHwxNzE3ODc1Njg1fDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1545244407-25f1617c865b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxHcmFjZSUyMEJheSUyQyUyMFR1cmtzJTIwYW5kJTIwQ2FpY29zfGVufDB8fHx8MTcxNzg3ODE1Mnww&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxCYWlhJTIwZG8lMjBTYW5jaG8lMkMlMjBCcmF6aWx8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1532189406528-86316fa63c4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxOYXZhZ2lvJTIwQmVhY2glMkMlMjBHcmVlY2V8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1608503120873-61c4643f96b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxQbGF5YSUyMFBhcmFpc28lMkMlMjBNZXhpY298ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1519549204475-438065bd441a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxBbnNlJTIwU291cmNlJTIwZCUyN0FyZ2VudCUyQyUyMFNleWNoZWxsZXN8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxTZXZlbiUyME1pbGUlMjBCZWFjaCUyQyUyMENheW1hbiUyMElzbGFuZHN8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1532408840957-031d8034aeef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxCb3JhJTIwQm9yYSUyQyUyMEZyZW5jaCUyMFBvbHluZXNpYXxlbnwwfHx8fDE3MTc4NzgxNTJ8MA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1546948630-1149ea60dc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxMYW5pa2FpJTIwQmVhY2glMkMlMjBIYXdhaWl8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1586809764311-090bc6068916?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxQaW5rJTIwU2FuZHMlMjBCZWFjaCUyQyUyMEJhaGFtYXN8ZW58MHx8fHwxNzE3ODc4MTUyfDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1545244407-25f1617c865b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MjA1MzJ8MHwxfHNlYXJjaHwxfHxHcmFjZSUyMEJheSUyQyUyMFR1cmtzJTIwYW5kJTIwQ2FpY29zfGVufDB8fHx8MTcxNzg3ODE1Mnww&ixlib=rb-4.0.3&q=85",
        
]

const addImgs = () => {

    const beaches = document.querySelectorAll("li")

    console.log(beaches)

    for(i=0; i<beaches.length; i++) {
        const div = document.createElement("div")
        div.classList.add("beach-img")
        div.style = `background-image: url("${images[i]}`;
        beaches[i].insertBefore(div, beaches[i].querySelector("h3"))
    }
}

addImgs()