const images = [
    "chihiro014.jpg",
    "chihiro042.jpg",
    "chihiro043.jpg",
    "ponyo001.jpg",
    "ponyo012.jpg",
    "ponyo017.jpg",
    "totoro001.jpg",
    "totoro024.jpg",
    "totoro029.jpg",
]

const chosnImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosnImage}`

document.body.appendChild(bgImage)