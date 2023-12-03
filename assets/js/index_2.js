document.addEventListener('keydown', function (event) {
    const keyDiv = document.getElementById('key');
    let newColor;

    if (event.key === 'a') {
        newColor = 'pink';
    } else if (event.key === 's') {
        newColor = 'orange';
    } else if (event.key === 'd') {
        newColor = 'lightblue';
    } else if (event.key === 'q') {
        createNewDiv('purple');
    } else if (event.key === 'w') {
        createNewDiv('gray');
    } else if (event.key === 'e') {
        createNewDiv('brown');
    }

    if (newColor) {
        keyDiv.style.backgroundColor = newColor;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}