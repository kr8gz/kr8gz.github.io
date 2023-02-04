const random = max => Math.floor(Math.random() * max);

// greeting
const greeting_list = [
    "hello :)",
    "hi :D",
    "griaß di",
    "good day!",
    "servus",
    "goedendag",
    "hey :p",
    "what's up?",
    "moin",
    "hallöchen",
    "hola",
    "你好！",
    "salut!",
    "buongiorno (puon tschorno)",
]
var last_choice = greeting_list[0]

const header = document.getElementById("header")
const greeting = document.getElementById("greeting")
const clickHint = document.getElementById("click-hint")

document.addEventListener("mousedown", event => {
    clearTimeout(clickHintTimer)
    clickHint.classList.add("fade-start")
    clickHint.classList.remove("fade-end")

    // TODO add slide in effect for the links with the hidden and visible classes
})

const clickHintTimer = setTimeout(() => {
    clickHint.classList.remove("fade-start")
    clickHint.classList.add("fade-end")
}, 3000);

header.addEventListener("mousedown", event => {
    var choice
    do {
        choice = greeting_list[random(greeting_list.length)]
    } while (choice == last_choice)
    last_choice = greeting.innerHTML = choice
})

// links
const links = document.getElementById("links")

for (var link of links.getElementsByTagName("a")) {
    link.addEventListener("mouseover", event => {
        var img = document.createElement("img")
        img.src = "/media/explosion.gif?reload=" + Math.random()
        img.style.left = event.x - 120 + "px"
        img.style.top = event.y - 170 + "px"

        new Audio("/media/boom.mp3").play()
        links.appendChild(img)
        setTimeout(() => links.removeChild(img), 1250)
    })
}

/*
TODO
- something in a corner to toggle explosions
*/
