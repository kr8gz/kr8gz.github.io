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

const random = max => Math.floor(Math.random() * max);

var x, y
document.addEventListener("mousemove", event => {
    x = event.clientX
    y = event.clientY
})

// links
const links = document.getElementById("links")

function generate_explosion() {
    var img = document.createElement("img")
    img.src = "/media/explosion.gif?reload=" + Math.random()
    img.style.left = x - 120 + "px"
    img.style.top = y - 170 + "px"
    return img
}

for (var link of links.getElementsByTagName("a")) {
    link.addEventListener("mouseover", event => {
        var a = document.createElement("a")
        a.href = event.target.getAttribute("href")
        a.style.left = "0"
        a.style.top = "0"

        var img = generate_explosion()
        a.appendChild(img)
        links.appendChild(a)
        setTimeout(() => links.removeChild(a), 1250)
    })

    link.onclick = function() {
        var img = generate_explosion()
        links.appendChild(img)
        setTimeout(() => links.removeChild(img), 1250)
    }
}

// greetings
const greeting = document.getElementById("greeting")

function generate_greeting(event) {
    event.target.innerHTML = "- " + greetings_list[random(greetings_list.length)]
}

greeting.addEventListener("mouseover", generate_greeting)
greeting.addEventListener("mousedown", generate_greeting)
