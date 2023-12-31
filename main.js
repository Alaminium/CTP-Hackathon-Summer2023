
const canvas = document.querySelector("#Canvas");
const context = canvas.getContext("2d");

context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
function createRectangle(backgroundColor, shapelineColor, shapefillingColor, length, width) {
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, length, width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.strokeRect(length / 4, width / 4, length / 2, width / 2);
    context.fillStyle = shapefillingColor;
    context.fillRect(length / 4, width / 4, length / 2, width / 2);
}

function createTriangle(backgroundColor, shapelineColor, shapefillingColor, length, width) {
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, length, width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.fillStyle = shapefillingColor;
    context.beginPath();
    context.moveTo(length / 4, 3 * width / 4);
    context.lineTo(length / 2, width / 4);
    context.lineTo(3 * length / 4, 3 * width / 4);
    context.closePath();
    context.stroke();
    context.fill();
}

function createCircle(backgroundColor, shapelineColor, shapefillingColor, length, width) {
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, length, width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.fillStyle = shapefillingColor;
    context.beginPath();
    context.arc(length / 2, width / 2, width / 3, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
}

function createShape(shape, backgroundColor, shapelineColor, shapefillingColor, length, width) {
    if (shape === 'Rectangle') {
        createRectangle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
    else if (shape === 'Triangle') {
        createTriangle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
    else {
        createCircle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
}

function generateAbstractDrawing() {
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;

    const numberOfShapes = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < numberOfShapes; i++) {
        context.beginPath();
        const shapeType = Math.floor(Math.random() * 3);

        switch (shapeType) {
            case 0: // Random Line
                context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                break;

            case 1: // Random Quadratic Curve
                context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                context.quadraticCurveTo(
                    Math.random() * canvas.width, Math.random() * canvas.height,
                    Math.random() * canvas.width, Math.random() * canvas.height
                );
                break;

            case 2: // Random Circle
                context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 0, 2 * Math.PI);
                break;
        }

        context.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        context.stroke();
        context.closePath();
    }
}
document.getElementById("generateAbstractDrawing").addEventListener("click", generateAbstractDrawing);

function downloadCanvas() {
    console.log("Button clicked!");

    const canvas_image = canvas.toDataURL("image/jpeg");

    const downloadLink = document.createElement("a");

    downloadLink.href = canvas_image;
    downloadLink.download = "canvas_image.png";

    downloadLink.click();
}

function handleSubmit(event) {
    event.preventDefault();
    let length = document.querySelector('#length').value;
    let width = document.querySelector('#width').value;
    canvas.width = length;
    canvas.height = width;
    let shapefillingColor = document.querySelector('#shapefillingColor').value;
    let shapelineColor = document.querySelector('#shapelineColor').value;
    let backgroundColor = document.querySelector('#backgroundColor').value;
    let shape = document.querySelector('input[name="shape"]:checked').value;
    context.clearRect(0, 0, canvas.width, canvas.height);
    createShape(shape, backgroundColor, shapelineColor, shapefillingColor, length, width);
}

document.getElementById('shapeForm').addEventListener("submit", handleSubmit);
downloadButton.addEventListener("click", downloadCanvas);

document.getElementById("clearCanvasButton").addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
});