function pintar(event, color = 'green'){
    event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
    pintar(event, 'red');
});