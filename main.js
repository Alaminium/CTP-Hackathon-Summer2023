const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function createRectangle(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle(backgroundColor);
    context.fillRect(0,0,length,width);
    context.strokeStyle(shapelineColor);
    context.fillStyle(shapefillingColor);
    context.fillRect(length/2,width/2,length/3,width/4);
}

function createTrinagle(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle(backgroundColor);
    context.fillRect(0,0,length,width);
    context.beginPath();
    context.strokeStyle(shapelineColor);
    context.fillStyle(shapefillingColor);
    context.moveTo();
    context.lineTo();
    context.lineTo();
    context.fill();
}

function createCirlce(backgroundColor, shapelineColor, shapefillingColor, length, width){
    context.fillStyle(backgroundColor);
    context.fillRect(0,0,length,width);
    context.beginPath();
    context.strokeStyle(shapelineColor);
    context.fillStyle(shapefillingColor);
    context.fill();
    context.arc(length/2,width/2,width/2,0,2*Math.PI);
    context.stroke();
}