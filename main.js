function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    object_Detector= ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML= "status:detecting objects"
    
}
function preload(){
    img= loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420)
   fill("blue")
   text("dog",50,50)
   noFill()
   stroke("blue")
   rect(50,50,400,300)
  
   fill("yellow")
   text("cat",50,50)
   noFill()
   stroke("yellow")
   rect(50,50,400,300)
}
function modelLoaded(){
    console.log("model loaded")
    status = true
    object_Detector.detect(img,gotResults)}

    function gotResults(error,results){
        if(error){
            console.log(error)
        }
        console.log(results)


    }