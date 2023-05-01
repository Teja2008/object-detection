function preload(){
    picture= loadImage('bottle.jpg')
}
function setup(){
    canvas= createCanvas(600,600)
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd',modelLoaded)
}
function draw(){
image(pic,0,0,600,600)
console.log("bottle")
}
function modelLoaded(){
    console.log("detecting")
}