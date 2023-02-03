const random = max => Math.floor(Math.random() * max);

// links
const links = document.getElementById("links")

for (var link of links.getElementsByTagName("a")) {
    link.addEventListener("mouseover", event => {
        var a = document.createElement("a")
        a.href = event.target.getAttribute("href")
        a.style.left = "0"
        a.style.top = "0"

        var img = document.createElement("img")
        img.src = "/media/explosion.gif?reload=" + Math.random()
        img.style.left = event.x - 120 + "px"
        img.style.top = event.y - 170 + "px"

        a.appendChild(img)
        links.appendChild(a)
        setTimeout(() => links.removeChild(a), 1250)
    })
}

// greetings
const greetings_list = [
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
var last_choice = greetings_list[0]

const greetings = document.getElementById("greetings")

greetings.addEventListener("mousedown", event => {
    var greeting = document.getElementById("greeting")
    var choice
    do {
        choice = greetings_list[random(greetings_list.length)]
    } while (choice == last_choice)
    greeting.innerHTML = "- " + choice
    last_choice = choice
})
