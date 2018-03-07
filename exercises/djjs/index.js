var box = document.getElementById("box");
box.addEventListener("onmouseover", colorChange)

function colorChange() {
    box.style.backgroundColor = "blue"
}
// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).