function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    
}
function preload(){
    img= loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420)
   fill("blue")
   nofill()
   text("dog,cat")
   stroke("blue")
   rect(50,50,400,300)
}
