img="s"
status=""
object=[]
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
  if(status!=""){
    for(n=0; n<object.length; n++){
        console.log(n)
        document.getElementById("staus").innerHTML = "status = object detected"
        fill("blue");
        percent= floor(object[n].confidence*100)
        text(object[n].label+ percent+"%", object[n].x, object[n].y)
        noFill()
        stroke("blue")
        rect(object[n].x,object[n].y,object[n].width,object[n].height)

    }
  }
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
        object=results


    }