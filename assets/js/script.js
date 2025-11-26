function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function(event) {
    pintar(event.target, "yellow");
});