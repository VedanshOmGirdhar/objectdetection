img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420 );
canvas.center();
object_Detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function preload(){
    img = loadImage("dog_cat.jpg");

}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 65, 75);
    textSize(20)
    noFill();
    stroke("#FF0000");
    rect(50, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);


}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(img, gotResults());
}

function gotResults(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
  }
}

