function preload(){
    img= loadImage('clock.jpg')
}
function setup(){
    canvas= createCanvas(600,600)
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd',modelLoaded)
}
function draw(){
image(img,0,0,600,600)
console.log("clock")
}
function modelLoaded(){
    console.log("detecting")
}