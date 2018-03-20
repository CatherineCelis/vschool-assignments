var box = document.getElementById("box");
function colorChange(color) {
    box.style.backgroundColor = color;
}


// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
var styleSwitch = function (event) {
    switch (event.type) {
        case "mouseenter":
            colorChange("blue");
            break;
        case "mousedown":
            colorChange("red");
            break;
        case "mouseup":
            colorChange("yellow");
            break;
        case "dblclick":
            colorChange("green");
            break;
        case "wheel":
            colorChange("orange");
            break;
    }
}

function keyboardCodeStyles(event) {
    switch (event.which) {
        case 66:
            colorChange("blue");
            break;
        case 82:
            colorChange("red");
            break;
        case 89:
            colorChange("yellow");
            break;
        case 71:
            colorChange("green");
            break;
        case 79:
            colorChange("orange");
            break;
    }
} 

box.addEventListener("mouseenter", styleSwitch);
box.addEventListener("mousedown", styleSwitch);
box.addEventListener("mouseup", styleSwitch);
box.addEventListener("dblclick", styleSwitch);
window.addEventListener("wheel", styleSwitch);
window.addEventListener("keyup", keyboardCodeStyles);