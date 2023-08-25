let shape = "";
let backgroundColor;
let shapelineColor;
let shapefillingColor;
let length;
let width;

const canvas = document.querySelector("#Canvas");
const context = canvas.getContext("2d");

function createRectangle(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle = backgroundColor;
    context.fillRect(0,0,length,width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.strokeRect(length/4,width/4,length/2,width/2);
    context.fillStyle = shapefillingColor;
    context.fillRect(length/4,width/4,length/2,width/2);
}

function createTriangle(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle = backgroundColor;
    context.fillRect(0,0,length,width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.fillStyle = shapefillingColor;
    context.beginPath();
    context.moveTo(length/4, 3*width/4);
    context.lineTo(length/2, width/4);
    context.lineTo(3 *length/4 , 3*width/4);
    context.closePath();
    context.stroke();
    context.fill();
}

function createCircle(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle = backgroundColor;
    context.fillRect(0,0,length,width);
    context.lineWidth = 10;
    context.strokeStyle = shapelineColor;
    context.fillStyle = shapefillingColor;
    context.beginPath();
    context.arc(length/2,width/2,width/3,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
}

function createShape(shape, backgroundColor, shapelineColor, shapefillingColor, length, width){
    if(shape === 'Rectangle'){
        createRectangle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
    else if(shape === 'Triangle'){
        createTriangle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
    else{
        createCircle(backgroundColor, shapelineColor, shapefillingColor, length, width);
    }
}

function downloadCanvas() {
    console.log("Button clicked!");

    const canvas_image = canvas.toDataURL("image/jpeg");
    
    const downloadLink = document.createElement("a");

    downloadLink.href = canvas_image;
    downloadLink.download = "canvas_image.png"; 

    downloadLink.click();
}

document.getElementById("shapeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    shape = document.querySelector('input[name="shape"]:checked').value;
    createShape(shape,'green', 'blue', 'yellow', 2000, 1000);
});


downloadButton.addEventListener("click", downloadCanvas);