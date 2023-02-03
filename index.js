const random = max => Math.floor(Math.random() * max);

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

header.addEventListener("mousedown", event => {
    var greeting = document.getElementById("greeting")
    var choice
    do {
        choice = greeting_list[random(greeting_list.length)]
    } while (choice == last_choice)
    last_choice = greeting.innerHTML = choice
})

/*

TODO
- click hint at header
- something in a corner to toggle explosions

*/
