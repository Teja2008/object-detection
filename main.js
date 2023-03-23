img="s"
status=""
object=[]
function setup(){
    canvas=createCanvas(380,380)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(380,380)
    video.hide();
   
    
}
function start(){
    object_Detector= ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML= "status:detecting objects"
}

function draw(){

    image(video,0,0,380,380)
  if(status!=""){
    r=random(255)
    g=random(255)
    b=random(255)
    object_Detector.detect(video,gotResults)
    for(n=0; n<object.length; n++){
        console.log(n)
        document.getElementById("status").innerHTML = "status = object detected"
        document.getElementById("status").innerHTML = "no.of object "+ object.length
        fill(r,g,b);
        percent= floor(object[n].confidence*100)
        text(object[n].label+ percent+"%", object[n].x, object[n].y)
        noFill()
        stroke(r,g,b)
        rect(object[n].x,object[n].y,object[n].width,object[n].height)

    }
  }
}
function modelLoaded(){
    console.log("model loaded")
    status = true
    }

    function gotResults(error,results){
        if(error){
            console.log(error)
        }
        console.log(results)
        object=results


    }
