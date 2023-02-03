const links = document.getElementById("links")

for (var link of links.getElementsByTagName("a")) {
    link.addEventListener("mouseover", event => {
        var a = document.createElement("a")
        a.href = event.target.getAttribute("href")
        a.style.left = "0px"
        a.style.top = "0px"

        var img = document.createElement("img")
        img.src = "/media/explosion.gif?reload=" + Math.random()
        img.style.left = event.clientX - 120 + "px"
        img.style.top = event.clientY - 180 + "px"

        a.appendChild(img)
        links.appendChild(a)
        
        setTimeout(() => links.removeChild(a), 1300)
    })
}
